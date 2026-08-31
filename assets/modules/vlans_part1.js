/**
 * NetSphere vlans service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'vlans';

// vlans operational unit 3501
export function vlans_unit_3501(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3501,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3502
export function vlans_unit_3502(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3502,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3503
export function vlans_unit_3503(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3503,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3504
export function vlans_unit_3504(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3504,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3505
export function vlans_unit_3505(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3505,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3506
export function vlans_unit_3506(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3506,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3507
export function vlans_unit_3507(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3507,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3508
export function vlans_unit_3508(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3508,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3509
export function vlans_unit_3509(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3509,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3510
export function vlans_unit_3510(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3510,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3511
export function vlans_unit_3511(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3511,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3512
export function vlans_unit_3512(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3512,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3513
export function vlans_unit_3513(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3513,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3514
export function vlans_unit_3514(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3514,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3515
export function vlans_unit_3515(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3515,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3516
export function vlans_unit_3516(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3516,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3517
export function vlans_unit_3517(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3517,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3518
export function vlans_unit_3518(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3518,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3519
export function vlans_unit_3519(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3519,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3520
export function vlans_unit_3520(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3520,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3521
export function vlans_unit_3521(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3521,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3522
export function vlans_unit_3522(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3522,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3523
export function vlans_unit_3523(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3523,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3524
export function vlans_unit_3524(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3524,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3525
export function vlans_unit_3525(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3525,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3526
export function vlans_unit_3526(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3526,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3527
export function vlans_unit_3527(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3527,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3528
export function vlans_unit_3528(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3528,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3529
export function vlans_unit_3529(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3529,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3530
export function vlans_unit_3530(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3530,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3531
export function vlans_unit_3531(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3531,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3532
export function vlans_unit_3532(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3532,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3533
export function vlans_unit_3533(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3533,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3534
export function vlans_unit_3534(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3534,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3535
export function vlans_unit_3535(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3535,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3536
export function vlans_unit_3536(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3536,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3537
export function vlans_unit_3537(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3537,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3538
export function vlans_unit_3538(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3538,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3539
export function vlans_unit_3539(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3539,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3540
export function vlans_unit_3540(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3540,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3541
export function vlans_unit_3541(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3541,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3542
export function vlans_unit_3542(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3542,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3543
export function vlans_unit_3543(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3543,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3544
export function vlans_unit_3544(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3544,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3545
export function vlans_unit_3545(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3545,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3546
export function vlans_unit_3546(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3546,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3547
export function vlans_unit_3547(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3547,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3548
export function vlans_unit_3548(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3548,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3549
export function vlans_unit_3549(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3549,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3550
export function vlans_unit_3550(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3550,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3551
export function vlans_unit_3551(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3551,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3552
export function vlans_unit_3552(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3552,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3553
export function vlans_unit_3553(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3553,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3554
export function vlans_unit_3554(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3554,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3555
export function vlans_unit_3555(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3555,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3556
export function vlans_unit_3556(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3556,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3557
export function vlans_unit_3557(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3557,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3558
export function vlans_unit_3558(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3558,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3559
export function vlans_unit_3559(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3559,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3560
export function vlans_unit_3560(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3560,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3561
export function vlans_unit_3561(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3561,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3562
export function vlans_unit_3562(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3562,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3563
export function vlans_unit_3563(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3563,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3564
export function vlans_unit_3564(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3564,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3565
export function vlans_unit_3565(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3565,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3566
export function vlans_unit_3566(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3566,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3567
export function vlans_unit_3567(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3567,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3568
export function vlans_unit_3568(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3568,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3569
export function vlans_unit_3569(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3569,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3570
export function vlans_unit_3570(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3570,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3571
export function vlans_unit_3571(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3571,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3572
export function vlans_unit_3572(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3572,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3573
export function vlans_unit_3573(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3573,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3574
export function vlans_unit_3574(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3574,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3575
export function vlans_unit_3575(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3575,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3576
export function vlans_unit_3576(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3576,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3577
export function vlans_unit_3577(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3577,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3578
export function vlans_unit_3578(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3578,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3579
export function vlans_unit_3579(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3579,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3580
export function vlans_unit_3580(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3580,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3581
export function vlans_unit_3581(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3581,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3582
export function vlans_unit_3582(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3582,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3583
export function vlans_unit_3583(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3583,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3584
export function vlans_unit_3584(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3584,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3585
export function vlans_unit_3585(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3585,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3586
export function vlans_unit_3586(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3586,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3587
export function vlans_unit_3587(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3587,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3588
export function vlans_unit_3588(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3588,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3589
export function vlans_unit_3589(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3589,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3590
export function vlans_unit_3590(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3590,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3591
export function vlans_unit_3591(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3591,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3592
export function vlans_unit_3592(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3592,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3593
export function vlans_unit_3593(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3593,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3594
export function vlans_unit_3594(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3594,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3595
export function vlans_unit_3595(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3595,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3596
export function vlans_unit_3596(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3596,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3597
export function vlans_unit_3597(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3597,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3598
export function vlans_unit_3598(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3598,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3599
export function vlans_unit_3599(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3599,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3600
export function vlans_unit_3600(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3600,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3601
export function vlans_unit_3601(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3601,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3602
export function vlans_unit_3602(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3602,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3603
export function vlans_unit_3603(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3603,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3604
export function vlans_unit_3604(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3604,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3605
export function vlans_unit_3605(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3605,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3606
export function vlans_unit_3606(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3606,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3607
export function vlans_unit_3607(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3607,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3608
export function vlans_unit_3608(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3608,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3609
export function vlans_unit_3609(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3609,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3610
export function vlans_unit_3610(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3610,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3611
export function vlans_unit_3611(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3611,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3612
export function vlans_unit_3612(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3612,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3613
export function vlans_unit_3613(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3613,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3614
export function vlans_unit_3614(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3614,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3615
export function vlans_unit_3615(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3615,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3616
export function vlans_unit_3616(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3616,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3617
export function vlans_unit_3617(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3617,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3618
export function vlans_unit_3618(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3618,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3619
export function vlans_unit_3619(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3619,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3620
export function vlans_unit_3620(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3620,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3621
export function vlans_unit_3621(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3621,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3622
export function vlans_unit_3622(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3622,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3623
export function vlans_unit_3623(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3623,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3624
export function vlans_unit_3624(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3624,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3625
export function vlans_unit_3625(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3625,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3626
export function vlans_unit_3626(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3626,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3627
export function vlans_unit_3627(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3627,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3628
export function vlans_unit_3628(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3628,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3629
export function vlans_unit_3629(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3629,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3630
export function vlans_unit_3630(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3630,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3631
export function vlans_unit_3631(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3631,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3632
export function vlans_unit_3632(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3632,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3633
export function vlans_unit_3633(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3633,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3634
export function vlans_unit_3634(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3634,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3635
export function vlans_unit_3635(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3635,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3636
export function vlans_unit_3636(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3636,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3637
export function vlans_unit_3637(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3637,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3638
export function vlans_unit_3638(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3638,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3639
export function vlans_unit_3639(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3639,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3640
export function vlans_unit_3640(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3640,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3641
export function vlans_unit_3641(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3641,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3642
export function vlans_unit_3642(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3642,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3643
export function vlans_unit_3643(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3643,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3644
export function vlans_unit_3644(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3644,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3645
export function vlans_unit_3645(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3645,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3646
export function vlans_unit_3646(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3646,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3647
export function vlans_unit_3647(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3647,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3648
export function vlans_unit_3648(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3648,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3649
export function vlans_unit_3649(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3649,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3650
export function vlans_unit_3650(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3650,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3651
export function vlans_unit_3651(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3651,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3652
export function vlans_unit_3652(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3652,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3653
export function vlans_unit_3653(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3653,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3654
export function vlans_unit_3654(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3654,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3655
export function vlans_unit_3655(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3655,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3656
export function vlans_unit_3656(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3656,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3657
export function vlans_unit_3657(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3657,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3658
export function vlans_unit_3658(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3658,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3659
export function vlans_unit_3659(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3659,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3660
export function vlans_unit_3660(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3660,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3661
export function vlans_unit_3661(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3661,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3662
export function vlans_unit_3662(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3662,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3663
export function vlans_unit_3663(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3663,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3664
export function vlans_unit_3664(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3664,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3665
export function vlans_unit_3665(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3665,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3666
export function vlans_unit_3666(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3666,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3667
export function vlans_unit_3667(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3667,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3668
export function vlans_unit_3668(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3668,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3669
export function vlans_unit_3669(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3669,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3670
export function vlans_unit_3670(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3670,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3671
export function vlans_unit_3671(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3671,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3672
export function vlans_unit_3672(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3672,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3673
export function vlans_unit_3673(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3673,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3674
export function vlans_unit_3674(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3674,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3675
export function vlans_unit_3675(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3675,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3676
export function vlans_unit_3676(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3676,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3677
export function vlans_unit_3677(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3677,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3678
export function vlans_unit_3678(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3678,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3679
export function vlans_unit_3679(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3679,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3680
export function vlans_unit_3680(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3680,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3681
export function vlans_unit_3681(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3681,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3682
export function vlans_unit_3682(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3682,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3683
export function vlans_unit_3683(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3683,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3684
export function vlans_unit_3684(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3684,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3685
export function vlans_unit_3685(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3685,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3686
export function vlans_unit_3686(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3686,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3687
export function vlans_unit_3687(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3687,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3688
export function vlans_unit_3688(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3688,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3689
export function vlans_unit_3689(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3689,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3690
export function vlans_unit_3690(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3690,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3691
export function vlans_unit_3691(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3691,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3692
export function vlans_unit_3692(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3692,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3693
export function vlans_unit_3693(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3693,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3694
export function vlans_unit_3694(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3694,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3695
export function vlans_unit_3695(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3695,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3696
export function vlans_unit_3696(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3696,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3697
export function vlans_unit_3697(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3697,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3698
export function vlans_unit_3698(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3698,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3699
export function vlans_unit_3699(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3699,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3700
export function vlans_unit_3700(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3700,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3701
export function vlans_unit_3701(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3701,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3702
export function vlans_unit_3702(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3702,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3703
export function vlans_unit_3703(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3703,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3704
export function vlans_unit_3704(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3704,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3705
export function vlans_unit_3705(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3705,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3706
export function vlans_unit_3706(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3706,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3707
export function vlans_unit_3707(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3707,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3708
export function vlans_unit_3708(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3708,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3709
export function vlans_unit_3709(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3709,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3710
export function vlans_unit_3710(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3710,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3711
export function vlans_unit_3711(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3711,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3712
export function vlans_unit_3712(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3712,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3713
export function vlans_unit_3713(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3713,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3714
export function vlans_unit_3714(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3714,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3715
export function vlans_unit_3715(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3715,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3716
export function vlans_unit_3716(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3716,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3717
export function vlans_unit_3717(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3717,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3718
export function vlans_unit_3718(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3718,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3719
export function vlans_unit_3719(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3719,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3720
export function vlans_unit_3720(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3720,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3721
export function vlans_unit_3721(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3721,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3722
export function vlans_unit_3722(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3722,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3723
export function vlans_unit_3723(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3723,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3724
export function vlans_unit_3724(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3724,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3725
export function vlans_unit_3725(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3725,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3726
export function vlans_unit_3726(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3726,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3727
export function vlans_unit_3727(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3727,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3728
export function vlans_unit_3728(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3728,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3729
export function vlans_unit_3729(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3729,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3730
export function vlans_unit_3730(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3730,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3731
export function vlans_unit_3731(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3731,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3732
export function vlans_unit_3732(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3732,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3733
export function vlans_unit_3733(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3733,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3734
export function vlans_unit_3734(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3734,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3735
export function vlans_unit_3735(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3735,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3736
export function vlans_unit_3736(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3736,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3737
export function vlans_unit_3737(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3737,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3738
export function vlans_unit_3738(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3738,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3739
export function vlans_unit_3739(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3739,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3740
export function vlans_unit_3740(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3740,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3741
export function vlans_unit_3741(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 3741,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3742
export function vlans_unit_3742(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 3742,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3743
export function vlans_unit_3743(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 3743,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3744
export function vlans_unit_3744(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 3744,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3745
export function vlans_unit_3745(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 3745,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3746
export function vlans_unit_3746(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 3746,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3747
export function vlans_unit_3747(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 3747,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3748
export function vlans_unit_3748(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 3748,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3749
export function vlans_unit_3749(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 3749,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// vlans operational unit 3750
export function vlans_unit_3750(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3750,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 3501; i < 3751; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

