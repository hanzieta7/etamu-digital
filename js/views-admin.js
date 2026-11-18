// Admin views: dashboard, data tamu, petugas
(function () {
  const ICON = (n) => `<span class="material-symbols-outlined text-[20px]">${n}</span>`;

  function shell(active, inner) {
    const items = [
      ['dashboard', 'Dashboard', 'dashboard'],
      ['data-tamu', 'Data Tamu', 'badge'],
      ['petugas', 'Kelola Petugas', 'group'],
    ];
    return `
    <div class="flex min-h-screen">
      <aside class="w-64 bg-navy-hero text-white flex flex-col fixed inset-y-0">
        <div class="p-5 border-b border-white/10">
          <div class="font-bold">Kementerian Hukum NTT</div>
          <div class="text-xs text-white/60">Buku Tamu Digital PTSP</div>
        </div>
        <nav class="flex-1 p-3 space-y-1">
          ${items.map(([r, l, ic]) => `
            <a href="#/${r}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm ${active === r ? 'bg-navy-card text-white border-l-4 border-tenun-gold' : 'text-white/70 hover:bg-white/5'}">
              ${ICON(ic)} ${l}
            </a>`).join('')}
        </nav>
        <div class="p-3 border-t border-white/10">
          <button onclick="API.setToken('');location.hash='#/'" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5">${ICON('logout')} Keluar</button>
        </div>
      </aside>
      <div class="flex-1 ml-64 bg-surface">
        <header class="bg-white border-b border-surface-border px-6 h-16 flex items-center justify-between sticky top-0 z-40">
          <div class="text-sm text-text-secondary">Kanwil Kemenkumham NTT</div>
          <div class="inline-flex items-center gap-2 text-sm font-semibold"><span class="w-2 h-2 rounded-full bg-green animate-pulse"></span><span class="clock tabular-nums"></span></div>
        </header>
        <main class="p-6">${inner}</main>
      </div>
    </div>`;
  }

  function guard(el, fn) {
    if (!API._token) { location.hash = '#/login'; return; }
    fn(el);
    setInterval(() => document.querySelectorAll('.clock').forEach(c => c.textContent = witaClock()), 1000);
  }

  App.views.dashboard = (el) => guard(el, () => {
    el.appendChild(h(shell('dashboard', `
      <h1 class="text-2xl font-bold">Dasbor Monitoring Kunjungan</h1>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        ${[['Tamu Hari Ini', 's-today'], ['Menunggu', 's-wait'], ['Total Tamu', 's-total'], ['Minggu Ini', 's-week']].map(([l, id]) => `
          <div class="bg-white rounded-xl p-5 shadow-sm border border-surface-border">
            <div class="text-xs uppercase font-semibold text-text-secondary">${l}</div>
            <div class="text-3xl font-extrabold mt-2" id="${id}">—</div>
          </div>`).join('')}
      </div>
      <div class="bg-white rounded-xl p-5 shadow-sm border border-surface-border mt-6">
        <div class="font-bold mb-3">Kunjungan Harian (14 hari)</div>
        <div id="chart" class="flex items-end gap-1 h-40"></div>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-surface-border mt-6 overflow-hidden">
        <div class="p-4 font-bold">Tamu Terbaru</div>
        <table class="w-full text-sm"><thead class="bg-surface-container-low text-xs uppercase text-text-secondary"><tr>
          <th class="px-4 py-2 text-left">Nama</th><th class="px-4 py-2 text-left">Instansi</th><th class="px-4 py-2 text-left">Waktu</th><th class="px-4 py-2 text-left">Status</th>
        </tr></thead><tbody id="latest"></tbody></table>
      </div>`)));
    API.get('getStats').then(s => {
      document.getElementById('s-today').textContent = s.today;
      document.getElementById('s-wait').textContent = s.waiting;
      document.getElementById('s-total').textContent = s.total;
      document.getElementById('s-week').textContent = s.week;
      const max = Math.max(...s.series.map(p => p.count), 1);
      document.getElementById('chart').innerHTML = s.series.map(p =>
        `<div class="flex-1 bg-navy-700/80 rounded-t hover:bg-tenun-gold transition-colors" style="height:${Math.max(4, p.count / max * 100)}%" title="${p.date}: ${p.count}"></div>`).join('');
    });
    API.get('getTamuList', { limit: 8 }).then(rows => {
      document.getElementById('latest').innerHTML = rows.map(r => `
        <tr class="border-t border-surface-border hover:bg-surface-container-low">
          <td class="px-4 py-2.5 font-semibold">${r.nama}</td><td class="px-4 py-2.5">${r.instansi}</td>
          <td class="px-4 py-2.5">${r.waktu}</td>
          <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${r.status === 'Menunggu' ? 'bg-tenun-gold-light text-tenun-gold' : 'bg-green/10 text-green'}">${r.status}</span></td>
        </tr>`).join('');
    });
  });

  App.views['data-tamu'] = (el) => guard(el, () => {
    el.appendChild(h(shell('data-tamu', `
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h1 class="text-2xl font-bold">Data Tamu</h1>
        <div class="flex gap-2">
          <button id="btn-csv" class="px-4 py-2 rounded-lg border border-surface-border bg-white text-sm font-semibold">${ICON('download')} Unduh CSV</button>
        </div>
      </div>
      <div class="flex gap-2 mt-4">
        <input id="q" placeholder="Cari nama / instansi..." class="h-11 px-3 rounded-lg border border-surface-border w-64 focus:ring-2 focus:ring-navy-700 focus:outline-none">
        <input id="d1" type="date" class="h-11 px-3 rounded-lg border border-surface-border">
        <input id="d2" type="date" class="h-11 px-3 rounded-lg border border-surface-border">
        <select id="st" class="h-11 px-3 rounded-lg border border-surface-border"><option value="">Semua Status</option><option>Menunggu</option><option>Dilayani</option><option>Selesai</option></select>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-surface-border mt-4 overflow-x-auto">
        <table class="w-full text-sm"><thead class="bg-surface-container-low text-xs uppercase text-text-secondary"><tr>
          <th class="px-4 py-2.5 text-left">ID</th><th class="px-4 py-2.5 text-left">Nama</th><th class="px-4 py-2.5 text-left">Instansi</th>
          <th class="px-4 py-2.5 text-left">No HP</th><th class="px-4 py-2.5 text-left">Tanggal</th><th class="px-4 py-2.5 text-left">Petugas</th>
          <th class="px-4 py-2.5 text-left">Status</th><th class="px-4 py-2.5 text-left">Aksi</th>
        </tr></thead><tbody id="rows"></tbody></table>
        <div class="p-3 flex items-center justify-between text-sm">
          <span id="info" class="text-text-secondary"></span>
          <div class="flex gap-2"><button id="prev" class="px-3 py-1.5 rounded border">Prev</button><button id="next" class="px-3 py-1.5 rounded border">Next</button></div>
        </div>
      </div>`)));
    let page = 1, total = 0;
    async function load() {
      const q = document.getElementById('q').value, d1 = document.getElementById('d1').value,
            d2 = document.getElementById('d2').value, st = document.getElementById('st').value;
      const r = await API.get('getTamuList', { q, d1, d2, st, page, limit: 15 });
      total = r.total;
      document.getElementById('rows').innerHTML = r.rows.map(x => `
        <tr class="border-t border-surface-border hover:bg-surface-container-low">
          <td class="px-4 py-2.5 font-mono text-xs">${x.id.slice(0, 8)}</td>
          <td class="px-4 py-2.5 font-semibold">${x.nama}</td><td class="px-4 py-2.5">${x.instansi}</td>
          <td class="px-4 py-2.5">${x.nohp}</td><td class="px-4 py-2.5">${x.tanggal}</td><td class="px-4 py-2.5">${x.petugas}</td>
          <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${x.status === 'Menunggu' ? 'bg-tenun-gold-light text-tenun-gold' : x.status === 'Selesai' ? 'bg-green/10 text-green' : 'bg-navy-700/10 text-navy-700'}">${x.status}</span></td>
          <td class="px-4 py-2.5">
            <select data-id="${x.id}" class="status-sel text-xs border rounded px-1.5 py-1">
              ${['Menunggu', 'Dilayani', 'Selesai'].map(s => `<option ${s === x.status ? 'selected' : ''}>${s}</option>`).join('')}
            </select>
          </td>
        </tr>`).join('');
      document.getElementById('info').textContent = `Halaman ${page} · ${total} data`;
    }
    ['q', 'd1', 'd2', 'st'].forEach(id => document.getElementById(id).addEventListener('input', () => { page = 1; load(); }));
    document.getElementById('prev').onclick = () => { if (page > 1) { page--; load(); } };
    document.getElementById('next').onclick = () => { if (page * 15 < total) { page++; load(); } };
    document.addEventListener('change', async (e) => {
      if (e.target.classList?.contains('status-sel')) {
        await API.post('updateStatus', { id: e.target.dataset.id, status: e.target.value });
        toast('Status diperbarui');
      }
    });
    document.getElementById('btn-csv').onclick = async () => {
      const r = await API.get('getTamuList', { limit: 5000 });
      const head = ['ID', 'Tanggal', 'Waktu', 'Nama', 'Instansi', 'NoHP', 'Keperluan', 'Petugas', 'Status'];
      const csv = [head.join(';'), ...r.rows.map(x => [x.id, x.tanggal, x.waktu, x.nama, x.instansi, x.nohp, (x.keperluan || '').replace(/;/g, ','), x.petugas, x.status].join(';'))].join('\n');
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob(['\ufeff' + csv], { type: 'text/csv' }));
      a.download = 'data-tamu.csv'; a.click();
    };
    load();
  });

  App.views.petugas = (el) => guard(el, () => {
    el.appendChild(h(shell('petugas', `
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Kelola Petugas</h1>
        <button id="btn-add" class="px-4 py-2 rounded-lg bg-navy-700 text-white text-sm font-semibold">+ Tambah Petugas</button>
      </div>
      <div class="bg-white rounded-xl shadow-sm border border-surface-border mt-4 overflow-x-auto">
        <table class="w-full text-sm"><thead class="bg-surface-container-low text-xs uppercase text-text-secondary"><tr>
          <th class="px-4 py-2.5 text-left">Nama</th><th class="px-4 py-2.5 text-left">Username</th><th class="px-4 py-2.5 text-left">Role</th><th class="px-4 py-2.5 text-left">Status</th><th class="px-4 py-2.5 text-left">Aksi</th>
        </tr></thead><tbody id="prow"></tbody></table>
      </div>
      <div id="modal" class="hidden fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
        <form id="pform" class="bg-white rounded-2xl p-6 w-full max-w-sm space-y-3">
          <h2 class="font-bold text-lg" id="mtitle">Tambah Petugas</h2>
          <input type="hidden" name="id">
          <input name="nama" required placeholder="Nama lengkap" class="w-full h-11 px-3 rounded-lg border">
          <input name="username" required placeholder="Username" class="w-full h-11 px-3 rounded-lg border">
          <input name="pin" placeholder="PIN (kosong = tidak diubah)" type="password" class="w-full h-11 px-3 rounded-lg border">
          <select name="role" class="w-full h-11 px-3 rounded-lg border"><option value="petugas">Petugas</option><option value="admin">Admin</option></select>
          <div class="flex gap-2 pt-2">
            <button type="button" id="mcancel" class="flex-1 py-2.5 rounded-lg border font-semibold">Batal</button>
            <button class="flex-1 py-2.5 rounded-lg bg-navy-700 text-white font-semibold">Simpan</button>
          </div>
        </form>
      </div>`)));
    async function load() {
      const rows = await API.get('getPetugas');
      document.getElementById('prow').innerHTML = rows.map(p => `
        <tr class="border-t border-surface-border hover:bg-surface-container-low">
          <td class="px-4 py-2.5 font-semibold">${p.nama}</td><td class="px-4 py-2.5">${p.username}</td>
          <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${p.role === 'admin' ? 'bg-tenun-red-subtle text-tenun-red' : 'bg-navy-700/10 text-navy-700'}">${p.role}</span></td>
          <td class="px-4 py-2.5"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${p.aktif ? 'bg-green/10 text-green' : 'bg-surface-container-low text-text-secondary'}">${p.aktif ? 'Aktif' : 'Nonaktif'}</span></td>
          <td class="px-4 py-2.5 flex gap-1">
            <button class="p-edit text-xs px-2 py-1 rounded border" data-p='${JSON.stringify(p)}'>Edit</button>
            <button class="p-toggle text-xs px-2 py-1 rounded border" data-id="${p.id}">${p.aktif ? 'Nonaktifkan' : 'Aktifkan'}</button>
          </td>
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
  });
})();
