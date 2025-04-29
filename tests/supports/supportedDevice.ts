/**
 * テスト用の端末
 * XRをサポートする
 */
class SupportedDevice implements IDevice {
  // @ts-ignore
  isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
      return Promise.resolve(true)
  }
  async requestSession(mode: App.XRMode, requiredFeatures: string[]): Promise<App.XRSession> {
    throw new Error(`mode: ${mode}, requiredFeatures: ${requiredFeatures} not implemented`)
  }
}

export {SupportedDevice}
