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

/**
 * テスト用の端末
 * XRをサポートする
 */
class SupportedDevice {
    constructor() {}
    async isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
        return await Promise.resolve(true)
    }
}

/**
 * テスト用の端末
 * XRをサポートしない
 */
class NotSupportedDevice {
    constructor() {}
    async isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
        return await Promise.resolve(false)
    }
}

export {Device, SupportedDevice, NotSupportedDevice}
