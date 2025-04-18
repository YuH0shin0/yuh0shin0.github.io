"use strict";
define("device", ["require", "exports"], function (require, exports) {
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
});
navigator.xr.isSessionSupported('inline').then((status) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`;
}).catch((reason) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`;
});
