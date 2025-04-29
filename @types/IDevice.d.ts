/**
 * 端末
 */
declare interface IDevice {
  #navigator: App.Navigator
  /**
   * XRがサポートされている事
   * 
   * @param mode XRMode
   */
  isXRSupported(mode: App.XRMode = 'inline'): Promise<boolean>

  /**
   * XRセッションの開始リクエストを作成する
   * @param mode 
   * @param requiredFeatures 
   */
  requestSession(mode: App.XRMode,requiredFeatures: string[]): Promise<App.XRSession>
}
