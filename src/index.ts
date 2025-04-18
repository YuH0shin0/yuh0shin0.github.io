import { Device } from "@/device"
async function run() {
  const device = new Device()
  const status = await device.isXRSupported('inline')
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
}
run()
