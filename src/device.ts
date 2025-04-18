/**
 * 端末固有の機能
 */
namespace Device {
    /**
     * 端末が機能をサポートしているか
     *
     * [Reference W3C](https://www.w3.org/TR/webxr/#xrsessionmode-enum)
     */
    export async function isXRSupported(mode: XRMode = 'inline'): Promise<boolean> {
        const status = await (navigator as unknown as Navigator).xr.isSessionSupported(mode)
        return status
    }
}
