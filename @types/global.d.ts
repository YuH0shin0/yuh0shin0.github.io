/**
 * ブラウザの仕様
 * 
 * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API)
 */
declare namespace Global {
  /**
   * グローバルの名前空間にて使用するWebAPI
   * 
   * [MDN Reference](https://developer.mozilla.org/ja/docs/Web/API)
   */
  declare type _Navigator = Navigator
  /**
   * XRのモード
   * 
   * [W3C Reference](https://www.w3.org/TR/webxr/#xrsessionmode-enum)
   */
  declare type _XRMode = 'inline' | 'immersive-ar' | 'immersive-vr'
}
