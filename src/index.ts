(navigator as unknown as AppNavigator).xr.isSessionSupported('inline').then((status) => {
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${status}`
}).catch((reason: string) => {
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${reason}`
})
