"use strict";(()=>{var n=window.document;var t=window.navigator;async function c(){let e=n.getElementsByClassName("console-dom").item(0);e.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `;let s=await t.xr.isSessionSupported("inline");e.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${s}
  `;let i=await t.xr.isSessionSupported("immersive-ar");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${i}
  `;let a=await t.xr.isSessionSupported("immersive-vr");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${a}
  `,n.querySelectorAll(".enter > button").forEach(o=>{let r=o.classList.toString();o.textContent=r,o.addEventListener("click",async m=>{if(!m.isTrusted)return;let u=await t.xr.requestSession("immersive-ar",{requiredFeatures:[r],optionalFeatures:[]});e.textContent+=`
      ${u.enabledFeatures}
      `})})}c();})();
