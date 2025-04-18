/**
 * テスト用の端末
 * XRをサポートしない
 */
class NotSupportedDevice implements IDevice {
  // @ts-ignore
  isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
      return Promise.resolve(false)
  }
}

export {NotSupportedDevice}
