// Global definition of achievements with their conditions (functions)
const achievementsDefinitions = [
  {
    id: "first_task",
    condition: (state) => state.program.filter((d) => d.completed).length === 1,
    message: "Tugas Pertama Beres! ✨ Kamu udah mulai nih! Keren banget! 🔥",
    title: "Awal yang Baik!",
    description: "Selesaikan tugas pertamamu.",
  },
  {
    id: "five_tasks",
    condition: (state) => state.program.filter((d) => d.completed).length === 5,
    message:
      "Jagoan 5 Tugas! 💪 Udah lima tugas aja nih yang kelar! Progresmu gila sih! 🚀",
    title: "Lima Langkah Maju!",
    description: "Selesaikan 5 tugas.",
  },
  {
    id: "ten_tasks",
    condition: (state) =>
      state.program.filter((d) => d.completed).length === 10,
    message:
      "Sepuluh Tugas Terlampaui! 💯 Kamu udah separuh jalan, nih! Jangan kasih kendor! 😏",
    title: "Dekade Kreatif!",
    description: "Selesaikan 10 tugas.",
  },
  {
    id: "twenty_tasks",
    condition: (state) =>
      state.program.filter((d) => d.completed).length === 20,
    message:
      "Dua Puluh Tugas! 🎉 Kamu udah hampir selesai! Terus semangat yaa! 💪",
    title: "Dua Puluh Hari!",
    description: "Selesaikan 20 tugas.",
  },
  {
    id: "all_tasks",
    condition: (state) =>
      state.program.filter((d) => d.completed).length === state.program.length,
    message:
      "Semua Tugas Beres! 🏆 Kamu udah menyelesaikan semua program 30 hari! Ini baru namanya juara!👑",
    title: "Legenda 30 Hari!",
    description: "Selesaikan seluruh program 30 hari.",
  },

  {
    id: "first_upload",
    condition: (state) => state.program.some((d) => d.uploads.length > 0),
    message:
      "Karya Pertama Terunggah! 🎨 Lihat nih, hasil karyamu udah mejeng! Bangga banget! 🙌",
    title: "Debut Unggahan!",
    description: "Unggah karya pertamamu.",
  },
  {
    id: "five_uploads",
    condition: (state) =>
      state.program.reduce((acc, day) => acc + day.uploads.length, 0) >= 5,
    message:
      "Lima Karya Terkumpul! 🤩 Koleksimu makin banyak aja nih! Terus produktif yaa!💖",
    title: "Kolektor Pemula!",
    description: "Unggah 5 karya.",
  },
  {
    id: "ten_uploads",
    condition: (state) =>
      state.program.reduce((acc, day) => acc + day.uploads.length, 0) >= 10,
    message:
      "Kolektor 10 Karya! 🖼️ Galeri kamu makin rame aja nih! Terus berkarya yaa! 💖",
    title: "Galeri Penuh Warna!",
    description: "Unggah 10 karya.",
  },
  {
    id: "twenty_uploads",
    condition: (state) =>
      state.program.reduce((acc, day) => acc + day.uploads.length, 0) >= 20,
    message:
      "Dua Puluh Karya! 🌟 Wow, sudah 20 karya terkumpul! Kamu luar biasa! ✨",
    title: "Master Koleksi!",
    description: "Unggah 20 karya.",
  },

  {
    id: "one_skill_level_up",
    condition: (state) =>
      Object.values(state.skillProgress).some((count) => count >= 1),
    message:
      "Skill Level Up!📈 Ada skill yang udah nambah nih! Kamu emang multitalenta! 😎",
    title: "Skill Bertambah!",
    description: "Tingkatkan satu skill.",
  },
  {
    id: "five_skill_level_up",
    condition: (state) =>
      Object.values(state.skillProgress).reduce(
        (sum, count) => sum + count,
        0
      ) >= 5,
    message:
      "Lima Skill Naik! 🚀 Lima skill udah kamu tingkatkan! Bakatmu nggak ada habisnya! �",
    title: "Multitalenta!",
    description: "Tingkatkan total 5 skill.",
  },
  {
    id: "master_of_week",
    condition: (state) =>
      state.program.filter((d) => d.week === state.currentWeek && d.completed)
        .length === 7,
    message:
      "Minggu Ini Beres!🗓️ Satu minggu penuh tugas udah kamu taklukkan! Gila sih, semangatmu! 🎉",
    title: "Penguasa Minggu!",
    description: "Selesaikan semua tugas dalam satu minggu.",
  },

  {
    id: "first_edit",
    condition: (state) => state.hasEditedTask,
    message:
      "Editor Handal! ✏️ Kamu udah coba edit tugasmu sendiri, nih! Keren! 💪",
    title: "Editor Handal!",
    description: "Edit tugas pertamamu.",
  },
  {
    id: "first_new_task",
    condition: (state) => state.program.length > initialProgramData.length,
    message:
      "Kreator Konten! ➕ Kamu udah nambah tugas sendiri! Ide-idemu brilian! 💡",
    title: "Kreator Konten!",
    description: "Buat tugas barumu sendiri.",
  },
  {
    id: "dark_mode_on",
    condition: (state) => state.darkMode,
    message:
      "Mode Gelap Aktif! 🌙 Selamat datang di sisi gelap yang nyaman! 😎",
    title: "Penyelam Malam!",
    description: "Aktifkan mode gelap.",
  },
  {
    id: "task_bookmarked",
    condition: (state) => state.bookmarkedTasks.length >= 1,
    message:
      "Tugas Tersimpan! 🔖 Kamu udah bookmark tugas favoritmu! Biar nggak lupa, ya! 😉",
    title: "Pencatat Tugas!",
    description: "Bookmark satu tugas.",
  },
  {
    id: "visited_gallery",
    condition: (state) => state.hasVisitedGallery,
    message:
      "Penjelajah Galeri! 🖼️ Kamu udah lihat-lihat karya di galeri! Inspirasi baru, nih! ✨",
    title: "Penjelajah Galeri!",
    description: "Kunjungi halaman Galeri.",
  },
  {
    id: "visited_about",
    condition: (state) => state.hasVisitedAbout,
    message:
      "Kenalan Sama Developer! 👋 Kamu udah kepoin aku, nih! Makasih yaa! 😊",
    title: "Kenalan Baru!",
    description: "Kunjungi halaman Tentang Developer.",
  },
  {
    id: "app_reset",
    condition: (state) => state.hasResetApp,
    message:
      "Mulai Baru! 🔄 Kamu udah reset aplikasi! Siap untuk petualangan baru! 🎉",
    title: "Awal yang Baru!",
    description: "Reset aplikasi.",
  },
  {
    id: "first_program_completion",
    condition: (state) =>
      state.programHistory.length === 1 &&
      state.programHistory[0].status === "completed",
    message:
      "Siklus Pertama Selesai! ✅ Kamu udah menuntaskan satu siklus penuh! Luar biasa! 🌟",
    title: "Siklus Pertama!",
    description: "Selesaikan satu siklus program 30 hari.",
  },
  {
    id: "five_program_completion",
    condition: (state) =>
      state.programHistory.filter((p) => p.status === "completed").length >= 5,
    message:
      "Marathon 5 Siklus! 🏃 Kamu udah menyelesaikan 5 siklus program! Dedikasimu patut diacungi jempol! 💯",
    title: "Marathoner Kreatif!",
    description: "Selesaikan 5 siklus program.",
  },
  {
    id: "explore_all_pages",
    condition: (state) =>
      state.hasVisitedGallery &&
      state.hasVisitedAbout &&
      state.hasVisitedStats &&
      state.hasVisitedHistory &&
      state.currentPage !== "home" &&
      state.currentPage !== "program",
    message:
      "Penjelajah Sejati! 🗺️ Kamu udah menjelajahi semua halaman di aplikasi! Nggak ada yang terlewat! 🕵️‍♀️",
    title: "Penjelajah Sejati!",
    description: "Kunjungi semua halaman utama aplikasi.",
  },
  {
    id: "custom_task_master",
    condition: (state) => state.program.filter((d) => d.isCustom).length >= 5,
    message:
      "Master Tugas Kustom! ✍️ Kamu udah buat 5 tugas kustom! Ide-idemu brilian! 💡",
    title: "Master Kustom!",
    description: "Buat 5 tugas kustom.",
  },
  {
    id: "bookmark_collector",
    condition: (state) =>
      state.bookmarkedTasks.length + state.bookmarkedPrograms.length >= 10,
    message:
      "Kolektor Bookmark! 📚 Kamu udah kumpulin 10 bookmark! Semua ide penting aman! 💾",
    title: "Kolektor Bookmark!",
    description: "Kumpulkan 10 bookmark (tugas atau program).",
  },
  {
    id: "daily_streak_3",
    condition: (state) => state.consecutiveCompletedDays >= 3,
    message:
      "Streak 3 Hari! 🔥 Kamu udah konsisten 3 hari berturut-turut! Pertahankan! 💪",
    title: "Streak Pemula!",
    description: "Selesaikan tugas 3 hari berturut-turut.",
  },
  {
    id: "daily_streak_7",
    condition: (state) => state.consecutiveCompletedDays >= 7,
    message:
      "Streak 7 Hari! 🌟 Satu minggu penuh konsistensi! Kamu luar biasa! 🎉",
    title: "Streak Mingguan!",
    description: "Selesaikan tugas 7 hari berturut-turut.",
  },
  {
    id: "first_theme_change",
    condition: (state) => state.hasChangedTheme,
    message:
      "Fashionista Aplikasi! 💅 Kamu udah ganti tema aplikasi! Keren! ✨",
    title: "Perancang Tema!",
    description: "Ganti tema visual aplikasi.",
  },
  {
    id: "all_themes_unlocked",
    condition: (state) =>
      Object.values(state.premiumThemes).every((status) => status),
    message:
      "Kolektor Tema! 🌈 Semua tema sudah kamu aktifkan! Aplikasi makin cantik! 💖",
    title: "Kolektor Tema!",
    description: "Aktifkan semua tema visual.",
  },
  {
    id: "first_gallery_filter",
    condition: (state) => state.hasUsedGalleryFilter,
    message:
      "Penyaring Galeri! 🔍 Kamu udah coba filter galeri! Makin mudah cari karyamu! 🕵️‍♀️",
    title: "Penyaring Karya!",
    description: "Gunakan filter di halaman Galeri.",
  },
  {
    id: "first_history_view",
    condition: (state) => state.hasVisitedHistory,
    message:
      "Penjelajah Waktu! ⏳ Kamu udah lihat riwayat programmu! Progresmu nyata! 📈",
    title: "Penjelajah Waktu!",
    description: "Kunjungi halaman Riwayat Program.",
  },
  {
    id: "contact_developer",
    condition: (state) => state.hasContactedDeveloper,
    message:
      "Penyapa Developer! 👋 Kamu udah coba hubungi aku! Makasih banyak! 😊",
    title: "Penyapa Developer!",
    description: "Kirim pesan ke developer.",
  },
  {
    id: "first_skill_maxed",
    condition: (state) =>
      Object.values(state.skillProgress).some((count) => count >= 10),
    message:
      "Skill Master! 👑 Ada skill yang udah mencapai level maksimal! Kamu emang jagoan! 🔥",
    title: "Master Skill!",
    description: "Tingkatkan satu skill hingga 10 unggahan.",
  },
  {
    id: "all_skills_started",
    condition: (state) =>
      skillCategories.every((skill) => state.skillProgress[skill] > 0),
    message:
      "Penjelajah Skill! 🌟 Kamu udah coba semua kategori skill! Multitalenta abis! 🎨",
    title: "Penjelajah Skill!",
    description: "Unggah setidaknya satu karya untuk setiap kategori skill.",
  },
];

