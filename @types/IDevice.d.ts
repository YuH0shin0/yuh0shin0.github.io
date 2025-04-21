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
  requestSession(mode: App.XRMode,requiredFeatures: string[]): Promise<any>
}
