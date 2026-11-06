/* =====================================================
   EDIT THESE TWO LINES WITH YOUR REAL LINKS
   ===================================================== */
const DISCORD_INVITE = "https://discord.gg/YOURCODE";
const CFX_CODE = "xxxxxx";   // the part after cfx.re/join/  (from txAdmin or the FiveM server list)

/* ---------- no need to edit below ---------- */
const connectUrl = "https://cfx.re/join/" + CFX_CODE;

document.querySelectorAll('[data-link="discord"]').forEach(a => {
  a.href = DISCORD_INVITE;
  a.target = "_blank";
  a.rel = "noopener";
});
document.querySelectorAll('[data-link="connect"]').forEach(a => {
  a.href = connectUrl;
  a.target = "_blank";
  a.rel = "noopener";
});
document.getElementById("connect-cmd").textContent = "connect cfx.re/join/" + CFX_CODE;
document.getElementById("year").textContent = new Date().getFullYear();

// Live player count (hidden if the server is offline or the code isn't set yet)
if (CFX_CODE !== "xxxxxx") {
  fetch("https://servers-frontend.fivem.net/api/servers/single/" + CFX_CODE)
    .then(r => (r.ok ? r.json() : Promise.reject()))
    .then(d => {
      const s = document.getElementById("status");
      s.innerHTML = `<span class="live"></span> ${d.Data.clients} / ${d.Data.sv_maxclients} players online`;
      s.hidden = false;
    })
    .catch(() => {});
}
