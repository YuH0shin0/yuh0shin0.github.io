/**
 * 端末の名前空間
 */
declare namespace Device {

  /**
   * XRのモード
   * 
   * [W3C Reference](https://www.w3.org/TR/webxr/#xrsessionmode-enum
   */
  type XRMode = 'inline'

  /**
   * WebXR専用の追加機能
   * 
   * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API/Navigator/xr)
   */
  type WebXR = {
    readonly xr: {
      /**
       * XRがサポートされている事
       * 
       * @param mode XRMode
       * @returns Promise<boolean>
       */
      readonly isSessionSupported: (mode: XRMode) => Promise<boolean>
    }
  }
  /**
   * WebXRは実験的な機能を含めるため、拡張機能として扱う
   * 
   * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API/Navigator/xr)
   */
  type Navigator = Global._Navigator & WebXR
}
