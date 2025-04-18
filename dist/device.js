class Device {
    constructor() { }
    async isXRSupported(mode = 'inline') {
        const status = await navigator.xr.isSessionSupported(mode);
        return status;
    }
}
export { Device };
