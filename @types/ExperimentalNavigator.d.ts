/**
 * WebXR専用の追加機能
 * 
 * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API/Navigator/xr)
 */
declare type ExperimentalNavigator = {
  readonly xr: {
    mode: Global._XRMode
    /**
     * XRがサポートされている事
     * https://www.w3.org/TR/webxr/#applicationflow
     * 
     * @param mode XRMode
     * @returns Promise<boolean>
     */
    readonly isSessionSupported: (mode: Global._XRMode) => Promise<boolean>
    readonly requestSession: (mode: Global._XRMode, optional: {}) => Promise<any>
  }
}
