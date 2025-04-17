type WebXR = {
  readonly xr: {
    // https://www.w3.org/TR/webxr/#xrsessionmode-enum
    readonly isSessionSupported: (mode: 'inline') => Promise<boolean>
  }
}

(navigator as unknown as WebXR).xr.isSessionSupported("inline").then((status: boolean) => {
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
})
