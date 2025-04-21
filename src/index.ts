import { Device } from "@/device"
async function run() {
  const device = new Device()
  try {
    const inline: Awaited<boolean> = await device.isXRSupported()
    document.getElementsByClassName('isSessionSupported inline')[0].textContent = `${inline}`
  } catch (e) {
    document.getElementsByClassName('isSessionSupported inline')[0].textContent = `${e}`
  }
  try {
    const immersiveAr = await device.isXRSupported('immersive-ar')
    document.getElementsByClassName('isSessionSupported immersive-ar')[0].textContent = `${immersiveAr}`
  } catch (e) {
    document.getElementsByClassName('isSessionSupported immersive-ar')[0].textContent = `${e}`
  }
  try {
    const immersiveVr = await device.isXRSupported('immersive-vr')
    document.getElementsByClassName('isSessionSupported immersive-vr')[0].textContent = `${immersiveVr}`
  } catch (e) {
    document.getElementsByClassName('isSessionSupported immersive-vr')[0].textContent = `${e}`
  }
  const btnInline = document.getElementsByClassName('enter inline')[0] as HTMLButtonElement
  btnInline.addEventListener('click', async () => {
    const session = await device.requestSession('inline')
    document.getElementsByClassName('isSessionSupported inline')[0].textContent = `${session}`
    document.getElementsByClassName('enter inline status')[0].textContent = 'clicked'
  })

  const btnImmersiveAr = document.getElementsByClassName('enter immersive-ar')[0] as HTMLButtonElement
  btnImmersiveAr.addEventListener('click', async () => {
    const session = await device.requestSession('immersive-ar')
    document.getElementsByClassName('isSessionSupported immersive-vr')[0].textContent = `${session}`
    document.getElementsByClassName('enter immersive-ar status')[0].textContent = 'clicked'
  })
  const btnWithDepthSensing = document.getElementsByClassName('enter immersive-ar depth-sensing')[0] as HTMLButtonElement
  btnWithDepthSensing.addEventListener('click', async () => {
    const session = await device.requestSession('immersive-ar',{
      requiredFeatures: ["depth-sensing"],
      depthSensing: {
        usagePreference: ["cpu-optimized", "gpu-optimized"],
        dataFormatPreference: ["luminance-alpha", "float32"],
      },
    })
    document.getElementsByClassName('isSessionSupported immersive-vr depth-sensing')[0].textContent = `${session}`
    document.getElementsByClassName('enter immersive-ar depth-sensing status')[0].textContent = 'clicked'
  })

}
run()