const initialProgramData = [
  {
    day: 1,
    week: 1,
    title: "Ide & Visi Brand",
    learn:
      "Konsep dasar branding personal/kreator & pentingnya identitas. Cari contoh brand seni/kreatif di Pinterest/Instagram.",
    do: 'Brainstorming 5-10 nama untuk brand kreatifmu. Tuliskan makna & "vibe" yang ingin kamu sampaikan.',
    result: "Daftar nama potensial dengan deskripsi singkat.",
    completed: false,
    uploads: [],
  },
  {
    day: 2,
    week: 1,
    title: "Finalisasi Nama & Imbuhan",
    learn: "Cara membuat nama brand yang mudah diingat & unik.",
    do: "Pilih 1 nama final. Buat 5-7 imbuhan/variasi untuk nama tersebut (cth: NatharaSketch, NatharaVerse).",
    result: "Nama brand definitif & daftar variasi imbuhan.",
    completed: false,
    uploads: [],
  },
  {
    day: 3,
    week: 1,
    title: "Bio Brand Kreatif",
    learn:
      "Cara menulis copy yang ringkas & menarik (siapa kamu, apa yang kamu lakukan, nilai apa yang kamu tawarkan).",
    do: "Buat 2 versi bio brand: satu singkat untuk media sosial (maks 150 karakter) & satu lebih panjang/formal untuk presentasi (maks 3-4 kalimat).",
    result: "Dua draf bio brand yang siap pakai.",
    completed: false,
    uploads: [],
  },
  {
    day: 4,
    week: 1,
    title: "Riset Inspirasi Visual",
    learn:
      "Pentingnya riset visual untuk menemukan gaya & estetika yang kamu suka.",
    do: "Riset 5 brand seni/kreatif yang kamu sukai secara visual (IG, Behance, Pinterest). Catat warna utama, gaya font, & gaya desain/ilustrasi.",
    result: "Kumpulan referensi visual & catatan poin-poin penting.",
    completed: false,
    uploads: [],
  },
  {
    day: 5,
    week: 1,
    title: "Penentuan Palet Warna",
    learn:
      'Dasar psikologi warna & bagaimana warna memengaruhi mood. Cari "color palette ideas".',
    do: "Berdasarkan riset & vibe brandmu, tentukan 3-5 warna utama untuk palet brandmu. Buat contoh palet ini.",
    result: "Palet warna brand yang sudah dipilih.",
    completed: false,
    uploads: [],
  },
  {
    day: 6,
    week: 1,
    title: "Pemilihan Font",
    learn:
      "Perbedaan jenis font (serif, sans-serif, display) & cara memadukannya. Cari font gratis di Google Fonts.",
    do: "Pilih 2 font utama (headline & body text) dan 1 font pelengkap (opsional) yang sesuai dengan vibe & palet warnamu.",
    result: "Nama font yang sudah kamu pilih & contoh kombinasinya.",
    completed: false,
    uploads: [],
  },
  {
    day: 7,
    week: 1,
    title: "Sketsa Logo Sederhana",
    learn: "Prinsip dasar desain logo (simpel, mudah diingat, versatile).",
    do: "Sketsa 5-10 ide logo sederhana di kertas. Bisa dari inisial, simbol, atau bentuk abstrak.",
    result: "Halaman penuh sketsa ide logo.",
    completed: false,
    uploads: [],
  },
  {
    day: 8,
    week: 2,
    title: "Digitalisasi Logo",
    learn:
      "Cara menggunakan aplikasi desain/ilustrasi di HP (ibisPaint, Canva, Vectornator). Cari tutorial dasar tools.",
    do: "Pilih 1-2 sketsa logo terbaikmu & digitalisasi menggunakan aplikasi di HP. Coba variasikan warna dari palet brandmu.",
    result: "Draf logo digital pertama yang sederhana.",
    completed: false,
    uploads: [],
  },
  {
    day: 9,
    week: 2,
    title: "Buat Akun & Profile Setup",
    learn:
      "Cara mengoptimalkan profil media sosial untuk kreator (gambar profil, header, bio).",
    do: "Buat akun brandmu di 1 platform pilihan (Instagram, Behance, atau Pinterest). Lengkapi profil dengan bio, logo, & palet warna.",
    result: "Akun brand yang sudah terisi profil dasarnya.",
    completed: false,
    uploads: [],
  },
  {
    day: 10,
    week: 2,
    title: "Post Perkenalan Brand",
    learn: "Cara membuat post media sosial yang menarik.",
    do: "Buat 1 post pertama: perkenalkan brandmu, ceritakan vibe visualnya. Tulis caption singkat. Upload post ini.",
    result: "Post perkenalan brand yang sudah di-upload.",
    completed: false,
    uploads: [],
  },
  {
    day: 11,
    week: 2,
    title: "Belajar Komposisi Desain",
    learn:
      "Prinsip komposisi dasar: rule of thirds, keseimbangan (balance), kontras (contrast), hierarki visual.",
    do: "Ambil 3 foto benda di sekitarmu (pakai HP), lalu edit foto tersebut. Coba terapkan salah satu prinsip komposisi.",
    result: "Tiga foto yang menunjukkan penerapan prinsip komposisi.",
    completed: false,
    uploads: [],
  },
  {
    day: 12,
    week: 2,
    title: "Desain Poster Sederhana",
    learn:
      "Cara menggabungkan teks, warna, & gambar dalam sebuah layout poster.",
    do: "Buat 1 poster digital sederhana menggunakan aplikasi di HP (Canva cocok). Tema bebas. Gunakan font & warna brandmu.",
    result: "Sebuah desain poster digital sederhana.",
    completed: false,
    uploads: [],
  },
  {
    day: 13,
    week: 2,
    title: "Sketsa Benda Sekitar",
    learn:
      "Pentingnya observasi dalam seni. Teknik dasar sketsa (garis kontur).",
    do: "Sketsa 3 benda nyata di sekitarmu (gelas, tangan, headset, dll.) menggunakan pensil di kertas. Fokus pada bentuk dasar & proporsi.",
    result: "Halaman sketsa dengan 3 objek yang diamati.",
    completed: false,
    uploads: [],
  },
  {
    day: 14,
    week: 2,
    title: "Eksplorasi Shading Dasar",
    learn:
      "Teknik shading dasar (arsir, silang, gradasi) untuk menciptakan volume & kedalaman.",
    do: "Pilih 1 dari sketsa benda kemarin. Coba terapkan 2-3 teknik shading berbeda pada objek tersebut.",
    result: "Satu atau dua sketsa objek dengan penerapan shading.",
    completed: false,
    uploads: [],
  },
  {
    day: 15,
    week: 3,
    title: "Coba Gaya Seni Digital Baru",
    learn:
      "Cari tutorial di YouTube tentang gaya seni digital yang menarik (line art, pixel art, doodle art, flat illustration).",
    do: "Pilih 1 gaya seni digital & buat 1 karya sederhana di HP menggunakan aplikasi pilihanmu.",
    result: "Satu karya seni digital sederhana dengan gaya baru.",
    completed: false,
    uploads: [],
  },
  {
    day: 16,
    week: 3,
    title: "Menulis Puisi Pendek",
    learn: "Cara menyampaikan ide/perasaan dalam format singkat & padat.",
    do: "Tulis 1 puisi pendek (maksimal 5 baris) dengan tema bebas, atau yang memicu perasaanmu hari itu.",
    result: "Satu puisi pendek tulisan tangan atau ketikan.",
    completed: false,
    uploads: [],
  },
  {
    day: 17,
    week: 3,
    title: "Ilustrasi dari Puisi",
    learn: "Bagaimana visual bisa memperkuat narasi dari teks.",
    do: "Buat 1 ilustrasi (manual atau digital) yang terinspirasi dari puisi yang kamu tulis kemarin.",
    result: "Sebuah ilustrasi yang merepresentasikan puisimu.",
    completed: false,
    uploads: [],
  },
  {
    day: 18,
    week: 3,
    title: "Belajar Teori Warna Lanjut",
    learn:
      "Teori warna lebih dalam: primer, sekunder, tersier, analog, komplementer, triadic, monokromatik.",
    do: "Buat palet warna mini (3-4 warna) menggunakan salah satu teori. Coba aplikasikan pada sebuah bentuk sederhana.",
    result: "Pemahaman tentang teori warna & contoh palet yang diterapkan.",
    completed: false,
    uploads: [],
  },
  {
    day: 19,
    week: 3,
    title: "Desain Carousel Post",
    learn:
      "Cara membuat carousel post yang menarik di Instagram untuk menyampaikan informasi berurutan.",
    do: "Desain layout untuk 3-5 halaman Instagram carousel post. Isi dengan topik bebas. Gunakan font & warna brandmu.",
    result: "Desain layout untuk carousel post.",
    completed: false,
    uploads: [],
  },
  {
    day: 20,
    week: 3,
    title: "Upload Post Karya & BTS",
    learn:
      "Pentingnya berbagi proses (behind the scenes) untuk menunjukkan otentisitas.",
    do: "Pilih 1-2 karya favoritmu. Buat 1 post baru yang menampilkan karya & proses pembuatannya. Upload post ini.",
    result: "Post baru di akun brandmu yang menampilkan karya & proses.",
    completed: false,
    uploads: [],
  },
  {
    day: 21,
    week: 4,
    title: "Buat Moodboard",
    learn:
      "Fungsi moodboard untuk inspirasi & visual diary untuk merekam ide visual harian.",
    do: "Buat 1 halaman moodboard/visual diary (manual atau digital). Isi dengan gambar, warna, tulisan, & tekstur yang menarik.",
    result: "Sebuah moodboard atau visual diary personal.",
    completed: false,
    uploads: [],
  },
  {
    day: 22,
    week: 4,
    title: "Eksperimen Media Baru",
    learn: "Terbuka pada eksperimen dengan bahan-bahan di rumah.",
    do: "Eksperimen dengan 1 media baru tanpa biaya (kolase kertas bekas, gambar dengan kopi, dll.). Fokus pada proses eksplorasi.",
    result: "Sebuah karya eksperimental dengan media baru.",
    completed: false,
    uploads: [],
  },
  {
    day: 23,
    week: 4,
    title: "Dasar Mixing Audio",
    learn: "Konsep dasar mixing audio (volume, panning, EQ). (Opsional)",
    do: "Unduh BandLab. Coba rekam suaramu membaca puisi atau suara ambience di rumah, lalu lakukan mixing sederhana.",
    result: "File audio sederhana hasil rekaman & mixing.",
    completed: false,
    uploads: [],
  },
  {
    day: 24,
    week: 4,
    title: "Draft Lagu Sederhana",
    learn: "Struktur lagu paling dasar (verse-chorus). (Opsional)",
    do: "Buat draft lagu sederhana (1 verse & 1 chorus) dengan lirik sederhana atau hanya melodi humming. Rekam dengan HP.",
    result: "Rekaman draft lagu sederhana.",
    completed: false,
    uploads: [],
  },
  {
    day: 25,
    week: 4,
    title: "Gabungkan Visual & Audio",
    learn:
      "Cara membuat video mini sederhana dengan slideshow gambar & audio. (Opsional)",
    do: "Gabungkan ilustrasi (Day 17) & audio (Day 23) menjadi 1 video mini. Upload ke IG Story/Reels.",
    result: "Video mini karya gabungan yang sudah di-upload.",
    completed: false,
    uploads: [],
  },
  {
    day: 26,
    week: 4,
    title: "Mini-Proyek Desain",
    learn: "Mengaplikasikan semua skill desain ke proyek yang lebih spesifik.",
    do: "Buat 1 mini-proyek desain: cover majalah fiktif, sampul buku, label produk, atau desain t-shirt. Gunakan semua elemen brandmu.",
    result: "Sebuah desain final untuk mini-proyek.",
    completed: false,
    uploads: [],
  },
  {
    day: 27,
    week: 4,
    title: "Artwork Ekspresi Diri",
    learn: "Pentingnya menciptakan karya untuk diri sendiri, tanpa tekanan.",
    do: "Buat 1 artwork (manual atau digital) yang sepenuhnya berdasarkan perasaanmu hari itu. Jangan memikirkan bagus atau tidak.",
    result: "Sebuah karya seni yang bersifat personal & ekspresif.",
    completed: false,
    uploads: [],
  },
  {
    day: 28,
    week: 4,
    title: 'Post "Journey 30 Hari"',
    learn: "Cara merefleksikan perjalanan & menampilkan progres.",
    do: 'Buat 1 post di akun brandmu yang merangkum "perjalanan 30 hari"mu. Isi dengan cerita, perbandingan karya, & progres.',
    result: "Post refleksi perjalanan 30 hari yang sudah di-upload.",
    completed: false,
    uploads: [],
  },
  {
    day: 29,
    week: 4,
    title: "Rancang Portofolio Digital",
    learn:
      "Pentingnya portofolio untuk menunjukkan skill. Cara menyusun portofolio sederhana.",
    do: "Pilih 5-7 karya terbaik. Rancang layout portofolio digital pertamamu menggunakan Canva/Google Slides/Notion.",
    result: "Draf awal portofolio digital yang berisi karya-karya pilihan.",
    completed: false,
    uploads: [],
  },
  {
    day: 30,
    week: 4,
    title: "Refleksi & Tujuan Selanjutnya",
    learn:
      "Cara menetapkan tujuan SMART (Specific, Measurable, Achievable, Relevant, Time-bound).",
    do: "Refleksi: Apa yang kamu pelajari? Nikmati? Tantangannya? Lalu, tulis tujuan 30 hari ke depan.",
    result: "Catatan refleksi pribadi & daftar tujuan baru.",
    completed: false,
    uploads: [],
  },
];

