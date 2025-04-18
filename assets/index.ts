type XRSupportType = 'inline'
type WebXR = {
  readonly xr: {
    // https://www.w3.org/TR/webxr/#xrsessionmode-enum
    readonly isSessionSupported: (mode: XRSupportType) => Promise<boolean>
  }
}

async function getXRSupportStatus(mode: XRSupportType) {
  return await (navigator as (Navigator | unknown) as WebXR).xr.isSessionSupported(mode)
}

function init() {
  const status = getXRSupportStatus('inline')
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
}

init()
