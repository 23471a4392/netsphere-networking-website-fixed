import { describe, it, expect } from '@jest/globals';
import { required, isIp, isMac, validateDevice, validateVlan } from '../assets/utils/validators.js';

describe('NetSphere validators', () => {
  it('required', () => {
    expect(required('')).toBe(false);
    expect(required('core-sw')).toBe(true);
  });
  it('isIp', () => {
    expect(isIp('10.0.0.1')).toBe(true);
    expect(isIp('bad')).toBe(false);
  });
  it('isMac', () => {
    expect(isMac('00:11:22:33:44:55')).toBe(true);
    expect(isMac('xx')).toBe(false);
  });
  it('validateDevice', () => {
    const e = validateDevice({ name: '', ip: 'x' });
    expect(e.name).toBeTruthy();
    expect(e.ip).toBeTruthy();
  });
  it('validateVlan', () => {
    expect(validateVlan({ vlanId: 0, name: '' }).vlanId).toBeTruthy();
    expect(validateVlan({ vlanId: 100, name: 'Users' })).toEqual({});
  });
});
// coverage note
