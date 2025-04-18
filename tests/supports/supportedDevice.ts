/**
 * テスト用の端末
 * XRをサポートする
 */
class SupportedDevice implements IDevice {
  // @ts-ignore
  isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
      return Promise.resolve(true)
  }
}

export {SupportedDevice}
