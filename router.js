// ============================================================
//  CIVICDESK — ROUTER
//  Redirects to maintenance page when MAINTENANCE_MODE is true.
//  Admin bypass: append ?admin=true to your URL.
// ============================================================
(function () {
  const isAdmin = new URLSearchParams(window.location.search).get("admin") === "true";
  const onMaintenancePage = window.location.pathname.includes("maintenance.html");

  if (SITE_CONFIG.MAINTENANCE_MODE && !isAdmin && !onMaintenancePage) {
    window.location.replace("maintenance.html");
  }
})();
