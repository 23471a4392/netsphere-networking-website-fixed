# NetSphere Networking Management Website

## Included

- Network operations dashboard
- Device inventory with full create/edit/delete
- Interface and port management
- VLAN/subnet management
- Logical topology view
- Alerts and acknowledgement workflow
- Network event logs
- Simulated live monitoring
- Reports
- Workspace settings
- Search/filter controls
- JSON configuration export
- LocalStorage persistence
- Responsive UI
- Discovery/polling simulation
- Modular service units (routing, IPAM, monitoring, security, wireless, …)
- Device / interface / VLAN / alert reference catalogs

## Install

```bash
cd netsphere-networking
npm install   # optional, for tests
```

No runtime npm packages required.

## Build

```bash
npm run build
```

Static frontend — no compile step.

## Run

### Option A — Open file

Open `index.html` in a browser.

### Option B — Local server

```bash
python3 -m http.server 8000
# or
npm start
```

Open http://localhost:8000

### Option C — Docker

```bash
docker build -t netsphere .
docker run -p 8080:80 netsphere
```

## Tests

```bash
npm install
npm test
```

## Important

This is a frontend/demo networking management platform. Monitoring and discovery are simulated in the browser; it does not directly configure real routers, switches, firewalls, or other infrastructure.

For production use, connect the UI to authenticated backend services, SNMP/SSH/API collectors, a database, RBAC, encrypted credential storage, audit logs, alerting, and secure network access controls.

## License

Proprietary — All rights reserved. UNLICENSED.
