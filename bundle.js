"use strict";(()=>{var t=window.document;var e=window.navigator;var n=new Map;n.set("inline",null);n.set("immersive-ar",null);n.set("immersive-vr",null);async function m(){let i=t.getElementsByClassName("console-dom").item(0);i.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `;let s=await e.xr.isSessionSupported("inline");i.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${s}
  `;let r=await e.xr.isSessionSupported("immersive-ar");i.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${r}
  `;let o=await e.xr.isSessionSupported("immersive-vr");i.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${o}
  `,t.getElementsByClassName("enter").item(0).addEventListener("click",async a=>{if(!a.isTrusted)return;let u=await e.xr.requestSession("immersive-ar",{requiredFeatures:["depth-sensing"],depthSensing:{usagePreference:["cpu-optimized","gpu-optimized"],dataFormatPreference:["luminance-alpha","float32"]}});i.textContent+=`
    ${u.enabledFeatures}
    `})}m();})();
