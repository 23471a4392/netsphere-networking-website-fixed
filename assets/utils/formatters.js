/** NetSphere display formatters. */
export function formatUptime(s) { return String(s||"—"); }
export function formatStatus(status) {
  const map = { Online:"success", Offline:"danger", Maintenance:"warning", up:"success", down:"danger" };
  return map[status] || "default";
}
export function truncate(s, max=40) {
  const t = String(s||"");
  return t.length <= max ? t : t.slice(0, max-1) + "…";
}
