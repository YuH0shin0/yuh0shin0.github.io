"use strict";(()=>{var s=window.document;var t=window.navigator;function l(i){return!!i.featurePolicy.allowsFeature("xr-spatial-tracking","https://127.0.0.1:3000")}var n=new Map;n.set("inline",null);n.set("immersive-ar",null);n.set("immersive-vr",null);async function c(){let i=s.getElementById("root"),e=s.getElementsByClassName("console-dom").item(0);e.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `,e.textContent+=`
  xr-spatial-tracking = ${l(i)}
  `;let r=await t.xr.isSessionSupported("inline");e.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${r}
  `;let o=await t.xr.isSessionSupported("immersive-ar");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${o}
  `;let a=await t.xr.isSessionSupported("immersive-vr");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${a}
  `,s.getElementsByClassName("enter ar").item(0).addEventListener("click",async u=>{if(!u.isTrusted)return;let m=await t.xr.requestSession("immersive-ar",{requiredFeatures:["viewer"],optionalFeatures:[]});e.textContent+=`
    ${m.enabledFeatures}
    `})}c();})();
