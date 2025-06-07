// settings.js
(async () => {
  const r = await fetch("/api/getConfig");
  if (!r.ok) {
    alert("⚠️  Could not fetch config from /api/getConfig");
    return;
  }
  window.APP_SETTINGS = await r.json();
})();
