"use strict";(()=>{var i=window.document;var t=window.navigator;var s=new Map;s.set("inline",null);s.set("immersive-ar",null);s.set("immersive-vr",null);async function m(){let e=i.getElementsByClassName("console-dom").item(0);e.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `;let n=await t.xr.isSessionSupported("inline");e.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${n}
  `;let r=await t.xr.isSessionSupported("immersive-ar");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${r}
  `;let o=await t.xr.isSessionSupported("immersive-vr");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${o}
  `;let a=i.featurePolicy.allowsFeature("xr-spatial-tracking","https://yuh0shin0.github.io/");e.textContent+=`
  xr-spatial-tracking = ${a}
  `,i.getElementsByClassName("enter").item(0).addEventListener("click",async u=>{if(!u.isTrusted)return;let l=await t.xr.requestSession("immersive-ar",{requiredFeatures:["viewer"],optionalFeatures:[]});e.textContent+=`
    ${l.enabledFeatures}
    `})}m();})();
