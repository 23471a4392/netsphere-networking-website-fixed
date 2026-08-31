/**
 * NetSphere vlans service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'vlans';

// vlans operational unit 3751
export function vlans_unit_3751(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3751,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3752
export function vlans_unit_3752(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3752,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3753
export function vlans_unit_3753(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3753,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3754
export function vlans_unit_3754(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3754,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3755
export function vlans_unit_3755(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3755,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3756
export function vlans_unit_3756(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3756,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3757
export function vlans_unit_3757(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3757,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3758
export function vlans_unit_3758(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3758,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3759
export function vlans_unit_3759(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3759,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3760
export function vlans_unit_3760(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3760,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3761
export function vlans_unit_3761(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3761,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3762
export function vlans_unit_3762(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3762,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3763
export function vlans_unit_3763(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3763,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3764
export function vlans_unit_3764(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3764,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3765
export function vlans_unit_3765(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3765,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3766
export function vlans_unit_3766(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3766,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3767
export function vlans_unit_3767(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3767,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3768
export function vlans_unit_3768(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3768,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3769
export function vlans_unit_3769(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3769,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3770
export function vlans_unit_3770(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3770,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3771
export function vlans_unit_3771(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3771,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3772
export function vlans_unit_3772(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3772,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3773
export function vlans_unit_3773(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3773,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3774
export function vlans_unit_3774(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3774,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3775
export function vlans_unit_3775(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3775,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3776
export function vlans_unit_3776(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3776,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3777
export function vlans_unit_3777(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3777,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3778
export function vlans_unit_3778(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3778,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3779
export function vlans_unit_3779(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3779,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3780
export function vlans_unit_3780(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3780,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3781
export function vlans_unit_3781(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3781,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3782
export function vlans_unit_3782(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3782,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3783
export function vlans_unit_3783(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3783,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3784
export function vlans_unit_3784(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3784,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3785
export function vlans_unit_3785(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3785,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3786
export function vlans_unit_3786(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3786,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3787
export function vlans_unit_3787(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3787,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3788
export function vlans_unit_3788(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3788,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3789
export function vlans_unit_3789(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3789,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3790
export function vlans_unit_3790(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3790,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3791
export function vlans_unit_3791(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3791,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3792
export function vlans_unit_3792(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3792,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3793
export function vlans_unit_3793(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3793,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3794
export function vlans_unit_3794(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3794,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3795
export function vlans_unit_3795(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3795,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3796
export function vlans_unit_3796(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3796,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3797
export function vlans_unit_3797(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3797,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3798
export function vlans_unit_3798(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3798,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3799
export function vlans_unit_3799(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3799,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3800
export function vlans_unit_3800(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3800,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3801
export function vlans_unit_3801(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3801,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3802
export function vlans_unit_3802(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3802,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3803
export function vlans_unit_3803(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3803,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3804
export function vlans_unit_3804(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3804,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3805
export function vlans_unit_3805(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3805,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3806
export function vlans_unit_3806(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3806,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3807
export function vlans_unit_3807(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3807,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3808
export function vlans_unit_3808(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3808,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3809
export function vlans_unit_3809(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3809,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3810
export function vlans_unit_3810(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3810,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3811
export function vlans_unit_3811(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3811,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3812
export function vlans_unit_3812(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3812,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3813
export function vlans_unit_3813(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3813,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3814
export function vlans_unit_3814(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3814,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3815
export function vlans_unit_3815(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3815,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3816
export function vlans_unit_3816(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3816,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3817
export function vlans_unit_3817(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3817,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3818
export function vlans_unit_3818(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3818,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3819
export function vlans_unit_3819(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3819,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3820
export function vlans_unit_3820(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3820,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3821
export function vlans_unit_3821(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3821,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3822
export function vlans_unit_3822(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3822,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3823
export function vlans_unit_3823(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3823,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3824
export function vlans_unit_3824(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3824,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3825
export function vlans_unit_3825(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3825,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3826
export function vlans_unit_3826(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3826,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3827
export function vlans_unit_3827(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3827,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3828
export function vlans_unit_3828(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3828,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3829
export function vlans_unit_3829(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3829,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3830
export function vlans_unit_3830(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3830,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3831
export function vlans_unit_3831(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3831,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3832
export function vlans_unit_3832(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3832,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3833
export function vlans_unit_3833(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3833,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3834
export function vlans_unit_3834(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3834,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3835
export function vlans_unit_3835(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3835,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3836
export function vlans_unit_3836(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3836,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3837
export function vlans_unit_3837(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3837,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3838
export function vlans_unit_3838(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3838,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3839
export function vlans_unit_3839(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3839,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3840
export function vlans_unit_3840(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3840,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3841
export function vlans_unit_3841(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3841,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3842
export function vlans_unit_3842(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3842,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3843
export function vlans_unit_3843(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3843,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3844
export function vlans_unit_3844(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3844,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3845
export function vlans_unit_3845(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3845,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3846
export function vlans_unit_3846(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3846,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3847
export function vlans_unit_3847(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3847,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3848
export function vlans_unit_3848(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3848,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3849
export function vlans_unit_3849(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3849,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3850
export function vlans_unit_3850(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3850,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3851
export function vlans_unit_3851(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3851,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3852
export function vlans_unit_3852(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3852,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3853
export function vlans_unit_3853(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3853,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3854
export function vlans_unit_3854(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3854,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3855
export function vlans_unit_3855(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3855,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3856
export function vlans_unit_3856(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3856,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3857
export function vlans_unit_3857(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3857,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3858
export function vlans_unit_3858(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3858,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3859
export function vlans_unit_3859(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3859,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3860
export function vlans_unit_3860(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3860,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3861
export function vlans_unit_3861(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3861,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3862
export function vlans_unit_3862(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3862,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3863
export function vlans_unit_3863(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3863,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3864
export function vlans_unit_3864(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3864,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3865
export function vlans_unit_3865(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3865,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3866
export function vlans_unit_3866(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3866,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3867
export function vlans_unit_3867(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3867,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3868
export function vlans_unit_3868(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3868,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3869
export function vlans_unit_3869(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3869,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3870
export function vlans_unit_3870(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3870,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3871
export function vlans_unit_3871(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3871,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3872
export function vlans_unit_3872(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3872,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3873
export function vlans_unit_3873(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3873,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3874
export function vlans_unit_3874(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3874,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3875
export function vlans_unit_3875(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3875,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3876
export function vlans_unit_3876(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3876,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3877
export function vlans_unit_3877(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3877,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3878
export function vlans_unit_3878(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3878,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3879
export function vlans_unit_3879(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3879,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3880
export function vlans_unit_3880(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3880,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3881
export function vlans_unit_3881(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3881,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3882
export function vlans_unit_3882(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3882,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3883
export function vlans_unit_3883(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3883,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3884
export function vlans_unit_3884(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3884,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3885
export function vlans_unit_3885(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3885,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3886
export function vlans_unit_3886(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3886,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3887
export function vlans_unit_3887(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3887,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3888
export function vlans_unit_3888(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3888,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3889
export function vlans_unit_3889(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3889,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3890
export function vlans_unit_3890(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3890,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3891
export function vlans_unit_3891(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3891,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3892
export function vlans_unit_3892(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3892,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3893
export function vlans_unit_3893(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3893,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3894
export function vlans_unit_3894(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3894,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3895
export function vlans_unit_3895(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3895,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3896
export function vlans_unit_3896(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3896,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3897
export function vlans_unit_3897(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3897,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3898
export function vlans_unit_3898(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3898,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3899
export function vlans_unit_3899(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3899,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3900
export function vlans_unit_3900(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3900,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3901
export function vlans_unit_3901(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3901,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3902
export function vlans_unit_3902(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3902,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3903
export function vlans_unit_3903(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3903,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3904
export function vlans_unit_3904(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3904,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3905
export function vlans_unit_3905(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3905,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3906
export function vlans_unit_3906(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3906,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3907
export function vlans_unit_3907(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3907,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3908
export function vlans_unit_3908(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3908,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3909
export function vlans_unit_3909(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3909,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3910
export function vlans_unit_3910(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3910,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3911
export function vlans_unit_3911(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3911,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3912
export function vlans_unit_3912(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3912,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3913
export function vlans_unit_3913(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3913,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3914
export function vlans_unit_3914(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3914,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3915
export function vlans_unit_3915(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3915,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3916
export function vlans_unit_3916(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3916,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3917
export function vlans_unit_3917(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3917,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3918
export function vlans_unit_3918(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3918,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3919
export function vlans_unit_3919(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3919,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3920
export function vlans_unit_3920(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3920,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3921
export function vlans_unit_3921(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3921,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3922
export function vlans_unit_3922(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3922,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3923
export function vlans_unit_3923(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3923,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3924
export function vlans_unit_3924(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3924,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3925
export function vlans_unit_3925(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3925,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3926
export function vlans_unit_3926(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3926,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3927
export function vlans_unit_3927(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3927,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3928
export function vlans_unit_3928(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3928,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3929
export function vlans_unit_3929(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3929,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3930
export function vlans_unit_3930(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3930,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3931
export function vlans_unit_3931(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3931,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3932
export function vlans_unit_3932(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3932,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3933
export function vlans_unit_3933(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3933,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3934
export function vlans_unit_3934(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3934,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3935
export function vlans_unit_3935(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3935,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3936
export function vlans_unit_3936(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3936,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3937
export function vlans_unit_3937(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3937,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3938
export function vlans_unit_3938(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3938,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3939
export function vlans_unit_3939(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3939,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3940
export function vlans_unit_3940(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3940,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3941
export function vlans_unit_3941(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3941,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3942
export function vlans_unit_3942(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3942,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3943
export function vlans_unit_3943(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3943,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3944
export function vlans_unit_3944(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3944,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3945
export function vlans_unit_3945(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3945,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3946
export function vlans_unit_3946(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3946,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3947
export function vlans_unit_3947(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3947,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3948
export function vlans_unit_3948(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3948,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3949
export function vlans_unit_3949(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3949,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3950
export function vlans_unit_3950(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3950,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3951
export function vlans_unit_3951(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3951,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3952
export function vlans_unit_3952(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3952,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3953
export function vlans_unit_3953(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3953,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3954
export function vlans_unit_3954(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3954,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3955
export function vlans_unit_3955(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3955,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3956
export function vlans_unit_3956(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3956,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3957
export function vlans_unit_3957(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3957,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3958
export function vlans_unit_3958(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3958,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3959
export function vlans_unit_3959(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3959,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3960
export function vlans_unit_3960(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3960,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3961
export function vlans_unit_3961(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3961,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3962
export function vlans_unit_3962(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3962,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3963
export function vlans_unit_3963(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3963,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3964
export function vlans_unit_3964(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3964,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3965
export function vlans_unit_3965(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3965,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3966
export function vlans_unit_3966(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3966,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3967
export function vlans_unit_3967(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3967,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3968
export function vlans_unit_3968(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3968,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3969
export function vlans_unit_3969(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3969,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3970
export function vlans_unit_3970(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3970,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3971
export function vlans_unit_3971(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3971,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3972
export function vlans_unit_3972(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3972,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3973
export function vlans_unit_3973(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3973,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3974
export function vlans_unit_3974(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3974,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3975
export function vlans_unit_3975(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3975,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3976
export function vlans_unit_3976(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3976,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3977
export function vlans_unit_3977(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3977,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3978
export function vlans_unit_3978(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3978,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3979
export function vlans_unit_3979(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3979,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3980
export function vlans_unit_3980(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3980,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3981
export function vlans_unit_3981(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3981,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3982
export function vlans_unit_3982(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3982,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3983
export function vlans_unit_3983(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3983,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3984
export function vlans_unit_3984(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3984,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3985
export function vlans_unit_3985(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3985,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3986
export function vlans_unit_3986(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3986,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3987
export function vlans_unit_3987(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3987,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3988
export function vlans_unit_3988(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3988,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3989
export function vlans_unit_3989(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3989,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3990
export function vlans_unit_3990(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3990,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3991
export function vlans_unit_3991(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3991,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3992
export function vlans_unit_3992(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3992,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3993
export function vlans_unit_3993(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3993,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3994
export function vlans_unit_3994(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3994,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3995
export function vlans_unit_3995(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3995,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3996
export function vlans_unit_3996(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3996,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3997
export function vlans_unit_3997(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3997,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3998
export function vlans_unit_3998(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3998,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3999
export function vlans_unit_3999(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3999,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 4000
export function vlans_unit_4000(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 4000,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 3751; i < 4001; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

