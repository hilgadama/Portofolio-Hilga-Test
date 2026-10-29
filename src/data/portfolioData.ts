export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'aksesibilitas' | 'konversi' | 'riset';
  client: string;
  year: string;
  duration: string;
  role: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  thumbnail: string;
  accentColor: string; // Pastel accent
  overview: string;
  challenge: string;
  researchInsights: {
    title: string;
    finding: string;
    method: string;
  }[];
  solutionApproach: string[];
  accessibilityImprovements: string[];
  conversionOptimization: string[];
  beforeAfter: {
    beforeLabel: string;
    beforeText: string;
    afterLabel: string;
    afterText: string;
    improvementMetric: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fluent-bank',
    title: 'Fluent Bank: Perbankan Inklusif & Onboarding Aksesibel',
    subtitle: 'Meningkatkan konversi registrasi dan aksesibilitas e-KYC bagi seluruh spektrum pengguna, termasuk lansia dan disabilitas visual.',
    category: 'aksesibilitas',
    client: 'Fluent Financial Technologies',
    year: '2025',
    duration: '4 Bulan',
    role: 'Lead UX Specialist & Accessibility Architect',
    thumbnail: '/src/assets/images/casestudy_fintech_ui_1793178792207.jpg',
    accentColor: '#3B82F6', // Futuristic Electric Blue
    metrics: [
      { label: 'Konversi Onboarding', value: '+42%', detail: 'Kenaikan penyelesaian verifikasi e-KYC pada percobaan pertama' },
      { label: 'Standar Kepatuhan', value: 'WCAG 2.1 AAA', detail: 'Memenuhi rasio kontras 7:1 dan navigasi screen reader penuh' },
      { label: 'System Usability Score', value: '92.4 / 100', detail: 'Meningkat dari skor awal 58.2 (kategori Marjin Bawah)' },
      { label: 'Penurunan Tiket Keluhan', value: '-65%', detail: 'Pengurangan drastis kebingungan alur verifikasi foto KTP' },
    ],
    overview: 'Fluent Bank mengalami tingkat drop-off hingga 58% pada tahapan e-KYC mobile onboarding, terutama pada segmen pengguna di atas 45 tahun dan pengguna dengan keterbatasan penglihatan. Melalui riset kualitatif dan pengujian kegunaan partisipatoris, kami mendesain ulang arsitektur informasi, memberikan umpan balik taktil dan audio, serta menyederhanakan formulir input yang sebelumnya membebani daya kognitif pengguna.',
    challenge: 'Pengguna merasa cemas dan frustrasi ketika foto e-KTP dan swafoto biometrik mereka berulang kali ditolak tanpa alasan yang transparan. Petunjuk visual sebelumnya berukuran kecil (12px), memiliki kontras rendah (2.4:1), dan tidak mendukung pembaca layar (TalkBack & VoiceOver).',
    researchInsights: [
      {
        title: 'Beban Kognitif Berlebih pada Formulir',
        finding: '8 dari 10 responden lansia merasa panik saat waktu hitung mundur verifikasi wajah berjalan tanpa instruksi audio yang jelas.',
        method: 'Contextual Inquiry & Eye-tracking (24 Partisipan)'
      },
      {
        title: 'Kegagalan Pemindaian e-KTP yang Membingungkan',
        finding: 'Pengguna tidak memahami mengapa foto mereka kabur karena tidak ada deteksi pencahayaan instan dan panduan kontur cerdas.',
        method: 'Usability Testing di Laboratorium Pengujian'
      },
      {
        title: 'Kebutuhan Umpan Balik Multi-Sensorik',
        finding: 'Pengguna disabilitas netra sangat terbantu ketika getaran haptic dan panduan suara memberi tahu posisi dokumen secara presisi.',
        method: 'Participatory Design bersama Komunitas Tunanetra'
      }
    ],
    solutionApproach: [
      'Mendesain ulang alur verifikasi dengan Smart Viewport Framing yang memberikan panduan suara dan getaran haptic saat kamera berada di sudut ideal.',
      'Menerapkan tipografi adaptif dengan hierarki skala teks dinamis hingga 200% tanpa terjadi text clipping atau tumpang tindih tata letak.',
      'Menyediakan fallback mode kontras ultra-tinggi yang dapat diaktifkan dalam satu sentuhan langsung di layar pembuka.',
      'Menghilangkan batasan waktu kaku dengan timer fleksibel dan opsi simpan draft otomatis.'
    ],
    accessibilityImprovements: [
      'Rasio kontras seluruh teks utama dan tombol aksi dinaikkan menjadi 8.2:1 (melampaui syarat WCAG AAA).',
      'Target sentuh (touch target) minimum diperbesar menjadi 48 x 48 dp dengan jarak aman 12 dp antar elemen interaktif.',
      'Pelabelan ARIA komprehensif pada setiap elemen formulir dan status live region untuk screen reader.',
      'Dukungan penuh navigasi keyboard satu tangan dan switch access.'
    ],
    conversionOptimization: [
      'Mengurangi jumlah langkah formulir dari 9 langkah bertele-tele menjadi 3 tahapan tematik yang transparan.',
      'Memberikan estimasi waktu nyata ("Hanya butuh 90 detik") yang terbukti mereduksi abandonment rate hingga 35%.',
      'Mikro-interaksi konfirmasi instan dengan tanda centang animasi yang menenangkan kecemasan pengguna.'
    ],
    beforeAfter: {
      beforeLabel: 'Alur Lama (Drop-off 58%)',
      beforeText: 'Formulir padat tanpa panduan, teks 12px kontras rendah, verifikasi kamera sering gagal tanpa feedback alasan spesifik.',
      afterLabel: 'Alur Baru (Drop-off 16%)',
      afterText: 'Alur 3 langkah intuitif, panduan suara & haptic, kontras tinggi WCAG AAA, deteksi e-KTP pintar secara real-time.',
      improvementMetric: 'Konversi naik +42% dalam 60 hari peluncuran'
    },
    testimonial: {
      quote: 'Hilga membawa perspektif inklusivitas yang tidak hanya menyentuh empati manusia, tapi juga langsung mendongkrak metrik bisnis perbankan kami. Tim engineering kami belajar banyak tentang standar WCAG dari beliau.',
      author: 'Reza Pramudya',
      role: 'Head of Product Management',
      company: 'Fluent Bank'
    }
  },
  {
    id: 'mediconnect-app',
    title: 'Mediconnect: Triase Gejala & Telemedisin Cepat',
    subtitle: 'Mereduksi kecemasan pasien dan memangkas waktu booking dokter spesialis lewat perancangan interaksi empatik.',
    category: 'riset',
    client: 'Mediconnect Digital Healthcare',
    year: '2025',
    duration: '3 Bulan',
    role: 'Senior UX Researcher & Interaction Designer',
    thumbnail: '/src/assets/images/casestudy_health_ui_1793178792228.jpg',
    accentColor: '#0EA5E9', // Futuristic Ocean Azure / Cyan
    metrics: [
      { label: 'Booking Dokter Selesai', value: '+68%', detail: 'Peningkatan tingkat penyelesaian janji temu dari awal triase' },
      { label: 'Waktu Alur Triase', value: '-75%', detail: 'Memangkas waktu identifikasi gejala dari 6 menit menjadi 90 detik' },
      { label: 'Task Success Rate', value: '96.2%', detail: 'Pengguna berhasil menemukan dokter tepat tanpa beralih ke aplikasi lain' },
      { label: 'Rating Kepuasan Pengguna', value: '4.9 / 5.0', detail: 'Berdasarkan 1.800+ survei in-app paska konsultasi' },
    ],
    overview: 'Saat pengguna sedang sakit atau cemas, kapasitas kognitif mereka menurun drastis. Mediconnect sebelumnya membebani pasien dengan puluhan pertanyaan medis yang membingungkan dan daftar dokter panjang tanpa rekomendasi spesialis yang relevan. Kami merestrukturisasi seluruh pengalaman konsultasi dengan pendekatan triase berorientasi bahasa manusiawi.',
    challenge: 'Pasien yang panik merasa bingung memilih spesialisasi medis yang tepat (misalnya perbedaan antara spesialis penyakit dalam dan gastroenterologi). 44% pengguna keluar dari aplikasi di tengah kuesioner gejala karena merasa lelah menjawab pertanyaan teknis.',
    researchInsights: [
      {
        title: 'Kecemasan Meningkatkan Kelelahan Kognitif',
        finding: 'Pasien tidak mencari istilah medis latin; mereka mendeskripsikan sakit dengan bahasa sehari-hari ("kepala berdenyut", "perut melilit").',
        method: '32 Wawancara Mendalam & Diary Study Pasien'
      },
      {
        title: 'Kebimbangan Memilih Dokter',
        finding: 'Jadwal dokter yang rumit dan ketiadaan info estimasi waktu tunggu konsultasi menyebabkan penundaan transaksi.',
        method: 'Card Sorting & Treejack Testing'
      },
      {
        title: 'Kepercayaan terhadap Riwayat Dokter',
        finding: 'Pengguna lebih memprioritaskan ulasan pasien terdahulu dan rumah sakit afiliasi dokter dibanding nomor registrasi izin praktik.',
        method: 'Survey Kuantitatif (N = 650 responden)'
      }
    ],
    solutionApproach: [
      'Mengembangkan Smart Conversational Symptom Checker yang memetakan keluhan bahasa sehari-hari ke spesialisasi medis yang akurat.',
      'Kartu profil dokter yang didesain ringkas dengan status ketersediaan langsung ("Online Sekarang / Siap Melayani dalam 5 Menit").',
      'Desain palet warna monokromatik menenangkan dengan aksen pastel sage yang menurunkan tingkat stres psikologis pengguna.',
      'Sistem konfirmasi 1-halaman yang merangkum waktu, dokter, dan opsi pembayaran tanpa perpindahan halaman yang membingungkan.'
    ],
    accessibilityImprovements: [
      'Ukuran font dinamis yang mendukung pembesaran sistem bagi pasien lanjut usia.',
      'Tata letak tanpa animasi kilat (zero motion trigger) untuk mencegah ketidaknyamanan pasien vertigo atau migrain.',
      'Alternatif teks deskriptif untuk diagram anatomi tubuh interaktif.',
      'Transkrip audio otomatis untuk rekaman ringkasan resep dokter.'
    ],
    conversionOptimization: [
      'Penurunan jumlah pertanyaan triase dari 28 pertanyaan menjadi 5 pertanyaan adaptif dinamis.',
      'Slot waktu dokter disajikan dalam format visual kalender horizontal yang mudah dipilih dengan jempol satu tangan.',
      'Integrasi garansi uang kembali transparan yang meningkatkan kepercayaan transaksi pertama kali hingga 52%.'
    ],
    beforeAfter: {
      beforeLabel: 'Sistem Triase Lama (6 Menit)',
      beforeText: 'Kuesioner 28 pertanyaan medis kaku, dropdown daftar dokter panjang tanpa kurasi, tingkat selesai 32%.',
      afterLabel: 'Sistem Triase Empatik (90 Detik)',
      afterText: 'Panduan gejala ramah 5 langkah, rekomendasi 3 dokter terbaik seketika, tingkat selesai 84%.',
      improvementMetric: 'Penyelesaian janji temu melonjak +68%'
    },
    testimonial: {
      quote: 'Hilga berhasil mengubah proses medis yang menegangkan menjadi pengalaman digital yang ramah dan menenangkan. Hasil riset beliau menjadi fondasi roadmap produk kami sepanjang tahun.',
      author: 'dr. Amanda Clarissa',
      role: 'Chief Medical Officer',
      company: 'Mediconnect Healthcare'
    }
  },
  {
    id: 'nexa-ecommerce',
    title: 'Nexa Market: Checkout 1-Ketukan & Optimasi Funnel',
    subtitle: 'Menghilangkan friksi checkout e-commerce mobile dengan arsitektur mikro-interaksi dan prediksi alamat cerdas.',
    category: 'konversi',
    client: 'Nexa Retail Group',
    year: '2024 - 2025',
    duration: '5 Bulan',
    role: 'Lead UX Specialist & CRO Strategist',
    thumbnail: '/src/assets/images/casestudy_ecommerce_ui_1793178792130.jpg',
    accentColor: '#2563EB', // Futuristic Royal Blue
    metrics: [
      { label: 'Rata-rata Nilai Pesanan', value: '+31%', detail: 'Peningkatan Average Order Value berkat rekomendasi checkout cerdas' },
      { label: 'Penurunan Cart Abandonment', value: '-54%', detail: 'Keranjang belanja yang ditinggalkan turun dari 68% ke 31%' },
      { label: 'Kecepatan Selesai Bayar', value: '2.8x Lebih Cepat', detail: 'Waktu transaksi berkurang dari rata-rata 140 detik ke 50 detik' },
      { label: 'Tingkat Konversi Mobile', value: '4.8%', detail: 'Melesat dari baseline awal 2.1% di perangkat smartphone' },
    ],
    overview: 'Nexa Market memiliki lalu lintas pengunjung mobile yang masif, namun rasio konversi checkout sangat rendah karena alur transaksi yang terpecah menjadi 5 halaman terpisah. Setiap pergantian halaman memicu loading dan memicu keraguan pembeli. Melalui eksperimen A/B testing dan pemetaan beban mental pengguna, kami merancang ulang alur menjadi Single-Screen Adaptive Checkout.',
    challenge: 'Pengguna sering membatalkan transaksi karena biaya pengiriman dan voucher baru terlihat di halaman terakhir pembayaran. Selain itu, form pengisian alamat yang panjang dan rentan typo di layar ponsel menjadi titik gesekan terbesar.',
    researchInsights: [
      {
        title: 'Kejutan Biaya di Langkah Terakhir',
        finding: '62% responden yang membatalkan checkout menyatakan kecewa karena ongkos kirim dan biaya admin tidak diumumkan di awal.',
        method: 'Analisis Funnel Kuantitatif & Exit Intent Surveys'
      },
      {
        title: 'Frustrasi Pengetikan Alamat pada Ponsel',
        finding: 'Pengguna membutuhkan rata-rata 3 kali koreksi untuk mengisi kode pos dan kelurahan secara manual.',
        method: 'Session Recording & Heatmap Review (80.000+ Sesi)'
      },
      {
        title: 'Ketidakpastian Metode Pembayaran',
        finding: 'Pengguna enggan memilih metode bayar jika tidak melihat batas waktu transfer dan instruksi aplikasi bank yang familiar.',
        method: 'Moderated Usability Benchmark'
      }
    ],
    solutionApproach: [
      'Mengadopsi Single-Screen Checkout di mana ringkasan produk, alamat, ekspedisi, dan opsi pembayaran dapat diakses dalam satu kanvas geser yang mulus.',
      'Penyematan API Alamat Cerdas berbasis GPS & autocomplete yang memangkas pengisian form alamat dari 7 kolom menjadi 1 kolom.',
      'Transparansi total harga (Zero Hidden Fees) dengan kalkulasi ongkir dinamis sejak keranjang belanja pertama.',
      'Fitur Instant Slide to Pay untuk otentikasi biometrik wajah/sidik jari yang memberikan sensasi kepuasan transaksi.'
    ],
    accessibilityImprovements: [
      'Semua bidang input formulir memiliki label permanen di atas kolom (bukan sekadar placeholder yang hilang saat diketik).',
      'Pesan error formulir ditampilkan tepat di bawah kolom bermasalah dengan ikon penjelas dan saran perbaikan spesifik.',
      'Indikator fokus keyboard berkontras tinggi untuk pengguna tablet dan bluetooth keyboard.',
      'Tidak mengandalkan kode warna merah/hijau saja untuk status validasi pembayaran.'
    ],
    conversionOptimization: [
      'Menyajikan opsi ekspedisi dalam 3 kartu pilihan jelas: "Termurah", "Paling Cepat", dan "Reguler".',
      'Micro-copy persuasif yang menegaskan keamanan enkripsi 256-bit dan garansi retur gratis 7 hari.',
      'Pemberian opsi simpan kartu atau metode bayar instan (GoPay, OVO, QRIS, Virtual Account) dalam 1 ketukan.'
    ],
    beforeAfter: {
      beforeLabel: 'Checkout 5-Langkah Tradisional',
      beforeText: '5 halaman berturut-turut, hidden fee di akhir, form alamat manual 7 baris, cart abandonment 68%.',
      afterLabel: 'Single-Screen Instant Checkout',
      afterText: 'Semua detail dalam 1 kanvas adaptif, autokomplit GPS, zero hidden fee, cart abandonment 31%.',
      improvementMetric: 'Konversi penjualan melonjak +128% secara agregat'
    },
    testimonial: {
      quote: 'Peningkatan rasio konversi yang dicapai Hilga melampaui target Q4 kami. Ketelitian beliau menganalisis setiap milidetik interaksi dan friksi visual adalah standar emas bagi UX designer modern.',
      author: 'Fajar Dewantara',
      role: 'VP of Growth & Digital Commerce',
      company: 'Nexa Retail Group'
    }
  },
  {
    id: 'lumina-design-system',
    title: 'Lumina: Sistem Desain & Tata Kelola Aksesibilitas',
    subtitle: 'Skalabilitas multi-platform dengan 120+ komponen bersertifikasi WCAG dan automated contrast checker.',
    category: 'aksesibilitas',
    client: 'Enterprise Core Platform',
    year: '2024',
    duration: '6 Bulan',
    role: 'Design System Architect & Accessibility Specialist',
    thumbnail: '/src/assets/images/casestudy_fintech_ui_1793178792207.jpg',
    accentColor: '#38BDF8', // Luminous Ice/Sky Blue
    metrics: [
      { label: 'Komponen Aksesibel', value: '120+', detail: 'Lengkap dengan dokumentasi ARIA pattern dan Storybook tests' },
      { label: 'Kecepatan Handover', value: '3x Lebih Cepat', detail: 'Penyelarasan token Figma ke kode React Tailwind' },
      { label: 'Pelanggaran Kontras', value: '0 Kasus', detail: 'Eliminasi total kegagalan audit WCAG di tingkat staging dan live' },
      { label: 'Efisiensi Desain Tim', value: '+45%', detail: 'Pengurangan duplikasi kerja pada 6 squad produk berbeda' },
    ],
    overview: 'Dengan pertumbuhan pesat tim produk yang terbagi dalam 6 squad independen, inkonsistensi antarmuka dan pelanggaran standar aksesibilitas menjadi masalah kritis. Kami membangun Lumina Design System dari dasar dengan filosofi "Accessibility-First", menyatukan token warna monokrom bergradasi presisi dengan dokumentasi interaktif yang memudahkan designer dan developer bekerja selaras.',
    challenge: 'Masing-masing squad menggunakan palet warna dan komponen tombol sendiri, menghasilkan pengalaman pengguna yang terfragmentasi. Komponen dropdown, modal dialog, dan form input sebelumnya tidak bisa dioperasikan hanya dengan keyboard.',
    researchInsights: [
      {
        title: 'Fragmentasi Kode & Desain',
        finding: 'Ditemukan lebih dari 34 variasi tombol berbeda di aplikasi produksi yang membingungkan pengguna.',
        method: 'Comprehensive UI & Code Audit'
      },
      {
        title: 'Kesenjangan Pengetahuan Aksesibilitas Developer',
        finding: 'Developer ingin membangun produk aksesibel namun kekurangan dokumentasi praktis mengenai aria-expanded, aria-controls, dan focus trap.',
        method: 'Internal Engineering Interviews (18 Engineer)'
      },
      {
        title: 'Kebutuhan Dark Mode Otomatis',
        finding: 'Pengguna menginginkan mode gelap yang nyaman di mata tanpa mengorbankan kontras teks penting.',
        method: 'Survei Kepuasan Internal & Eksternal'
      }
    ],
    solutionApproach: [
      'Merancang arsitektur token semantik 3 tingkat: Global Tokens, Semantic Alias Tokens, dan Component-Specific Tokens.',
      'Mengintegrasikan linter aksesibilitas otomatis dalam pipeline CI/CD untuk mencegah merger komponen yang melanggar WCAG.',
      'Menyusun panduan mikro-interaksi dengan transisi motion halus di bawah 200ms yang menghargai preferensi prefers-reduced-motion.',
      'Menyediakan playground interaktif komponen di Storybook dengan switch pengetesan pembaca layar langsung.'
    ],
    accessibilityImprovements: [
      'Semua komponen dialog modal dilengkapi mekanisme focus trapping otomatis dan tombol close yang dapat diakses dengan tombol ESC.',
      'Sistem warna monokrom dengan palet pastel berjenjang yang selalu lolos uji kontras minimum 4.5:1 untuk teks normal.',
      'Penyediaan target sentuh adaptif pada komponen mobile dan tablet.',
      'Dukungan penuh untuk assistive technology dengan semantic HTML5 landmarks.'
    ],
    conversionOptimization: [
      'Inkonsistensi berkurang drastis sehingga rasa percaya pengguna terhadap keaslian dan keamanan brand meningkat.',
      'Proses rilis fitur baru menjadi 3x lebih cepat sehingga tim dapat mengeksekusi iterasi konversi berbasis data tanpa hambatan.',
      'Komponen formulir standar terbukti meningkatkan completion rate sebesar 22% di seluruh squad.'
    ],
    beforeAfter: {
      beforeLabel: 'Sebelum Lumina (34 Varian Tombol)',
      beforeText: 'Inkonsisten, sering gagal audit kontras, developer menebak styling, navigasi keyboard macet.',
      afterLabel: 'Setelah Lumina (120+ Komponen)',
      afterText: 'Satu sumber kebenaran, 100% lolos uji WCAG, handover instan via token Figma ke Tailwind, 0 komplain aksesibilitas.',
      improvementMetric: 'Sprint velocity meningkat 300% di seluruh divisi'
    },
    testimonial: {
      quote: 'Lumina bukan hanya koleksi komponen, melainkan transformasi budaya kerja di perusahaan kami. Hilga membuat konsep aksesibilitas yang rumit menjadi sangat mudah diadopsi oleh semua engineer.',
      author: 'Dimas Satria',
      role: 'Staff Software Engineer & Frontend Chapter Lead',
      company: 'Enterprise Core Platform'
    }
  }
];

