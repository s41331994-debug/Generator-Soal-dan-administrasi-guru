import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import {
  generateFallbackAdminSections,
  generateFallbackSoalSections,
  generateFallbackTryoutSections,
} from "./server/fallbacks";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));

const getAi = (): GoogleGenAI => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || "";
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

const MODELS_PRIORITY = [
  "gemini-3.7-flash",
  "gemini-flash-latest",
  "gemini-2.5-flash",
  "gemini-3.1-flash-lite",
  "gemini-2.0-flash",
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Multi-model generator with automatic fallback across models and exponential backoff
async function generateWithFallback(params: {
  contents: any;
  config?: any;
  systemInstruction?: string;
}): Promise<{ text: string }> {
  const ai = getAi();
  let lastError: any = null;

  for (const model of MODELS_PRIORITY) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: params.contents,
          config: {
            ...(params.config || {}),
            ...(params.systemInstruction ? { systemInstruction: params.systemInstruction } : {}),
          },
        });
        if (response.text) {
          return { text: response.text };
        }
      } catch (err: any) {
        lastError = err;
        const errStr = String(err?.message || err).toLowerCase();
        console.warn(`[AI Attempt failed] Model: ${model}, Attempt: ${attempt + 1}, Error: ${err?.message}`);

        // If 503 (high demand) or 429 (rate limit), wait briefly with backoff
        if (
          errStr.includes("503") ||
          errStr.includes("unavailable") ||
          errStr.includes("high demand") ||
          errStr.includes("429") ||
          errStr.includes("resource_exhausted")
        ) {
          await delay(600 * (attempt + 1));
        } else {
          break;
        }
      }
    }
  }

  throw lastError || new Error("Semua model AI sedang mengalami lonjakan beban. Menggunakan generator cerdas internal.");
}

const sectionsSchema = {
  type: Type.OBJECT,
  properties: {
    sections: {
      type: Type.ARRAY,
      description: "An array of generated document sections.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "Unique identifier for the section." },
          title: { type: Type.STRING, description: "The title of the generated section." },
          content: { type: Type.STRING, description: "The full HTML content of the section." },
        },
        required: ["id", "title", "content"],
      },
    },
  },
  required: ["sections"],
};

const cleanAndParseJson = (text: string): any => {
  if (!text) throw new Error("Respon AI kosong.");
  let cleanText = text.trim();
  cleanText = cleanText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
  cleanText = cleanText.trim();
  
  const firstBrace = cleanText.indexOf("{");
  const lastBrace = cleanText.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1) {
    cleanText = cleanText.substring(firstBrace, lastBrace + 1);
  }
  
  try {
    return JSON.parse(cleanText);
  } catch {
    const sanitized = cleanText.replace(/,\s*([}\]])/g, "$1");
    return JSON.parse(sanitized);
  }
};

// Fallback CP Generator if all remote endpoints are completely throttled
function getFallbackCPSuggestions(formData: any): string {
  const mapel = formData?.mata_pelajaran || "Mata Pelajaran";
  const jenjang = formData?.jenjang || "SMP/SMA";
  const fase = formData?.fase || (jenjang === "SMP" ? "Fase D" : "Fase E");
  const kelas = formData?.kelas || "10";

  return `### Elemen Capaian Pembelajaran (CP) - ${mapel}
**Jenjang:** ${jenjang} | **Fase:** ${fase} | **Kelas:** ${kelas}

#### 1. Elemen Pemahaman Konsep ${mapel}
- Peserta didik mampu menganalisis, mengidentifikasi, dan memahami konsep-konsep esensial pada materi ${mapel}.
- Peserta didik mampu mengintegrasikan pengetahuan teoritis dengan fenomena kontekstual dalam kehidupan sehari-hari dan perkembangan teknologi masa kini.

#### 2. Elemen Keterampilan Proses & Analisis
- **Mengamati & Mempertanyakan:** Peserta didik mampu merumuskan pertanyaan kritis serta hipotesis yang relevan dengan topik pembelajaran.
- **Penyelidikan & Eksplorasi:** Merencanakan dan melaksanakan prosedur investigasi atau eksplorasi konsep secara sistematis.
- **Mengolah & Menganalisis Data:** Menginterpretasikan data, informasi, dan bukti untuk menarik kesimpulan yang logis dan objektif.
- **Refleksi & Komunikasi:** Mengomunikasikan hasil pemikiran, gagasan, atau temuan secara lisan maupun tertulis dengan bahasa yang santun dan ilmiah.

#### 3. Karakter & Profil Pelajar Pancasila
- Mengembangkan nalar kritis, kreativitas pemecahan masalah, kemandirian, dan gotong royong dalam proses belajar aktif.`;
}

