/**
 * グローバルの名前空間にて使用するWebAPI
 * 
 * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API)
 */
declare namespace Global {
  type _Navigator = Navigator
}

/**
 * XRのモード
 * 
 * [W3C Reference](https://www.w3.org/TR/webxr/#xrsessionmode-enum)
 */
declare type XRMode = 'inline'

/**
 * WebXR専用の追加機能
 * 
 * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API/Navigator/xr)
 */
declare type WebXR = {
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
 * 専用に拡張したNavigator
 */
declare type AppNavigator = Navigator & WebXR
