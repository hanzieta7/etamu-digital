// API helper — SWR + localStorage cache agar UI instan
const API = {
  _token: localStorage.getItem('bt_token') || '',
  setToken(t) { this._token = t; t ? localStorage.setItem('bt_token', t) : localStorage.removeItem('bt_token'); },

  async get(action, params = {}, { ttl = 30 } = {}) {
    const key = 'cache:' + action + ':' + JSON.stringify(params);
    const cached = localStorage.getItem(key);
    if (cached) {
      const { t, data } = JSON.parse(cached);
      if (Date.now() - t < ttl * 1000) { this._refresh(key, action, params, ttl); return data; }
    }
    return this._fetchGet(action, params, key);
  },

  async _refresh(key, action, params, ttl) {
    try { await this._fetchGet(action, params, key); } catch (e) {}
  },

  async _fetchGet(action, params, key) {
    const qs = new URLSearchParams({ action, ...params, token: API._token }).toString();
    const res = await fetch(GAS_URL + '?' + qs);
    const json = await res.json();
    if (key && json.success) localStorage.setItem(key, JSON.stringify({ t: Date.now(), data: json.data }));
    if (!json.success) throw new Error(json.message || 'Gagal memuat');
    return json.data;
  },

  async post(action, data = {}) {
    const res = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, token: API._token, data })
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Gagal');
    // invalidasi cache lokal
    Object.keys(localStorage).filter(k => k.startsWith('cache:')).forEach(k => localStorage.removeItem(k));
    return json;
  }
};
