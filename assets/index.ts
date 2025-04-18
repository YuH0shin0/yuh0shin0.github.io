type XRMode = 'inline'
type WebXR = {
  readonly xr: {
    // https://www.w3.org/TR/webxr/#xrsessionmode-enum
    readonly isSessionSupported: (mode: XRMode) => Promise<boolean>
  }
}

async function getXRSupportStatus(mode: XRMode): Promise<boolean> {
  return await (navigator as (Navigator | unknown) as WebXR).xr.isSessionSupported(mode)
}

async function init() {
  const status = await getXRSupportStatus('inline')
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
}

init()
