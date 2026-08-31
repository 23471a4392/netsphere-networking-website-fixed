# NetSphere Architecture

Browser NMS shell: index.html + app.js + styles.css.

Service modules under assets/modules/ provide extension units for authentication, routing, IPAM, monitoring, and related domains.

Catalogs under assets/data/ supply synthetic devices, interfaces, VLANs, and alerts for demos.

Production deployments must use authenticated collectors (SNMP/SSH/API), encrypted credentials, RBAC, and audit logging — this UI is a frontend prototype only.