export const UX_METHODOLOGY = [
  {
    step: '01',
    title: 'Riset & Empati Pengguna',
    description: 'Menyelami masalah nyata pengguna dengan riset kualitatif dan kuantitatif untuk membongkar motivasi bawah sadar serta titik frustrasi mereka.',
    activities: ['Wawancara Pengguna Mendalam (In-Depth Interviews)', 'Contextual Inquiry & Field Observation', 'Diary Studies & Pemetaan Empati (Empathy Mapping)', 'Analisis Heatmap & Funnel Drop-off Kuantitatif'],
    deliverables: 'User Personas Berbasis Bukti, Peta Perjalanan Pengguna (Journey Map), Matriks Masalah & Peluang'
  },
  {
    step: '02',
    title: 'Definisi Masalah & HMW',
    description: 'Merumuskan tantangan inti menjadi pertanyaan terarah (How Might We) yang memadukan kebutuhan pengguna dengan sasaran objektif bisnis.',
    activities: ['Formulasi How Might We (HMW)', 'Analisis Tugas Kognitif & Jobs to Be Done (JTBD)', 'Arsitektur Informasi & Card Sorting', 'Audit Heuristik & Penilaian Aksesibilitas Awal'],
    deliverables: 'Problem Statement Matrix, Peta Arsitektur Informasi, Matriks Prioritas Fitur MoSCoW'
  },
  {
    step: '03',
    title: 'Desain Inklusif & Prototipe',
    description: 'Mengubah insight menjadi antarmuka nyata melalui eksplorasi wireframe cepat hingga prototipe interaktif berpresisi tinggi.',
    activities: ['Rapid Wireframing & Eksplorasi Wireflow', 'Prototipe Interaktif Berpola Mikro-Interaksi', 'Audit Aksesibilitas WCAG 2.1 (AA & AAA)', 'Penyusunan Sistem Desain & Token Semantik'],
    deliverables: 'Prototipe Figma High-Fidelity, Dokumen Spesifikasi Desain, Token Komponen Tailwind/CSS'
  },
  {
    step: '04',
    title: 'Pengujian & Optimasi Konversi',
    description: 'Menguji asumsi langsung kepada pengguna nyata untuk memvalidasi kemudahan pemakaian, aksesibilitas, dan metrik konversi bisnis.',
    activities: ['Usability Testing Moderated & Unmoderated', 'Pengukuran System Usability Scale (SUS)', 'A/B Testing & Eksperimen Multivariat', 'Iterasi Berkelanjutan Berbasis Data Perilaku'],
    deliverables: 'Laporan Usability Testing Terukur, Rekomendasi CRO Aksi Nyata, Panduan Implementasi Developer'
  }
];

