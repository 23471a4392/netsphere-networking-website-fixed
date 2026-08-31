/**
 * NetSphere dhcp service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'dhcp';

// dhcp operational unit 9001
export function dhcp_unit_9001(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9001,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9002
export function dhcp_unit_9002(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9002,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9003
export function dhcp_unit_9003(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9003,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9004
export function dhcp_unit_9004(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9004,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9005
export function dhcp_unit_9005(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9005,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9006
export function dhcp_unit_9006(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9006,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9007
export function dhcp_unit_9007(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9007,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9008
export function dhcp_unit_9008(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9008,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9009
export function dhcp_unit_9009(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9009,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9010
export function dhcp_unit_9010(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9010,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9011
export function dhcp_unit_9011(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9011,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9012
export function dhcp_unit_9012(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9012,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9013
export function dhcp_unit_9013(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9013,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9014
export function dhcp_unit_9014(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9014,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9015
export function dhcp_unit_9015(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9015,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9016
export function dhcp_unit_9016(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9016,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9017
export function dhcp_unit_9017(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9017,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9018
export function dhcp_unit_9018(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9018,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9019
export function dhcp_unit_9019(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9019,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9020
export function dhcp_unit_9020(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9020,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9021
export function dhcp_unit_9021(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9021,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9022
export function dhcp_unit_9022(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9022,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9023
export function dhcp_unit_9023(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9023,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9024
export function dhcp_unit_9024(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9024,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9025
export function dhcp_unit_9025(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9025,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9026
export function dhcp_unit_9026(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9026,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9027
export function dhcp_unit_9027(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9027,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9028
export function dhcp_unit_9028(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9028,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9029
export function dhcp_unit_9029(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9029,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9030
export function dhcp_unit_9030(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9030,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9031
export function dhcp_unit_9031(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9031,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9032
export function dhcp_unit_9032(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9032,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9033
export function dhcp_unit_9033(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9033,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9034
export function dhcp_unit_9034(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9034,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9035
export function dhcp_unit_9035(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9035,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9036
export function dhcp_unit_9036(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9036,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9037
export function dhcp_unit_9037(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9037,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9038
export function dhcp_unit_9038(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9038,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9039
export function dhcp_unit_9039(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9039,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9040
export function dhcp_unit_9040(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9040,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9041
export function dhcp_unit_9041(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9041,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9042
export function dhcp_unit_9042(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9042,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9043
export function dhcp_unit_9043(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9043,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9044
export function dhcp_unit_9044(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9044,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9045
export function dhcp_unit_9045(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9045,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9046
export function dhcp_unit_9046(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9046,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9047
export function dhcp_unit_9047(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9047,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9048
export function dhcp_unit_9048(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9048,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9049
export function dhcp_unit_9049(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9049,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9050
export function dhcp_unit_9050(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9050,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9051
export function dhcp_unit_9051(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9051,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9052
export function dhcp_unit_9052(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9052,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9053
export function dhcp_unit_9053(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9053,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9054
export function dhcp_unit_9054(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9054,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9055
export function dhcp_unit_9055(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9055,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9056
export function dhcp_unit_9056(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9056,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9057
export function dhcp_unit_9057(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9057,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9058
export function dhcp_unit_9058(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9058,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9059
export function dhcp_unit_9059(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9059,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9060
export function dhcp_unit_9060(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9060,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9061
export function dhcp_unit_9061(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9061,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9062
export function dhcp_unit_9062(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9062,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9063
export function dhcp_unit_9063(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9063,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9064
export function dhcp_unit_9064(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9064,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9065
export function dhcp_unit_9065(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9065,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9066
export function dhcp_unit_9066(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9066,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9067
export function dhcp_unit_9067(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9067,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9068
export function dhcp_unit_9068(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9068,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9069
export function dhcp_unit_9069(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9069,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9070
export function dhcp_unit_9070(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9070,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9071
export function dhcp_unit_9071(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9071,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9072
export function dhcp_unit_9072(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9072,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9073
export function dhcp_unit_9073(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9073,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9074
export function dhcp_unit_9074(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9074,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9075
export function dhcp_unit_9075(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9075,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9076
export function dhcp_unit_9076(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9076,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9077
export function dhcp_unit_9077(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9077,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9078
export function dhcp_unit_9078(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9078,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9079
export function dhcp_unit_9079(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9079,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9080
export function dhcp_unit_9080(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9080,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9081
export function dhcp_unit_9081(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9081,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9082
export function dhcp_unit_9082(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9082,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9083
export function dhcp_unit_9083(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9083,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9084
export function dhcp_unit_9084(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9084,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9085
export function dhcp_unit_9085(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9085,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9086
export function dhcp_unit_9086(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9086,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9087
export function dhcp_unit_9087(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9087,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9088
export function dhcp_unit_9088(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9088,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9089
export function dhcp_unit_9089(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9089,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9090
export function dhcp_unit_9090(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9090,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9091
export function dhcp_unit_9091(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9091,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9092
export function dhcp_unit_9092(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9092,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9093
export function dhcp_unit_9093(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9093,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9094
export function dhcp_unit_9094(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9094,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9095
export function dhcp_unit_9095(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9095,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9096
export function dhcp_unit_9096(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9096,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9097
export function dhcp_unit_9097(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9097,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9098
export function dhcp_unit_9098(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9098,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9099
export function dhcp_unit_9099(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9099,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9100
export function dhcp_unit_9100(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9100,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9101
export function dhcp_unit_9101(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9101,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9102
export function dhcp_unit_9102(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9102,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9103
export function dhcp_unit_9103(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9103,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9104
export function dhcp_unit_9104(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9104,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9105
export function dhcp_unit_9105(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9105,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9106
export function dhcp_unit_9106(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9106,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9107
export function dhcp_unit_9107(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9107,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9108
export function dhcp_unit_9108(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9108,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9109
export function dhcp_unit_9109(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9109,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9110
export function dhcp_unit_9110(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9110,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9111
export function dhcp_unit_9111(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9111,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9112
export function dhcp_unit_9112(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9112,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9113
export function dhcp_unit_9113(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9113,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9114
export function dhcp_unit_9114(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9114,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9115
export function dhcp_unit_9115(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9115,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9116
export function dhcp_unit_9116(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9116,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9117
export function dhcp_unit_9117(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9117,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9118
export function dhcp_unit_9118(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9118,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9119
export function dhcp_unit_9119(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9119,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9120
export function dhcp_unit_9120(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9120,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9121
export function dhcp_unit_9121(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9121,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9122
export function dhcp_unit_9122(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9122,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9123
export function dhcp_unit_9123(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9123,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9124
export function dhcp_unit_9124(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9124,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9125
export function dhcp_unit_9125(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9125,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9126
export function dhcp_unit_9126(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9126,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9127
export function dhcp_unit_9127(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9127,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9128
export function dhcp_unit_9128(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9128,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9129
export function dhcp_unit_9129(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9129,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9130
export function dhcp_unit_9130(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9130,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9131
export function dhcp_unit_9131(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9131,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9132
export function dhcp_unit_9132(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9132,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9133
export function dhcp_unit_9133(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9133,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9134
export function dhcp_unit_9134(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9134,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9135
export function dhcp_unit_9135(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9135,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9136
export function dhcp_unit_9136(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9136,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9137
export function dhcp_unit_9137(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9137,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9138
export function dhcp_unit_9138(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9138,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9139
export function dhcp_unit_9139(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9139,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9140
export function dhcp_unit_9140(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9140,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9141
export function dhcp_unit_9141(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9141,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9142
export function dhcp_unit_9142(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9142,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9143
export function dhcp_unit_9143(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9143,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9144
export function dhcp_unit_9144(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9144,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9145
export function dhcp_unit_9145(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9145,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9146
export function dhcp_unit_9146(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9146,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9147
export function dhcp_unit_9147(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9147,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9148
export function dhcp_unit_9148(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9148,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9149
export function dhcp_unit_9149(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9149,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9150
export function dhcp_unit_9150(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9150,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9151
export function dhcp_unit_9151(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9151,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9152
export function dhcp_unit_9152(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9152,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9153
export function dhcp_unit_9153(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9153,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9154
export function dhcp_unit_9154(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9154,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9155
export function dhcp_unit_9155(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9155,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9156
export function dhcp_unit_9156(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9156,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9157
export function dhcp_unit_9157(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9157,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9158
export function dhcp_unit_9158(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9158,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9159
export function dhcp_unit_9159(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9159,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9160
export function dhcp_unit_9160(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9160,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9161
export function dhcp_unit_9161(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9161,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9162
export function dhcp_unit_9162(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9162,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9163
export function dhcp_unit_9163(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9163,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9164
export function dhcp_unit_9164(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9164,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9165
export function dhcp_unit_9165(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9165,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9166
export function dhcp_unit_9166(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9166,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9167
export function dhcp_unit_9167(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9167,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9168
export function dhcp_unit_9168(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9168,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9169
export function dhcp_unit_9169(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9169,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9170
export function dhcp_unit_9170(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9170,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9171
export function dhcp_unit_9171(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9171,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9172
export function dhcp_unit_9172(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9172,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9173
export function dhcp_unit_9173(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9173,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9174
export function dhcp_unit_9174(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9174,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9175
export function dhcp_unit_9175(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9175,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9176
export function dhcp_unit_9176(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9176,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9177
export function dhcp_unit_9177(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9177,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9178
export function dhcp_unit_9178(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9178,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9179
export function dhcp_unit_9179(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9179,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9180
export function dhcp_unit_9180(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9180,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9181
export function dhcp_unit_9181(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9181,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9182
export function dhcp_unit_9182(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9182,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9183
export function dhcp_unit_9183(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9183,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9184
export function dhcp_unit_9184(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9184,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9185
export function dhcp_unit_9185(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9185,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9186
export function dhcp_unit_9186(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9186,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9187
export function dhcp_unit_9187(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9187,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9188
export function dhcp_unit_9188(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9188,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9189
export function dhcp_unit_9189(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9189,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9190
export function dhcp_unit_9190(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9190,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9191
export function dhcp_unit_9191(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9191,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9192
export function dhcp_unit_9192(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9192,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9193
export function dhcp_unit_9193(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9193,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9194
export function dhcp_unit_9194(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9194,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9195
export function dhcp_unit_9195(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9195,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9196
export function dhcp_unit_9196(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9196,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9197
export function dhcp_unit_9197(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9197,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9198
export function dhcp_unit_9198(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9198,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9199
export function dhcp_unit_9199(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9199,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9200
export function dhcp_unit_9200(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9200,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9201
export function dhcp_unit_9201(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9201,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9202
export function dhcp_unit_9202(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9202,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9203
export function dhcp_unit_9203(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9203,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9204
export function dhcp_unit_9204(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9204,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9205
export function dhcp_unit_9205(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9205,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9206
export function dhcp_unit_9206(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9206,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9207
export function dhcp_unit_9207(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9207,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9208
export function dhcp_unit_9208(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9208,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9209
export function dhcp_unit_9209(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9209,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9210
export function dhcp_unit_9210(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9210,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9211
export function dhcp_unit_9211(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9211,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9212
export function dhcp_unit_9212(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9212,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9213
export function dhcp_unit_9213(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9213,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9214
export function dhcp_unit_9214(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9214,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9215
export function dhcp_unit_9215(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9215,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9216
export function dhcp_unit_9216(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9216,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9217
export function dhcp_unit_9217(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9217,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9218
export function dhcp_unit_9218(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9218,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9219
export function dhcp_unit_9219(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9219,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9220
export function dhcp_unit_9220(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9220,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9221
export function dhcp_unit_9221(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9221,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9222
export function dhcp_unit_9222(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9222,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9223
export function dhcp_unit_9223(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9223,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9224
export function dhcp_unit_9224(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9224,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9225
export function dhcp_unit_9225(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9225,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9226
export function dhcp_unit_9226(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9226,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9227
export function dhcp_unit_9227(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9227,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9228
export function dhcp_unit_9228(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9228,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9229
export function dhcp_unit_9229(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9229,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9230
export function dhcp_unit_9230(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9230,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9231
export function dhcp_unit_9231(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9231,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9232
export function dhcp_unit_9232(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9232,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9233
export function dhcp_unit_9233(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9233,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9234
export function dhcp_unit_9234(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9234,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9235
export function dhcp_unit_9235(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9235,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9236
export function dhcp_unit_9236(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9236,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9237
export function dhcp_unit_9237(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9237,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9238
export function dhcp_unit_9238(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9238,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9239
export function dhcp_unit_9239(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9239,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9240
export function dhcp_unit_9240(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9240,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9241
export function dhcp_unit_9241(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 9241,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9242
export function dhcp_unit_9242(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 9242,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9243
export function dhcp_unit_9243(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 9243,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9244
export function dhcp_unit_9244(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 9244,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9245
export function dhcp_unit_9245(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 9245,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9246
export function dhcp_unit_9246(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 9246,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9247
export function dhcp_unit_9247(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 9247,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9248
export function dhcp_unit_9248(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 9248,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9249
export function dhcp_unit_9249(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 9249,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// dhcp operational unit 9250
export function dhcp_unit_9250(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 9250,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 9001; i < 9251; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

