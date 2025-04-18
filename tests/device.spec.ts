import { test, expect } from '@playwright/test';
import { SupportedDevice, NotSupportedDevice } from '@/device';

test('return true if device supports xr', async () => {
  const status = await new SupportedDevice().isXRSupported('inline')
  expect(status).toBe(true)
})

test('return false if device does not supports xr', async () => {
  const status = await new NotSupportedDevice().isXRSupported('inline')
  expect(status).toBe(false)
})
