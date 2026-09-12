import { FormData } from "../types";

export interface GeneratedSection {
  id: string;
  title: string;
  content: string;
}

export function generateFallbackAdminSections(formData: Partial<FormData>): GeneratedSection[] {
  const jenjang = formData?.jenjang || "SMP";
  const sekolah = formData?.sekolah || "SMP NEGERI 1 TANGEN";
  const mapel = formData?.mata_pelajaran || "Ilmu Pengetahuan Sosial (IPS)";
  const kelas = formData?.kelas || (jenjang === "SMP" ? "8" : "10");
  const fase = formData?.fase || (jenjang === "SMP" ? "Fase D" : "Fase E");
  const semester = formData?.semester || "1 (Ganjil)";
  const tahunAjaran = formData?.tahun_ajaran || "2026/2027";
  const guru = formData?.nama_guru || "Drs. Puji Waluyo";
  const nip = formData?.nip || "-";
  const kepalaSekolah = formData?.kepala_sekolah || "Tri Wahyuni, M.Pd.";
  const nipKepala = formData?.nip_kepala || "-";
  const topik = formData?.topik_materi || "Keragaman Alam Indonesia & Dinamika Sosial Masyarakat";
  const alokasiWaktu = formData?.alokasi_waktu || "2 x 40 Menit (1 Pertemuan)";
  const cpElements = formData?.cp_elements || "Peserta didik memahami konsep keragaman alam Indonesia, pemanfaatan sumber daya alam, dan dinamika interaksi sosial budaya.";

  return [
    {
      id: "atp",
      title: "Alur Tujuan Pembelajaran (ATP)",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            ALUR TUJUAN PEMBELAJARAN (ATP)<br/>
            KURIKULUM MERDEKA TAHUN AJARAN ${tahunAjaran}
          </div>
          <table class="w-full border-collapse border border-gray-400 text-sm">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Satuan Pendidikan</td>
              <td class="border border-gray-400 p-2">${sekolah}</td>
              <td class="border border-gray-400 p-2 w-1/4">Mata Pelajaran</td>
              <td class="border border-gray-400 p-2">${mapel}</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td>
              <td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td>
              <td class="border border-gray-400 p-2 font-semibold">Tahun Pelajaran</td>
              <td class="border border-gray-400 p-2">${tahunAjaran}</td>
            </tr>
          </table>

          <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
            <strong>Capaian Pembelajaran (CP):</strong> ${cpElements}
          </div>

          <table class="w-full border-collapse border border-gray-400 text-sm mt-4">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">No</th>
                <th class="border border-gray-400 p-2">Elemen CP</th>
                <th class="border border-gray-400 p-2">Tujuan Pembelajaran (TP)</th>
                <th class="border border-gray-400 p-2">Materi Pokok</th>
                <th class="border border-gray-400 p-2">Profil Pancasila</th>
                <th class="border border-gray-400 p-2">Alokasi Waktu</th>
                <th class="border border-gray-400 p-2">Asesmen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center">1</td>
                <td class="border border-gray-400 p-2">Pemahaman Konsep</td>
                <td class="border border-gray-400 p-2">Peserta didik mampu mendeskripsikan dan menganalisis faktor pembentuk ${topik} serta pengaruhnya terhadap kehidupan masyarakat.</td>
                <td class="border border-gray-400 p-2 font-medium">${topik}</td>
                <td class="border border-gray-400 p-2">Bernalar Kritis, Gotong Royong, Kreatif</td>
                <td class="border border-gray-400 p-2 text-center">${alokasiWaktu}</td>
                <td class="border border-gray-400 p-2">Diagnostik, Formatif (LKPD), Sumatif</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">2</td>
                <td class="border border-gray-400 p-2">Keterampilan Proses</td>
                <td class="border border-gray-400 p-2">Peserta didik mampu melakukan penyelidikan kolaboratif, menyajikan data infografis/mind map, dan mempresentasikan hasil analisis secara komunikatif.</td>
                <td class="border border-gray-400 p-2 font-medium">Studi Kasus & Proyek Kolaboratif ${topik}</td>
                <td class="border border-gray-400 p-2">Mandiri, Bernalar Kritis, Berakhlak Mulia</td>
                <td class="border border-gray-400 p-2 text-center">2 x 40 JP</td>
                <td class="border border-gray-400 p-2">Unjuk Kerja & Penilaian Produk</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "prota",
      title: "Program Tahunan (Prota)",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            PROGRAM TAHUNAN (PROTA)<br/>
            TAHUN PELAJARAN ${tahunAjaran}
          </div>
          <table class="w-full border-collapse border border-gray-400 text-sm">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Satuan Pendidikan</td>
              <td class="border border-gray-400 p-2">${sekolah}</td>
              <td class="border border-gray-400 p-2 w-1/4">Mata Pelajaran</td>
              <td class="border border-gray-400 p-2">${mapel}</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td>
              <td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td>
              <td class="border border-gray-400 p-2 font-semibold">Guru Pengampu</td>
              <td class="border border-gray-400 p-2">${guru}</td>
            </tr>
          </table>

          <table class="w-full border-collapse border border-gray-400 text-sm mt-4">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">Smt</th>
                <th class="border border-gray-400 p-2">No. TP</th>
                <th class="border border-gray-400 p-2">Tujuan Pembelajaran (TP) / Pokok Bahasan</th>
                <th class="border border-gray-400 p-2">Alokasi Waktu</th>
                <th class="border border-gray-400 p-2">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center" rowspan="3">1 (Ganjil)</td>
                <td class="border border-gray-400 p-2 text-center">8.1.1</td>
                <td class="border border-gray-400 p-2">${topik} (Konsep Dasar & Dinamika)</td>
                <td class="border border-gray-400 p-2 text-center">12 JP</td>
                <td class="border border-gray-400 p-2">Modul Ajar 1 & 2</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">8.1.2</td>
                <td class="border border-gray-400 p-2">Analisis Pemanfaatan Sumber Daya & Interaksi Keruangan</td>
                <td class="border border-gray-400 p-2 text-center">14 JP</td>
                <td class="border border-gray-400 p-2">Modul Ajar 3</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">8.1.3</td>
                <td class="border border-gray-400 p-2">Asesmen Sumatif Tengah & Akhir Semester 1</td>
                <td class="border border-gray-400 p-2 text-center">6 JP</td>
                <td class="border border-gray-400 p-2">Evaluasi Terpadu</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center" rowspan="2">2 (Genap)</td>
                <td class="border border-gray-400 p-2 text-center">8.2.1</td>
                <td class="border border-gray-400 p-2">Pluralitas Masyarakat & Kearifan Lokal Nusantara</td>
                <td class="border border-gray-400 p-2 text-center">16 JP</td>
                <td class="border border-gray-400 p-2">Modul Ajar 4</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">8.2.2</td>
                <td class="border border-gray-400 p-2">Pengembangan Proyek Inovatif & Evaluasi Akhir Tahun</td>
                <td class="border border-gray-400 p-2 text-center">16 JP</td>
                <td class="border border-gray-400 p-2">Modul Ajar 5</td>
              </tr>
              <tr class="bg-gray-100 font-bold">
                <td class="border border-gray-400 p-2 text-center" colspan="3">TOTAL ALOKASI WAKTU EFEKTIF PER TAHUN</td>
                <td class="border border-gray-400 p-2 text-center">64 JP</td>
                <td class="border border-gray-400 p-2 text-center">Tuntas</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "promes",
      title: "Program Semester (Promes)",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            PROGRAM SEMESTER (PROMES)<br/>
            SEMESTER ${semester.toUpperCase()} TAHUN AJARAN ${tahunAjaran}
          </div>
          <table class="w-full border-collapse border border-gray-400 text-sm">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Satuan Pendidikan</td>
              <td class="border border-gray-400 p-2">${sekolah}</td>
              <td class="border border-gray-400 p-2 w-1/4">Mata Pelajaran</td>
              <td class="border border-gray-400 p-2">${mapel}</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td>
              <td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td>
              <td class="border border-gray-400 p-2 font-semibold">Semester</td>
              <td class="border border-gray-400 p-2">${semester}</td>
            </tr>
          </table>

          <table class="w-full border-collapse border border-gray-400 text-xs mt-4">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2" rowspan="2">No</th>
                <th class="border border-gray-400 p-2" rowspan="2">Tujuan Pembelajaran (Materi Pokok)</th>
                <th class="border border-gray-400 p-2" rowspan="2">Jml JP</th>
                <th class="border border-gray-400 p-1" colspan="4">Bulan 1</th>
                <th class="border border-gray-400 p-1" colspan="4">Bulan 2</th>
                <th class="border border-gray-400 p-1" colspan="4">Bulan 3</th>
                <th class="border border-gray-400 p-1" colspan="4">Bulan 4</th>
                <th class="border border-gray-400 p-1" colspan="4">Bulan 5</th>
              </tr>
              <tr class="bg-gray-100 text-center">
                <th class="border border-gray-400 p-1">1</th><th class="border border-gray-400 p-1">2</th><th class="border border-gray-400 p-1">3</th><th class="border border-gray-400 p-1">4</th>
                <th class="border border-gray-400 p-1">1</th><th class="border border-gray-400 p-1">2</th><th class="border border-gray-400 p-1">3</th><th class="border border-gray-400 p-1">4</th>
                <th class="border border-gray-400 p-1">1</th><th class="border border-gray-400 p-1">2</th><th class="border border-gray-400 p-1">3</th><th class="border border-gray-400 p-1">4</th>
                <th class="border border-gray-400 p-1">1</th><th class="border border-gray-400 p-1">2</th><th class="border border-gray-400 p-1">3</th><th class="border border-gray-400 p-1">4</th>
                <th class="border border-gray-400 p-1">1</th><th class="border border-gray-400 p-1">2</th><th class="border border-gray-400 p-1">3</th><th class="border border-gray-400 p-1">4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center">1</td>
                <td class="border border-gray-400 p-2">${topik} (Konseptual & Teori)</td>
                <td class="border border-gray-400 p-2 text-center font-bold">8</td>
                <td class="border border-gray-400 p-1 text-center bg-blue-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-blue-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-blue-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-blue-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center" colspan="16">-</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">2</td>
                <td class="border border-gray-400 p-2">Penyelidikan Kolaboratif & Pembuatan Produk Mind Map</td>
                <td class="border border-gray-400 p-2 text-center font-bold">8</td>
                <td class="border border-gray-400 p-1 text-center" colspan="4">-</td>
                <td class="border border-gray-400 p-1 text-center bg-green-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-green-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-green-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-green-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center" colspan="12">-</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">3</td>
                <td class="border border-gray-400 p-2">Asesmen Sumatif Lingkup Materi & Remedial/Pengayaan</td>
                <td class="border border-gray-400 p-2 text-center font-bold">6</td>
                <td class="border border-gray-400 p-1 text-center" colspan="8">-</td>
                <td class="border border-gray-400 p-1 text-center bg-yellow-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-yellow-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center bg-yellow-100 font-bold">2</td>
                <td class="border border-gray-400 p-1 text-center" colspan="8">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "modul-ajar-1",
      title: "Modul Ajar Kurikulum Merdeka",
      content: `
        <div class="space-y-6">
          <div class="text-center font-bold text-xl border-b-2 border-gray-800 pb-2">
            MODUL AJAR KURIKULUM MERDEKA<br/>
            <span class="text-base font-normal">TAHUN AJARAN ${tahunAjaran}</span>
          </div>

          <!-- I. INFORMASI UMUM -->
          <div>
            <h3 class="font-bold text-base text-gray-900 bg-gray-100 p-2.5 rounded border border-gray-300">I. INFORMASI UMUM</h3>
            
            <div class="mt-3">
              <h4 class="font-semibold text-sm text-gray-800">A. Identitas Modul</h4>
              <table class="w-full border-collapse border border-gray-400 text-sm mt-1">
                <tr><td class="border border-gray-400 p-2 font-semibold w-1/3">Nama Penyusun</td><td class="border border-gray-400 p-2">${guru}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Institusi / Sekolah</td><td class="border border-gray-400 p-2">${sekolah}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Tahun Penyusunan</td><td class="border border-gray-400 p-2">${tahunAjaran.split("/")[0] || "2026"}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Jenjang Sekolah</td><td class="border border-gray-400 p-2">${jenjang}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td><td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Mata Pelajaran</td><td class="border border-gray-400 p-2">${mapel}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Elemen / Topik</td><td class="border border-gray-400 p-2">${topik}</td></tr>
                <tr><td class="border border-gray-400 p-2 font-semibold">Alokasi Waktu</td><td class="border border-gray-400 p-2">${alokasiWaktu}</td></tr>
              </table>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">B. Kompetensi Awal</h4>
              <ul class="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
                <li>Peserta didik telah memiliki pengetahuan prasyarat mengenai konsep dasar ${topik}.</li>
                <li>Peserta didik telah mampu membaca data, grafik, teks informasi, atau ilustrasi sederhana secara mandiri.</li>
              </ul>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">C. Profil Pelajar Pancasila</h4>
              <ul class="list-disc list-inside text-sm mt-1 space-y-1 text-gray-700">
                <li><strong>Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia:</strong> Membiasakan berdoa sebelum dan sesudah kegiatan pembelajaran serta menghargai anugerah ilmu.</li>
                <li><strong>Gotong Royong:</strong> Mampu bekerja sama, berkolaborasi dalam kelompok, dan saling membantu dalam menyelesaikan tugas.</li>
                <li><strong>Bernalar Kritis:</strong> Mampu menganalisis informasi, memproses gagasan secara objektif, dan menarik kesimpulan berbasis data/fakta.</li>
                <li><strong>Kreatif:</strong> Menghasilkan gagasan orisinal, produk karya inovatif, dan pemecahan masalah yang fleksibel.</li>
                <li><strong>Mandiri:</strong> Memiliki prakarsa dan tanggung jawab pribadi atas proses dan hasil belajarnya.</li>
              </ul>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">D. Sarana dan Prasarana</h4>
              <ul class="list-disc list-inside text-sm mt-1 space-y-1 text-gray-700">
                <li><strong>Media/Alat:</strong> Laptop, LCD Proyektor, Papan Tulis, Spidol, Slide Presentasi/Video Interaktif, Lembar Kerja Peserta Didik (LKPD).</li>
                <li><strong>Sumber Belajar:</strong> Buku Teks Siswa Kurikulum Merdeka Kemendikbudristek, Modul Guru, Artikel Terkait, Video Pembelajaran Edukatif, dan Lingkungan Sekitar.</li>
              </ul>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">E. Target Peserta Didik</h4>
              <ul class="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
                <li><strong>Peserta Didik Reguler/Tipikal:</strong> Tidak ada kesulitan dalam mencerna dan memahami materi ajar umum.</li>
                <li><strong>Peserta Didik dengan Pencapaian Tinggi:</strong> Mencerna dengan cepat, mampu berpikir tingkat tinggi (HOTS), dan memimpin kelompok.</li>
              </ul>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">F. Model Pembelajaran</h4>
              <p class="text-sm mt-1 text-gray-700">Tatap Muka (Luring) dengan model <em>Problem-Based Learning (PBL)</em> dan pendekatan diskusi kelompok kolaboratif.</p>
            </div>
          </div>

          <!-- II. KOMPONEN INTI -->
          <div>
            <h3 class="font-bold text-base text-gray-900 bg-gray-100 p-2.5 rounded border border-gray-300">II. KOMPONEN INTI</h3>
            
            <div class="mt-3">
              <h4 class="font-semibold text-sm text-gray-800">A. Tujuan Pembelajaran (📌 WAJIB)</h4>
              <ol class="list-decimal list-inside text-sm mt-1 space-y-1 text-gray-700">
                <li>Melalui pengamatan stimulus dan bahan bacaan, peserta didik mampu mengidentifikasi dan mendeskripsikan konsep ${topik} secara tepat.</li>
                <li>Melalui diskusi kelompok heterogen, peserta didik mampu menganalisis hubungan sebab-akibat serta dampak fenomena terkait ${topik} secara kritis.</li>
                <li>Melalui pengerjaan LKPD kolaboratif, peserta didik mampu menyajikan hasil karya pemecahan masalah ${topik} secara komunikatif di depan kelas.</li>
              </ol>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">B. Pemahaman Bermakna</h4>
              <p class="text-sm mt-1 text-gray-700">Peserta didik memahami bahwa penguasaan materi ${topik} memberikan keterampilan aplikatif dalam memahami fenomena sekitar, memecahkan persoalan praktis, dan mengambil keputusan bertanggung jawab dalam kehidupan bermasyarakat.</p>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">C. Pertanyaan Pemantik</h4>
              <ol class="list-decimal list-inside text-sm mt-1 space-y-1 text-gray-700">
                <li>Apa yang kalian ketahui atau amati dalam kehidupan sehari-hari terkait fenomena ${topik}?</li>
                <li>Mengapa pemahaman mengenai ${topik} penting bagi kehidupan kita di masa kini dan masa mendatang?</li>
                <li>Bagaimana cara kita mengatasi tantangan atau persoalan nyata yang timbul seputar ${topik}?</li>
              </ol>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">D. Kegiatan Pembelajaran (📌 WAJIB)</h4>
              
              <div class="mt-2 p-3 bg-gray-50 border border-gray-300 rounded text-sm space-y-3">
                <div class="font-bold text-blue-900 border-b pb-1">Pertemuan Ke-1 (${alokasiWaktu})</div>
                
                <div>
                  <strong class="text-gray-800">1. Kegiatan Pendahuluan (10 Menit)</strong>
                  <ul class="list-disc list-inside mt-1 space-y-1 text-gray-700">
                    <li>Guru memberi salam, memeriksa kesiapan kelas, dan mengajak peserta didik berdoa bersama dipimpin ketua kelas.</li>
                    <li>Guru memeriksa kehadiran (presensi) dan menciptakan suasana kelas yang menyenangkan.</li>
                    <li><strong>Apersepsi:</strong> Guru mengaitkan materi sebelumnya atau pengalaman nyata siswa dengan materi ${topik}.</li>
                    <li><strong>Penyampaian Tujuan:</strong> Guru menyampaikan tujuan pembelajaran, garis besar kegiatan, dan kriteria penilaian yang akan dilakukan.</li>
                  </ul>
                </div>

                <div>
                  <strong class="text-gray-800">2. Kegiatan Inti (60 Menit)</strong>
                  <ul class="list-disc list-inside mt-1 space-y-1 text-gray-700">
                    <li><strong>Orientasi Masalah:</strong> Guru menayangkan tayangan gambar/video atau membagikan studi kasus relevan mengenai ${topik}. Peserta didik diminta mengamati dan mengajukan pertanyaan kritis.</li>
                    <li><strong>Organisasi Belajar:</strong> Peserta didik dibagi ke dalam kelompok heterogen (4-5 anggota) dan guru membagikan Lembar Kerja Peserta Didik (LKPD).</li>
                    <li><strong>Penyelidikan Mandiri & Kelompok:</strong> Setiap kelompok berdiskusi mengumpulkan data, mengkaji literatur bahan ajar, dan membagi tugas untuk menyelesaikan instruksi LKPD. Guru memfasilitasi dan memberi bimbingan (scaffolding).</li>
                    <li><strong>Pengembangan & Penyajian Hasil:</strong> Kelompok merumuskan hasil diskusi ke dalam format laporan/karya LKPD. Perwakilan kelompok mempresentasikan hasil kerjanya secara bergiliran.</li>
                    <li><strong>Evaluasi & Penguatan:</strong> Kelompok lain memberikan tanggapan santun. Guru memberikan konfirmasi, penguatan materi pokok, dan apresiasi atas partisipasi seluruh peserta didik.</li>
                  </ul>
                </div>

                <div>
                  <strong class="text-gray-800">3. Kegiatan Penutup (10 Menit)</strong>
                  <ul class="list-disc list-inside mt-1 space-y-1 text-gray-700">
                    <li>Peserta didik bersama guru merangkum dan menyimpulkan poin-poin penting materi pembelajaran hari ini.</li>
                    <li>Guru memandu refleksi singkat terhadap proses pembelajaran yang telah berlangsung.</li>
                    <li>Guru memberikan umpan balik dan menyampaikan rencana pembelajaran pada pertemuan berikutnya.</li>
                    <li>Pembelajaran ditutup dengan doa penutup dan salam perpisahan.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">E. Asesmen / Penilaian (📌 WAJIB)</h4>
              <table class="w-full border-collapse border border-gray-400 text-sm mt-2">
                <thead>
                  <tr class="bg-gray-100 text-center font-bold">
                    <th class="border border-gray-400 p-2 w-1/4">Jenis Asesmen</th>
                    <th class="border border-gray-400 p-2 w-1/3">Bentuk / Instrumen</th>
                    <th class="border border-gray-400 p-2">Keterangan Waktu Pelaksanaan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-400 p-2 font-medium">Asesmen Sebelum Belajar (Diagnostik)</td>
                    <td class="border border-gray-400 p-2">Tanya jawab lisan / kuis singkat pertanyaan pemantik</td>
                    <td class="border border-gray-400 p-2">Awal pembelajaran untuk memetakan kesiapan siswa</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-400 p-2 font-medium">Asesmen Selama Belajar (Formatif)</td>
                    <td class="border border-gray-400 p-2">Rubrik penilaian diskusi kelompok, lembar observasi keaktifan, dan penilaian pengerjaan LKPD</td>
                    <td class="border border-gray-400 p-2">Saat kegiatan inti dan proses diskusi kelompok berlangsung</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-400 p-2 font-medium">Asesmen Setelah Belajar (Sumatif)</td>
                    <td class="border border-gray-400 p-2">Tes tertulis (Pilihan Ganda & Soal Uraian) atau penugasan produk</td>
                    <td class="border border-gray-400 p-2">Akhir lingkup materi untuk mengukur ketuntasan belajar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">F. Pengayaan dan Remedial</h4>
              <div class="space-y-2 mt-1 text-sm text-gray-700">
                <div class="p-2 border border-gray-300 rounded bg-blue-50">
                  <strong>Pengayaan:</strong> Diberikan kepada peserta didik yang telah mencapai atau melampaui KKTP melalui penugasan eksplorasi materi tingkat lanjut, studi kasus kontekstual HOTS, atau menjadi tutor sebaya.
                </div>
                <div class="p-2 border border-gray-300 rounded bg-amber-50">
                  <strong>Remedial:</strong> Diberikan kepada peserta didik yang belum mencapai KKTP melalui bimbingan perorangan/kelompok kecil pada indikator yang belum tuntas, kemudian diberikan asesmen remedial setara.
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">G. Refleksi Guru dan Peserta Didik</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-sm">
                <div class="p-3 border border-gray-300 rounded bg-gray-50">
                  <strong class="text-gray-900 block mb-1">Refleksi Guru:</strong>
                  <ul class="list-disc list-inside space-y-1 text-gray-700">
                    <li>Apakah seluruh siswa aktif mengikuti kegiatan pembelajaran?</li>
                    <li>Bagian mana dari rencana pembelajaran yang paling berhasil dan apa kendalanya?</li>
                    <li>Langkah apa yang perlu diperbaiki untuk pertemuan selanjutnya?</li>
                  </ul>
                </div>
                <div class="p-3 border border-gray-300 rounded bg-gray-50">
                  <strong class="text-gray-900 block mb-1">Refleksi Siswa:</strong>
                  <ul class="list-disc list-inside space-y-1 text-gray-700">
                    <li>Materi apa yang paling menarik dan sudah saya pahami hari ini?</li>
                    <li>Bagian mana yang dirasa masih sulit atau membingungkan?</li>
                    <li>Apa yang akan saya lakukan untuk meningkatkan pemahaman saya?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- III. LAMPIRAN -->
          <div>
            <h3 class="font-bold text-base text-gray-900 bg-gray-100 p-2.5 rounded border border-gray-300">III. LAMPIRAN</h3>
            
            <div class="mt-3">
              <h4 class="font-semibold text-sm text-gray-800">A. Lembar Kerja Peserta Didik (LKPD)</h4>
              <div class="p-3 border border-gray-300 rounded bg-white mt-1 text-sm space-y-2">
                <div class="font-bold text-center border-b pb-1 text-gray-900">LEMBAR KERJA PESERTA DIDIK (LKPD) - ${topik.toUpperCase()}</div>
                <div class="text-xs text-gray-600">Kelompok: ................................ | Anggota: 1. .................... 2. .................... 3. .................... 4. ....................</div>
                <div class="font-semibold text-gray-800 text-xs">Petunjuk Belajar:</div>
                <ol class="list-decimal list-inside text-xs text-gray-700 space-y-0.5">
                  <li>Bacalah ringkasan materi dan sumber rujukan yang disediakan dengan teliti.</li>
                  <li>Diskusikan bersama rekan kelompok untuk menjawab pertanyaan analisis di bawah ini.</li>
                  <li>Tuliskan hasil kerja secara rapi pada tabel yang tersedia dan siapkan perwakilan untuk presentasi.</li>
                </ol>
                <table class="w-full border-collapse border border-gray-400 text-xs mt-2">
                  <thead>
                    <tr class="bg-gray-100 text-center font-bold">
                      <th class="border border-gray-400 p-2 w-10">No</th>
                      <th class="border border-gray-400 p-2">Pokok Bahasan / Studi Kasus</th>
                      <th class="border border-gray-400 p-2">Hasil Analisis & Solusi Kelompok</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-gray-400 p-2 text-center">1</td>
                      <td class="border border-gray-400 p-2 font-medium">Identifikasi konsep dan faktor utama terkait ${topik}</td>
                      <td class="border border-gray-400 p-2 text-gray-400 italic">[Tuliskan uraian hasil analisis kelompok di sini...]</td>
                    </tr>
                    <tr>
                      <td class="border border-gray-400 p-2 text-center">2</td>
                      <td class="border border-gray-400 p-2 font-medium">Dampak dan penerapan materi dalam kehidupan sehari-hari</td>
                      <td class="border border-gray-400 p-2 text-gray-400 italic">[Tuliskan uraian hasil analisis kelompok di sini...]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">B. Bahan Bacaan Guru dan Peserta Didik</h4>
              <div class="p-3 border border-gray-300 rounded bg-gray-50 mt-1 text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Ringkasan Materi Pokok: ${topik}</p>
                <p>Materi ${topik} membahas konsep-konsep esensial pada mata pelajaran ${mapel} jenjang ${jenjang} (Fase ${fase}). Pemahaman mendalam mengenai topik ini mencakup definisi operasional, karakteristik utama, faktor-faktor pembentuk, serta keterkaitannya dengan isu-isu kontekstual di lingkungan sekitar. Peserta didik diajak untuk mengamati pola, menghubungkan sebab-akibat, dan merumuskan solusi berbasis data dan nalar kritis.</p>
              </div>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">C. Glosarium</h4>
              <table class="w-full border-collapse border border-gray-400 text-xs mt-1">
                <thead>
                  <tr class="bg-gray-100 font-bold">
                    <th class="border border-gray-400 p-2 w-1/4">Istilah</th>
                    <th class="border border-gray-400 p-2">Definisi / Makna</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-400 p-2 font-semibold">${topik.split(" ")[0] || "Konsep"}</td>
                    <td class="border border-gray-400 p-2">Konsep esensial yang menjadi fokus utama dalam pembahasan modul ajar ini.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-400 p-2 font-semibold">Capaian Pembelajaran (CP)</td>
                    <td class="border border-gray-400 p-2">Kompetensi pembelajaran yang harus dicapai peserta didik pada setiap fase perkembangan.</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-400 p-2 font-semibold">Asesmen Formatif</td>
                    <td class="border border-gray-400 p-2">Aktivitas penilaian yang bertujuan memantau dan memperbaiki proses pembelajaran secara berkala.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-4">
              <h4 class="font-semibold text-sm text-gray-800">D. Daftar Pustaka</h4>
              <ul class="list-disc list-inside text-xs mt-1 space-y-1 text-gray-700">
                <li>Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP) Kemendikbudristek. <em>Panduan Pembelajaran dan Asesmen Kurikulum Merdeka</em>. Jakarta: Kemendikbudristek.</li>
                <li>Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. <em>Buku Panduan Guru dan Buku Siswa ${mapel} ${jenjang} Kelas ${kelas}</em>. Jakarta: Pusat Perbukuan.</li>
                <li>Platform Merdeka Mengajar (PMM). <em>Perangkat Ajar dan Modul Pembelajaran Terpadu</em>. Kemendikbudristek.</li>
              </ul>
            </div>

            <div class="mt-8 pt-4 border-t border-gray-400 text-sm">
              <div class="flex justify-between items-center text-center">
                <div>
                  Mengetahui,<br/>
                  Kepala ${sekolah}<br/><br/><br/><br/>
                  <strong><u>${kepalaSekolah}</u></strong><br/>
                  NIP. ${nipKepala}
                </div>
                <div>
                  ${sekolah.split(" ")[0] || "Tempat"}, .............................. ${tahunAjaran.split("/")[0] || "2026"}<br/>
                  Guru Mata Pelajaran,<br/><br/><br/><br/>
                  <strong><u>${guru}</u></strong><br/>
                  NIP. ${nip}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "kktp",
      title: "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)<br/>
            TAHUN PELAJARAN ${tahunAjaran}
          </div>
          <table class="w-full border-collapse border border-gray-400 text-sm">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Satuan Pendidikan</td>
              <td class="border border-gray-400 p-2">${sekolah}</td>
              <td class="border border-gray-400 p-2 w-1/4">Mata Pelajaran</td>
              <td class="border border-gray-400 p-2">${mapel}</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td>
              <td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td>
              <td class="border border-gray-400 p-2 font-semibold">Interval Ketuntasan</td>
              <td class="border border-gray-400 p-2 font-bold text-blue-700">75 (Skala 0 - 100)</td>
            </tr>
          </table>

          <table class="w-full border-collapse border border-gray-400 text-xs mt-4">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2" rowspan="2">No</th>
                <th class="border border-gray-400 p-2" rowspan="2">Tujuan Pembelajaran</th>
                <th class="border border-gray-400 p-1" colspan="4">Interval Kriteria Ketercapaian</th>
              </tr>
              <tr class="bg-gray-100 text-center font-semibold">
                <th class="border border-gray-400 p-1 w-1/5">Perlu Bimbingan (0-60)</th>
                <th class="border border-gray-400 p-1 w-1/5">Cukup (61-74)</th>
                <th class="border border-gray-400 p-1 w-1/5">Baik (75-87)</th>
                <th class="border border-gray-400 p-1 w-1/5">Sangat Baik (88-100)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center">1</td>
                <td class="border border-gray-400 p-2 font-medium">Mengidentifikasi dan mendeskripsikan faktor ${topik}</td>
                <td class="border border-gray-400 p-2">Belum mampu menyebutkan faktor pembentuk dasar</td>
                <td class="border border-gray-400 p-2">Mampu menyebutkan sebagian faktor dengan bantuan buku</td>
                <td class="border border-gray-400 p-2 bg-green-50">Mampu menjelaskan seluruh faktor secara mandiri dan benar</td>
                <td class="border border-gray-400 p-2 bg-blue-50">Mampu menganalisis keterkaitan faktor secara komprehensif dan kritis</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">2</td>
                <td class="border border-gray-400 p-2 font-medium">Merancang dan menyajikan produk penyelidikan Mind Mapping</td>
                <td class="border border-gray-400 p-2">Produk belum terstruktur dan informasi tidak lengkap</td>
                <td class="border border-gray-400 p-2">Produk terstruktur sederhana namun kurang variatif</td>
                <td class="border border-gray-400 p-2 bg-green-50">Produk rapi, memuat konsep utama, dan komunikatif</td>
                <td class="border border-gray-400 p-2 bg-blue-50">Produk sangat kreatif, orisinal, estetis, dan mendalam</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "jurnal",
      title: "Jurnal Harian & Agenda Mengajar Guru",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            JURNAL HARIAN PEMBELAJARAN GURU<br/>
            TAHUN PELAJARAN ${tahunAjaran}
          </div>
          <table class="w-full border-collapse border border-gray-400 text-sm">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Satuan Pendidikan</td>
              <td class="border border-gray-400 p-2">${sekolah}</td>
              <td class="border border-gray-400 p-2 w-1/4">Guru Pengampu</td>
              <td class="border border-gray-400 p-2">${guru}</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Fase / Kelas</td>
              <td class="border border-gray-400 p-2">${fase} / Kelas ${kelas}</td>
              <td class="border border-gray-400 p-2 font-semibold">Mata Pelajaran</td>
              <td class="border border-gray-400 p-2">${mapel}</td>
            </tr>
          </table>

          <table class="w-full border-collapse border border-gray-400 text-xs mt-4">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">No</th>
                <th class="border border-gray-400 p-2">Hari / Tgl</th>
                <th class="border border-gray-400 p-2">Pertemuan / JP</th>
                <th class="border border-gray-400 p-2">Materi Pokok & Kegiatan</th>
                <th class="border border-gray-400 p-2">Jumlah Siswa Hadir</th>
                <th class="border border-gray-400 p-2">Catatan Refleksi & Kendala</th>
                <th class="border border-gray-400 p-2">Paraf</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center">1</td>
                <td class="border border-gray-400 p-2 text-center">Senin, .../...</td>
                <td class="border border-gray-400 p-2 text-center">1 (2 JP)</td>
                <td class="border border-gray-400 p-2">Orientasi materi ${topik}, pembentukan 5 kelompok diskusi, dan pengerjaan LKPD rangkap 2.</td>
                <td class="border border-gray-400 p-2 text-center">32 / 32</td>
                <td class="border border-gray-400 p-2 text-green-700">Diskusi berlangsung aktif, ice breaking berhasil membangkitkan antusiasme kelas.</td>
                <td class="border border-gray-400 p-2 text-center">✓</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">2</td>
                <td class="border border-gray-400 p-2 text-center">Senin, .../...</td>
                <td class="border border-gray-400 p-2 text-center">2 (2 JP)</td>
                <td class="border border-gray-400 p-2">Presentasi silang hasil mind map kelompok dan evaluasi formatif tes tulis.</td>
                <td class="border border-gray-400 p-2 text-center">31 / 32</td>
                <td class="border border-gray-400 p-2 text-blue-700">Sebagian besar kelompok mencapai ketuntasan (KKTP &gt; 75), 2 siswa terjadwal remedial terarah.</td>
                <td class="border border-gray-400 p-2 text-center">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ];
}

export function generateFallbackSoalSections(formData: Partial<FormData>): GeneratedSection[] {
  const jenjang = formData?.jenjang || "SMP";
  const sekolah = formData?.sekolah || "SMP NEGERI 1 TANGEN";
  const mapel = formData?.mata_pelajaran || "Ilmu Pengetahuan Sosial (IPS)";
  const kelas = formData?.kelas || "8";
  const topik = formData?.topik_materi || "Keragaman Alam Indonesia";
  const jumlahPG = formData?.jumlah_pg || 5;
  const jumlahUraian = formData?.jumlah_uraian || 2;
  const tingkatKesulitan = formData?.tingkat_kesulitan || "Sedang / HOTS";
  const tahunAjaran = formData?.tahun_ajaran || "2026/2027";

  let pgHtml = "";
  for (let i = 1; i <= jumlahPG; i++) {
    pgHtml += `
      <div class="mb-4 p-3 border border-gray-300 rounded bg-white">
        <p class="font-medium text-sm text-gray-800">
          <strong>${i}.</strong> Perhatikan pernyataan terkait topik <em>${topik}</em> berikut! Manakah yang merupakan pengaruh utama kondisi letak geografis dan geologis terhadap keanekaragaman flora dan fauna di Indonesia?
        </p>
        <div class="mt-2 text-sm text-gray-700 space-y-1 ml-4">
          <div>A. Terjadinya perbedaan zona waktu dan iklim subtropis di seluruh pulau.</div>
          <div>B. Adanya garis Wallace dan garis Weber yang membagi tipe fauna Asiatis, Peralihan, dan Australis.</div>
          <div>C. Menurunnya kesuburan tanah vulkanik di kawasan kepulauan nusantara.</div>
          <div>D. Keseragaman pola mata pencaharian masyarakat pesisir dan dataran tinggi.</div>
          <div>E. Hilangnya keanekaragaman hayati endemik di kepulauan terluar Indonesia.</div>
        </div>
      </div>
    `;
  }

  let uraianHtml = "";
  for (let j = 1; j <= jumlahUraian; j++) {
    uraianHtml += `
      <div class="mb-4 p-3 border border-gray-300 rounded bg-white">
        <p class="font-medium text-sm text-gray-800">
          <strong>${j}.</strong> [HOTS - Analisis Lingkungan] Jelaskan bagaimana karakteristik wilayah bentang alam pada materi <em>${topik}</em> mempengaruhi interaksi sosial serta aktivitas ekonomi masyarakat di daerah tersebut! Berikan 2 contoh konkret!
        </p>
      </div>
    `;
  }

  return [
    {
      id: "naskah-soal",
      title: "Naskah Soal Asesmen Pembelajaran",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg border-b pb-2">
            NASKAH SOAL ASESMEN LINGKUP MATERI<br/>
            ${sekolah.toUpperCase()}<br/>
            <span class="text-sm font-normal">Mata Pelajaran: ${mapel} | Kelas: ${kelas} | TP: ${tahunAjaran}</span>
          </div>

          <div class="p-3 bg-blue-50 border border-blue-200 rounded text-xs">
            <strong>Petunjuk Umum:</strong><br/>
            1. Periksa dan bacalah setiap butir soal dengan teliti sebelum menjawab.<br/>
            2. Kerjakan soal pilihan ganda dengan memilih salah satu opsi jawaban yang paling tepat.<br/>
            3. Untuk soal uraian, tuliskan jawaban secara sistematis, logis, dan argumentatif.
          </div>

          <div>
            <h4 class="font-bold text-sm bg-gray-100 p-2 rounded mb-3">BAGIAN I: SOAL PILIHAN GANDA (${jumlahPG} Butir)</h4>
            ${pgHtml}
          </div>

          <div>
            <h4 class="font-bold text-sm bg-gray-100 p-2 rounded mb-3">BAGIAN II: SOAL URAIAN / ESSAY (${jumlahUraian} Butir)</h4>
            ${uraianHtml}
          </div>
        </div>
      `,
    },
    {
      id: "kunci-jawaban",
      title: "Kunci Jawaban & Pembahasan Mendalam",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            KUNCI JAWABAN & PEMBAHASAN ASESMEN<br/>
            Mata Pelajaran: ${mapel} (Kelas ${kelas})
          </div>

          <table class="w-full border-collapse border border-gray-400 text-xs">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">No. Soal</th>
                <th class="border border-gray-400 p-2">Kunci</th>
                <th class="border border-gray-400 p-2">Pembahasan Konsep & Alasan Ilmiah</th>
                <th class="border border-gray-400 p-2">Skor Maks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center font-bold">1</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-green-700">B</td>
                <td class="border border-gray-400 p-2">Indonesia terletak pada pertemuan lempeng tektonik dunia dan dangkalan Sahul/Sunda yang memicu terbentuknya Garis Wallace dan Garis Weber, membagi fauna menjadi tipe Asiatis, Peralihan, dan Australis.</td>
                <td class="border border-gray-400 p-2 text-center">10</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center font-bold">Uraian 1</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-blue-700">Rubrik</td>
                <td class="border border-gray-400 p-2">Peserta didik menguraikan keterkaitan antara topografi bentang alam (pantai/pegunungan) dengan pola adaptasi ekonomi (nelayan/petani) serta contoh interaksi pertukaran komoditas antardaerah.</td>
                <td class="border border-gray-400 p-2 text-center">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      id: "kisi-kisi",
      title: "Kisi-Kisi Asesmen & Analisis Butir Soal",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            KISI-KISI BUTIR SOAL ASESMEN KURIKULUM MERDEKA<br/>
            Tingkat Kesulitan: ${tingkatKesulitan}
          </div>

          <table class="w-full border-collapse border border-gray-400 text-xs">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">No</th>
                <th class="border border-gray-400 p-2">Elemen Capaian</th>
                <th class="border border-gray-400 p-2">Materi Pokok</th>
                <th class="border border-gray-400 p-2">Indikator Soal</th>
                <th class="border border-gray-400 p-2">Level Kognitif</th>
                <th class="border border-gray-400 p-2">Bentuk</th>
                <th class="border border-gray-400 p-2">No. Soal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center">1</td>
                <td class="border border-gray-400 p-2">Pemahaman Konsep</td>
                <td class="border border-gray-400 p-2">${topik}</td>
                <td class="border border-gray-400 p-2">Menganalisis dampak keragaman geografis terhadap biodiversitas</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-blue-700">L3 (C4 - Analisis)</td>
                <td class="border border-gray-400 p-2 text-center">PG</td>
                <td class="border border-gray-400 p-2 text-center">1-${jumlahPG}</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center">2</td>
                <td class="border border-gray-400 p-2">Keterampilan Proses</td>
                <td class="border border-gray-400 p-2">Dinamika Keruangan</td>
                <td class="border border-gray-400 p-2">Menelaah keterkaitan bentang alam dengan adaptasi sosial ekonomi</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-purple-700">L3 (C5 - Evaluasi)</td>
                <td class="border border-gray-400 p-2 text-center">Uraian</td>
                <td class="border border-gray-400 p-2 text-center">1-${jumlahUraian}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ];
}

export function generateFallbackTryoutSections(formData: Partial<FormData>): GeneratedSection[] {
  const jenjang = formData?.jenjang || "SMP";
  const sekolah = formData?.sekolah || "SMP NEGERI 1 TANGEN";
  const mapel = formData?.mata_pelajaran || "Ilmu Pengetahuan Sosial (IPS)";
  const tahunAjaran = formData?.tahun_ajaran || "2026/2027";
  const jumlahPG = formData?.jumlah_pg || 10;
  const jumlahUraian = formData?.jumlah_uraian || 3;

  return [
    {
      id: "tryout-soal",
      title: "Paket Naskah Soal Try Out / Ujian Sekolah Standar",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg border-b pb-2">
            PAKET ASESMEN AKHIR / TRY OUT UJIAN SEKOLAH<br/>
            ${sekolah.toUpperCase()}<br/>
            <span class="text-sm font-normal">Mata Pelajaran: ${mapel} (${jenjang}) | Tahun Ajaran ${tahunAjaran}</span>
          </div>

          <table class="w-full border-collapse border border-gray-400 text-xs mb-4">
            <tr class="bg-gray-100 font-semibold">
              <td class="border border-gray-400 p-2 w-1/4">Bentuk Ujian</td>
              <td class="border border-gray-400 p-2">Try Out / Asesmen Sumatif Akhir Jenjang</td>
              <td class="border border-gray-400 p-2 w-1/4">Alokasi Waktu</td>
              <td class="border border-gray-400 p-2">90 Menit</td>
            </tr>
            <tr>
              <td class="border border-gray-400 p-2 font-semibold">Jumlah Soal</td>
              <td class="border border-gray-400 p-2">${jumlahPG} Pilihan Ganda + ${jumlahUraian} Uraian</td>
              <td class="border border-gray-400 p-2 font-semibold">Standar Kurikulum</td>
              <td class="border border-gray-400 p-2">Kurikulum Merdeka (Standar BSKAP)</td>
            </tr>
          </table>

          <div class="space-y-3">
            <h4 class="font-bold text-sm bg-gray-100 p-2 rounded">BAGIAN I: SOAL PILIHAN GANDA (${jumlahPG} BUTIR)</h4>
            <div class="p-3 border border-gray-300 rounded bg-white text-sm">
              <p><strong>1.</strong> Posisi geografis Indonesia yang berada di antara dua benua (Asia dan Australia) dan dua samudra (Hindia dan Pasifik) memberikan keuntungan strategis berupa...</p>
              <div class="mt-2 ml-4 space-y-1 text-gray-700">
                <div>A. Menjadi jalur perlintasan perdagangan internasional dan interaksi multikultural.</div>
                <div>B. Iklim dingin berkepanjangan di kawasan dataran rendah.</div>
                <div>C. Bebas dari risiko bencana kegempaan tektonik.</div>
                <div>D. Penurunan laju pertumbuhan ekonomi maritim nasional.</div>
              </div>
            </div>
            <div class="p-3 border border-gray-300 rounded bg-white text-sm">
              <p><strong>2.</strong> Penerapan prinsip pembangunan berkelanjutan dalam pemanfaatan sumber daya tambang bertujuan untuk...</p>
              <div class="mt-2 ml-4 space-y-1 text-gray-700">
                <div>A. Menghabiskan seluruh kuota tambang secepat mungkin.</div>
                <div>B. Menjaga kelestarian lingkungan demi generasi masa depan dan ekonomi ramah lingkungan.</div>
                <div>C. Menutup semua akses perdagangan internasional sektor pertambangan.</div>
                <div>D. Menghilangkan keterlibatan masyarakat lokal dalam pengelolaan wilayah.</div>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: "tryout-kunci",
      title: "Kunci Jawaban & Pembahasan Try Out",
      content: `
        <div class="space-y-4">
          <div class="text-center font-bold text-lg mb-4">
            KUNCI JAWABAN & PEMBAHASAN TRY OUT<br/>
            Mata Pelajaran: ${mapel} (${jenjang})
          </div>

          <table class="w-full border-collapse border border-gray-400 text-xs">
            <thead>
              <tr class="bg-gray-200 text-center font-bold">
                <th class="border border-gray-400 p-2">No</th>
                <th class="border border-gray-400 p-2">Kunci</th>
                <th class="border border-gray-400 p-2">Pembahasan & Landasan Konsep</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-400 p-2 text-center font-bold">1</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-green-700">A</td>
                <td class="border border-gray-400 p-2">Letak silang posisi Indonesia menjadikannya poros maritim dunia yang sangat strategis bagi jalur pelayaran dan perdagangan antarbangsa.</td>
              </tr>
              <tr>
                <td class="border border-gray-400 p-2 text-center font-bold">2</td>
                <td class="border border-gray-400 p-2 text-center font-bold text-green-700">B</td>
                <td class="border border-gray-400 p-2">Pembangunan berkelanjutan mengintegrasikan aspek ekonomi, ekologi, dan sosial untuk menjamin pemenuhan kebutuhan saat ini tanpa mengorbankan masa depan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    },
  ];
}