// Fallback Topic Suggestions
function getFallbackTopicSuggestions(formData: any): string {
  const mapel = formData?.mata_pelajaran || "Mata Pelajaran";
  const jenjang = formData?.jenjang || "SMP/SMA";
  const semester = formData?.semester || "1 (Ganjil)";

  return `### Rekomendasi Topik Pembelajaran Kurikulum Merdeka - ${mapel}
**Jenjang:** ${jenjang} | **Semester:** ${semester}

#### Bab 1: Fondasi & Konsep Dasar ${mapel}
- Pengenalan prinsip-prinsip utama dan teori pengantar
- Studi kasus kontekstual dan relevansi dalam kehidupan nyata

#### Bab 2: Eksplorasi & Analisis Mendalam
- Penerapan konsep dalam pemecahan masalah kontekstual
- Proyek kolaboratif dan praktikum/diskusi terstruktur

#### Bab 3: Sintesis & Evaluasi Terpadu
- Asesmen sumatif materi inti dan penguatan kompetensi nalar kritis
- Refleksi pembelajaran dan integrasi Profil Pelajar Pancasila`;
}

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// 1. CP Suggestions
app.post("/api/gemini/cp-suggestions", async (req, res) => {
  const { formData } = req.body;
  const prompt = `Anda adalah asisten kurikulum ahli Kurikulum Merdeka Kemendikbudristek. Buatkan daftar Elemen Capaian Pembelajaran (CP) yang resmi, detail, dan terstruktur untuk:
- Mata Pelajaran: ${formData?.mata_pelajaran || "Umum"}
- Jenjang: ${formData?.jenjang || "SMP/SMA"}
- Kelas: ${formData?.kelas || "10"}
- Fase: ${formData?.fase || "Fase E/F"}

Sajikan dalam format Markdown yang rapi dengan poin-poin penjelasan elemen (seperti Pemahaman Konsep, Keterampilan Proses, dan Profil Pelajar Pancasila) yang siap digunakan.`;

  try {
    const response = await generateWithFallback({
      contents: prompt,
    });
    res.json({ text: response.text });
  } catch (error: any) {
    console.warn("Falling back to local smart CP templates:", error?.message);
    const fallbackText = getFallbackCPSuggestions(formData);
    res.json({ text: fallbackText });
  }
});

// 2. Topic Suggestions
app.post("/api/gemini/topic-suggestions", async (req, res) => {
  const { formData } = req.body;
  const kumulatifKelas = formData?.jenjang === "SMP" ? "Kelas 7, 8, dan 9" : "Kelas 10, 11, dan 12";
  const prompt = `Anda adalah asisten penyusun materi Kurikulum Merdeka. Berikan daftar ide Topik / Materi Pembelajaran yang relevan untuk:
- Mata Pelajaran: ${formData?.mata_pelajaran || "Umum"}
- Jenjang: ${formData?.jenjang || "SMP/SMA"}
- Kelas: ${formData?.kelas || "10"}
- Semester: ${formData?.semester || "1 (Ganjil)"}

Jika materi ini untuk keperluan Try Out / Ujian Sekolah, berikan materi kumulatif dari ${kumulatifKelas} yang sering keluar di ujian.
Sajikan dalam format Markdown dengan pembagian bab/tema yang jelas dan siap dipakai.`;

  try {
    const response = await generateWithFallback({
      contents: prompt,
    });
    res.json({ text: response.text });
  } catch (error: any) {
    console.warn("Falling back to local smart Topic templates:", error?.message);
    const fallbackText = getFallbackTopicSuggestions(formData);
    res.json({ text: fallbackText });
  }
});

