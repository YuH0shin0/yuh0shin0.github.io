"use strict";(()=>{var s=window.document;var n=window.navigator;function m(r){return!!r.featurePolicy.allowsFeature("xr-spatial-tracking","https://127.0.0.1:3000")}var o=new Map;o.set("inline",null);o.set("immersive-ar",null);o.set("immersive-vr",null);async function c(){let r=s.getElementById("root"),e=s.getElementsByClassName("console-dom").item(0);e.textContent+=`
  \u6A5F\u80FD\u78BA\u8A8D
  `,e.textContent+=`
  xr-spatial-tracking = ${m(r)}
  `;let a=await n.xr.isSessionSupported("inline");e.textContent+=`
  navigator.xr.isSessionSupported('inline') = ${a}
  `;let u=await n.xr.isSessionSupported("immersive-ar");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-ar') = ${u}
  `;let l=await n.xr.isSessionSupported("immersive-vr");e.textContent+=`
  navigator.xr.isSessionSupported('immersive-vr') = ${l}
  `,s.getElementsByClassName("enter inline").item(0).addEventListener("click",async i=>{if(i.isTrusted)try{let t=await n.xr.requestSession("inline",{requiredFeatures:["unbounded"],optionalFeatures:[]});e.textContent+=`
      ${JSON.stringify(t)}
      `}catch(t){e.textContent+=`
      ${JSON.stringify(t)}`}}),s.getElementsByClassName("enter ar").item(0).addEventListener("click",async i=>{if(i.isTrusted)try{let t=await n.xr.requestSession("immersive-ar",{requiredFeatures:["unbounded"],optionalFeatures:[]});e.textContent+=`
      ${JSON.stringify(t)}
      `}catch(t){e.textContent+=`
      ${JSON.stringify(t)}`}}),s.getElementsByClassName("enter vr").item(0).addEventListener("click",async i=>{if(i.isTrusted)try{let t=await n.xr.requestSession("immersive-vr",{requiredFeatures:["unbounded"],optionalFeatures:[]});e.textContent+=`
      ${JSON.stringify(t)}
      `}catch(t){e.textContent+=`
      ${JSON.stringify(t)}
      `}})}c();})();
