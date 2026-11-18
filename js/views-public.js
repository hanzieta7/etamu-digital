// Views: landing, form, bukti, login
(function () {
  const ICON = (n) => `<span class="material-symbols-outlined">${n}</span>`;

  function headerPublic() {
    return `
    <header class="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div class="h-1 bg-gradient-to-r from-tenun-red via-tenun-gold to-tenun-red"></div>
      <div class="h-20 max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#/" class="flex items-center gap-3 cursor-pointer">
          <div class="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white">${ICON('account_balance')}</div>
          <div class="hidden sm:flex flex-col leading-tight">
            <span class="text-sm font-bold uppercase">Kementerian Hukum RI</span>
            <span class="text-xs font-semibold text-navy-700">Kantor Wilayah Nusa Tenggara Timur</span>
            <span class="text-xs text-text-muted italic">Melayani, Profesional, Terpercaya</span>
          </div>
        </a>
        <nav class="flex items-center gap-4">
          <a href="#/" class="hidden md:inline text-sm font-semibold text-text-secondary hover:text-navy-700">Beranda</a>
          <a href="#/form" class="hidden md:inline text-sm font-semibold text-text-secondary hover:text-navy-700">Form Buku Tamu</a>
          <a href="#/login" class="px-4 py-2 rounded-lg bg-navy-700 text-white text-sm font-semibold hover:bg-navy-card">Login Petugas</a>
        </nav>
      </div>
    </header>`;
  }

  App.views.landing = (el) => {
    el.appendChild(h(headerPublic() + `
    <main class="pt-20">
      <section class="bg-navy-hero text-white pb-16 pt-8 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 bg-navy-card/80 px-3 py-1.5 rounded-full">
              <span class="w-2 h-2 rounded-full bg-tenun-gold animate-pulse"></span>
              <span class="text-xs font-semibold uppercase tracking-wider text-tenun-gold-light">Sistem Registrasi Resmi</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">Selamat Datang di <span class="text-tenun-gold">Buku Tamu</span> Digital</h1>
            <p class="text-lg text-white/80">Kantor Wilayah Kementerian Hukum dan HAM Nusa Tenggara Timur</p>
            <p class="text-sm text-white/60 max-w-xl">Isi formulir kedatangan secara mandiri melalui ponsel atau anjungan. Cepat, aman, transparan.</p>
            <div class="flex flex-wrap gap-3">
              <a href="#/form" class="inline-flex items-center gap-2 bg-tenun-red hover:bg-red-800 text-white px-5 py-3 rounded-lg font-semibold shadow-md">${ICON('edit_square')} Isi Buku Tamu Sekarang</a>
              <a href="#/login" class="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-3 rounded-lg font-semibold">${ICON('login')} Login Petugas</a>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="bg-navy-card rounded-2xl p-6 shadow-2xl">
              <div class="text-tenun-gold font-semibold uppercase text-sm">Kantor Wilayah NTT</div>
              <div class="text-xl font-bold mt-1">Pusat Pelayanan Administrasi Hukum Terpadu</div>
              <div class="text-sm text-white/60 mt-2">Jl. W.J. Lalamentik No. 98, Kupang</div>
              <div class="mt-4 inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-sm">
                <span class="w-2 h-2 rounded-full bg-green animate-pulse"></span>
                <span id="clock" class="tabular-nums font-semibold"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white rounded-2xl shadow-xl p-4">
          <div class="p-3"><div class="text-2xl font-extrabold" id="stat-today">—</div><div class="text-xs text-text-secondary uppercase font-semibold">Tamu Hari Ini</div></div>
          <div class="p-3"><div class="text-2xl font-extrabold" id="stat-total">—</div><div class="text-xs text-text-secondary uppercase font-semibold">Total Tamu</div></div>
          <div class="p-3"><div class="text-2xl font-extrabold text-green">98.8%</div><div class="text-xs text-text-secondary uppercase font-semibold">Indeks Kepuasan</div></div>
          <div class="p-3"><div class="text-2xl font-extrabold text-tenun-red">100%</div><div class="text-xs text-text-secondary uppercase font-semibold">Bebas Pungli WBK</div></div>
        </div>
      </section>
      <footer class="mt-16 bg-navy-hero text-white py-10">
        <div class="max-w-7xl mx-auto px-4 text-sm text-white/70">© 2025 Kanwil Kementerian Hukum NTT · Melayani, Profesional, Terpercaya</div>
      </footer>
    </main>`));
    setInterval(() => { const c = document.getElementById('clock'); if (c) c.textContent = witaClock(); }, 1000);
    API.get('getStats').then(s => {
      document.getElementById('stat-today').textContent = s.today;
      document.getElementById('stat-total').textContent = s.total;
    }).catch(() => {});
  };

  App.views.form = (el) => {
    el.appendChild(h(headerPublic() + `
    <main class="pt-24 pb-16 bg-surface min-h-screen">
      <div class="max-w-xl mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="h-1.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-navy-700"></div>
          <div class="p-6 sm:p-8">
            <h1 class="text-2xl font-bold">Form Pengisian Tamu</h1>
            <p class="text-sm text-text-secondary mt-1">Lengkapi data kunjungan Anda.</p>
            <form id="guest-form" class="mt-6 space-y-4">
              <div><label class="text-sm font-semibold">Nama Lengkap *</label>
                <input name="nama" required class="mt-1 w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none"></div>
              <div><label class="text-sm font-semibold">Instansi / Asal *</label>
                <input name="instansi" required class="mt-1 w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none"></div>
              <div><label class="text-sm font-semibold">No. HP / WhatsApp *</label>
                <input name="nohp" required pattern="[0-9+\\- ]{9,16}" class="mt-1 w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none"></div>
              <div><label class="text-sm font-semibold">Keperluan *</label>
                <textarea name="keperluan" required rows="3" class="mt-1 w-full px-3 py-2 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none"></textarea></div>
              <div><label class="text-sm font-semibold">Petugas / Divisi Tujuan *</label>
                <select name="petugas" required class="mt-1 w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none">
                  <option value="">— Pilih —</option>
                  <option>Pelayanan Hukum & HAM</option><option>Keimigrasian</option>
                  <option>Pemasyarakatan</option><option>Administrasi Umum</option><option>Lainnya</option>
                </select></div>
              <button class="w-full py-3 rounded-lg bg-navy-700 hover:bg-navy-card text-white font-semibold flex items-center justify-center gap-2">
                ${ICON('send')} Kirim Pendaftaran
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>`));
    document.getElementById('guest-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const btn = e.target.querySelector('button');
      btn.disabled = true; btn.textContent = 'Mengirim...';
      try {
        const r = await API.post('saveTamu', Object.fromEntries(fd));
        location.hash = '#/bukti/' + r.data.id;
      } catch (err) {
        toast(err.message, 'error');
        btn.disabled = false; btn.textContent = 'Kirim Pendaftaran';
      }
    });
  };

  App.views.bukti = (el, id) => {
    API.get('getTamu', { id }).then(d => {
      el.appendChild(h(headerPublic() + `
      <main class="pt-24 pb-16 bg-surface min-h-screen flex items-start justify-center">
        <div class="max-w-md w-full mx-4 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="h-1.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-navy-700"></div>
          <div class="p-8 text-center">
            <div class="w-14 h-14 mx-auto rounded-full bg-green/10 text-green flex items-center justify-center">${ICON('check_circle')}</div>
            <h1 class="mt-3 text-2xl font-bold">Kunjungan Tercatat</h1>
            <div class="mt-6 text-left border rounded-xl divide-y">
              ${[['ID', d.id], ['Nama', d.nama], ['Instansi', d.instansi], ['Tanggal', d.tanggal], ['Waktu', d.waktu], ['Petugas Tujuan', d.petugas]].map(([k, v]) => `<div class="flex px-4 py-2.5 text-sm"><span class="w-32 text-text-secondary">${k}</span><span class="font-semibold">${v}</span></div>`).join('')}
            </div>
            <div class="mt-6 flex gap-3 justify-center">
              <button onclick="window.print()" class="px-4 py-2.5 rounded-lg bg-navy-700 text-white font-semibold">${ICON('print')} Cetak Bukti</button>
              <a href="#/" class="px-4 py-2.5 rounded-lg border border-surface-border font-semibold">Kembali</a>
            </div>
          </div>
        </div>
      </main>`));
    }).catch(e => { toast(e.message, 'error'); location.hash = '#/'; });
  };

  App.views.login = (el) => {
    el.appendChild(h(headerPublic() + `
    <main class="pt-24 pb-16 bg-surface min-h-screen flex items-start justify-center">
      <div class="max-w-sm w-full mx-4 bg-white rounded-2xl shadow-xl p-8">
        <h1 class="text-2xl font-bold">Login Petugas</h1>
        <p class="text-sm text-text-secondary mt-1">Masukkan username dan PIN.</p>
        <form id="login-form" class="mt-6 space-y-4">
          <input name="username" required placeholder="Username" class="w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none">
          <input name="pin" required type="password" placeholder="PIN / Kata Sandi" class="w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-navy-700 focus:outline-none">
          <button class="w-full py-3 rounded-lg bg-navy-700 hover:bg-navy-card text-white font-semibold">Masuk</button>
        </form>
        <div id="login-err" class="hidden mt-3 text-sm text-tenun-red font-semibold"></div>
      </div>
    </main>`));
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = Object.fromEntries(new FormData(e.target));
      try {
        const r = await API.post('login', fd);
        API.setToken(r.data.token);
        location.hash = '#/dashboard';
      } catch (err) {
        const d = document.getElementById('login-err');
        d.textContent = err.message; d.classList.remove('hidden');
      }
    });
  };
})();