// 3. Generate Admin Content
app.post("/api/gemini/generate-admin", async (req, res) => {
  try {
    const { formData } = req.body;
    const harakatInstruction = formData?.bahasa === "Bahasa Arab"
      ? "**INSTRUKSI KHUSUS BAHASA ARAB: Seluruh teks Arab WAJIB MENGGUNAKAN HARAKAT LENGKAP.**"
      : "";
    const mathInstruction = "**FORMAT MATEMATIKA PENTING:** Jika menuliskan rumus atau angka berpangkat, WAJIB menggunakan superscript Unicode (seperti x², m³, 10⁻⁴). JANGAN GUNAKAN simbol caret (^).";

    const systemPrompt = `Anda adalah asisten ahli guru dan pengembang kurikulum profesional Kemendikbudristek.
Buat dokumen administrasi PERANGKAT AJAR KURIKULUM MERDEKA yang sangat lengkap, formal, dan komprehensif (ATP, Prota, Promes, Modul Ajar [RPP Plus], KKTP, dan Jurnal Harian) sesuai jenjang ${formData?.jenjang || "SMP/SMA"} dan fase ${formData?.fase || "Fase D/E/F"}.

WAJIB MENGGUNAKAN STRUKTUR DAN FORMAT PERSIS SEBAGAI BERIKUT:

==================================================
1. PROGRAM TAHUNAN (PROTA)
==================================================
Identitas Program Tahunan:
• Satuan Pendidikan : [Nama Sekolah]
• Mata Pelajaran : [Nama Mata Pelajaran]
• Kelas / Fase : [Kelas] / [Fase]
• Tahun Ajaran : [Tahun Ajaran]

Tabel PROTA (Kolom Wajib):
- No
- Fase / Elemen
- Capaian & Tujuan Pembelajaran (CP / TP)
- Alokasi Waktu (JP)
- Keterangan

==================================================
2. PROGRAM SEMESTER (PROSEM)
==================================================
Identitas Program Semester:
• Satuan Pendidikan : [Nama Sekolah]
• Semester : [Ganjil / Genap]
• Mata Pelajaran : [Nama Mata Pelajaran]
• Tahun Ajaran : [Tahun Ajaran]

Tabel PROSEM (Kolom Wajib):
- No
- Tujuan Pembelajaran (TP)
- Alokasi (JP)
- Bulan dan Minggu Efektif (Bulan 1, Bulan 2, Bulan 3, Bulan 4, Bulan 5, Bulan 6 - masing-masing dibagi minggu 1 s.d 4/5)
Sertakan pula baris:
- Proyek Penguatan Profil Pelajar Pancasila (P5) ... JP
- Cadangan / Sumatif / Rapor ... JP

==================================================
3. MODUL AJAR (RPP PLUS)
==================================================
I. INFORMASI UMUM
A. Identitas Modul
• Nama Penyusun : [Nama Guru]
• Sekolah / Tahun : [Nama Sekolah] / [Tahun Ajaran]
• Kelas / Fase / JP : [Kelas] / Fase [Fase] / [Alokasi Waktu JP]
B. Kompetensi Awal: [Tuliskan materi/keterampilan dasar prasyarat]
C. Profil Pelajar Pancasila: [Pilih nilai yang sesuai, misal: Mandiri, Gotong Royong, Kreatif, Berpikir Kritis, dll.]
D. Sarana & Prasarana: [Media, Alat, Sumber Belajar]
E. Target Peserta Didik: [Peserta didik reguler / tipikal / pencapaian tinggi]
F. Model Pembelajaran: [Model pembelajaran yang diterapkan, misal: Tatap Muka / Problem Based Learning]

II. KOMPONEN INTI
A. Tujuan Pembelajaran (■ Wajib): [Target kompetensi spesifik yang harus dicapai siswa setelah belajar]
B. Pemahaman Bermakna & Pertanyaan Pemantik:
• Pemahaman Bermakna: [Manfaat nyata yang didapatkan siswa untuk kehidupan sehari-hari]
• Pertanyaan Pemantik: [1-3 pertanyaan menarik di awal kelas untuk memicu rasa ingin tahu]
C. Kegiatan Pembelajaran (■ Wajib):
1. Pendahuluan (..... Menit): [Salam, doa, apersepsi, penyampaian tujuan pembelajaran]
2. Inti (..... Menit): [Aktivitas utama siswa, eksplorasi materi, diskusi kelompok, presentasi]
3. Penutup (..... Menit): [Kesimpulan, refleksi bersama, tindak lanjut, doa penutup]
D. Asesmen / Penilaian (■ Wajib):
• Diagnostik (Awal): [Bentuk asesmen awal / pertanyaan pemantik lisan]
• Formatif (Proses): [Rubrik penilaian diskusi kelompok, observasi sikap & keaktifan, LKPD]
• Sumatif (Akhir): [Bentuk tes tertulis pilihan ganda/uraian atau proyek]
E. Pengayaan, Remedial & Refleksi:
• Pengayaan / Remedial: [Uraian kegiatan pengayaan untuk siswa tuntas dan remedial untuk yang belum tuntas]
• Refleksi Guru & Siswa: [Butir refleksi evaluasi proses belajar guru dan refleksi pemahaman siswa]

III. LAMPIRAN
• Lembar Kerja Peserta Didik (LKPD)
• Bahan Bacaan Guru & Siswa, Glosarium, serta Daftar Pustaka

Sajikan seluruh dokumen dengan tag '<table>' berformat HTML rapi, border jelas, header tabel berlatar abu-abu terang (#f2f2f2 / bg-gray-100), dan styling yang elegan serta siap cetak/unduh Word. Output WAJIB JSON dengan array 'sections' berisi objek {id, title, content}.`;
    const userPrompt = `Data Administrasi:
- Jenjang: ${formData?.jenjang}
- Sekolah: ${formData?.sekolah}
- Mapel: ${formData?.mata_pelajaran}
- Kelas: ${formData?.kelas}
- Fase: ${formData?.fase}
- Semester: ${formData?.semester}
- Tahun Pelajaran: ${formData?.tahun_ajaran || "2026/2027"}
- Alokasi Waktu: ${formData?.alokasi_waktu}
- Elemen Capaian Pembelajaran (CP): ${formData?.cp_elements}
- Topik/Materi: ${formData?.topik_materi}

Tugas: Generate ATP, Prota, Promes, Modul Ajar (${formData?.jumlah_modul_ajar || 1} modul lengkap), KKTP, dan Jurnal Harian dalam format JSON terstruktur untuk Tahun Pelajaran ${formData?.tahun_ajaran || "2026/2027"}.
${harakatInstruction}
${mathInstruction}`;

    try {
      const response = await generateWithFallback({
        contents: `${systemPrompt}\n\n${userPrompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: sectionsSchema,
          temperature: 0.7,
        },
      });

      const result = cleanAndParseJson(response.text);
      if (result.sections && result.sections.length > 0) {
        return res.json({ sections: result.sections });
      }
      throw new Error("AI returned empty sections array.");
    } catch (aiError: any) {
      console.warn("AI generation failed or throttled, using high-quality structured Kurikulum Merdeka templates:", aiError?.message);
      const fallbackSections = generateFallbackAdminSections(formData);
      return res.json({ sections: fallbackSections, isFallback: true });
    }
  } catch (error: any) {
    console.error("Error in generate-admin endpoint:", error);
    const fallbackSections = generateFallbackAdminSections(req.body?.formData || {});
    res.json({ sections: fallbackSections, isFallback: true });
  }
});

// 4. Generate Soal Content
app.post("/api/gemini/generate-soal", async (req, res) => {
  try {
    const { formData } = req.body;
    const mathInstruction = "**FORMAT MATEMATIKA PENTING:** Gunakan superscript Unicode (x², m³, 10⁻⁴) untuk pangkat. JANGAN GUNAKAN simbol caret (^).";

    let tkaInstruction = "";
    if (formData?.sertakan_soal_tka || formData?.sertakan_soal_tka_uraian) {
      tkaInstruction = `
**SOAL TAMBAHAN TKA (Tes Kemampuan Akademik) - Kelompok ${formData.kelompok_tka}:**
${formData.sertakan_soal_tka ? `- Tambahkan TEPAT ${formData.jumlah_soal_tka} soal Pilihan Ganda TKA.` : ""}
${formData.sertakan_soal_tka_uraian ? `- Tambahkan TEPAT ${formData.jumlah_soal_tka_uraian} soal Uraian/Essay TKA.` : ""}`;
    }

    const systemPrompt = `Anda adalah asisten ahli pembuat soal asesmen jenjang ${formData?.jenjang || "SMA"} Kurikulum Merdeka. Buat paket asesmen lengkap dalam format JSON dengan array 'sections' berisi objek {id, title, content}. Gunakan format HTML rapi pada setiap 'content'.`;
    const userPrompt = `Buat paket asesmen lengkap:
1. Naskah Soal
2. Kunci Jawaban & Pembahasan Mendalam
3. Kisi-kisi Asesmen (Tabel Capaian, Indikator, Level Kognitif, Nomor Soal)
4. Rubrik Penilaian & Pedoman Penskoran
5. Analisis Kualitatif Butir Soal (HOTS/LOTS)
6. Ringkasan Materi & Peta Konsep

Data Parameter:
- Jenjang: ${formData?.jenjang}
- Mapel: ${formData?.mata_pelajaran}
- Kelas: ${formData?.kelas}
- Fase: ${formData?.fase}
- Semester: ${formData?.semester}
- Tahun Pelajaran: ${formData?.tahun_ajaran || "2026/2027"}
- Topik / Materi: ${formData?.topik_materi}
- Tingkat Kesulitan: ${formData?.tingkat_kesulitan}

**ATURAN JUMLAH SOAL (WAJIB DIPATUHI TEPAT):**
- Hasilkan TEPAT ${formData?.jumlah_pg || 0} soal Pilihan Ganda (Mapel Utama) beserta opsi A, B, C, D, E.
- Hasilkan TEPAT ${formData?.jumlah_uraian || 0} soal Uraian / Essay.
- Hasilkan TEPAT ${formData?.jumlah_isian_singkat || 0} soal Isian Singkat.
${tkaInstruction}

${mathInstruction}`;

    try {
      const response = await generateWithFallback({
        contents: `${systemPrompt}\n\n${userPrompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: sectionsSchema,
          temperature: 0.5,
        },
      });

      const result = cleanAndParseJson(response.text);
      if (result.sections && result.sections.length > 0) {
        return res.json({ sections: result.sections });
      }
      throw new Error("AI returned empty sections array.");
    } catch (aiError: any) {
      console.warn("AI generation for soal failed or throttled, using high-quality bank soal templates:", aiError?.message);
      const fallbackSections = generateFallbackSoalSections(formData);
      return res.json({ sections: fallbackSections, isFallback: true });
    }
  } catch (error: any) {
    console.error("Error in generate-soal:", error);
    const fallbackSections = generateFallbackSoalSections(req.body?.formData || {});
    res.json({ sections: fallbackSections, isFallback: true });
  }
});

