import{_ as i}from"./preload-helper-101896b7.js";const c=new Set(["Module","__esModule","default","_export_sfc"]);let l={"./TextField":()=>(h("./__federation_expose_TextField-0676f3e7.js").then(e=>Object.keys(e).every(t=>c.has(t))?()=>e.default:()=>e))};const a={},d=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const o=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(r=>{const n=o+r;if(n in a)return;a[n]=!0;const s=document.head.appendChild(document.createElement("link"));s.href=n,s.rel="stylesheet"})};async function h(e){return i(()=>import(e),[])}const u=e=>l[e](),p=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,o])=>{const r=Object.keys(o)[0],n=Object.values(o)[0],s=n.scope||"default";globalThis.__federation_shared__[s]=globalThis.__federation_shared__[s]||{};const _=globalThis.__federation_shared__[s];(_[t]=_[t]||{})[r]=n})};export{d as dynamicLoadingCss,u as get,p as init};
