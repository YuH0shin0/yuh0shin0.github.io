import { Device } from './device.cjs';
function init() {
    const device = new Device();
    device.isXRSupported().then((status) => {
        document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`;
    }).catch((reason) => {
        document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`;
    });
}
init();