export const TOOLCHAIN = [
  { name: 'Figma & FigJam', role: 'UI/UX Prototyping & Collaborative Synthesis', category: 'Design' },
  { name: 'Maze & Lookback', role: 'Unmoderated & Remote Usability Testing', category: 'Research' },
  { name: 'Dovetail', role: 'Qualitative Research Synthesis & Tagging', category: 'Research' },
  { name: 'OptimalSort', role: 'Information Architecture & Card Sorting', category: 'Research' },
  { name: 'ProtoPie', role: 'Advanced Sensor & Micro-interaction Prototyping', category: 'Design' },
  { name: 'axe DevTools & Lighthouse', role: 'WCAG Accessibility Audits & Contrast Checks', category: 'Accessibility' },
  { name: 'Hotjar & Clarity', role: 'Heatmaps & Session Behavioral Recordings', category: 'Analytics' },
  { name: 'Storybook & Tailwind', role: 'Design Tokens & Developer Handover', category: 'Code' },
];

export const TESTIMONIALS = [
  {
    quote: 'Hilga memiliki keahlian langka yang menggabungkan empati mendalam terhadap pengguna rentan dengan pemahaman tajam terhadap metrik bisnis. Konversi onboarding kami melonjak +42% karena kepemimpinan desain beliau.',
    author: 'Reza Pramudya',
    role: 'Head of Product Management',
    company: 'Fluent Financial Technologies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'Dalam industri kesehatan digital, kesalahan UX bisa fatal. Hilga membimbing kami menciptakan sistem triase yang tenang, jelas, dan ramah bagi pasien sakit tanpa jargon teknis yang membingungkan.',
    author: 'dr. Amanda Clarissa',
    role: 'Chief Medical Officer',
    company: 'Mediconnect Healthcare',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'Desain sistem Lumina karya Hilga menyelesaikan perang inkonsistensi antarmuka antartim. Developer kami senang karena semua komponen sudah teruji ARIA dan siap pakai dengan Tailwind.',
    author: 'Dimas Satria',
    role: 'Staff Software Engineer & Chapter Lead',
    company: 'Enterprise Core Platform',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const RESUME_DATA = {
  name: 'Hilga Damayanti',
  title: 'UX Specialist & Senior Product Designer',
  email: 'hilgadamayanti98@gmail.com',
  location: 'Jakarta, Indonesia · Tersedia untuk Kolaborasi Global & Remote',
  about: 'UX Specialist dengan pengalaman 6+ tahun dalam memimpin riset pengguna berbasis bukti, perancangan prototipe produk interaktif, kepatuhan aksesibilitas digital WCAG 2.1 AA/AAA, dan optimasi konversi (CRO). Berpengalaman di sektor Fintech, Healthtech, E-Commerce, dan Enterprise SaaS.',
  certifications: [
    { title: 'Nielsen Norman Group (NN/g) UX Master Certified', year: '2023', id: 'NN/g ID: UXMC-88421' },
    { title: 'Certified Professional in Accessibility Core Competencies (CPACC)', year: '2024', id: 'IAAP Certification' },
    { title: 'Google UX Design Professional Certificate', year: '2021', id: 'Coursera / Google' },
  ],
  experience: [
    {
      period: '2023 — Sekarang',
      role: 'Lead UX Specialist & Accessibility Lead',
      company: 'Fluent Technologies & Fintech Ecosystem',
      highlights: [
        'Memimpin strategi UX dan audit aksesibilitas untuk aplikasi perbankan dengan 2.4 juta pengguna aktif.',
        'Meningkatkan konversi registrasi e-KYC sebesar +42% melalui perancangan panduan haptic & suara.',
        'Mengarsiteki sistem desain inklusif dengan 120+ komponen terverifikasi WCAG 2.1 AAA.'
      ]
    },
    {
      period: '2021 — 2023',
      role: 'Senior UX Researcher & Interaction Designer',
      company: 'Mediconnect Healthcare Global',
      highlights: [
        'Melakukan lebih dari 120 sesi wawancara mendalam, contextual inquiry, dan usability testing dengan pasien dan tenaga medis.',
        'Merombak alur triase gejala yang memangkas waktu booking dokter sebesar 75% dan menaikkan kepuasan pengguna menjadi 4.9/5.',
        'Mengembangkan panduan desain empatik khusus telemedisin bagi tim lintas fungsi.'
      ]
    },
    {
      period: '2019 — 2021',
      role: 'UX / Product Designer',
      company: 'Nexa Retail Commerce Group',
      highlights: [
        'Merancang alur checkout 1-ketukan berbasis prediksi alamat pintar yang menurunkan cart abandonment sebesar 54%.',
        'Mengimplementasikan program A/B testing mingguan yang menaikkan rata-rata nilai pesanan (AOV) sebesar +31%.'
      ]
    }
  ],
  education: [
    {
      period: '2015 — 2019',
      degree: 'Sarjana Ilmu Komputer (S.Kom) — Peminatan Human-Computer Interaction (HCI)',
      institution: 'Universitas Indonesia',
      honors: 'Predikat Cum Laude · Penelitian Skripsi: Aksesibilitas Antarmuka Mobile untuk Lansia'
    }
  ]
};
