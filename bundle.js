"use strict";(()=>{var s=class{#e;constructor(){this.#e=navigator}requestSession(){return this.#e.xr.requestSession("immersive-ar",{})}async isXRSupported(e="inline"){return this.#e.xr===void 0?await Promise.resolve(!1):await this.#e.xr.isSessionSupported(e)}};async function i(){let t=new s,e=await t.isXRSupported();if(e){document.getElementsByClassName("isSessionSupported")[0].textContent=`${e}`;try{await t.requestSession()}catch(n){document.getElementsByClassName("isSessionSupported")[1].textContent=`${n}`}}}i();})();
