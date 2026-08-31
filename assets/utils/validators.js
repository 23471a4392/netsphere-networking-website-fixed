/** NetSphere form validators. */
export function required(v) { return v != null && String(v).trim().length > 0; }
export function isIp(v) {
  return /^(?:\d{1,3}\.){3}\d{1,3}$/.test(String(v||""));
}
export function isMac(v) {
  return /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(String(v||""));
}
export function validateDevice(p) {
  const e = {};
  if (!required(p.name)) e.name = "Name is required";
  if (p.ip && !isIp(p.ip)) e.ip = "Invalid IP address";
  if (p.mac && !isMac(p.mac)) e.mac = "Invalid MAC address";
  return e;
}
export function validateVlan(p) {
  const e = {};
  if (p.vlanId == null || p.vlanId < 1 || p.vlanId > 4094) e.vlanId = "VLAN ID must be 1-4094";
  if (!required(p.name)) e.name = "Name is required";
  return e;
}
