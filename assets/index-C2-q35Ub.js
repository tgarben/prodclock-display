(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=()=>{};var qc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},tp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,g=(s&3)<<4|u>>4;let v=(u&15)<<2|d>>6,R=d&63;l||(R=64,a||(v=64)),r.push(t[p],t[g],t[v],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ml(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||g==null)throw new np;const v=s<<2|u>>4;if(r.push(v),d!==64){const R=u<<4&240|d>>2;if(r.push(R),g!==64){const P=d<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rp=function(n){const e=Ml(n);return Ll.encodeByteArray(e,!0)},Si=function(n){return rp(n).replace(/\./g,"")},xl=function(n){try{return Ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=()=>ip().__FIREBASE_DEFAULTS__,op=()=>{if(typeof process>"u"||typeof qc>"u")return;const n=qc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ap=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xl(n[1]);return e&&JSON.parse(e)},Ki=()=>{try{return ep()||sp()||op()||ap()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fl=n=>{var e,t;return(t=(e=Ki())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cp=n=>{const e=Fl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ul=()=>{var n;return(n=Ki())===null||n===void 0?void 0:n.config},$l=n=>{var e;return(e=Ki())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Si(JSON.stringify(t)),Si(JSON.stringify(a)),""].join(".")}const hr={};function hp(){const n={prod:[],emulator:[]};for(const e of Object.keys(hr))hr[e]?n.emulator.push(e):n.prod.push(e);return n}function dp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let zc=!1;function jl(n,e){if(typeof window>"u"||typeof document>"u"||!Ln(window.location.host)||hr[n]===e||hr[n]||zc)return;hr[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=hp().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,R){v.setAttribute("width","24"),v.setAttribute("id",R),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{zc=!0,a()},v}function p(v,R){v.setAttribute("id",R),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=dp(r),R=t("text"),P=document.getElementById(R)||document.createElement("span"),V=t("learnmore"),D=document.getElementById(V)||document.createElement("a"),z=t("preprendIcon"),F=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const j=v.element;u(j),p(D,V);const Y=d();l(F,z),j.append(F,P,D,Y),document.body.appendChild(j)}s?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function pp(){var n;const e=(n=Ki())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yp(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vp(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tp(){try{return typeof indexedDB=="object"}catch{return!1}}function Ep(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ip,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?wp(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new pt(i,u,r)}}function wp(n,e){return n.replace(Ap,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function Rp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Hc(s)&&Hc(a)){if(!tn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Hc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sp(n,e){const t=new bp(n,e);return t.subscribe.bind(t)}class bp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=zs),i.error===void 0&&(i.error=zs),i.complete===void 0&&(i.complete=zs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function zs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new up;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dp(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kp(n){return n===Xt?void 0:n}function Dp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Np={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Op=G.INFO,Mp={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Lp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Mp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $o{constructor(e){this.name=e,this._logLevel=Op,this._logHandler=Lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const xp=(n,e)=>e.some(t=>n instanceof t);let Gc,Wc;function Fp(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Wc||(Wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ql=new WeakMap,so=new WeakMap,zl=new WeakMap,Hs=new WeakMap,Bo=new WeakMap;function $p(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Rt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ql.set(t,n)}).catch(()=>{}),Bo.set(e,n),e}function Bp(n){if(so.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});so.set(n,e)}let oo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return so.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jp(n){oo=n(oo)}function qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gs(this),e,...t);return zl.set(r,e.sort?e.sort():[e]),Rt(r)}:Up().includes(n)?function(...e){return n.apply(Gs(this),e),Rt(ql.get(this))}:function(...e){return Rt(n.apply(Gs(this),e))}}function zp(n){return typeof n=="function"?qp(n):(n instanceof IDBTransaction&&Bp(n),xp(n,Fp())?new Proxy(n,oo):n)}function Rt(n){if(n instanceof IDBRequest)return $p(n);if(Hs.has(n))return Hs.get(n);const e=zp(n);return e!==n&&(Hs.set(n,e),Bo.set(e,n)),e}const Gs=n=>Bo.get(n);function Hp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=Rt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Rt(a.result),l.oldVersion,l.newVersion,Rt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Gp=["get","getKey","getAll","getAllKeys","count"],Wp=["put","add","delete","clear"],Ws=new Map;function Kc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ws.get(e))return Ws.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Wp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gp.includes(t)))return;const s=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Ws.set(e,s),s}jp(n=>({...n,get:(e,t,r)=>Kc(e,t)||n.get(e,t,r),has:(e,t)=>!!Kc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qp(n){const e=n.getComponent();return e?.type==="VERSION"}const ao="@firebase/app",Qc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new $o("@firebase/app"),Jp="@firebase/app-compat",Yp="@firebase/analytics-compat",Xp="@firebase/analytics",Zp="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",rm="@firebase/database",im="@firebase/data-connect",sm="@firebase/database-compat",om="@firebase/functions",am="@firebase/functions-compat",cm="@firebase/installations",um="@firebase/installations-compat",lm="@firebase/messaging",hm="@firebase/messaging-compat",dm="@firebase/performance",fm="@firebase/performance-compat",pm="@firebase/remote-config",mm="@firebase/remote-config-compat",gm="@firebase/storage",_m="@firebase/storage-compat",ym="@firebase/firestore",vm="@firebase/ai",Tm="@firebase/firestore-compat",Em="firebase",Im="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="[DEFAULT]",wm={[ao]:"fire-core",[Jp]:"fire-core-compat",[Xp]:"fire-analytics",[Yp]:"fire-analytics-compat",[em]:"fire-app-check",[Zp]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[rm]:"fire-rtdb",[im]:"fire-data-connect",[sm]:"fire-rtdb-compat",[om]:"fire-fn",[am]:"fire-fn-compat",[cm]:"fire-iid",[um]:"fire-iid-compat",[lm]:"fire-fcm",[hm]:"fire-fcm-compat",[dm]:"fire-perf",[fm]:"fire-perf-compat",[pm]:"fire-rc",[mm]:"fire-rc-compat",[gm]:"fire-gcs",[_m]:"fire-gcs-compat",[ym]:"fire-fst",[Tm]:"fire-fst-compat",[vm]:"fire-vertex","fire-js":"fire-js",[Em]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Map,Am=new Map,uo=new Map;function Jc(n,e){try{n.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cn(n){const e=n.name;if(uo.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,n);for(const t of bi.values())Jc(t,n);for(const t of Am.values())Jc(t,n);return!0}function jo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new kr("app","Firebase",Rm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=Im;function Hl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:co,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(t||(t=Ul()),!t)throw St.create("no-options");const s=bi.get(i);if(s){if(tn(t,s.options)&&tn(r,s.config))return s;throw St.create("duplicate-app",{appName:i})}const a=new Vp(i);for(const l of uo.values())a.addComponent(l);const u=new Sm(t,r,a);return bi.set(i,u),u}function Gl(n=co){const e=bi.get(n);if(!e&&n===co&&Ul())return Hl();if(!e)throw St.create("no-app",{appName:n});return e}function bt(n,e,t){var r;let i=(r=wm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(u.join(" "));return}Cn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="firebase-heartbeat-database",Pm=1,yr="firebase-heartbeat-store";let Ks=null;function Wl(){return Ks||(Ks=Hp(bm,Pm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yr)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),Ks}async function Cm(n){try{const t=(await Wl()).transaction(yr),r=await t.objectStore(yr).get(Kl(n));return await t.done,r}catch(e){if(e instanceof pt)ut.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e?.message});ut.warn(t.message)}}}async function Yc(n,e){try{const r=(await Wl()).transaction(yr,"readwrite");await r.objectStore(yr).put(e,Kl(n)),await r.done}catch(t){if(t instanceof pt)ut.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t?.message});ut.warn(r.message)}}}function Kl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=1024,Dm=30;class Vm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Om(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Dm){const a=Mm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xc(),{heartbeatsToSend:r,unsentEntries:i}=Nm(this._heartbeatsCache.heartbeats),s=Si(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ut.warn(t),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function Nm(n,e=km){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Zc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Zc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tp()?Ep().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zc(n){return Si(JSON.stringify({version:2,heartbeats:n})).length}function Mm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){Cn(new nn("platform-logger",e=>new Kp(e),"PRIVATE")),Cn(new nn("heartbeat",e=>new Vm(e),"PRIVATE")),bt(ao,Qc,n),bt(ao,Qc,"esm2017"),bt("fire-js","")}Lm("");var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,Ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function _(){}_.prototype=m.prototype,I.D=m.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(T,E,A){for(var y=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)y[$e-2]=arguments[$e];return m.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)T[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)T[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=I.g[0],_=I.g[1],E=I.g[2];var A=I.g[3],y=m+(A^_&(E^A))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=A+(E^m&(_^E))+T[1]+3905402710&4294967295,A=m+(y<<12&4294967295|y>>>20),y=E+(_^A&(m^_))+T[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(m^E&(A^m))+T[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(A^_&(E^A))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=A+(E^m&(_^E))+T[5]+1200080426&4294967295,A=m+(y<<12&4294967295|y>>>20),y=E+(_^A&(m^_))+T[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(m^E&(A^m))+T[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(A^_&(E^A))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=A+(E^m&(_^E))+T[9]+2336552879&4294967295,A=m+(y<<12&4294967295|y>>>20),y=E+(_^A&(m^_))+T[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(m^E&(A^m))+T[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(A^_&(E^A))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=A+(E^m&(_^E))+T[13]+4254626195&4294967295,A=m+(y<<12&4294967295|y>>>20),y=E+(_^A&(m^_))+T[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=_+(m^E&(A^m))+T[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=m+(E^A&(_^E))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(m^_))+T[6]+3225465664&4294967295,A=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(A^m))+T[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^m&(E^A))+T[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^A&(_^E))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(m^_))+T[10]+38016083&4294967295,A=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(A^m))+T[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^m&(E^A))+T[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^A&(_^E))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(m^_))+T[14]+3275163606&4294967295,A=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(A^m))+T[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^m&(E^A))+T[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(E^A&(_^E))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=A+(_^E&(m^_))+T[2]+4243563512&4294967295,A=m+(y<<9&4294967295|y>>>23),y=E+(m^_&(A^m))+T[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=_+(A^m&(E^A))+T[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=m+(_^E^A)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=A+(m^_^E)+T[8]+2272392833&4294967295,A=m+(y<<11&4294967295|y>>>21),y=E+(A^m^_)+T[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^m)+T[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^A)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=A+(m^_^E)+T[4]+1272893353&4294967295,A=m+(y<<11&4294967295|y>>>21),y=E+(A^m^_)+T[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^m)+T[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^A)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=A+(m^_^E)+T[0]+3936430074&4294967295,A=m+(y<<11&4294967295|y>>>21),y=E+(A^m^_)+T[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^m)+T[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(_^E^A)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=A+(m^_^E)+T[12]+3873151461&4294967295,A=m+(y<<11&4294967295|y>>>21),y=E+(A^m^_)+T[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=_+(E^A^m)+T[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=m+(E^(_|~A))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=A+(_^(m|~E))+T[7]+1126891415&4294967295,A=m+(y<<10&4294967295|y>>>22),y=E+(m^(A|~_))+T[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~m))+T[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~A))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=A+(_^(m|~E))+T[3]+2399980690&4294967295,A=m+(y<<10&4294967295|y>>>22),y=E+(m^(A|~_))+T[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~m))+T[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~A))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=A+(_^(m|~E))+T[15]+4264355552&4294967295,A=m+(y<<10&4294967295|y>>>22),y=E+(m^(A|~_))+T[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~m))+T[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=m+(E^(_|~A))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=A+(_^(m|~E))+T[11]+3174756917&4294967295,A=m+(y<<10&4294967295|y>>>22),y=E+(m^(A|~_))+T[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=_+(A^(E|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var _=m-this.blockSize,T=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=_;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<m;)if(T[E++]=I.charCodeAt(A++),E==this.blockSize){i(this,T),E=0;break}}else for(;A<m;)if(T[E++]=I[A++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var _=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=_&255,_/=256;for(this.u(I),I=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)I[_++]=this.g[m]>>>T&255;return I};function s(I,m){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=m(I)}function a(I,m){this.h=m;for(var _=[],T=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;T&&A==m||(_[E]=A,T=!1)}this.g=_}var u={};function l(I){return-128<=I&&128>I?s(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return D(d(-I));for(var m=[],_=1,T=0;I>=_;T++)m[T]=I/_|0,_*=4294967296;return new a(m,0)}function p(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return D(p(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),T=g,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),y=parseInt(I.substring(E,E+A),m);8>A?(A=d(Math.pow(m,A)),T=T.j(A).add(d(y))):(T=T.j(_),T=T.add(d(y)))}return T}var g=l(0),v=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var I=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(V(this))return"-"+D(this).toString(I);for(var m=d(Math.pow(I,6)),_=this,T="";;){var E=Y(_,m).g;_=z(_,E.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=E,P(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=z(this,I),V(I)?-1:P(I)?0:1};function D(I){for(var m=I.g.length,_=[],T=0;T<m;T++)_[T]=~I.g[T];return new a(_,~I.h).add(v)}n.abs=function(){return V(this)?D(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0,E=0;E<=m;E++){var A=T+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);T=y>>>16,A&=65535,y&=65535,_[E]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(D(m))}n.j=function(I){if(P(this)||P(I))return g;if(V(this))return V(I)?D(this).j(D(I)):D(D(this).j(I));if(V(I))return D(this.j(D(I)));if(0>this.l(R)&&0>I.l(R))return d(this.m()*I.m());for(var m=this.g.length+I.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<I.g.length;E++){var A=this.i(T)>>>16,y=this.i(T)&65535,$e=I.i(E)>>>16,zt=I.i(E)&65535;_[2*T+2*E]+=y*zt,F(_,2*T+2*E),_[2*T+2*E+1]+=A*zt,F(_,2*T+2*E+1),_[2*T+2*E+1]+=y*$e,F(_,2*T+2*E+1),_[2*T+2*E+2]+=A*$e,F(_,2*T+2*E+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function F(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function j(I,m){this.g=I,this.h=m}function Y(I,m){if(P(m))throw Error("division by zero");if(P(I))return new j(g,g);if(V(I))return m=Y(D(I),m),new j(D(m.g),D(m.h));if(V(m))return m=Y(I,D(m)),new j(D(m.g),m.h);if(30<I.g.length){if(V(I)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=m;0>=T.l(I);)_=Ce(_),T=Ce(T);var E=ne(_,1),A=ne(T,1);for(T=ne(T,2),_=ne(_,2);!P(T);){var y=A.add(T);0>=y.l(I)&&(E=E.add(_),A=y),T=ne(T,1),_=ne(_,1)}return m=z(I,E.j(m)),new j(E,m)}for(E=g;0<=I.l(m);){for(_=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(_),y=A.j(m);V(y)||0<y.l(I);)_-=T,A=d(_),y=A.j(m);P(A)&&(A=v),E=E.add(A),I=z(I,y)}return new j(E,I)}n.A=function(I){return Y(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&I.i(T);return new a(_,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|I.i(T);return new a(_,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^I.i(T);return new a(_,this.h^I.h)};function Ce(I){for(var m=I.g.length+1,_=[],T=0;T<m;T++)_[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(_,I.h)}function ne(I,m){var _=m>>5;m%=32;for(var T=I.g.length-_,E=[],A=0;A<T;A++)E[A]=0<m?I.i(A+_)>>>m|I.i(A+_+1)<<32-m:I.i(A+_);return new a(E,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ql=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Pt=a}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});var ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jl,ar,Yl,pi,lo,Xl,Zl,eh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ci=="object"&&ci];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var S=h++;return{value:c(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function P(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,S){for(var N=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)N[Z-2]=arguments[Z];return c.prototype[w].apply(f,N)}}function V(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=o.length||0,S=f.length||0;o.length=w+S;for(let N=0;N<S;N++)o[w+N]=f[N]}else o.push(f)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var Ce=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ne(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function I(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let S=0;S<_.length;S++)h=_[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function y(){var o=zn;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,h){const f=zt.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var zt=new z(()=>new Br,o=>o.reset());class Br{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,Ke=!1,zn=new $e,jr=()=>{const o=u.Promise.resolve(void 0);Ht=()=>{o.then(Is)}};var Is=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){A(h)}var c=zt;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Ke=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var ws=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o})();function Gt(o,c){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Ce){e:{try{Y(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ge[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Gt.aa.h.call(this)}}P(Gt,fe);var ge={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),qr=0;function zr(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++qr,this.da=this.fa=!1}function hn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function dn(o){this.src=o,this.g={},this.h=0}dn.prototype.add=function(o,c,h,f,w){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=L(o,c,f,w);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new zr(c,this.src,S,!!f,w),c.fa=h,o.push(c)),c};function k(o,c){var h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=w)&&Array.prototype.splice.call(f,w,1),S&&(hn(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function L(o,c,h,f){for(var w=0;w<o.length;++w){var S=o[w];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return w}return-1}var re="closure_lm_"+(1e6*Math.random()|0),fn={};function As(o,c,h,f,w){if(Array.isArray(c)){for(var S=0;S<c.length;S++)As(o,c[S],h,f,w);return null}return h=Wa(h),o&&o[Wt]?o.K(c,h,d(f)?!!f.capture:!1,w):Hr(o,c,h,!1,f,w)}function Hr(o,c,h,f,w,S){if(!c)throw Error("Invalid event type");var N=d(w)?!!w.capture:!!w,Z=Ss(o);if(Z||(o[re]=Z=new dn(o)),h=Z.add(c,h,f,N,S),h.proxy)return h;if(f=Sf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)ws||(w=N),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(Ga(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Sf(){function o(h){return c.call(o.src,o.listener,h)}const c=bf;return o}function Ha(o,c,h,f,w){if(Array.isArray(c))for(var S=0;S<c.length;S++)Ha(o,c[S],h,f,w);else f=d(f)?!!f.capture:!!f,h=Wa(h),o&&o[Wt]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],h=L(S,h,f,w),-1<h&&(hn(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ss(o))&&(c=o.g[c.toString()],o=-1,c&&(o=L(c,h,f,w)),(h=-1<o?c[o]:null)&&Rs(h))}function Rs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Wt])k(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Ga(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Ss(c))?(k(h,o),h.h==0&&(h.src=null,c[re]=null)):hn(o)}}}function Ga(o){return o in fn?fn[o]:fn[o]="on"+o}function bf(o,c){if(o.da)o=!0;else{c=new Gt(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Rs(o),o=h.call(f,c)}return o}function Ss(o){return o=o[re],o instanceof dn?o:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wa(o){return typeof o=="function"?o:(o[bs]||(o[bs]=function(c){return o.handleEvent(c)}),o[bs])}function Ie(){Qe.call(this),this.i=new dn(this),this.M=this,this.F=null}P(Ie,Qe),Ie.prototype[Wt]=!0,Ie.prototype.removeEventListener=function(o,c,h,f){Ha(this,o,c,h,f)};function ke(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new fe(c,o);else if(c instanceof fe)c.target=c.target||o;else{var w=c;c=new fe(f,o),T(c,w)}if(w=!0,h)for(var S=h.length-1;0<=S;S--){var N=c.g=h[S];w=Gr(N,f,!0,c)&&w}if(N=c.g=o,w=Gr(N,f,!0,c)&&w,w=Gr(N,f,!1,c)&&w,h)for(S=0;S<h.length;S++)N=c.g=h[S],w=Gr(N,f,!1,c)&&w}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)hn(h[f]);delete o.g[c],o.h--}}this.F=null},Ie.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ie.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Gr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,S=0;S<c.length;++S){var N=c[S];if(N&&!N.da&&N.capture==h){var Z=N.listener,_e=N.ha||N.src;N.fa&&k(o.i,N),w=Z.call(_e,f)!==!1&&w}}return w&&!f.defaultPrevented}function Ka(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Qa(o){o.g=Ka(()=>{o.g=null,o.i&&(o.i=!1,Qa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Pf extends Qe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(o){Qe.call(this),this.h=o,this.g={}}P(Hn,Qe);var Ja=[];function Ya(o){ne(o.g,function(c,h){this.g.hasOwnProperty(h)&&Rs(c)},o),o.g={}}Hn.prototype.N=function(){Hn.aa.N.call(this),Ya(this)},Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=u.JSON.stringify,Cf=u.JSON.parse,kf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Cs(){}Cs.prototype.h=null;function Xa(o){return o.h||(o.h=o.i())}function Za(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ks(){fe.call(this,"d")}P(ks,fe);function Ds(){fe.call(this,"c")}P(Ds,fe);var Kt={},ec=null;function Wr(){return ec=ec||new Ie}Kt.La="serverreachability";function tc(o){fe.call(this,Kt.La,o)}P(tc,fe);function Wn(o){const c=Wr();ke(c,new tc(c))}Kt.STAT_EVENT="statevent";function nc(o,c){fe.call(this,Kt.STAT_EVENT,o),this.stat=c}P(nc,fe);function De(o){const c=Wr();ke(c,new nc(c,o))}Kt.Ma="timingevent";function rc(o,c){fe.call(this,Kt.Ma,o),this.size=c}P(rc,fe);function Kn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Qn(){this.g=!0}Qn.prototype.xa=function(){this.g=!1};function Df(o,c,h,f,w,S){o.info(function(){if(o.g)if(S)for(var N="",Z=S.split("&"),_e=0;_e<Z.length;_e++){var Q=Z[_e].split("=");if(1<Q.length){var we=Q[0];Q=Q[1];var Ae=we.split("_");N=2<=Ae.length&&Ae[1]=="type"?N+(we+"="+Q+"&"):N+(we+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+N})}function Vf(o,c,h,f,w,S,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+S+" "+N})}function pn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Of(o,h)+(f?" "+f:"")})}function Nf(o,c){o.info(function(){return"TIMEOUT: "+c})}Qn.prototype.info=function(){};function Of(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var S=w[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return Ps(h)}catch{return c}}var Kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vs;function Qr(){}P(Qr,Cs),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Vs=new Qr;function mt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var oc={},Ns={};function Os(o,c,h){o.L=1,o.v=Zr(it(c)),o.m=h,o.P=!0,ac(o,null)}function ac(o,c){o.F=Date.now(),Jr(o),o.A=it(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ec(h.i,"t",f),o.C=0,h=o.j.J,o.h=new sc,o.g=Uc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Pf(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ja[0]=w.toString()),w=Ja);for(var S=0;S<w.length;S++){var N=As(h,w[S],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Wn(),Df(o.i,o.u,o.A,o.l,o.R,o.m)}mt.prototype.ca=function(o){o=o.target;const c=this.M;c&&st(o)==3?c.j():this.Y(o)},mt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=st(this.g);var c=this.g.Ba();const _n=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Pc(this.g)))){this.J||Ae!=4||c==7||(c==8||0>=_n?Wn(3):Wn(2)),Ms(this);var h=this.g.Z();this.X=h;t:if(cc(this)){var f=Pc(this.g);o="";var w=f.length,S=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Jn(this);var N="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(S&&c==w-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,Vf(this.i,this.u,this.A,this.l,this.R,Ae,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Z)){var Q=Z;break t}}Q=null}if(h=Q)pn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,h);else{this.o=!1,this.s=3,De(12),Qt(this),Jn(this);break e}}if(this.P){h=!0;let Be;for(;!this.J&&this.C<N.length;)if(Be=Mf(this,N),Be==Ns){Ae==4&&(this.s=4,De(14),h=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==oc){this.s=4,De(15),pn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else pn(this.i,this.l,Be,null),Ls(this,Be);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||N.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)pn(this.i,this.l,N,"[Invalid Chunked Response]"),Qt(this),Jn(this);else if(0<N.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),js(we),we.M=!0,De(11))}}else pn(this.i,this.l,N,null),Ls(this,N);Ae==4&&Qt(this),this.o&&!this.J&&(Ae==4?Mc(this.j,this):(this.o=!1,Jr(this)))}else Xf(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Qt(this),Jn(this)}}}catch{}finally{}};function cc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Ns:(h=Number(c.substring(h,f)),isNaN(h)?oc:(f+=1,f+h>c.length?Ns:(c=c.slice(f,f+h),o.C=f+h,c)))}mt.prototype.cancel=function(){this.J=!0,Qt(this)};function Jr(o){o.S=Date.now()+o.I,uc(o,o.I)}function uc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Kn(v(o.ba,o),c)}function Ms(o){o.B&&(u.clearTimeout(o.B),o.B=null)}mt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Nf(this.i,this.A),this.L!=2&&(Wn(),De(17)),Qt(this),this.s=2,Jn(this)):uc(this,this.S-o)};function Jn(o){o.j.G==0||o.J||Mc(o.j,o)}function Qt(o){Ms(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ya(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ls(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||xs(h.h,o))){if(!o.K&&xs(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)si(h),ri(h);else break e;Bs(h),De(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kn(v(h.Za,h),6e3));if(1>=dc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Yt(h,11)}else if((o.K||h.g==o)&&si(h),!F(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let Q=w[c];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const we=Q[3];we!=null&&(h.la=we,h.j.info("VER="+h.la));const Ae=Q[4];Ae!=null&&(h.Aa=Ae,h.j.info("SVER="+h.Aa));const _n=Q[5];_n!=null&&typeof _n=="number"&&0<_n&&(f=1.5*_n,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Be=o.g;if(Be){const ai=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var S=f.h;S.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Fs(S,S.h),S.h=null))}if(f.D){const qs=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(f.ya=qs,te(f.I,f.D,qs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=o;if(f.qa=Fc(f,f.J?f.ia:null,f.W),N.K){fc(f.h,N);var Z=N,_e=f.L;_e&&(Z.I=_e),Z.B&&(Ms(Z),Jr(Z)),f.g=N}else Nc(f);0<h.i.length&&ii(h)}else Q[0]!="stop"&&Q[0]!="close"||Yt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Yt(h,7):$s(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Wn(4)}catch{}}var Lf=class{constructor(o,c){this.g=o,this.map=c}};function lc(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function dc(o){return o.h?1:o.g?o.g.size:0}function xs(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Fs(o,c){o.g?o.g.add(c):o.h=c}function fc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}lc.prototype.cancel=function(){if(this.i=pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return V(o.i)}function xf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Ff(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function mc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Ff(o),f=xf(o),w=f.length,S=0;S<w;S++)c.call(void 0,f[S],h&&h[S],o)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var S=o[h].substring(0,f);w=o[h].substring(f+1)}else S=o[h];c(S,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,Yr(this,o.j),this.o=o.o,this.g=o.g,Xr(this,o.s),this.l=o.l;var c=o.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),_c(this,h),this.m=o.m}else o&&(c=String(o).match(gc))?(this.h=!1,Yr(this,c[1]||"",!0),this.o=Yn(c[2]||""),this.g=Yn(c[3]||"",!0),Xr(this,c[4]),this.l=Yn(c[5]||"",!0),_c(this,c[6]||"",!0),this.m=Yn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Jt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Xn(c,yc,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Xn(c,yc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xn(h,h.charAt(0)=="/"?jf:Bf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xn(h,zf)),o.join("")};function it(o){return new Jt(o)}function Yr(o,c,h){o.j=h?Yn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Xr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function _c(o,c,h){c instanceof Zn?(o.i=c,Hf(o.i,o.h)):(h||(c=Xn(c,qf)),o.i=new Zn(c,o.h))}function te(o,c,h){o.i.set(c,h)}function Zr(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,$f),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function $f(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yc=/[#\/\?@]/g,Bf=/[#\?:]/g,jf=/[#\?]/g,qf=/[#\?@]/g,zf=/#/g;function Zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function gt(o){o.g||(o.g=new Map,o.h=0,o.i&&Uf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Zn.prototype,n.add=function(o,c){gt(this),this.i=null,o=mn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function vc(o,c){gt(o),c=mn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Tc(o,c){return gt(o),c=mn(o,c),o.g.has(c)}n.forEach=function(o,c){gt(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)},n.na=function(){gt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=o[f];for(let S=0;S<w.length;S++)h.push(c[f])}return h},n.V=function(o){gt(this);let c=[];if(typeof o=="string")Tc(this,o)&&(c=c.concat(this.g.get(mn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return gt(this),this.i=null,o=mn(this,o),Tc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ec(o,c,h){vc(o,c),0<h.length&&(o.i=null,o.g.set(mn(o,c),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const S=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var w=S;N[f]!==""&&(w+="="+encodeURIComponent(String(N[f]))),o.push(w)}}return this.i=o.join("&")};function mn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Hf(o,c){c&&!o.j&&(gt(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&(vc(this,f),Ec(this,w,h))},o)),o.j=c}function Gf(o,c){const h=new Qn;if(u.Image){const f=new Image;f.onload=R(_t,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(_t,h,"TestLoadImage: error",!1,c,f),f.onabort=R(_t,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(_t,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Wf(o,c){const h=new Qn,f=new AbortController,w=setTimeout(()=>{f.abort(),_t(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(w),S.ok?_t(h,"TestPingServer: ok",!0,c):_t(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),_t(h,"TestPingServer: error",!1,c)})}function _t(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function Kf(){this.g=new kf}function Qf(o,c,h){const f=h||"";try{mc(o,function(w,S){let N=w;d(w)&&(N=Ps(w)),c.push(f+S+"="+encodeURIComponent(N))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function ei(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ei,Cs),ei.prototype.g=function(){return new ti(this.l,this.j)},ei.prototype.i=(function(o){return function(){return o}})({});function ti(o,c){Ie.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ti,Ie),n=ti.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,tr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ic(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ic(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?er(this):tr(this),this.readyState==3&&Ic(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,er(this))},n.Qa=function(o){this.g&&(this.response=o,er(this))},n.ga=function(){this.g&&er(this)};function er(o){o.readyState=4,o.l=null,o.j=null,o.v=null,tr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function tr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ti.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wc(o){let c="";return ne(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Us(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=wc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,c,h))}function oe(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(oe,Ie);var Jf=/^https?$/i,Yf=["POST","PUT"];n=oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vs.g(),this.v=this.o?Xa(this.o):Xa(Vs),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){Ac(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Yf,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){Ac(this,S)}};function Ac(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Rc(o),ni(o)}function Rc(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ke(this,"complete"),ke(this,"abort"),ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sc(this):this.bb())},n.bb=function(){Sc(this)};function Sc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||st(o)!=4||o.Z()!=2)){if(o.u&&st(o)==4)Ka(o.Ea,0,o);else if(ke(o,"readystatechange"),st(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var w=String(o.D).match(gc)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!Jf.test(w?w.toLowerCase():"")}h=f}if(h)ke(o,"complete"),ke(o,"success");else{o.m=6;try{var S=2<st(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",Rc(o)}}finally{ni(o)}}}}function ni(o,c){if(o.g){bc(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ke(o,"ready");try{h.onreadystatechange=f}catch{}}}function bc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function st(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Cf(c)}};function Pc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Xf(o){const c={};o=(o.g&&2<=st(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(F(o[f]))continue;var h=E(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[w]||[];c[w]=S,S.push(h)}I(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Cc(o){this.Aa=0,this.i=[],this.j=new Qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,o),this.cb=nr("retryDelaySeedMs",1e4,o),this.Wa=nr("forwardChannelMaxRetries",2,o),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new lc(o&&o.concurrentRequestLimit),this.Da=new Kf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cc.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){De(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Fc(this,null,this.W),ii(this)};function $s(o){if(kc(o),o.G==3){var c=o.U++,h=it(o.I);if(te(h,"SID",o.K),te(h,"RID",c),te(h,"TYPE","terminate"),rr(o,h),c=new mt(o,o.j,c),c.L=2,c.v=Zr(it(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Uc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jr(c)}xc(o)}function ri(o){o.g&&(js(o),o.g.cancel(),o.g=null)}function kc(o){ri(o),o.u&&(u.clearTimeout(o.u),o.u=null),si(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ii(o){if(!hc(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ht||jr(),Ke||(Ht(),Ke=!0),zn.add(c,o),o.B=0}}function Zf(o,c){return dc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Kn(v(o.Ga,o,c),Lc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new mt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=m(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(w.H=S,S=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Vc(this,w,c),h=it(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),rr(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(wc(S)))+"&"+c:this.m&&Us(h,this.m,S)),Fs(this.h,w),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",c),te(h,"SID","null"),w.T=!0,Os(w,h,null)):Os(w,h,c),this.G=2}}else this.G==3&&(o?Dc(this,o):this.i.length==0||hc(this.h)||Dc(this))};function Dc(o,c){var h;c?h=c.l:h=o.U++;const f=it(o.I);te(f,"SID",o.K),te(f,"RID",h),te(f,"AID",o.T),rr(o,f),o.m&&o.o&&Us(f,o.m,o.o),h=new mt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Vc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fs(o.h,h),Os(h,f,c)}function rr(o,c){o.H&&ne(o.H,function(h,f){te(c,f,h)}),o.l&&mc({},function(h,f){te(c,f,h)})}function Vc(o,c,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var w=o.i;let S=-1;for(;;){const N=["count="+h];S==-1?0<h?(S=w[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let Z=!0;for(let _e=0;_e<h;_e++){let Q=w[_e].g;const we=w[_e].map;if(Q-=S,0>Q)S=Math.max(0,w[_e].g-100),Z=!1;else try{Qf(we,N,"req"+Q+"_")}catch{f&&f(we)}}if(Z){f=N.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Nc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ht||jr(),Ke||(Ht(),Ke=!0),zn.add(c,o),o.v=0}}function Bs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Kn(v(o.Fa,o),Lc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Kn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),ri(this),Oc(this))};function js(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Oc(o){o.g=new mt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=it(o.qa);te(c,"RID","rpc"),te(c,"SID",o.K),te(c,"AID",o.T),te(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(c,"TO",o.ja),te(c,"TYPE","xmlhttp"),rr(o,c),o.m&&o.o&&Us(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zr(it(c)),h.m=null,h.P=!0,ac(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ri(this),Bs(this),De(19))};function si(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Mc(o,c){var h=null;if(o.g==c){si(o),js(o),o.g=null;var f=2}else if(xs(o.h,c))h=c.D,fc(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;f=Wr(),ke(f,new rc(f,h)),ii(o)}else Nc(o);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Zf(o,c)||f==2&&Bs(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:Yt(o,5);break;case 4:Yt(o,10);break;case 3:Yt(o,6);break;default:Yt(o,2)}}}function Lc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Yt(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),f=o.Xa;const w=!f;f=new Jt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yr(f,"https"),Zr(f),w?Gf(f.toString(),h):Wf(f.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(c),xc(o),kc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function xc(o){if(o.G=0,o.ka=[],o.l){const c=pc(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Fc(o,c,h){var f=h instanceof Jt?it(h):new Jt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Xr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var S=new Jt(null);f&&Yr(S,f),c&&(S.g=c),w&&Xr(S,w),h&&(S.l=h),f=S}return h=o.D,c=o.ya,h&&c&&te(f,h,c),te(f,"VER",o.la),rr(o,f),f}function Uc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new oe(new ei({eb:h})):new oe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $c(){}n=$c.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oi(){}oi.prototype.g=function(o,c){return new Me(o,c)};function Me(o,c){Ie.call(this),this.g=new Cc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!F(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!F(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new gn(this)}P(Me,Ie),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){$s(this.g)},Me.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ps(o),o=h);c.i.push(new Lf(c.Ya++,o)),c.G==3&&ii(c)},Me.prototype.N=function(){this.g.l=null,delete this.j,$s(this.g),delete this.g,Me.aa.N.call(this)};function Bc(o){ks.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Bc,ks);function jc(){Ds.call(this),this.status=1}P(jc,Ds);function gn(o){this.g=o}P(gn,$c),gn.prototype.ua=function(){ke(this.g,"a")},gn.prototype.ta=function(o){ke(this.g,new Bc(o))},gn.prototype.sa=function(o){ke(this.g,new jc)},gn.prototype.ra=function(){ke(this.g,"b")},oi.prototype.createWebChannel=oi.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,eh=function(){return new oi},Zl=function(){return Wr()},Xl=Kt,lo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,pi=Kr,ic.COMPLETE="complete",Yl=ic,Za.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,ar=Za,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,Jl=oe}).apply(typeof ci<"u"?ci:typeof self<"u"?self:typeof window<"u"?window:{});const tu="@firebase/firestore",nu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new $o("@firebase/firestore");function vn(){return rn.logLevel}function M(n,...e){if(rn.logLevel<=G.DEBUG){const t=e.map(qo);rn.debug(`Firestore (${Fn}): ${n}`,...t)}}function lt(n,...e){if(rn.logLevel<=G.ERROR){const t=e.map(qo);rn.error(`Firestore (${Fn}): ${n}`,...t)}}function Nt(n,...e){if(rn.logLevel<=G.WARN){const t=e.map(qo);rn.warn(`Firestore (${Fn}): ${n}`,...t)}}function qo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,th(n,r,t)}function th(n,e,t){let r=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw lt(r),new Error(r)}function J(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||th(e,i,r)}function q(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Se.UNAUTHENTICATED)))}shutdown(){}}class Fm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Um{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ct,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},u=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ct)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new nh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class $m{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Bm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $m(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Se.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=qm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function ho(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return H(r,i);{const s=rh(),a=zm(s.encode(iu(n,t)),s.encode(iu(e,t)));return a!==0?a:H(r,i)}}t+=r>65535?2:1}return H(n.length,e.length)}function iu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function zm(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return H(n[t],e[t]);return H(n.length,e.length)}function kn(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="__name__";class Je{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Je.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return H(e.length,t.length)}static compareSegments(e,t){const r=Je.isNumericId(e),i=Je.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Je.extractNumericId(e).compare(Je.extractNumericId(t)):ho(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pt.fromString(e.substring(4,e.length-2))}}class ee extends Je{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const Hm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Je{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return Hm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===su}static keyField(){return new ve([su])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ee.fromString(e))}static fromName(e){return new x(ee.fromString(e).popFirst(5))}static empty(){return new x(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n,e,t){if(!t)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gm(n,e,t,r){if(e===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ou(n){if(!x.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function au(n){if(x.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function He(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qi(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Vr(n,e){if(!sh(n))throw new O(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new O(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=-62135596800,uu=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uu);return new X(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cu)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uu}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vr(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:he("string",X._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new X(0,0))}static max(){return new B(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=-1;function Wm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new Ot(i,x.empty(),e)}function Km(n){return new Ot(n.readTime,n.key,vr)}class Ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ot(B.min(),x.empty(),vr)}static max(){return new Ot(B.max(),x.empty(),vr)}}function Qm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==Jm)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let i=0,s=0,a=!1;e.forEach((u=>{++i,u.next((()=>{++s,a&&s===i&&t()}),(l=>r(l)))})),a=!0,s===i&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((i=>i?C.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let l=0;l<s;l++){const d=l;t(e[d]).next((p=>{a[d]=p,++u,u===s&&r(a)}),(p=>i(p)))}}))}static doWhile(e,t){return new C(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function Xm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $n(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ji.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=-1;function Yi(n){return n==null}function Pi(n){return n===0&&1/n==-1/0}function Zm(n){return typeof n=="number"&&Number.isInteger(n)&&!Pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="";function eg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=lu(e)),e=tg(n.get(t),e);return lu(e)}function tg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case oh:t+="";break;default:t+=s}}return t}function lu(n){return n+oh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ui(this.root,e,this.comparator,!0)}}class ui{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ye.RED,this.left=i??ye.EMPTY,this.right=s??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ye(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Le([])}unionWith(e){let t=new de(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ch("Invalid base64 string: "+s):s}})(e);return new Ee(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const ng=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=ng.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="server_timestamp",lh="__type__",hh="__previous_value__",dh="__local_write_time__";function Go(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[lh])===null||t===void 0?void 0:t.stringValue)===uh}function Xi(n){const e=n.mapValue.fields[hh];return Go(e)?Xi(e):e}function Tr(n){const e=Mt(n.mapValue.fields[dh].timestampValue);return new X(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,i,s,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const Ci="(default)";class Er{constructor(e,t){this.projectId=e,this.database=t||Ci}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database===Ci}isEqual(e){return e instanceof Er&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="__type__",ig="__max__",li={mapValue:{}},ph="__vector__",ki="value";function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Go(n)?4:og(n)?9007199254740991:sg(n)?10:11:U(28295,{value:n})}function rt(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tr(n).isEqual(Tr(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Mt(i.timestampValue),u=Mt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return Lt(i.bytesValue).isEqual(Lt(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ce(i.doubleValue),u=ce(s.doubleValue);return a===u?Pi(a)===Pi(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return kn(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(hu(a)!==hu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!rt(a[l],u[l])))return!1;return!0})(n,e);default:return U(52216,{left:n})}}function Ir(n,e){return(n.values||[]).find((t=>rt(t,e)))!==void 0}function Dn(n,e){if(n===e)return 0;const t=xt(n),r=xt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const u=ce(s.integerValue||s.doubleValue),l=ce(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(Tr(n),Tr(e));case 5:return ho(n.stringValue,e.stringValue);case 6:return(function(s,a){const u=Lt(s),l=Lt(a);return u.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=H(u[d],l[d]);if(p!==0)return p}return H(u.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const u=H(ce(s.latitude),ce(a.latitude));return u!==0?u:H(ce(s.longitude),ce(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return pu(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var u,l,d,p;const g=s.fields||{},v=a.fields||{},R=(u=g[ki])===null||u===void 0?void 0:u.arrayValue,P=(l=v[ki])===null||l===void 0?void 0:l.arrayValue,V=H(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((p=P?.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:pu(R,P)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===li.mapValue&&a===li.mapValue)return 0;if(s===li.mapValue)return 1;if(a===li.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const v=ho(l[g],p[g]);if(v!==0)return v;const R=Dn(u[l[g]],d[p[g]]);if(R!==0)return R}return H(l.length,p.length)})(n.mapValue,e.mapValue);default:throw U(23264,{le:t})}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=Mt(n),r=Mt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function pu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Dn(t[i],r[i]);if(s)return s}return H(t.length,r.length)}function Vn(n){return fo(n)}function fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Mt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Lt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=fo(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${fo(t.fields[a])}`;return i+"}"})(n.mapValue):U(61005,{value:n})}function mi(n){switch(xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xi(n);return e?16+mi(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+mi(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Bt(r.fields,((s,a)=>{i+=s.length+mi(a)})),i})(n.mapValue);default:throw U(13486,{value:n})}}function mu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function po(n){return!!n&&"integerValue"in n}function Wo(n){return!!n&&"arrayValue"in n}function gu(n){return!!n&&"nullValue"in n}function _u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gi(n){return!!n&&"mapValue"in n}function sg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[fh])===null||t===void 0?void 0:t.stringValue)===ph}function dr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=dr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function og(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ig}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.value=e}static empty(){return new Ne({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=ve.emptyPath(),r={},i=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=dr(a):i.push(u.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];gi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bt(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new Ne(dr(this.value))}}function mh(n){const e=[];return Bt(n.fields,((t,r)=>{const i=new ve([t]);if(gi(r)){const s=mh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)})),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new be(e,0,B.min(),B.min(),B.min(),Ne.empty(),0)}static newFoundDocument(e,t,r,i){return new be(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new be(e,2,t,B.min(),B.min(),Ne.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,B.min(),B.min(),Ne.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Dn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t="asc"){this.field=e,this.dir=t}}function ag(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{}class le extends gh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ug(e,t,r):t==="array-contains"?new dg(e,r):t==="in"?new fg(e,r):t==="not-in"?new pg(e,r):t==="array-contains-any"?new mg(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new lg(e,r):new hg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Dn(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.matchesComparison(Dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends gh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new We(e,t)}matches(e){return _h(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function _h(n){return n.op==="and"}function yh(n){return cg(n)&&_h(n)}function cg(n){for(const e of n.filters)if(e instanceof We)return!1;return!0}function mo(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+Vn(n.value);if(yh(n))return n.filters.map((e=>mo(e))).join(",");{const e=n.filters.map((t=>mo(t))).join(",");return`${n.op}(${e})`}}function vh(n,e){return n instanceof le?(function(r,i){return i instanceof le&&r.op===i.op&&r.field.isEqual(i.field)&&rt(r.value,i.value)})(n,e):n instanceof We?(function(r,i){return i instanceof We&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,u)=>s&&vh(a,i.filters[u])),!0):!1})(n,e):void U(19439)}function Th(n){return n instanceof le?(function(t){return`${t.field.canonicalString()} ${t.op} ${Vn(t.value)}`})(n):n instanceof We?(function(t){return t.op.toString()+" {"+t.getFilters().map(Th).join(" ,")+"}"})(n):"Filter"}class ug extends le{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class lg extends le{constructor(e,t){super(e,"in",t),this.keys=Eh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class hg extends le{constructor(e,t){super(e,"not-in",t),this.keys=Eh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Eh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class dg extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wo(t)&&Ir(t.arrayValue,this.value)}}class fg extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class pg extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ir(this.value.arrayValue,t)}}class mg extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ir(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}}function Tu(n,e=null,t=[],r=[],i=null,s=null,a=null){return new gg(n,e,t,r,i,s,a)}function Ko(n){const e=q(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>mo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Vn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Vn(r))).join(",")),e.Pe=t}return e.Pe}function Qo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ag(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function go(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _g(n,e,t,r,i,s,a,u){return new Bn(n,e,t,r,i,s,a,u)}function Zi(n){return new Bn(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ih(n){return n.collectionGroup!==null}function fr(n){const e=q(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new de(ve.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new wr(s,r))})),t.has(ve.keyField().canonicalString())||e.Te.push(new wr(ve.keyField(),r))}return e.Te}function Ye(n){const e=q(n);return e.Ie||(e.Ie=yg(e,fr(n))),e.Ie}function yg(n,e){if(n.limitType==="F")return Tu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new wr(i.field,s)}));const t=n.endAt?new Di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Di(n.startAt.position,n.startAt.inclusive):null;return Tu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _o(n,e){const t=n.filters.concat([e]);return new Bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Vi(n,e,t){return new Bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function es(n,e){return Qo(Ye(n),Ye(e))&&n.limitType===e.limitType}function wh(n){return`${Ko(Ye(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Th(i))).join(", ")}]`),Yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Vn(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Vn(i))).join(",")),`Target(${r})`})(Ye(n))}; limitType=${n.limitType})`}function ts(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of fr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,u,l){const d=yu(a,u,l);return a.inclusive?d<=0:d<0})(r.startAt,fr(r),i)||r.endAt&&!(function(a,u,l){const d=yu(a,u,l);return a.inclusive?d>=0:d>0})(r.endAt,fr(r),i))})(n,e)}function vg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ah(n){return(e,t)=>{let r=!1;for(const i of fr(n)){const s=Tg(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Tg(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(s,a,u){const l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Dn(l,d):U(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bt(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new se(x.comparator);function ht(){return Eg}const Rh=new se(x.comparator);function cr(...n){let e=Rh;for(const t of n)e=e.insert(t.key,t);return e}function Sh(n){let e=Rh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Zt(){return pr()}function bh(){return pr()}function pr(){return new cn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ig=new se(x.comparator),wg=new de(x.comparator);function W(...n){let e=wg;for(const t of n)e=e.add(t);return e}const Ag=new de(H);function Rg(){return Ag}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function Ph(n){return{integerValue:""+n}}function Sg(n,e){return Zm(e)?Ph(e):Jo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this._=void 0}}function bg(n,e,t){return n instanceof Ar?(function(i,s){const a={fields:{[lh]:{stringValue:uh},[dh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Go(s)&&(s=Xi(s)),s&&(a.fields[hh]=s),{mapValue:a}})(t,e):n instanceof Rr?kh(n,e):n instanceof Sr?Dh(n,e):(function(i,s){const a=Ch(i,s),u=Iu(a)+Iu(i.Ee);return po(a)&&po(i.Ee)?Ph(u):Jo(i.serializer,u)})(n,e)}function Pg(n,e,t){return n instanceof Rr?kh(n,e):n instanceof Sr?Dh(n,e):t}function Ch(n,e){return n instanceof Ni?(function(r){return po(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class Ar extends ns{}class Rr extends ns{constructor(e){super(),this.elements=e}}function kh(n,e){const t=Vh(e);for(const r of n.elements)t.some((i=>rt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Sr extends ns{constructor(e){super(),this.elements=e}}function Dh(n,e){let t=Vh(e);for(const r of n.elements)t=t.filter((i=>!rt(i,r)));return{arrayValue:{values:t}}}class Ni extends ns{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Iu(n){return ce(n.integerValue||n.doubleValue)}function Vh(n){return Wo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.field=e,this.transform=t}}function kg(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Rr&&i instanceof Rr||r instanceof Sr&&i instanceof Sr?kn(r.elements,i.elements,rt):r instanceof Ni&&i instanceof Ni?rt(r.Ee,i.Ee):r instanceof Ar&&i instanceof Ar})(n.transform,e.transform)}class Dg{constructor(e,t){this.version=e,this.transformResults=t}}class Ge{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ge}static exists(e){return new Ge(void 0,e)}static updateTime(e){return new Ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _i(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class rs{}function Nh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yo(n.key,Ge.none()):new Nr(n.key,n.data,Ge.none());{const t=n.data,r=Ne.empty();let i=new de(ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new jt(n.key,r,new Le(i.toArray()),Ge.none())}}function Vg(n,e,t){n instanceof Nr?(function(i,s,a){const u=i.value.clone(),l=Au(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof jt?(function(i,s,a){if(!_i(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Au(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Oh(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function mr(n,e,t,r){return n instanceof Nr?(function(s,a,u,l){if(!_i(s.precondition,a))return u;const d=s.value.clone(),p=Ru(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof jt?(function(s,a,u,l){if(!_i(s.precondition,a))return u;const d=Ru(s.fieldTransforms,l,a),p=a.data;return p.setAll(Oh(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(s,a,u){return _i(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function Ng(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Ch(r.transform,i||null);s!=null&&(t===null&&(t=Ne.empty()),t.set(r.field,s))}return t||null}function wu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&kn(r,i,((s,a)=>kg(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nr extends rs{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jt extends rs{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Oh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Au(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,Pg(a,u,t[i]))}return r}function Ru(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,bg(s,a,e))}return r}class Yo extends rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Og extends rs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vg(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bh();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const l=Nh(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,((t,r)=>wu(t,r)))&&kn(this.baseMutations,e.baseMutations,((t,r)=>wu(t,r)))}}class Xo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return Ig})();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Xo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,K;function Fg(n){switch(n){case b.OK:return U(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function Mh(n){if(n===void 0)return lt("GRPC error has no .code"),b.UNKNOWN;switch(n){case ue.OK:return b.OK;case ue.CANCELLED:return b.CANCELLED;case ue.UNKNOWN:return b.UNKNOWN;case ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ue.INTERNAL:return b.INTERNAL;case ue.UNAVAILABLE:return b.UNAVAILABLE;case ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ue.NOT_FOUND:return b.NOT_FOUND;case ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ue.ABORTED:return b.ABORTED;case ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ue.DATA_LOSS:return b.DATA_LOSS;default:return U(39323,{code:n})}}(K=ue||(ue={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=new Pt([4294967295,4294967295],0);function Su(n){const e=rh().encode(n),t=new Ql;return t.update(e),new Uint8Array(t.digest())}function bu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([i,s],0)]}class Zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(r<0)throw new ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Pt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Pt.fromNumber(r)));return i.compare(Ug)===1&&(i=new Pt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Su(e),[r,i]=bu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Zo(s,i,t);return r.forEach((u=>a.insert(u))),a}insert(e){if(this.fe===0)return;const t=Su(e),[r,i]=bu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new is(B.min(),i,new se(H),ht(),W())}}class Or{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Or(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Lh{constructor(e,t){this.targetId=e,this.De=t}}class xh{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pu{constructor(){this.ve=0,this.Ce=Cu(),this.Fe=Ee.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:U(38017,{changeType:s})}})),new Or(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Cu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class $g{constructor(e){this.We=e,this.Ge=new Map,this.ze=ht(),this.je=hi(),this.Je=hi(),this.He=new se(H)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:U(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(go(s))if(r===0){const a=new x(s.path);this.Xe(t,a,be.newNoDocument(a,B.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Lt(r).toUint8Array()}catch(l){if(l instanceof ch)return Nt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Zo(a,i,s)}catch(l){return Nt(l instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const u=this.st(a);if(u){if(s.current&&go(u.target)){const l=new x(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,be.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=W();this.Je.forEach(((s,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new is(e,t,this.He,this.ze,r);return this.ze=ht(),this.je=hi(),this.Je=hi(),this.He=new se(H),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Pu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new de(H),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new de(H),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Pu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function hi(){return new se(x.comparator)}function Cu(){return new se(x.comparator)}const Bg={asc:"ASCENDING",desc:"DESCENDING"},jg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qg={and:"AND",or:"OR"};class zg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yo(n,e){return n.useProto3Json||Yi(e)?e:{value:e}}function Oi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hg(n,e){return Oi(n,e.toTimestamp())}function Xe(n){return J(!!n,49232),B.fromTimestamp((function(t){const r=Mt(t);return new X(r.seconds,r.nanos)})(n))}function ea(n,e){return vo(n,e).canonicalString()}function vo(n,e){const t=(function(i){return new ee(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=ee.fromString(n);return J(zh(e),10190,{key:e.toString()}),e}function To(n,e){return ea(n.databaseId,e.path)}function Qs(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Bh(t))}function $h(n,e){return ea(n.databaseId,e)}function Gg(n){const e=Uh(n);return e.length===4?ee.emptyPath():Bh(e)}function Eo(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ku(n,e,t){return{name:To(n,e),fields:t.value.mapValue.fields}}function Wg(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(d,p){return d.useProto3Json?(J(p===void 0||typeof p=="string",58123),Ee.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ee.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?b.UNKNOWN:Mh(d.code);return new O(p,d.message||"")})(a);t=new xh(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qs(n,r.document.name),s=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):B.min(),u=new Ne({mapValue:{fields:r.document.fields}}),l=be.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new yi(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qs(n,r.document),s=r.readTime?Xe(r.readTime):B.min(),a=be.newNoDocument(i,s),u=r.removedTargetIds||[];t=new yi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qs(n,r.document),s=r.removedTargetIds||[];t=new yi([],s,i,null)}else{if(!("filter"in e))return U(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new xg(i,s),u=r.targetId;t=new Lh(u,a)}}return t}function Kg(n,e){let t;if(e instanceof Nr)t={update:ku(n,e.key,e.value)};else if(e instanceof Yo)t={delete:To(n,e.key)};else if(e instanceof jt)t={update:ku(n,e.key,e.data),updateMask:r_(e.fieldMask)};else{if(!(e instanceof Og))return U(16599,{Rt:e.type});t={verify:To(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,a){const u=a.transform;if(u instanceof Ar)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ni)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw U(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Hg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U(27497)})(n,e.precondition)),t}function Qg(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map((t=>(function(i,s){let a=i.updateTime?Xe(i.updateTime):Xe(s);return a.isEqual(B.min())&&(a=Xe(s)),new Dg(a,i.transformResults||[])})(t,e)))):[]}function Jg(n,e){return{documents:[$h(n,e.path)]}}function Yg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$h(n,i);const s=(function(d){if(d.length!==0)return qh(We.create(d,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(d){if(d.length!==0)return d.map((p=>(function(v){return{field:En(v.field),direction:e_(v.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=yo(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:i}}function Xg(n){let e=Gg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){J(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=(function(g){const v=jh(g);return v instanceof We&&yh(v)?v.getFilters():[v]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((v=>(function(P){return new wr(In(P.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(v)))})(t.orderBy));let u=null;t.limit&&(u=(function(g){let v;return v=typeof g=="object"?g.value:g,Yi(v)?null:v})(t.limit));let l=null;t.startAt&&(l=(function(g){const v=!!g.before,R=g.values||[];return new Di(R,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const v=!g.before,R=g.values||[];return new Di(R,v)})(t.endAt)),_g(e,i,a,s,u,"F",l,d)}function Zg(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=In(t.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=In(t.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(t.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=In(t.unaryFilter.field);return le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}})(n):n.fieldFilter!==void 0?(function(t){return le.create(In(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return We.create(t.compositeFilter.filters.map((r=>jh(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U(1026)}})(t.compositeFilter.op))})(n):U(30097,{filter:n})}function e_(n){return Bg[n]}function t_(n){return jg[n]}function n_(n){return qg[n]}function En(n){return{fieldPath:n.canonicalString()}}function In(n){return ve.fromServerFormat(n.fieldPath)}function qh(n){return n instanceof le?(function(t){if(t.op==="=="){if(_u(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(gu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_u(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(gu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:t_(t.op),value:t.value}}})(n):n instanceof We?(function(t){const r=t.getFilters().map((i=>qh(i)));return r.length===1?r[0]:{compositeFilter:{op:n_(t.op),filters:r}}})(n):U(54877,{filter:n})}function r_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t,r,i,s=B.min(),a=B.min(),u=Ee.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.gt=e}}function s_(n){const e=Xg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.Dn=new a_}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Ot.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Ot.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class a_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new de(ee.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hh=41943040;class Ve{static withCacheSize(e){return new Ve(e,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(Hh,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Nn(0)}static ur(){return new Nn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="LruGarbageCollector",c_=1048576;function Nu([n,e],[t,r]){const i=H(n,t);return i===0?H(e,r):i}class u_{constructor(e){this.Tr=e,this.buffer=new de(Nu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class l_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){M(Vu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?M(Vu,"Ignoring IndexedDB error during garbage collection: ",t):await Un(t)}await this.Rr(3e5)}))}}class h_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Ji.ue);const r=new u_(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Du)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i)))).next((g=>(r=g,u=Date.now(),this.removeTargets(e,r,t)))).next((g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(d=Date.now(),vn()<=G.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g}))))}}function d_(n,e){return new h_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.changes=new cn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&mr(r.mutation,i,Le.empty(),X.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const i=Zt();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=cr();return s.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,r,i){let s=ht();const a=pr(),u=(function(){return pr()})();return t.forEach(((l,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof jt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),mr(p.mutation,d,p.mutation.getFieldMask(),X.now())):a.set(d.key,Le.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>{var g;return u.set(d,new p_(p,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(e,t){const r=pr();let i=new se(((a,u)=>a-u)),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Le.empty();p=u.applyToLocalView(d,p),r.set(l,p);const g=(i.get(u.batchId)||W()).add(l);i=i.insert(u.batchId,g)}))})).next((()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,g=bh();p.forEach((v=>{if(!s.has(v)){const R=Nh(t.get(v),r.get(v));R!==null&&g.set(v,R),s=s.add(v)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ih(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(Zt());let u=vr,l=s;return a.next((d=>C.forEach(d,((p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),s.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next((v=>{l=l.insert(p,v)}))))).next((()=>this.populateOverlays(e,d,s))).next((()=>this.computeViews(e,l,d,W()))).next((p=>({batchId:u,changes:Sh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let i=cr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=cr();return this.indexManager.getCollectionParents(e,s).next((u=>C.forEach(u,(l=>{const d=(function(g,v){return new Bn(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next((p=>{p.forEach(((g,v)=>{a=a.insert(g,v)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,be.newInvalidDocument(p)))}));let u=cr();return a.forEach(((l,d)=>{const p=s.get(l);p!==void 0&&mr(p.mutation,d,Le.empty(),X.now()),ts(t,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:s_(i.bundledQuery),readTime:Xe(i.readTime)}})(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.overlays=new se(x.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return C.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=Zt(),s=t.length+1,a=new x(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new se(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Zt(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Zt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=i)););return C.resolve(u)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Lg(t,r));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.qr=new de(pe.Qr),this.$r=new de(pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new pe(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new x(new ee([])),r=new pe(t,e),i=new pe(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new x(new ee([])),r=new pe(t,e),i=new pe(t,e+1);let s=W();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new pe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||H(e.Hr,t.Hr)}static Ur(e,t){return H(e.Hr,t.Hr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new de(pe.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Mg(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Yr=this.Yr.add(new pe(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ho:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const u=this.Zr(a.Hr);s.push(u)})),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(H);return t.forEach((i=>{const s=new pe(i,0),a=new pe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(u=>{r=r.add(u.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const a=new pe(new x(s),0);let u=new de(H);return this.Yr.forEachWhile((l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)}),a),C.resolve(this.ei(u))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(t.mutations,(i=>{const s=new pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new pe(t,0),i=this.Yr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.ni=e,this.docs=(function(){return new se(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=ht();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():be.newInvalidDocument(i))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=ht();const a=t.path,u=new x(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Qm(Km(p),r)<=0||(i.has(p.key)||ts(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){U(9500)}ri(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new E_(this)}getSize(e){return C.resolve(this.size)}}class E_ extends f_{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.persistence=e,this.ii=new cn((t=>Ko(t)),Qo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new ta,this.targetCount=0,this._i=Nn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)})),C.waitFor(s).next((()=>i))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ji(0),this.ci=!1,this.ci=!0,this.li=new y_,this.referenceDelegate=e(this),this.hi=new I_(this),this.indexManager=new o_,this.remoteDocumentCache=(function(i){return new T_(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new i_(t),this.Ti=new g_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new __,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new v_(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new w_(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class w_ extends Ym{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.Ai=new ta,this.Ri=null}static Vi(e){return new na(e)}get mi(){if(this.Ri)return this.Ri;throw U(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const i=x.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,B.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Mi{constructor(e,t){this.persistence=e,this.gi=new cn((r=>eg(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=d_(this,t)}static Vi(e,t){return new Mi(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return C.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?C.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((u=>{u||(r++,s.removeEntry(a,B.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mi(e.data.value)),t}Sr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ra(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return vp()?8:Xm(Pe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new A_;return this.ws(e,t,a).next((u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(vn()<=G.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(vn()<=G.DEBUG&&M("QueryEngine","Query:",Tn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(vn()<=G.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):C.resolve())}ps(e,t){if(Eu(t))return C.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Vi(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=W(...s);return this.gs.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,r).next((l=>{const d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,Vi(t,null,"F")):this.vs(e,d,t,l)}))))})))))}ys(e,t,r,i){return Eu(t)||i.isEqual(B.min())?C.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?C.resolve(null):(vn()<=G.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tn(t)),this.vs(e,a,t,Wm(i,vr)).next((u=>u)))}))}bs(e,t){let r=new de(Ah(e));return t.forEach(((i,s)=>{ts(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return vn()<=G.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.gs.getDocumentsMatchingQuery(e,t,Ot.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="LocalStore",S_=3e8;class b_{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new se(H),this.Ms=new cn((s=>Ko(s)),Qo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m_(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function P_(n,e,t,r){return new b_(n,e,t,r)}async function Wh(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],u=[];let l=W();for(const d of i){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of s){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function C_(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,p){const g=d.batch,v=g.keys();let R=C.resolve();return v.forEach((P=>{R=R.next((()=>p.getEntry(l,P))).next((V=>{const D=d.docVersions.get(P);J(D!==null,48541),V.version.compareTo(D)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))}))})),R.next((()=>u.mutationQueue.removeMutationBatch(l,g)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let l=W();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Kh(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function k_(n,e){const t=q(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const u=[];e.targetChanges.forEach(((p,g)=>{const v=i.get(g);if(!v)return;u.push(t.hi.removeMatchingKeys(s,p.removedDocuments,g).next((()=>t.hi.addMatchingKeys(s,p.addedDocuments,g))));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ee.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),(function(V,D,z){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=S_?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(v,R,p)&&u.push(t.hi.updateTargetData(s,R))}));let l=ht(),d=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))})),u.push(D_(s,a,e.documentUpdates).next((p=>{l=p.Ls,d=p.ks}))),!r.isEqual(B.min())){const p=t.hi.getLastRemoteSnapshotVersion(s).next((g=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));u.push(p)}return C.waitFor(u).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,d))).next((()=>l))})).then((s=>(t.Fs=i,s)))}function D_(n,e,t){let r=W(),i=W();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=ht();return t.forEach(((u,l)=>{const d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):M(ia,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Ls:a,ks:i}}))}function V_(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ho),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function N_(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,C.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new At(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Io(n,e,t){const r=q(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!$n(a))throw a;M(ia,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Ou(n,e,t){const r=q(n);let i=B.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,p){const g=q(l),v=g.Ms.get(p);return v!==void 0?C.resolve(g.Fs.get(v)):g.hi.getTargetData(d,p)})(r,a,Ye(e)).next((u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{s=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:W()))).next((u=>(O_(r,vg(e),u),{documents:u,qs:s})))))}function O_(n,e,t){let r=n.xs.get(e)||B.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class Mu{constructor(){this.activeTargetIds=Rg()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M_{constructor(){this.Fo=new Mu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Mu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="ConnectivityMonitor";class xu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){M(Lu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){M(Lu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di=null;function wo(){return di===null?di=(function(){return 268435456+Math.round(2147483648*Math.random())})():di++,"0x"+di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="RestConnection",x_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class F_{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Ci?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=wo(),u=this.Go(e,t.toUriEncodedString());M(Js,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);const{host:d}=new URL(u),p=Ln(d);return this.jo(e,u,l,r,p).then((g=>(M(Js,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Nt(Js,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",r),g}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=x_[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class $_ extends F_{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=wo();return new Promise(((u,l)=>{const d=new Jl;d.setWithCredentials(!0),d.listenOnce(Yl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case pi.NO_ERROR:const g=d.getResponseJson();M(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case pi.TIMEOUT:M(Re,`RPC '${e}' ${a} timed out`),l(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const v=d.getStatus();if(M(Re,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R?.error;if(P&&P.status&&P.message){const V=(function(z){const F=z.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(F)>=0?F:b.UNKNOWN})(P.status);l(new O(V,P.message))}else l(new O(b.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(b.UNAVAILABLE,"Connection failed."));break;default:U(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{M(Re,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(i);M(Re,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)}))}P_(e,t,r){const i=wo(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=eh(),u=Zl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=s.join("");M(Re,`Creating RPC '${e}' stream ${i}: ${p}`,l);const g=a.createWebChannel(p,l);this.T_(g);let v=!1,R=!1;const P=new U_({Ho:D=>{R?M(Re,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(v||(M(Re,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),M(Re,`RPC '${e}' stream ${i} sending:`,D),g.send(D))},Yo:()=>g.close()}),V=(D,z,F)=>{D.listen(z,(j=>{try{F(j)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return V(g,ar.EventType.OPEN,(()=>{R||(M(Re,`RPC '${e}' stream ${i} transport opened.`),P.s_())})),V(g,ar.EventType.CLOSE,(()=>{R||(R=!0,M(Re,`RPC '${e}' stream ${i} transport closed`),P.__(),this.I_(g))})),V(g,ar.EventType.ERROR,(D=>{R||(R=!0,Nt(Re,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),P.__(new O(b.UNAVAILABLE,"The operation could not be completed")))})),V(g,ar.EventType.MESSAGE,(D=>{var z;if(!R){const F=D.data[0];J(!!F,16349);const j=F,Y=j?.error||((z=j[0])===null||z===void 0?void 0:z.error);if(Y){M(Re,`RPC '${e}' stream ${i} received error:`,Y);const Ce=Y.status;let ne=(function(_){const T=ue[_];if(T!==void 0)return Mh(T)})(Ce),I=Y.message;ne===void 0&&(ne=b.INTERNAL,I="Unknown error status: "+Ce+" with message "+Y.message),R=!0,P.__(new O(ne,I)),g.close()}else M(Re,`RPC '${e}' stream ${i} received:`,F),P.a_(F)}})),V(u,Xl.STAT_EVENT,(D=>{D.stat===lo.PROXY?M(Re,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===lo.NOPROXY&&M(Re,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{P.o_()}),0),P}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){return new zg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="PersistentStream";class Jh{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return M(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(M(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class B_ extends Jh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Wg(this.serializer,e),r=(function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Xe(a.readTime):B.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Eo(this.serializer),t.addTarget=(function(s,a){let u;const l=a.target;if(u=go(l)?{documents:Jg(s,l)}:{query:Yg(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Fh(s,a.resumeToken);const d=yo(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Oi(s,a.snapshotVersion.toTimestamp());const d=yo(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const r=Zg(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Eo(this.serializer),t.removeTarget=e,this.k_(t)}}class j_ extends Jh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Qg(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Eo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Kg(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{}class z_ extends q_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,vo(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(b.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Jo(e,vo(t,r),i,a,u,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(b.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class H_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(lt(t),this._a=!1):M("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="RemoteStore";class G_{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{un(this)&&(M(sn,"Restarting streams for network reachability change."),await(async function(l){const d=q(l);d.Ia.add(4),await Mr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await os(d)})(this))}))})),this.Aa=new H_(r,i)}}async function os(n){if(un(n))for(const e of n.da)await e(!0)}async function Mr(n){for(const e of n.da)await e(!1)}function Yh(n,e){const t=q(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ca(t)?aa(t):jn(t).x_()&&oa(t,e))}function sa(n,e){const t=q(n),r=jn(t);t.Ta.delete(e),r.x_()&&Xh(t,e),t.Ta.size===0&&(r.x_()?r.B_():un(t)&&t.Aa.set("Unknown"))}function oa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jn(n).H_(e)}function Xh(n,e){n.Ra.$e(e),jn(n).Y_(e)}function aa(n){n.Ra=new $g({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),jn(n).start(),n.Aa.aa()}function ca(n){return un(n)&&!jn(n).M_()&&n.Ta.size>0}function un(n){return q(n).Ia.size===0}function Zh(n){n.Ra=void 0}async function W_(n){n.Aa.set("Online")}async function K_(n){n.Ta.forEach(((e,t)=>{oa(n,e)}))}async function Q_(n,e){Zh(n),ca(n)?(n.Aa.la(e),aa(n)):n.Aa.set("Unknown")}async function J_(n,e,t){if(n.Aa.set("Online"),e instanceof xh&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))})(n,e)}catch(r){M(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Li(n,r)}else if(e instanceof yi?n.Ra.Ye(e):e instanceof Lh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(B.min()))try{const r=await Kh(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const u=s.Ra.Pt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const p=s.Ta.get(l);if(!p)return;s.Ta.set(l,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),Xh(s,l);const g=new At(p.target,l,d,p.sequenceNumber);oa(s,g)})),s.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){M(sn,"Failed to raise snapshot:",r),await Li(n,r)}}async function Li(n,e,t){if(!$n(e))throw e;n.Ia.add(1),await Mr(n),n.Aa.set("Offline"),t||(t=()=>Kh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(sn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await os(n)}))}function ed(n,e){return e().catch((t=>Li(n,t,e)))}async function as(n){const e=q(n),t=Ft(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ho;for(;Y_(e);)try{const i=await V_(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,X_(e,i)}catch(i){await Li(e,i)}td(e)&&nd(e)}function Y_(n){return un(n)&&n.Pa.length<10}function X_(n,e){n.Pa.push(e);const t=Ft(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function td(n){return un(n)&&!Ft(n).M_()&&n.Pa.length>0}function nd(n){Ft(n).start()}async function Z_(n){Ft(n).na()}async function ey(n){const e=Ft(n);for(const t of n.Pa)e.X_(t.mutations)}async function ty(n,e,t){const r=n.Pa.shift(),i=Xo.from(r,e,t);await ed(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await as(n)}async function ny(n,e){e&&Ft(n).Z_&&await(async function(r,i){if((function(a){return Fg(a)&&a!==b.ABORTED})(i.code)){const s=r.Pa.shift();Ft(r).N_(),await ed(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await as(r)}})(n,e),td(n)&&nd(n)}async function Uu(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M(sn,"RemoteStore received new credentials");const r=un(t);t.Ia.add(3),await Mr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await os(t)}async function ry(n,e){const t=q(n);e?(t.Ia.delete(2),await os(t)):e||(t.Ia.add(2),await Mr(t),t.Aa.set("Unknown"))}function jn(n){return n.Va||(n.Va=(function(t,r,i){const s=q(t);return s.ia(),new B_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:W_.bind(null,n),e_:K_.bind(null,n),n_:Q_.bind(null,n),J_:J_.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),ca(n)?aa(n):n.Aa.set("Unknown")):(await n.Va.stop(),Zh(n))}))),n.Va}function Ft(n){return n.ma||(n.ma=(function(t,r,i){const s=q(t);return s.ia(),new j_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Z_.bind(null,n),n_:ny.bind(null,n),ea:ey.bind(null,n),ta:ty.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await as(n)):(await n.ma.stop(),n.Pa.length>0&&(M(sn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new ua(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,e){if(lt("AsyncQueue",`${e}: ${n}`),$n(n))return new O(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{static emptySet(e){return new An(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=cr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new An;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.fa=new se(x.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):U(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class On{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new On(e,t,An.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&es(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class sy{constructor(){this.queries=Bu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=q(t),s=i.queries;i.queries=Bu(),s.forEach(((a,u)=>{for(const l of u.wa)l.onError(r)}))})(this,new O(b.ABORTED,"Firestore shutting down"))}}function Bu(){return new cn((n=>wh(n)),es)}async function rd(n,e){const t=q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new iy,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=la(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&ha(t)}async function id(n,e){const t=q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function oy(n,e){const t=q(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&ha(t)}function ay(n,e,t){const r=q(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function ha(n){n.Da.forEach((e=>{e.next()}))}var Ao,ju;(ju=Ao||(Ao={})).Fa="default",ju.Cache="cache";class sd{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new On(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=On.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ao.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.key=e}}class ad{constructor(e){this.key=e}}class cy{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Ah(e),this.eu=new An(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new $u,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((p,g)=>{const v=i.get(p),R=ts(this.query,g)?g:null,P=!!v&&this.mutatedKeys.has(v.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;v&&R?v.data.isEqual(R.data)?P!==V&&(r.track({type:3,doc:R}),D=!0):this.iu(v,R)||(r.track({type:2,doc:R}),D=!0,(l&&this.Xa(R,l)>0||d&&this.Xa(R,d)<0)&&(u=!0)):!v&&R?(r.track({type:0,doc:R}),D=!0):v&&!R&&(r.track({type:1,doc:v}),D=!0,(l||d)&&(u=!0)),D&&(R?(a=a.add(R),s=V?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,g)=>(function(R,P){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{At:D})}};return V(R)-V(P)})(p.type,g.type)||this.Xa(p.doc,g.doc))),this.su(r),i=i!=null&&i;const u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new On(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new $u,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new ad(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new od(r))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return On.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const da="SyncEngine";class uy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ly{constructor(e){this.key=e,this.lu=!1}}class hy{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new cn((u=>wh(u)),es),this.Tu=new Map,this.Iu=new Set,this.du=new se(x.comparator),this.Eu=new Map,this.Au=new ta,this.Ru={},this.Vu=new Map,this.mu=Nn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dy(n,e,t=!0){const r=fd(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await cd(r,e,t,!0),i}async function fy(n,e){const t=fd(n);await cd(t,e,!0,!1)}async function cd(n,e,t,r){const i=await N_(n.localStore,Ye(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await py(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Yh(n.remoteStore,i),u}async function py(n,e,t,r,i){n.gu=(g,v,R)=>(async function(V,D,z,F){let j=D.view.nu(z);j.Ds&&(j=await Ou(V.localStore,D.query,!1).then((({documents:I})=>D.view.nu(I,j))));const Y=F&&F.targetChanges.get(D.targetId),Ce=F&&F.targetMismatches.get(D.targetId)!=null,ne=D.view.applyChanges(j,V.isPrimaryClient,Y,Ce);return zu(V,D.targetId,ne._u),ne.snapshot})(n,g,v,R);const s=await Ou(n.localStore,e,!0),a=new cy(e,s.qs),u=a.nu(s.documents),l=Or.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);zu(n,t,d._u);const p=new uy(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function my(n,e,t){const r=q(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!es(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Io(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&sa(r.remoteStore,i.targetId),Ro(r,i.targetId)})).catch(Un)):(Ro(r,i.targetId),await Io(r.localStore,i.targetId,!0))}async function gy(n,e){const t=q(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),sa(t.remoteStore,r.targetId))}async function _y(n,e,t){const r=Ay(n);try{const i=await(function(a,u){const l=q(a),d=X.now(),p=u.reduce(((R,P)=>R.add(P.key)),W());let g,v;return l.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let P=ht(),V=W();return l.Os.getEntries(R,p).next((D=>{P=D,P.forEach(((z,F)=>{F.isValidDocument()||(V=V.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(R,P))).next((D=>{g=D;const z=[];for(const F of u){const j=Ng(F,g.get(F.key).overlayedDocument);j!=null&&z.push(new jt(F.key,j,mh(j.value.mapValue),Ge.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,z,u)})).next((D=>{v=D;const z=D.applyToLocalDocumentSet(g,V);return l.documentOverlayCache.saveOverlays(R,D.batchId,z)}))})).then((()=>({batchId:v.batchId,changes:Sh(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(H)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d})(r,i.batchId,t),await Lr(r,i.changes),await as(r.remoteStore)}catch(i){const s=la(i,"Failed to persist write");t.reject(s)}}async function ud(n,e){const t=q(n);try{const r=await k_(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?J(a.lu,14607):i.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))})),await Lr(t,r,e)}catch(r){await Un(r)}}function qu(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)})),(function(a,u){const l=q(a);l.onlineState=u;let d=!1;l.queries.forEach(((p,g)=>{for(const v of g.wa)v.va(u)&&(d=!0)})),d&&ha(l)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yy(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new se(x.comparator);a=a.insert(s,be.newNoDocument(s,B.min()));const u=W().add(s),l=new is(B.min(),new Map,new se(H),a,u);await ud(r,l),r.du=r.du.remove(s),r.Eu.delete(e),fa(r)}else await Io(r.localStore,e,!1).then((()=>Ro(r,e,t))).catch(Un)}async function vy(n,e){const t=q(n),r=e.batch.batchId;try{const i=await C_(t.localStore,e);hd(t,r,null),ld(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(t,i)}catch(i){await Un(i)}}async function Ty(n,e,t){const r=q(n);try{const i=await(function(a,u){const l=q(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next((g=>(J(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>l.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);hd(r,e,t),ld(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lr(r,i)}catch(i){await Un(i)}}function ld(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function hd(n,e,t){const r=q(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||dd(n,r)}))}function dd(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(sa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),fa(n))}function zu(n,e,t){for(const r of t)r instanceof od?(n.Au.addReference(r.key,e),Ey(n,r)):r instanceof ad?(M(da,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||dd(n,r.key)):U(19791,{yu:r})}function Ey(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(M(da,"New document in limbo: "+t),n.Iu.add(r),fa(n))}function fa(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new ly(t)),n.du=n.du.insert(t,r),Yh(n.remoteStore,new At(Ye(Zi(t.path)),r,"TargetPurposeLimboResolution",Ji.ue))}}async function Lr(n,e,t){const r=q(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((u,l)=>{a.push(r.gu(l,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){i.push(d);const g=ra.Es(l.targetId,d);s.push(g)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(l,d){const p=q(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>C.forEach(d,(v=>C.forEach(v.Is,(R=>p.persistence.referenceDelegate.addReference(g,v.targetId,R))).next((()=>C.forEach(v.ds,(R=>p.persistence.referenceDelegate.removeReference(g,v.targetId,R)))))))))}catch(g){if(!$n(g))throw g;M(ia,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const R=p.Fs.get(v),P=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(P);p.Fs=p.Fs.insert(v,V)}}})(r.localStore,s))}async function Iy(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M(da,"User change. New user:",e.toKey());const r=await Wh(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((u=>{u.forEach((l=>{l.reject(new O(b.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(t,r.Bs)}}function wy(n,e){const t=q(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function fd(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yy.bind(null,e),e.hu.J_=oy.bind(null,e.eventManager),e.hu.pu=ay.bind(null,e.eventManager),e}function Ay(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ty.bind(null,e),e}class xi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ss(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return P_(this.persistence,new R_,e.initialUser,this.serializer)}Du(e){return new Gh(na.Vi,this.serializer)}bu(e){return new M_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xi.provider={build:()=>new xi};class Ry extends xi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof Mi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new l_(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Gh((r=>Mi.Vi(r,t)),this.serializer)}}class So{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Iy.bind(null,this.syncEngine),await ry(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sy})()}createDatastore(e){const t=ss(e.databaseInfo.databaseId),r=(function(s){return new $_(s)})(e.databaseInfo);return(function(s,a,u,l){return new z_(s,a,u,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,u){return new G_(r,i,s,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>qu(this.syncEngine,t,0)),(function(){return xu.C()?new xu:new L_})())}createSyncEngine(e,t){return(function(i,s,a,u,l,d,p){const g=new hy(i,s,a,u,l,d);return p&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=q(i);M(sn,"RemoteStore shutting down."),s.Ia.add(5),await Mr(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}So.provider={build:()=>new So};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="FirestoreClient";class Sy{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=zo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{M(Ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(Ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=la(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Xs(n,e){n.asyncQueue.verifyOperationInProgress(),M(Ut,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Wh(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{Nt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{M("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Nt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function Hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await by(n);M(Ut,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Uu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Uu(e.remoteStore,i))),n._onlineComponents=e}async function by(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Ut,"Using user provided OfflineComponentProvider");try{await Xs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await Xs(n,new xi)}}else M(Ut,"Using default OfflineComponentProvider"),await Xs(n,new Ry(void 0));return n._offlineComponents}async function md(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Ut,"Using user provided OnlineComponentProvider"),await Hu(n,n._uninitializedComponentsProvider._online)):(M(Ut,"Using default OnlineComponentProvider"),await Hu(n,new So))),n._onlineComponents}function Py(n){return md(n).then((e=>e.syncEngine))}async function bo(n){const e=await md(n),t=e.eventManager;return t.onListen=dy.bind(null,e.syncEngine),t.onUnlisten=my.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gy.bind(null,e.syncEngine),t}function Cy(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,u,l,d){const p=new pd({next:v=>{p.Ou(),a.enqueueAndForget((()=>id(s,g)));const R=v.docs.has(u);!R&&v.fromCache?d.reject(new O(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&l&&l.source==="server"?d.reject(new O(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new sd(Zi(u.path),p,{includeMetadataChanges:!0,ka:!0});return rd(s,g)})(await bo(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="firestore.googleapis.com",Wu=!0;class Ku{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_d,this.ssl=Wu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Wu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<c_)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new xm;switch(r.type){case"firstParty":return new Bm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Gu.get(t);r&&(M("ComponentProvider","Removing Datastore"),Gu.delete(t),r.terminate())})(this),Promise.resolve()}}function ky(n,e,t,r={}){var i;n=He(n,cs);const s=Ln(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(Bl(`https://${l}`),jl("Firestore",!0)),a.host!==_d&&a.host!==l&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!tn(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=Se.MOCK_USER;else{p=lp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Se(v)}n._authCredentials=new Fm(new nh(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qt(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Vr(t,ae._jsonSchema))return new ae(e,r||null,new x(ee.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:he("string",ae._jsonSchemaVersion),referencePath:he("string")};class kt extends qt{constructor(e,t,r){super(e,t,Zi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new x(e))}withConverter(e){return new kt(this.firestore,e,this._path)}}function yn(n,e,...t){if(n=me(n),ih("collection","path",e),n instanceof cs){const r=ee.fromString(e,...t);return au(r),new kt(n,null,r)}{if(!(n instanceof ae||n instanceof kt))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return au(r),new kt(n.firestore,null,r)}}function br(n,e,...t){if(n=me(n),arguments.length===1&&(e=zo.newId()),ih("doc","path",e),n instanceof cs){const r=ee.fromString(e,...t);return ou(r),new ae(n,null,new x(r))}{if(!(n instanceof ae||n instanceof kt))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return ou(r),new ae(n.firestore,n instanceof kt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qh(this,"async_queue_retry"),this.oc=()=>{const r=Ys();r&&M(Qu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ys();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ys();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ct;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$n(e))throw e;M(Qu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,lt("INTERNAL UNHANDLED ERROR: ",Yu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=ua.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&U(47125,{hc:Yu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Yu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}class on extends cs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Ju,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function Dy(n,e){const t=typeof n=="object"?n:Gl(),r=typeof n=="string"?n:Ci,i=jo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cp("firestore");s&&ky(i,...s)}return i}function pa(n){if(n._terminated)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vy(n),n._firestoreClient}function Vy(n){var e,t,r;const i=n._freezeSettings(),s=(function(u,l,d,p){return new rg(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,gd(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Sy(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(Ee.fromBase64String(e))}catch(t){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vr(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:he("string",xe._jsonSchemaVersion),bytes:he("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ze._jsonSchemaVersion}}static fromJSON(e){if(Vr(e,Ze._jsonSchema))return new Ze(e.latitude,e.longitude)}}Ze._jsonSchemaVersion="firestore/geoPoint/1.0",Ze._jsonSchema={type:he("string",Ze._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vr(e,et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new et(e.vectorValues);throw new O(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}et._jsonSchemaVersion="firestore/vectorValue/1.0",et._jsonSchema={type:he("string",et._jsonSchemaVersion),vectorValues:he("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=/^__.*__$/;class Oy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nr(e,this.data,t,this.fieldTransforms)}}class yd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new jt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{Ec:n})}}class ma{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ma(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Fi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(vd(this.Ec)&&Ny.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class My{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ss(e)}Dc(e,t,r,i=!1){return new ma({Ec:e,methodName:t,bc:r,path:ve.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ga(n){const e=n._freezeSettings(),t=ss(n._databaseId);return new My(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ly(n,e,t,r,i,s={}){const a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);ya("Data must be an object, but it was:",a,r);const u=Td(r,a);let l,d;if(s.merge)l=new Le(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const v=Po(e,g,t);if(!a.contains(v))throw new O(b.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Id(p,v)||p.push(v)}l=new Le(p),d=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,d=a.fieldTransforms;return new Oy(new Ne(u),l,d)}class hs extends ls{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hs}}class _a extends ls{_toFieldTransform(e){return new Cg(e.path,new Ar)}isEqual(e){return e instanceof _a}}function xy(n,e,t,r){const i=n.Dc(1,e,t);ya("Data must be an object, but it was:",i,r);const s=[],a=Ne.empty();Bt(r,((l,d)=>{const p=va(e,l,t);d=me(d);const g=i.gc(p);if(d instanceof hs)s.push(p);else{const v=xr(d,g);v!=null&&(s.push(p),a.set(p,v))}}));const u=new Le(s);return new yd(a,u,i.fieldTransforms)}function Fy(n,e,t,r,i,s){const a=n.Dc(1,e,t),u=[Po(e,r,t)],l=[i];if(s.length%2!=0)throw new O(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)u.push(Po(e,s[v])),l.push(s[v+1]);const d=[],p=Ne.empty();for(let v=u.length-1;v>=0;--v)if(!Id(d,u[v])){const R=u[v];let P=l[v];P=me(P);const V=a.gc(R);if(P instanceof hs)d.push(R);else{const D=xr(P,V);D!=null&&(d.push(R),p.set(R,D))}}const g=new Le(d);return new yd(p,g,a.fieldTransforms)}function Uy(n,e,t,r=!1){return xr(t,n.Dc(r?4:3,e))}function xr(n,e){if(Ed(n=me(n)))return ya("Unsupported field value:",e,n),Td(n,e);if(n instanceof ls)return(function(r,i){if(!vd(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const u of r){let l=xr(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=X.fromDate(r);return{timestampValue:Oi(i.serializer,s)}}if(r instanceof X){const s=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oi(i.serializer,s)}}if(r instanceof Ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:Fh(i.serializer,r._byteString)};if(r instanceof ae){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ea(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof et)return(function(a,u){return{mapValue:{fields:{[fh]:{stringValue:ph},[ki]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Jo(u.serializer,d)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${Qi(r)}`)})(n,e)}function Td(n,e){const t={};return ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bt(n,((r,i)=>{const s=xr(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Ed(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Ze||n instanceof xe||n instanceof ae||n instanceof ls||n instanceof et)}function ya(n,e,t){if(!Ed(t)||!sh(t)){const r=Qi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Po(n,e,t){if((e=me(e))instanceof us)return e._internalPath;if(typeof e=="string")return va(n,e);throw Fi("Field path arguments must be of type string or ",n,!1,void 0,t)}const $y=new RegExp("[~\\*/\\[\\]]");function va(n,e,t){if(e.search($y)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new us(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new O(b.INVALID_ARGUMENT,u+n+l)}function Id(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new By(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ds("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class By extends wd{data(){return super.data()}}function ds(n,e){return typeof e=="string"?va(n,e):e instanceof us?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ta{}class Ea extends Ta{}function ir(n,e,...t){let r=[];e instanceof Ta&&r.push(e),r=r.concat(t),(function(s){const a=s.filter((l=>l instanceof Ia)).length,u=s.filter((l=>l instanceof fs)).length;if(a>1||a>0&&u>0)throw new O(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class fs extends Ea{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fs(e,t,r)}_apply(e){const t=this._parse(e);return Ad(e._query,t),new qt(e.firestore,e.converter,_o(e._query,t))}_parse(e){const t=ga(e.firestore);return(function(s,a,u,l,d,p,g){let v;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){tl(g,p);const P=[];for(const V of g)P.push(el(l,s,V));v={arrayValue:{values:P}}}else v=el(l,s,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||tl(g,p),v=Uy(u,a,g,p==="in"||p==="not-in");return le.create(d,p,v)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zu(n,e,t){const r=e,i=ds("where",n);return fs._create(i,r,t)}class Ia extends Ta{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ia(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:We.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let a=i;const u=s.getFlattenedFilters();for(const l of u)Ad(a,l),a=_o(a,l)})(e._query,t),new qt(e.firestore,e.converter,_o(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wa extends Ea{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wa(e,t)}_apply(e){const t=(function(i,s,a){if(i.startAt!==null)throw new O(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wr(s,a)})(e._query,this._field,this._direction);return new qt(e.firestore,e.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new Bn(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function sr(n,e="asc"){const t=e,r=ds("orderBy",n);return wa._create(r,t)}class Aa extends Ea{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Aa(e,t,r)}_apply(e){return new qt(e.firestore,e.converter,Vi(e._query,this._limit,this._limitType))}}function qy(n){return Aa._create("limit",n,"F")}function el(n,e,t){if(typeof(t=me(t))=="string"){if(t==="")throw new O(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ih(e)&&t.indexOf("/")!==-1)throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!x.isDocumentKey(r))throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mu(n,new x(r))}if(t instanceof ae)return mu(n,t._key);throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qi(t)}.`)}function tl(n,e){if(!Array.isArray(n)||n.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ad(n,e){const t=(function(i,s){for(const a of i)for(const u of a.getFlattenedFilters())if(s.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class zy{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bt(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ki].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>ce(a.doubleValue)));return new et(s)}convertGeoPoint(e){return new Ze(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Xi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Tr(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);J(zh(r),9688,{name:e});const i=new Er(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends wd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ds("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:he("string",en._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class vi extends en{data(e={}){return super.data(e)}}class Rn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new vi(this._firestore,this._userDataWriter,r.key,r,new lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((u=>{const l=new vi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((u=>s||u.type!==3)).map((u=>{const l=new vi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Gy(u.type),doc:l,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Gy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){n=He(n,ae);const e=He(n.firestore,on);return Cy(pa(e),n._key).then((t=>Sd(e,n,t)))}Rn._jsonSchemaVersion="firestore/querySnapshot/1.0",Rn._jsonSchema={type:he("string",Rn._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class Rd extends zy{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function Wy(n,e,t){n=He(n,ae);const r=He(n.firestore,on),i=Hy(n.converter,e);return Ra(r,[Ly(ga(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ge.none())])}function Ky(n,e,t,...r){n=He(n,ae);const i=He(n.firestore,on),s=ga(i);let a;return a=typeof(e=me(e))=="string"||e instanceof us?Fy(s,"updateDoc",n._key,e,t,r):xy(s,"updateDoc",n._key,e),Ra(i,[a.toMutation(n._key,Ge.exists(!0))])}function Qy(n){return Ra(He(n.firestore,on),[new Yo(n._key,Ge.none())])}function vt(n,...e){var t,r,i;n=me(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xu(e[a])||(s=e[a++]);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xu(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let l,d,p;if(n instanceof ae)d=He(n.firestore,on),p=Zi(n._key.path),l={next:g=>{e[a]&&e[a](Sd(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=He(n,qt);d=He(g.firestore,on),p=g._query;const v=new Rd(d);l={next:R=>{e[a]&&e[a](new Rn(d,v,g,R))},error:e[a+1],complete:e[a+2]},jy(n._query)}return(function(v,R,P,V){const D=new pd(V),z=new sd(R,D,P);return v.asyncQueue.enqueueAndForget((async()=>rd(await bo(v),z))),()=>{D.Ou(),v.asyncQueue.enqueueAndForget((async()=>id(await bo(v),z)))}})(pa(d),p,u,l)}function Ra(n,e){return(function(r,i){const s=new Ct;return r.asyncQueue.enqueueAndForget((async()=>_y(await Py(r),i,s))),s.promise})(pa(n),e)}function Sd(n,e,t){const r=t.docs.get(e._key),i=new Rd(n);return new en(n,i,e._key,r,new lr(t.hasPendingWrites,t.fromCache),e.converter)}function bd(){return new _a("serverTimestamp")}(function(e,t=!0){(function(i){Fn=i})(xn),Cn(new nn("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new on(new Um(r.getProvider("auth-internal")),new jm(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(d.options.projectId,p)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u}),"PUBLIC").setMultipleInstances(!0)),bt(tu,nu,e),bt(tu,nu,"esm2017")})();function Sa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jy=Pd,Cd=new kr("auth","Firebase",Pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new $o("@firebase/auth");function Yy(n,...e){Ui.logLevel<=G.WARN&&Ui.warn(`Auth (${xn}): ${n}`,...e)}function Ti(n,...e){Ui.logLevel<=G.ERROR&&Ui.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw ba(n,...e)}function tt(n,...e){return ba(n,...e)}function kd(n,e,t){const r=Object.assign(Object.assign({},Jy()),{[e]:t});return new kr("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return kd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ba(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cd.create(n,...e)}function $(n,e,...t){if(!n)throw ba(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ti(e),new Error(e)}function ft(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Xy(){return rl()==="http:"||rl()==="https:"}function rl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xy()||gp()||"connection"in navigator)?navigator.onLine:!0}function ev(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=fp()||_p()}get(){return Zy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rv=new Fr(3e4,6e4);function ps(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qn(n,e,t,r,i={}){return Vd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=Dr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},s);return mp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Ln(n.emulatorConfig.host)&&(d.credentials="include"),Dd.fetch()(await Od(n,n.config.apiHost,t,u),d)})}async function Vd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},tv),e);try{const i=new iv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw fi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw fi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw fi(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw kd(n,p,d);dt(n,p)}}catch(i){if(i instanceof pt)throw i;dt(n,"network-request-failed",{message:String(i)})}}async function Nd(n,e,t,r,i={}){const s=await qn(n,e,t,r,i);return"mfaPendingCredential"in s&&dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Od(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Pa(n.config,i):`${n.config.apiScheme}://${i}`;return nv.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class iv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),rv.get())})}}function fi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=tt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e){return qn(n,"POST","/v1/accounts:delete",e)}async function $i(n,e){return qn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ov(n,e=!1){const t=me(n),r=await t.getIdToken(e),i=Ca(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:gr(Zs(i.auth_time)),issuedAtTime:gr(Zs(i.iat)),expirationTime:gr(Zs(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Zs(n){return Number(n)*1e3}function Ca(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const i=xl(t);return i?JSON.parse(i):(Ti("Failed to decode base64 JWT payload"),null)}catch(i){return Ti("Caught error parsing JWT payload as JSON",i?.toString()),null}}function il(n){const e=Ca(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&av(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function av({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pr(n,$i(t,{idToken:r}));$(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Md(s.providerUserInfo):[],u=lv(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new ko(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function uv(n){const e=me(n);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Md(n){return n.map(e=>{var{providerId:t}=e,r=Sa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(n,e){const t=await Vd(n,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Od(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Ln(n.emulatorConfig.host)&&(l.credentials="include"),Dd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dv(n,e){return qn(n,"POST","/v2/accounts:revokeToken",ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):il(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=il(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await hv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Sn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Sa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ko(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ov(this,e)}reload(){return uv(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Pr(this,sv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:j,emailVerified:Y,isAnonymous:Ce,providerData:ne,stsTokenManager:I}=t;$(j&&I,e,"internal-error");const m=Sn.fromJSON(this.name,I);$(typeof j=="string",e,"internal-error"),yt(g,e.name),yt(v,e.name),$(typeof Y=="boolean",e,"internal-error"),$(typeof Ce=="boolean",e,"internal-error"),yt(R,e.name),yt(P,e.name),yt(V,e.name),yt(D,e.name),yt(z,e.name),yt(F,e.name);const _=new ze({uid:j,auth:e,email:v,emailVerified:Y,displayName:g,isAnonymous:Ce,photoURL:P,phoneNumber:R,tenantId:V,stsTokenManager:m,createdAt:z,lastLoginAt:F});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(T=>Object.assign({},T))),D&&(_._redirectEventId=D),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Sn;i.updateFromServerResponse(t);const s=new ze({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Md(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new Sn;u.updateFromIdToken(r);const l=new ze({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ko(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map;function at(n){ft(n instanceof Function,"Expected a class definition");let e=sl.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ld.type="NONE";const ol=Ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,e,t){return`firebase:${n}:${e}:${t}`}class bn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ei(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ei("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $i(this.auth,{idToken:e}).catch(()=>{});return t?ze._fromGetAccountInfoResponse(this.auth,t,e):null}return ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new bn(at(ol),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||at(ol);const a=Ei(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const v=await $i(e,{idToken:p}).catch(()=>{});if(!v)break;g=await ze._fromGetAccountInfoResponse(e,v,p)}else g=ze._fromJSON(e,p);d!==s&&(u=g),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bn(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new bn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jd(e))return"Blackberry";if(qd(e))return"Webos";if(Fd(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(Bd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function xd(n=Pe()){return/firefox\//i.test(n)}function Fd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(n=Pe()){return/crios\//i.test(n)}function $d(n=Pe()){return/iemobile/i.test(n)}function Bd(n=Pe()){return/android/i.test(n)}function jd(n=Pe()){return/blackberry/i.test(n)}function qd(n=Pe()){return/webos/i.test(n)}function ka(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fv(n=Pe()){var e;return ka(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pv(){return yp()&&document.documentMode===10}function zd(n=Pe()){return ka(n)||Bd(n)||qd(n)||jd(n)||/windows phone/i.test(n)||$d(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n,e=[]){let t;switch(n){case"Browser":t=al(Pe());break;case"Worker":t=`${al(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,e={}){return qn(n,"GET","/v2/passwordPolicy",ps(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=6;class yv{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:_v,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cl(this),this.idTokenSubscription=new cl(this),this.beforeStateQueue=new mv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $i(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ev()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(Dt(this));const t=e?me(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gv(this),t=new yv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await dv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Yy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ms(n){return me(n)}class cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sp(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tv(n){Da=n}function Ev(n){return Da.loadJS(n)}function Iv(){return Da.gapiScript}function wv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,e){const t=jo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(tn(s,e??{}))return i;dt(i,"already-initialized")}return t.initialize({options:e})}function Rv(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(at);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Sv(n,e,t){const r=ms(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Gd(e),{host:a,port:u}=bv(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(tn(d,r.config.emulator)&&tn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ln(a)?(Bl(`${s}//${a}${l}`),jl("Auth",!0)):Pv()}function Gd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bv(n){const e=Gd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ul(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ul(a)}}}function ul(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Pv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e){return Nd(n,"POST","/v1/accounts:signInWithIdp",ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="http://localhost";class an extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Sa(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new an(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pn(e,t)}buildRequest(){const e={requestUri:Cv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Kd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ur{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Ur{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Ur{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Ur{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return wt.credential(t,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(n,e){return Nd(n,"POST","/v1/accounts:signUp",ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ze._fromIdTokenResponse(e,r,i),a=ll(r);return new $t({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ll(r);return new $t({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ll(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n){var e;if(qe(n.app))return Promise.reject(Dt(n));const t=ms(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new $t({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await kv(t,{returnSecureToken:!0}),i=await $t._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends pt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ji(e,t,r,i)}}function Qd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(n,s,e,r):s})}async function Vv(n,e,t=!1){const r=await Pr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $t._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,e,t=!1){const{auth:r}=n;if(qe(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await Pr(n,Qd(r,i,e,n),t);$(s.idToken,r,"internal-error");const a=Ca(s.idToken);$(a,r,"internal-error");const{sub:u}=a;return $(n.uid===u,r,"user-mismatch"),$t._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&dt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(n,e,t=!1){if(qe(n.app))return Promise.reject(Dt(n));const r="signIn",i=await Qd(n,r,e),s=await $t._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n,e){return me(n).setPersistence(e)}function Lv(n,e,t,r){return me(n).onIdTokenChanged(e,t,r)}function xv(n,e,t){return me(n).beforeAuthStateChanged(e,t)}function Fv(n,e,t,r){return me(n).onAuthStateChanged(e,t,r)}const qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=1e3,$v=10;class Yd extends Jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);pv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$v):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yd.type="LOCAL";const Xd=Yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zd.type="SESSION";const ef=Zd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new gs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,s)),l=await Bv(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const d=Va("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(v.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function qv(n){nt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function zv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gv(){return tf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="firebaseLocalStorageDb",Wv=1,zi="firebaseLocalStorage",rf="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _s(n,e){return n.transaction([zi],e?"readwrite":"readonly").objectStore(zi)}function Kv(){const n=indexedDB.deleteDatabase(nf);return new $r(n).toPromise()}function Do(){const n=indexedDB.open(nf,Wv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zi,{keyPath:rf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zi)?e(r):(r.close(),await Kv(),e(await Do()))})})}async function hl(n,e,t){const r=_s(n,!0).put({[rf]:e,value:t});return new $r(r).toPromise()}async function Qv(n,e){const t=_s(n,!1).get(e),r=await new $r(t).toPromise();return r===void 0?null:r.value}function dl(n,e){const t=_s(n,!0).delete(e);return new $r(t).toPromise()}const Jv=800,Yv=3;class sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Do(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gs._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await zv(),!this.activeServiceWorker)return;this.sender=new jv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Do();return await hl(e,qi,"1"),await dl(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Qv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_s(i,!1).getAll();return new $r(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sf.type="LOCAL";const Xv=sf;new Fr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e){return e?at(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eT(n){return Ov(n.auth,new Na(n),n.bypassAuthState)}function tT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Nv(t,new Na(n),n.bypassAuthState)}async function nT(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),Vv(t,new Na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eT;case"linkViaPopup":case"linkViaRedirect":return nT;case"reauthViaPopup":case"reauthViaRedirect":return tT;default:dt(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new Fr(2e3,1e4);class wn extends of{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rT.get())};e()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="pendingRedirect",Ii=new Map;class sT extends of{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ii.get(this.auth._key());if(!e){try{const r=await oT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ii.set(this.auth._key(),e)}return this.bypassAuthState||Ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oT(n,e){const t=uT(e),r=cT(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function aT(n,e){Ii.set(n._key(),e)}function cT(n){return at(n._redirectPersistence)}function uT(n){return Ei(iT,n.config.apiKey,n.name)}async function lT(n,e,t=!1){if(qe(n.app))return Promise.reject(Dt(n));const r=ms(n),i=Zv(r,e),a=await new sT(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=600*1e3;class dT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!af(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hT&&this.cachedEventUids.clear(),this.cachedEventUids.has(fl(e))}saveEventToCache(e){this.cachedEventUids.add(fl(e)),this.lastProcessedEventTime=Date.now()}}function fl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function af({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function fT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(n,e={}){return qn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gT=/^https?/;async function _T(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pT(n);for(const t of e)try{if(yT(t))return}catch{}dt(n,"unauthorized-domain")}function yT(n){const e=Co(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!gT.test(t))return!1;if(mT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Fr(3e4,6e4);function pl(){const n=nt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function TT(n){return new Promise((e,t)=>{var r,i,s;function a(){pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pl(),t(tt(n,"network-request-failed"))},timeout:vT.get()})}if(!((i=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)a();else{const u=wv("iframefcb");return nt()[u]=()=>{gapi.load?a():t(tt(n,"network-request-failed"))},Ev(`${Iv()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw wi=null,e})}let wi=null;function ET(n){return wi=wi||TT(n),wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new Fr(5e3,15e3),wT="__/auth/iframe",AT="emulator/auth/iframe",RT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pa(e,AT):`https://${n.config.authDomain}/${wT}`,r={apiKey:e.apiKey,appName:n.name,v:xn},i=ST.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Dr(r).slice(1)}`}async function PT(n){const e=await ET(n),t=nt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:bT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),u=nt().setTimeout(()=>{s(a)},IT.get());function l(){nt().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kT=500,DT=600,VT="_blank",NT="http://localhost";class ml{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OT(n,e,t,r=kT,i=DT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},CT),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Pe().toLowerCase();t&&(u=Ud(d)?VT:t),xd(d)&&(e=e||NT,l.scrollbars="yes");const p=Object.entries(l).reduce((v,[R,P])=>`${v}${R}=${P},`,"");if(fv(d)&&u!=="_self")return MT(e||"",u),new ml(null);const g=window.open(e||"",u,p);$(g,n,"popup-blocked");try{g.focus()}catch{}return new ml(g)}function MT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="__/auth/handler",xT="emulator/auth/handler",FT=encodeURIComponent("fac");async function gl(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xn,eventId:i};if(e instanceof Kd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Ur){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${FT}=${encodeURIComponent(l)}`:"";return`${UT(n)}?${Dr(u).slice(1)}${d}`}function UT({config:n}){return n.emulator?Pa(n,xT):`https://${n.authDomain}/${LT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="webStorageSupport";class $T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ef,this._completeRedirectFn=lT,this._overrideRedirectResult=aT}async _openPopup(e,t,r,i){var s;ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await gl(e,t,r,Co(),i);return OT(e,a,Va())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await gl(e,t,r,Co(),i);return qv(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await PT(e),r=new dT(e);return t.register("authEvent",i=>($(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eo,{type:eo},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[eo];a!==void 0&&t(!!a),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_T(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zd()||Fd()||ka()}}const BT=$T;var _l="@firebase/auth",yl="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zT(n){Cn(new nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hd(n)},d=new vv(r,i,s,l);return Rv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new nn("auth-internal",e=>{const t=ms(e.getProvider("auth").getImmediate());return(r=>new jT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(_l,yl,qT(n)),bt(_l,yl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=300,GT=$l("authIdTokenMaxAge")||HT;let vl=null;const WT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>GT)return;const i=t?.token;vl!==i&&(vl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KT(n=Gl()){const e=jo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Av(n,{popupRedirectResolver:BT,persistence:[Xv,Xd,ef]}),r=$l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=WT(s.toString());xv(t,a,()=>a(t.currentUser)),Lv(t,u=>a(u))}}const i=Fl("auth");return i&&Sv(t,`http://${i}`),t}function QT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",QT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zT("Browser");var JT="firebase",YT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(JT,YT,"app");const XT={apiKey:"AIzaSyD0eTO7HVfCaLpZghe0hoQ8Yy1VgGcdxG0",authDomain:"prodclock-34b63.firebaseapp.com",projectId:"prodclock-34b63",appId:"1:548427361016:web:ee93996904f04df821690d",storageBucket:"prodclock-34b63.firebasestorage.app",messagingSenderId:"548427361016"},ZT="https://tgarben.github.io/prodclock-display/",cf=Hl(XT),Vo=KT(cf),je=Dy(cf);function Hi(n){return typeof n=="object"&&n!==null&&"code"in n&&n.code==="permission-denied"}function No(n,e,t){return new Promise((r,i)=>{const s=setTimeout(()=>i(new Error(`Timed out waiting for ${t}.`)),e);n.then(a=>{clearTimeout(s),r(a)},a=>{clearTimeout(s),i(a)})})}function Vt(n){return n instanceof X?n.toDate():void 0}async function eE(){try{await Mv(Vo,Xd)}catch(t){console.warn("Could not persist the display sign-in; a reload will need re-pairing.",t)}const n=await tE();return n||(await Dv(Vo)).user}function tE(){return new Promise((n,e)=>{const t=Fv(Vo,r=>{t(),n(r)},r=>{t(),e(r)})})}const nE=5;function Tl(n){if(n.length===0)return 0;const e=[...n].sort((i,s)=>i-s),t=Math.floor(e.length/2),r=e.length%2===1?e[t]:(e[t-1]+e[t])/2;return Math.round(r)}function rE(n,e,t=nE){const r=[...n,e];return r.length>t?r.slice(r.length-t):r}const uf=1440*60*1e3,iE=3600*1e3,sE=30,lf=4;function El(n){return n.endTime??new Date(n.time.getTime()+sE*60*1e3)}function hf(n,e){const t=e.getTime(),r=n.filter(s=>s.status==="live"&&s.startedAt!==void 0&&t-s.startedAt.getTime()<=uf).sort((s,a)=>(a.startedAt?.getTime()??0)-(s.startedAt?.getTime()??0));if(r.length>0)return r[0];const i=n.filter(s=>s.status==="ended"&&s.endedAt!==void 0&&t-s.endedAt.getTime()<=iE).sort((s,a)=>(a.endedAt?.getTime()??0)-(s.endedAt?.getTime()??0));return i.length>0?i[0]:null}function df(n,e){const t=e.getTime();let r;for(const s of n)for(const a of s.entries)El(a).getTime()<=t||(r===void 0||a.time.getTime()<r.entry.time.getTime())&&(r={owner:s,entry:a});if(r===void 0)return null;const i=r.owner.entries.filter(s=>El(s).getTime()>t).sort((s,a)=>s.time.getTime()-a.time.getTime()).slice(0,lf);return{event:r.owner.event,firstCallAt:r.entry.time,callTimes:i}}function oE(n,e,t){const r=hf(n,t);if(r)return{eventId:r.id,live:r.status==="live"};const i=df(e,t);return i?{eventId:i.event.id,live:!1}:null}function Il(n,e){return n&&n.eventId===e?n:{eventId:e,items:[],checklist:[]}}function aE(n,e){const t=hf(n.sessions,e);if(t){const s=Il(n.focusItems,t.id);return t.status==="live"?{kind:"live",session:t,items:s.items,checklist:s.checklist}:{kind:"ended",session:t,items:s.items}}const r=df(n.events,e);if(r===null)return{kind:"idle",event:null,firstCallAt:null,callTimes:[],items:[]};const i=Il(n.focusItems,r.event.id);return{kind:"idle",event:r.event,firstCallAt:r.firstCallAt,callTimes:r.callTimes,items:i.items}}const cE=60*1e3,uE=15*1e3,lE=600*1e3,hE=4320*60*1e3,dE=12;function ln(n){return n.data()??{}}function Fe(n,e=""){return typeof n=="string"?n:e}function Gi(n,e=0){return typeof n=="number"&&Number.isFinite(n)?n:e}function Oa(n){return Array.isArray(n)?n.filter(e=>typeof e=="string"):[]}function fE(n){const e=ln(n),t={id:n.id,name:Fe(e.name,"Untitled team"),sortIndex:Gi(e.sortIndex)},r=Fe(e.description);return r.length>0&&(t.description=r),t}function pE(n){const e=ln(n),t=Vt(e.date);return t?{id:n.id,title:Fe(e.title,"Untitled event"),date:t}:null}function mE(n,e){const t=ln(n),r=Vt(t.time);if(!r)return null;const i={id:n.id,eventId:e,label:Fe(t.label,"Call"),time:r,groupIds:Oa(t.groupIds)},s=Vt(t.endTime);return s&&(i.endTime=s),i}function gE(n){const e=ln(n),t={id:n.id,title:Fe(e.title,"Untitled item"),plannedMinutes:Gi(e.plannedMinutes),sortIndex:Gi(e.sortIndex),groupIds:Oa(e.groupIds)},r=Fe(e.note);return r.length>0&&(t.note=r),t}function _E(n){const e=ln(n);return{id:n.id,title:Fe(e.title,"Untitled item"),sortIndex:Gi(e.sortIndex),isDone:e.isDone===!0}}function yE(n){const e=ln(n),t={};if(typeof e.completedSeconds=="object"&&e.completedSeconds!==null)for(const[l,d]of Object.entries(e.completedSeconds))typeof d=="number"&&(t[l]=d);const r={id:n.id,eventTitle:Fe(e.eventTitle,"Service"),status:e.status==="live"?"live":"ended",controllerUid:Fe(e.controllerUid),controllerName:Fe(e.controllerName,"Someone"),completedSeconds:t},i=Vt(e.startedAt);i&&(r.startedAt=i);const s=Vt(e.endedAt);s&&(r.endedAt=s);const a=Fe(e.currentItemId);a.length>0&&(r.currentItemId=a);const u=Vt(e.currentItemStartedAt);return u&&(r.currentItemStartedAt=u),r}function vE(n){return{displayName:Fe(n.displayName),displayGroupIds:Oa(n.displayGroupIds)}}function TE(n,e,t,r,i){let s=!1,a=null,u=[],l=[],d=[],p=0,g=[],v;const R=new Map,P=new Set;let V=null,D=[],z=[];const F=new Map,j=new Map,Y=new Map;let Ce=null,ne=null;const I=br(je,"organizations",n,"members",e);function m(k,L){_(k),j.set(k,!1),F.set(k,L())}function _(k){F.get(k)?.(),F.delete(k),j.delete(k),Y.delete(k)}function T(k,L){s||!F.has(k)||(j.set(k,!0),Y.set(k,L))}function E(k,L){s||!F.has(k)||(j.set(k,!0),Y.set(k,!0),console.warn(`Display feed listener "${k}" failed.`,L))}function A(k,L){if(k.fromCache||k.hasPendingWrites)return;const re=Vt(L)?.getTime();if(re===void 0||re===v)return;const fn=v===void 0;v=re,!fn&&(g=rE(g,re-Date.now()))}function y(){return new Date(Date.now()+Tl(g))}function $e(){m("member",()=>vt(I,k=>{if(s)return;T("member",k.metadata.fromCache);const L=k.exists()?ln(k):null;if(!k.metadata.fromCache&&L?.isDisplay!==!0){qr();return}L&&(a=vE(L),A(k.metadata,L.lastSeenAt)),ge()},k=>{if(!s){if(Hi(k)){qr();return}E("member",k),ge()}}))}function zt(){m("groups",()=>vt(ir(yn(je,"organizations",n,"groups"),sr("sortIndex")),k=>{s||(T("groups",k.metadata.fromCache),u=k.docs.map(fE),ge())},k=>{s||(E("groups",k),ge())}))}function Br(k){p=k.getTime(),m("sessions",()=>vt(ir(yn(je,"liveSessions"),Zu("startedAt",">=",X.fromMillis(k.getTime()-uf)),sr("startedAt")),L=>{s||(T("sessions",L.metadata.fromCache),l=L.docs.map(yE),ge())},L=>{s||(E("sessions",L),ge())})),m("events",()=>vt(ir(yn(je,"organizations",n,"events"),Zu("date",">=",X.fromMillis(k.getTime()-hE)),sr("date"),qy(dE)),L=>{s||(T("events",L.metadata.fromCache),d=L.docs.map(pE).filter(re=>re!==null),Ht(),ge())},L=>{s||(E("events",L),ge())}))}function Ht(){const k=new Set(d.map(L=>L.id));for(const L of[...P])k.has(L)||(_(Ke(L)),P.delete(L),R.delete(L));for(const L of k)P.has(L)||(P.add(L),zn(L))}function Ke(k){return`entries:${k}`}function zn(k){m(Ke(k),()=>vt(yn(je,"organizations",n,"events",k,"timeEntries"),L=>{s||(T(Ke(k),L.metadata.fromCache),R.set(k,L.docs.map(re=>mE(re,k)).filter(re=>re!==null)),ge())},L=>{s||(E(Ke(k),L),ge())}))}function jr(k,L){k!==V&&(_("items"),_("checklist"),V=k,D=[],z=[],k!==null&&Is(k));const re=k!==null&&L;re&&!F.has("checklist")&&k!==null?Qe(k):!re&&F.has("checklist")&&(_("checklist"),z=[])}function Is(k){m("items",()=>vt(ir(yn(je,"organizations",n,"events",k,"serviceItems"),sr("sortIndex")),L=>{s||k!==V||(T("items",L.metadata.fromCache),D=L.docs.map(gE),ge())},L=>{s||k!==V||(E("items",L),ge())}))}function Qe(k){m("checklist",()=>vt(ir(yn(je,"organizations",n,"events",k,"checklistItems"),sr("sortIndex")),L=>{s||k!==V||(T("checklist",L.metadata.fromCache),z=L.docs.map(_E),ge())},L=>{s||k!==V||(E("checklist",L),ge())}))}function fe(){if(j.size===0)return!1;for(const k of j.values())if(!k)return!1;return!0}function ws(){const k=[...Y.values()].some(Boolean)?"stale":"online";k!==ne&&(ne=k,r(k))}function Gt(k){const L={groups:u,displayGroupIds:a?.displayGroupIds??[],displayName:a?.displayName||"Display"},re=JSON.stringify({state:k,feed:L});re!==Ce&&(Ce=re,t(k,L))}function ge(){if(s)return;const k=y();k.getTime()-p>=lE&&Br(k);const L=d.map(Hr=>({event:Hr,entries:R.get(Hr.id)??[]})),re=oE(l,L,k);if(jr(re?.eventId??null,re?.live??!1),ws(),!fe())return;Gt(aE({sessions:l,events:L,focusItems:V===null?null:{eventId:V,items:D,checklist:z}},k))}function Wt(){s||Ky(I,{lastSeenAt:bd()}).catch(k=>{Hi(k)||console.warn("Display heartbeat failed.",k)})}function qr(){s||(zr(),i())}function zr(){if(!s){s=!0,clearInterval(hn),clearInterval(dn);for(const k of F.values())k();F.clear(),j.clear(),Y.clear(),P.clear(),R.clear()}}$e(),zt(),Br(y());const hn=setInterval(ge,uE),dn=setInterval(Wt,cE);return Wt(),{stop:zr,serverOffsetMs:()=>Tl(g)}}const Oo="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Mo=6,EE=600*1e3,IE=5,wE=15e3,AE=256-256%Oo.length;function RE(){let n="";const e=new Uint8Array(32);for(;n.length<Mo;){crypto.getRandomValues(e);for(const t of e)if(!(t>=AE)&&(n+=Oo[t%Oo.length],n.length===Mo))break}return n}function SE(n){return n.length===Mo?`${n.slice(0,3)}·${n.slice(3)}`:n}async function bE(n){let e=new Error("No pairing code could be created.");for(let t=0;t<IE;t+=1){const r=RE(),i=new Date(Date.now()+EE);try{return await No(Wy(br(je,"displayPairings",r),{uid:n,status:"pending",createdAt:bd(),expiresAt:X.fromDate(i)}),wE,"the pairing code to be saved"),{code:r,expiresAt:i}}catch(s){if(!Hi(s))throw s;e=s}}throw e}function PE(n,e,t,r){const i=br(je,"displayPairings",n);let s=!1,a,u;const l=()=>s?!1:(s=!0,a!==void 0&&clearTimeout(a),u?.(),!0),d=()=>{l()&&(Qy(i).catch(()=>{}),t())};return u=vt(i,p=>{if(s)return;if(!p.exists()){d();return}const g=p.data(),v=g?.status,R=g?.orgId;if(v==="claimed"&&typeof R=="string"&&R.length>0){l()&&e(R);return}const P=Vt(g?.expiresAt);if(P){if(Date.now()>=P.getTime()){d();return}a===void 0&&(a=setTimeout(d,P.getTime()-Date.now()))}},p=>r?.(p)),()=>{l()}}const CE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function ie(n){return n.replace(/[&<>"']/g,e=>CE[e]??e)}const kE=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],DE=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Lo(n){return String(n).padStart(2,"0")}function Ue(n){const e=n.getHours();return`${e%12===0?12:e%12}:${Lo(n.getMinutes())} ${e<12?"AM":"PM"}`}function VE(n){return kE[n.getDay()]}function NE(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function OE(n,e){const t=Ue(n);return NE(n,e)?t:`${DE[n.getDay()]} ${t}`}function ME(n){if(!Number.isFinite(n))return"--:--:--";const e=Math.max(Math.floor(n),0),t=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60;return`${t}:${Lo(r)}:${Lo(i)}`}function Ma(n,e){const t=[...n].length;return t<=12?e:t<=18?Math.round(e*.78):Math.round(e*.64)}function LE(n){return n.length===6?`${n.slice(0,3)}·${n.slice(3)}`:n}const xE=900;function FE(n){const e=n.getTime();return Number.isFinite(e)?e%xE:0}const UE="Reconnecting — showing the last known status",$E={onTime:"tone-ontime",over:"tone-over",ahead:"tone-ahead"};function ff(n){return $E[n]}function ys(n){const e=n.chip===null?"":`<span class="chip-top ${ff(n.chip.tone)}" data-role="variance">${ie(n.chip.text)}</span>`;return`<header class="topbar"><span class="dot ${n.dotClass}"></span><span class="topbar-label">${ie(n.label)}</span><span class="spacer"></span>${e}<span class="clock">${ie(n.clock)}</span></header>`}function vs(n){const e=n.deviceName.trim()===""?"Display":n.deviceName.trim(),t=n.connection==="online",r=t?"connected":"reconnecting";return`<footer class="devbar"><span class="status ${t?"online":"stale"}"></span><span>${ie(e)} · ${r}</span><span class="spacer"></span><span>${ie(n.right)}</span></footer>`}function pf(n){return`<span class="spinner" style="animation-delay:-${FE(n)}ms"></span>`}function or(n,e){return`<div class="stage">${e==="stale"?`<div class="banner" role="status">${ie(UE)}</div>`:""}${n}</div>`}const La=15;function xa(n){const e=n<0?-Math.round(-n):Math.round(n);return e===0?0:e}function Ai(n){return n.plannedMinutes*60}function BE(n,e){if(n.status!=="live"||n.currentItemId===void 0)return null;const t=e.findIndex(r=>r.id===n.currentItemId);return t<0?null:{index:t,item:e[t]}}function mf(n,e,t){const r=[...e].sort((P,V)=>P.sortIndex-V.sortIndex),i=t.getTime(),s=n.startedAt?n.startedAt.getTime():i,a=r.reduce((P,V)=>P+Ai(V),0),u=s+a*1e3,l=BE(n,r);if(l===null){const P=n.endedAt?n.endedAt.getTime():i;return{items:r,currentIndex:null,currentElapsed:0,currentRemaining:0,variance:(P-u)/1e3,projectedEnd:new Date(P),plannedEnd:new Date(u)}}const d=n.currentItemStartedAt?n.currentItemStartedAt.getTime():i,p=Math.max((i-d)/1e3,0),g=Ai(l.item)-p,v=r.slice(l.index+1).reduce((P,V)=>P+Ai(V),0),R=xa(i+(Math.max(g,0)+v)*1e3);return{items:r,currentIndex:l.index,currentElapsed:p,currentRemaining:g,variance:(R-u)/1e3,projectedEnd:new Date(R),plannedEnd:new Date(u)}}function Te(n){if(!Number.isFinite(n))throw new RangeError(`clockText expects a finite number of seconds, got ${String(n)}`);const e=Math.floor(Math.abs(n)),t=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60,s=a=>String(a).padStart(2,"0");return t>0?`${t}:${s(r)}:${s(i)}`:`${r}:${s(i)}`}function gf(n){const e=xa(n.variance);return Math.abs(e)<La?"On time":e>0?`${Te(n.variance)} over`:`${Te(n.variance)} ahead`}function Ts(n){const e=xa(n);return Math.abs(e)<La?"onTime":e>0?"over":"ahead"}function jE(n){return Math.abs(n)<La?"onTime":n>0?"over":"ahead"}function qE(n){return n.currentRemaining>=0?`${Te(n.currentRemaining)} left`:`+${Te(n.currentRemaining)} over`}function _f(n){if(n.currentIndex===null)return 0;const e=n.items[n.currentIndex],t=Ai(e);return t>0?Math.min(Math.max(n.currentElapsed/t,0),1):0}const zE=.381966011250105,HE=.72,GE=.63,WE=.87,KE=.3,QE=.16;function JE(n){return(((Number.isFinite(n)?n:0)*zE%1+HE)%1+1)%1}function YE(n,e,t){const r=n*6,i=(Math.floor(r)%6+6)%6,s=r-Math.floor(r),a=t*(1-e),u=t*(1-e*s),l=t*(1-e*(1-s));let d;switch(i){case 0:d=[t,l,a];break;case 1:d=[u,t,a];break;case 2:d=[a,t,l];break;case 3:d=[a,u,t];break;case 4:d=[l,a,t];break;default:d=[t,a,u];break}return{r:Math.round(d[0]*255),g:Math.round(d[1]*255),b:Math.round(d[2]*255)}}function XE(n){return YE(JE(n),GE,WE)}function wl(n){return`#${[n.r,n.g,n.b].map(e=>e.toString(16).padStart(2,"0")).join("").toUpperCase()}`}function ZE(n,e){return`rgba(${n.r},${n.g},${n.b},${e})`}function eI(n,e){const t=r=>Math.round(r+(255-r)*e);return{r:t(n.r),g:t(n.g),b:t(n.b)}}function yf(n){const e=XE(n);return{base:wl(e),text:wl(eI(e,KE)),soft:ZE(e,QE)}}function vf(n){return new Map(n.map(e=>[e.id,e]))}function tI(n,e){const t=e.get(n);return t===void 0?null:yf(t.sortIndex)}function Fa(n){return[...n].sort((e,t)=>e.sortIndex-t.sortIndex)}function Mn(n){return n.plannedMinutes*60}function Es(n,e){return e.highlightGroupIds.length===0||n===void 0?!1:n.some(t=>e.highlightGroupIds.includes(t))}function Ua(n,e){for(const t of n??[]){const r=tI(t,e);if(r!==null)return r}return null}function Ri(n){return n===null?"":`<span class="dot-sm" style="background:${n.base}"></span>`}function nI(n,e){const t=[];for(const r of n??[]){const i=e.get(r);if(i===void 0)continue;const s=yf(i.sortIndex);t.push(`<span class="chip" style="background:${s.soft};color:${s.text}"><span class="swatch" style="background:${s.base}"></span>${ie(i.name)}</span>`)}return t.join("")}function rI(n,e){const t=[];for(const r of n??[]){const i=e.get(r);i!==void 0&&t.push(ie(i.name))}return t.join(" · ")}function iI(n,e,t){const{session:r}=n,i=Fa(n.items),s=i.length>0&&r.startedAt!==void 0&&r.endedAt!==void 0?mf(r,i,t):null,a=s===null?null:{text:gf(s),tone:Ts(s.variance)},u=ys({dotClass:"dot-idle",label:`ENDED · ${r.eventTitle}`,chip:a,clock:Ue(t)}),l=sI(r,i,s),d=i.length>0?uI(i,r,e):"";return`${u}<div class="body">${l}${d}</div>${vs({deviceName:e.deviceName,connection:e.connection,right:"This summary stays up for 60 minutes after the service ends"})}`}function sI(n,e,t){let r,i="";if(t===null)r="Service ended";else{const p=Ts(t.variance);p==="over"?r="Ran over the plan by":p==="ahead"?r="Finished early by":r="Finished on the plan",i=p==="onTime"?'<div class="big tone-ontime" data-role="ended-variance" style="font-size:150px">On time</div>':`<div class="big ${ff(p)}" data-role="ended-variance" style="font-size:190px">${Te(t.variance)}</div>`}const s=n.startedAt===void 0?"—":Ue(n.startedAt),a=n.endedAt===void 0?"—":Ue(n.endedAt),u=n.startedAt!==void 0&&n.endedAt!==void 0?Te((n.endedAt.getTime()-n.startedAt.getTime())/1e3):"—",l=e.reduce((p,g)=>p+Mn(g),0),d=e.length>0?` <span class="muted">of ${Te(l)}</span>`:"";return`<section class="summary-col"><div class="eyebrow">SERVICE COMPLETE</div><div class="summary-heading">${r}</div>${i}<div class="stats"><div><div class="stat-label">STARTED</div><div class="stat-value">${s}</div></div><div><div class="stat-label">ENDED</div><div class="stat-value">${a}</div></div><div><div class="stat-label">TOTAL</div><div class="stat-value">${u}${d}</div></div></div></section>`}function oI(n,e){const t=n.completedSeconds?.[e.id];if(t!==void 0)return t;if(e.id===n.currentItemId&&n.currentItemStartedAt!==void 0&&n.endedAt!==void 0)return(n.endedAt.getTime()-n.currentItemStartedAt.getTime())/1e3}function aI(n){return n===null?"—":n===0?"On time":`${n>0?"+":"−"}${Te(Math.abs(n))}`}function cI(n){return n===0?"tone-ontime":n>0?"tone-over":"tone-ahead"}function uI(n,e,t){const r=n.map(l=>oI(e,l)),i=n.map((l,d)=>{const p=r[d];return p===void 0?null:p-Mn(l)});let s=-1,a=0;return i.forEach((l,d)=>{l!==null&&l>a&&(a=l,s=d)}),`<aside class="byitem"><div class="table-row head"><div class="col-name">BY ITEM</div><div class="col-num">PLAN</div><div class="col-num">ACTUAL</div><div class="col-delta">+/−</div></div>${n.map((l,d)=>{const p=i[d],g=r[d],v=aI(p),R=p===null?"":` ${cI(p)}`,P=["table-row"];return d===s&&P.push("hl-over"),Es(l.groupIds,t)&&P.push("hl"),`<div class="${P.join(" ")}"><div class="col-name">${ie(l.title)}</div><div class="col-num">${Te(Mn(l))}</div><div class="col-num col-actual">${g===void 0?"—":Te(g)}</div><div class="col-delta${R}">${v}</div></div>`}).join("")}</aside>`}function lI(n,e,t){return`${ys({dotClass:"dot-warn",label:"ProdClock",chip:null,clock:Ue(t)})}<div class="body center"><div class="error-title">Can’t reach ProdClock right now</div><div class="meta">${ie(n.message)}</div><div class="retry">${pf(t)}<span>Retrying…</span></div></div>${vs({deviceName:e.deviceName,connection:e.connection,right:""})}`}const ct={green:"#30D158",orange:"#FF9F0A",mint:"#5AD6A0",accent:"#8FBAFF",neutral:"rgba(255,255,255,0.35)"};function hI(n,e,t){const r=Fa(n.items),i=vf(e.groups),s=ys({dotClass:"dot-idle",label:n.event===null?"STANDBY":"STANDBY · NEXT SERVICE",chip:null,clock:Ue(t)}),a=n.event===null?dI():fI(n.event,n.firstCallAt,n.callTimes,r,i,e,t),u=r.length>0?gI(r,i,e):"";return`${s}<div class="body">${a}${u}</div>${vs({deviceName:e.deviceName,connection:e.connection,right:`Updated ${Ue(t)}`})}`}function dI(){return'<section class="idle-col"><div class="title-idle" style="font-size:64px">No upcoming services</div><div class="meta">Nothing is scheduled in the next few days.</div></section>'}function fI(n,e,t,r,i,s,a){const u=[];if(e!==null&&u.push(`${VE(e)} · first call ${Ue(e)}`),r.length>0){const g=Math.round(r.reduce((v,R)=>v+Mn(R),0)/60);u.push(`${g} min planned`)}const l=u.length===0?"":`<div class="meta">${ie(u.join(" · "))}</div>`,d=[...t].sort((g,v)=>g.time.getTime()-v.time.getTime()).slice(0,lf).map(g=>mI(g,i,s,a)).join(""),p=d===""?"":`<div class="section-label">CALL TIMES</div><div class="call-grid">${d}</div>`;return`<section class="idle-col"><div class="title-idle" style="font-size:${Ma(n.title,78)}px">${ie(n.title)}</div>${l}${pI(e,a)}${p}</section>`}function pI(n,e){if(n===null)return"";const t=(n.getTime()-e.getTime())/1e3;return Number.isFinite(t)?t>0?`<div class="countdown-row"><span class="countdown idle-count" data-role="countdown">${ME(t)}</span><span class="countdown-word">to first call</span></div>`:'<div class="countdown-row"><span class="in-progress" data-role="in-progress">In progress</span></div>':""}function mI(n,e,t,r){const i=Ua(n.groupIds,e),s=i===null?ct.neutral:i.base,a=rI(n.groupIds,e);return`<div class="call-card${Es(n.groupIds,t)?" hl":""}"><span class="call-bar" style="background:${s}"></span><div class="call-text"><div class="call-label">${ie(n.label)}</div><div class="call-team">${a===""?"No team":a}</div></div><div class="call-time">${ie(OE(n.time,r))}</div></div>`}function gI(n,e,t){let r=0;return`<aside class="runofshow"><div class="card-title">RUN OF SHOW</div>${n.map(s=>{const a=Mn(s),l=`<div class="row row-upcoming${Es(s.groupIds,t)?" hl":""}"><div class="row-offset">${Te(r)}</div><div class="row-title">${ie(s.title)}</div>${Ri(Ua(s.groupIds,e))}<div class="row-time">${Te(a)}</div></div>`;return r+=a,l}).join("")}</aside>`}function _I(){return`<svg class="status-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="${ct.green}"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#0E1016" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function yI(n){return`<svg class="status-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="${n}" stroke-width="2.4"/><circle cx="12" cy="12" r="5" fill="${n}"/></svg>`}function vI(){return`<svg class="status-icon" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="${ct.neutral}" stroke-width="2"/></svg>`}function TI(){return'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4h0A2.5 2.5 0 0 1 4 13.5z"/></svg>'}function EI(n){return`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${n}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`}function II(n,e,t){const{session:r}=n,i=Fa(n.items),s=vf(e.groups),a=i.length>0?mf(r,i,t):null,u=a===null?null:a.currentIndex,l=a!==null&&u!==null?a.items[u]:void 0,d=a!==null&&l!==void 0&&r.currentItemStartedAt!==void 0?a:null,p=d!==null&&r.startedAt!==void 0?d:null,g=d!==null&&d.currentRemaining<0,v=p===null?null:{text:gf(p),tone:Ts(p.variance)},R=ys({dotClass:"dot-live",label:`LIVE · ${r.eventTitle}`,chip:v,clock:Ue(t)}),P=l===void 0?wI(r):AI(l,d,g,s),V=i.length>0?SI(i,u,r,g,s,e):"",D=d===null?0:_f(d),z=PI(i,u,D,g,r,p);return`${R}<div class="body">${P}${V}</div>${z}${vs({deviceName:e.deviceName,connection:e.connection,right:""})}`}function wI(n){return`<section class="now-col"><div class="eyebrow-row"><span class="eyebrow">LIVE</span></div><div class="item-title" style="font-size:${Ma(n.eventTitle,92)}px">${ie(n.eventTitle)}</div><div class="subtitle">Service in progress</div></section>`}function AI(n,e,t,r){const i=t?'<span class="tag tone-over">PAST PLANNED TIME</span>':"",s=e===null?'<div class="subtitle">Starting now</div>':RI(e,t),a=e===null?0:Math.round(_f(e)*1e3)/10,u=n.note!==void 0&&n.note.trim()!==""?`<div class="note">${TI()}<div class="note-text">${ie(n.note.trim())}</div></div>`:"";return`<section class="now-col"><div class="eyebrow-row"><span class="eyebrow">NOW</span>${i}</div><div class="item-title" style="font-size:${Ma(n.title,92)}px">${ie(n.title)}</div>${s}<div class="progress"><div class="progress-fill${t?" over":""}" style="width:${a}%"></div></div><div class="chips">${nI(n.groupIds,r)}</div>${u}</section>`}function RI(n,e){const t=Te(n.currentRemaining),r=t.length>5?150:210,i=e?" tone-over":"";return`<div class="countdown-row"><span class="countdown${i}" data-role="countdown" aria-label="${ie(qE(n))}" style="font-size:${r}px">${e?"+":""}${t}</span><span class="countdown-word${i}">${e?"over":"left"}</span></div>`}function SI(n,e,t,r,i,s){return`<aside class="runofshow"><div class="card-title">RUN OF SHOW</div>${n.map((u,l)=>{const d=Mn(u),p=Ua(u.groupIds,i),g=Es(u.groupIds,s)?" hl":"",v=ie(u.title);if(e!==null&&l<e){const R=t.completedSeconds?.[u.id],P=R===void 0?"—":Te(R),V=R!==void 0&&jE(R-d)==="over";return`<div class="row row-done${g}">${_I()}<div class="row-title">${v}</div>${Ri(p)}<div class="row-time${V?" tone-over":""}">${P}</div></div>`}if(e!==null&&l===e){const R=r?ct.orange:ct.accent;return`<div class="row row-current${r?" over":""}${g}">${yI(R)}<div class="row-title">${v}</div>${Ri(p)}<div class="row-time">${Te(d)}</div></div>`}return`<div class="row row-upcoming${g}">${vI()}<div class="row-title">${v}</div>${Ri(p)}<div class="row-time">${Te(d)}</div></div>`}).join("")}</aside>`}function bI(n,e,t,r){const i=Math.round(t*1e3)/10;return`<div class="timeline">${n.map((a,u)=>{const l=Math.max(a.plannedMinutes,0);let d;return u<e?d=`background:${ct.mint}`:u===e?d=r?`background:${ct.orange}`:`background:linear-gradient(90deg, ${ct.accent} ${i}%, rgba(255,255,255,0.12) ${i}%)`:d="background:rgba(255,255,255,0.12)",`<div class="seg" style="flex-grow:${l};${d}"></div>`}).join("")}</div>`}function PI(n,e,t,r,i,s){const a=[];n.length>0&&e!==null&&a.push(bI(n,e,t,r));const u=[];if(i.startedAt!==void 0&&u.push(`<span>Started ${Ue(i.startedAt)}</span>`),s!==null){u.push(`<span>Planned end ${Ue(s.plannedEnd)}</span>`);const l=Ts(s.variance)==="over"?" tone-over":"";u.push(`<span class="${l.trim()}">Projected end ${Ue(s.projectedEnd)}</span>`)}return u.length>0&&a.push(`<div class="timing">${u.join("")}</div>`),a.length===0?"":`<div class="bottom">${a.join("")}</div>`}function CI(n,e){const t=LE(n.code),r=n.expiresAt.getTime()-e.getTime(),i=Number.isFinite(r)&&r>0?`Code expires in ${Te(r/1e3)}`:"Getting a new code";return`<header class="topbar pair-top">${EI(ct.accent)}<span class="brand">ProdClock</span><span class="brand-sub">Display</span></header>
<div class="pair-body">
  <section class="pair-main">
    <div class="eyebrow">PAIR THIS DISPLAY</div>
    <div class="pair-heading">Enter this code in ProdClock</div>
    <div class="code" data-role="pairing-code">${ie(t)}</div>
    <div class="waiting">${pf(e)}<span>Waiting for approval…</span><span class="muted">${ie(i)}</span></div>
  </section>
  <aside class="pair-card">
    <div class="eyebrow">AN ADMIN CAN DO THIS FROM THEIR PHONE OR MAC</div>
    <div class="step"><div class="step-num">1</div><div class="step-text">Open ProdClock and go to <b>Settings › Displays</b></div></div>
    <div class="step"><div class="step-num">2</div><div class="step-text">Tap <b>Add a Display</b> and type the code shown here</div></div>
    <div class="step"><div class="step-num">3</div><div class="step-text">Name the display and pick which teams it should show</div></div>
    <div class="divider"></div>
    <div class="fine">This screen never asks anyone to sign in. It can only show the run of service, and an admin can remove it at any time.</div>
  </aside>
</div>
<footer class="pair-foot">${ie(ZT)}</footer>`}const kI=1280,DI=720,VI=1e3;function Al(n,e,t){switch(n.kind){case"pairing":return or(CI(n,t),e.connection);case"live":return or(II(n,e,t),e.connection);case"ended":return or(iI(n,e,t),e.connection);case"idle":return or(hI(n,e,t),e.connection);case"error":return or(lI(n,e,t),e.connection)}}let xo=null,Rl=null,Sl="",bl,to=null,Pl=!1;function NI(n,e,t){xo={root:n,state:e,ctx:t},to=n,kl(n),Pl||(Pl=!0,window.addEventListener("resize",()=>{to!==null&&kl(to)})),Cl(),bl===void 0&&(bl=window.setInterval(Cl,VI))}function Cl(){if(xo===null)return;const{root:n,state:e,ctx:t}=xo,r=t.now();let i;try{i=Al(e,t,r)}catch(s){console.error("Display render failed; showing the recovery screen.",s),i=Al({kind:"error",message:"The display is recovering."},t,r)}n===Rl&&i===Sl||(n.innerHTML=i,Rl=n,Sl=i)}function kl(n){const e=Math.min(window.innerWidth/kI,window.innerHeight/DI);n.style.setProperty("--scale",String(Number.isFinite(e)&&e>0?e:1))}const OI=5e3;let Dl=!1,no=null,ro=!1,io;function Tf(){return navigator.wakeLock??null}function MI(){Dl||(Dl=!0,Tf()!==null&&(document.addEventListener("visibilitychange",LI),$a()))}function LI(){document.visibilityState==="visible"&&$a()}function Vl(){io===void 0&&(io=window.setTimeout(()=>{io=void 0,$a()},OI))}async function $a(){const n=Tf();if(!(n===null||no!==null||ro)&&document.visibilityState==="visible"){ro=!0;try{const e=await n.request("screen");no=e,e.addEventListener("release",()=>{no=null,document.visibilityState==="visible"&&Vl()})}catch{Vl()}finally{ro=!1}}}const xI=30*1e3,FI=3600*1e3,UI=600*1e3,$I=5,BI=600*1e3,Ef="prodclock.display.lastErrorReload";let Nl=!1;function jI(){if(Nl)return;Nl=!0;const n=Date.now();window.setInterval(()=>{const r=new Date;r.getHours()===4&&r.getMinutes()===0&&Date.now()-n>FI&&window.location.reload()},xI);const e=[],t=()=>{const r=Date.now();for(;e.length>0&&r-e[0]>UI;)e.shift();e.push(r),e.length>$I&&!qI(r)&&(zI(r),window.location.reload())};window.addEventListener("error",t),window.addEventListener("unhandledrejection",t)}function qI(n){try{const e=Number(sessionStorage.getItem(Ef));return Number.isFinite(e)&&n-e<BI}catch{return!1}}function zI(n){try{sessionStorage.setItem(Ef,String(n))}catch{}}const HI=15*1e3,Ol=15*1e3,Fo=document.getElementById("app");let Uo=null,_r={groups:[],displayGroupIds:[],displayName:""},Ba="online",ja=()=>0,Cr=[],Oe=0;function If(){if(!Fo||Uo===null)return;const n={groups:_r.groups,highlightGroupIds:_r.displayGroupIds,connection:Ba,deviceName:_r.displayName,now:()=>new Date(Date.now()+ja())};NI(Fo,Uo,n)}function qa(n){Uo=n,If()}function za(){Oe+=1;const n=Cr;Cr=[];for(const e of n)e();return _r={groups:[],displayGroupIds:[],displayName:""},Ba="online",ja=()=>0,Oe}function wf(n,e){const t=za(),r=TE(n,e,(i,s)=>{t===Oe&&(_r=s,qa(i))},i=>{t===Oe&&(Ba=i,If())},()=>{t===Oe&&Wi(e)});ja=()=>r.serverOffsetMs(),Cr.push(()=>r.stop())}async function Wi(n){const e=za();try{const t=await bE(n);if(e!==Oe)return;qa({kind:"pairing",code:SE(t.code),expiresAt:t.expiresAt});const r=PE(t.code,i=>{e===Oe&&wf(i,n)},()=>{e===Oe&&Wi(n)},i=>console.warn("Pairing listener error; it will keep retrying.",i));Cr.push(r)}catch(t){if(e!==Oe)return;Af("Could not start pairing. Retrying...",t,()=>Wi(n))}}function Af(n,e,t){console.error(n,e),qa({kind:"error",message:n});const r=Oe,i=setTimeout(()=>{r===Oe&&t()},HI);Cr.push(()=>clearTimeout(i))}async function GI(n){const r=(await No(nl(br(je,"userOrganizations",n)),Ol,"the account pointer")).data()?.orgId;if(typeof r!="string"||r.length===0)return null;try{const i=await No(nl(br(je,"organizations",r,"members",n)),Ol,"the display membership"),s=i.data();return i.exists()&&s?.isDisplay===!0?r:null}catch(i){if(Hi(i))return null;throw i}}async function Rf(){const n=za();try{const e=await eE();if(n!==Oe)return;const t=await GI(e.uid);if(n!==Oe)return;t!==null?wf(t,e.uid):await Wi(e.uid)}catch(e){n===Oe&&Af("ProdClock could not start. Retrying...",e,Rf)}}MI();jI();Fo?Rf():console.error("Missing #app element; index.html is broken.");
