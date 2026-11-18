// SPA router + views
const App = {
  views: {}, el: document.getElementById('app'),
  go(route) { location.hash = route; },
  render() {
    const [route, ...rest] = (location.hash.slice(2) || '').split('/');
    const r = route || (API._token ? 'dashboard' : 'landing');
    const view = this.views[r] || this.views.landing;
    this.el.innerHTML = '';
    view(this.el, rest.join('/'));
    window.scrollTo(0, 0);
  }
};
window.addEventListener('hashchange', () => App.render());

function h(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content; }
function toast(msg, type = 'success') {
  const colors = { success: 'bg-green', error: 'bg-tenun-red', info: 'bg-navy-700' };
  const t = document.createElement('div');
  t.className = `fixed bottom-4 right-4 z-50 ${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg text-sm font-semibold`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
function witaClock() {
  const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
  const d = new Date(utc + 3600000 * 8);
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WITA';
}
