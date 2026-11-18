// Views publik: landing, form, bukti, login — desain mengikuti output Stitch
(function () {
  const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe6fzOM-Th5LQdvSxmrcDGWSZq9z-acP487PLaD52OaPjoGvmQpHgarRdRxrgy_jxkPDTah4A8a_hMyp5v9TZ9h6-hqesWAggHs1jTJR3aiEK8KgRTJoXZV6FVuozA9tYJu13Ruduj-BS5EAAGXE4Cdpdsv9KWDjU0kGzXE2aUi67K39_ASK_TWV9J69cq4a8Wat2D9FjcLuomH4JO3_S_oR7-ngHNL8iguDhdAdI';

  function header(active) {
    const nav = [['beranda', '#/', 'Beranda'], ['form-buku-tamu', '#/form', 'Form Buku Tamu'], ['panduan', '#/panduan', 'Panduan Pengunjung'], ['dasbor', '#/dashboard', 'Dasbor Petugas'], ['data-tamu', '#/data-tamu', 'Data Tamu']];
    return `
    <header class="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-1 bg-gradient-to-r from-tenun-red via-tenun-gold to-tenun-red w-full"></div>
      <div class="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        <a href="#/" class="flex items-center gap-space-md min-w-0">
          <img alt="Logo Pengayoman Kemenkumham NTT" class="h-8 w-auto object-contain" src="${LOGO}">
          <div class="hidden sm:flex flex-col justify-center leading-tight">
            <span class="font-label-sm text-label-sm uppercase tracking-wider text-text-primary font-bold">Kementerian Hukum Republik Indonesia</span>
            <span class="font-caption text-caption text-secondary font-semibold">Kantor Wilayah Nusa Tenggara Timur</span>
            <span class="font-caption text-caption text-text-muted italic">Melayani, Profesional, Terpercaya</span>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-space-lg">
          ${nav.map(([p, href, label]) => `<a href="${href}" class="py-space-xs transition-colors ${active === p ? 'text-secondary font-title-md font-bold border-b-2 border-tenun-gold' : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface'}">${label}</a>`).join('')}
        </nav>
        <div class="flex items-center gap-space-md">
          <div class="hidden md:flex items-center gap-space-xs bg-surface-container-low px-space-md py-1.5 rounded-full border border-surface-border">
            <span class="w-2 h-2 rounded-full bg-status-active-green animate-pulse"></span>
            <span class="font-caption text-caption font-semibold text-text-secondary uppercase tracking-wider">Operasional WITA</span>
            <span class="font-label-sm text-label-sm font-bold text-text-primary pl-1">08:00 - 16:00</span>
          </div>
          <a href="#/login" class="hidden sm:inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md px-space-md py-1.5 rounded-lg transition-colors">Login Petugas</a>
        </div>
      </div>
      <div class="h-1.5 bg-[repeating-linear-gradient(45deg,#B91C1C_0,#B91C1C_10px,#D97706_10px,#D97706_20px,#0B1528_20px,#0B1528_30px)] opacity-90"></div>
    </header>`;
  }

  function footer() {
    return `
    <footer class="w-full bg-navy-hero text-surface-container-lowest mt-space-2xl">
      <div class="h-1.5 bg-gradient-to-r from-tenun-gold via-tenun-red to-tenun-gold"></div>
      <div class="max-w-7xl mx-auto px-gutter py-space-2xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-xl items-start">
          <div class="space-y-space-sm">
            <div class="flex items-center gap-space-sm">
              <span class="material-symbols-outlined text-tenun-gold">account_balance</span>
              <span class="font-title-md text-title-md font-bold tracking-tight">KEMENKUMHAM NTT</span>
            </div>
            <p class="font-body-sm text-body-sm text-surface-variant">Sistem Informasi Buku Tamu Digital Pelayanan Terpadu Satu Pintu (PTSP) Kantor Wilayah Nusa Tenggara Timur.</p>
            <div class="inline-flex items-center gap-space-xs bg-surface-card/10 px-space-md py-1 rounded-full border border-surface-card/20">
              <span class="material-symbols-outlined text-status-active-green text-[16px]">verified</span>
              <span class="font-caption text-caption font-semibold text-tenun-gold-light uppercase tracking-wider">WBK • Wilayah Bebas dari Korupsi</span>
            </div>
          </div>
          <div class="space-y-space-xs">
            <span class="font-label-md text-label-md font-bold uppercase tracking-wider block">Kantor Wilayah NTT</span>
            <p class="font-body-sm text-body-sm text-surface-variant flex items-start gap-space-xs"><span class="material-symbols-outlined text-[18px] text-tenun-gold shrink-0 mt-0.5">location_on</span><span>Jl. W.J. Lalamentik No. 98, Oebufu, Kota Kupang, Nusa Tenggara Timur 85111</span></p>
            <p class="font-body-sm text-body-sm text-surface-variant flex items-center gap-space-xs"><span class="material-symbols-outlined text-[18px] text-tenun-gold shrink-0">call</span><span>(0380) 821245 / 833132</span></p>
          </div>
          <div class="space-y-space-xs">
            <span class="font-label-md text-label-md font-bold uppercase tracking-wider block">Jam Pelayanan Publik</span>
            <div class="bg-surface-card/5 p-space-md rounded-lg border border-surface-card/10 space-y-1">
              <p class="font-body-sm text-body-sm font-semibold">Senin - Kamis: 08:00 - 16:00 WITA</p>
              <p class="font-body-sm text-body-sm text-surface-variant">Jumat: 08:00 - 16:30 WITA</p>
              <p class="font-caption text-caption text-text-muted">Istirahat Layanan: 12:00 - 13:00 WITA</p>
            </div>
          </div>
        </div>
        <div class="mt-space-xl pt-space-lg border-t border-surface-card/10 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-surface-variant font-caption text-caption">
          <p>© 2025 Kantor Wilayah Kementerian Hukum dan HAM Nusa Tenggara Timur. Hak Cipta Dilindungi Undang-Undang.</p>
          <p class="text-tenun-gold-light font-medium">Integritas • Akuntabilitas • Transparansi Pelayanan Publik</p>
        </div>
      </div>
    </footer>`;
  }

  App.views.landing = (el) => {
    el.appendChild(h(header('beranda') + `
    <main class="w-full pt-20 bg-surface min-h-[calc(100vh-280px)]">
      <section class="relative bg-navy-hero text-surface-container-lowest overflow-hidden pb-space-2xl">
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#dce1ff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div class="max-w-7xl mx-auto px-gutter relative z-10 pt-space-xl">
          <div class="flex flex-wrap items-center justify-between gap-space-sm pb-space-lg">
            <div class="inline-flex items-center gap-space-xs bg-navy-card/80 backdrop-blur-md px-space-md py-1.5 rounded-full shadow-sm">
              <span class="w-2 h-2 rounded-full bg-tenun-gold animate-pulse"></span>
              <span class="font-caption text-caption text-tenun-gold-light uppercase tracking-wider font-semibold">Sistem Registrasi Buku Tamu Digital Resmi</span>
            </div>
            <div class="inline-flex items-center gap-space-xs bg-navy-card/80 px-space-md py-1.5 rounded-full text-surface-variant font-caption text-caption">
              <span class="material-symbols-outlined text-[16px] text-status-active-green">verified_user</span>
              <span>PTSP Berintegritas • WBK Kemenkumham NTT</span>
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-xs">
            <div class="lg:col-span-7 space-y-space-lg">
              <div class="space-y-space-sm">
                <h1 class="font-display text-display leading-tight">Selamat Datang di <span class="text-tenun-gold">Buku Tamu</span> Digital</h1>
                <p class="font-title-md text-title-md text-surface-variant font-medium">Kantor Wilayah Kementerian Hukum dan Hak Asasi Manusia Nusa Tenggara Timur</p>
                <p class="font-body-md text-body-md text-text-muted max-w-2xl">Terima kasih telah berkunjung ke kantor kami. Silakan isi formulir kedatangan secara terpadu, cepat, dan transparan.</p>
              </div>
              <div class="bg-surface-card text-on-surface rounded-xl p-space-lg shadow-xl relative overflow-hidden">
                <div class="h-1 bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary absolute top-0 left-0 right-0"></div>
                <div class="flex flex-col sm:flex-row items-center sm:items-start gap-space-lg">
                  <div class="shrink-0 flex flex-col items-center bg-surface-container-low p-space-sm rounded-lg shadow-sm">
                    <div class="w-32 h-32 bg-navy-hero text-tenun-gold rounded-lg flex items-center justify-center text-4xl font-extrabold">QR</div>
                    <div class="mt-space-xs inline-flex items-center gap-1 font-caption text-caption text-text-secondary uppercase tracking-wider font-bold">
                      <span class="material-symbols-outlined text-[15px] text-tenun-gold">qr_code_scanner</span><span>Pindai Kamera</span>
                    </div>
                  </div>
                  <div class="space-y-space-sm text-center sm:text-left flex-1 min-w-0">
                    <div class="inline-flex items-center gap-space-xs bg-tenun-red-subtle text-tenun-red px-space-sm py-0.5 rounded-full font-label-sm text-label-sm"><span>Isi Mandiri dari Ponsel</span></div>
                    <h2 class="font-headline-sm text-headline-sm text-text-primary">Registrasi Tamu Mandiri</h2>
                    <p class="font-body-sm text-body-sm text-text-secondary">Tekan tombol di bawah untuk mengisi formulir kunjungan secara langsung.</p>
                    <div class="pt-space-xs flex flex-wrap gap-space-sm items-center justify-center sm:justify-start">
                      <a href="#/form" class="inline-flex items-center gap-space-xs bg-navy-hero hover:bg-navy-card text-surface-container-lowest font-label-md text-label-md px-space-lg py-2.5 rounded-lg shadow-md transition-all active:scale-95">
                        <span class="material-symbols-outlined text-[18px] text-tenun-gold">edit_square</span><span>Isi Buku Tamu Sekarang</span>
                      </a>
                      <a href="#/panduan" class="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-variant text-text-primary font-label-md text-label-md px-space-md py-2.5 rounded-lg transition-colors">
                        <span class="material-symbols-outlined text-[18px] text-text-secondary">help_outline</span><span>Panduan Alur</span>
                      </a>
                    </div>
                    <div class="flex items-center justify-center sm:justify-start gap-space-xs text-text-muted font-caption text-caption pt-space-xs">
                      <span class="material-symbols-outlined text-[15px]">schedule</span><span>Zona Pelayanan: Waktu Indonesia Tengah (WITA)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-5">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-card p-space-lg text-center">
                <div class="text-tenun-gold font-bold uppercase tracking-wider text-sm">Kantor Wilayah NTT</div>
                <div class="text-surface-container-lowest font-title-md font-semibold mt-1">Pusat Pelayanan Administrasi Hukum Terpadu</div>
                <div class="text-text-muted font-caption mt-1">Jl. W.J. Lalamentik No. 98, Kupang</div>
                <div class="mt-4 inline-flex items-center gap-space-xs bg-surface-card/10 px-space-md py-1.5 rounded-full">
                  <span class="w-2 h-2 rounded-full bg-status-active-green animate-pulse"></span>
                  <span class="clock text-surface-variant font-caption font-semibold"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-gutter w-full -mt-10 relative z-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-space-md bg-surface-card p-space-lg rounded-2xl shadow-xl">
          <div class="flex items-center gap-space-md p-space-sm">
            <div class="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-secondary text-[24px]">groups</span></div>
            <div><span class="font-headline-md text-headline-md text-text-primary block font-extrabold" id="stat-today">—</span><span class="font-caption text-caption text-text-secondary uppercase tracking-wider font-semibold">Tamu Hari Ini</span></div>
          </div>
          <div class="flex items-center gap-space-md p-space-sm">
            <div class="w-12 h-12 rounded-xl bg-tenun-gold-light flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-tenun-gold text-[24px]">timer</span></div>
            <div><span class="font-headline-md text-headline-md text-text-primary block font-extrabold" id="stat-total">—</span><span class="font-caption text-caption text-text-secondary uppercase tracking-wider font-semibold">Total Tamu</span></div>
          </div>
          <div class="flex items-center gap-space-md p-space-sm">
            <div class="w-12 h-12 rounded-xl bg-status-active-green/10 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-status-active-green text-[24px]">sentiment_very_satisfied</span></div>
            <div><span class="font-headline-md text-headline-md text-text-primary block font-extrabold">98.8%</span><span class="font-caption text-caption text-text-secondary uppercase tracking-wider font-semibold">Indeks Kepuasan</span></div>
          </div>
          <div class="flex items-center gap-space-md p-space-sm">
            <div class="w-12 h-12 rounded-xl bg-tenun-red-subtle flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-tenun-red text-[24px]">verified</span></div>
            <div><span class="font-headline-md text-headline-md text-text-primary block font-extrabold">100%</span><span class="font-caption text-caption text-text-secondary uppercase tracking-wider font-semibold">Bebas Pungli • WBK</span></div>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-gutter w-full py-space-2xl" id="panduan">
        <div class="bg-surface-card rounded-2xl p-space-xl sm:p-space-2xl shadow-lg relative overflow-hidden">
          <div class="h-1.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary absolute top-0 left-0 right-0"></div>
          <div class="text-center max-w-2xl mx-auto mb-space-2xl">
            <h2 class="font-headline-lg text-headline-lg text-text-primary">Tahapan Pengunjung Kantor Wilayah NTT</h2>
            <p class="font-body-md text-body-md text-text-secondary">Alur sederhana dan tertib kedatangan tamu.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xl">
            ${[['1', 'Pindai QR Code', 'Gunakan kamera smartphone diarahkan pada banner QR di lobi.'], ['2', 'Isi Formulir', 'Lengkapi nama, nomor ponsel, instansi, dan divisi tujuan.'], ['3', 'Nomor Kunjungan', 'Sistem menampilkan kode tiket digital sebagai tanda tercatat.'], ['4', 'Temui Petugas', 'Resepsionis akan memandu Anda ke ruang terkait.']].map(([n, t, d]) => `
              <div class="flex flex-col items-center text-center space-y-space-sm">
                <div class="w-14 h-14 rounded-full bg-navy-hero text-surface-container-lowest font-headline-md text-headline-md flex items-center justify-center shadow-lg">${n}</div>
                <h4 class="font-title-md text-title-md text-text-primary font-bold">${t}</h4>
                <p class="font-body-sm text-body-sm text-text-secondary leading-relaxed">${d}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>
      ${footer()}
    </main>`));
    setInterval(() => document.querySelectorAll('.clock').forEach(c => c.textContent = witaClock()), 1000);
    API.get('getStats').then(s => {
      document.getElementById('stat-today').textContent = s.today;
      document.getElementById('stat-total').textContent = s.total;
    }).catch(() => {});
  };

  App.views.panduan = (el) => {
    el.appendChild(h(header('panduan') + `
    <main class="w-full pt-20 bg-surface min-h-screen">
      <div class="max-w-3xl mx-auto px-gutter py-space-xl">
        <div class="bg-surface-card rounded-2xl p-space-xl shadow-lg">
          <div class="h-1.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary rounded-t-2xl -m-space-xl mb-space-xl"></div>
          <h1 class="font-headline-lg text-headline-lg text-text-primary">Panduan Pengunjung</h1>
          <div class="space-y-space-md mt-space-lg">
            ${[['1. Pindai QR Code', 'Arahkan kamera ponsel ke banner QR di lobi atau meja resepsionis.'], ['2. Isi Formulir', 'Lengkapi nama lengkap, nomor WhatsApp, asal instansi, keperluan, dan divisi tujuan.'], ['3. Dapatkan Nomor Tiket', 'Sistem menerbitkan tiket digital dengan nomor registrasi resmi.'], ['4. Temui Petugas', 'Tunjukkan tiket digital ke petugas keamanan atau resepsionis.']].map(([t, d]) => `
              <div class="p-space-md rounded-xl bg-surface-container-low border border-surface-border">
                <div class="font-title-md text-title-md font-bold text-text-primary">${t}</div>
                <p class="font-body-md text-body-md text-text-secondary mt-1">${d}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>
      ${footer()}
    </main>`));
  };

  App.views.form = (el) => {
    el.appendChild(h(header('form-buku-tamu') + `
    <main class="w-full pt-20 bg-surface min-h-[calc(100vh-280px)]">
      <div class="relative w-full max-w-7xl mx-auto px-gutter py-space-xl sm:py-space-2xl">
        <div class="flex items-center justify-between mb-space-lg">
          <div class="flex items-center gap-space-xs text-text-secondary font-label-md">
            <a href="#/" class="hover:text-primary flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">home</span><span>Beranda</span></a>
            <span class="material-symbols-outlined text-[14px]">chevron_right</span>
            <span class="text-text-primary font-semibold">Registrasi Tamu PTSP</span>
          </div>
          <div class="hidden sm:flex items-center gap-2 text-text-muted font-caption">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-status-active-green"></span><span>Sistem Pencatatan Terkoneksi</span>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-xl bg-surface-card">
          <div class="lg:col-span-5 relative min-h-[460px] lg:min-h-[820px] flex flex-col justify-between p-space-xl text-on-primary bg-navy-hero overflow-hidden">
            <div class="absolute inset-0 z-0">
              <div class="absolute inset-0 bg-gradient-to-t from-navy-hero via-navy-hero/70 to-navy-hero/30"></div>
              <div class="absolute top-0 right-0 w-32 h-full opacity-10 bg-[radial-gradient(#D97706_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
            </div>
            <div class="relative z-10 space-y-space-sm">
              <div class="inline-flex items-center gap-space-xs bg-surface-card/15 backdrop-blur-md px-space-md py-1.5 rounded-full border border-surface-card/25 shadow-sm">
                <span class="material-symbols-outlined text-tenun-gold text-[16px]">verified_user</span>
                <span class="font-label-sm text-label-sm tracking-wide uppercase">PTSP Terpadu Satu Pintu</span>
              </div>
              <div class="pt-space-xs">
                <span class="font-caption text-caption uppercase tracking-widest text-tenun-gold-light font-bold block">Kantor Wilayah</span>
                <p class="font-headline-sm text-headline-sm font-bold leading-snug">Kementerian Hukum NTT</p>
              </div>
            </div>
            <div class="relative z-10 hidden sm:grid grid-cols-2 gap-space-md my-auto py-space-lg">
              <div class="bg-navy-card/80 backdrop-blur-sm p-space-md rounded-lg border border-surface-card/10">
                <div class="flex items-center justify-between text-tenun-gold-light mb-1"><span class="font-caption text-caption uppercase">Tamu Hari Ini</span><span class="material-symbols-outlined text-[18px]">group</span></div>
                <p class="font-headline-md text-headline-md font-bold" id="form-stat">—</p>
              </div>
              <div class="bg-navy-card/80 backdrop-blur-sm p-space-md rounded-lg border border-surface-card/10">
                <div class="flex items-center justify-between text-status-active-green mb-1"><span class="font-caption text-caption uppercase">Indeks Kepuasan</span><span class="material-symbols-outlined text-[18px]">sentiment_very_satisfied</span></div>
                <p class="font-headline-md text-headline-md font-bold">98.4%</p>
              </div>
            </div>
            <div class="relative z-10 pt-space-xl">
              <div class="p-space-lg rounded-xl bg-navy-hero/90 backdrop-blur-md border border-surface-card/15 shadow-lg space-y-space-xs">
                <div class="flex items-center gap-space-xs text-tenun-gold"><span class="material-symbols-outlined text-[20px]">handshake</span><span class="font-caption text-caption uppercase tracking-wider font-bold">Sambutan Hangat</span></div>
                <h2 class="font-headline-md text-headline-md font-bold leading-tight">Selamat datang di Kanwil Kementerian Hukum NTT</h2>
                <p class="font-body-md text-body-md text-surface-variant leading-relaxed pt-1">Silakan isi data kunjungan Anda dengan benar dan lengkap. Petugas bagian yang dituju akan segera menerima notifikasi.</p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7 p-space-lg sm:p-space-xl lg:p-space-2xl bg-surface-card flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <div class="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-tenun-gold-light text-tenun-gold font-label-sm text-label-sm font-bold shadow-sm"><span class="w-2 h-2 rounded-full bg-tenun-gold"></span><span>Buku Tamu Digital</span></div>
                <span class="text-caption font-caption text-text-muted">Kanwil NTT • No. Form: BTD-2026</span>
              </div>
              <h1 class="font-headline-lg text-headline-lg text-text-primary font-bold tracking-tight">Formulir Buku Tamu</h1>
              <p class="font-body-md text-body-md text-text-secondary mt-1">Silakan isi data kunjungan Anda dengan benar dan lengkap untuk proses registrasi resmi di Meja Pelayanan Terpadu.</p>
              <div class="mt-space-lg mb-space-xl p-space-md rounded-xl bg-surface-container-low border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-space-md shadow-sm">
                <div class="flex items-center gap-space-md">
                  <div class="w-10 h-10 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center text-secondary"><span class="material-symbols-outlined text-[24px]">calendar_month</span></div>
                  <div><p class="font-caption text-caption text-text-muted uppercase tracking-wider font-semibold">Tanggal Registrasi</p><p class="font-title-md text-title-md font-bold text-text-primary" id="live-date">—</p></div>
                </div>
                <div class="flex items-center gap-space-md sm:border-l sm:border-surface-border sm:pl-space-lg">
                  <div class="w-10 h-10 rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-center text-tenun-gold"><span class="material-symbols-outlined text-[24px]">schedule</span></div>
                  <div><p class="font-caption text-caption text-text-muted uppercase tracking-wider font-semibold">Waktu Akses WITA</p><p class="font-headline-sm text-headline-sm font-bold text-text-primary" id="live-clock">—</p></div>
                </div>
              </div>
              <form class="space-y-space-lg" id="guest-form">
                <div class="space-y-1.5">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Nama Lengkap <span class="text-tenun-red font-bold">*</span></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-text-muted"><span class="material-symbols-outlined text-[20px]">person</span></div>
                    <input id="f-nama" name="nama" required class="w-full pl-11 pr-space-md py-3 rounded-lg bg-surface-card border border-surface-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" placeholder="Masukkan nama lengkap sesuai KTP / Identitas" type="text">
                  </div>
                </div>
                <div class="space-y-1.5">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Asal Instansi / Lembaga / Masyarakat Umum <span class="text-tenun-red font-bold">*</span></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-text-muted"><span class="material-symbols-outlined text-[20px]">apartment</span></div>
                    <input id="f-instansi" name="instansi" required class="w-full pl-11 pr-space-md py-3 rounded-lg bg-surface-card border border-surface-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none" placeholder="Contoh: Dinas Pendidikan NTT / Kantor Advokat / Pribadi" type="text">
                  </div>
                </div>
                <div class="space-y-1.5">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Nomor HP / WhatsApp Aktif <span class="text-tenun-red font-bold">*</span></label>
                  <div class="flex rounded-lg border border-surface-border overflow-hidden focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 transition-all bg-surface-card">
                    <span class="inline-flex items-center px-space-md bg-surface-container-low text-text-primary font-title-md font-bold border-r border-surface-border">+62</span>
                    <input id="f-nohp" name="nohp" pattern="[0-9]{8,13}" required class="w-full px-space-md py-3 outline-none" placeholder="81234567890" type="tel">
                  </div>
                  <p class="font-caption text-caption text-text-muted">Notifikasi pemanggilan &amp; tiket tanda masuk dikirim ke nomor ini.</p>
                </div>
                <div class="space-y-1.5">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Keperluan Kunjungan <span class="text-tenun-red font-bold">*</span></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-text-muted"><span class="material-symbols-outlined text-[20px]">assignment</span></div>
                    <select id="f-keperluan" name="keperluan" required class="w-full pl-11 pr-10 py-3 rounded-lg bg-surface-card border border-surface-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none appearance-none cursor-pointer">
                      <option disabled selected value="">Pilih keperluan kunjungan spesifik...</option>
                      <option value="ahu">Konsultasi AHU (Administrasi Hukum Umum &amp; Kenotariatan)</option>
                      <option value="ki">Pendaftaran Hak Cipta / Merek &amp; Desain Industri</option>
                      <option value="harmonisasi">Harmonisasi Raperda Kabupaten / Kota</option>
                      <option value="notaris">Layanan Kenotariatan &amp; Pengawasan Notaris</option>
                      <option value="bankum">Bantuan Hukum Pro Bono &amp; Penyuluhan Hukum</option>
                      <option value="persuratan">Urusan Kedinasan / Administrasi &amp; Persuratan</option>
                      <option value="audiensi">Audiensi Pimpinan Kantor Wilayah</option>
                      <option value="lainnya">Lain-lain / Keperluan Layanan Hukum Khusus</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 pr-space-md flex items-center pointer-events-none text-text-muted"><span class="material-symbols-outlined text-[20px]">expand_more</span></div>
                  </div>
                </div>
                <div class="space-y-2 pt-space-xs">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Bagian / Divisi yang Dituju <span class="text-tenun-red font-bold">*</span></label>
                  <div class="space-y-space-sm" id="division-container">
                    ${[['tata-usaha', 'Divisi Administrasi (Tata Usaha &amp; Umum)', 'corporate_fare', 'Surat menyurat, kepegawaian, keuangan, perlengkapan & keprotokolan pimpinan'], ['pelayanan-hukum', 'Divisi Pelayanan Hukum', 'gavel', 'Layanan AHU, Kekayaan Intelektual, Notaris, Kewarganegaraan & Bantuan Hukum'], ['perancang-peraturan', 'Divisi Peraturan Perundang-undangan & JDIH', 'history_edu', 'Harmonisasi raperda, analisis hukum, dokumentasi informasi hukum'], ['imigrasi', 'Divisi Keimigrasian', 'badge', 'Pengawasan orang asing, koordinasi paspor & perizinan tinggal']].map(([v, t, ic, d]) => `
                      <label class="group relative flex items-start p-space-md rounded-xl border border-surface-border bg-surface-card hover:bg-surface-container-low cursor-pointer transition-all duration-200">
                        <input class="mt-1 h-4 w-4 accent-navy-hero" name="petugas" type="radio" value="${t}" ${v === 'pelayanan-hukum' ? 'checked' : ''}>
                        <div class="ml-space-md flex-1">
                          <div class="flex items-center justify-between"><span class="font-title-md text-title-md font-bold text-text-primary group-hover:text-secondary">${t}</span><span class="material-symbols-outlined text-text-muted text-[20px]">${ic}</span></div>
                          <p class="font-body-sm text-body-sm text-text-secondary mt-0.5">${d}</p>
                        </div>
                      </label>`).join('')}
                  </div>
                </div>
                <div class="space-y-1.5 pt-space-xs">
                  <label class="block font-title-md text-title-md text-text-primary font-semibold">Tanggal Kunjungan <span class="text-tenun-red font-bold">*</span></label>
                  <div class="relative">
                    <input class="w-full px-space-md py-3 rounded-lg bg-surface-container-low border border-surface-border text-body-md font-medium cursor-not-allowed select-none" readonly type="text" id="visit-date">
                    <div class="absolute inset-y-0 right-0 pr-space-md flex items-center pointer-events-none text-text-muted"><span class="material-symbols-outlined text-[18px]">lock</span></div>
                  </div>
                </div>
                <div class="p-space-md rounded-xl bg-surface-container-low border border-dashed border-surface-border flex items-start gap-space-md">
                  <div class="w-8 h-8 rounded-full bg-status-active-green/10 text-status-active-green flex items-center justify-center shrink-0 mt-0.5"><span class="material-symbols-outlined text-[20px]">shield_person</span></div>
                  <div><p class="font-label-md text-label-md font-bold text-text-primary">Perlindungan Data Pribadi Pengunjung</p><p class="font-caption text-caption text-text-secondary leading-relaxed">Data identitas Anda dilindungi dan dicatat dengan aman dalam basis data arsip Kanwil Kementerian Hukum NTT.</p></div>
                </div>
                <div class="pt-space-md flex flex-col sm:flex-row gap-space-md">
                  <button type="submit" class="flex-1 bg-navy-hero hover:bg-navy-card text-surface-container-lowest font-title-md font-bold py-3.5 px-space-xl rounded-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2" id="btn-submit">
                    <span class="material-symbols-outlined text-[20px]">send</span><span>Kirim Buku Tamu</span>
                  </button>
                  <button type="reset" class="sm:w-32 bg-surface-container-high hover:bg-surface-variant text-text-secondary font-label-md py-3.5 px-space-md rounded-lg flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined text-[18px]">restart_alt</span><span>Reset</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ${footer()}
    </main>`));
    // jam + tanggal WITA
    function upd() {
      const d = witaDate();
      document.getElementById('live-clock').textContent = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      document.getElementById('live-date').textContent = d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
      document.getElementById('visit-date').value = d.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
    setInterval(upd, 1000); upd();
    API.get('getStats').then(s => document.getElementById('form-stat').textContent = s.today).catch(() => {});
    document.getElementById('guest-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      d.nohp = '+62' + d.nohp;
      const btn = document.getElementById('btn-submit');
      btn.disabled = true; btn.lastChild.textContent = 'Mengirim...';
      try {
        const r = await API.post('saveTamu', d);
        location.hash = '#/bukti/' + r.data.id;
      } catch (err) {
        toast(err.message, 'error');
        btn.disabled = false; btn.lastChild.textContent = 'Kirim Buku Tamu';
      }
    });
  };

  App.views.bukti = (el, id) => {
    el.appendChild(h(header('form-buku-tamu') + '<main id="bukti-root" class="w-full pt-20 bg-surface min-h-screen"></main>' + footer()));
    API.get('getTamu', { id }).then(d => {
      document.getElementById('bukti-root').innerHTML = `
      <section class="relative w-full bg-navy-hero text-surface-container-lowest overflow-hidden py-space-xl">
        <div class="relative max-w-5xl mx-auto px-gutter text-center flex flex-col items-center">
          <div class="relative mb-space-md">
            <div class="absolute -inset-3 bg-status-active-green/20 rounded-full blur-xl animate-pulse"></div>
            <div class="relative w-20 h-20 rounded-full bg-status-active-green/15 flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-status-active-green flex items-center justify-center shadow-lg"><span class="material-symbols-outlined text-surface-container-lowest text-[34px]">check</span></div>
            </div>
          </div>
          <div class="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-md py-1 rounded-full mb-space-sm backdrop-blur-sm"><span class="w-2 h-2 rounded-full bg-status-active-green animate-ping"></span><span class="font-label-sm text-label-sm text-tenun-gold-light uppercase tracking-wider">Tiket Terbit Otomatis • Terverifikasi PTSP</span></div>
          <h1 class="font-headline-lg text-headline-lg md:text-display font-extrabold max-w-2xl leading-tight">Kunjungan Anda Berhasil Dicatat!</h1>
          <p class="font-body-md text-body-md text-surface-variant max-w-xl mt-space-xs">Data Anda telah terekam resmi dalam Buku Tamu Digital PTSP Kanwil Kemenkumham NTT.</p>
          <div class="mt-space-lg inline-flex items-center gap-space-md bg-navy-card/90 px-space-lg py-space-sm rounded-xl shadow-xl">
            <div class="text-left"><span class="font-caption text-caption text-text-muted uppercase tracking-wider block">Nomor Registrasi Tamu</span><span class="font-headline-sm text-headline-sm font-extrabold tracking-widest text-tenun-gold" id="ticket">${d.ticket}</span></div>
            <div class="h-8 w-px bg-surface-card/10"></div>
            <button class="flex items-center gap-1.5 bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 px-space-sm py-1.5 rounded-lg font-label-sm transition-all" id="copyBtn"><span class="material-symbols-outlined text-[16px]">content_copy</span><span>Salin</span></button>
          </div>
        </div>
      </section>
      <section class="max-w-5xl mx-auto w-full px-gutter -mt-8 relative z-10 space-y-space-2xl">
        <div class="bg-surface-card rounded-2xl shadow-xl overflow-hidden" id="printable">
          <div class="h-2.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-navy-hero"></div>
          <div class="p-space-lg sm:p-space-xl">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-lg border-b border-surface-border">
              <div class="flex items-center gap-space-md">
                <div class="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center p-1.5 shrink-0"><img class="w-full h-full object-contain" src="${LOGO}"></div>
                <div><span class="font-label-sm text-label-sm text-tenun-red font-bold uppercase tracking-wider block">Kementerian Hukum RI</span><h2 class="font-title-md font-bold text-text-primary">Kantor Wilayah Nusa Tenggara Timur</h2><p class="font-caption text-caption text-text-muted">Jl. W.J. Lalamentik No. 98, Oebufu, Kota Kupang, NTT 85111</p></div>
              </div>
              <div class="flex flex-row md:flex-col items-start md:items-end justify-between gap-1">
                <div class="inline-flex items-center gap-1.5 bg-status-active-green/10 text-status-active-green px-space-md py-1 rounded-full font-label-sm font-bold"><span class="material-symbols-outlined text-[16px]">verified</span><span>Terverifikasi • Menunggu di Lobi</span></div>
                <span class="font-caption text-caption text-text-secondary">Waktu Terbit: ${d.tanggal} ${d.waktu} WITA</span>
              </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl pt-space-xl items-center">
              <div class="lg:col-span-7 space-y-space-md">
                <div><span class="font-label-sm text-label-sm text-text-secondary uppercase tracking-wider block">Nama Lengkap Pengunjung</span><p class="font-headline-sm text-headline-sm font-bold text-text-primary mt-0.5">${d.nama}</p></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                  <div class="bg-surface-container-low p-space-md rounded-xl"><span class="font-caption text-caption text-text-secondary uppercase font-semibold block">Asal Lembaga / Instansi</span><span class="font-title-md font-bold block mt-0.5">${d.instansi}</span></div>
                  <div class="bg-surface-container-low p-space-md rounded-xl"><span class="font-caption text-caption text-text-secondary uppercase font-semibold block">Kontak WhatsApp</span><span class="font-title-md font-bold block mt-0.5">${d.nohp}</span></div>
                </div>
                <div class="bg-surface-container-low p-space-md rounded-xl space-y-1">
                  <div class="flex items-center justify-between"><span class="font-caption text-caption text-text-secondary uppercase font-semibold">Tujuan Kunjungan &amp; Divisi</span><span class="font-caption text-caption text-secondary font-bold">PTSP</span></div>
                  <p class="font-body-md font-semibold text-text-primary">${d.petugas}</p>
                  <p class="font-body-sm text-body-sm text-text-secondary"><strong class="text-text-primary">Keperluan:</strong> ${d.keperluan}</p>
                </div>
              </div>
              <div class="lg:col-span-5 flex flex-col items-center justify-center p-space-lg bg-surface-container rounded-2xl relative overflow-hidden text-center">
                <span class="font-label-sm text-label-sm text-text-primary font-bold uppercase tracking-wider mb-space-sm">Pindai di Meja Resepsionis</span>
                <div class="w-48 h-48 bg-surface-card p-3 rounded-xl shadow-md flex items-center justify-center text-navy-hero text-2xl font-extrabold">QR</div>
                <div class="mt-space-md font-caption text-caption text-text-muted"><span class="text-status-active-green font-semibold">Tervalidasi Sistem Kemenkumham</span></div>
              </div>
            </div>
            <div class="mt-space-lg pt-space-md border-t-2 border-dashed border-surface-border flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <div class="flex items-center gap-space-xs text-text-secondary"><span class="material-symbols-outlined text-[18px] text-tenun-red">info</span><span class="font-body-sm">Tunjukkan tiket digital ini kepada Petugas Keamanan atau Resepsionis.</span></div>
              <span class="font-caption text-caption text-text-muted">Nomor Tiket: <strong>${d.ticket}</strong></span>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-space-md bg-surface-card p-space-md rounded-xl shadow-sm">
          <button class="inline-flex items-center gap-space-xs bg-navy-hero hover:bg-navy-card text-surface-container-lowest font-title-md px-space-lg py-3 rounded-lg shadow-md" onclick="window.print()"><span class="material-symbols-outlined text-[20px]">print</span><span>Cetak Bukti (PDF)</span></button>
          <button class="inline-flex items-center gap-space-xs bg-surface-container-high hover:bg-surface-variant text-text-primary font-title-md px-space-md py-3 rounded-lg" id="waBtn"><span class="material-symbols-outlined text-[20px] text-status-active-green">chat</span><span>Kirim ke WhatsApp</span></button>
          <a href="#/" class="inline-flex items-center gap-space-xs text-secondary hover:text-navy-hero font-label-md py-2"><span class="material-symbols-outlined text-[18px]">arrow_back</span><span>Kembali ke Beranda</span></a>
        </div>
      </section>`;
      document.getElementById('copyBtn').onclick = () => { navigator.clipboard.writeText(d.ticket); document.querySelector('#copyBtn span:last-child').textContent = 'Tersalin!'; };
      document.getElementById('waBtn').onclick = () => {
        const msg = encodeURIComponent(`*BUKTI KUNJUNGAN BUKU TAMU DIGITAL*\n*Kemenkumham Wilayah NTT*\n\nNomor Tiket: *${d.ticket}*\nNama: ${d.nama}\nInstansi: ${d.instansi}\nTujuan: ${d.petugas}\nWaktu: ${d.tanggal} ${d.waktu} WITA\n\n_Harap tunjukkan pesan ini di meja lobi._`);
        window.open('https://api.whatsapp.com/send?text=' + msg, '_blank');
      };
    }).catch(e => { toast(e.message, 'error'); location.hash = '#/'; });
  };

  App.views.login = (el) => {
    el.appendChild(h(header('login') + `
    <main class="w-full pt-20 bg-surface min-h-[calc(100vh-280px)] flex items-center justify-center p-4">
      <div class="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-surface-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        <div class="lg:col-span-5 bg-gradient-to-br from-navy-hero via-slate-900 to-navy-card text-white p-8 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute inset-0 opacity-[0.07]">
            <svg class="w-full h-full" viewBox="0 0 200 200"><pattern id="ntt" height="40" width="40" patternUnits="userSpaceOnUse"><path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="#F59E0B" stroke-width="1.2"></path><circle cx="20" cy="20" fill="#B91C1C" r="2"></circle></pattern><rect fill="url(#ntt)" height="100%" width="100%"></rect></svg>
          </div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-amber-300 font-medium mb-6"><span class="material-symbols-outlined text-[15px]">verified_user</span><span>Sistem Buku Tamu Terpadu</span></div>
            <h2 class="text-2xl font-bold tracking-tight leading-snug">Buku Tamu Digital &amp; Pengawasan Kunjungan</h2>
            <p class="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">Portal tunggal pelayanan buku tamu Kanwil Kementerian Hukum NTT.</p>
          </div>
          <div class="relative z-10 pt-2 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>Server Kanwil NTT Siap</span></div>
        </div>
        <div class="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
          <h1 class="text-2xl font-bold text-slate-900">Masuk ke Portal</h1>
          <p class="text-sm text-slate-500 mt-1">Masukkan kredensial resmi kedinasan.</p>
          <form id="login-form" class="mt-6 space-y-4">
            <div><label class="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">Username</label>
              <input name="username" required placeholder="Username petugas" class="block w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"></div>
            <div><label class="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">PIN / Kata Sandi</label>
              <input name="pin" required type="password" placeholder="PIN 6 digit / sandi" class="block w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"></div>
            <div id="login-err" class="hidden p-3 rounded-lg text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200"></div>
            <button type="submit" class="w-full py-3 px-4 bg-navy-700 hover:bg-navy-card text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[18px]">login</span>Masuk ke Sistem</button>
          </form>
        </div>
      </div>
    </main>` + footer()));
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(e.target));
      try {
        const r = await API.post('login', d);
        API.setToken(r.data.token);
        location.hash = '#/dashboard';
      } catch (err) {
        const el = document.getElementById('login-err');
        el.textContent = err.message; el.classList.remove('hidden');
      }
    });
  };

  function witaDate() {
    const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * 8);
  }
})();