const skillCategories = [
  "Desain Grafis",
  "Ilustrasi",
  "Penulisan Kreatif",
  "Fotografi",
  "Produksi Audio/Video",
  "Pengembangan Diri",
];

document.addEventListener("DOMContentLoaded", () => {
  // Initialize state from localStorage or default values
  let state = {
    userName: localStorage.getItem("userName") || "",
    currentPage: "home",
    currentWeek: 1,
    currentDay: 1,
    program: JSON.parse(localStorage.getItem("creativeProgramData")) || null, // Will be set based on user choice
    skillProgress:
      JSON.parse(localStorage.getItem("creativeSkillProgress")) || {},
    programHistory:
      JSON.parse(localStorage.getItem("creativeProgramHistory")) || [],
    achievedStatuses:
      JSON.parse(localStorage.getItem("creativeAchievedStatuses")) || {}, // Store only achieved status (id: boolean)
    hasSeenWelcomeChatbot:
      localStorage.getItem("hasSeenWelcomeChatbot") === "true", // Flag to check if welcome chatbot has been shown
    darkMode: localStorage.getItem("darkMode") === "true", // Dark mode preference
    bookmarkedPrograms:
      JSON.parse(localStorage.getItem("bookmarkedPrograms")) || [], // Bookmarked programs (full templates)
    bookmarkedTasks: JSON.parse(localStorage.getItem("bookmarkedTasks")) || [], // Bookmarked tasks (individual days)
    premiumThemes: { modern: true, oldschool: true, fantasy: true }, // All themes unlocked by default
    // New state variables for achievements
    hasEditedTask: localStorage.getItem("hasEditedTask") === "true",
    hasVisitedGallery: localStorage.getItem("hasVisitedGallery") === "true",
    hasVisitedAbout: localStorage.getItem("hasVisitedAbout") === "true",
    hasResetApp: localStorage.getItem("hasResetApp") === "true",
    hasVisitedStats: localStorage.getItem("hasVisitedStats") === "true", // New for explore_all_pages
    hasVisitedHistory: localStorage.getItem("hasVisitedHistory") === "true", // New for explore_all_pages
    hasChangedTheme: localStorage.getItem("hasChangedTheme") === "true", // New for first_theme_change
    hasUsedGalleryFilter:
      localStorage.getItem("hasUsedGalleryFilter") === "true", // New for first_gallery_filter
    hasContactedDeveloper:
      localStorage.getItem("hasContactedDeveloper") === "true", // New for contact_developer
    consecutiveCompletedDays: parseInt(
      localStorage.getItem("consecutiveCompletedDays") || "0"
    ), // New for daily_streak
    lastCompletionDate: localStorage.getItem("lastCompletionDate") || "", // New for daily_streak
  };

  // Get DOM elements
  const daysGrid = document.getElementById("days-grid");
  const dayDetail = document.getElementById("day-detail");
  const weekTabsContainer = document.getElementById("week-tabs");
  const completedCountEl = document.getElementById("completedCount");
  const progressChartCanvas = document
    .getElementById("progressChart")
    .getContext("2d");
  let progressChart; // Chart.js instance

  const navButtons = document.querySelectorAll(".nav-btn");
  const pageSections = document.querySelectorAll(".page-section");
  const nameInputModal = document.getElementById("name-input-modal");
  const userNameInput = document.getElementById("user-name-input");
  const saveNameBtn = document.getElementById("save-name-btn");
  const chatbotDisplay = document.getElementById("chatbot-display");
  const chatbotText = document.getElementById("chatbot-text");
  const celebrationModal = document.getElementById("celebration-modal");
  const celebrationUserName = document.getElementById("celebration-user-name");
  const endProgramBtn = document.getElementById("end-program-btn");
  const continueProgramBtn = document.getElementById("continue-program-btn");
  const programHistoryList = document.getElementById("program-history-list");
  const completionConfirmModal = document.getElementById(
    "completion-confirm-modal"
  );
  const confirmQuestion = document.getElementById("confirm-question");
  const confirmSubtext = document.getElementById("confirm-subtext");
  const confirmYesBtn = document.getElementById("confirm-yes-btn");
  const confirmNoBtn = document.getElementById("confirm-no-btn");
  const achievementPopup = document.getElementById("achievement-popup");
  const achievementText = document.getElementById("achievement-text");
  const closeAchievementBtn = document.getElementById("close-achievement-btn");
  const resetProgramBtn = document.getElementById("reset-program-btn"); // Reset button
  const resetAppConfirmModal = document.getElementById(
    "reset-app-confirm-modal"
  ); // Reset confirmation modal
  const resetAppYesBtn = document.getElementById("reset-app-yes-btn");
  const resetAppNoBtn = document.getElementById("reset-app-no-btn");

  const bookmarkInputModal = document.getElementById("bookmark-input-modal"); // New bookmark input modal
  const bookmarkProgramTitleInput = document.getElementById(
    "bookmark-program-title-input"
  );
  const saveBookmarkConfirmBtn = document.getElementById(
    "save-bookmark-confirm-btn"
  );
  const cancelBookmarkInputBtn = document.getElementById(
    "cancel-bookmark-input-btn"
  );

  const navbarTitleLink = document.getElementById("navbar-title-link");
  const navbarLogo = document.getElementById("navbar-logo");
  const developerPhoto = document.getElementById("developer-photo");
  const fullImageModal = document.getElementById("full-image-modal");
  const fullImageDisplay = document.getElementById("full-image-display");

  const darkModeToggle = document.getElementById("dark-mode-toggle"); // Dark mode toggle
  const userStatsName = document.getElementById("user-stats-name"); // User name for stats page
  const activityGrid = document.getElementById("activity-grid"); // GitHub-like activity grid
  const bookmarkedProgramsList = document.getElementById(
    "bookmarked-programs-list"
  ); // Bookmarked programs list
  const achievementsListDiv = document.getElementById("achievements-list"); // Achievements list div
  const seeAllAchievementsBtn = document.getElementById(
    "see-all-achievements-btn"
  ); // See All Achievements Button
  const allAchievementsModal = document.getElementById(
    "all-achievements-modal"
  ); // All Achievements Modal
  const allAchievementsGrid = document.getElementById("all-achievements-grid"); // Grid inside All Achievements Modal

  const themeOptions = document.querySelectorAll('input[name="theme-option"]'); // Theme selection radio buttons

  // HTML for the task editing form
  const addEditForm = `
                <div class="space-y-4 mb-6">
                    <div>
                        <label for="edit-title" class="block text-sm-lg font-medium text-stone-700">Judul Tugas</label>
                        <div id="edit-title" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                    </div>
                    <div>
                        <label for="edit-learn" class="block text-sm-lg font-medium text-stone-700">Pelajari</label>
                        <div id="edit-learn" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                    </div>
                    <div>
                        <label for="edit-do" class="block text-sm-lg font-medium text-stone-700">Lakukan</label>
                        <div id="edit-do" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                    </div>
                    <div>
                        <label for="edit-result" class="block text-sm-lg font-medium text-stone-700">Hasil</label>
                        <div id="edit-result" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                    </div>
                    <button id="save-task-btn" class="w-full px-6 py-3 bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 smooth-transition">Simpan Tugas</button>
                    <button id="cancel-edit-btn" class="w-full px-6 py-3 bg-stone-300 text-stone-700 font-semibold shadow-md hover:bg-stone-400 smooth-transition">Batal</button>
                </div>
            `;

  /**
   * Saves the current application state to localStorage.
   */
  function saveState() {
    localStorage.setItem("creativeProgramState", JSON.stringify(state));
    localStorage.setItem("userName", state.userName);
    localStorage.setItem("creativeProgramData", JSON.stringify(state.program));
    localStorage.setItem(
      "creativeSkillProgress",
      JSON.stringify(state.skillProgress)
    );
    localStorage.setItem(
      "creativeProgramHistory",
      JSON.stringify(state.programHistory)
    );
    localStorage.setItem("hasSeenWelcomeChatbot", state.hasSeenWelcomeChatbot); // Save new flag
    localStorage.setItem("darkMode", state.darkMode); // Save dark mode preference
    localStorage.setItem(
      "bookmarkedPrograms",
      JSON.stringify(state.bookmarkedPrograms)
    ); // Save bookmarked programs
    localStorage.setItem(
      "bookmarkedTasks",
      JSON.stringify(state.bookmarkedTasks)
    ); // Save bookmarked tasks
    localStorage.setItem("premiumThemes", JSON.stringify(state.premiumThemes)); // Save premium themes access
    localStorage.setItem("hasEditedTask", state.hasEditedTask); // Save new achievement state
    localStorage.setItem("hasVisitedGallery", state.hasVisitedGallery); // Save new achievement state
    localStorage.setItem("hasVisitedAbout", state.hasVisitedAbout); // Save new achievement state
    localStorage.setItem("hasResetApp", state.hasResetApp); // Save new achievement state
    localStorage.setItem("hasVisitedStats", state.hasVisitedStats); // New for explore_all_pages
    localStorage.setItem("hasVisitedHistory", state.hasVisitedHistory); // New for explore_all_pages
    localStorage.setItem("hasChangedTheme", state.hasChangedTheme); // New for first_theme_change
    localStorage.setItem("hasUsedGalleryFilter", state.hasUsedGalleryFilter); // New for first_gallery_filter
    localStorage.setItem("hasContactedDeveloper", state.hasContactedDeveloper); // New for contact_developer
    localStorage.setItem(
      "consecutiveCompletedDays",
      state.consecutiveCompletedDays.toString()
    ); // New for daily_streak
    localStorage.setItem("lastCompletionDate", state.lastCompletionDate); // New for daily_streak

    // Save only the achieved status for achievements
    localStorage.setItem(
      "creativeAchievedStatuses",
      JSON.stringify(state.achievedStatuses)
    );
  }

  /**
   * Loads the application state from localStorage.
   */
  function loadState() {
    const savedState = localStorage.getItem("creativeProgramState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      state.currentPage = parsedState.currentPage;
      state.currentWeek = parsedState.currentWeek;
      state.currentDay = parsedState.currentDay;
    }
    state.userName = localStorage.getItem("userName") || "";
    state.program = JSON.parse(localStorage.getItem("creativeProgramData")); // Load as is, can be null
    state.skillProgress =
      JSON.parse(localStorage.getItem("creativeSkillProgress")) || {};
    state.programHistory =
      JSON.parse(localStorage.getItem("creativeProgramHistory")) || [];

    // Load achieved statuses
    state.achievedStatuses =
      JSON.parse(localStorage.getItem("creativeAchievedStatuses")) || {};
    state.hasSeenWelcomeChatbot =
      localStorage.getItem("hasSeenWelcomeChatbot") === "true"; // Load new flag
    state.darkMode = localStorage.getItem("darkMode") === "true"; // Load dark mode preference
    state.bookmarkedPrograms =
      JSON.parse(localStorage.getItem("bookmarkedPrograms")) || []; // Load bookmarked programs
    state.bookmarkedTasks =
      JSON.parse(localStorage.getItem("bookmarkedTasks")) || []; // Load bookmarked tasks
    state.premiumThemes = JSON.parse(localStorage.getItem("premiumThemes")) || {
      modern: true,
      oldschool: true,
      fantasy: true,
    }; // All themes unlocked by default
    state.hasEditedTask = localStorage.getItem("hasEditedTask") === "true"; // Load new achievement state
    state.hasVisitedGallery =
      localStorage.getItem("hasVisitedGallery") === "true"; // Load new achievement state
    state.hasVisitedAbout = localStorage.getItem("hasVisitedAbout") === "true"; // Load new achievement state
    state.hasResetApp = localStorage.getItem("hasResetApp") === "true"; // Load new achievement state
    state.hasVisitedStats = localStorage.getItem("hasVisitedStats") === "true"; // New for explore_all_pages
    state.hasVisitedHistory =
      localStorage.getItem("hasVisitedHistory") === "true"; // New for explore_all_pages
    state.hasChangedTheme = localStorage.getItem("hasChangedTheme") === "true"; // New for first_theme_change
    state.hasUsedGalleryFilter =
      localStorage.getItem("hasUsedGalleryFilter") === "true"; // New for first_gallery_filter
    state.hasContactedDeveloper =
      localStorage.getItem("hasContactedDeveloper") === "true"; // New for contact_developer
    state.consecutiveCompletedDays = parseInt(
      localStorage.getItem("consecutiveCompletedDays") || "0"
    ); // New for daily_streak
    state.lastCompletionDate = localStorage.getItem("lastCompletionDate") || ""; // New for daily_streak

    // Initialize skill progress if not already set
    skillCategories.forEach((skill) => {
      if (state.skillProgress[skill] === undefined) {
        state.skillProgress[skill] = 0;
      }
    });
  }

  /**
   * Displays a chatbot message.
   * @param {string} message - The message to display.
   */
  function showChatbotMessage(message) {
    chatbotText.textContent = message;
    chatbotDisplay.classList.remove("hidden");
    // Auto-hide after 8 seconds
    setTimeout(() => {
      chatbotDisplay.classList.add("hidden");
    }, 8000);
  }

  /**
   * Hides the chatbot message.
   */
  function hideChatbotMessage() {
    chatbotDisplay.classList.add("hidden");
  }

  /**
   * Generates a motivational message based on type.
   * @param {string} type - Type of message ('welcome' or 'completion').
   * @param {string} userName - The user's name.
   * @returns {string} The generated motivational message.
   */
  function generateMotivationalMessage(type = "welcome", userName = "") {
    const greetings = ["Halooo", "Haiii", "Yuhuuu", "Haii, kamu!"];
    const encouragements = [
      "Semangat terus yaa, jangan nyerah! ✨ Kamu tuh potensi banget, lho!",
      "Keren banget sih kamu, udah sampai sini! Lanjutin yuk, jangan kendor! 💪",
      "Setiap langkah kecil itu berarti, lho! Proud of you, bestie! 🙌",
      "Yuk, kita bikin hari ini jadi lebih produktif! Kamu pasti bisa, nggak usah insecure! 🚀",
      "Ingat, progres itu lebih penting daripada kesempurnaan! Keep going, jangan overthinking! 😊",
      "Waktunya berkreasi, nih! Aku yakin kamu punya ide-ide brilian, jangan disimpen aja! 💡",
      "Jangan lupa istirahat juga yaa, biar makin fresh! Nanti malah burnout, kan nggak asik. 💖",
      "Mantap jiwa! Satu langkah lagi menuju tujuanmu! Gas terus! 🔥",
      "Kamu itu talented banget, jangan ragu buat eksplorasi! Ayo, tunjukkin skillmu! 🎨",
      "Yuk, kita taklukkan hari ini bareng-bareng! Aku dukung kamu full! cheering! 🎉",
    ];
    const completionMessages = [
      "Wihhh, keren banget! Tugasmu selesai! Kamu emang paling TOP! ✨ Nggak kaleng-kaleng deh!",
      "Mantap jiwa! Satu lagi beres! Kamu emang jagoan, deh! 💪 Siapa bilang nggak bisa?",
      "Yuhuuu, progresmu kelihatan banget! Bangga, deh, sama kamu! 🙌 Udah kayak pro aja nih!",
      "Asiiiik, tugas selesai! Waktunya merayakan kemenangan kecil ini! 🎉 Jangan lupa self-reward!",
      "Gila sih, kamu cepet banget! Lanjutin terus yaa semangatnya! Jangan sampai kendor! 🚀",
      "Satu per satu, kamu pasti bisa mencapai semua tujuanmu! Keren! 😎 Ini baru namanya konsisten!",
      "Yeayyy, ada hasil baru nih! Makin banyak karya, makin pro kamu! 🎨 Jangan lupa dipamerin yaa!",
    ];

    let message = "";
    if (type === "welcome") {
      const greeting = greetings[Math.floor(Math.random() * greetings.length)];
      message = `${greeting}, ${userName}! ${
        encouragements[Math.floor(Math.random() * encouragements.length)]
      }`;
    } else if (type === "completion") {
      message = `${
        completionMessages[
          Math.floor(Math.random() * completionMessages.length)
        ]
      }`;
      if (userName) message += ` Semangat, ${userName}!`;
    }
    return message;
  }

  /**
   * Displays an achievement popup.
   * @param {string} achievementMessage - The message for the achievement.
   */
  function showAchievement(achievementMessage) {
    achievementText.textContent = achievementMessage;
    achievementPopup.classList.remove("hidden");
    setTimeout(() => {
      achievementPopup.classList.add("hidden");
    }, 5000); // Hide after 5 seconds
  }

  /**
   * Checks if any achievements have been met and displays them.
   */
  function checkAchievements() {
    achievementsDefinitions.forEach((achDef) => {
      // Iterate over the definitions
      if (!state.achievedStatuses[achDef.id] && achDef.condition(state)) {
        state.achievedStatuses[achDef.id] = true; // Mark as achieved in state's status map
        showAchievement(achDef.message);
        saveState();
        renderAchievements(); // Re-render achievements list on stats page
      }
    });
  }

  /**
   * Opens the full image modal with the given image URL.
   * @param {string} imageUrl - The URL of the image to display.
   */
  function openImageModal(imageUrl) {
    fullImageDisplay.src = imageUrl;
    fullImageModal.classList.remove("hidden");
  }

  /**
   * Shows the specified page section and updates navigation buttons.
   * @param {string} pageId - The ID of the page section to show.
   * @param {object} [options={}] - Optional settings for showing the page.
   * @param {boolean} [options.suppressChatbot=false] - If true, prevents chatbot from appearing.
   */
  function showPage(pageId, options = {}) {
    const { suppressChatbot = false } = options;

    pageSections.forEach((section) => {
      section.classList.remove("active");
    });
    const targetPageElement = document.getElementById(pageId + "-page");
    if (targetPageElement) {
      targetPageElement.classList.add("active");
    }
    state.currentPage = pageId;
    updateNavButtons();

    // Only hide chatbot if not explicitly suppressed
    if (!suppressChatbot) {
      hideChatbotMessage();
    }

    // Update visited flags for 'explore_all_pages' achievement
    if (pageId === "stats") state.hasVisitedStats = true;
    if (pageId === "gallery") state.hasVisitedGallery = true;
    if (pageId === "history") state.hasVisitedHistory = true;
    if (pageId === "about") state.hasVisitedAbout = true;

    if (pageId === "home") {
      updateProgress();
      renderLatestGalleryPreview();
      updateThemeSelectionUI(); // Update theme UI on home page
      // Only show welcome chatbot if it's the very first time and user has a name
      if (state.userName && !state.hasSeenWelcomeChatbot) {
        showChatbotMessage(
          generateMotivationalMessage("welcome", state.userName)
        );
        state.hasSeenWelcomeChatbot = true;
        saveState();
      }
    } else if (pageId === "program") {
      renderDaysGrid();
      renderDayDetail();
    } else if (pageId === "stats") {
      // Renamed from skill-progress
      if (userStatsName) userStatsName.textContent = state.userName; // Set user name on stats page
      renderActivityGrid();
      renderSkillProgress();
      renderBookmarkedPrograms();
      renderAchievements(); // Render achievements when stats page is shown
    } else if (pageId === "gallery") {
      renderGallery();
    } else if (pageId === "history") {
      renderProgramHistory();
    } else if (pageId === "about") {
      // Nothing specific to render on about page load
    }
    saveState();
    checkAchievements(); // Check for achievement after page change
  }

  /**
   * Updates the active state of navigation buttons.
   */
  function updateNavButtons() {
    navButtons.forEach((btn) => {
      if (btn.dataset.page === state.currentPage) {
        btn.classList.add("tab-active");
        btn.classList.remove("text-stone-500");
      } else {
        btn.classList.remove("tab-active");
        btn.classList.add("text-stone-500");
      }
    });
  }

  /**
   * Renders the grid of day buttons for the current week.
   */
  function renderDaysGrid() {
    daysGrid.innerHTML = "";
    // Ensure state.program is not empty before filtering
    if (state.program.length === 0) {
      daysGrid.innerHTML =
        '<p class="text-center text-stone-500 text-sm-lg col-span-full">Tidak ada hari dalam program ini. Tambahkan tugas baru!</p>';
      return;
    }

    const daysInWeek = state.program.filter(
      (day) => day.week === state.currentWeek
    );
    daysInWeek.forEach((day) => {
      const dayBtn = document.createElement("button");
      dayBtn.textContent = `H ${day.day}`;
      dayBtn.dataset.day = day.day;
      dayBtn.className =
        "day-btn p-3 rounded-lg border-2 border-stone-200 bg-stone-100 text-stone-600 font-semibold smooth-transition hover:bg-amber-100 hover:border-amber-300";
      if (day.completed) {
        dayBtn.classList.add("day-btn-completed");
      }
      if (day.day === state.currentDay) {
        dayBtn.classList.add("day-btn-active");
      }
      daysGrid.appendChild(dayBtn);
    });
  }

  /**
   * Renders the detailed view for the currently selected day.
   * @param {boolean} isEditing - True if the form should be in editing mode.
   */
  function renderDayDetail(isEditing = false) {
    const dayData = state.program.find((d) => d.day === state.currentDay);

    // If no day is selected or program is empty, show "add new task" interface
    if (!dayData) {
      dayDetail.innerHTML = `
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h2 class="text-xl-2xl font-bold text-stone-800">Tambah Tugas Baru</h2>
                            </div>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div>
                                <label for="new-task-title" class="block text-sm-lg font-medium text-stone-700">Judul Tugas</label>
                                <div id="new-task-title" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                            </div>
                            <div>
                                <label for="new-task-learn" class="block text-sm-lg font-medium text-stone-700">Pelajari</label>
                                <div id="new-task-learn" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                            </div>
                            <div>
                                <label for="new-task-do" class="block text-sm-lg font-medium text-stone-700">Lakukan</label>
                                <div id="new-task-do" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                            </div>
                            <div>
                                <label for="new-task-result" class="block text-sm-lg font-medium text-stone-700">Hasil</label>
                                <div id="new-task-result" contenteditable="true" class="editable-content mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"></div>
                            </div>
                            <button id="add-new-task-btn" class="w-full px-6 py-3 bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 smooth-transition">Tambah Tugas</button>
                        </div>
                    `;
      document.getElementById("add-new-task-btn").onclick = () => {
        const newTitle = document
          .getElementById("new-task-title")
          .textContent.trim();
        const newLearn = document
          .getElementById("new-task-learn")
          .textContent.trim();
        const newDo = document.getElementById("new-task-do").textContent.trim();
        const newResult = document
          .getElementById("new-task-result")
          .textContent.trim();

        if (newTitle && newLearn && newDo && newResult) {
          const newDayNum = state.program.length + 1;
          const newWeekNum = Math.ceil(newDayNum / 7);
          const newTask = {
            day: newDayNum,
            week: newWeekNum,
            title: newTitle,
            learn: newLearn,
            do: newDo,
            result: newResult,
            completed: false,
            uploads: [],
            isCustom: true, // Mark as custom task
          };
          state.program.push(newTask);
          state.currentDay = newDayNum; // Select the newly added day
          state.currentWeek = newWeekNum; // Adjust week if necessary
          saveState();
          renderDaysGrid();
          renderDayDetail();
          updateProgress();
          showChatbotMessage("Tugas baru berhasil ditambahkan! Semangat! 💪");
          checkAchievements(); // Check achievements after adding new task
        } else {
          alert("Semua kolom tugas harus diisi!");
        }
      };
      return;
    }

    if (isEditing) {
      dayDetail.innerHTML = `
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <p class="text-sm-lg font-semibold text-amber-600">Hari ${dayData.day}</p>
                                <h2 class="text-xl-2xl font-bold text-stone-800">Edit Tugas</h2>
                            </div>
                        </div>
                        ${addEditForm}
                    `;
      document.getElementById("edit-title").textContent = dayData.title;
      document.getElementById("edit-learn").textContent = dayData.learn;
      document.getElementById("edit-do").textContent = dayData.do;
      document.getElementById("edit-result").textContent = dayData.result;

      document.getElementById("save-task-btn").onclick = () => {
        dayData.title = document
          .getElementById("edit-title")
          .textContent.trim();
        dayData.learn = document
          .getElementById("edit-learn")
          .textContent.trim();
        dayData.do = document.getElementById("edit-do").textContent.trim();
        dayData.result = document
          .getElementById("edit-result")
          .textContent.trim();
        state.hasEditedTask = true; // Set achievement condition
        checkAchievements(); // Check for achievement
        saveState();
        renderDayDetail(false);
      };
      document.getElementById("cancel-edit-btn").onclick = () =>
        renderDayDetail(false);
    } else {
      // Check if the current day is already bookmarked
      const isCurrentDayBookmarked = state.bookmarkedTasks.some(
        (bt) => bt.day === dayData.day && bt.title === dayData.title
      );

      dayDetail.innerHTML = `
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <p class="text-sm-lg font-semibold text-amber-600">Hari ${
                                  dayData.day
                                }</p>
                                <h2 class="text-xl-2xl font-bold text-stone-800">${
                                  dayData.title
                                }</h2>
                            </div>
                            <div class="flex items-center gap-4 mt-4 md:mt-0">
                                <button id="save-program-bookmark-btn" class="bookmark-toggle ${
                                  isCurrentDayBookmarked ? "active" : ""
                                }" title="Simpan Tugas Ini">
                                    <i class="bi bi-bookmark-fill text-xl"></i>
                                </button>
                                <button id="complete-task-btn" class="px-4 py-2 ${
                                  dayData.completed
                                    ? "bg-emerald-600"
                                    : "bg-amber-500"
                                } text-white font-semibold shadow-md ${
        dayData.completed ? "hover:bg-emerald-700" : "hover:bg-amber-600"
      } smooth-transition">
                                    ${
                                      dayData.completed
                                        ? "Selesai! 🎉"
                                        : "Tandai Selesai"
                                    }
                                </button>
                                <button id="edit-task-btn" class="px-4 py-2 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 smooth-transition">Edit</button>
                            </div>
                        </div>
                        <div class="space-y-6 mt-6">
                            <div>
                                <h3 class="flex items-center gap-2 text-lg-xl font-bold text-stone-700 mb-2">
                                    <span class="text-amber-500">&#x1F4DA;</span>
                                    Pelajari
                                </h3>
                                <p class="text-stone-600 pl-8 text-base">${
                                  dayData.learn
                                }</p>
                            </div>
                            <div>
                                <h3 class="flex items-center gap-2 text-lg-xl font-bold text-stone-700 mb-2">
                                    <span class="text-amber-500">&#x1F58A;&#xFE0F;</span>
                                    Lakukan
                                </h3>
                                <p class="text-stone-600 pl-8 text-base">${
                                  dayData.do
                                }</p>
                            </div>
                            <div>
                                <h3 class="flex items-center gap-2 text-lg-xl font-bold text-stone-700 mb-2">
                                    <span class="text-amber-500">&#x1F3C1;</span>
                                    Hasil
                                </h3>
                                <p class="text-stone-600 pl-8 text-base">${
                                  dayData.result
                                }</p>
                            </div>
                            <div class="mt-6 pt-4 border-t border-stone-200">
                                <h3 class="flex items-center gap-2 text-lg-xl font-bold text-stone-700 mb-2">
                                    <span class="text-amber-500">&#x1F4F7;</span>
                                    Unggahan Hasil
                                </h3>
                                <div id="uploads-list" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    ${
                                      dayData.uploads.length > 0
                                        ? dayData.uploads
                                            .map(
                                              (upload, index) => `
                                        <div class="upload-item bg-stone-100 p-3 rounded-lg shadow-sm">
                                            <a href="#" class="upload-link block text-amber-700 hover:underline truncate flex-grow mr-2 text-base" data-url="${
                                              upload.url
                                            }">
                                                ${
                                                  upload.url.startsWith(
                                                    "data:image/"
                                                  )
                                                    ? `<img src="${upload.url}" alt="Unggahan" class="w-10 h-10 object-cover rounded mr-2 inline-block">`
                                                    : `<span class="text-4xl mr-2">&#x1F4C4;</span>`
                                                }
                                                ${
                                                  upload.description ||
                                                  "Lihat Unggahan"
                                                }
                                            </a>
                                            <div class="flex items-center gap-2">
                                                <span class="text-xs-base text-stone-500">${
                                                  upload.date
                                                }</span>
                                                <button data-upload-index="${index}" class="delete-upload-btn text-red-500 hover:text-red-700 p-1 bg-white" style="border-radius: 4px !important; border: 2px solid currentColor;"><span class="text-lg">✖</span></button>
                                            </div>
                                        </div>
                                    `
                                            )
                                            .join("")
                                        : '<p class="text-stone-500 col-span-2 text-sm-lg">Belum ada unggahan untuk hari ini.</p>'
                                    }
                                </div>
                                <div class="space-y-2">
                                    <div class="flex items-center gap-4 mb-2">
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="upload-type" value="url" id="upload-type-url" class="form-radio text-amber-500" checked>
                                            <span class="ml-2 text-sm-lg text-stone-700">URL Foto</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="upload-type" value="file" id="upload-type-file" class="form-radio text-amber-500">
                                            <span class="ml-2 text-sm-lg text-stone-700">Unggah Foto Langsung</span>
                                        </label>
                                    </div>
                                    <input type="text" id="upload-url" placeholder="URL Gambar/Dokumen (misal: dari Google Drive, Imgur)" class="mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-base">
                                    <input type="file" id="upload-file" accept="image/*" class="mt-1 hidden w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-base">
                                    <input type="text" id="upload-description" placeholder="Deskripsi Unggahan (opsional)" class="mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-base">
                                    <select id="upload-skill" class="mt-1 block w-full p-3 border border-stone-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-base">
                                        <option value="">Pilih Skill Terkait</option>
                                        ${skillCategories
                                          .map(
                                            (skill) =>
                                              `<option value="${skill}">${skill}</option>`
                                          )
                                          .join("")}
                                    </select>
                                    <button id="add-upload-btn" class="w-full px-6 py-3 bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 smooth-transition">Tambah Unggahan</button>
                                </div>
                            </div>
                        </div>
                    `;

      // Get upload type elements
      const uploadTypeUrl = document.getElementById("upload-type-url");
      const uploadTypeFile = document.getElementById("upload-type-file");
      const uploadUrlInput = document.getElementById("upload-url");
      const uploadFileInput = document.getElementById("upload-file");

      // Function to toggle input visibility
      const toggleUploadInputs = () => {
        if (uploadTypeUrl.checked) {
          uploadUrlInput.classList.remove("hidden");
          uploadFileInput.classList.add("hidden");
        } else {
          uploadUrlInput.classList.add("hidden");
          uploadFileInput.classList.remove("hidden");
        }
      };

      // Initial toggle based on default checked
      toggleUploadInputs();

      // Add event listeners for radio buttons
      uploadTypeUrl.addEventListener("change", toggleUploadInputs);
      uploadTypeFile.addEventListener("change", toggleUploadInputs);

      // Bookmark button logic
      const currentBookmarkBtn = document.getElementById(
        "save-program-bookmark-btn"
      );
      if (currentBookmarkBtn) {
        // Check if the current day is already bookmarked
        const isCurrentDayBookmarked = state.bookmarkedTasks.some(
          (bt) => bt.day === dayData.day && bt.title === dayData.title
        );

        if (isCurrentDayBookmarked) {
          currentBookmarkBtn.classList.add("active");
        } else {
          currentBookmarkBtn.classList.remove("active");
        }

        currentBookmarkBtn.onclick = () => {
          const existingTaskBookmarkIndex = state.bookmarkedTasks.findIndex(
            (bt) => bt.day === dayData.day && bt.title === dayData.title
          );

          if (existingTaskBookmarkIndex !== -1) {
            // If already bookmarked, remove it
            const removedTask = state.bookmarkedTasks.splice(
              existingTaskBookmarkIndex,
              1
            );
            saveState();
            renderBookmarkedPrograms(); // Re-render the list
            currentBookmarkBtn.classList.remove("active");
            showChatbotMessage(
              `Tugas "${removedTask[0].title}" berhasil dihapus dari bookmark! 🗑️`
            );
            checkAchievements(); // Check for achievement after unbookmarking
          } else {
            // Add the current day as a bookmarked task
            const newTaskBookmark = {
              id: `task-bookmark-${Date.now()}`,
              day: dayData.day,
              title: dayData.title,
              learn: dayData.learn,
              do: dayData.do,
              result: dayData.result,
              uploads: dayData.uploads, // Include uploads if user wants to see them
            };
            state.bookmarkedTasks.push(newTaskBookmark);
            saveState();
            renderBookmarkedPrograms(); // Re-render the list
            currentBookmarkBtn.classList.add("active");
            showChatbotMessage(
              `Tugas "Hari ${dayData.day}: ${dayData.title}" berhasil disimpan ke bookmark! ✨`
            );
            checkAchievements(); // Check for achievement after bookmarking
          }
        };
      }

      // Event listeners for the custom bookmark input modal (for full program save)
      // This modal is still used for saving *full programs*
      saveBookmarkConfirmBtn.onclick = () => {
        const programTitle = bookmarkProgramTitleInput.value.trim();
        if (programTitle) {
          const newBookmark = {
            id: `bookmark-${Date.now()}`,
            title: programTitle,
            programData: JSON.parse(JSON.stringify(state.program)), // Deep copy
          };
          state.bookmarkedPrograms.push(newBookmark);
          saveState();
          renderBookmarkedPrograms(); // Re-render the list
          showChatbotMessage(`Program "${programTitle}" berhasil disimpan! ✨`);
          bookmarkInputModal.classList.add("hidden");
          checkAchievements(); // Check for achievement after bookmarking a program
        } else {
          alert("Nama program tidak boleh kosong.");
        }
      };

      cancelBookmarkInputBtn.onclick = () => {
        bookmarkInputModal.classList.add("hidden");
      };

      document.getElementById("edit-task-btn").onclick = () =>
        renderDayDetail(true);
      // Removed delete-task-btn event listener as the button is removed
      document.getElementById("add-upload-btn").onclick = async () => {
        // Made async for FileReader
        const description = document.getElementById("upload-description").value;
        const skill = document.getElementById("upload-skill").value;
        let uploadSource = "";
        let isValid = false;

        if (uploadTypeUrl.checked) {
          const url = document.getElementById("upload-url").value;
          if (url) {
            uploadSource = url;
            isValid = true;
          } else {
            alert("URL Unggahan harus diisi.");
          }
        } else if (uploadTypeFile.checked) {
          const file = document.getElementById("upload-file").files[0];
          if (file) {
            try {
              uploadSource = await readFileAsBase64(file);
              isValid = true;
            } catch (error) {
              console.error("Error reading file:", error);
              alert(
                "Gagal membaca file. Pastikan itu adalah gambar yang valid."
              );
            }
          } else {
            alert("Pilih file gambar untuk diunggah.");
          }
        } else {
          alert("Pilih salah satu metode unggahan (URL atau Unggah File).");
        }

        if (isValid && skill) {
          const today = new Date().toISOString().slice(0, 10);
          dayData.uploads.push({
            url: uploadSource,
            description,
            date: today,
            skill,
          });
          state.skillProgress[skill] = (state.skillProgress[skill] || 0) + 1;
          saveState();
          renderDayDetail();
          renderSkillProgress();
          renderGallery();
          renderLatestGalleryPreview();
          showChatbotMessage(
            generateMotivationalMessage("completion", state.userName)
          );
          checkAchievements(); // Check achievements after upload
          check30DayCompletion();
        } else if (!skill) {
          alert("Skill Terkait harus diisi.");
        }
      };

      // Helper function to read file as Base64
      function readFileAsBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
      }

      document.querySelectorAll(".delete-upload-btn").forEach((btn) => {
        btn.onclick = (e) => {
          const uploadIndex = parseInt(e.currentTarget.dataset.uploadIndex);
          const deletedSkill = dayData.uploads[uploadIndex].skill;
          dayData.uploads.splice(uploadIndex, 1);
          if (state.skillProgress[deletedSkill] > 0) {
            state.skillProgress[deletedSkill] -= 1;
          }
          saveState();
          renderDayDetail();
          renderSkillProgress();
          renderGallery();
          renderLatestGalleryPreview();
        };
      });

      // Event listener for the new "Mark as Complete" button
      document
        .getElementById("complete-task-btn")
        .addEventListener("click", () => {
          if (dayData.completed) {
            // If already completed, allow unchecking
            dayData.completed = false;
            state.consecutiveCompletedDays = 0; // Reset streak if uncompleted
            state.lastCompletionDate = "";
            saveState();
            renderDaysGrid();
            updateProgress();
            renderDayDetail(); // Re-render button state
          } else {
            const today = new Date().toISOString().slice(0, 10);
            if (state.lastCompletionDate) {
              const lastDate = new Date(state.lastCompletionDate);
              const todayDate = new Date(today);
              const diffTime = Math.abs(todayDate - lastDate);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              if (diffDays === 1) {
                // If completed yesterday
                state.consecutiveCompletedDays++;
              } else if (diffDays === 0) {
                // If already completed today (no change to streak)
                // Do nothing, streak remains same
              } else {
                // If skipped a day or more
                state.consecutiveCompletedDays = 1; // Reset streak to 1
              }
            } else {
              state.consecutiveCompletedDays = 1; // Start new streak
            }
            state.lastCompletionDate = today;

            const questions = [
              "Apa bener udah selesaii??? 😏",
              "Yakin nih, udah kelar semua? Jangan-jangan ada yang nyangkut, hayooo... 🧐",
              "Udah beres semua nih? Nggak ada yang ketinggalan kan? 😏",
              "Beneran udah selesai? Atau cuma mau cepet-cepet nih? 😂",
              "Wah, gercep banget! Udah kelar semua nih tugasnya? 😎",
              "Ini beneran udah kelar? Seriusan? Nggak bohong kan? 😏",
              "Udah bisa pamer ke temen-temen nih? Udah 100% kelar? ✨",
              "Cieee, udah selesai. Nggak mau nambah lagi gitu? 😏",
              "Ini bukan ilusi kan? Udah fix selesai nih tugasnya? 👀",
              "Oke, kalau udah yakin, aku kasih bintang 5 deh! Udah selesai kan? ⭐",
            ];
            const subtexts = [
              "Pikirin lagi deh, siapa tahu ada yang kelewat. 😉",
              "Jangan sampai nyesel di kemudian hari, yaa. Cek lagi aja. 🤭",
              "Oke, kalau yakin, gas! Tapi kalau ragu, mending cek ulang.😜",
              "Pastiin udah 100% beres yaa, biar nggak ada drama. 😈",
              "Ini bukan prank kan? Udah fix selesai nih? 🤣",
              "Nanti kalau ada yang kurang, jangan nyalahin aku yaa. 😏",
              "Yuk, cek lagi sekali. Siapa tahu ada yang nyempil. 👀",
              "Mumpung belum terlambat, double check dulu, bestie. 😉",
              "Jangan sampai nyesel di akhir, ya. Udah yakin banget nih? 😬",
              "Aku sih percaya kamu, tapi kan manusia kadang khilaf. Cek lagi yuk! 😇",
            ];
            const yesTexts = [
              "Ya jelas sudah dong! 😎",
              "Udah pasti dong! ✅",
              "Done! Next! 🚀",
              "Tentu saja! Aku kan pro! 💪",
              "Gas! Udah kelar! 🎉",
              "100% done! No debat! 💯",
              "Siap! Lanjut yang lain! ✨",
              "Yesss! Beres! ✅",
              "Udah dong, aku kan rajin! 😏",
              "Fix! Udah kelar semua! 🔥",
            ];
            const noTexts = [
              "Hehe, belum nih. 😅",
              "Oops, masih ada dikit. 🤏",
              "Belum, aku mau cek lagi. 🤔",
              "Nggak jadi deh, masih ada yang kurang. 🫠",
              "Nanti dulu deh, aku mager. 😴",
              "Aduh, ketahuan deh. Belum kok. 🙈",
              "Masih ada PR nih.📝",
              "Belum selesai, aku mau nyantai dulu. 🛋️",
              "Nggak deh, aku mau rebahan dulu. 🛌",
              "Belum, aku mau ngopi dulu. ☕",
            ];

            confirmQuestion.textContent =
              questions[Math.floor(Math.random() * questions.length)];
            confirmSubtext.textContent =
              subtexts[Math.floor(Math.random() * subtexts.length)];
            confirmYesBtn.textContent =
              yesTexts[Math.floor(Math.random() * yesTexts.length)];
            confirmNoBtn.textContent =
              noTexts[Math.floor(Math.random() * noTexts.length)];

            completionConfirmModal.classList.remove("hidden");

            confirmYesBtn.onclick = () => {
              dayData.completed = true;
              saveState();
              renderDaysGrid();
              updateProgress();
              renderDayDetail(); // Re-render button state
              showChatbotMessage(
                generateMotivationalMessage("completion", state.userName)
              );
              checkAchievements(); // Check achievements after completion
              completionConfirmModal.classList.add("hidden"); // Close modal on "Yes"
            };

            confirmNoBtn.onclick = () => {
              completionConfirmModal.classList.add("hidden");
            };
          }
        });
    }
  }

  /**
   * Updates the progress chart and completed day count.
   */
  function updateProgress() {
    const completedDays = state.program.filter((d) => d.completed).length;
    const totalDays = state.program.length;
    completedCountEl.textContent = completedDays;

    if (progressChart) {
      // Update chart colors based on current theme
      const backgroundColor = state.darkMode
        ? [
            getComputedStyle(document.documentElement).getPropertyValue(
              "--dm-primary-accent"
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              "--dm-border-shadow"
            ),
          ]
        : [
            getComputedStyle(document.documentElement).getPropertyValue(
              "--lm-primary"
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              "--lm-light-bg-contrast"
            ),
          ];
      const borderColor = state.darkMode
        ? [
            getComputedStyle(document.documentElement).getPropertyValue(
              "--dm-background"
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              "--dm-background"
            ),
          ]
        : [
            getComputedStyle(document.documentElement).getPropertyValue(
              "--lm-background"
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              "--lm-background"
            ),
          ];

      progressChart.data.datasets[0].data = [
        completedDays,
        totalDays - completedDays,
      ];
      progressChart.data.datasets[0].backgroundColor = backgroundColor;
      progressChart.data.datasets[0].borderColor = borderColor;
      progressChart.data.datasets[0].borderWidth = 2; // Smaller border
      progressChart.update("none");
    }
    check30DayCompletion();
  }

  /**
   * Initializes the doughnut chart for progress visualization.
   */
  function initializeChart() {
    const completedDays = state.program.filter((d) => d.completed).length;
    const totalDays = state.program.length;

    // Get initial colors based on current dark mode state
    const initialBackgroundColor = state.darkMode
      ? [
          getComputedStyle(document.documentElement).getPropertyValue(
            "--dm-primary-accent"
          ),
          getComputedStyle(document.documentElement).getPropertyValue(
            "--dm-border-shadow"
          ),
        ]
      : [
          getComputedStyle(document.documentElement).getPropertyValue(
            "--lm-primary"
          ),
          getComputedStyle(document.documentElement).getPropertyValue(
            "--lm-light-bg-contrast"
          ),
        ];
    const initialBorderColor = state.darkMode
      ? [
          getComputedStyle(document.documentElement).getPropertyValue(
            "--dm-background"
          ),
          getComputedStyle(document.documentElement).getPropertyValue(
            "--dm-background"
          ),
        ]
      : [
          getComputedStyle(document.documentElement).getPropertyValue(
            "--lm-background"
          ),
          getComputedStyle(document.documentElement).getPropertyValue(
            "--lm-background"
          ),
        ];

    progressChart = new Chart(progressChartCanvas, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [completedDays, totalDays - completedDays],
            backgroundColor: initialBackgroundColor,
            borderColor: initialBorderColor,
            borderWidth: 2, // Smaller border
            borderRadius: 8,
            cutout: "80%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
      },
    });
  }

  /**
   * Renders the list of skill progress.
   */
  function renderSkillProgress() {
    const skillListDiv = document.getElementById("skill-list");
    skillListDiv.innerHTML = "";
    skillCategories.forEach((skill) => {
      const count = state.skillProgress[skill] || 0;
      const skillItem = document.createElement("div");
      skillItem.className =
        "bg-stone-100 p-4 rounded-lg shadow-sm flex flex-col items-center text-center";
      skillItem.innerHTML = `
                        <h3 class="text-lg-xl font-semibold text-stone-700 mb-2">${skill}</h3>
                        <p class="text-4xl font-bold text-amber-700">${count}</p>
                        <p class="text-sm-lg text-stone-500">Unggahan Terkait</p>
                    `;
      skillListDiv.appendChild(skillItem);
    });
  }

  /**
   * Renders the GitHub-like activity grid.
   */
  function renderActivityGrid() {
    activityGrid.innerHTML = "";
    // Create a map to easily look up day data by day number
    const programDaysMap = new Map();
    state.program.forEach((day) => programDaysMap.set(day.day, day));

    // Render 30 cells for the program duration
    for (let i = 1; i <= 30; i++) {
      const cell = document.createElement("div");
      cell.className = "activity-cell"; // Base class

      const dayData = programDaysMap.get(i);

      if (dayData && dayData.completed) {
        // Only consider days that are completed
        if (dayData.uploads && dayData.uploads.length > 0) {
          cell.classList.add("uploaded"); // Add class for uploaded
          cell.innerHTML = "⭐"; // Add star symbol
        } else {
          cell.classList.add("active"); // Add class for completed (no upload)
        }
      }
      // If dayData doesn't exist or not completed, it remains default 'activity-cell'
      activityGrid.appendChild(cell);
    }
  }

  /**
   * Renders the gallery of uploaded works.
   */
  function renderGallery() {
    const galleryGrid = document.getElementById("gallery-grid");
    galleryGrid.innerHTML = "";
    const filterSkill = document.getElementById("gallery-filter-skill").value;
    const sortOrder = document.getElementById("gallery-sort-date").value;

    let allUploads = [];
    state.program.forEach((day) => {
      day.uploads.forEach((upload) => {
        allUploads.push({
          ...upload,
          day: day.day,
          currentProgram: true,
        });
      });
    });

    state.programHistory.forEach((historyItem) => {
      historyItem.program.forEach((day) => {
        day.uploads.forEach((upload) => {
          allUploads.push({
            ...upload,
            day: day.day,
            historyId: historyItem.id,
            currentProgram: false,
          });
        });
      });
    });

    if (filterSkill !== "all") {
      allUploads = allUploads.filter((upload) => upload.skill === filterSkill);
      state.hasUsedGalleryFilter = true; // Set achievement condition
    } else {
      state.hasUsedGalleryFilter = false; // Reset if filter is 'all'
    }

    allUploads.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    if (allUploads.length === 0) {
      galleryGrid.innerHTML =
        '<p class="text-stone-500 text-center col-span-full text-sm-lg">Belum ada karya di galeri.</p>';
      return;
    }

    allUploads.forEach((upload) => {
      const galleryItem = document.createElement("div");
      galleryItem.className =
        "bg-stone-100 p-3 rounded-lg shadow-sm flex flex-col items-center text-center";
      galleryItem.innerHTML = `
                        <a href="#" class="upload-link block w-full h-32 mb-3 overflow-hidden rounded-md" data-url="${
                          upload.url
                        }">
                            ${
                              upload.url.startsWith("data:image/")
                                ? `<img src="${upload.url}" alt="${
                                    upload.description || "Unggahan"
                                  }" class="w-full h-full object-cover" style="border-radius: 4px !important; border: 2px solid var(--lm-border-shadow);">`
                                : `<div class="w-full h-full flex items-center justify-center text-stone-500 text-6xl" style="border-radius: 4px !important; border: 2px solid var(--lm-border-shadow);">&#x1F4C4;</div>`
                            }
                        </a>
                        <p class="text-sm-lg font-semibold text-stone-700 truncate w-full">${
                          upload.description || `Unggahan Hari ${upload.day}`
                        }</p>
                        <p class="text-xs-base text-stone-500">${
                          upload.date
                        } - ${upload.skill} ${
        upload.currentProgram ? "" : "(Riwayat)"
      }</p>
                    `;
      galleryGrid.appendChild(galleryItem);
    });

    // Add event listeners for new gallery items
    document.querySelectorAll("#gallery-grid .upload-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        openImageModal(e.currentTarget.dataset.url);
      });
    });
  }

  /**
   * Renders the latest gallery items for the home page preview.
   */
  function renderLatestGalleryPreview() {
    const previewDiv = document.getElementById("latest-gallery-preview");
    previewDiv.innerHTML = "";

    let allUploads = [];
    state.program.forEach((day) => {
      day.uploads.forEach((upload) => {
        allUploads.push({ ...upload, day: day.day });
      });
    });

    allUploads.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort newest first
    const latestFour = allUploads.slice(0, 4);

    if (latestFour.length === 0) {
      previewDiv.innerHTML =
        '<p class="text-stone-500 text-center col-span-2 text-sm-lg">Belum ada unggahan terbaru.</p>';
      return;
    }

    latestFour.forEach((upload) => {
      const previewItem = document.createElement("div");
      previewItem.className =
        "bg-stone-100 p-2 rounded-lg shadow-sm flex flex-col items-center text-center";
      previewItem.innerHTML = `
                        <a href="#" class="upload-link block w-full h-20 mb-2 overflow-hidden rounded-md" data-url="${
                          upload.url
                        }">
                            ${
                              upload.url.startsWith("data:image/")
                                ? `<img src="${upload.url}" alt="Unggahan" class="w-full h-full object-cover" style="border-radius: 4px !important; border: 2px solid var(--lm-border-shadow);">`
                                : `<div class="w-full h-full flex items-center justify-center text-stone-500 text-4xl" style="border-radius: 4px !important; border: 2px solid var(--lm-border-shadow);">&#x1F4C4;</div>`
                            }
                        </a>
                        <p class="text-xs-base font-semibold text-stone-700 truncate w-full">${
                          upload.description || `H ${upload.day}`
                        }</p>
                        <p class="text-xxs-sm text-stone-500">${upload.date}</p>
                    `;
      previewDiv.appendChild(previewItem);
    });

    // Add event listeners for new preview items
    document
      .querySelectorAll("#latest-gallery-preview .upload-link")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          openImageModal(e.currentTarget.dataset.url);
        });
      });
  }

  /**
   * Checks if the 30-day program is completed and triggers the celebration modal.
   */
  function check30DayCompletion() {
    const totalDays = initialProgramData.length;
    const completedDays = state.program.filter((d) => d.completed).length;

    if (completedDays >= totalDays) {
      celebrationUserName.textContent = state.userName;
      celebrationModal.classList.remove("hidden");
    }
  }

  /**
   * Archives the current program into the program history.
   */
  function archiveCurrentProgram() {
    const today = new Date().toISOString().slice(0, 10);
    const completedProgram = {
      id: `cycle-${state.programHistory.length + 1}-${today}`,
      startDate: today,
      endDate: today,
      program: JSON.parse(JSON.stringify(state.program)),
      skillProgressAtCompletion: JSON.parse(
        JSON.stringify(state.skillProgress)
      ),
      status: "completed",
    };
    state.programHistory.push(completedProgram);
    saveState();
  }

  /**
   * Starts a new program cycle, archiving the old one.
   */
  function startNewProgramCycle() {
    archiveCurrentProgram();
    state.program = JSON.parse(JSON.stringify(initialProgramData));
    state.skillProgress = {};
    skillCategories.forEach((skill) => {
      state.skillProgress[skill] = 0;
    });
    state.achievedStatuses = {}; // Reset achieved statuses for new cycle
    state.currentWeek = 1;
    state.currentDay = 1;
    state.consecutiveCompletedDays = 0; // Reset streak on new program
    state.lastCompletionDate = ""; // Reset last completion date
    saveState();
    celebrationModal.classList.add("hidden");
    showPage("home");
    showChatbotMessage(
      `Yuhuuu, ${state.userName}! Siklus baru udah dimulai! Semangat lagi yaa, aku yakin kamu bisa lebih keren dari sebelumnya! ✨`
    );
  }

  /**
   * Ends the current program and saves it to history.
   */
  function endProgramAndSave() {
    archiveCurrentProgram();
    state.program = [];
    state.skillProgress = {};
    state.achievedStatuses = {}; // Reset achieved statuses
    state.currentWeek = 1;
    state.currentDay = 1;
    state.consecutiveCompletedDays = 0; // Reset streak on program end
    state.lastCompletionDate = ""; // Reset last completion date
    saveState();
    celebrationModal.classList.add("hidden");
    showPage("home");
    showChatbotMessage(
      `Okeee, ${state.userName}! Programmu udah disimpan di riwayat. Makasih banyak udah berjuang bareng aku! Kapan-kapan kita mulai lagi yaa! Sampai jumpa! 👋💖`
    );
  }

  /**
   * Renders the list of past program cycles in the history page.
   */
  function renderProgramHistory() {
    programHistoryList.innerHTML = "";
    if (state.programHistory.length === 0) {
      programHistoryList.innerHTML =
        '<p class="text-stone-500 text-center text-sm-lg">Belum ada riwayat program yang tersimpan.</p>';
      return;
    }

    state.programHistory.forEach((historyItem) => {
      const completedDays = historyItem.program.filter(
        (d) => d.completed
      ).length;
      const totalDays = historyItem.program.length;
      const historyCard = document.createElement("div");
      historyCard.className = "bg-stone-100 p-4 rounded-lg shadow-sm";
      historyCard.innerHTML = `
                        <h3 class="text-lg-xl font-bold text-amber-700 mb-2">Siklus Program: ${
                          historyItem.startDate
                        } - ${historyItem.endDate}</h3>
                        <p class="text-stone-600 text-base">Total Tugas Selesai: ${completedDays} dari ${totalDays}</p>
                        <div class="mt-2 text-xs-base text-stone-500">
                            <p class="font-semibold">Progres Skill:</p>
                            <ul class="list-disc list-inside ml-4">
                                ${Object.entries(
                                  historyItem.skillProgressAtCompletion
                                )
                                  .map(
                                    ([skill, count]) =>
                                      `<li>${skill}: ${count} unggahan</li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    `;
      programHistoryList.appendChild(historyCard);
    });
  }

  /**
   * Renders the list of bookmarked programs and tasks.
   */
  function renderBookmarkedPrograms() {
    bookmarkedProgramsList.innerHTML = "";

    // Section for individual bookmarked tasks
    const bookmarkedTasksSection = document.createElement("div");
    bookmarkedTasksSection.className = "mt-8";
    bookmarkedTasksSection.innerHTML =
      '<h3 class="text-xl-2xl font-bold text-center text-stone-700 mb-4">Lihat Tugas Tersimpan</h3>';

    if (state.bookmarkedTasks.length === 0) {
      bookmarkedTasksSection.innerHTML +=
        '<p class="text-stone-500 text-center text-sm-lg">Belum ada tugas yang dibookmark.</p>';
    } else {
      state.bookmarkedTasks.forEach((taskBookmark) => {
        const taskItem = document.createElement("div");
        taskItem.className = "bg-stone-100 rounded-lg shadow-sm mb-2";
        taskItem.innerHTML = `
                            <div class="collapsible-header">
                                <span class="text-lg-xl font-semibold text-stone-700">Hari ${taskBookmark.day}: ${taskBookmark.title}</span>
                                <span class="collapsible-arrow text-xl">&#9658;</span>
                            </div>
                            <div class="collapsible-content">
                                <p class="text-stone-600 text-base mb-2">Pelajari: ${taskBookmark.learn}</p>
                                <p class="text-stone-600 text-base mb-2">Lakukan: ${taskBookmark.do}</p>
                                <p class="text-stone-600 text-base mb-4">Hasil: ${taskBookmark.result}</p>
                                <div class="flex gap-2">
                                    <button data-task-id="${taskBookmark.id}" class="view-task-bookmark-btn px-4 py-2 bg-amber-500 text-white text-sm font-semibold shadow-md hover:bg-amber-600 smooth-transition">Lihat Tugas</button>
                                    <button data-task-id="${taskBookmark.id}" class="delete-task-bookmark-btn px-4 py-2 bg-red-500 text-white text-sm font-semibold shadow-md hover:bg-red-600 smooth-transition">Hapus</button>
                                </div>
                            </div>
                        `;
        bookmarkedTasksSection.appendChild(taskItem);
      });
    }
    bookmarkedProgramsList.appendChild(bookmarkedTasksSection);

    // Re-attach event listeners for collapsible headers
    document.querySelectorAll(".collapsible-header").forEach((header) => {
      header.addEventListener("click", (e) => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector(".collapsible-arrow");
        content.classList.toggle("open");
        arrow.classList.toggle("rotate");
      });
    });

    // Event listeners for full program bookmarks
    document.querySelectorAll(".view-program-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const bookmarkId = e.target.dataset.bookmarkId;
        const bookmark = state.bookmarkedPrograms.find(
          (b) => b.id === bookmarkId
        );
        if (
          bookmark &&
          confirm(
            `Apakah Anda yakin ingin memuat program "${bookmark.title}"? Program Anda saat ini akan diganti.`
          )
        ) {
          state.program = JSON.parse(JSON.stringify(bookmark.programData)); // Load deep copy
          state.currentWeek = 1;
          state.currentDay = 1;
          state.skillProgress = {}; // Reset skill progress
          skillCategories.forEach((skill) => {
            state.skillProgress[skill] = 0;
          });
          state.achievedStatuses = {}; // Reset achievements
          state.consecutiveCompletedDays = 0; // Reset streak on loading new program
          state.lastCompletionDate = ""; // Reset last completion date
          saveState();
          showPage("program", { suppressChatbot: true }); // Suppress chatbot
        }
      });
    });

    document.querySelectorAll(".delete-program-bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const bookmarkId = e.target.dataset.bookmarkId;
        if (
          confirm(
            "Apakah Anda yakin ingin menghapus program yang disimpan ini?"
          )
        ) {
          state.bookmarkedPrograms = state.bookmarkedPrograms.filter(
            (b) => b.id !== bookmarkId
          );
          saveState();
          renderBookmarkedPrograms();
          showChatbotMessage("Program yang disimpan berhasil dihapus! 🗑️");
        }
      });
    });

    // Event listeners for individual task bookmarks
    document.querySelectorAll(".view-task-bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const taskId = e.target.dataset.taskId;
        const taskBookmark = state.bookmarkedTasks.find(
          (bt) => bt.id === taskId
        );
        if (taskBookmark) {
          // Navigate to program page and select the specific day
          state.currentDay = taskBookmark.day;
          state.currentWeek = Math.ceil(taskBookmark.day / 7);
          saveState();
          showPage("program", { suppressChatbot: true }); // Suppress chatbot
        }
      });
    });

    document.querySelectorAll(".delete-task-bookmark-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const taskId = e.target.dataset.taskId;
        if (
          confirm(
            "Apakah Anda yakin ingin menghapus tugas yang dibookmark ini?"
          )
        ) {
          state.bookmarkedTasks = state.bookmarkedTasks.filter(
            (bt) => bt.id !== taskId
          );
          saveState();
          renderBookmarkedPrograms();
          showChatbotMessage("Tugas yang dibookmark berhasil dihapus! 🗑️");
        }
      });
    });
  }

  /**
   * Renders the list of achievements on the stats page.
   */
  function renderAchievements() {
    achievementsListDiv.innerHTML = ""; // Clear existing achievements

    // Display only the first 4 achievements on the stats page
    const achievementsToDisplay = achievementsDefinitions.slice(0, 4);

    achievementsToDisplay.forEach((achDef) => {
      const isAchieved = state.achievedStatuses[achDef.id];
      const achievementItem = document.createElement("div");
      achievementItem.className = `achievement-item ${
        isAchieved ? "achieved" : ""
      }`;
      achievementItem.innerHTML = `
                        <span class="achievement-icon">${
                          isAchieved ? "🏆" : "❔"
                        }</span>
                        <div class="achievement-text">
                            <h3>${achDef.title}</h3>
                            <p>${achDef.description}</p>
                        </div>
                    `;
      achievementsListDiv.appendChild(achievementItem);
    });
  }

  /**
   * Renders all achievements in the modal.
   */
  function renderAllAchievements() {
    allAchievementsGrid.innerHTML = ""; // Clear existing achievements in modal

    achievementsDefinitions.forEach((achDef) => {
      const isAchieved = state.achievedStatuses[achDef.id];
      const achievementItem = document.createElement("div");
      achievementItem.className = `achievement-item ${
        isAchieved ? "achieved" : ""
      }`;
      achievementItem.innerHTML = `
                        <span class="achievement-icon">${
                          isAchieved ? "🏆" : "❔"
                        }</span>
                        <div class="achievement-text">
                            <h3>${achDef.title}</h3>
                            <p>${achDef.description}</p>
                        </div>
                    `;
      allAchievementsGrid.appendChild(achievementItem);
    });
  }

  /**
   * Resets all application data and reloads the page.
   */
  function resetApplicationData() {
    localStorage.clear(); // Clear all local storage data
    state.userName = "";
    state.currentPage = "home";
    state.currentWeek = 1;
    state.currentDay = 1;
    state.program = JSON.parse(JSON.stringify(initialProgramData)); // Reset to default template
    state.skillProgress = {};
    skillCategories.forEach((skill) => {
      state.skillProgress[skill] = 0;
    });
    state.programHistory = [];
    state.achievedStatuses = {};
    state.hasSeenWelcomeChatbot = false;
    state.darkMode = false; // Reset dark mode
    state.bookmarkedPrograms = []; // Reset bookmarks
    state.bookmarkedTasks = []; // Reset bookmarked tasks
    state.premiumThemes = {
      modern: true,
      oldschool: true,
      fantasy: true,
    }; // Reset premium themes to unlocked
    state.hasEditedTask = false; // Reset achievement state
    state.hasVisitedGallery = false; // Reset achievement state
    state.hasVisitedAbout = false; // Reset achievement state
    state.hasResetApp = true; // Set achievement state for reset
    state.hasVisitedStats = false; // Reset for explore_all_pages
    state.hasVisitedHistory = false; // Reset for explore_all_pages
    state.hasChangedTheme = false; // Reset for first_theme_change
    state.hasUsedGalleryFilter = false; // Reset for first_gallery_filter
    state.hasContactedDeveloper = false; // Reset for contact_developer
    state.consecutiveCompletedDays = 0; // Reset streak
    state.lastCompletionDate = ""; // Reset last completion date
    saveState(); // Save the reset state
    location.reload(); // Reload the page to reflect the reset
  }

  /**
   * Updates the UI for theme selection.
   */
  function updateThemeSelectionUI() {
    // Update labels based on premiumThemes state (all are active now)
    document.getElementById("theme-pixel").labels[0].textContent =
      "Pixel (Default)";
    document.getElementById("theme-modern").labels[0].textContent =
      "Modern Minimalist (Aktif)";
    document.getElementById("theme-oldschool").labels[0].textContent =
      "Oldschool (Aktif)";
    document.getElementById("theme-fantasy").labels[0].textContent =
      "Fantasy (Aktif)";

    // Ensure the currently active theme is selected in the radio buttons
    const currentTheme = localStorage.getItem("activeTheme") || "pixel";
    const currentThemeRadio = document.getElementById(`theme-${currentTheme}`);
    if (currentThemeRadio) {
      currentThemeRadio.checked = true;
    }
  }

  /**
   * Main function to initialize all application components and event listeners.
   */
  function initializeApplication() {
    // Load full state after name is confirmed/loaded
    state = {
      userName: localStorage.getItem("userName") || "",
      currentPage: localStorage.getItem("creativeProgramState")
        ? JSON.parse(localStorage.getItem("creativeProgramState")).currentPage
        : "home",
      currentWeek: localStorage.getItem("creativeProgramState")
        ? JSON.parse(localStorage.getItem("creativeProgramState")).currentWeek
        : 1,
      currentDay: localStorage.getItem("creativeProgramState")
        ? JSON.parse(localStorage.getItem("creativeProgramState")).currentDay
        : 1,
      program: JSON.parse(localStorage.getItem("creativeProgramData")) || null,
      skillProgress:
        JSON.parse(localStorage.getItem("creativeSkillProgress")) || {},
      programHistory:
        JSON.parse(localStorage.getItem("creativeProgramHistory")) || [],
      achievedStatuses:
        JSON.parse(localStorage.getItem("creativeAchievedStatuses")) || {},
      hasSeenWelcomeChatbot:
        localStorage.getItem("hasSeenWelcomeChatbot") === "true",
      darkMode: localStorage.getItem("darkMode") === "true",
      bookmarkedPrograms:
        JSON.parse(localStorage.getItem("bookmarkedPrograms")) || [],
      bookmarkedTasks:
        JSON.parse(localStorage.getItem("bookmarkedTasks")) || [],
      premiumThemes: JSON.parse(localStorage.getItem("premiumThemes")) || {
        modern: true,
        oldschool: true,
        fantasy: true,
      },
      hasEditedTask: localStorage.getItem("hasEditedTask") === "true",
      hasVisitedGallery: localStorage.getItem("hasVisitedGallery") === "true",
      hasVisitedAbout: localStorage.getItem("hasVisitedAbout") === "true",
      hasResetApp: localStorage.getItem("hasResetApp") === "true",
      hasVisitedStats: localStorage.getItem("hasVisitedStats") === "true",
      hasVisitedHistory: localStorage.getItem("hasVisitedHistory") === "true",
      hasChangedTheme: localStorage.getItem("hasChangedTheme") === "true",
      hasUsedGalleryFilter:
        localStorage.getItem("hasUsedGalleryFilter") === "true",
      hasContactedDeveloper:
        localStorage.getItem("hasContactedDeveloper") === "true",
      consecutiveCompletedDays: parseInt(
        localStorage.getItem("consecutiveCompletedDays") || "0"
      ),
      lastCompletionDate: localStorage.getItem("lastCompletionDate") || "",
    };

    // Apply dark mode preference on load
    if (state.darkMode) {
      document.body.classList.add("dark");
      document.getElementById("dark-mode-toggle").checked = true;
    }

    // Initialize skill progress if not already set
    skillCategories.forEach((skill) => {
      if (state.skillProgress[skill] === undefined) {
        state.skillProgress[skill] = 0;
      }
    });

    // If program data is null (first time user), initialize with template
    // This block is now only reached AFTER userName is confirmed
    if (state.program === null || state.program.length === 0) {
      // Also check for empty program if 'start from empty' was chosen
      const startOption = document.querySelector(
        'input[name="program-start-option"]:checked'
      )?.value; // Get selected option from modal
      if (startOption === "empty") {
        state.program = []; // Initialize with empty program
        state.currentDay = null; // No current day selected initially for empty program
        state.currentWeek = 1; // Default to week 1
        showChatbotMessage(
          `Oke, ${state.userName}! Programmu kosong, silakan tambahkan tugasmu sendiri! 💪`
        );
        // Ensure program page is shown if starting empty
        showPage("program");
      } else {
        // 'template' or default
        state.program = JSON.parse(JSON.stringify(initialProgramData)); // Use template
        state.currentDay = 1;
        state.currentWeek = 1;
        if (!state.hasSeenWelcomeChatbot) {
          showChatbotMessage(
            generateMotivationalMessage("welcome", state.userName)
          );
          state.hasSeenWelcomeChatbot = true;
        }
        showPage("home"); // Go to home page by default
      }
    } else {
      // If program already exists, just show the current page
      showPage(state.currentPage);
    }

    // Render all dynamic content
    initializeChart();
    updateProgress(); // Call updateProgress after initializing chart to apply border changes
    renderDaysGrid();
    renderDayDetail();
    renderSkillProgress();
    renderGallery();
    renderLatestGalleryPreview();
    renderProgramHistory();
    renderBookmarkedPrograms();
    renderAchievements(); // Initial render of achievements

    // Populate skill filter dropdown (static setup)
    const galleryFilterSkill = document.getElementById("gallery-filter-skill");
    if (galleryFilterSkill.options.length <= 1) {
      // Prevent duplicate options
      skillCategories.forEach((skill) => {
        const option = document.createElement("option");
        option.value = skill;
        option.textContent = skill;
        galleryFilterSkill.appendChild(option);
      });
    }

    // Request Notification Permission
    if (!localStorage.getItem("notificationPermissionRequested")) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Izin notifikasi diberikan.");
        } else {
          console.log("Izin notifikasi ditolak.");
        }
        localStorage.setItem("notificationPermissionRequested", "true");
      });
    }

    // Attach all other event listeners here
    navButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        showPage(e.target.dataset.page);
      });
    });

    weekTabsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("week-tab")) {
        const week = parseInt(e.target.dataset.week);
        state.currentWeek = week;

        document
          .querySelectorAll(".week-tab")
          .forEach((tab) =>
            tab.classList.remove("tab-active", "text-amber-900", "bg-amber-100")
          );
        document
          .querySelectorAll(".week-tab")
          .forEach((tab) => tab.classList.add("text-stone-500"));
        e.target.classList.add("tab-active");
        e.target.classList.remove("text-stone-500");

        renderDaysGrid();
        const firstDayInWeek = state.program.find(
          (d) => d.week === state.currentWeek
        );
        state.currentDay = firstDayInWeek ? firstDayInWeek.day : null;
        renderDayDetail();
        saveState();
      }
    });

    daysGrid.addEventListener("click", (e) => {
      if (e.target.classList.contains("day-btn")) {
        const day = parseInt(e.target.dataset.day);
        state.currentDay = day;
        renderDaysGrid();
        renderDayDetail();
        saveState();
      }
    });

    closeAchievementBtn.addEventListener("click", () => {
      achievementPopup.classList.add("hidden");
    });

    document
      .getElementById("gallery-filter-skill")
      .addEventListener("change", renderGallery);
    document
      .getElementById("gallery-sort-date")
      .addEventListener("change", renderGallery);

    // Removed the contact form submission listener from here as the form is removed from home page.
    // The contact form in about page still exists and has its own listener.

    const contactFormAbout = document.getElementById("contact-form-about");
    if (contactFormAbout) {
      const successMsg = document.getElementById("form-success");

      contactFormAbout.addEventListener("submit", function (e) {
        // Biarkan browser handle submit ke Formspree
        // Jangan reset langsung
        setTimeout(() => {
          contactFormAbout.reset();
          if (successMsg) {
            successMsg.classList.remove("hidden");
          }
        }, 1000); // kasih delay biar Formspree sempat submit form-nya
      });
    }

    endProgramBtn.addEventListener("click", endProgramAndSave);
    continueProgramBtn.addEventListener("click", startNewProgramCycle);

    navbarTitleLink.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("home");
    });

    navbarLogo.addEventListener("click", () => {
      openImageModal(navbarLogo.src);
    });

    if (developerPhoto) {
      developerPhoto.addEventListener("click", () => {
        openImageModal(developerPhoto.src);
      });
    }

    fullImageModal.addEventListener("click", (e) => {
      // Close modal if clicked anywhere on the overlay
      if (e.target === fullImageModal || e.target === fullImageDisplay) {
        fullImageModal.classList.add("hidden");
        fullImageDisplay.src = "";
      }
    });

    resetProgramBtn.addEventListener("click", () => {
      resetAppConfirmModal.classList.remove("hidden");
    });

    resetAppYesBtn.addEventListener("click", () => {
      resetApplicationData();
      resetAppConfirmModal.classList.add("hidden");
    });

    resetAppNoBtn.addEventListener("click", () => {
      resetAppConfirmModal.classList.add("hidden");
    });

    darkModeToggle.addEventListener("change", () => {
      state.darkMode = darkModeToggle.checked;
      if (state.darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      state.hasChangedTheme = true; // Set achievement condition
      saveState();
      checkAchievements(); // Check for achievement after toggling dark mode
      updateProgress(); // Update chart colors on dark mode toggle
    });

    themeOptions.forEach((radio) => {
      radio.addEventListener("change", () => {
        const selectedTheme = radio.value;
        document.body.classList.remove("Coming Soon");
        if (selectedTheme !== "pixel") {
          document.body.classList.add(`${selectedTheme}-theme`);
        }
        localStorage.setItem("activeTheme", selectedTheme);
        alert(
          `Tema ${
            selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
          } diaktifkan!`
        );
        state.hasChangedTheme = true; // Set achievement condition
        saveState();
        checkAchievements(); // Check for achievement after changing theme
        // window.location.href = 'https://www.instagram.com/tee_nathniel'; // This will reload the page
      });
    });

    // Event listeners for "See All Achievements" modal
    seeAllAchievementsBtn.addEventListener("click", () => {
      renderAllAchievements();
      allAchievementsModal.classList.remove("hidden");
    });

    allAchievementsModal.addEventListener("click", (e) => {
      // Close modal if clicked anywhere on the overlay, but not on the content itself
      if (e.target === allAchievementsModal) {
        allAchievementsModal.classList.add("hidden");
      }
    });
  }

  // Main logic on DOMContentLoaded
  if (!state.userName) {
    nameInputModal.classList.remove("hidden"); // Show the modal
    // Only attach the save button listener for the modal
    saveNameBtn.addEventListener("click", () => {
      const userName = userNameInput.value.trim();
      if (userName) {
        state.userName = userName;
        localStorage.setItem("userName", userName);
        nameInputModal.classList.add("hidden"); // Hide the modal
        // Now initialize the rest of the app
        initializeApplication();
      } else {
        alert("Nama tidak boleh kosong, yaa!");
      }
    });
  } else {
    // If userName already exists, directly initialize the application
    nameInputModal.classList.add("hidden"); // Ensure it's hidden just in case
    initializeApplication();
  }
});