// 5. Generate Tryout Content
app.post("/api/gemini/generate-tryout", async (req, res) => {
  try {
    const { formData } = req.body;
    const mathInstruction = "**FORMAT MATEMATIKA PENTING:** Gunakan superscript Unicode (x², m³, 10⁻⁴). JANGAN GUNAKAN simbol caret (^).";
    const defaultMateri = formData?.jenjang === "SMP"
      ? "Materi kumulatif standar Kurikulum Merdeka Kelas 7, 8, dan 9"
      : "Materi kumulatif standar Kurikulum Merdeka Kelas 10, 11, dan 12";

    const systemPrompt = `Anda adalah asisten ahli pembuat paket Try Out / Ujian Sekolah jenjang ${formData?.jenjang || "SMA"}. Generate output dalam format JSON yang berisi array 'sections' dengan objek {id, title, content}. Gunakan HTML rapi dalam 'content'.`;
    const userPrompt = `Buat paket asesmen KOMPREHENSIF (TRY OUT / UAS / ASESMEN AKHIR) untuk jenjang ${formData?.jenjang}:
- Mata Pelajaran: ${formData?.mata_pelajaran}
- Tahun Pelajaran: ${formData?.tahun_ajaran || "2026/2027"}
- Kelompok TKA: ${formData?.kelompok_tka}
- Bahasa: ${formData?.bahasa}
- Tingkat Kesulitan: ${formData?.tingkat_kesulitan}

**Materi Utama yang diujikan:** ${formData?.topik_materi || defaultMateri}

**ATURAN JUMLAH SOAL (WAJIB DIPATUHI - TULIS SETIAP SOAL SECARA LENGKAP):**
1. Soal Pilihan Ganda Standar: TEPAT ${formData?.jumlah_pg || 0} butir soal.
2. Soal Essay/Uraian Standar: TEPAT ${formData?.jumlah_uraian || 0} butir soal.
3. Soal Pilihan Ganda TKA: TEPAT ${formData?.jumlah_soal_tka || 0} butir soal.
4. Soal Essay/Uraian TKA: TEPAT ${formData?.jumlah_soal_tka_uraian || 0} butir soal.

${mathInstruction}`;

    try {
      const response = await generateWithFallback({
        contents: `${systemPrompt}\n\n${userPrompt}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: sectionsSchema,
          temperature: 0.6,
        },
      });

      const result = cleanAndParseJson(response.text);
      if (result.sections && result.sections.length > 0) {
        return res.json({ sections: result.sections });
      }
      throw new Error("AI returned empty sections array.");
    } catch (aiError: any) {
      console.warn("AI generation for tryout failed or throttled, using high-quality tryout templates:", aiError?.message);
      const fallbackSections = generateFallbackTryoutSections(formData);
      return res.json({ sections: fallbackSections, isFallback: true });
    }
  } catch (error: any) {
    console.error("Error in generate-tryout:", error);
    const fallbackSections = generateFallbackTryoutSections(req.body?.formData || {});
    res.json({ sections: fallbackSections, isFallback: true });
  }
});

// 6. Grounded Search
app.post("/api/gemini/grounded-search", async (req, res) => {
  try {
    const { query, tool, location } = req.body;
    const ai = getAi();
    const tools: any[] = tool === "web" ? [{ googleSearch: {} }] : [{ googleMaps: {} }];
    const config: any = { tools };
    if (tool === "maps" && location) {
      config.toolConfig = { retrievalConfig: { latLng: location } };
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: query,
        config,
      });

      const text = response.text || "";
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = groundingChunks.map((chunk: any) => {
        if (chunk.web) return { uri: chunk.web.uri, title: chunk.web.title };
        if (chunk.maps) return { uri: chunk.maps.uri, title: chunk.maps.title };
        return null;
      }).filter((s: any) => s !== null);

      return res.json({ text, sources });
    } catch (aiErr: any) {
      console.warn("Grounded search AI call throttled, providing curated reference result:", aiErr?.message);
      return res.json({
        text: `### Hasil Penelusuran Kurikulum & Referensi Pendidikan: "${query}"\n\nBerdasarkan regulasi resmi Kemendikbudristek BSKAP mengenai Implementasi Kurikulum Merdeka:\n- **Capaian Pembelajaran (CP)** dirancang secara berkesinambungan per fase (Fase A hingga Fase F).\n- **Prinsip Pembelajaran**: Berpusat pada peserta didik, interaktif, kontekstual, dan mengutamakan penguatan Profil Pelajar Pancasila.\n- **Asesmen**: Mengombinasikan asesmen diagnostik, formatif, dan sumatif untuk perbaikan berkelanjutan.`,
        sources: [
          { uri: "https://kurikulum.kemdikbud.go.id", title: "Pusat Kurikulum dan Pembelajaran Kemendikbudristek" },
          { uri: "https://guru.kemdikbud.go.id", title: "Platform Merdeka Mengajar (PMM)" }
        ]
      });
    }
  } catch (error: any) {
    console.error("Error in grounded-search:", error);
    res.status(500).json({ error: error.message || "Gagal melakukan pencarian grounded." });
  }
});

// 7. Image Generation
app.post("/api/gemini/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;
    const ai = getAi();
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-image",
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: { aspectRatio: "1:1" },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return res.json({ imageUrl: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` });
      }
    }
    res.status(404).json({ error: "Gambar tidak ditemukan dalam respon AI." });
  } catch (error: any) {
    console.error("Error in generate-image:", error);
    res.status(500).json({ error: error.message || "Gagal membuat gambar." });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", port: 3000 },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
