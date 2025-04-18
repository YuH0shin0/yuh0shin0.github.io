"use strict";
var Device;
(function (Device) {
    async function isXRSupported(mode = 'inline') {
        const status = await navigator.xr.isSessionSupported(mode);
        return status;
    }
    Device.isXRSupported = isXRSupported;
})(Device || (Device = {}));
