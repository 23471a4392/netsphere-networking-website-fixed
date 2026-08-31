/**
 * NetSphere backup service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'backup';

// backup operational unit 5751
export function backup_unit_5751(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5751,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5752
export function backup_unit_5752(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5752,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5753
export function backup_unit_5753(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5753,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5754
export function backup_unit_5754(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5754,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5755
export function backup_unit_5755(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5755,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5756
export function backup_unit_5756(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5756,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5757
export function backup_unit_5757(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5757,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5758
export function backup_unit_5758(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5758,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5759
export function backup_unit_5759(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5759,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5760
export function backup_unit_5760(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5760,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5761
export function backup_unit_5761(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5761,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5762
export function backup_unit_5762(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5762,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5763
export function backup_unit_5763(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5763,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5764
export function backup_unit_5764(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5764,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5765
export function backup_unit_5765(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5765,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5766
export function backup_unit_5766(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5766,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5767
export function backup_unit_5767(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5767,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5768
export function backup_unit_5768(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5768,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5769
export function backup_unit_5769(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5769,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5770
export function backup_unit_5770(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5770,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5771
export function backup_unit_5771(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5771,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5772
export function backup_unit_5772(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5772,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5773
export function backup_unit_5773(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5773,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5774
export function backup_unit_5774(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5774,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5775
export function backup_unit_5775(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5775,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5776
export function backup_unit_5776(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5776,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5777
export function backup_unit_5777(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5777,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5778
export function backup_unit_5778(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5778,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5779
export function backup_unit_5779(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5779,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5780
export function backup_unit_5780(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5780,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5781
export function backup_unit_5781(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5781,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5782
export function backup_unit_5782(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5782,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5783
export function backup_unit_5783(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5783,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5784
export function backup_unit_5784(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5784,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5785
export function backup_unit_5785(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5785,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5786
export function backup_unit_5786(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5786,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5787
export function backup_unit_5787(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5787,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5788
export function backup_unit_5788(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5788,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5789
export function backup_unit_5789(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5789,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5790
export function backup_unit_5790(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5790,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5791
export function backup_unit_5791(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5791,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5792
export function backup_unit_5792(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5792,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5793
export function backup_unit_5793(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5793,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5794
export function backup_unit_5794(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5794,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5795
export function backup_unit_5795(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5795,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5796
export function backup_unit_5796(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5796,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5797
export function backup_unit_5797(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5797,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5798
export function backup_unit_5798(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5798,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5799
export function backup_unit_5799(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5799,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5800
export function backup_unit_5800(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5800,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5801
export function backup_unit_5801(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5801,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5802
export function backup_unit_5802(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5802,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5803
export function backup_unit_5803(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5803,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5804
export function backup_unit_5804(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5804,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5805
export function backup_unit_5805(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5805,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5806
export function backup_unit_5806(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5806,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5807
export function backup_unit_5807(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5807,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5808
export function backup_unit_5808(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5808,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5809
export function backup_unit_5809(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5809,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5810
export function backup_unit_5810(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5810,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5811
export function backup_unit_5811(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5811,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5812
export function backup_unit_5812(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5812,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5813
export function backup_unit_5813(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5813,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5814
export function backup_unit_5814(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5814,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5815
export function backup_unit_5815(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5815,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5816
export function backup_unit_5816(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5816,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5817
export function backup_unit_5817(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5817,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5818
export function backup_unit_5818(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5818,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5819
export function backup_unit_5819(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5819,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5820
export function backup_unit_5820(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5820,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5821
export function backup_unit_5821(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5821,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5822
export function backup_unit_5822(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5822,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5823
export function backup_unit_5823(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5823,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5824
export function backup_unit_5824(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5824,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5825
export function backup_unit_5825(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5825,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5826
export function backup_unit_5826(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5826,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5827
export function backup_unit_5827(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5827,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5828
export function backup_unit_5828(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5828,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5829
export function backup_unit_5829(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5829,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5830
export function backup_unit_5830(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5830,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5831
export function backup_unit_5831(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5831,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5832
export function backup_unit_5832(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5832,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5833
export function backup_unit_5833(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5833,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5834
export function backup_unit_5834(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5834,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5835
export function backup_unit_5835(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5835,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5836
export function backup_unit_5836(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5836,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5837
export function backup_unit_5837(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5837,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5838
export function backup_unit_5838(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5838,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5839
export function backup_unit_5839(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5839,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5840
export function backup_unit_5840(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5840,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5841
export function backup_unit_5841(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5841,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5842
export function backup_unit_5842(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5842,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5843
export function backup_unit_5843(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5843,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5844
export function backup_unit_5844(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5844,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5845
export function backup_unit_5845(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5845,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5846
export function backup_unit_5846(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5846,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5847
export function backup_unit_5847(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5847,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5848
export function backup_unit_5848(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5848,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5849
export function backup_unit_5849(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5849,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5850
export function backup_unit_5850(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5850,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5851
export function backup_unit_5851(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5851,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5852
export function backup_unit_5852(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5852,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5853
export function backup_unit_5853(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5853,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5854
export function backup_unit_5854(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5854,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5855
export function backup_unit_5855(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5855,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5856
export function backup_unit_5856(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5856,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5857
export function backup_unit_5857(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5857,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5858
export function backup_unit_5858(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5858,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5859
export function backup_unit_5859(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5859,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5860
export function backup_unit_5860(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5860,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5861
export function backup_unit_5861(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5861,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5862
export function backup_unit_5862(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5862,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5863
export function backup_unit_5863(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5863,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5864
export function backup_unit_5864(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5864,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5865
export function backup_unit_5865(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5865,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5866
export function backup_unit_5866(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5866,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5867
export function backup_unit_5867(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5867,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5868
export function backup_unit_5868(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5868,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5869
export function backup_unit_5869(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5869,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5870
export function backup_unit_5870(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5870,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5871
export function backup_unit_5871(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5871,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5872
export function backup_unit_5872(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5872,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5873
export function backup_unit_5873(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5873,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5874
export function backup_unit_5874(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5874,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5875
export function backup_unit_5875(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5875,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5876
export function backup_unit_5876(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5876,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5877
export function backup_unit_5877(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5877,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5878
export function backup_unit_5878(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5878,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5879
export function backup_unit_5879(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5879,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5880
export function backup_unit_5880(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5880,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5881
export function backup_unit_5881(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5881,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5882
export function backup_unit_5882(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5882,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5883
export function backup_unit_5883(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5883,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5884
export function backup_unit_5884(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5884,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5885
export function backup_unit_5885(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5885,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5886
export function backup_unit_5886(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5886,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5887
export function backup_unit_5887(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5887,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5888
export function backup_unit_5888(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5888,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5889
export function backup_unit_5889(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5889,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5890
export function backup_unit_5890(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5890,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5891
export function backup_unit_5891(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5891,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5892
export function backup_unit_5892(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5892,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5893
export function backup_unit_5893(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5893,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5894
export function backup_unit_5894(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5894,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5895
export function backup_unit_5895(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5895,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5896
export function backup_unit_5896(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5896,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5897
export function backup_unit_5897(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5897,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5898
export function backup_unit_5898(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5898,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5899
export function backup_unit_5899(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5899,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5900
export function backup_unit_5900(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5900,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5901
export function backup_unit_5901(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5901,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5902
export function backup_unit_5902(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5902,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5903
export function backup_unit_5903(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5903,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5904
export function backup_unit_5904(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5904,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5905
export function backup_unit_5905(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5905,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5906
export function backup_unit_5906(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5906,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5907
export function backup_unit_5907(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5907,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5908
export function backup_unit_5908(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5908,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5909
export function backup_unit_5909(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5909,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5910
export function backup_unit_5910(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5910,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5911
export function backup_unit_5911(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5911,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5912
export function backup_unit_5912(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5912,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5913
export function backup_unit_5913(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5913,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5914
export function backup_unit_5914(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5914,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5915
export function backup_unit_5915(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5915,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5916
export function backup_unit_5916(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5916,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5917
export function backup_unit_5917(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5917,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5918
export function backup_unit_5918(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5918,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5919
export function backup_unit_5919(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5919,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5920
export function backup_unit_5920(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5920,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5921
export function backup_unit_5921(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5921,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5922
export function backup_unit_5922(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5922,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5923
export function backup_unit_5923(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5923,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5924
export function backup_unit_5924(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5924,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5925
export function backup_unit_5925(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5925,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5926
export function backup_unit_5926(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5926,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5927
export function backup_unit_5927(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5927,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5928
export function backup_unit_5928(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5928,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5929
export function backup_unit_5929(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5929,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5930
export function backup_unit_5930(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5930,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5931
export function backup_unit_5931(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5931,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5932
export function backup_unit_5932(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5932,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5933
export function backup_unit_5933(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5933,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5934
export function backup_unit_5934(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5934,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5935
export function backup_unit_5935(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5935,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5936
export function backup_unit_5936(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5936,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5937
export function backup_unit_5937(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5937,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5938
export function backup_unit_5938(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5938,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5939
export function backup_unit_5939(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5939,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5940
export function backup_unit_5940(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5940,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5941
export function backup_unit_5941(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5941,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5942
export function backup_unit_5942(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5942,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5943
export function backup_unit_5943(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5943,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5944
export function backup_unit_5944(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5944,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5945
export function backup_unit_5945(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5945,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5946
export function backup_unit_5946(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5946,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5947
export function backup_unit_5947(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5947,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5948
export function backup_unit_5948(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5948,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5949
export function backup_unit_5949(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5949,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5950
export function backup_unit_5950(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5950,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5951
export function backup_unit_5951(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5951,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5952
export function backup_unit_5952(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5952,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5953
export function backup_unit_5953(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5953,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5954
export function backup_unit_5954(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5954,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5955
export function backup_unit_5955(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5955,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5956
export function backup_unit_5956(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5956,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5957
export function backup_unit_5957(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5957,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5958
export function backup_unit_5958(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5958,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5959
export function backup_unit_5959(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5959,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5960
export function backup_unit_5960(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5960,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5961
export function backup_unit_5961(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5961,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5962
export function backup_unit_5962(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5962,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5963
export function backup_unit_5963(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5963,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5964
export function backup_unit_5964(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5964,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5965
export function backup_unit_5965(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5965,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5966
export function backup_unit_5966(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5966,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5967
export function backup_unit_5967(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5967,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5968
export function backup_unit_5968(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5968,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5969
export function backup_unit_5969(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5969,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5970
export function backup_unit_5970(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5970,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5971
export function backup_unit_5971(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5971,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5972
export function backup_unit_5972(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5972,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5973
export function backup_unit_5973(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5973,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5974
export function backup_unit_5974(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5974,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5975
export function backup_unit_5975(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5975,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5976
export function backup_unit_5976(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5976,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5977
export function backup_unit_5977(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5977,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5978
export function backup_unit_5978(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5978,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5979
export function backup_unit_5979(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5979,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5980
export function backup_unit_5980(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5980,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5981
export function backup_unit_5981(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5981,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5982
export function backup_unit_5982(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5982,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5983
export function backup_unit_5983(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5983,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5984
export function backup_unit_5984(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5984,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5985
export function backup_unit_5985(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5985,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5986
export function backup_unit_5986(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5986,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5987
export function backup_unit_5987(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5987,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5988
export function backup_unit_5988(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5988,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5989
export function backup_unit_5989(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5989,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5990
export function backup_unit_5990(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 5990,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5991
export function backup_unit_5991(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 5991,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5992
export function backup_unit_5992(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 5992,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5993
export function backup_unit_5993(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 5993,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5994
export function backup_unit_5994(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 5994,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5995
export function backup_unit_5995(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 5995,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5996
export function backup_unit_5996(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 5996,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5997
export function backup_unit_5997(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 5997,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5998
export function backup_unit_5998(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 5998,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 5999
export function backup_unit_5999(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 5999,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// backup operational unit 6000
export function backup_unit_6000(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 6000,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 5751; i < 6001; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

