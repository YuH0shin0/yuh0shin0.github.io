/**
 * 端末固有の機能
 */
class Device implements IDevice {
    #navigator: AppNavigator
    constructor() {
        this.#navigator = navigator as unknown as AppNavigator
    }
    /**
     * 端末が機能をサポートしているか
     *
     * [Reference W3C](https://www.w3.org/TR/webxr/#xrsessionmode-enum)
     */
    async isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
        if (this.#navigator === undefined) {
            return Promise.resolve(false)
        }
        const status = await this.#navigator.xr.isSessionSupported(mode)
        return status
    }
}

export {Device}
