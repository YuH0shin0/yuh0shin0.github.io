import { Device } from "@/device"
import { Notification } from "./Notification"

/**
 * 初期化
 */
async function run() {
  const device = new Device()
  const inlineNotificationDom = document.getElementsByClassName('isSessionSupported inline')[0] as HTMLElement
  const inlineNotification = new Notification(inlineNotificationDom, 'inline')
  await inlineNotification.response(device.isXRSupported('inline'))

  const immersiveArNotificationDom = document.getElementsByClassName('isSessionSupported immersive-ar')[0] as HTMLElement
  const immersiveArNotification = new Notification(immersiveArNotificationDom, 'immersive-ar')
  await immersiveArNotification.response(device.isXRSupported('immersive-ar'))

  const immersiveVrNotificationDom = document.getElementsByClassName('isSessionSupported immersive-vr')[0] as HTMLElement
  const immersiveVrNotification = new Notification(immersiveVrNotificationDom, 'immersive-vr')
  await immersiveVrNotification.response(device.isXRSupported('immersive-vr'))
}
run()
