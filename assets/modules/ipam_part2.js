/**
 * NetSphere ipam service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'ipam';

// ipam operational unit 1251
export function ipam_unit_1251(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1251,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1252
export function ipam_unit_1252(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1252,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1253
export function ipam_unit_1253(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1253,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1254
export function ipam_unit_1254(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1254,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1255
export function ipam_unit_1255(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1255,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1256
export function ipam_unit_1256(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1256,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1257
export function ipam_unit_1257(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1257,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1258
export function ipam_unit_1258(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1258,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1259
export function ipam_unit_1259(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1259,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1260
export function ipam_unit_1260(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1260,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1261
export function ipam_unit_1261(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1261,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1262
export function ipam_unit_1262(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1262,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1263
export function ipam_unit_1263(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1263,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1264
export function ipam_unit_1264(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1264,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1265
export function ipam_unit_1265(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1265,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1266
export function ipam_unit_1266(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1266,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1267
export function ipam_unit_1267(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1267,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1268
export function ipam_unit_1268(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1268,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1269
export function ipam_unit_1269(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1269,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1270
export function ipam_unit_1270(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1270,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1271
export function ipam_unit_1271(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1271,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1272
export function ipam_unit_1272(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1272,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1273
export function ipam_unit_1273(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1273,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1274
export function ipam_unit_1274(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1274,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1275
export function ipam_unit_1275(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1275,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1276
export function ipam_unit_1276(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1276,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1277
export function ipam_unit_1277(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1277,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1278
export function ipam_unit_1278(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1278,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1279
export function ipam_unit_1279(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1279,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1280
export function ipam_unit_1280(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1280,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1281
export function ipam_unit_1281(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1281,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1282
export function ipam_unit_1282(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1282,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1283
export function ipam_unit_1283(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1283,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1284
export function ipam_unit_1284(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1284,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1285
export function ipam_unit_1285(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1285,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1286
export function ipam_unit_1286(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1286,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1287
export function ipam_unit_1287(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1287,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1288
export function ipam_unit_1288(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1288,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1289
export function ipam_unit_1289(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1289,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1290
export function ipam_unit_1290(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1290,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1291
export function ipam_unit_1291(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1291,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1292
export function ipam_unit_1292(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1292,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1293
export function ipam_unit_1293(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1293,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1294
export function ipam_unit_1294(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1294,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1295
export function ipam_unit_1295(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1295,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1296
export function ipam_unit_1296(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1296,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1297
export function ipam_unit_1297(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1297,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1298
export function ipam_unit_1298(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1298,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1299
export function ipam_unit_1299(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1299,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1300
export function ipam_unit_1300(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1300,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1301
export function ipam_unit_1301(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1301,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1302
export function ipam_unit_1302(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1302,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1303
export function ipam_unit_1303(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1303,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1304
export function ipam_unit_1304(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1304,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1305
export function ipam_unit_1305(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1305,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1306
export function ipam_unit_1306(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1306,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1307
export function ipam_unit_1307(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1307,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1308
export function ipam_unit_1308(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1308,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1309
export function ipam_unit_1309(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1309,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1310
export function ipam_unit_1310(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1310,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1311
export function ipam_unit_1311(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1311,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1312
export function ipam_unit_1312(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1312,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1313
export function ipam_unit_1313(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1313,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1314
export function ipam_unit_1314(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1314,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1315
export function ipam_unit_1315(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1315,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1316
export function ipam_unit_1316(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1316,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1317
export function ipam_unit_1317(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1317,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1318
export function ipam_unit_1318(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1318,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1319
export function ipam_unit_1319(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1319,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1320
export function ipam_unit_1320(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1320,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1321
export function ipam_unit_1321(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1321,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1322
export function ipam_unit_1322(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1322,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1323
export function ipam_unit_1323(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1323,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1324
export function ipam_unit_1324(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1324,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1325
export function ipam_unit_1325(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1325,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1326
export function ipam_unit_1326(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1326,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1327
export function ipam_unit_1327(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1327,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1328
export function ipam_unit_1328(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1328,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1329
export function ipam_unit_1329(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1329,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1330
export function ipam_unit_1330(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1330,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1331
export function ipam_unit_1331(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1331,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1332
export function ipam_unit_1332(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1332,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1333
export function ipam_unit_1333(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1333,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1334
export function ipam_unit_1334(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1334,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1335
export function ipam_unit_1335(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1335,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1336
export function ipam_unit_1336(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1336,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1337
export function ipam_unit_1337(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1337,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1338
export function ipam_unit_1338(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1338,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1339
export function ipam_unit_1339(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1339,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1340
export function ipam_unit_1340(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1340,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1341
export function ipam_unit_1341(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1341,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1342
export function ipam_unit_1342(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1342,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1343
export function ipam_unit_1343(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1343,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1344
export function ipam_unit_1344(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1344,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1345
export function ipam_unit_1345(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1345,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1346
export function ipam_unit_1346(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1346,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1347
export function ipam_unit_1347(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1347,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1348
export function ipam_unit_1348(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1348,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1349
export function ipam_unit_1349(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1349,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1350
export function ipam_unit_1350(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1350,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1351
export function ipam_unit_1351(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1351,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1352
export function ipam_unit_1352(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1352,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1353
export function ipam_unit_1353(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1353,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1354
export function ipam_unit_1354(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1354,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1355
export function ipam_unit_1355(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1355,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1356
export function ipam_unit_1356(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1356,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1357
export function ipam_unit_1357(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1357,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1358
export function ipam_unit_1358(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1358,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1359
export function ipam_unit_1359(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1359,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1360
export function ipam_unit_1360(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1360,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1361
export function ipam_unit_1361(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1361,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1362
export function ipam_unit_1362(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1362,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1363
export function ipam_unit_1363(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1363,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1364
export function ipam_unit_1364(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1364,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1365
export function ipam_unit_1365(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1365,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1366
export function ipam_unit_1366(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1366,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1367
export function ipam_unit_1367(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1367,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1368
export function ipam_unit_1368(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1368,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1369
export function ipam_unit_1369(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1369,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1370
export function ipam_unit_1370(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1370,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1371
export function ipam_unit_1371(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1371,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1372
export function ipam_unit_1372(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1372,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1373
export function ipam_unit_1373(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1373,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1374
export function ipam_unit_1374(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1374,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1375
export function ipam_unit_1375(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1375,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1376
export function ipam_unit_1376(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1376,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1377
export function ipam_unit_1377(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1377,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1378
export function ipam_unit_1378(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1378,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1379
export function ipam_unit_1379(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1379,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1380
export function ipam_unit_1380(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1380,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1381
export function ipam_unit_1381(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1381,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1382
export function ipam_unit_1382(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1382,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1383
export function ipam_unit_1383(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1383,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1384
export function ipam_unit_1384(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1384,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1385
export function ipam_unit_1385(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1385,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1386
export function ipam_unit_1386(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1386,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1387
export function ipam_unit_1387(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1387,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1388
export function ipam_unit_1388(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1388,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1389
export function ipam_unit_1389(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1389,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1390
export function ipam_unit_1390(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1390,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1391
export function ipam_unit_1391(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1391,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1392
export function ipam_unit_1392(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1392,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1393
export function ipam_unit_1393(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1393,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1394
export function ipam_unit_1394(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1394,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1395
export function ipam_unit_1395(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1395,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1396
export function ipam_unit_1396(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1396,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1397
export function ipam_unit_1397(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1397,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1398
export function ipam_unit_1398(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1398,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1399
export function ipam_unit_1399(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1399,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1400
export function ipam_unit_1400(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1400,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1401
export function ipam_unit_1401(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1401,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1402
export function ipam_unit_1402(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1402,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1403
export function ipam_unit_1403(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1403,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1404
export function ipam_unit_1404(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1404,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1405
export function ipam_unit_1405(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1405,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1406
export function ipam_unit_1406(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1406,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1407
export function ipam_unit_1407(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1407,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1408
export function ipam_unit_1408(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1408,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1409
export function ipam_unit_1409(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1409,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1410
export function ipam_unit_1410(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1410,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1411
export function ipam_unit_1411(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1411,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1412
export function ipam_unit_1412(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1412,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1413
export function ipam_unit_1413(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1413,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1414
export function ipam_unit_1414(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1414,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1415
export function ipam_unit_1415(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1415,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1416
export function ipam_unit_1416(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1416,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1417
export function ipam_unit_1417(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1417,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1418
export function ipam_unit_1418(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1418,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1419
export function ipam_unit_1419(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1419,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1420
export function ipam_unit_1420(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1420,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1421
export function ipam_unit_1421(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1421,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1422
export function ipam_unit_1422(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1422,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1423
export function ipam_unit_1423(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1423,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1424
export function ipam_unit_1424(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1424,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1425
export function ipam_unit_1425(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1425,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1426
export function ipam_unit_1426(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1426,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1427
export function ipam_unit_1427(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1427,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1428
export function ipam_unit_1428(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1428,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1429
export function ipam_unit_1429(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1429,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1430
export function ipam_unit_1430(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1430,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1431
export function ipam_unit_1431(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1431,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1432
export function ipam_unit_1432(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1432,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1433
export function ipam_unit_1433(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1433,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1434
export function ipam_unit_1434(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1434,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1435
export function ipam_unit_1435(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1435,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1436
export function ipam_unit_1436(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1436,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1437
export function ipam_unit_1437(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1437,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1438
export function ipam_unit_1438(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1438,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1439
export function ipam_unit_1439(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1439,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1440
export function ipam_unit_1440(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1440,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1441
export function ipam_unit_1441(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1441,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1442
export function ipam_unit_1442(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1442,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1443
export function ipam_unit_1443(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1443,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1444
export function ipam_unit_1444(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1444,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1445
export function ipam_unit_1445(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1445,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1446
export function ipam_unit_1446(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1446,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1447
export function ipam_unit_1447(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1447,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1448
export function ipam_unit_1448(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1448,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1449
export function ipam_unit_1449(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1449,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1450
export function ipam_unit_1450(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1450,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1451
export function ipam_unit_1451(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1451,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1452
export function ipam_unit_1452(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1452,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1453
export function ipam_unit_1453(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1453,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1454
export function ipam_unit_1454(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1454,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1455
export function ipam_unit_1455(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1455,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1456
export function ipam_unit_1456(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1456,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1457
export function ipam_unit_1457(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1457,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1458
export function ipam_unit_1458(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1458,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1459
export function ipam_unit_1459(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1459,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1460
export function ipam_unit_1460(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1460,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1461
export function ipam_unit_1461(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1461,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1462
export function ipam_unit_1462(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1462,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1463
export function ipam_unit_1463(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1463,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1464
export function ipam_unit_1464(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1464,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1465
export function ipam_unit_1465(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1465,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1466
export function ipam_unit_1466(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1466,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1467
export function ipam_unit_1467(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1467,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1468
export function ipam_unit_1468(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1468,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1469
export function ipam_unit_1469(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1469,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1470
export function ipam_unit_1470(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1470,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1471
export function ipam_unit_1471(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1471,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1472
export function ipam_unit_1472(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1472,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1473
export function ipam_unit_1473(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1473,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1474
export function ipam_unit_1474(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1474,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1475
export function ipam_unit_1475(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1475,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1476
export function ipam_unit_1476(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1476,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1477
export function ipam_unit_1477(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1477,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1478
export function ipam_unit_1478(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1478,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1479
export function ipam_unit_1479(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1479,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1480
export function ipam_unit_1480(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1480,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1481
export function ipam_unit_1481(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1481,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1482
export function ipam_unit_1482(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1482,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1483
export function ipam_unit_1483(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1483,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1484
export function ipam_unit_1484(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1484,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1485
export function ipam_unit_1485(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1485,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1486
export function ipam_unit_1486(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1486,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1487
export function ipam_unit_1487(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1487,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1488
export function ipam_unit_1488(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1488,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1489
export function ipam_unit_1489(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1489,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1490
export function ipam_unit_1490(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1490,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1491
export function ipam_unit_1491(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 1491,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1492
export function ipam_unit_1492(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 1492,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1493
export function ipam_unit_1493(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 1493,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1494
export function ipam_unit_1494(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 1494,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1495
export function ipam_unit_1495(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 1495,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1496
export function ipam_unit_1496(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 1496,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1497
export function ipam_unit_1497(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 1497,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1498
export function ipam_unit_1498(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 1498,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1499
export function ipam_unit_1499(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 1499,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// ipam operational unit 1500
export function ipam_unit_1500(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 1500,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 1251; i < 1501; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

