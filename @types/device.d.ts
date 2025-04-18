/**
 * 端末
 */
declare class Device {
  /**
   * XRがサポートされている事
   * 
   * @param mode XRMode
   */
  isXRSupported(mode: XRMode): Promise<boolean>
}
