"use strict";(()=>{var n=class{#e;constructor(){this.#e=navigator}requestSession(s,i={}){return this.#e.xr.requestSession(s,i)}async isXRSupported(s="inline"){return this.#e.xr===void 0?await Promise.resolve(!1):await this.#e.xr.isSessionSupported(s)}};async function r(){let t=new n;try{let e=await t.isXRSupported();document.getElementsByClassName("isSessionSupported inline")[0].textContent=`${e}`}catch(e){document.getElementsByClassName("isSessionSupported inline")[0].textContent=`${e}`}try{let e=await t.isXRSupported("immersive-ar");document.getElementsByClassName("isSessionSupported immersive-ar")[0].textContent=`${e}`}catch(e){document.getElementsByClassName("isSessionSupported immersive-ar")[0].textContent=`${e}`}try{let e=await t.isXRSupported("immersive-vr");document.getElementsByClassName("isSessionSupported immersive-vr")[0].textContent=`${e}`}catch(e){document.getElementsByClassName("isSessionSupported immersive-vr")[0].textContent=`${e}`}document.getElementsByClassName("enter inline")[0].addEventListener("click",async()=>{let e=await t.requestSession("inline");document.getElementsByClassName("isSessionSupported inline")[0].textContent=`${e}`,document.getElementsByClassName("enter inline status")[0].textContent="clicked"}),document.getElementsByClassName("enter immersive-ar")[0].addEventListener("click",async()=>{let e=await t.requestSession("immersive-ar");document.getElementsByClassName("isSessionSupported immersive-vr")[0].textContent=`${e}`,document.getElementsByClassName("enter immersive-ar status")[0].textContent="clicked"}),document.getElementsByClassName("enter immersive-ar depth-sensing")[0].addEventListener("click",async()=>{let e=await t.requestSession("immersive-ar",{requiredFeatures:["depth-sensing"],depthSensing:{usagePreference:["cpu-optimized","gpu-optimized"],dataFormatPreference:["luminance-alpha","float32"]}});document.getElementsByClassName("isSessionSupported immersive-vr depth-sensing")[0].textContent=`${e}`,document.getElementsByClassName("enter immersive-ar depth-sensing status")[0].textContent="clicked"})}r();})();
