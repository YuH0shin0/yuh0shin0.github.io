"use strict";
navigator.xr.isSessionSupported('inline').then((status) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`;
}).catch((reason) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`;
});
