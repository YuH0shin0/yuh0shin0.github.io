/**
 * 端末
 */
declare interface IDevice {
  #navigator: AppNavigator
  /**
   * XRがサポートされている事
   * 
   * @param mode XRMode
   */
  isXRSupported(mode: Required<XRMode> = 'inline'): Promise<boolean>
}
