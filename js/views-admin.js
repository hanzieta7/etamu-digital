// Admin views: dashboard, data tamu, petugas — shell sidebar navy mengikuti desain Stitch
(function () {
  function shell(active, inner) {
    const items = [
      ['dashboard', 'Dashboard', 'dashboard', '#/dashboard'],
      ['data-tamu', 'Data Tamu', 'badge', '#/data-tamu'],
      ['petugas', 'Kelola Petugas', 'group', '#/petugas'],
    ];
    return `
    <aside class="fixed left-0 top-0 h-full w-72 bg-navy-hero z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="flex flex-col">
        <div class="p-space-lg flex items-center gap-space-md border-b border-navy-card/60 bg-gradient-to-r from-navy-hero to-primary-container relative overflow-hidden">
          <div class="absolute -right-2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-tenun-gold via-tenun-red to-tenun-gold opacity-90"></div>
          <div class="w-11 h-11 rounded-lg bg-surface-card flex items-center justify-center shadow-md p-space-xs shrink-0"><span class="material-symbols-outlined text-secondary text-[26px]">assured_workload</span></div>
          <div class="flex flex-col min-w-0"><span class="text-surface-card font-label-md text-label-md tracking-wide uppercase truncate">Kementerian Hukum NTT</span><span class="text-on-primary-container font-caption text-caption truncate">Buku Tamu Digital PTSP</span></div>
        </div>
        <div class="px-space-md pt-space-lg pb-space-sm"><span class="text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider px-space-sm">Menu Utama</span></div>
        <nav class="flex flex-col gap-space-xs px-space-md">
          ${items.map(([p, l, ic, href]) => `
            <a href="${href}" class="flex items-center justify-between px-space-md py-space-sm rounded-lg transition-colors group ${active === p ? 'bg-navy-card text-on-primary font-bold shadow-sm relative before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:bg-tenun-gold before:rounded-r' : 'text-primary-fixed-dim hover:bg-navy-card hover:text-on-primary'}">
              <div class="flex items-center gap-space-md"><span class="material-symbols-outlined text-[20px]">${ic}</span><span class="font-label-md text-label-md">${l}</span></div>
            </a>`).join('')}
        </nav>
      </div>
      <div class="flex flex-col p-space-md gap-space-sm bg-gradient-to-t from-black/40 to-transparent">
        <div class="h-0.5 w-full bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary rounded-full opacity-60 mb-space-xs"></div>
        <a href="#/" class="flex items-center gap-space-md px-space-md py-space-sm rounded-lg text-primary-fixed-dim hover:bg-navy-card hover:text-on-primary transition-colors"><span class="material-symbols-outlined text-[20px]">open_in_new</span><span class="font-label-md text-label-md">Kembali ke Portal</span></a>
        <div class="flex items-center justify-between p-space-sm rounded-xl bg-navy-card/80 mt-space-xs">
          <div class="flex items-center gap-space-sm min-w-0">
            <div class="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-on-secondary shrink-0"><span class="material-symbols-outlined text-[20px]">shield_person</span></div>
            <div class="flex flex-col min-w-0"><span class="font-label-md text-label-md text-on-primary truncate">Petugas PTSP</span><span class="font-caption text-caption text-on-primary-container truncate">Kanwil NTT</span></div>
          </div>
          <button id="logout" class="w-8 h-8 rounded-lg flex items-center justify-center text-on-primary-container hover:bg-surface-card/10 hover:text-on-primary transition-colors"><span class="material-symbols-outlined text-[18px]">logout</span></button>
        </div>
      </div>
    </aside>
    <div class="pl-72">
      <header class="fixed top-0 left-72 right-0 h-16 bg-surface-card/90 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div class="h-16 w-full px-space-lg flex items-center justify-between gap-space-lg relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary opacity-80"></div>
          <div class="flex items-center gap-space-lg min-w-0">
            <div class="flex items-center gap-space-xs font-caption text-caption text-text-secondary"><span class="material-symbols-outlined text-[16px] text-tenun-gold">domain</span><span>Kemenkum NTT</span><span class="material-symbols-outlined text-[14px]">chevron_right</span><span class="font-label-md text-label-md text-text-primary truncate">${active === 'dashboard' ? 'Dasbor Monitoring & Statistik' : active === 'data-tamu' ? 'Data Tamu' : 'Kelola Petugas'}</span></div>
            <div class="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low border border-surface-border"><span class="w-2 h-2 rounded-full bg-status-active-green animate-pulse"></span><span class="font-label-sm text-label-sm text-text-primary">WITA</span><span class="font-caption text-caption text-text-secondary clock"></span></div>
          </div>
          <div class="flex items-center gap-space-md shrink-0"><span class="material-symbols-outlined text-text-secondary text-[20px]">notifications</span></div>
        </div>
      </header>
      <main class="relative w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg">${inner}</main>
    </div>`;
  }

  function guard(el, fn) {
    if (!API._token) { location.hash = '#/login'; return; }
    el.appendChild(h('<div id="shell-root"></div>'));
    document.getElementById('shell-root').innerHTML = shell(fn.active, fn.inner());
    document.getElementById('logout').onclick = () => { API.setToken(''); location.hash = '#/'; };
    setInterval(() => document.querySelectorAll('.clock').forEach(c => c.textContent = witaClock()), 1000);
    fn.after && fn.after();
  }

  App.views.dashboard = (el) => guard(el, {
    active: 'dashboard',
    inner: () => `
      <div class="w-full bg-surface-card rounded-xl p-space-lg shadow-sm mb-space-lg relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tenun-red via-tenun-gold to-secondary"></div>
        <h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight">Dasbor Monitoring &amp; Analisis Kunjungan</h1>
        <p class="font-body-md text-body-md text-text-secondary mt-1 max-w-3xl">Pantau arus kedatangan pengunjung PTSP Kanwil Kementerian Hukum NTT secara langsung.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
        ${[['Total Tamu Hari Ini', 's-today', 'group', 'text-secondary', ''], ['Menunggu', 's-wait', 'hourglass_top', 'tenun-gold', ''], ['Total Tamu', 's-total', 'database', 'text-secondary', ''], ['Minggu Ini', 's-week', 'calendar_view_week', 'status-active-green', '']].map(([l, id, ic, c]) => `
          <div class="bg-surface-card rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div class="flex items-start justify-between">
              <div class="flex flex-col"><span class="font-label-sm text-label-sm uppercase tracking-wider text-text-secondary">${l}</span><div class="flex items-baseline gap-2 mt-2"><span class="font-display text-display text-text-primary tracking-tight font-extrabold" id="${id}">—</span></div></div>
              <div class="w-11 h-11 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[24px] text-${c}">${ic}</span></div>
            </div>
          </div>`).join('')}
      </div>
      <div class="bg-surface-card rounded-xl p-space-lg shadow-sm mb-space-lg">
        <h2 class="font-headline-sm text-headline-sm text-text-primary mb-space-md">Kunjungan Harian (14 hari)</h2>
        <div id="chart" class="flex items-end gap-1 h-48"></div>
      </div>
      <div class="bg-surface-card rounded-xl shadow-sm overflow-hidden">
        <div class="p-space-lg font-headline-sm text-headline-sm text-text-primary">Tamu Terbaru</div>
        <div class="overflow-x-auto"><table class="w-full text-body-sm font-body-sm"><thead class="bg-surface-container-low text-label-sm text-label-sm uppercase text-text-secondary"><tr><th class="px-4 py-2.5 text-left">Nama</th><th class="px-4 py-2.5 text-left">Instansi</th><th class="px-4 py-2.5 text-left">Waktu</th><th class="px-4 py-2.5 text-left">Status</th></tr></thead><tbody id="latest"></tbody></table></div>
      </div>`,
    after: () => {
      API.get('getStats').then(s => {
        document.getElementById('s-today').textContent = s.today;
        document.getElementById('s-wait').textContent = s.waiting;
        document.getElementById('s-total').textContent = s.total;
        document.getElementById('s-week').textContent = s.week;
        const max = Math.max(...s.series.map(p => p.count), 1);
        document.getElementById('chart').innerHTML = s.series.map(p => `<div class="flex-1 bg-navy-700/80 rounded-t hover:bg-tenun-gold transition-colors" style="height:${Math.max(4, p.count / max * 100)}%" title="${p.date}: ${p.count}"></div>`).join('');
      });
      API.get('getTamuList', { limit: 8 }).then(rows => {
        document.getElementById('latest').innerHTML = rows.rows.map(r => `
          <tr class="border-t border-surface-border hover:bg-surface-container-low">
            <td class="px-4 py-2.5 font-semibold">${r.nama}</td><td class="px-4 py-2.5">${r.instansi}</td><td class="px-4 py-2.5">${r.waktu}</td>
            <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'Menunggu' ? 'bg-tenun-gold-light text-tenun-gold' : 'bg-status-active-green/10 text-status-active-green'}">${r.status}</span></td>
          </tr>`).join('');
      });
    }
  });

  App.views['data-tamu'] = (el) => guard(el, {
    active: 'data-tamu',
    inner: () => `
      <div class="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
        <div><h1 class="font-headline-lg text-headline-lg text-text-primary">Data Tamu</h1><p class="font-body-md text-body-md text-text-secondary">Cari, filter, dan unduh data kunjungan.</p></div>
        <button id="btn-csv" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-700 hover:bg-navy-card text-white font-label-md text-label-md shadow-sm"><span class="material-symbols-outlined text-[18px] text-tenun-gold">download</span>Unduh CSV</button>
      </div>
      <div class="bg-surface-card rounded-xl p-space-md shadow-sm mb-space-lg flex flex-wrap gap-space-md">
        <input id="q" placeholder="Cari nama / instansi..." class="h-11 px-3 rounded-lg border border-surface-border w-64 focus:ring-2 focus:ring-secondary focus:outline-none">
        <input id="d1" type="date" class="h-11 px-3 rounded-lg border border-surface-border">
        <input id="d2" type="date" class="h-11 px-3 rounded-lg border border-surface-border">
        <select id="st" class="h-11 px-3 rounded-lg border border-surface-border"><option value="">Semua Status</option><option>Menunggu</option><option>Dilayani</option><option>Selesai</option></select>
      </div>
      <div class="bg-surface-card rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto"><table class="w-full text-body-sm font-body-sm"><thead class="bg-surface-container-low text-label-sm uppercase text-text-secondary"><tr>
          <th class="px-4 py-2.5 text-left">Nama</th><th class="px-4 py-2.5 text-left">Instansi</th><th class="px-4 py-2.5 text-left">No HP</th><th class="px-4 py-2.5 text-left">Tanggal</th><th class="px-4 py-2.5 text-left">Petugas</th><th class="px-4 py-2.5 text-left">Status</th>
        </tr></thead><tbody id="rows"></tbody></table></div>
        <div class="p-space-md flex items-center justify-between text-sm border-t border-surface-border">
          <span id="info" class="text-text-secondary"></span>
          <div class="flex gap-2"><button id="prev" class="px-3 py-1.5 rounded-lg border border-surface-border">Prev</button><button id="next" class="px-3 py-1.5 rounded-lg border border-surface-border">Next</button></div>
        </div>
      </div>`,
    after: () => {
      let page = 1, total = 0;
      async function load() {
        const q = document.getElementById('q').value, d1 = document.getElementById('d1').value, d2 = document.getElementById('d2').value, st = document.getElementById('st').value;
        const r = await API.get('getTamuList', { q, d1, d2, st, page, limit: 15 });
        total = r.total;
        document.getElementById('rows').innerHTML = r.rows.map(x => `
          <tr class="border-t border-surface-border hover:bg-surface-container-low">
            <td class="px-4 py-2.5 font-semibold">${x.nama}</td><td class="px-4 py-2.5">${x.instansi}</td><td class="px-4 py-2.5">${x.nohp}</td><td class="px-4 py-2.5">${x.tanggal}</td><td class="px-4 py-2.5">${x.petugas}</td>
            <td class="px-4 py-2.5"><select data-id="${x.id}" class="status-sel text-xs border rounded px-1.5 py-1">${['Menunggu', 'Dilayani', 'Selesai'].map(s => `<option ${s === x.status ? 'selected' : ''}>${s}</option>`).join('')}</select></td>
          </tr>`).join('');
        document.getElementById('info').textContent = `Halaman ${page} · ${total} data`;
      }
      ['q', 'd1', 'd2', 'st'].forEach(id => document.getElementById(id).addEventListener('input', () => { page = 1; load(); }));
      document.getElementById('prev').onclick = () => { if (page > 1) { page--; load(); } };
      document.getElementById('next').onclick = () => { if (page * 15 < total) { page++; load(); } };
      document.addEventListener('change', async (e) => { if (e.target.classList?.contains('status-sel')) { await API.post('updateStatus', { id: e.target.dataset.id, status: e.target.value }); toast('Status diperbarui'); } });
      document.getElementById('btn-csv').onclick = async () => {
        const r = await API.get('getTamuList', { limit: 5000 });
        const head = ['ID', 'Tanggal', 'Waktu', 'Nama', 'Instansi', 'NoHP', 'Keperluan', 'Petugas', 'Status'];
        const csv = [head.join(';'), ...r.rows.map(x => [x.id, x.tanggal, x.waktu, x.nama, x.instansi, x.nohp, (x.keperluan || '').replace(/;/g, ','), x.petugas, x.status].join(';'))].join('\n');
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv' }));
        a.download = 'data-tamu.csv'; a.click();
      };
      load();
    }
  });

  App.views.petugas = (el) => guard(el, {
    active: 'petugas',
    inner: () => `
      <div class="flex items-center justify-between mb-space-lg">
        <div><h1 class="font-headline-lg text-headline-lg text-text-primary">Kelola Petugas</h1><p class="font-body-md text-body-md text-text-secondary">Tambah, edit, dan nonaktifkan akun petugas.</p></div>
        <button id="btn-add" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-700 hover:bg-navy-card text-white font-label-md text-label-md shadow-sm"><span class="material-symbols-outlined text-[18px]">add</span>Tambah Petugas</button>
      </div>
      <div class="bg-surface-card rounded-xl shadow-sm overflow-hidden">
        <div class="overflow-x-auto"><table class="w-full text-body-sm font-body-sm"><thead class="bg-surface-container-low text-label-sm uppercase text-text-secondary"><tr>
          <th class="px-4 py-2.5 text-left">Nama</th><th class="px-4 py-2.5 text-left">Username</th><th class="px-4 py-2.5 text-left">Role</th><th class="px-4 py-2.5 text-left">Status</th><th class="px-4 py-2.5 text-left">Aksi</th>
        </tr></thead><tbody id="prow"></tbody></table></div>
      </div>
      <div id="modal" class="hidden fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <form id="pform" class="bg-surface-card rounded-2xl p-6 w-full max-w-sm space-y-3">
          <h2 class="font-headline-sm text-headline-sm text-text-primary">Tambah Petugas</h2>
          <input type="hidden" name="id">
          <input name="nama" required placeholder="Nama lengkap" class="w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-secondary focus:outline-none">
          <input name="username" required placeholder="Username" class="w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-secondary focus:outline-none">
          <input name="pin" placeholder="PIN (kosong = tidak diubah)" type="password" class="w-full h-11 px-3 rounded-lg border border-surface-border focus:ring-2 focus:ring-secondary focus:outline-none">
          <select name="role" class="w-full h-11 px-3 rounded-lg border border-surface-border"><option value="petugas">Petugas</option><option value="admin">Admin</option></select>
          <div class="flex gap-2 pt-2"><button type="button" id="mcancel" class="flex-1 py-2.5 rounded-lg border border-surface-border font-semibold">Batal</button><button class="flex-1 py-2.5 rounded-lg bg-navy-700 text-white font-semibold">Simpan</button></div>
        </form>
      </div>`,
    after: () => {
      async function load() {
        const rows = await API.get('getPetugas');
        document.getElementById('prow').innerHTML = rows.map(p => `
          <tr class="border-t border-surface-border hover:bg-surface-container-low">
            <td class="px-4 py-2.5 font-semibold">${p.nama}</td><td class="px-4 py-2.5">${p.username}</td>
            <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${p.role === 'admin' ? 'bg-tenun-red-subtle text-tenun-red' : 'bg-navy-700/10 text-navy-700'}">${p.role}</span></td>
            <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${p.aktif ? 'bg-status-active-green/10 text-status-active-green' : 'bg-surface-container-low text-text-secondary'}">${p.aktif ? 'Aktif' : 'Nonaktif'}</span></td>
            <td class="px-4 py-2.5 flex gap-1"><button class="p-edit text-xs px-2 py-1 rounded border border-surface-border" data-p='${JSON.stringify(p)}'>Edit</button><button class="p-toggle text-xs px-2 py-1 rounded border border-surface-border" data-id="${p.id}">${p.aktif ? 'Nonaktifkan' : 'Aktifkan'}</button></td>
          </tr>`).join('');
      }
      const modal = document.getElementById('modal'), form = document.getElementById('pform');
      document.getElementById('btn-add').onclick = () => { form.reset(); form.id.value = ''; modal.classList.remove('hidden'); };
      document.getElementById('mcancel').onclick = () => modal.classList.add('hidden');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const d = Object.fromEntries(new FormData(form));
        await API.post('savePetugas', d);
        modal.classList.add('hidden'); toast('Petugas disimpan'); load();
      });
      document.addEventListener('click', async (e) => {
        if (e.target.classList?.contains('p-edit')) {
          const p = JSON.parse(e.target.dataset.p);
          form.id.value = p.id; form.nama.value = p.nama; form.username.value = p.username; form.role.value = p.role; form.pin.value = '';
          modal.classList.remove('hidden');
        }
        if (e.target.classList?.contains('p-toggle')) {
          await API.post('togglePetugas', { id: e.target.dataset.id });
          toast('Status petugas diubah'); load();
        }
      });
      load();
    }
  });
})();
