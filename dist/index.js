"use strict";
function init() {
    Device.isXRSupported().then((status) => {
        document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`;
    }).catch((reason) => {
        document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`;
    });
}
init();
