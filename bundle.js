"use strict";(()=>{var i=window.document;var t=window.navigator;var s=new Map;s.set("inline",null);s.set("immersive-ar",null);s.set("immersive-vr",null);async function l(){let e=i.getElementsByClassName("console-dom").item(0);e.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `;let n=await t.xr.isSessionSupported("inline");e.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${n}
  `;let r=await t.xr.isSessionSupported("immersive-ar");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${r}
  `;let o=await t.xr.isSessionSupported("immersive-vr");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${o}
  `,e.textContent+=`
  xr-spatial-tracking = ${i.featurePolicy.allowsFeature("xr-spatial-tracking",window.origin)}
  `,i.getElementsByClassName("enter").item(0).addEventListener("click",async a=>{if(!a.isTrusted)return;let u=await t.xr.requestSession("immersive-ar",{requiredFeatures:["unbounded"],optionalFeatures:["xr-spatial-tracking"]});e.textContent+=`
    ${u.enabledFeatures}
    `})}l();})();
