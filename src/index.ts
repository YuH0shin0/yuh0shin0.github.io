import { Device } from "@/device"
async function run() {
  const status = await new Device().isXRSupported()
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
}
run()
