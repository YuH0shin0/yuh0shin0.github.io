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
define("index", ["require", "exports", "device"], function (require, exports, device_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function init() {
        const device = new device_1.Device();
        device.isXRSupported().then((status) => {
            document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`;
        }).catch((reason) => {
            document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`;
        });
    }
    init();
});
