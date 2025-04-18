/**
 * 端末固有の機能
 */
class Device {
    constructor() {}
    /**
     * 端末が機能をサポートしているか
     *
     * [Reference W3C](https://www.w3.org/TR/webxr/#xrsessionmode-enum)
     */
    async isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
        const status = await (navigator as unknown as AppNavigator).xr.isSessionSupported(mode)
        return status
    }
}
export {Device}
