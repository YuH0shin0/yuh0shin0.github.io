"use strict";(()=>{var t=class{#t;constructor(){this.#t=navigator}async isXRSupported(e="inline"){return this.#t.xr===void 0?await Promise.resolve(!1):await this.#t.xr.isSessionSupported(e)}};async function n(){let s=await new t().isXRSupported();document.getElementsByClassName("isSessionSupported")[0].textContent=`${s}`}n();})();
