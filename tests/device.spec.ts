import { test, expect } from '@playwright/test';
import { SupportedDevice, NotSupportedDevice } from './supports';

test('return true if device supports xr', async () => {
  const status = await new SupportedDevice().isXRSupported()
  expect(status).toBe(true)
})

test('return false if device does not supports xr', async () => {
  const status = await new NotSupportedDevice().isXRSupported()
  expect(status).toBe(false)
})
