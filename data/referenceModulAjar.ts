import { FormData, GeneratedSection } from '../types';

export interface ModulAjarReferenceDoc {
  id: string;
  title: string;
  subtitle: string;
  metadata: {
    penyusun: string;
    instansi: string;
    tahun_penyusunan: string;
    jenjang: string;
    mata_pelajaran: string;
    fase_kelas: string;
    alokasi_waktu: string;
    topik: string;
  };
  sections: GeneratedSection[];
}

export const SAMPLE_REFERENCE_MODUL_AJAR: ModulAjarReferenceDoc = {
  id: 'modul-ajar-smp-ips-8',
  title: 'Modul Ajar Kurikulum Merdeka - IPS Kelas VIII (SMP)',
  subtitle: 'Referensi Resmi: SMP Negeri 1 Tangen - Proses Geografis & Keragaman Alam Indonesia',
  metadata: {
    penyusun: 'Rini Prasetyowati, S.Pd',
    instansi: 'SMP N 1 TANGEN',
    tahun_penyusunan: '2023',
    jenjang: 'SMP',
    mata_pelajaran: 'Ilmu Pengetahuan Sosial (IPS)',
    fase_kelas: 'Fase D / Kelas VIII',
    alokasi_waktu: '4 × 40 menit (2 Pertemuan)',
    topik: 'Proses Geografis dan Keragaman Alam Indonesia'
  },
  sections: [
    {
      id: 'ref-info-umum',
      title: 'I. INFORMASI UMUM & IDENTITAS MODUL',
      content: `
        <div class="space-y-4">
          <div class="border-b pb-3 mb-4">
            <h3 class="text-xl font-bold text-gray-900">MODUL AJAR KURIKULUM MERDEKA</h3>
            <p class="text-sm text-gray-600">Mata Pelajaran: Ilmu Pengetahuan Sosial (IPS) | Fase D / Kelas VIII</p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse border border-gray-400 text-sm">
              <thead class="bg-blue-100">
                <tr>
                  <th colspan="2" class="p-3 border border-gray-400 font-bold text-blue-900">A. IDENTITAS MODUL</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold w-1/3 bg-gray-50">Penyusun</td>
                  <td class="p-2 border border-gray-400">Rini Prasetyowati, S.Pd</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Instansi</td>
                  <td class="p-2 border border-gray-400">SMP N 1 TANGEN</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Tahun Penyusunan</td>
                  <td class="p-2 border border-gray-400">Tahun 2023 / 2024</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Jenjang Sekolah</td>
                  <td class="p-2 border border-gray-400">SMP</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Mata Pelajaran</td>
                  <td class="p-2 border border-gray-400">IPS (Ilmu Pengetahuan Sosial)</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Fase / Kelas</td>
                  <td class="p-2 border border-gray-400">Fase D / Kelas VIII</td>
                </tr>
                <tr class="border-b border-gray-300">
                  <td class="p-2 border border-gray-400 font-semibold bg-gray-50">Alokasi Waktu</td>
                  <td class="p-2 border border-gray-400">4 × 40 menit (2 Pertemuan)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
            <h4 class="font-bold text-gray-900 mb-2">B. KOMPETENSI AWAL (Materi Prasyarat)</h4>
            <p class="text-gray-700 text-sm">Peserta didik dapat menganalisis Proses Geografis dan Keragaman Alam Indonesia.</p>
          </div>

          <div class="mt-4 p-4 border border-gray-300 rounded bg-gray-50">
            <h4 class="font-bold text-gray-900 mb-2">C. PROFIL PELAJAR PANCASILA</h4>
            <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li><strong>Bertakwa kepada Tuhan Yang Maha Esa:</strong> Berdoa sebelum dan setelah pembelajaran.</li>
              <li><strong>Bergotong Royong:</strong> Kolaborasi aktif dalam kerja kelompok diskusi dan presentasi.</li>
              <li><strong>Mandiri:</strong> Bertanggung jawab menyelesaikan tugas analisis secara terstruktur.</li>
              <li><strong>Bernalar Kritis:</strong> Menganalisis pengaruh letak geografis, astronomis, dan geologis terhadap iklim serta zona waktu.</li>
              <li><strong>Kreatif:</strong> Menyajikan hasil telaah dalam bentuk Mind Mapping atau infografis.</li>
            </ul>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 border border-gray-300 rounded bg-gray-50">
              <h4 class="font-bold text-gray-900 mb-2">D. SARANA DAN PRASARANA</h4>
              <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Peta Indonesia dan peta angin muson</li>
                <li>Gambar pembagian iklim dan peta zona waktu (WIB, WITA, WIT)</li>
                <li>Laptop, LCD Proyektor, Smartphone, Jaringan Internet</li>
                <li>Buku Siswa IPS Kelas VIII Kurikulum Merdeka</li>
              </ul>
            </div>
            <div class="p-4 border border-gray-300 rounded bg-gray-50">
              <h4 class="font-bold text-gray-900 mb-2">E. TARGET & MODEL PEMBELAJARAN</h4>
              <p class="text-sm text-gray-700 mb-1"><strong>Target Peserta Didik:</strong></p>
              <ul class="list-disc list-inside text-sm text-gray-700 mb-2">
                <li>Peserta didik reguler/tipikal</li>
                <li>Peserta didik dengan pencapaian tinggi (HOTS & leadership)</li>
              </ul>
              <p class="text-sm text-gray-700"><strong>Model Pembelajaran:</strong> Tatap Muka (Problem Based Learning & Diskusi Kolaboratif)</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ref-komponen-inti',
      title: 'II. KOMPONEN INTI & ASESMEN PEMBELAJARAN',
      content: `
        <div class="space-y-4">
          <div class="p-4 border border-blue-200 rounded bg-blue-50">
            <h4 class="font-bold text-blue-900 mb-2">A. TUJUAN KEGIATAN PEMBELAJARAN</h4>
            <p class="text-sm text-gray-800 mb-2">Peserta didik mampu mendeskripsikan dan mengidentifikasi:</p>
            <ol class="list-decimal list-inside text-sm text-gray-800 space-y-1">
              <li>Letak dan luas negara Indonesia (Astronomis, Geografis, Geologis).</li>
              <li>Letak geografis Indonesia dan posisinya di persilangan dunia.</li>
              <li>Cuaca dan iklim serta pengaruhnya terhadap keragaman alam Indonesia.</li>
              <li>Hubungan letak astronomis dengan perbedaan 3 zona waktu di Indonesia.</li>
            </ol>
          </div>

          <div class="p-4 border border-green-200 rounded bg-green-50">
            <h4 class="font-bold text-green-900 mb-2">B. KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)</h4>
            <ul class="list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>Mampu menyebutkan koordinat letak astronomis Indonesia (6° LU – 11° LS dan 95° BT – 141° BT).</li>
              <li>Mampu menjelaskan posisi geografis Indonesia di antara dua benua dan dua samudera.</li>
              <li>Mampu menjelaskan dampak pertemuan jalur sirkum Pasifik dan Mediterania terhadap bentang alam vulkanik.</li>
              <li>Mampu menganalisis sebab terjadinya iklim tropis serta pergeseran 3 zona waktu.</li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-900 mb-2">RINGKASAN ASESMEN PEMBELAJARAN</h4>
            <table class="w-full text-left border-collapse border border-gray-400 text-sm">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-2 border border-gray-400 w-12 text-center">No</th>
                  <th class="p-2 border border-gray-400 w-1/3">Jenis Asesmen</th>
                  <th class="p-2 border border-gray-400">Bentuk & Teknik Penilaian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border border-gray-400 text-center font-bold">1</td>
                  <td class="p-2 border border-gray-400 font-semibold">Asesmen Diagnostik (Sebelum Pembelajaran)</td>
                  <td class="p-2 border border-gray-400">Penilaian Sikap, Kesiapan Belajar, dan Ice Breaking / Tes Konsentrasi.</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-400 text-center font-bold">2</td>
                  <td class="p-2 border border-gray-400 font-semibold">Asesmen Formatif (Selama Pembelajaran)</td>
                  <td class="p-2 border border-gray-400">Observasi Keterampilan Proses, Kinerja Diskusi 5 Kelompok, dan Presentasi Silang.</td>
                </tr>
                <tr>
                  <td class="p-2 border border-gray-400 text-center font-bold">3</td>
                  <td class="p-2 border border-gray-400 font-semibold">Asesmen Sumatif (Akhir Pembelajaran)</td>
                  <td class="p-2 border border-gray-400">Tes Tertulis Uraian (4-5 Butir Soal Pemahaman Konsep) dan Penilaian Produk Mind Mapping.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'ref-diferensiasi-internalisasi',
      title: 'III. PEMBELAJARAN BERDIFERENSIASI & INTERNALISASI NILAI',
      content: `
        <div class="space-y-6">
          <div class="p-4 border border-indigo-200 rounded-lg bg-indigo-50">
            <h4 class="font-bold text-indigo-900 text-base mb-3">C. STRATEGI PEMBELAJARAN BERDIFERENSIASI</h4>
            
            <div class="space-y-3 text-sm text-gray-800">
              <div class="bg-white p-3 rounded border border-indigo-100">
                <p class="font-bold text-indigo-800">a. Diferensiasi Konten:</p>
                <p class="mt-1">Pengembangan 3 tingkatan konten pembelajaran:</p>
                <ul class="list-disc list-inside ml-2 text-gray-700">
                  <li><strong>Konten Dasar:</strong> Bagi peserta didik yang belum membaca dan belum memahami materi prasyarat (disediakan infografis ringkas dan kartu konsep bergambar).</li>
                  <li><strong>Konten Menengah:</strong> Bagi peserta didik yang sudah membaca tetapi belum mendalam memahami prasyarat (modul teks terarah dengan lembar panduan analisis).</li>
                  <li><strong>Konten Pengayaan:</strong> Bagi peserta didik yang sudah membaca dan memahami prasyarat (studi kasus komparatif dan problem-solving geologis lanjutan).</li>
                </ul>
              </div>

              <div class="bg-white p-3 rounded border border-indigo-100">
                <p class="font-bold text-indigo-800">b. Diferensiasi Proses:</p>
                <ul class="list-disc list-inside ml-2 text-gray-700">
                  <li>Peserta didik yang membutuhkan intervensi mendapatkan bimbingan porsi lebih intensif dari guru sebagai mentor langsung (scaffolding).</li>
                  <li>Peserta didik yang siap belajar melakukan kerja kelompok kolaboratif dengan guru berperan sebagai fasilitator berkeliling.</li>
                  <li>Peserta didik yang mahir dan cepat paham diberdayakan sebagai <em>tutor sebaya (peer mentor)</em> bagi rekannya yang memerlukan pendampingan.</li>
                </ul>
              </div>

              <div class="bg-white p-3 rounded border border-indigo-100">
                <p class="font-bold text-indigo-800">c. Diferensiasi Produk:</p>
                <p class="mt-1">Hasil laporan telaah akhir disesuaikan dengan minat dan profil belajar siswa: dapat berupa Mind Mapping visual berwarna, infografis digital, poster dinding, atau resume laporan tertulis terstruktur.</p>
              </div>
            </div>
          </div>

          <div class="p-4 border border-amber-200 rounded-lg bg-amber-50">
            <h4 class="font-bold text-amber-900 text-base mb-3">D. INTERNALISASI BUDAYA & NILAI KHUSUS SEKOLAH</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div class="bg-white p-3 rounded border border-amber-100">
                <p class="font-bold text-amber-800">a. Sekolah Adiwiyata (Lingkungan Hidup):</p>
                <p class="text-gray-700 mt-1">Membantu peserta didik mengaitkan letak geografis dan iklim dengan kondisi ekosistem lokal serta pelestarian lingkungan hidup di sekitar sekolah.</p>
              </div>

              <div class="bg-white p-3 rounded border border-amber-100">
                <p class="font-bold text-amber-800">b. Anti Perundungan (Anti-Bullying):</p>
                <p class="text-gray-700 mt-1">Menumbuhkan empati dan budaya saling mendampingi teman yang kesulitan belajar secara inklusif tanpa mengejek atau meremehkan.</p>
              </div>

              <div class="bg-white p-3 rounded border border-amber-100">
                <p class="font-bold text-amber-800">c. Toleransi & Moderasi Beragama:</p>
                <p class="text-gray-700 mt-1">Membangun pemahaman kearifan lokal dan keberagaman suku/budaya akibat kondisi geografis kepulauan Indonesia guna memperkuat persatuan.</p>
              </div>

              <div class="bg-white p-3 rounded border border-amber-100">
                <p class="font-bold text-amber-800">d. Digitalisasi Sekolah:</p>
                <p class="text-gray-700 mt-1">Mengoptimalkan penggunaan gawai (smartphone/tablet), LCD Proyektor, Google Earth/Peta Digital, serta aplikasi edukatif interaktif.</p>
              </div>
            </div>
          </div>

          <div class="p-4 border border-gray-300 rounded bg-gray-50">
            <h4 class="font-bold text-gray-900 mb-1">E. PEMAHAMAN BERMAKNA & PERTANYAAN PEMANTIK</h4>
            <p class="text-sm text-gray-800"><strong>Pemahaman Bermakna:</strong> Peserta didik mampu memahami dampak letak astronomis, geografis, serta iklim terhadap kekayaan dan keragaman alam Indonesia.</p>
            <p class="text-sm text-gray-800 mt-2"><strong>Pertanyaan Pemantik:</strong> <em>"Apa sebab negara kita mempunyai banyak gunung api aktif, memiliki 2 musim (kemarau dan hujan), serta terdiri dari ribuan pulau yang membentang luas?"</em></p>
          </div>
        </div>
      `
    },
    {
      id: 'ref-langkah-kegiatan',
      title: 'IV. LANGKAH-LANGKAH KEGIATAN PEMBELAJARAN LENGKAP',
      content: `
        <div class="space-y-6 text-sm">
          <!-- Pendahuluan -->
          <div class="border border-blue-300 rounded-lg overflow-hidden">
            <div class="bg-blue-600 text-white font-bold p-3">
              1. KEGIATAN PENDAHULUAN (15 Menit)
            </div>
            <div class="p-4 bg-white space-y-2 text-gray-800">
              <ul class="list-disc list-inside space-y-1">
                <li>Guru masuk kelas, mengucapkan salam, memimpin doa bersama, mengecek kebersihan kelas, kerapihan siswa, dan memeriksa presensi kehadiran.</li>
                <li><strong>Apersepsi:</strong> Guru mengajukan pertanyaan pemantik mengenai proses geografis dan keragaman alam Indonesia.</li>
                <li><strong>Motivasi:</strong> Guru menyajikan gambar Peta Asia Tenggara dan meminta siswa mengamati batas-batas geografis wilayah kedaulatan Indonesia.</li>
                <li>Guru menyampaikan tujuan pembelajaran dan cakupan materi yang akan dipelajari.</li>
                <li><strong>Ice Breaking / Tes Konsentrasi:</strong> Permainan fokus arah mata angin untuk membangkitkan semangat belajar.</li>
              </ul>
            </div>
          </div>

          <!-- Inti -->
          <div class="border border-green-300 rounded-lg overflow-hidden">
            <div class="bg-green-600 text-white font-bold p-3">
              2. KEGIATAN INTI (55 Menit) - Problem Based Learning & Kolaboratif
            </div>
            <div class="p-4 bg-white space-y-3 text-gray-800">
              <ol class="list-decimal list-inside space-y-2">
                <li><strong>Orientasi Masalah:</strong> Guru menyajikan materi dan video singkat tentang keadaan geologis Indonesia (Ring of Fire) dan pengaruh letak astronomis terhadap 3 zona waktu.</li>
                <li><strong>Pengorganisasian Belajar:</strong> Guru membagi peserta didik menjadi 5 kelompok heterogen untuk membedah studi kasus masalah geografis.</li>
                <li><strong>Penyelidikan & Analisis:</strong> Guru membagikan lembar kerja (LKPD) analisis kepada 5 kelompok. Peserta didik berdiskusi dengan diferensiasi bimbingan guru dan tutor sebaya.</li>
                <li><strong>Dokumentasi Hasil:</strong> Setiap kelompok menuliskan resume hasil analisis pada selembar kertas dibuat rangkap 2 (1 rangkap untuk arsip kelompok, 1 rangkap diserahkan ke guru).</li>
                <li><strong>Presentasi Silang Antar-Kelompok:</strong> Perwakilan kelompok mempresentasikan hasil diskusi secara bergiliran dengan sistem tanggapan silang terstruktur:
                  <div class="ml-4 mt-1 p-2 bg-gray-100 rounded text-xs">
                    • Kelompok 1 ditanggapi oleh Kelompok 3<br>
                    • Kelompok 2 ditanggapi oleh Kelompok 4<br>
                    • Kelompok 3 ditanggapi oleh Kelompok 5<br>
                    • Kelompok 4 ditanggapi oleh Kelompok 1<br>
                    • Kelompok 5 ditanggapi oleh Kelompok 2
                  </div>
                </li>
                <li><strong>Evaluasi & Penguatan:</strong> Guru membimbing refleksi kelas, meluruskan miskonsepsi, dan memberikan penguatan konsep ilmiah.</li>
              </ol>
            </div>
          </div>

          <!-- Penutup -->
          <div class="border border-amber-300 rounded-lg overflow-hidden">
            <div class="bg-amber-600 text-white font-bold p-3">
              3. KEGIATAN PENUTUP (10 Menit)
            </div>
            <div class="p-4 bg-white space-y-2 text-gray-800">
              <ul class="list-disc list-inside space-y-1">
                <li>Guru bersama peserta didik menarik kesimpulan umum dari seluruh materi yang dipelajari.</li>
                <li>Guru dan siswa melakukan refleksi diri terhadap proses kegiatan belajar mengajar (KBM).</li>
                <li><strong>Refleksi Emosional:</strong> Guru menanyakan perasaan siswa tentang pembelajaran hari ini dengan menggambar emoticon (senang, paham, tertantang) pada lembar kelompok.</li>
                <li>Guru memberikan arahan tindak lanjut dan gambaran materi untuk pertemuan berikutnya.</li>
                <li>Menutup pembelajaran dengan doa bersama dan salam penutup.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ref-lampiran-sikap',
      title: 'V. LAMPIRAN I, II & III: INSTRUMEN PENILAIAN SIKAP (SPIRITUAL & SOSIAL)',
      content: `
        <div class="space-y-6 text-sm">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">LAMPIRAN I: JURNAL PENILAIAN SIKAP SPIRITUAL (KI.1)</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-blue-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400 w-24">Waktu</th>
                    <th class="p-2 border border-gray-400 w-36">Nama Siswa</th>
                    <th class="p-2 border border-gray-400">Catatan Perilaku</th>
                    <th class="p-2 border border-gray-400 w-28">Butir Sikap</th>
                    <th class="p-2 border border-gray-400 w-36">Tindak Lanjut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                    <td class="p-2 border border-gray-400">Jumat, 08.00</td>
                    <td class="p-2 border border-gray-400 font-medium">Ahmad Fauzi</td>
                    <td class="p-2 border border-gray-400">Tidak melaksanakan sholat Jumat yang diselenggarakan di sekolah</td>
                    <td class="p-2 border border-gray-400">Ketaqwaan</td>
                    <td class="p-2 border border-gray-400">Dipanggil dan dinasihati guru</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">2</td>
                    <td class="p-2 border border-gray-400">Senin, 07.15</td>
                    <td class="p-2 border border-gray-400 font-medium">Budi Santoso</td>
                    <td class="p-2 border border-gray-400">Mengganggu teman yang sedang berdoa sebelum pelajaran dimulai</td>
                    <td class="p-2 border border-gray-400">Ketaqwaan & Toleransi</td>
                    <td class="p-2 border border-gray-400">Dipanggil dan dinasihati guru</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">3</td>
                    <td class="p-2 border border-gray-400">Rabu, 12.10</td>
                    <td class="p-2 border border-gray-400 font-medium">Citra Lestari</td>
                    <td class="p-2 border border-gray-400">Mengingatkan temannya untuk melaksanakan sholat Dzuhur berjamaah</td>
                    <td class="p-2 border border-gray-400">Toleransi Hidup Beragama</td>
                    <td class="p-2 border border-gray-400 text-green-700 font-semibold">Mendapat Pujian</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="mt-3">
              <h5 class="font-semibold text-gray-800 text-xs mb-1">Format Deskripsi Sikap Spiritual:</h5>
              <table class="w-full text-left border border-gray-300 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 border border-gray-300 w-12 text-center">No</th>
                    <th class="p-2 border border-gray-300 w-44">Nama</th>
                    <th class="p-2 border border-gray-300">Deskripsi Nilai Sikap Spiritual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-1 border text-center">1</td><td class="p-1 border">Ahmad Fauzi</td><td class="p-1 border">Ketaqwaan sudah mulai berkembang, perlu pembiasaan ibadah rutin.</td></tr>
                  <tr><td class="p-1 border text-center">2</td><td class="p-1 border">Budi Santoso</td><td class="p-1 border">Ketaqwaan dan adab berdoa perlu bimbingan lebih lanjut.</td></tr>
                  <tr><td class="p-1 border text-center">3</td><td class="p-1 border">Citra Lestari</td><td class="p-1 border">Toleransi dan ketaqwaan beribadah meningkat sangat baik.</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mt-6">
            <h4 class="font-bold text-gray-900 mb-2">LAMPIRAN II & III: JURNAL PENILAIAN SIKAP SOSIAL (KI.2)</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-green-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400 w-24">Waktu</th>
                    <th class="p-2 border border-gray-400 w-36">Nama Siswa</th>
                    <th class="p-2 border border-gray-400">Catatan Perilaku</th>
                    <th class="p-2 border border-gray-400 w-28">Butir Sikap</th>
                    <th class="p-2 border border-gray-400 w-36">Tindak Lanjut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                    <td class="p-2 border border-gray-400">Selasa, 06.45</td>
                    <td class="p-2 border border-gray-400 font-medium">Dewi Sartika</td>
                    <td class="p-2 border border-gray-400">Menolong orang lanjut usia menyeberang jalan di depan sekolah</td>
                    <td class="p-2 border border-gray-400">Kepedulian</td>
                    <td class="p-2 border border-gray-400 text-green-700 font-semibold">Mendapat Pujian</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">2</td>
                    <td class="p-2 border border-gray-400">Kamis, 09.30</td>
                    <td class="p-2 border border-gray-400 font-medium">Eko Prasetyo</td>
                    <td class="p-2 border border-gray-400">Berbohong ketika ditanya alasan tidak masuk sekolah di ruang guru</td>
                    <td class="p-2 border border-gray-400">Kejujuran</td>
                    <td class="p-2 border border-gray-400">Dipanggil dan dinasihati guru</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">3</td>
                    <td class="p-2 border border-gray-400">Jumat, 10.00</td>
                    <td class="p-2 border border-gray-400 font-medium">Fajar Ramadhan</td>
                    <td class="p-2 border border-gray-400">Menyerahkan dompet yang ditemukannya di halaman sekolah kepada Guru BP</td>
                    <td class="p-2 border border-gray-400">Kejujuran</td>
                    <td class="p-2 border border-gray-400 text-green-700 font-semibold">Mendapat Pujian</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center">4</td>
                    <td class="p-2 border border-gray-400">Senin, 11.00</td>
                    <td class="p-2 border border-gray-400 font-medium">Gilang Pratama</td>
                    <td class="p-2 border border-gray-400">Mempengaruhi teman untuk tidak masuk sekolah (membolos)</td>
                    <td class="p-2 border border-gray-400">Kedisiplinan</td>
                    <td class="p-2 border border-gray-400">Dipanggil dan dinasihati guru</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ref-lampiran-pengetahuan-keterampilan',
      title: 'VI. LAMPIRAN IV: PENILAIAN PENGETAHUAN & KETERAMPILAN (LKPD & RUBRIK)',
      content: `
        <div class="space-y-6 text-sm">
          <!-- Penilaian Pengetahuan -->
          <div>
            <h4 class="font-bold text-gray-900 mb-2">A. PENILAIAN PENGETAHUAN</h4>
            
            <div class="mb-4">
              <h5 class="font-semibold text-gray-800 text-xs mb-1">1. Kisi-Kisi Soal Pengetahuan (Uraian):</h5>
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400">Tema / Materi Pokok</th>
                    <th class="p-2 border border-gray-400">Sub Materi</th>
                    <th class="p-2 border border-gray-400">Indikator Soal</th>
                    <th class="p-2 border border-gray-400 w-16 text-center">Bentuk</th>
                    <th class="p-2 border border-gray-400 w-12 text-center">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2 border border-gray-400 text-center" rowspan="4">1</td>
                    <td class="p-2 border border-gray-400" rowspan="4">Kondisi geografis dan pelestarian sumber daya alam</td>
                    <td class="p-2 border border-gray-400">a. Letak Geografis</td>
                    <td class="p-2 border border-gray-400">Menjelaskan pengertian letak geografis Indonesia.</td>
                    <td class="p-2 border border-gray-400 text-center">Uraian</td>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400">b. Letak Geologis</td>
                    <td class="p-2 border border-gray-400">Menjelaskan dampak letak geologis Indonesia bagi bentang alam.</td>
                    <td class="p-2 border border-gray-400 text-center">Uraian</td>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400">c. Letak Astronomis</td>
                    <td class="p-2 border border-gray-400">Menyebutkan letak astronomis Indonesia dan dampaknya.</td>
                    <td class="p-2 border border-gray-400 text-center">Uraian</td>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-gray-400">d. Iklim dan Musim</td>
                    <td class="p-2 border border-gray-400">Menjelaskan sebab seluruh wilayah Indonesia beriklim tropis.</td>
                    <td class="p-2 border border-gray-400 text-center">Uraian</td>
                    <td class="p-2 border border-gray-400 text-center">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="bg-gray-50 p-4 border border-gray-300 rounded space-y-3">
              <h5 class="font-bold text-gray-900">2. Butir Soal & Kunci Jawaban Lengkap:</h5>
              <div class="space-y-2 text-xs">
                <p><strong>Soal 1:</strong> Jelaskan pengertian letak geografis!</p>
                <p class="text-blue-900 bg-blue-50 p-2 rounded"><em>Jawaban:</em> Letak geografis adalah letak suatu daerah atau wilayah yang dilihat dari kenyataan aslinya di permukaan bumi (Indonesia di antara Benua Asia - Australia dan Samudera Hindia - Pasifik).</p>
                
                <p><strong>Soal 2:</strong> Jelaskan letak geologis Indonesia dan dampaknya bagi Indonesia!</p>
                <p class="text-blue-900 bg-blue-50 p-2 rounded"><em>Jawaban:</em> Indonesia terletak pada pertemuan tiga lempeng tektonik besar (Indo-Australia, Eurasia, dan Pasifik) serta dua jalur pegunungan muda dunia (Sirkum Pasifik dan Sirkum Mediterania), sehingga dampaknya memiliki banyak gunung api aktif dan tanah vulkanik yang sangat subur.</p>

                <p><strong>Soal 3:</strong> Sebutkan letak astronomis Indonesia dan dampaknya bagi keragaman alam Indonesia!</p>
                <p class="text-blue-900 bg-blue-50 p-2 rounded"><em>Jawaban:</em> Letak astronomis Indonesia berada di antara 6° LU – 11° LS dan 95° BT – 141° BT. Dampaknya: berada di zona tropis (panas dan lembap sepanjang tahun) serta terbagi menjadi 3 zona daerah waktu (WIB, WITA, WIT).</p>

                <p><strong>Soal 4:</strong> Jelaskan apa sebab seluruh wilayah Indonesia beriklim tropis?!</p>
                <p class="text-blue-900 bg-blue-50 p-2 rounded"><em>Jawaban:</em> Seluruh wilayah Indonesia beriklim tropis karena berada di wilayah lintang rendah (kurang dari 23,5° LU dan 23,5° LS) dan dilalui langsung oleh garis khatulistiwa (ekuator).</p>
              </div>

              <div class="mt-2 text-xs font-semibold text-gray-700">
                Pedoman Penskoran: Tiap soal benar & detail skor 5, benar kurang lengkap skor 3, salah skor 1. Skor Maks = 20.<br>
                <strong>Rumus Nilai Pengetahuan = (Skor Perolehan / Skor Maksimum) × 100</strong>
              </div>
            </div>
          </div>

          <!-- Penilaian Keterampilan -->
          <div class="mt-6">
            <h4 class="font-bold text-gray-900 mb-2">B. PENILAIAN KETERAMPILAN & UNJUK KERJA</h4>
            
            <div class="mb-4 bg-yellow-50 border border-yellow-200 p-3 rounded text-xs">
              <p class="font-bold text-yellow-900 mb-1">Tugas Kelompok (Studi Kasus 3 Daerah Waktu):</p>
              <p>Di Indonesia ada 3 perbedaan daerah waktu sehingga antar daerah waktu ada selisih sekitar 1 jam. Bagaimana perbedaan waktu di wilayah kalian dengan wilayah saudara kita di Aceh (WIB), NTB (WITA), dan Papua (WIT)? Diskusikan mengapa terjadi perbedaan waktu, titik meridian 00.00 (Greenwich), dan dampaknya bagi mobilitas masyarakat.</p>
            </div>

            <h5 class="font-semibold text-gray-800 text-xs mb-1">1. Lembar Observasi Kinerja Diskusi & Presentasi:</h5>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th rowspan="2" class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th rowspan="2" class="p-2 border border-gray-400 w-44">Nama Siswa</th>
                    <th colspan="4" class="p-1 border border-gray-400 text-center">Kemampuan Presentasi</th>
                    <th colspan="4" class="p-1 border border-gray-400 text-center">Kemampuan Bertanya</th>
                    <th colspan="4" class="p-1 border border-gray-400 text-center">Kemampuan Menjawab</th>
                    <th rowspan="2" class="p-2 border border-gray-400 w-16 text-center">Rerata Nilai</th>
                  </tr>
                  <tr class="bg-gray-50 text-center">
                    <th class="border p-1">4</th><th class="border p-1">3</th><th class="border p-1">2</th><th class="border p-1">1</th>
                    <th class="border p-1">4</th><th class="border p-1">3</th><th class="border p-1">2</th><th class="border p-1">1</th>
                    <th class="border p-1">4</th><th class="border p-1">3</th><th class="border p-1">2</th><th class="border p-1">1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-1 border text-center">1</td><td class="p-1 border">Ahmad Fauzi</td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="border"></td><td class="border"></td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="border"></td><td class="p-1 border text-center font-bold">92 (A)</td></tr>
                  <tr><td class="p-1 border text-center">2</td><td class="p-1 border">Budi Santoso</td><td class="border"></td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="border"></td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="border"></td><td class="border text-center">✓</td><td class="border"></td><td class="border"></td><td class="p-1 border text-center font-bold">75 (B)</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-gray-500 mt-1">Kriteria Nilai: A = 86–100 (Baik Sekali), B = 71–85 (Baik), C = 56–70 (Cukup), D = ≤ 55 (Kurang).</p>

            <h5 class="font-semibold text-gray-800 text-xs mt-4 mb-1">2. Lembar Penilaian Produk (Mind Mapping):</h5>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400">Nama Siswa</th>
                    <th class="p-2 border border-gray-400 text-center w-28">Kelayakan Bahasa (1-4)</th>
                    <th class="p-2 border border-gray-400 text-center w-28">Kelayakan Isi (1-4)</th>
                    <th class="p-2 border border-gray-400 text-center w-28">Kelayakan Kreativitas (1-4)</th>
                    <th class="p-2 border border-gray-400 text-center w-20">Skor Total</th>
                    <th class="p-2 border border-gray-400 text-center w-20">Nilai Akhir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="p-1 border text-center">1</td><td class="p-1 border">Kelompok 1 (Ketua: Ahmad Fauzi)</td><td class="p-1 border text-center">4</td><td class="p-1 border text-center">4</td><td class="p-1 border text-center">3</td><td class="p-1 border text-center font-semibold">11</td><td class="p-1 border text-center font-bold">3.67 (A)</td></tr>
                  <tr><td class="p-1 border text-center">2</td><td class="p-1 border">Kelompok 2 (Ketua: Dewi Sartika)</td><td class="p-1 border text-center">3</td><td class="p-1 border text-center">4</td><td class="p-1 border text-center">4</td><td class="p-1 border text-center font-semibold">11</td><td class="p-1 border text-center font-bold">3.67 (A)</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-gray-500 mt-1">Rumus Nilai Akhir Produk = (Skor Perolehan / Skor Maksimal 12) × 4</p>
          </div>
        </div>
      `
    },
    {
      id: 'ref-lampiran-tindak-lanjut',
      title: 'VII. LAMPIRAN V: PROGRAM TINDAK LANJUT (REMEDIAL & PENGAYAAN) & PENGESAHAN',
      content: `
        <div class="space-y-6 text-sm">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">LAMPIRAN V: PROGRAM TINDAK LANJUT</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-3 border border-red-200 rounded bg-red-50 text-xs">
                <p class="font-bold text-red-900 mb-1">Ketentuan Program Remedial:</p>
                <p class="text-gray-700">Diberikan kepada peserta didik yang belum mencapai ketuntasan/KKTP pada indikator tujuan pembelajaran yang telah ditentukan. Bentuk kegiatan: <em>Remedial Teaching</em> (penjelasan ulang konsep) dan <em>Remedial Test</em> (pemberian 5 soal latihan terarah).</p>
              </div>
              <div class="p-3 border border-green-200 rounded bg-green-50 text-xs">
                <p class="font-bold text-green-900 mb-1">Ketentuan Program Pengayaan:</p>
                <p class="text-gray-700">Diberikan kepada peserta didik yang telah melampaui capaian KKTP. Bentuk kegiatan: penugasan mandiri eksplorasi pengaruh iklim global terhadap keanekaragaman flora & fauna serta studi praktik pemetaan GIS.</p>
              </div>
            </div>

            <h5 class="font-semibold text-gray-800 text-xs mb-1">1. Format Pelaksanaan Program Remedial / Perbaikan:</h5>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400 w-24">Tanggal</th>
                    <th class="p-2 border border-gray-400 w-36">Nama Siswa</th>
                    <th class="p-2 border border-gray-400">Materi yang Belum Tuntas</th>
                    <th class="p-2 border border-gray-400 w-16 text-center">Nilai Awal</th>
                    <th class="p-2 border border-gray-400 w-28">Keterangan Bentuk</th>
                    <th class="p-2 border border-gray-400 w-20 text-center">Nilai Akhir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-1 border text-center">1</td>
                    <td class="p-1 border">24 Juli 2023</td>
                    <td class="p-1 border">Budi Santoso</td>
                    <td class="p-1 border">Analisis Pembagian 3 Daerah Waktu & Greenwich</td>
                    <td class="p-1 border text-center text-red-600 font-bold">58</td>
                    <td class="p-1 border">Remedial Teaching & Re-test 5 Soal</td>
                    <td class="p-1 border text-center text-green-700 font-bold">78</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="font-semibold text-gray-800 text-xs mt-4 mb-1">2. Format Pelaksanaan Program Pengayaan:</h5>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-gray-400 text-xs">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 border border-gray-400 w-8 text-center">No</th>
                    <th class="p-2 border border-gray-400 w-36">Materi Pengayaan</th>
                    <th class="p-2 border border-gray-400 w-36">Nama Siswa</th>
                    <th class="p-2 border border-gray-400 w-24">Hari / Tanggal</th>
                    <th class="p-2 border border-gray-400">Bentuk Pengayaan (Materi Tambahan / Praktik)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-1 border text-center">1</td>
                    <td class="p-1 border">Dampak Fenomena El Nino & La Nina di Indonesia</td>
                    <td class="p-1 border">Ahmad Fauzi, Dewi Sartika</td>
                    <td class="p-1 border">Jumat, 28 Juli 2023</td>
                    <td class="p-1 border">Pembuatan Infografis Analisis Dampak Anomali Cuaca terhadap Pertanian</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Pengesahan -->
          <div class="mt-8 border-t-2 border-gray-300 pt-6">
            <div class="flex justify-between items-start text-xs text-gray-800">
              <div class="text-left">
                <p>Mengetahui,</p>
                <p class="font-semibold">Kepala SMP Negeri 1 Tangen</p>
                <div class="h-16"></div>
                <p class="font-bold underline">Tri Wahyuni, M.Pd</p>
                <p>NIP. 19710223 199412 2 002</p>
              </div>
              <div class="text-right">
                <p>Tangen, 17 Juli 2023</p>
                <p class="font-semibold">Guru Mata Pelajaran IPS</p>
                <div class="h-16"></div>
                <p class="font-bold underline">Rini Prasetyowati, S.Pd</p>
                <p>NIP. -</p>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
