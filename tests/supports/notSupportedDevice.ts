/**
 * テスト用の端末
 * XRをサポートしない
 */
class NotSupportedDevice implements IDevice {
  // @ts-ignore
  isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
      return Promise.resolve(false)
  }
  async requestSession(mode: App.XRMode, requiredFeatures: string[]): Promise<App.XRSession> {
    throw new Error(`mode: ${mode}, requiredFeatures: ${requiredFeatures} not implemented`)
  }
}

export {NotSupportedDevice}
