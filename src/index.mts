import {Device} from './device.mjs'

function init() {
  const device = new Device()
  device.isXRSupported().then((status) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
  }).catch((reason: string) => {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`
  })
}

init()
