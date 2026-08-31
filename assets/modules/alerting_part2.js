/**
 * NetSphere alerting service module
 * Configurable service boundaries, validation hooks and operational helpers.
 */

export const MODULE_NAME = 'alerting';

// alerting operational unit 2751
export function alerting_unit_2751(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2751,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2752
export function alerting_unit_2752(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2752,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2753
export function alerting_unit_2753(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2753,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2754
export function alerting_unit_2754(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2754,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2755
export function alerting_unit_2755(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2755,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2756
export function alerting_unit_2756(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2756,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2757
export function alerting_unit_2757(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2757,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2758
export function alerting_unit_2758(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2758,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2759
export function alerting_unit_2759(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2759,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2760
export function alerting_unit_2760(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2760,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2761
export function alerting_unit_2761(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2761,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2762
export function alerting_unit_2762(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2762,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2763
export function alerting_unit_2763(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2763,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2764
export function alerting_unit_2764(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2764,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2765
export function alerting_unit_2765(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2765,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2766
export function alerting_unit_2766(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2766,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2767
export function alerting_unit_2767(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2767,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2768
export function alerting_unit_2768(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2768,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2769
export function alerting_unit_2769(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2769,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2770
export function alerting_unit_2770(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2770,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2771
export function alerting_unit_2771(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2771,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2772
export function alerting_unit_2772(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2772,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2773
export function alerting_unit_2773(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2773,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2774
export function alerting_unit_2774(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2774,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2775
export function alerting_unit_2775(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2775,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2776
export function alerting_unit_2776(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2776,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2777
export function alerting_unit_2777(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2777,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2778
export function alerting_unit_2778(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2778,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2779
export function alerting_unit_2779(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2779,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2780
export function alerting_unit_2780(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2780,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2781
export function alerting_unit_2781(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2781,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2782
export function alerting_unit_2782(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2782,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2783
export function alerting_unit_2783(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2783,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2784
export function alerting_unit_2784(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2784,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2785
export function alerting_unit_2785(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2785,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2786
export function alerting_unit_2786(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2786,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2787
export function alerting_unit_2787(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2787,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2788
export function alerting_unit_2788(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2788,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2789
export function alerting_unit_2789(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2789,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2790
export function alerting_unit_2790(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2790,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2791
export function alerting_unit_2791(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2791,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2792
export function alerting_unit_2792(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2792,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2793
export function alerting_unit_2793(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2793,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2794
export function alerting_unit_2794(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2794,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2795
export function alerting_unit_2795(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2795,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2796
export function alerting_unit_2796(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2796,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2797
export function alerting_unit_2797(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2797,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2798
export function alerting_unit_2798(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2798,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2799
export function alerting_unit_2799(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2799,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2800
export function alerting_unit_2800(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2800,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2801
export function alerting_unit_2801(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2801,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2802
export function alerting_unit_2802(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2802,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2803
export function alerting_unit_2803(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2803,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2804
export function alerting_unit_2804(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2804,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2805
export function alerting_unit_2805(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2805,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2806
export function alerting_unit_2806(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2806,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2807
export function alerting_unit_2807(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2807,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2808
export function alerting_unit_2808(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2808,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2809
export function alerting_unit_2809(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2809,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2810
export function alerting_unit_2810(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2810,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2811
export function alerting_unit_2811(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2811,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2812
export function alerting_unit_2812(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2812,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2813
export function alerting_unit_2813(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2813,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2814
export function alerting_unit_2814(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2814,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2815
export function alerting_unit_2815(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2815,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2816
export function alerting_unit_2816(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2816,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2817
export function alerting_unit_2817(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2817,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2818
export function alerting_unit_2818(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2818,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2819
export function alerting_unit_2819(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2819,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2820
export function alerting_unit_2820(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2820,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2821
export function alerting_unit_2821(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2821,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2822
export function alerting_unit_2822(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2822,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2823
export function alerting_unit_2823(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2823,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2824
export function alerting_unit_2824(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2824,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2825
export function alerting_unit_2825(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2825,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2826
export function alerting_unit_2826(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2826,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2827
export function alerting_unit_2827(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2827,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2828
export function alerting_unit_2828(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2828,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2829
export function alerting_unit_2829(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2829,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2830
export function alerting_unit_2830(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2830,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2831
export function alerting_unit_2831(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2831,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2832
export function alerting_unit_2832(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2832,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2833
export function alerting_unit_2833(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2833,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2834
export function alerting_unit_2834(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2834,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2835
export function alerting_unit_2835(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2835,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2836
export function alerting_unit_2836(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2836,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2837
export function alerting_unit_2837(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2837,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2838
export function alerting_unit_2838(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2838,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2839
export function alerting_unit_2839(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2839,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2840
export function alerting_unit_2840(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2840,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2841
export function alerting_unit_2841(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2841,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2842
export function alerting_unit_2842(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2842,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2843
export function alerting_unit_2843(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2843,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2844
export function alerting_unit_2844(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2844,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2845
export function alerting_unit_2845(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2845,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2846
export function alerting_unit_2846(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2846,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2847
export function alerting_unit_2847(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2847,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2848
export function alerting_unit_2848(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2848,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2849
export function alerting_unit_2849(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2849,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2850
export function alerting_unit_2850(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2850,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2851
export function alerting_unit_2851(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2851,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2852
export function alerting_unit_2852(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2852,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2853
export function alerting_unit_2853(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2853,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2854
export function alerting_unit_2854(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2854,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2855
export function alerting_unit_2855(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2855,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2856
export function alerting_unit_2856(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2856,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2857
export function alerting_unit_2857(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2857,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2858
export function alerting_unit_2858(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2858,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2859
export function alerting_unit_2859(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2859,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2860
export function alerting_unit_2860(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2860,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2861
export function alerting_unit_2861(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2861,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2862
export function alerting_unit_2862(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2862,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2863
export function alerting_unit_2863(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2863,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2864
export function alerting_unit_2864(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2864,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2865
export function alerting_unit_2865(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2865,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2866
export function alerting_unit_2866(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2866,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2867
export function alerting_unit_2867(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2867,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2868
export function alerting_unit_2868(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2868,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2869
export function alerting_unit_2869(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2869,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2870
export function alerting_unit_2870(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2870,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2871
export function alerting_unit_2871(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2871,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2872
export function alerting_unit_2872(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2872,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2873
export function alerting_unit_2873(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2873,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2874
export function alerting_unit_2874(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2874,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2875
export function alerting_unit_2875(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2875,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2876
export function alerting_unit_2876(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2876,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2877
export function alerting_unit_2877(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2877,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2878
export function alerting_unit_2878(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2878,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2879
export function alerting_unit_2879(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2879,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2880
export function alerting_unit_2880(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2880,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2881
export function alerting_unit_2881(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2881,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2882
export function alerting_unit_2882(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2882,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2883
export function alerting_unit_2883(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2883,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2884
export function alerting_unit_2884(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2884,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2885
export function alerting_unit_2885(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2885,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2886
export function alerting_unit_2886(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2886,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2887
export function alerting_unit_2887(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2887,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2888
export function alerting_unit_2888(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2888,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2889
export function alerting_unit_2889(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2889,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2890
export function alerting_unit_2890(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2890,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2891
export function alerting_unit_2891(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2891,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2892
export function alerting_unit_2892(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2892,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2893
export function alerting_unit_2893(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2893,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2894
export function alerting_unit_2894(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2894,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2895
export function alerting_unit_2895(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2895,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2896
export function alerting_unit_2896(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2896,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2897
export function alerting_unit_2897(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2897,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2898
export function alerting_unit_2898(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2898,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2899
export function alerting_unit_2899(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2899,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2900
export function alerting_unit_2900(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2900,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2901
export function alerting_unit_2901(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2901,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2902
export function alerting_unit_2902(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2902,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2903
export function alerting_unit_2903(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2903,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2904
export function alerting_unit_2904(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2904,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2905
export function alerting_unit_2905(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2905,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2906
export function alerting_unit_2906(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2906,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2907
export function alerting_unit_2907(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2907,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2908
export function alerting_unit_2908(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2908,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2909
export function alerting_unit_2909(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2909,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2910
export function alerting_unit_2910(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2910,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2911
export function alerting_unit_2911(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2911,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2912
export function alerting_unit_2912(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2912,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2913
export function alerting_unit_2913(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2913,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2914
export function alerting_unit_2914(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2914,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2915
export function alerting_unit_2915(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2915,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2916
export function alerting_unit_2916(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2916,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2917
export function alerting_unit_2917(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2917,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2918
export function alerting_unit_2918(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2918,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2919
export function alerting_unit_2919(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2919,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2920
export function alerting_unit_2920(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2920,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2921
export function alerting_unit_2921(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2921,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2922
export function alerting_unit_2922(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2922,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2923
export function alerting_unit_2923(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2923,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2924
export function alerting_unit_2924(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2924,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2925
export function alerting_unit_2925(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2925,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2926
export function alerting_unit_2926(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2926,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2927
export function alerting_unit_2927(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2927,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2928
export function alerting_unit_2928(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2928,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2929
export function alerting_unit_2929(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2929,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2930
export function alerting_unit_2930(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2930,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2931
export function alerting_unit_2931(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2931,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2932
export function alerting_unit_2932(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2932,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2933
export function alerting_unit_2933(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2933,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2934
export function alerting_unit_2934(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2934,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2935
export function alerting_unit_2935(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2935,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2936
export function alerting_unit_2936(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2936,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2937
export function alerting_unit_2937(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2937,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2938
export function alerting_unit_2938(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2938,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2939
export function alerting_unit_2939(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2939,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2940
export function alerting_unit_2940(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2940,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2941
export function alerting_unit_2941(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2941,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2942
export function alerting_unit_2942(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2942,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2943
export function alerting_unit_2943(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2943,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2944
export function alerting_unit_2944(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2944,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2945
export function alerting_unit_2945(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2945,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2946
export function alerting_unit_2946(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2946,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2947
export function alerting_unit_2947(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2947,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2948
export function alerting_unit_2948(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2948,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2949
export function alerting_unit_2949(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2949,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2950
export function alerting_unit_2950(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2950,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2951
export function alerting_unit_2951(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2951,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2952
export function alerting_unit_2952(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2952,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2953
export function alerting_unit_2953(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2953,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2954
export function alerting_unit_2954(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2954,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2955
export function alerting_unit_2955(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2955,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2956
export function alerting_unit_2956(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2956,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2957
export function alerting_unit_2957(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2957,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2958
export function alerting_unit_2958(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2958,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2959
export function alerting_unit_2959(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2959,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2960
export function alerting_unit_2960(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2960,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2961
export function alerting_unit_2961(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2961,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2962
export function alerting_unit_2962(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2962,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2963
export function alerting_unit_2963(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2963,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2964
export function alerting_unit_2964(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2964,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2965
export function alerting_unit_2965(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2965,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2966
export function alerting_unit_2966(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2966,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2967
export function alerting_unit_2967(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2967,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2968
export function alerting_unit_2968(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2968,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2969
export function alerting_unit_2969(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2969,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2970
export function alerting_unit_2970(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2970,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2971
export function alerting_unit_2971(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2971,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2972
export function alerting_unit_2972(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2972,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2973
export function alerting_unit_2973(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2973,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2974
export function alerting_unit_2974(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2974,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2975
export function alerting_unit_2975(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2975,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2976
export function alerting_unit_2976(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2976,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2977
export function alerting_unit_2977(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2977,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2978
export function alerting_unit_2978(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2978,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2979
export function alerting_unit_2979(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2979,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2980
export function alerting_unit_2980(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2980,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2981
export function alerting_unit_2981(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2981,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2982
export function alerting_unit_2982(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2982,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2983
export function alerting_unit_2983(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2983,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2984
export function alerting_unit_2984(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2984,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2985
export function alerting_unit_2985(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2985,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2986
export function alerting_unit_2986(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2986,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2987
export function alerting_unit_2987(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2987,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2988
export function alerting_unit_2988(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2988,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2989
export function alerting_unit_2989(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2989,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2990
export function alerting_unit_2990(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 2990,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2991
export function alerting_unit_2991(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 2;
  return {
    module: MODULE_NAME,
    index: 2991,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2992
export function alerting_unit_2992(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 3;
  return {
    module: MODULE_NAME,
    index: 2992,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2993
export function alerting_unit_2993(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 4;
  return {
    module: MODULE_NAME,
    index: 2993,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2994
export function alerting_unit_2994(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 5;
  return {
    module: MODULE_NAME,
    index: 2994,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2995
export function alerting_unit_2995(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 6;
  return {
    module: MODULE_NAME,
    index: 2995,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2996
export function alerting_unit_2996(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 7;
  return {
    module: MODULE_NAME,
    index: 2996,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2997
export function alerting_unit_2997(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 8;
  return {
    module: MODULE_NAME,
    index: 2997,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2998
export function alerting_unit_2998(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 9;
  return {
    module: MODULE_NAME,
    index: 2998,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 2999
export function alerting_unit_2999(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 10;
  return {
    module: MODULE_NAME,
    index: 2999,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

// alerting operational unit 3000
export function alerting_unit_3000(context) {
  const config = context?.config || {};
  const enabled = config.enabled !== false;
  const site = config.site || 'default';
  const priority = Number(config.priority) || 1;
  return {
    module: MODULE_NAME,
    index: 3000,
    enabled,
    site,
    priority,
    status: enabled ? 'ready' : 'disabled'
  };
}

export function listUnits() {
  const out = [];
  for (let i = 2751; i < 3001; i++) {
    out.push({ module: MODULE_NAME, index: i });
  }
  return out;
}

export const UNIT_COUNT = 250;

