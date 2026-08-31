/**
 * NetSphere dhcp service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'dhcp';

// dhcp operational unit 9251
export function dhcp_unit_9251(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9251,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9252
export function dhcp_unit_9252(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9252,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9253
export function dhcp_unit_9253(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9253,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9254
export function dhcp_unit_9254(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9254,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9255
export function dhcp_unit_9255(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9255,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9256
export function dhcp_unit_9256(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9256,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9257
export function dhcp_unit_9257(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9257,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9258
export function dhcp_unit_9258(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9258,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9259
export function dhcp_unit_9259(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9259,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9260
export function dhcp_unit_9260(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9260,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9261
export function dhcp_unit_9261(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9261,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9262
export function dhcp_unit_9262(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9262,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9263
export function dhcp_unit_9263(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9263,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9264
export function dhcp_unit_9264(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9264,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9265
export function dhcp_unit_9265(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9265,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9266
export function dhcp_unit_9266(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9266,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9267
export function dhcp_unit_9267(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9267,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9268
export function dhcp_unit_9268(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9268,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9269
export function dhcp_unit_9269(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9269,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9270
export function dhcp_unit_9270(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9270,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9271
export function dhcp_unit_9271(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9271,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9272
export function dhcp_unit_9272(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9272,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9273
export function dhcp_unit_9273(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9273,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9274
export function dhcp_unit_9274(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9274,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9275
export function dhcp_unit_9275(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9275,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9276
export function dhcp_unit_9276(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9276,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9277
export function dhcp_unit_9277(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9277,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9278
export function dhcp_unit_9278(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9278,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9279
export function dhcp_unit_9279(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9279,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9280
export function dhcp_unit_9280(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9280,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9281
export function dhcp_unit_9281(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9281,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9282
export function dhcp_unit_9282(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9282,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9283
export function dhcp_unit_9283(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9283,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9284
export function dhcp_unit_9284(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9284,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9285
export function dhcp_unit_9285(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9285,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9286
export function dhcp_unit_9286(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9286,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9287
export function dhcp_unit_9287(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9287,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9288
export function dhcp_unit_9288(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9288,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9289
export function dhcp_unit_9289(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9289,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9290
export function dhcp_unit_9290(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9290,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9291
export function dhcp_unit_9291(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9291,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9292
export function dhcp_unit_9292(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9292,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9293
export function dhcp_unit_9293(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9293,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9294
export function dhcp_unit_9294(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9294,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9295
export function dhcp_unit_9295(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9295,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9296
export function dhcp_unit_9296(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9296,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9297
export function dhcp_unit_9297(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9297,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9298
export function dhcp_unit_9298(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9298,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9299
export function dhcp_unit_9299(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9299,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9300
export function dhcp_unit_9300(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9300,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9301
export function dhcp_unit_9301(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9301,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9302
export function dhcp_unit_9302(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9302,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9303
export function dhcp_unit_9303(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9303,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9304
export function dhcp_unit_9304(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9304,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9305
export function dhcp_unit_9305(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9305,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9306
export function dhcp_unit_9306(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9306,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9307
export function dhcp_unit_9307(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9307,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9308
export function dhcp_unit_9308(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9308,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9309
export function dhcp_unit_9309(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9309,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9310
export function dhcp_unit_9310(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9310,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9311
export function dhcp_unit_9311(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9311,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9312
export function dhcp_unit_9312(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9312,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9313
export function dhcp_unit_9313(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9313,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9314
export function dhcp_unit_9314(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9314,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9315
export function dhcp_unit_9315(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9315,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9316
export function dhcp_unit_9316(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9316,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9317
export function dhcp_unit_9317(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9317,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9318
export function dhcp_unit_9318(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9318,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9319
export function dhcp_unit_9319(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9319,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9320
export function dhcp_unit_9320(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9320,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9321
export function dhcp_unit_9321(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9321,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9322
export function dhcp_unit_9322(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9322,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9323
export function dhcp_unit_9323(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9323,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9324
export function dhcp_unit_9324(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9324,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9325
export function dhcp_unit_9325(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9325,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9326
export function dhcp_unit_9326(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9326,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9327
export function dhcp_unit_9327(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9327,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9328
export function dhcp_unit_9328(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9328,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9329
export function dhcp_unit_9329(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9329,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9330
export function dhcp_unit_9330(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9330,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9331
export function dhcp_unit_9331(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9331,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9332
export function dhcp_unit_9332(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9332,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9333
export function dhcp_unit_9333(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9333,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9334
export function dhcp_unit_9334(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9334,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9335
export function dhcp_unit_9335(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9335,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9336
export function dhcp_unit_9336(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9336,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9337
export function dhcp_unit_9337(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9337,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9338
export function dhcp_unit_9338(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9338,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9339
export function dhcp_unit_9339(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9339,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9340
export function dhcp_unit_9340(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9340,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9341
export function dhcp_unit_9341(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9341,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9342
export function dhcp_unit_9342(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9342,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9343
export function dhcp_unit_9343(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9343,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9344
export function dhcp_unit_9344(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9344,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9345
export function dhcp_unit_9345(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9345,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9346
export function dhcp_unit_9346(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9346,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9347
export function dhcp_unit_9347(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9347,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9348
export function dhcp_unit_9348(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9348,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9349
export function dhcp_unit_9349(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9349,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9350
export function dhcp_unit_9350(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9350,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9351
export function dhcp_unit_9351(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9351,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9352
export function dhcp_unit_9352(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9352,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9353
export function dhcp_unit_9353(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9353,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9354
export function dhcp_unit_9354(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9354,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9355
export function dhcp_unit_9355(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9355,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9356
export function dhcp_unit_9356(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9356,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9357
export function dhcp_unit_9357(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9357,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9358
export function dhcp_unit_9358(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9358,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9359
export function dhcp_unit_9359(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9359,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9360
export function dhcp_unit_9360(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9360,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9361
export function dhcp_unit_9361(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9361,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9362
export function dhcp_unit_9362(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9362,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9363
export function dhcp_unit_9363(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9363,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9364
export function dhcp_unit_9364(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9364,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9365
export function dhcp_unit_9365(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9365,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9366
export function dhcp_unit_9366(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9366,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9367
export function dhcp_unit_9367(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9367,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9368
export function dhcp_unit_9368(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9368,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9369
export function dhcp_unit_9369(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9369,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9370
export function dhcp_unit_9370(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9370,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9371
export function dhcp_unit_9371(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9371,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9372
export function dhcp_unit_9372(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9372,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9373
export function dhcp_unit_9373(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9373,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9374
export function dhcp_unit_9374(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9374,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9375
export function dhcp_unit_9375(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9375,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9376
export function dhcp_unit_9376(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9376,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9377
export function dhcp_unit_9377(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9377,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9378
export function dhcp_unit_9378(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9378,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9379
export function dhcp_unit_9379(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9379,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9380
export function dhcp_unit_9380(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9380,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9381
export function dhcp_unit_9381(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9381,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9382
export function dhcp_unit_9382(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9382,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9383
export function dhcp_unit_9383(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9383,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9384
export function dhcp_unit_9384(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9384,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9385
export function dhcp_unit_9385(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9385,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9386
export function dhcp_unit_9386(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9386,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9387
export function dhcp_unit_9387(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9387,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9388
export function dhcp_unit_9388(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9388,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9389
export function dhcp_unit_9389(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9389,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9390
export function dhcp_unit_9390(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9390,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9391
export function dhcp_unit_9391(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9391,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9392
export function dhcp_unit_9392(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9392,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9393
export function dhcp_unit_9393(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9393,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9394
export function dhcp_unit_9394(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9394,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9395
export function dhcp_unit_9395(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9395,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9396
export function dhcp_unit_9396(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9396,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9397
export function dhcp_unit_9397(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9397,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9398
export function dhcp_unit_9398(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9398,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9399
export function dhcp_unit_9399(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9399,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9400
export function dhcp_unit_9400(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9400,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9401
export function dhcp_unit_9401(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9401,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9402
export function dhcp_unit_9402(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9402,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9403
export function dhcp_unit_9403(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9403,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9404
export function dhcp_unit_9404(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9404,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9405
export function dhcp_unit_9405(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9405,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9406
export function dhcp_unit_9406(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9406,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9407
export function dhcp_unit_9407(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9407,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9408
export function dhcp_unit_9408(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9408,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9409
export function dhcp_unit_9409(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9409,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9410
export function dhcp_unit_9410(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9410,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9411
export function dhcp_unit_9411(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9411,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9412
export function dhcp_unit_9412(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9412,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9413
export function dhcp_unit_9413(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9413,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9414
export function dhcp_unit_9414(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9414,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9415
export function dhcp_unit_9415(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9415,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9416
export function dhcp_unit_9416(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9416,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9417
export function dhcp_unit_9417(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9417,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9418
export function dhcp_unit_9418(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9418,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9419
export function dhcp_unit_9419(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9419,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9420
export function dhcp_unit_9420(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9420,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9421
export function dhcp_unit_9421(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9421,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9422
export function dhcp_unit_9422(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9422,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9423
export function dhcp_unit_9423(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9423,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9424
export function dhcp_unit_9424(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9424,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9425
export function dhcp_unit_9425(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9425,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9426
export function dhcp_unit_9426(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9426,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9427
export function dhcp_unit_9427(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9427,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9428
export function dhcp_unit_9428(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9428,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9429
export function dhcp_unit_9429(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9429,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9430
export function dhcp_unit_9430(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9430,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9431
export function dhcp_unit_9431(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9431,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9432
export function dhcp_unit_9432(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9432,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9433
export function dhcp_unit_9433(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9433,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9434
export function dhcp_unit_9434(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9434,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9435
export function dhcp_unit_9435(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9435,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9436
export function dhcp_unit_9436(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9436,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9437
export function dhcp_unit_9437(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9437,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9438
export function dhcp_unit_9438(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9438,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9439
export function dhcp_unit_9439(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9439,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9440
export function dhcp_unit_9440(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9440,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9441
export function dhcp_unit_9441(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9441,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9442
export function dhcp_unit_9442(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9442,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9443
export function dhcp_unit_9443(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9443,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9444
export function dhcp_unit_9444(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9444,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9445
export function dhcp_unit_9445(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9445,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9446
export function dhcp_unit_9446(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9446,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9447
export function dhcp_unit_9447(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9447,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9448
export function dhcp_unit_9448(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9448,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9449
export function dhcp_unit_9449(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9449,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9450
export function dhcp_unit_9450(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9450,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9451
export function dhcp_unit_9451(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9451,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9452
export function dhcp_unit_9452(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9452,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9453
export function dhcp_unit_9453(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9453,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9454
export function dhcp_unit_9454(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9454,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9455
export function dhcp_unit_9455(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9455,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9456
export function dhcp_unit_9456(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9456,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9457
export function dhcp_unit_9457(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9457,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9458
export function dhcp_unit_9458(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9458,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9459
export function dhcp_unit_9459(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9459,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9460
export function dhcp_unit_9460(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9460,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9461
export function dhcp_unit_9461(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9461,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9462
export function dhcp_unit_9462(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9462,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9463
export function dhcp_unit_9463(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9463,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9464
export function dhcp_unit_9464(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9464,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9465
export function dhcp_unit_9465(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9465,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9466
export function dhcp_unit_9466(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9466,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9467
export function dhcp_unit_9467(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9467,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9468
export function dhcp_unit_9468(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9468,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9469
export function dhcp_unit_9469(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9469,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9470
export function dhcp_unit_9470(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9470,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9471
export function dhcp_unit_9471(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9471,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9472
export function dhcp_unit_9472(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9472,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9473
export function dhcp_unit_9473(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9473,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9474
export function dhcp_unit_9474(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9474,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9475
export function dhcp_unit_9475(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9475,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9476
export function dhcp_unit_9476(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9476,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9477
export function dhcp_unit_9477(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9477,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9478
export function dhcp_unit_9478(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9478,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9479
export function dhcp_unit_9479(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9479,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9480
export function dhcp_unit_9480(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9480,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9481
export function dhcp_unit_9481(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9481,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9482
export function dhcp_unit_9482(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9482,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9483
export function dhcp_unit_9483(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9483,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9484
export function dhcp_unit_9484(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9484,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9485
export function dhcp_unit_9485(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9485,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9486
export function dhcp_unit_9486(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9486,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9487
export function dhcp_unit_9487(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9487,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9488
export function dhcp_unit_9488(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9488,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9489
export function dhcp_unit_9489(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9489,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9490
export function dhcp_unit_9490(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9490,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9491
export function dhcp_unit_9491(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9491,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9492
export function dhcp_unit_9492(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9492,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9493
export function dhcp_unit_9493(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9493,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9494
export function dhcp_unit_9494(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9494,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9495
export function dhcp_unit_9495(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9495,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9496
export function dhcp_unit_9496(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9496,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9497
export function dhcp_unit_9497(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9497,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9498
export function dhcp_unit_9498(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9498,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9499
export function dhcp_unit_9499(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9499,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9500
export function dhcp_unit_9500(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9500,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 9251; i < 9501; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

