navigator.xr.isSessionSupported('inline').then((res) => {
  document.getElementsByClassName('isSessionSupported')[0].textContent = `${res}`;
})
