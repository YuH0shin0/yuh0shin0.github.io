import { Device } from "@/device"
async function run() {
  try {
    const status = await new Device().isXRSupported()
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
  } catch (e) {
    document.getElementsByClassName('isSessionSupported')[0].textContent = `${e}`
  }
}
run()
