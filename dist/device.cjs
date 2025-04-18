"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
class Device {
    constructor() { }
    async isXRSupported(mode = 'inline') {
        const status = await navigator.xr.isSessionSupported(mode);
        return status;
    }
}
exports.Device = Device;
