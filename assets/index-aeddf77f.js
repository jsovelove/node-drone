(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
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
 */const sT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(n,e){if(!n)throw $o(e)},$o=function(n){return new Error("Firebase Database ("+sT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const iT=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ik=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},im={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iT(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ik(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),l!==64){const f=a<<4&240|l>>2;if(s.push(f),h!==64){const p=l<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},rT=function(n){const e=iT(n);return im.encodeByteArray(e,!0)},gu=function(n){return rT(n).replace(/\./g,"")},_u=function(n){try{return im.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bk(n){return Ja(void 0,n)}function Ja(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ek(t)||(n[t]=Ja(n[t],e[t]));return n}function Ek(n){return n!=="__proto__"}/**
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
 */function Sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ck=()=>Sk().__FIREBASE_DEFAULTS__,kk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ak=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_u(n[1]);return e&&JSON.parse(e)},rm=()=>{try{return Ck()||kk()||Ak()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nk=()=>{var n;return(n=rm())===null||n===void 0?void 0:n.config},xk=n=>{var e;return(e=rm())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class en{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function oT(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[gu(JSON.stringify(t)),gu(JSON.stringify(o)),a].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function am(){var n;const e=(n=rm())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dk(){return typeof self=="object"&&self.self===self}function aT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cT(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function lT(){return sT.NODE_ADMIN===!0}function Rk(){return!am()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Za(){try{return typeof indexedDB=="object"}catch{return!1}}function Ok(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Pk="FirebaseError";class Kt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Pk,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Mk(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,a,s)}}function Mk(n,e){return n.replace(Lk,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Lk=/\{\$([^}]+)}/g;/**
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
 */function ec(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
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
 */const uT=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=ec(_u(r[0])||""),t=ec(_u(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Fk=function(n){const e=uT(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Vk=function(n){const e=uT(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function cr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function yu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function vu(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function xf(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ny(r)&&ny(o)){if(!xf(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ny(n){return n!==null&&typeof n=="object"}/**
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
 */function Or(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function so(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function xa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Uk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hT(n,e){const t=new qk(n,e);return t.subscribe.bind(t)}class qk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Bk(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jd(){}/**
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
 */const X=function(n,e,t,s){let i;if(s<e?i="at least "+e:s>t&&(i=t===0?"none":"no more than "+t),i){const r=n+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(r)}};function on(n,e){return`${n} failed: ${e} argument `}function mt(n,e,t,s){if(!(s&&!t)&&typeof t!="function")throw new Error(on(n,e)+"must be a valid function.")}function sy(n,e,t,s){if(!(s&&!t)&&(typeof t!="object"||t===null))throw new Error(on(n,e)+"must be a valid context object.")}/**
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
 */const Wk=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ch=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function B(n){return n&&n._delegate?n._delegate:n}class _n{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class dT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new en;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jk(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$k(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $k(n){return n===Ui?void 0:n}function jk(n){return n.instantiationMode==="EAGER"}/**
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
 */class fT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const cm=[];var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const pT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Gk=me.INFO,zk={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Hk=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=zk[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=Gk,this._logHandler=Hk,this._userLogHandler=null,cm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}function Kk(n){cm.forEach(e=>{e.setLogLevel(n)})}function Qk(n,e){for(const t of cm){let s=null;e&&e.level&&(s=pT[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,r,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");r>=(s??i.logLevel)&&n({level:me[r].toLowerCase(),message:a,args:o,type:i.name})}}}const Yk=(n,e)=>e.some(t=>n instanceof t);let iy,ry;function Xk(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jk(){return ry||(ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mT=new WeakMap,Df=new WeakMap,gT=new WeakMap,Zd=new WeakMap,lm=new WeakMap;function Zk(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ni(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mT.set(t,n)}).catch(()=>{}),lm.set(e,n),e}function eA(n){if(Df.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Df.set(n,e)}let Rf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Df.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gT.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ni(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tA(n){Rf=n(Rf)}function nA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ef(this),e,...t);return gT.set(s,e.sort?e.sort():[e]),ni(s)}:Jk().includes(n)?function(...e){return n.apply(ef(this),e),ni(mT.get(this))}:function(...e){return ni(n.apply(ef(this),e))}}function sA(n){return typeof n=="function"?nA(n):(n instanceof IDBTransaction&&eA(n),Yk(n,Xk())?new Proxy(n,Rf):n)}function ni(n){if(n instanceof IDBRequest)return Zk(n);if(Zd.has(n))return Zd.get(n);const e=sA(n);return e!==n&&(Zd.set(n,e),lm.set(e,n)),e}const ef=n=>lm.get(n);function iA(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ni(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ni(o.result),c.oldVersion,c.newVersion,ni(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],tf=new Map;function oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=oA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rA.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),i&&c.done]))[0]};return tf.set(e,r),r}tA(n=>({...n,get:(e,t,s)=>oy(e,t)||n.get(e,t,s),has:(e,t)=>!!oy(e,t)||n.has(e,t)}));/**
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
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cA(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function cA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Of="@firebase/app",ay="0.9.3";/**
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
 */const lr=new jo("@firebase/app"),lA="@firebase/app-compat",uA="@firebase/analytics-compat",hA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",mA="@firebase/auth-compat",gA="@firebase/database",_A="@firebase/database-compat",yA="@firebase/functions",vA="@firebase/functions-compat",wA="@firebase/installations",TA="@firebase/installations-compat",IA="@firebase/messaging",bA="@firebase/messaging-compat",EA="@firebase/performance",SA="@firebase/performance-compat",CA="@firebase/remote-config",kA="@firebase/remote-config-compat",AA="@firebase/storage",NA="@firebase/storage-compat",xA="@firebase/firestore",DA="@firebase/firestore-compat",RA="firebase",OA="9.17.1";/**
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
 */const ci="[DEFAULT]",PA={[Of]:"fire-core",[lA]:"fire-core-compat",[hA]:"fire-analytics",[uA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[mA]:"fire-auth-compat",[gA]:"fire-rtdb",[_A]:"fire-rtdb-compat",[yA]:"fire-fn",[vA]:"fire-fn-compat",[wA]:"fire-iid",[TA]:"fire-iid-compat",[IA]:"fire-fcm",[bA]:"fire-fcm-compat",[EA]:"fire-perf",[SA]:"fire-perf-compat",[CA]:"fire-rc",[kA]:"fire-rc-compat",[AA]:"fire-gcs",[NA]:"fire-gcs-compat",[xA]:"fire-fst",[DA]:"fire-fst-compat","fire-js":"fire-js",[RA]:"fire-js-all"};/**
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
 */const li=new Map,tc=new Map;function wu(n,e){try{n.container.addComponent(e)}catch(t){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _T(n,e){n.container.addOrOverwriteComponent(e)}function As(n){const e=n.name;if(tc.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;tc.set(e,n);for(const t of li.values())wu(t,n);return!0}function yT(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function MA(n,e,t=ci){yT(n,e).clearInstance(t)}function LA(){tc.clear()}/**
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
 */const FA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Es=new Rr("app","Firebase",FA);/**
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
 */let VA=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}};/**
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
 */const Si=OA;function um(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ci,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Es.create("bad-app-name",{appName:String(i)});if(t||(t=Nk()),!t)throw Es.create("no-options");const r=li.get(i);if(r){if(xf(t,r.options)&&xf(s,r.config))return r;throw Es.create("duplicate-app",{appName:i})}const o=new fT(i);for(const c of tc.values())o.addComponent(c);const a=new VA(t,s,o);return li.set(i,a),a}function UA(n=ci){const e=li.get(n);if(!e&&n===ci)return um();if(!e)throw Es.create("no-app",{appName:n});return e}function qA(){return Array.from(li.values())}async function vT(n){const e=n.name;li.has(e)&&(li.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function xn(n,e,t){var s;let i=(s=PA[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(a.join(" "));return}As(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function wT(n,e){if(n!==null&&typeof n!="function")throw Es.create("invalid-log-argument");Qk(n,e)}function TT(n){Kk(n)}/**
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
 */const BA="firebase-heartbeat-database",WA=1,nc="firebase-heartbeat-store";let nf=null;function IT(){return nf||(nf=iA(BA,WA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(nc)}}}).catch(n=>{throw Es.create("idb-open",{originalErrorMessage:n.message})})),nf}async function $A(n){try{return(await IT()).transaction(nc).objectStore(nc).get(bT(n))}catch(e){if(e instanceof Kt)lr.warn(e.message);else{const t=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(t.message)}}}async function cy(n,e){try{const s=(await IT()).transaction(nc,"readwrite");return await s.objectStore(nc).put(e,bT(n)),s.done}catch(t){if(t instanceof Kt)lr.warn(t.message);else{const s=Es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lr.warn(s.message)}}}function bT(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jA=1024,GA=30*24*60*60*1e3;class zA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KA(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ly();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=GA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ly(),{heartbeatsToSend:t,unsentEntries:s}=HA(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ly(){return new Date().toISOString().substring(0,10)}function HA(n,e=jA){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),uy(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),uy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class KA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Za()?Ok().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return cy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uy(n){return gu(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function QA(n){As(new _n("platform-logger",e=>new aA(e),"PRIVATE")),As(new _n("heartbeat",e=>new zA(e),"PRIVATE")),xn(Of,ay,n),xn(Of,ay,"esm2017"),xn("fire-js","")}QA("");const YA=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Kt,SDK_VERSION:Si,_DEFAULT_ENTRY_NAME:ci,_addComponent:wu,_addOrOverwriteComponent:_T,_apps:li,_clearComponents:LA,_components:tc,_getProvider:yT,_registerComponent:As,_removeServiceInstance:MA,deleteApp:vT,getApp:UA,getApps:qA,initializeApp:um,onLog:wT,registerVersion:xn,setLogLevel:TT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class XA{constructor(e,t){this._delegate=e,this.firebase=t,wu(e,new _n("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),vT(this._delegate)))}_getService(e,t=ci){var s;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((s=i.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=ci){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){wu(this._delegate,e)}_addOrOverwriteComponent(e){_T(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const JA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},hy=new Rr("app-compat","Firebase",JA);/**
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
 */function ZA(n){const e={},t={__esModule:!0,initializeApp:r,app:i,registerVersion:xn,setLogLevel:TT,onLog:wT,apps:null,SDK_VERSION:Si,INTERNAL:{registerComponent:a,removeApp:s,useAsService:c,modularAPIs:YA}};t.default=t,Object.defineProperty(t,"apps",{get:o});function s(l){delete e[l]}function i(l){if(l=l||ci,!gn(e,l))throw hy.create("no-app",{appName:l});return e[l]}i.App=n;function r(l,u={}){const h=um(l,u);if(gn(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(As(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw hy.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ja(d,l.serviceProps),t[h]=d,n.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?t[h]:null}function c(l,u){return u==="serverAuth"?null:u}return t}/**
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
 */function ET(){const n=ZA(XA);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:ET,extendNamespace:e,createSubscribe:hT,ErrorFactory:Rr,deepExtend:Ja});function e(t){Ja(n,t)}return n}const eN=ET();/**
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
 */const dy=new jo("@firebase/app-compat"),tN="@firebase/app-compat",nN="0.2.3";/**
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
 */function sN(n){xn(tN,nN,n)}/**
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
 */if(Dk()&&self.firebase!==void 0){dy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&dy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const be=eN;sN();var iN="firebase",rN="9.17.1";/**
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
 */be.registerVersion(iN,rN,"app-compat");var oN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,hm=hm||{},ee=oN||self;function Tu(){}function kh(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Qc(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function aN(n){return Object.prototype.hasOwnProperty.call(n,sf)&&n[sf]||(n[sf]=++cN)}var sf="closure_uid_"+(1e9*Math.random()>>>0),cN=0;function lN(n,e,t){return n.call.apply(n.bind,arguments)}function uN(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Ft(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ft=lN:Ft=uN,Ft.apply(null,arguments)}function Bl(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Pt(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ci(){this.s=this.s,this.o=this.o}var hN=0;Ci.prototype.s=!1;Ci.prototype.na=function(){!this.s&&(this.s=!0,this.M(),hN!=0)&&aN(this)};Ci.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ST=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function dm(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function fy(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(kh(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Vt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var dN=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ee.addEventListener("test",Tu,e),ee.removeEventListener("test",Tu,e)}catch{}return n}();function Iu(n){return/^[\s\xa0]*$/.test(n)}var py=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function rf(n,e){return n<e?-1:n>e?1:0}function Ah(){var n=ee.navigator;return n&&(n=n.userAgent)?n:""}function Qn(n){return Ah().indexOf(n)!=-1}function fm(n){return fm[" "](n),n}fm[" "]=Tu;function fN(n){var e=gN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var pN=Qn("Opera"),_o=Qn("Trident")||Qn("MSIE"),CT=Qn("Edge"),Pf=CT||_o,kT=Qn("Gecko")&&!(Ah().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),mN=Ah().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function AT(){var n=ee.document;return n?n.documentMode:void 0}var bu;e:{var of="",af=function(){var n=Ah();if(kT)return/rv:([^\);]+)(\)|;)/.exec(n);if(CT)return/Edge\/([\d\.]+)/.exec(n);if(_o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(mN)return/WebKit\/(\S+)/.exec(n);if(pN)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(af&&(of=af?af[1]:""),_o){var cf=AT();if(cf!=null&&cf>parseFloat(of)){bu=String(cf);break e}}bu=of}var gN={};function _N(){return fN(function(){let n=0;const e=py(String(bu)).split("."),t=py("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=rf(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||rf(i[2].length==0,r[2].length==0)||rf(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Mf;if(ee.document&&_o){var my=AT();Mf=my||parseInt(bu,10)||void 0}else Mf=void 0;var yN=Mf;function sc(n,e){if(Vt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(kT){e:{try{fm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:vN[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&sc.X.h.call(this)}}Pt(sc,Vt);var vN={2:"touch",3:"pen",4:"mouse"};sc.prototype.h=function(){sc.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Yc="closure_listenable_"+(1e6*Math.random()|0),wN=0;function TN(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++wN,this.ba=this.ea=!1}function Nh(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function pm(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function NT(n){const e={};for(const t in n)e[t]=n[t];return e}const gy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xT(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<gy.length;r++)t=gy[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function xh(n){this.src=n,this.g={},this.h=0}xh.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Ff(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new TN(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Lf(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=ST(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Nh(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ff(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var mm="closure_lm_"+(1e6*Math.random()|0),lf={};function DT(n,e,t,s,i){if(s&&s.once)return OT(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)DT(n,e[r],t,s,i);return null}return t=ym(t),n&&n[Yc]?n.N(e,t,Qc(s)?!!s.capture:!!s,i):RT(n,e,t,!1,s,i)}function RT(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=Qc(i)?!!i.capture:!!i,a=_m(n);if(a||(n[mm]=a=new xh(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=IN(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)dN||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(MT(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function IN(){function n(t){return e.call(n.src,n.listener,t)}const e=bN;return n}function OT(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)OT(n,e[r],t,s,i);return null}return t=ym(t),n&&n[Yc]?n.O(e,t,Qc(s)?!!s.capture:!!s,i):RT(n,e,t,!0,s,i)}function PT(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)PT(n,e[r],t,s,i);else s=Qc(s)?!!s.capture:!!s,t=ym(t),n&&n[Yc]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Ff(r,t,s,i),-1<t&&(Nh(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=_m(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ff(e,t,s,i)),(t=-1<n?e[n]:null)&&gm(t))}function gm(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Yc])Lf(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(MT(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=_m(e))?(Lf(t,n),t.h==0&&(t.src=null,e[mm]=null)):Nh(n)}}}function MT(n){return n in lf?lf[n]:lf[n]="on"+n}function bN(n,e){if(n.ba)n=!0;else{e=new sc(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&gm(n),n=t.call(s,e)}return n}function _m(n){return n=n[mm],n instanceof xh?n:null}var uf="__closure_events_fn_"+(1e9*Math.random()>>>0);function ym(n){return typeof n=="function"?n:(n[uf]||(n[uf]=function(e){return n.handleEvent(e)}),n[uf])}function Tt(){Ci.call(this),this.i=new xh(this),this.P=this,this.I=null}Pt(Tt,Ci);Tt.prototype[Yc]=!0;Tt.prototype.removeEventListener=function(n,e,t,s){PT(this,n,e,t,s)};function xt(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Vt(e,n);else if(e instanceof Vt)e.target=e.target||n;else{var i=e;e=new Vt(s,n),xT(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=Wl(o,s,!0,e)&&i}if(o=e.g=n,i=Wl(o,s,!0,e)&&i,i=Wl(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=Wl(o,s,!1,e)&&i}Tt.prototype.M=function(){if(Tt.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Nh(t[s]);delete n.g[e],n.h--}}this.I=null};Tt.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Tt.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Wl(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Lf(n.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var vm=ee.JSON.stringify;function EN(){var n=VT;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class SN{constructor(){this.h=this.g=null}add(e,t){const s=LT.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var LT=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new CN,n=>n.reset());class CN{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function kN(n){ee.setTimeout(()=>{throw n},0)}function FT(n,e){Vf||AN(),Uf||(Vf(),Uf=!0),VT.add(n,e)}var Vf;function AN(){var n=ee.Promise.resolve(void 0);Vf=function(){n.then(NN)}}var Uf=!1,VT=new SN;function NN(){for(var n;n=EN();){try{n.h.call(n.g)}catch(t){kN(t)}var e=LT;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Uf=!1}function Dh(n,e){Tt.call(this),this.h=n||1,this.g=e||ee,this.j=Ft(this.lb,this),this.l=Date.now()}Pt(Dh,Tt);j=Dh.prototype;j.ca=!1;j.R=null;j.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xt(this,"tick"),this.ca&&(wm(this),this.start()))}};j.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wm(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}j.M=function(){Dh.X.M.call(this),wm(this),delete this.g};function Tm(n,e,t){if(typeof n=="function")t&&(n=Ft(n,t));else if(n&&typeof n.handleEvent=="function")n=Ft(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(n,e||0)}function UT(n){n.g=Tm(()=>{n.g=null,n.i&&(n.i=!1,UT(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class xN extends Ci{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:UT(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ic(n){Ci.call(this),this.h=n,this.g={}}Pt(ic,Ci);var _y=[];function qT(n,e,t,s){Array.isArray(t)||(t&&(_y[0]=t.toString()),t=_y);for(var i=0;i<t.length;i++){var r=DT(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function BT(n){pm(n.g,function(e,t){this.g.hasOwnProperty(t)&&gm(e)},n),n.g={}}ic.prototype.M=function(){ic.X.M.call(this),BT(this)};ic.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rh(){this.g=!0}Rh.prototype.Aa=function(){this.g=!1};function DN(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function RN(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function io(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+PN(n,t)+(s?" "+s:"")})}function ON(n,e){n.info(function(){return"TIMEOUT: "+e})}Rh.prototype.info=function(){};function PN(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vm(t)}catch{return e}}var Pr={},yy=null;function Oh(){return yy=yy||new Tt}Pr.Pa="serverreachability";function WT(n){Vt.call(this,Pr.Pa,n)}Pt(WT,Vt);function rc(n){const e=Oh();xt(e,new WT(e))}Pr.STAT_EVENT="statevent";function $T(n,e){Vt.call(this,Pr.STAT_EVENT,n),this.stat=e}Pt($T,Vt);function Gt(n){const e=Oh();xt(e,new $T(e,n))}Pr.Qa="timingevent";function jT(n,e){Vt.call(this,Pr.Qa,n),this.size=e}Pt(jT,Vt);function Xc(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){n()},e)}var Ph={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},GT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Im(){}Im.prototype.h=null;function vy(n){return n.h||(n.h=n.i())}function zT(){}var Jc={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bm(){Vt.call(this,"d")}Pt(bm,Vt);function Em(){Vt.call(this,"c")}Pt(Em,Vt);var qf;function Mh(){}Pt(Mh,Im);Mh.prototype.g=function(){return new XMLHttpRequest};Mh.prototype.i=function(){return{}};qf=new Mh;function Zc(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new ic(this),this.O=MN,n=Pf?125:void 0,this.T=new Dh(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new HT}function HT(){this.i=null,this.g="",this.h=!1}var MN=45e3,Bf={},Eu={};j=Zc.prototype;j.setTimeout=function(n){this.O=n};function Wf(n,e,t){n.K=1,n.v=Fh(Ns(e)),n.s=t,n.P=!0,KT(n,null)}function KT(n,e){n.F=Date.now(),el(n),n.A=Ns(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),nI(t.i,"t",s),n.C=0,t=n.l.H,n.h=new HT,n.g=bI(n.l,t?e:null,!n.s),0<n.N&&(n.L=new xN(Ft(n.La,n,n.g),n.N)),qT(n.S,n.g,"readystatechange",n.ib),e=n.H?NT(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),rc(),DN(n.j,n.u,n.A,n.m,n.U,n.s)}j.ib=function(n){n=n.target;const e=this.L;e&&ws(n)==3?e.l():this.La(n)};j.La=function(n){try{if(n==this.g)e:{const u=ws(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Pf||this.g&&(this.h.h||this.g.fa()||by(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?rc(3):rc(2)),Lh(this);var t=this.g.aa();this.Y=t;t:if(QT(this)){var s=by(this.g);n="";var i=s.length,r=ws(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ki(this),Fa(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,RN(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Iu(a)){var l=a;break t}}l=null}if(t=l)io(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$f(this,t);else{this.i=!1,this.o=3,Gt(12),Ki(this),Fa(this);break e}}this.P?(YT(this,u,o),Pf&&this.i&&u==3&&(qT(this.S,this.T,"tick",this.hb),this.T.start())):(io(this.j,this.m,o,null),$f(this,o)),u==4&&Ki(this),this.i&&!this.I&&(u==4?vI(this.l,this):(this.i=!1,el(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Gt(12)):(this.o=0,Gt(13)),Ki(this),Fa(this)}}}catch{}finally{}};function QT(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function YT(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=LN(n,t),i==Eu){e==4&&(n.o=4,Gt(14),s=!1),io(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Bf){n.o=4,Gt(15),io(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else io(n.j,n.m,i,null),$f(n,i);QT(n)&&i!=Eu&&i!=Bf&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Gt(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Dm(e),e.K=!0,Gt(11))):(io(n.j,n.m,t,"[Invalid Chunked Response]"),Ki(n),Fa(n))}j.hb=function(){if(this.g){var n=ws(this.g),e=this.g.fa();this.C<e.length&&(Lh(this),YT(this,n,e),this.i&&n!=4&&el(this))}};function LN(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Eu:(t=Number(e.substring(t,s)),isNaN(t)?Bf:(s+=1,s+t>e.length?Eu:(e=e.substr(s,t),n.C=s+t,e)))}j.cancel=function(){this.I=!0,Ki(this)};function el(n){n.V=Date.now()+n.O,XT(n,n.O)}function XT(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Xc(Ft(n.gb,n),e)}function Lh(n){n.B&&(ee.clearTimeout(n.B),n.B=null)}j.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(ON(this.j,this.A),this.K!=2&&(rc(),Gt(17)),Ki(this),this.o=2,Fa(this)):XT(this,this.V-n)};function Fa(n){n.l.G==0||n.I||vI(n.l,n)}function Ki(n){Lh(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,wm(n.T),BT(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function $f(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||jf(t.h,n))){if(!n.J&&jf(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)ku(t),qh(t);else break e;xm(t),Gt(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=Xc(Ft(t.cb,t),6e3));if(1>=rI(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else Qi(t,11)}else if((n.J||t.g==n)&&ku(t),!Iu(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Sm(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,Ve(s.F,s.D,m))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=II(s,s.H?s.ka:null,s.V),o.J){oI(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Lh(a),el(a)),s.g=o}else _I(s);0<t.i.length&&Bh(t)}else l[0]!="stop"&&l[0]!="close"||Qi(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qi(t,7):Nm(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}rc(4)}catch{}}function FN(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(kh(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function VN(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(kh(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function JT(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(kh(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=VN(n),s=FN(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var ZT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function UN(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function er(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof er){this.h=e!==void 0?e:n.h,Su(this,n.j),this.s=n.s,this.g=n.g,Cu(this,n.m),this.l=n.l,e=n.i;var t=new oc;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),wy(this,t),this.o=n.o}else n&&(t=String(n).match(ZT))?(this.h=!!e,Su(this,t[1]||"",!0),this.s=Da(t[2]||""),this.g=Da(t[3]||"",!0),Cu(this,t[4]),this.l=Da(t[5]||"",!0),wy(this,t[6]||"",!0),this.o=Da(t[7]||"")):(this.h=!!e,this.i=new oc(null,this.h))}er.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Ra(e,Ty,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Ra(e,Ty,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Ra(t,t.charAt(0)=="/"?WN:BN,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Ra(t,jN)),n.join("")};function Ns(n){return new er(n)}function Su(n,e,t){n.j=t?Da(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Cu(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function wy(n,e,t){e instanceof oc?(n.i=e,GN(n.i,n.h)):(t||(e=Ra(e,$N)),n.i=new oc(e,n.h))}function Ve(n,e,t){n.i.set(e,t)}function Fh(n){return Ve(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Da(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ra(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,qN),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function qN(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Ty=/[#\/\?@]/g,BN=/[#\?:]/g,WN=/[#\?]/g,$N=/[#\?@]/g,jN=/#/g;function oc(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ki(n){n.g||(n.g=new Map,n.h=0,n.i&&UN(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}j=oc.prototype;j.add=function(n,e){ki(this),this.i=null,n=Go(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function eI(n,e){ki(n),e=Go(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function tI(n,e){return ki(n),e=Go(n,e),n.g.has(e)}j.forEach=function(n,e){ki(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};j.oa=function(){ki(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};j.W=function(n){ki(this);let e=[];if(typeof n=="string")tI(this,n)&&(e=e.concat(this.g.get(Go(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};j.set=function(n,e){return ki(this),this.i=null,n=Go(this,n),tI(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};j.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function nI(n,e,t){eI(n,e),0<t.length&&(n.i=null,n.g.set(Go(n,e),dm(t)),n.h+=t.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function Go(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function GN(n,e){e&&!n.j&&(ki(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(eI(this,s),nI(this,i,t))},n)),n.j=e}var zN=class{constructor(e,t){this.h=e,this.g=t}};function sI(n){this.l=n||HN,ee.PerformanceNavigationTiming?(n=ee.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var HN=10;function iI(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function rI(n){return n.h?1:n.g?n.g.size:0}function jf(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Sm(n,e){n.g?n.g.add(e):n.h=e}function oI(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}sI.prototype.cancel=function(){if(this.i=aI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function aI(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return dm(n.i)}function Cm(){}Cm.prototype.stringify=function(n){return ee.JSON.stringify(n,void 0)};Cm.prototype.parse=function(n){return ee.JSON.parse(n,void 0)};function KN(){this.g=new Cm}function QN(n,e,t){const s=t||"";try{JT(n,function(i,r){let o=i;Qc(i)&&(o=vm(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function YN(n,e){const t=new Rh;if(ee.Image){const s=new Image;s.onload=Bl($l,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Bl($l,t,s,"TestLoadImage: error",!1,e),s.onabort=Bl($l,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Bl($l,t,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function $l(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function tl(n){this.l=n.ac||null,this.j=n.jb||!1}Pt(tl,Im);tl.prototype.g=function(){return new Vh(this.l,this.j)};tl.prototype.i=function(n){return function(){return n}}({});function Vh(n,e){Tt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=km,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pt(Vh,Tt);var km=0;j=Vh.prototype;j.open=function(n,e){if(this.readyState!=km)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ac(this)};j.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nl(this)),this.readyState=km};j.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ac(this)),this.g&&(this.readyState=3,ac(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cI(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function cI(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}j.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?nl(this):ac(this),this.readyState==3&&cI(this)}};j.Va=function(n){this.g&&(this.response=this.responseText=n,nl(this))};j.Ua=function(n){this.g&&(this.response=n,nl(this))};j.ga=function(){this.g&&nl(this)};function nl(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ac(n)}j.setRequestHeader=function(n,e){this.v.append(n,e)};j.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ac(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var XN=ee.JSON.parse;function Ke(n){Tt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lI,this.K=this.L=!1}Pt(Ke,Tt);var lI="",JN=/^https?$/i,ZN=["POST","PUT"];j=Ke.prototype;j.Ka=function(n){this.L=n};j.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qf.g(),this.C=this.u?vy(this.u):vy(qf),this.g.onreadystatechange=Ft(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Iy(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=ee.FormData&&n instanceof ee.FormData,!(0<=ST(ZN,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{dI(this),0<this.B&&((this.K=ex(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ft(this.qa,this)):this.A=Tm(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Iy(this,r)}};function ex(n){return _o&&_N()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}j.qa=function(){typeof hm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function Iy(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,uI(n),Uh(n)}function uI(n){n.D||(n.D=!0,xt(n,"complete"),xt(n,"error"))}j.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xt(this,"complete"),xt(this,"abort"),Uh(this))};j.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uh(this,!0)),Ke.X.M.call(this)};j.Ha=function(){this.s||(this.F||this.v||this.l?hI(this):this.fb())};j.fb=function(){hI(this)};function hI(n){if(n.h&&typeof hm<"u"&&(!n.C[1]||ws(n)!=4||n.aa()!=2)){if(n.v&&ws(n)==4)Tm(n.Ha,0,n);else if(xt(n,"readystatechange"),ws(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(ZT)[1]||null;if(!i&&ee.self&&ee.self.location){var r=ee.self.location.protocol;i=r.substr(0,r.length-1)}s=!JN.test(i?i.toLowerCase():"")}t=s}if(t)xt(n,"complete"),xt(n,"success");else{n.m=6;try{var o=2<ws(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",uI(n)}}finally{Uh(n)}}}}function Uh(n,e){if(n.g){dI(n);const t=n.g,s=n.C[0]?Tu:null;n.g=null,n.C=null,e||xt(n,"ready");try{t.onreadystatechange=s}catch{}}}function dI(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ee.clearTimeout(n.A),n.A=null)}function ws(n){return n.g?n.g.readyState:0}j.aa=function(){try{return 2<ws(this)?this.g.status:-1}catch{return-1}};j.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),XN(e)}};function by(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case lI:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}j.Ea=function(){return this.m};j.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fI(n){let e="";return pm(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Am(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=fI(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ve(n,e,t))}function ga(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function pI(n){this.Ca=0,this.i=[],this.j=new Rh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ga("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ga("baseRetryDelayMs",5e3,n),this.bb=ga("retryDelaySeedMs",1e4,n),this.$a=ga("forwardChannelMaxRetries",2,n),this.ta=ga("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new sI(n&&n.concurrentRequestLimit),this.Fa=new KN,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}j=pI.prototype;j.ma=8;j.G=1;function Nm(n){if(mI(n),n.G==3){var e=n.U++,t=Ns(n.F);Ve(t,"SID",n.I),Ve(t,"RID",e),Ve(t,"TYPE","terminate"),sl(n,t),e=new Zc(n,n.j,e,void 0),e.K=2,e.v=Fh(Ns(t)),t=!1,ee.navigator&&ee.navigator.sendBeacon&&(t=ee.navigator.sendBeacon(e.v.toString(),"")),!t&&ee.Image&&(new Image().src=e.v,t=!0),t||(e.g=bI(e.l,null),e.g.da(e.v)),e.F=Date.now(),el(e)}TI(n)}function qh(n){n.g&&(Dm(n),n.g.cancel(),n.g=null)}function mI(n){qh(n),n.u&&(ee.clearTimeout(n.u),n.u=null),ku(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&ee.clearTimeout(n.m),n.m=null)}function Bh(n){iI(n.h)||n.m||(n.m=!0,FT(n.Ja,n),n.C=0)}function tx(n,e){return rI(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Xc(Ft(n.Ja,n,e),wI(n,n.C)),n.C++,!0)}j.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new Zc(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=NT(r),xT(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=gI(this,i,e),t=Ns(this.F),Ve(t,"RID",n),Ve(t,"CVER",22),this.D&&Ve(t,"X-HTTP-Session-Id",this.D),sl(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(fI(r)))+"&"+e:this.o&&Am(t,this.o,r)),Sm(this.h,i),this.Ya&&Ve(t,"TYPE","init"),this.O?(Ve(t,"$req",e),Ve(t,"SID","null"),i.Z=!0,Wf(i,t,null)):Wf(i,t,e),this.G=2}}else this.G==3&&(n?Ey(this,n):this.i.length==0||iI(this.h)||Ey(this))};function Ey(n,e){var t;e?t=e.m:t=n.U++;const s=Ns(n.F);Ve(s,"SID",n.I),Ve(s,"RID",t),Ve(s,"AID",n.T),sl(n,s),n.o&&n.s&&Am(s,n.o,n.s),t=new Zc(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=gI(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Sm(n.h,t),Wf(t,s,e)}function sl(n,e){n.ia&&pm(n.ia,function(t,s){Ve(e,s,t)}),n.l&&JT({},function(t,s){Ve(e,s,t)})}function gI(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Ft(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{QN(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function _I(n){n.g||n.u||(n.Z=1,FT(n.Ia,n),n.A=0)}function xm(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Xc(Ft(n.Ia,n),wI(n,n.A)),n.A++,!0)}j.Ia=function(){if(this.u=null,yI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Xc(Ft(this.eb,this),n)}};j.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Gt(10),qh(this),yI(this))};function Dm(n){n.B!=null&&(ee.clearTimeout(n.B),n.B=null)}function yI(n){n.g=new Zc(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ns(n.sa);Ve(e,"RID","rpc"),Ve(e,"SID",n.I),Ve(e,"CI",n.L?"0":"1"),Ve(e,"AID",n.T),Ve(e,"TYPE","xmlhttp"),sl(n,e),n.o&&n.s&&Am(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Fh(Ns(e)),t.s=null,t.P=!0,KT(t,n)}j.cb=function(){this.v!=null&&(this.v=null,qh(this),xm(this),Gt(19))};function ku(n){n.v!=null&&(ee.clearTimeout(n.v),n.v=null)}function vI(n,e){var t=null;if(n.g==e){ku(n),Dm(n),n.g=null;var s=2}else if(jf(n.h,e))t=e.D,oI(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Oh(),xt(s,new jT(s,t)),Bh(n)}else _I(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&tx(n,e)||s==2&&xm(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:Qi(n,5);break;case 4:Qi(n,10);break;case 3:Qi(n,6);break;default:Qi(n,2)}}}function wI(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function Qi(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Ft(n.kb,n);t||(t=new er("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Su(t,"https"),Fh(t)),YN(t.toString(),s)}else Gt(2);n.G=0,n.l&&n.l.va(e),TI(n),mI(n)}j.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Gt(2)):(this.j.info("Failed to ping google.com"),Gt(1))};function TI(n){if(n.G=0,n.la=[],n.l){const e=aI(n.h);(e.length!=0||n.i.length!=0)&&(fy(n.la,e),fy(n.la,n.i),n.h.i.length=0,dm(n.i),n.i.length=0),n.l.ua()}}function II(n,e,t){var s=t instanceof er?Ns(t):new er(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Cu(s,s.m);else{var i=ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new er(null,void 0);s&&Su(r,s),e&&(r.g=e),i&&Cu(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&Ve(s,t,e),Ve(s,"VER",n.ma),sl(n,s),s}function bI(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ke(new tl({jb:!0})):new Ke(n.ra),e.Ka(n.H),e}function EI(){}j=EI.prototype;j.xa=function(){};j.wa=function(){};j.va=function(){};j.ua=function(){};j.Ra=function(){};function Au(){if(_o&&!(10<=Number(yN)))throw Error("Environmental error: no available transport.")}Au.prototype.g=function(n,e){return new yn(n,e)};function yn(n,e){Tt.call(this),this.g=new pI(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Iu(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Iu(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new zo(this)}Pt(yn,Tt);yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Gt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=II(n,null,n.V),Bh(n)};yn.prototype.close=function(){Nm(this.g)};yn.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=vm(n),n=t);e.i.push(new zN(e.ab++,n)),e.G==3&&Bh(e)};yn.prototype.M=function(){this.g.l=null,delete this.j,Nm(this.g),delete this.g,yn.X.M.call(this)};function SI(n){bm.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Pt(SI,bm);function CI(){Em.call(this),this.status=1}Pt(CI,Em);function zo(n){this.g=n}Pt(zo,EI);zo.prototype.xa=function(){xt(this.g,"a")};zo.prototype.wa=function(n){xt(this.g,new SI(n))};zo.prototype.va=function(n){xt(this.g,new CI)};zo.prototype.ua=function(){xt(this.g,"b")};Au.prototype.createWebChannel=Au.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;Ph.NO_ERROR=0;Ph.TIMEOUT=8;Ph.HTTP_ERROR=6;GT.COMPLETE="complete";zT.EventType=Jc;Jc.OPEN="a";Jc.CLOSE="b";Jc.ERROR="c";Jc.MESSAGE="d";Tt.prototype.listen=Tt.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var nx=function(){return new Au},sx=function(){return Oh()},hf=Ph,ix=GT,rx=Pr,Sy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ox=tl,jl=zT,ax=Ke;const Cy="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ho="9.17.1";/**
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
 */const ui=new jo("@firebase/firestore");function Gf(){return ui.logLevel}function cx(n){ui.setLogLevel(n)}function N(n,...e){if(ui.logLevel<=me.DEBUG){const t=e.map(Rm);ui.debug(`Firestore (${Ho}): ${n}`,...t)}}function et(n,...e){if(ui.logLevel<=me.ERROR){const t=e.map(Rm);ui.error(`Firestore (${Ho}): ${n}`,...t)}}function yo(n,...e){if(ui.logLevel<=me.WARN){const t=e.map(Rm);ui.warn(`Firestore (${Ho}): ${n}`,...t)}}function Rm(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function q(n="Unexpected state"){const e=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+n;throw et(e),new Error(e)}function G(n,e){n||q()}function lx(n,e){n||q()}function F(n,e){return n}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends Kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class kI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ux{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class hx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dx{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(G(typeof s.accessToken=="string"),new kI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new gt(e)}}class fx{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(G(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class px{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new fx(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gx{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.A=t.token,new mx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _x(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class AI{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=_x(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(n,e){return n<e?-1:n>e?1:0}function vo(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}function NI(n){return n+"\0"}/**
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
 */class Be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Be(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new Be(0,0))}static max(){return new H(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cc{constructor(e,t,s){t===void 0?t=0:t>e.length&&q(),s===void 0?s=e.length-t:s>e.length-t&&q(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return cc.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cc?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ge extends cc{construct(e,t,s){return new ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new ge(t)}static emptyPath(){return new ge([])}}const yx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends cc{construct(e,t,s){return new tt(e,t,s)}static isValidIdentifier(e){return yx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(t)}static emptyPath(){return new tt([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ge.fromString(e))}static fromName(e){return new M(ge.fromString(e).popFirst(5))}static empty(){return new M(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ge(e.slice()))}}/**
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
 */class xI{constructor(e,t,s,i){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=i}}function zf(n){return n.fields.find(e=>e.kind===2)}function qi(n){return n.fields.filter(e=>e.kind!==2)}xI.UNKNOWN_ID=-1;class vx{constructor(e,t){this.fieldPath=e,this.kind=t}}class Nu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Nu(0,vn.min())}}function DI(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=H.fromTimestamp(s===1e9?new Be(t+1,0):new Be(t,s));return new vn(i,M.empty(),e)}function RI(n){return new vn(n.readTime,n.key,-1)}class vn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vn(H.min(),M.empty(),-1)}static max(){return new vn(H.max(),M.empty(),-1)}}function Om(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const OI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ai(n){if(n.code!==E.FAILED_PRECONDITION||n.message!==OI)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new T((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof T?t:T.resolve(t)}catch(t){return T.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):T.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):T.reject(t)}static resolve(e){return new T((t,s)=>{t(e)})}static reject(e){return new T((t,s)=>{s(e)})}static waitFor(e){return new T((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},c=>s(c))}),o=!0,r===i&&t()})}static or(e){let t=T.resolve(!1);for(const s of e)t=t.next(i=>i?T.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new T((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,t){return new T((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}/**
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
 */class Wh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new vt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Va(e,t.error)):this.P.resolve()},this.transaction.onerror=s=>{const i=Pm(s.target.error);this.P.reject(new Va(e,i))}}static open(e,t,s,i){try{return new Wh(t,e.transaction(i,s))}catch(r){throw new Va(t,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Tx(t)}}class Ln{constructor(e,t,s){this.name=e,this.version=t,this.S=s,Ln.D(je())===12.2&&et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Wi(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Za())return!1;if(Ln.N())return!0;const e=je(),t=Ln.D(e),s=0<t&&t<10,i=Ln.k(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;t(o)},i.onblocked=()=>{s(new Va(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new A(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new A(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Va(e,o))},i.onupgradeneeded=r=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,i.transaction,r.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,i){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Wh.open(this.db,e,r?"readonly":"readwrite",s),c=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),T.reject(l))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class wx{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Wi(this.q.delete())}}class Va extends A{constructor(e,t){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ni(n){return n.name==="IndexedDbTransactionError"}class Tx{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(N("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Wi(s)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Wi(this.store.add(e))}get(e){return Wi(this.store.get(e)).next(t=>(t===void 0&&(t=null),N("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Wi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Wi(this.store.count())}W(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const i=this.cursor(s),r=[];return this.H(i,(o,a)=>{r.push(a)}).next(()=>r)}{const i=this.store.getAll(s.range);return new T((r,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}}J(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new T((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}Y(e,t){N("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.X=!1;const i=this.cursor(s);return this.H(i,(r,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const i=this.cursor(s);return this.H(i,t)}tt(e){const t=this.cursor({});return new T((s,i)=>{t.onerror=r=>{const o=Pm(r.target.error);i(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,t){const s=[];return new T((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new wx(a),l=t(a.primaryKey,a.value,c);if(l instanceof T){const u=l.catch(h=>(c.done(),T.reject(h)));s.push(u)}c.isDone?i():c.G===null?a.continue():a.continue(c.G)}}).next(()=>T.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Wi(n){return new T((e,t)=>{n.onsuccess=s=>{const i=s.target.result;e(i)},n.onerror=s=>{const i=Pm(s.target.error);t(i)}})}let ky=!1;function Pm(n){const e=Ln.D(je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new A("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ky||(ky=!0,setTimeout(()=>{throw s},0)),s}}return n}class Ix{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){N("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{N("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(t){Ni(t)?N("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ai(t)}await this.nt(6e4)})}}class bx{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.it(t,e))}it(e,t){const s=new Set;let i=t,r=!0;return T.doWhile(()=>r===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return N("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,s.add(o)});r=!1})).next(()=>t-i)}rt(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,s).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,r)).next(a=>(N("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}ot(e,t){let s=e;return t.changes.forEach((i,r)=>{const o=RI(r);Om(o,s)>0&&(s=o)}),new vn(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class tn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}tn.at=-1;/**
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
 */class Ex{constructor(e,t,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Ay(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function MI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */function il(n){return n==null}function lc(n){return n===0&&1/n==-1/0}function LI(n){return typeof n=="number"&&Number.isInteger(n)&&!lc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Sx(){return typeof atob<"u"}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new lt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Cx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function di(n){if(G(!!n),typeof n=="string"){let e=0;const t=Cx.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ur(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */function Mm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function FI(n){const e=n.mapValue.fields.__previous_value__;return Mm(e)?FI(e):e}function uc(n){const e=di(n.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},iu={nullValue:"NULL_VALUE"};function hr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mm(n)?4:VI(n)?9007199254740991:10:q()}function os(n,e){if(n===e)return!0;const t=hr(n);if(t!==hr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return uc(n).isEqual(uc(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=di(s.timestampValue),o=di(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ze(s.doubleValue),o=ze(i.doubleValue);return r===o?lc(r)===lc(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return vo(n.arrayValue.values||[],e.arrayValue.values||[],os);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Ay(r)!==Ay(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!os(r[a],o[a])))return!1;return!0}(n,e);default:return q()}}function hc(n,e){return(n.values||[]).find(t=>os(t,e))!==void 0}function fi(n,e){if(n===e)return 0;const t=hr(n),s=hr(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ze(i.integerValue||i.doubleValue),a=ze(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Ny(n.timestampValue,e.timestampValue);case 4:return Ny(uc(n),uc(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,r){const o=ur(i),a=ur(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ne(o[c],a[c]);if(l!==0)return l}return ne(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ne(ze(i.latitude),ze(r.latitude));return o!==0?o:ne(ze(i.longitude),ze(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=fi(o[c],a[c]);if(l)return l}return ne(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Js.mapValue&&r===Js.mapValue)return 0;if(i===Js.mapValue)return 1;if(r===Js.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ne(a[u],l[u]);if(h!==0)return h;const d=fi(o[a[u]],c[l[u]]);if(d!==0)return d}return ne(a.length,l.length)}(n.mapValue,e.mapValue);default:throw q()}}function Ny(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=di(n),s=di(e),i=ne(t.seconds,s.seconds);return i!==0?i:ne(t.nanos,s.nanos)}function wo(n){return Hf(n)}function Hf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=di(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ur(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,M.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Hf(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Hf(s.fields[a])}`;return r+"}"}(n.mapValue):q();var e,t}function dr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kf(n){return!!n&&"integerValue"in n}function dc(n){return!!n&&"arrayValue"in n}function xy(n){return!!n&&"nullValue"in n}function Dy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ru(n){return!!n&&"mapValue"in n}function Ua(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ua(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(n.arrayValue.values[t]);return e}return Object.assign({},n)}function VI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function kx(n){return"nullValue"in n?iu:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?dr(hi.empty(),M.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:q()}function Ax(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?dr(hi.empty(),M.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Js:q()}function Ry(n,e){const t=fi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Oy(n,e){const t=fi(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class pi{constructor(e,t){this.position=e,this.inclusive=t}}function Py(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=M.comparator(M.fromName(o.referenceValue),t.key):s=fi(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function My(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!os(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class UI{}class fe extends UI{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Nx(e,t,s):t==="array-contains"?new Rx(e,s):t==="in"?new GI(e,s):t==="not-in"?new Ox(e,s):t==="array-contains-any"?new Px(e,s):new fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new xx(e,s):new Dx(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fi(t,this.value)):t!==null&&hr(this.value)===hr(t)&&this.matchesComparison(fi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Te extends UI{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Te(e,t)}matches(e){return To(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function To(n){return n.op==="and"}function Qf(n){return n.op==="or"}function Lm(n){return qI(n)&&To(n)}function qI(n){for(const e of n.filters)if(e instanceof Te)return!1;return!0}function Yf(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+wo(n.value);if(Lm(n))return n.filters.map(e=>Yf(e)).join(",");{const e=n.filters.map(t=>Yf(t)).join(",");return`${n.op}(${e})`}}function BI(n,e){return n instanceof fe?function(t,s){return s instanceof fe&&t.op===s.op&&t.field.isEqual(s.field)&&os(t.value,s.value)}(n,e):n instanceof Te?function(t,s){return s instanceof Te&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&BI(r,s.filters[o]),!0):!1}(n,e):void q()}function WI(n,e){const t=n.filters.concat(e);return Te.create(t,n.op)}function $I(n){return n instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${wo(e.value)}`}(n):n instanceof Te?function(e){return e.op.toString()+" {"+e.getFilters().map($I).join(" ,")+"}"}(n):"Filter"}class Nx extends fe{constructor(e,t,s){super(e,t,s),this.key=M.fromName(s.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class xx extends fe{constructor(e,t){super(e,"in",t),this.keys=jI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dx extends fe{constructor(e,t){super(e,"not-in",t),this.keys=jI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>M.fromName(s.referenceValue))}class Rx extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dc(t)&&hc(t.arrayValue,this.value)}}class GI extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hc(this.value.arrayValue,t)}}class Ox extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(hc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hc(this.value.arrayValue,t)}}class Px extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>hc(this.value.arrayValue,s))}}/**
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
 */class oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qe{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gl(this.root,e,this.comparator,!0)}}class Gl{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??At.RED,this.left=i??At.EMPTY,this.right=r??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new At(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(n,e,t,s,i){return this}insert(n,e,t){return new At(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ee(this.comparator);return t.data=e,t}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qr(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new nn([])}unionWith(e){let t=new Ee(tt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new nn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ru(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=tt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Ua(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());ru(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return os(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Mr(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Nt(Ua(this.value))}}function zI(n){const e=[];return Mr(n.fields,(t,s)=>{const i=new tt([t]);if(ru(s)){const r=zI(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Re{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,H.min(),H.min(),H.min(),Nt.empty(),0)}static newFoundDocument(e,t,s,i){return new Re(e,1,t,H.min(),s,i,0)}static newNoDocument(e,t){return new Re(e,2,t,H.min(),H.min(),Nt.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,H.min(),H.min(),Nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lx{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Xf(n,e=null,t=[],s=[],i=null,r=null,o=null){return new Lx(n,e,t,s,i,r,o)}function fr(n){const e=F(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Yf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),il(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>wo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>wo(s)).join(",")),e.ft=t}return e.ft}function rl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Mx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!BI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!My(n.startAt,e.startAt)&&My(n.endAt,e.endAt)}function xu(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Du(n,e){return n.filters.filter(t=>t instanceof fe&&t.field.isEqual(e))}function Fy(n,e,t){let s=iu,i=!0;for(const r of Du(n,e)){let o=iu,a=!0;switch(r.op){case"<":case"<=":o=kx(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=iu}Ry({value:s,inclusive:i},{value:o,inclusive:a})<0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];Ry({value:s,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}function Vy(n,e,t){let s=Js,i=!0;for(const r of Du(n,e)){let o=Js,a=!0;switch(r.op){case">=":case">":o=Ax(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=Js}Oy({value:s,inclusive:i},{value:o,inclusive:a})>0&&(s=o,i=a)}if(t!==null){for(let r=0;r<n.orderBy.length;++r)if(n.orderBy[r].field.isEqual(e)){const o=t.position[r];Oy({value:s,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(s=o,i=t.inclusive);break}}return{value:s,inclusive:i}}/**
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
 */class Ms{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function HI(n,e,t,s,i,r,o,a){return new Ms(n,e,t,s,i,r,o,a)}function Ko(n){return new Ms(n)}function Uy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fm(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function $h(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Vm(n){return n.collectionGroup!==null}function tr(n){const e=F(n);if(e.dt===null){e.dt=[];const t=$h(e),s=Fm(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new oo(t)),e.dt.push(new oo(tt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new oo(tt.keyField(),r))}}}return e.dt}function cn(n){const e=F(n);if(!e._t)if(e.limitType==="F")e._t=Xf(e.path,e.collectionGroup,tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of tr(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new oo(r.field,o))}const s=e.endAt?new pi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new pi(e.startAt.position,e.startAt.inclusive):null;e._t=Xf(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function Jf(n,e){e.getFirstInequalityField(),$h(n);const t=n.filters.concat([e]);return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ru(n,e,t){return new Ms(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ol(n,e){return rl(cn(n),cn(e))&&n.limitType===e.limitType}function KI(n){return`${fr(cn(n))}|lt:${n.limitType}`}function Zf(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>$I(s)).join(", ")}]`),il(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>wo(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>wo(s)).join(",")),`Target(${t})`}(cn(n))}; limitType=${n.limitType})`}function al(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):M.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of tr(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=Py(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,tr(t),s)||t.endAt&&!function(i,r,o){const a=Py(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,tr(t),s))}(n,e)}function QI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function YI(n){return(e,t)=>{let s=!1;for(const i of tr(n)){const r=Fx(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Fx(n,e,t){const s=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?fi(a,c):q()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return q()}}/**
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
 */function XI(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function JI(n){return{integerValue:""+n}}function ZI(n,e){return LI(e)?JI(e):XI(n,e)}/**
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
 */class jh{constructor(){this._=void 0}}function Vx(n,e,t){return n instanceof Io?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof pr?tb(n,e):n instanceof mr?nb(n,e):function(s,i){const r=eb(s,i),o=qy(r)+qy(s.gt);return Kf(r)&&Kf(s.gt)?JI(o):XI(s.yt,o)}(n,e)}function Ux(n,e,t){return n instanceof pr?tb(n,e):n instanceof mr?nb(n,e):t}function eb(n,e){return n instanceof bo?Kf(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Io extends jh{}class pr extends jh{constructor(e){super(),this.elements=e}}function tb(n,e){const t=sb(e);for(const s of n.elements)t.some(i=>os(i,s))||t.push(s);return{arrayValue:{values:t}}}class mr extends jh{constructor(e){super(),this.elements=e}}function nb(n,e){let t=sb(e);for(const s of n.elements)t=t.filter(i=>!os(i,s));return{arrayValue:{values:t}}}class bo extends jh{constructor(e,t){super(),this.yt=e,this.gt=t}}function qy(n){return ze(n.integerValue||n.doubleValue)}function sb(n){return dc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cl{constructor(e,t){this.field=e,this.transform=t}}function qx(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof pr&&s instanceof pr||t instanceof mr&&s instanceof mr?vo(t.elements,s.elements,os):t instanceof bo&&s instanceof bo?os(t.gt,s.gt):t instanceof Io&&s instanceof Io}(n.transform,e.transform)}class Bx{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ou(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gh{}function ib(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Yo(n.key,Ue.none()):new Qo(n.key,n.data,Ue.none());{const t=n.data,s=Nt.empty();let i=new Ee(tt.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ls(n.key,s,new nn(i.toArray()),Ue.none())}}function Wx(n,e,t){n instanceof Qo?function(s,i,r){const o=s.value.clone(),a=Wy(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ls?function(s,i,r){if(!ou(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Wy(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(rb(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function qa(n,e,t,s){return n instanceof Qo?function(i,r,o,a){if(!ou(i.precondition,r))return o;const c=i.value.clone(),l=$y(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ls?function(i,r,o,a){if(!ou(i.precondition,r))return o;const c=$y(i.fieldTransforms,a,r),l=r.data;return l.setAll(rb(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,o){return ou(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function $x(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=eb(s.transform,i||null);r!=null&&(t===null&&(t=Nt.empty()),t.set(s.field,r))}return t||null}function By(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&vo(t,s,(i,r)=>qx(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qo extends Gh{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ls extends Gh{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function rb(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Wy(n,e,t){const s=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Ux(o,a,t[i]))}return s}function $y(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,Vx(r,o,e))}return s}class Yo extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Um extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jx{constructor(e){this.count=e}}/**
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
 */var it,pe;function ob(n){switch(n){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function ab(n){if(n===void 0)return et("GRPC error has no .code"),E.UNKNOWN;switch(n){case it.OK:return E.OK;case it.CANCELLED:return E.CANCELLED;case it.UNKNOWN:return E.UNKNOWN;case it.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case it.INTERNAL:return E.INTERNAL;case it.UNAVAILABLE:return E.UNAVAILABLE;case it.UNAUTHENTICATED:return E.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case it.NOT_FOUND:return E.NOT_FOUND;case it.ALREADY_EXISTS:return E.ALREADY_EXISTS;case it.PERMISSION_DENIED:return E.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case it.ABORTED:return E.ABORTED;case it.OUT_OF_RANGE:return E.OUT_OF_RANGE;case it.UNIMPLEMENTED:return E.UNIMPLEMENTED;case it.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(pe=it||(it={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return MI(this.inner)}size(){return this.innerSize}}/**
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
 */const Gx=new Qe(M.comparator);function sn(){return Gx}const cb=new Qe(M.comparator);function Oa(...n){let e=cb;for(const t of n)e=e.insert(t.key,t);return e}function lb(n){let e=cb;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function es(){return Ba()}function ub(){return Ba()}function Ba(){return new xi(n=>n.toString(),(n,e)=>n.isEqual(e))}const zx=new Qe(M.comparator),Hx=new Ee(M.comparator);function se(...n){let e=Hx;for(const t of n)e=e.add(t);return e}const Kx=new Ee(ne);function zh(){return Kx}/**
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
 */class ll{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,ul.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ll(H.min(),i,zh(),sn(),se())}}class ul{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ul(s,t,se(),se(),se())}}/**
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
 */class au{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class hb{constructor(e,t){this.targetId=e,this.Et=t}}class db{constructor(e,t,s=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class jy{constructor(){this.At=0,this.Rt=zy(),this.bt=lt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=se(),t=se(),s=se();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:q()}}),new ul(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=zy()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Qx{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=sn(),this.qt=Gy(),this.Ut=new Ee(ne)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.zt(i)&&t(i)})}Jt(e){const t=e.targetId,s=e.Et.count,i=this.Yt(t);if(i){const r=i.target;if(xu(r))if(s===0){const o=new M(r.path);this.Qt(t,o,Re.newNoDocument(o,H.min()))}else G(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&xu(a.target)){const c=new M(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Re.newNoDocument(c,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=se();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new ll(e,t,this.Ut,this.Lt,s);return this.Lt=sn(),this.qt=Gy(),this.Ut=new Ee(ne),i}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new jy,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Ee(ne),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new jy),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Gy(){return new Qe(M.comparator)}function zy(){return new Qe(M.comparator)}/**
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
 */const Yx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Jx=(()=>({and:"AND",or:"OR"}))();class Zx{constructor(e,t){this.databaseId=e,this.wt=t}}function Eo(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fb(n,e){return n.wt?e.toBase64():e.toUint8Array()}function eD(n,e){return Eo(n,e.toTimestamp())}function nt(n){return G(!!n),H.fromTimestamp(function(e){const t=di(e);return new Be(t.seconds,t.nanos)}(n))}function qm(n,e){return function(t){return new ge(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function pb(n){const e=ge.fromString(n);return G(bb(e)),e}function fc(n,e){return qm(n.databaseId,e.path)}function ss(n,e){const t=pb(e);if(t.get(1)!==n.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(gb(t))}function ep(n,e){return qm(n.databaseId,e)}function mb(n){const e=pb(n);return e.length===4?ge.emptyPath():gb(e)}function pc(n){return new ge(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gb(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hy(n,e,t){return{name:fc(n,e),fields:t.value.mapValue.fields}}function _b(n,e,t){const s=ss(n,e.name),i=nt(e.updateTime),r=e.createTime?nt(e.createTime):H.min(),o=new Nt({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(s,i,r,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function tD(n,e){return"found"in e?function(t,s){G(!!s.found),s.found.name,s.found.updateTime;const i=ss(t,s.found.name),r=nt(s.found.updateTime),o=s.found.createTime?nt(s.found.createTime):H.min(),a=new Nt({mapValue:{fields:s.found.fields}});return Re.newFoundDocument(i,r,o,a)}(n,e):"missing"in e?function(t,s){G(!!s.missing),G(!!s.readTime);const i=ss(t,s.missing),r=nt(s.readTime);return Re.newNoDocument(i,r)}(n,e):q()}function nD(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.wt?(G(l===void 0||typeof l=="string"),lt.fromBase64String(l||"")):(G(l===void 0||l instanceof Uint8Array),lt.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:ab(c.code);return new A(l,c.message||"")}(o);t=new db(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ss(n,s.document.name),r=nt(s.document.updateTime),o=s.document.createTime?nt(s.document.createTime):H.min(),a=new Nt({mapValue:{fields:s.document.fields}}),c=Re.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];t=new au(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ss(n,s.document),r=s.readTime?nt(s.readTime):H.min(),o=Re.newNoDocument(i,r),a=s.removedTargetIds||[];t=new au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ss(n,s.document),r=s.removedTargetIds||[];t=new au([],r,i,null)}else{if(!("filter"in e))return q();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new jx(i),o=s.targetId;t=new hb(o,r)}}return t}function mc(n,e){let t;if(e instanceof Qo)t={update:Hy(n,e.key,e.value)};else if(e instanceof Yo)t={delete:fc(n,e.key)};else if(e instanceof Ls)t={update:Hy(n,e.key,e.data),updateMask:cD(e.fieldMask)};else{if(!(e instanceof Um))return q();t={verify:fc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Io)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pr)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof mr)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof bo)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw q()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:eD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(n,e.precondition)),t}function tp(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Ue.updateTime(nt(i.updateTime)):i.exists!==void 0?Ue.exists(i.exists):Ue.none()}(e.currentDocument):Ue.none(),s=e.updateTransforms?e.updateTransforms.map(i=>function(r,o){let a=null;if("setToServerValue"in o)G(o.setToServerValue==="REQUEST_TIME"),a=new Io;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new pr(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new mr(l)}else"increment"in o?a=new bo(r,o.increment):q();const c=tt.fromServerFormat(o.fieldPath);return new cl(c,a)}(n,i)):[];if(e.update){e.update.name;const i=ss(n,e.update.name),r=new Nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new nn(c.map(l=>tt.fromServerFormat(l)))}(e.updateMask);return new Ls(i,r,o,t,s)}return new Qo(i,r,t,s)}if(e.delete){const i=ss(n,e.delete);return new Yo(i,t)}if(e.verify){const i=ss(n,e.verify);return new Um(i,t)}return q()}function sD(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?nt(s.updateTime):nt(i);return r.isEqual(H.min())&&(r=nt(i)),new Bx(r,s.transformResults||[])}(t,e))):[]}function yb(n,e){return{documents:[ep(n,e.path)]}}function vb(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=ep(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=ep(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Ib(Te.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Zr(u.field),direction:rD(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(c,l){return c.wt||il(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function wb(n){let e=mb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){G(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=Tb(u);return h instanceof Te&&Lm(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new oo(eo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,il(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new pi(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new pi(d,h)}(t.endAt)),HI(e,i,o,r,a,"F",c,l)}function iD(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tb(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=eo(e.unaryFilter.field);return fe.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=eo(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=eo(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=eo(e.unaryFilter.field);return fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(e){return fe.create(eo(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Te.create(e.compositeFilter.filters.map(t=>Tb(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(n):q()}function rD(n){return Yx[n]}function oD(n){return Xx[n]}function aD(n){return Jx[n]}function Zr(n){return{fieldPath:n.canonicalString()}}function eo(n){return tt.fromServerFormat(n.fieldPath)}function Ib(n){return n instanceof fe?function(e){if(e.op==="=="){if(Dy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(xy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(xy(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:oD(e.op),value:e.value}}}(n):n instanceof Te?function(e){const t=e.getFilters().map(s=>Ib(s));return t.length===1?t[0]:{compositeFilter:{op:aD(e.op),filters:t}}}(n):q()}function cD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Qt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ky(e)),e=lD(n.get(t),e);return Ky(e)}function lD(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case"":t+="";break;default:t+=r}}return t}function Ky(n){return n+""}function ts(n){const e=n.length;if(G(e>=2),e===2)return G(n.charAt(0)===""&&n.charAt(1)===""),ge.emptyPath();const t=e-2,s=[];let i="";for(let r=0;r<e;){const o=n.indexOf("",r);switch((o<0||o>t)&&q(),n.charAt(o+1)){case"":const a=n.substring(r,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),s.push(c);break;case"":i+=n.substring(r,o),i+="\0";break;case"":i+=n.substring(r,o+1);break;default:q()}r=o+2}return new ge(s)}/**
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
 */const Qy=["userId","batchId"];/**
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
 */function cu(n,e){return[n,Qt(e)]}function Eb(n,e,t){return[n,Qt(e),t]}const uD={},hD=["prefixPath","collectionGroup","readTime","documentId"],dD=["prefixPath","collectionGroup","documentId"],fD=["collectionGroup","readTime","prefixPath","documentId"],pD=["canonicalId","targetId"],mD=["targetId","path"],gD=["path","targetId"],_D=["collectionId","parent"],yD=["indexId","uid"],vD=["uid","sequenceNumber"],wD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],TD=["indexId","uid","orderedDocumentKey"],ID=["userId","collectionPath","documentId"],bD=["userId","collectionPath","largestBatchId"],ED=["userId","collectionGroup","largestBatchId"],Sb=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],SD=[...Sb,"documentOverlays"],Cb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kb=Cb,CD=[...kb,"indexConfiguration","indexState","indexEntries"];/**
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
 */class np extends PI{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function Et(n,e){const t=F(n);return Ln.M(t.se,e)}/**
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
 */class Bm{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Wx(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=qa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ub();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const c=ib(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(t,s)=>By(t,s))&&vo(this.baseMutations,e.baseMutations,(t,s)=>By(t,s))}}class Wm{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){G(e.mutations.length===s.length);let i=zx;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Wm(e,t,s,i)}}/**
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
 */class $m{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class si{constructor(e,t,s,i,r=H.min(),o=H.min(),a=lt.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ab{constructor(e){this.ie=e}}function kD(n,e){let t;if(e.document)t=_b(n.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=M.fromSegments(e.noDocument.path),i=_r(e.noDocument.readTime);t=Re.newNoDocument(s,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const s=M.fromSegments(e.unknownDocument.path),i=_r(e.unknownDocument.version);t=Re.newUnknownDocument(s,i)}}return e.readTime&&t.setReadTime(function(s){const i=new Be(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Yy(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ou(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(i,r){return{name:fc(i,r.key),fields:r.data.value.mapValue.fields,updateTime:Eo(i,r.version.toTimestamp()),createTime:Eo(i,r.createTime.toTimestamp())}}(n.ie,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:gr(e.version)};else{if(!e.isUnknownDocument())return q();s.unknownDocument={path:t.path.toArray(),version:gr(e.version)}}return s}function Ou(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function gr(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function _r(n){const e=new Be(n.seconds,n.nanoseconds);return H.fromTimestamp(e)}function $i(n,e){const t=(e.baseMutations||[]).map(r=>tp(n.ie,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const s=e.mutations.map(r=>tp(n.ie,r)),i=Be.fromMillis(e.localWriteTimeMs);return new Bm(e.batchId,i,t,s)}function Pa(n){const e=_r(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?_r(n.lastLimboFreeSnapshotVersion):H.min();let s;var i;return n.query.documents!==void 0?(G((i=n.query).documents.length===1),s=cn(Ko(mb(i.documents[0])))):s=function(r){return cn(wb(r))}(n.query),new si(s,n.targetId,0,n.lastListenSequenceNumber,e,t,lt.fromBase64String(n.resumeToken))}function Nb(n,e){const t=gr(e.snapshotVersion),s=gr(e.lastLimboFreeSnapshotVersion);let i;i=xu(e.target)?yb(n.ie,e.target):vb(n.ie,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fr(e.target),readTime:t,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:i}}function jm(n){const e=wb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ru(e,e.limit,"L"):e}function df(n,e){return new $m(e.largestBatchId,tp(n.ie,e.overlayMutation))}function Xy(n,e){const t=e.path.lastSegment();return[n,Qt(e.path.popLast()),t]}function Jy(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:gr(s.readTime),documentKey:Qt(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class AD{getBundleMetadata(e,t){return Zy(e).get(t).next(s=>{if(s)return{id:(i=s).bundleId,createTime:_r(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Zy(e).put({bundleId:(s=t).id,createTime:gr(nt(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return ev(e).get(t).next(s=>{if(s)return{name:(i=s).name,query:jm(i.bundledQuery),readTime:_r(i.readTime)};var i})}saveNamedQuery(e,t){return ev(e).put(function(s){return{name:s.name,readTime:gr(nt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Zy(n){return Et(n,"bundles")}function ev(n){return Et(n,"namedQueries")}/**
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
 */class Hh{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const s=t.uid||"";return new Hh(e,s)}getOverlay(e,t){return _a(e).get(Xy(this.userId,t)).next(s=>s?df(this.yt,s):null)}getOverlays(e,t){const s=es();return T.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){const i=[];return s.forEach((r,o)=>{const a=new $m(t,o);i.push(this.oe(e,a))}),T.waitFor(i)}removeOverlaysForBatchId(e,t,s){const i=new Set;t.forEach(o=>i.add(Qt(o.getCollectionPath())));const r=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);r.push(_a(e).Y("collectionPathOverlayIndex",a))}),T.waitFor(r)}getOverlaysForCollection(e,t,s){const i=es(),r=Qt(t),o=IDBKeyRange.bound([this.userId,r,s],[this.userId,r,Number.POSITIVE_INFINITY],!0);return _a(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const l=df(this.yt,c);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,t,s,i){const r=es();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return _a(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,l,u)=>{const h=df(this.yt,l);r.size()<i||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}oe(e,t){return _a(e).put(function(s,i,r){const[o,a,c]=Xy(i,r.mutation.key);return{userId:i,collectionPath:a,documentId:c,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:mc(s.ie,r.mutation)}}(this.yt,this.userId,t))}}function _a(n){return Et(n,"documentOverlays")}/**
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
 */class ji{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ze(e.integerValue));else if("doubleValue"in e){const s=ze(e.doubleValue);isNaN(s)?this.he(t,13):(this.he(t,15),lc(s)?t.le(0):t.le(s))}else if("timestampValue"in e){const s=e.timestampValue;this.he(t,20),typeof s=="string"?t.fe(s):(t.fe(`${s.seconds||""}`),t.le(s.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(ur(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.he(t,45),t.le(s.latitude||0),t.le(s.longitude||0)}else"mapValue"in e?VI(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):q()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const s=e.fields||{};this.he(t,55);for(const i of Object.keys(s))this.de(i,t),this.ce(s[i],t)}ye(e,t){const s=e.values||[];this.he(t,50);for(const i of s)this.ce(i,t)}me(e,t){this.he(t,37),M.fromName(e).path.forEach(s=>{this.he(t,60),this.pe(s,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}ji.Ie=new ji;function ND(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function tv(n){const e=64-function(t){let s=0;for(let i=0;i<8;++i){const r=ND(255&t[i]);if(s+=r,r!==8)break}return s}(n);return Math.ceil(e/8)}class xD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ee(s.value),s=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.be(s.value),s=t.next();this.Pe()}ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ee(s);else if(s<2048)this.Ee(960|s>>>6),this.Ee(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ee(480|s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s);else{const i=t.codePointAt(0);this.Ee(240|i>>>18),this.Ee(128|63&i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i)}}this.Ae()}Ve(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const i=t.codePointAt(0);this.be(240|i>>>18),this.be(128|63&i>>>12),this.be(128|63&i>>>6),this.be(128|63&i)}}this.Pe()}Se(e){const t=this.De(e),s=tv(t);this.Ce(1+s),this.buffer[this.position++]=255&s;for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=255&t[i]}xe(e){const t=this.De(e),s=tv(t);this.Ce(1+s),this.buffer[this.position++]=~(255&s);for(let i=t.length-s;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(i){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,i,!1),new Uint8Array(r.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let i=1;i<t.length;++i)t[i]^=s?255:0;return t}Ee(e){const t=255&e;t===0?(this.ke(0),this.ke(255)):t===255?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;t===0?(this.Me(0),this.Me(255)):t===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const i=new Uint8Array(s);i.set(this.buffer),this.buffer=i}}class DD{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class RD{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class ya{constructor(){this.$e=new xD,this.Be=new DD(this.$e),this.Le=new RD(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class Gi{constructor(e,t,s,i){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=i}Ue(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new Gi(this.indexId,this.documentKey,this.arrayValue,s)}}function js(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=nv(n.arrayValue,e.arrayValue),t!==0?t:(t=nv(n.directionalValue,e.directionalValue),t!==0?t:M.comparator(n.documentKey,e.documentKey)))}function nv(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class OD{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const s=t;s.isInequality()?this.Qe=s:this.Ge.push(s)}}je(e){G(e.collectionGroup===this.collectionId);const t=zf(e);if(t!==void 0&&!this.We(t))return!1;const s=qi(e);let i=0,r=0;for(;i<s.length&&this.We(s[i]);++i);if(i===s.length)return!0;if(this.Qe!==void 0){const o=s[i];if(!this.ze(this.Qe,o)||!this.He(this.Ke[r++],o))return!1;++i}for(;i<s.length;++i){const o=s[i];if(r>=this.Ke.length||!this.He(this.Ke[r++],o))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function xb(n){var e,t;if(G(n instanceof fe||n instanceof Te),n instanceof fe){if(n instanceof GI){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(r=>fe.create(n.field,"==",r)))||[];return Te.create(i,"or")}return n}const s=n.filters.map(i=>xb(i));return Te.create(s,n.op)}function PD(n){if(n.getFilters().length===0)return[];const e=rp(xb(n));return G(Db(e)),sp(e)||ip(e)?[e]:e.getFilters()}function sp(n){return n instanceof fe}function ip(n){return n instanceof Te&&Lm(n)}function Db(n){return sp(n)||ip(n)||function(e){if(e instanceof Te&&Qf(e)){for(const t of e.getFilters())if(!sp(t)&&!ip(t))return!1;return!0}return!1}(n)}function rp(n){if(G(n instanceof fe||n instanceof Te),n instanceof fe)return n;if(n.filters.length===1)return rp(n.filters[0]);const e=n.filters.map(s=>rp(s));let t=Te.create(e,n.op);return t=Pu(t),Db(t)?t:(G(t instanceof Te),G(To(t)),G(t.filters.length>1),t.filters.reduce((s,i)=>Gm(s,i)))}function Gm(n,e){let t;return G(n instanceof fe||n instanceof Te),G(e instanceof fe||e instanceof Te),t=n instanceof fe?e instanceof fe?function(s,i){return Te.create([s,i],"and")}(n,e):sv(n,e):e instanceof fe?sv(e,n):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),To(s)&&To(i))return WI(s,i.getFilters());const r=Qf(s)?s:i,o=Qf(s)?i:s,a=r.filters.map(c=>Gm(c,o));return Te.create(a,"or")}(n,e),Pu(t)}function sv(n,e){if(To(e))return WI(e,n.getFilters());{const t=e.filters.map(s=>Gm(n,s));return Te.create(t,"or")}}function Pu(n){if(G(n instanceof fe||n instanceof Te),n instanceof fe)return n;const e=n.getFilters();if(e.length===1)return Pu(e[0]);if(qI(n))return n;const t=e.map(i=>Pu(i)),s=[];return t.forEach(i=>{i instanceof fe?s.push(i):i instanceof Te&&(i.op===n.op?s.push(...i.filters):s.push(i))}),s.length===1?s[0]:Te.create(s,n.op)}/**
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
 */class MD{constructor(){this.Je=new zm}addToCollectionParentIndex(e,t){return this.Je.add(t),T.resolve()}getCollectionParents(e,t){return T.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return T.resolve()}deleteFieldIndex(e,t){return T.resolve()}getDocumentsMatchingTarget(e,t){return T.resolve(null)}getIndexType(e,t){return T.resolve(0)}getFieldIndexes(e,t){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,t){return T.resolve(vn.min())}getMinOffsetFromCollectionGroup(e,t){return T.resolve(vn.min())}updateCollectionGroup(e,t,s){return T.resolve()}updateIndexEntries(e,t){return T.resolve()}}class zm{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Ee(ge.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ee(ge.comparator)).toArray()}}/**
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
 */const zl=new Uint8Array(0);class LD{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new zm,this.Xe=new xi(s=>fr(s),(s,i)=>rl(s,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const s=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.Ye.add(t)});const r={collectionId:s,parent:Qt(i)};return iv(e).put(r)}return T.resolve()}getCollectionParents(e,t){const s=[],i=IDBKeyRange.bound([t,""],[NI(t),""],!1,!0);return iv(e).W(i).next(r=>{for(const o of r){if(o.collectionId!==t)break;s.push(ts(o.parent))}return s})}addFieldIndex(e,t){const s=Hl(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const r=s.add(i);if(t.indexState){const o=wa(e);return r.next(a=>{o.put(Jy(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return r.next()}deleteFieldIndex(e,t){const s=Hl(e),i=wa(e),r=va(e);return s.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=va(e);let i=!0;const r=new Map;return T.forEach(this.Ze(t),o=>this.tn(e,o).next(a=>{i&&(i=!!a),r.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return T.forEach(r,(c,l)=>{var u;N("IndexedDbIndexManager",`Using index ${u=c,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`} to execute ${fr(t)}`);const h=function(S,C){const _=zf(C);if(_===void 0)return null;for(const v of Du(S,_.fieldPath))switch(v.op){case"array-contains-any":return v.value.arrayValue.values||[];case"array-contains":return[v.value]}return null}(l,c),d=function(S,C){const _=new Map;for(const v of qi(C))for(const I of Du(S,v.fieldPath))switch(I.op){case"==":case"in":_.set(v.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return _.set(v.fieldPath.canonicalString(),I.value),Array.from(_.values())}return null}(l,c),f=function(S,C){const _=[];let v=!0;for(const I of qi(C)){const b=I.kind===0?Fy(S,I.fieldPath,S.startAt):Vy(S,I.fieldPath,S.startAt);_.push(b.value),v&&(v=b.inclusive)}return new pi(_,v)}(l,c),p=function(S,C){const _=[];let v=!0;for(const I of qi(C)){const b=I.kind===0?Vy(S,I.fieldPath,S.endAt):Fy(S,I.fieldPath,S.endAt);_.push(b.value),v&&(v=b.inclusive)}return new pi(_,v)}(l,c),m=this.en(c,l,f),g=this.en(c,l,p),y=this.nn(c,l,d),w=this.sn(c.indexId,h,m,f.inclusive,g,p.inclusive,y);return T.forEach(w,S=>s.J(S,t.limit).next(C=>{C.forEach(_=>{const v=M.fromSegments(_.documentKey);o.has(v)||(o=o.add(v),a.push(v))})}))}).next(()=>a)}return T.resolve(null)})}Ze(e){let t=this.Xe.get(e);return t||(e.filters.length===0?t=[e]:t=PD(Te.create(e.filters,"and")).map(s=>Xf(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,t),t)}sn(e,t,s,i,r,o,a){const c=(t!=null?t.length:1)*Math.max(s.length,r.length),l=c/(t!=null?t.length:1),u=[];for(let h=0;h<c;++h){const d=t?this.rn(t[h/l]):zl,f=this.on(e,d,s[h%l],i),p=this.un(e,d,r[h%l],o),m=a.map(g=>this.on(e,d,g,!0));u.push(...this.createRange(f,p,m))}return u}on(e,t,s,i){const r=new Gi(e,M.empty(),t,s);return i?r:r.Ue()}un(e,t,s,i){const r=new Gi(e,M.empty(),t,s);return i?r.Ue():r}tn(e,t){const s=new OD(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(r=>{let o=null;for(const a of r)s.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const i=this.Ze(t);return T.forEach(i,r=>this.tn(e,r).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new Ee(tt.comparator),l=!1;for(const u of a.filters)for(const h of u.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?l=!0:c=c.add(h.field));for(const u of a.orderBy)u.field.isKeyField()||(c=c.add(u.field));return c.size+(l?1:0)}(r)&&(s=1):s=0})).next(()=>function(r){return r.limit!==null}(t)&&i.length>1&&s===2?1:s)}cn(e,t){const s=new ya;for(const i of qi(e)){const r=t.data.field(i.fieldPath);if(r==null)return null;const o=s.qe(i.kind);ji.Ie.ue(r,o)}return s.Fe()}rn(e){const t=new ya;return ji.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const s=new ya;return ji.Ie.ue(dr(this.databaseId,t),s.qe(function(i){const r=qi(i);return r.length===0?0:r[r.length-1].kind}(e))),s.Fe()}nn(e,t,s){if(s===null)return[];let i=[];i.push(new ya);let r=0;for(const o of qi(e)){const a=s[r++];for(const c of i)if(this.hn(t,o.fieldPath)&&dc(a))i=this.ln(i,o,a);else{const l=c.qe(o.kind);ji.Ie.ue(a,l)}}return this.fn(i)}en(e,t,s){return this.nn(e,t,s.position)}fn(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Fe();return t}ln(e,t,s){const i=[...e],r=[];for(const o of s.arrayValue.values||[])for(const a of i){const c=new ya;c.seed(a.Fe()),ji.Ie.ue(o,c.qe(t.kind)),r.push(c)}return r}hn(e,t){return!!e.filters.find(s=>s instanceof fe&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Hl(e),i=wa(e);return(t?s.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.W()).next(r=>{const o=[];return T.forEach(r,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,u){const h=u?new Nu(u.sequenceNumber,new vn(_r(u.readTime),new M(ts(u.documentKey)),u.largestBatchId)):Nu.empty(),d=l.fields.map(([f,p])=>new vx(tt.fromServerFormat(f),p));return new xI(l.indexId,l.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,i)=>{const r=s.indexState.sequenceNumber-i.indexState.sequenceNumber;return r!==0?r:ne(s.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const i=Hl(e),r=wa(e);return this.dn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>T.forEach(a,c=>r.put(Jy(c.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return T.forEach(t,(i,r)=>{const o=s.get(i.collectionGroup);return(o?T.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(s.set(i.collectionGroup,a),T.forEach(a,c=>this._n(e,i,c).next(l=>{const u=this.wn(r,c);return l.isEqual(u)?T.resolve():this.mn(e,r,c,l,u)}))))})}gn(e,t,s,i){return va(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.an(s,t.key),documentKey:t.key.path.toArray()})}yn(e,t,s,i){return va(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.an(s,t.key),t.key.path.toArray()])}_n(e,t,s){const i=va(e);let r=new Ee(js);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.an(s,t)])},(o,a)=>{r=r.add(new Gi(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>r)}wn(e,t){let s=new Ee(js);const i=this.cn(t,e);if(i==null)return s;const r=zf(t);if(r!=null){const o=e.data.field(r.fieldPath);if(dc(o))for(const a of o.arrayValue.values||[])s=s.add(new Gi(t.indexId,e.key,this.rn(a),i))}else s=s.add(new Gi(t.indexId,e.key,zl,i));return s}mn(e,t,s,i,r){N("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,l,u,h){const d=a.getIterator(),f=c.getIterator();let p=Qr(d),m=Qr(f);for(;p||m;){let g=!1,y=!1;if(p&&m){const w=l(p,m);w<0?y=!0:w>0&&(g=!0)}else p!=null?y=!0:g=!0;g?(u(m),m=Qr(f)):y?(h(p),p=Qr(d)):(p=Qr(d),m=Qr(f))}}(i,r,js,a=>{o.push(this.gn(e,t,s,a))},a=>{o.push(this.yn(e,t,s,a))}),T.waitFor(o)}dn(e){let t=1;return wa(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,i,r)=>{r.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>js(o,a)).filter((o,a,c)=>!a||js(o,c[a-1])!==0);const i=[];i.push(e);for(const o of s){const a=js(o,e),c=js(o,t);if(a===0)i[0]=e.Ue();else if(a>0&&c<0)i.push(o),i.push(o.Ue());else if(c>0)break}i.push(t);const r=[];for(let o=0;o<i.length;o+=2){if(this.pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,zl,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,zl,[]];r.push(IDBKeyRange.bound(a,c))}return r}pn(e,t){return js(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(rv)}getMinOffset(e,t){return T.mapArray(this.Ze(t),s=>this.tn(e,s).next(i=>i||q())).next(rv)}}function iv(n){return Et(n,"collectionParents")}function va(n){return Et(n,"indexEntries")}function Hl(n){return Et(n,"indexConfiguration")}function wa(n){return Et(n,"indexState")}function rv(n){G(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const i=n[s].indexState.offset;Om(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new vn(e.readTime,e.documentKey,t)}/**
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
 */const ov={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Rb(n,e,t){const s=n.store("mutations"),i=n.store("documentMutations"),r=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=s.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(c.next(()=>{G(a===1)}));const l=[];for(const u of t.mutations){const h=Eb(e,u.key.path,t.batchId);r.push(i.delete(h)),l.push(u.key)}return T.waitFor(r).next(()=>l)}function Mu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class Kh{constructor(e,t,s,i){this.userId=e,this.yt=t,this.indexManager=s,this.referenceDelegate=i,this.In={}}static re(e,t,s,i){G(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new Kh(r,t,s,i)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).Z({index:"userMutationsIndex",range:s},(i,r,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,i){const r=to(e),o=Gs(e);return o.add({}).next(a=>{G(typeof a=="number");const c=new Bm(a,t,s,i),l=function(d,f,p){const m=p.baseMutations.map(y=>mc(d.ie,y)),g=p.mutations.map(y=>mc(d.ie,y));return{userId:f,batchId:p.batchId,localWriteTimeMs:p.localWriteTime.toMillis(),baseMutations:m,mutations:g}}(this.yt,this.userId,c),u=[];let h=new Ee((d,f)=>ne(d.canonicalString(),f.canonicalString()));for(const d of i){const f=Eb(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(r.put(f,uD))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),T.waitFor(u).next(()=>c)})}lookupMutationBatch(e,t){return Gs(e).get(t).next(s=>s?(G(s.userId===this.userId),$i(this.yt,s)):null)}Tn(e,t){return this.In[t]?T.resolve(this.In[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const i=s.keys();return this.In[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=IDBKeyRange.lowerBound([this.userId,s]);let r=null;return Gs(e).Z({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(G(a.batchId>=s),r=$i(this.yt,a)),c.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Gs(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,r,o)=>{s=r.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Gs(e).W("userMutationsIndex",t).next(s=>s.map(i=>$i(this.yt,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=cu(this.userId,t.path),i=IDBKeyRange.lowerBound(s),r=[];return to(e).Z({range:i},(o,a,c)=>{const[l,u,h]=o,d=ts(u);if(l===this.userId&&t.path.isEqual(d))return Gs(e).get(h).next(f=>{if(!f)throw q();G(f.userId===this.userId),r.push($i(this.yt,f))});c.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ee(ne);const i=[];return t.forEach(r=>{const o=cu(this.userId,r.path),a=IDBKeyRange.lowerBound(o),c=to(e).Z({range:a},(l,u,h)=>{const[d,f,p]=l,m=ts(f);d===this.userId&&r.path.isEqual(m)?s=s.add(p):h.done()});i.push(c)}),T.waitFor(i).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1,r=cu(this.userId,s),o=IDBKeyRange.lowerBound(r);let a=new Ee(ne);return to(e).Z({range:o},(c,l,u)=>{const[h,d,f]=c,p=ts(d);h===this.userId&&s.isPrefixOf(p)?p.length===i&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,t){const s=[],i=[];return t.forEach(r=>{i.push(Gs(e).get(r).next(o=>{if(o===null)throw q();G(o.userId===this.userId),s.push($i(this.yt,o))}))}),T.waitFor(i).next(()=>s)}removeMutationBatch(e,t){return Rb(e.se,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.An(t.batchId)}),T.forEach(s,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return T.resolve();const s=IDBKeyRange.lowerBound([this.userId]),i=[];return to(e).Z({range:s},(r,o,a)=>{if(r[0]===this.userId){const c=ts(r[1]);i.push(c)}else a.done()}).next(()=>{G(i.length===0)})})}containsKey(e,t){return Ob(e,this.userId,t)}Rn(e){return Pb(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ob(n,e,t){const s=cu(e,t.path),i=s[1],r=IDBKeyRange.lowerBound(s);let o=!1;return to(n).Z({range:r,X:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Gs(n){return Et(n,"mutations")}function to(n){return Et(n,"documentMutations")}function Pb(n){return Et(n,"mutationQueues")}/**
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
 */class yr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new yr(0)}static vn(){return new yr(-1)}}/**
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
 */class FD{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next(t=>{const s=new yr(t.highestTargetId);return t.highestTargetId=s.next(),this.Sn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(t=>H.fromTimestamp(new Be(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=t,s&&(i.lastRemoteSnapshotVersion=s.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Sn(e,i)))}addTargetData(e,t){return this.Dn(e,t).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(t,s),this.Sn(e,s))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Yr(e).delete(t.targetId)).next(()=>this.Vn(e)).next(s=>(G(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,t,s){let i=0;const r=[];return Yr(e).Z((o,a)=>{const c=Pa(a);c.sequenceNumber<=t&&s.get(c.targetId)===null&&(i++,r.push(this.removeTargetData(e,c)))}).next(()=>T.waitFor(r)).next(()=>i)}forEachTarget(e,t){return Yr(e).Z((s,i)=>{const r=Pa(i);t(r)})}Vn(e){return av(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Sn(e,t){return av(e).put("targetGlobalKey",t)}Dn(e,t){return Yr(e).put(Nb(this.yt,t))}Cn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=fr(t),i=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let r=null;return Yr(e).Z({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const l=Pa(a);rl(t,l.target)&&(r=l,c.done())}).next(()=>r)}addMatchingKeys(e,t,s){const i=[],r=Ys(e);return t.forEach(o=>{const a=Qt(o.path);i.push(r.put({targetId:s,path:a})),i.push(this.referenceDelegate.addReference(e,s,o))}),T.waitFor(i)}removeMatchingKeys(e,t,s){const i=Ys(e);return T.forEach(t,r=>{const o=Qt(r.path);return T.waitFor([i.delete([s,o]),this.referenceDelegate.removeReference(e,s,r)])})}removeMatchingKeysForTargetId(e,t){const s=Ys(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(i)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ys(e);let r=se();return i.Z({range:s,X:!0},(o,a,c)=>{const l=ts(o[1]),u=new M(l);r=r.add(u)}).next(()=>r)}containsKey(e,t){const s=Qt(t.path),i=IDBKeyRange.bound([s],[NI(s)],!1,!0);let r=0;return Ys(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],c,l)=>{o!==0&&(r++,l.done())}).next(()=>r>0)}ne(e,t){return Yr(e).get(t).next(s=>s?Pa(s):null)}}function Yr(n){return Et(n,"targets")}function av(n){return Et(n,"targetGlobal")}function Ys(n){return Et(n,"targetDocuments")}/**
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
 */function cv([n,e],[t,s]){const i=ne(n,t);return i===0?ne(e,s):i}class VD{constructor(e){this.xn=e,this.buffer=new Ee(cv),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();cv(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class UD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){N("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ni(t)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ai(t)}await this.Fn(3e5)})}}class qD{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return T.resolve(tn.at);const s=new VD(t);return this.$n.forEachTarget(e,i=>s.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>s.On(i))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.$n.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(ov)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ov):this.qn(e,t))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let s,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(r=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(l=Date.now(),Gf()<=me.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:h})))}}/**
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
 */class BD{constructor(e,t){this.db=e,this.garbageCollector=function(s,i){return new qD(s,i)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(i=>s+i))}Un(e){let t=0;return this.Ln(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,(s,i)=>t(i))}addReference(e,t,s){return Kl(e,s)}removeReference(e,t,s){return Kl(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Kl(e,t)}Gn(e,t){return function(s,i){let r=!1;return Pb(s).tt(o=>Ob(s,o,i).next(a=>(a&&(r=!0),T.resolve(!a)))).next(()=>r)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=t){const c=this.Gn(e,o).next(l=>{if(!l)return r++,s.getEntry(e,o).next(()=>(s.removeEntry(o,H.min()),Ys(e).delete([0,Qt(o.path)])))});i.push(c)}}).next(()=>T.waitFor(i)).next(()=>s.apply(e)).next(()=>r)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Kl(e,t)}Kn(e,t){const s=Ys(e);let i,r=tn.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:l})=>{o===0?(r!==tn.at&&t(new M(ts(i)),r),r=l,i=c):r=tn.at}).next(()=>{r!==tn.at&&t(new M(ts(i)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kl(n,e){return Ys(n).put(function(t,s){return{targetId:0,path:Qt(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Mb{constructor(){this.changes=new xi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?T.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class WD{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return Vi(e).put(s)}removeEntry(e,t,s){return Vi(e).delete(function(i,r){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ou(r),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Qn(e,s)))}getEntry(e,t){let s=Re.newInvalidDocument(t);return Vi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ta(t))},(i,r)=>{s=this.jn(t,r)}).next(()=>s)}Wn(e,t){let s={size:0,document:Re.newInvalidDocument(t)};return Vi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ta(t))},(i,r)=>{s={document:this.jn(t,r),size:Mu(r)}}).next(()=>s)}getEntries(e,t){let s=sn();return this.zn(e,t,(i,r)=>{const o=this.jn(i,r);s=s.insert(i,o)}).next(()=>s)}Hn(e,t){let s=sn(),i=new Qe(M.comparator);return this.zn(e,t,(r,o)=>{const a=this.jn(r,o);s=s.insert(r,a),i=i.insert(r,Mu(o))}).next(()=>({documents:s,Jn:i}))}zn(e,t,s){if(t.isEmpty())return T.resolve();let i=new Ee(hv);t.forEach(c=>i=i.add(c));const r=IDBKeyRange.bound(Ta(i.first()),Ta(i.last())),o=i.getIterator();let a=o.getNext();return Vi(e).Z({index:"documentKeyIndex",range:r},(c,l,u)=>{const h=M.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&hv(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,l),a=o.hasNext()?o.getNext():null),a?u.j(Ta(a)):u.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,s,i){const r=t.path,o=[r.popLast().toArray(),r.lastSegment(),Ou(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[r.popLast().toArray(),r.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vi(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let l=sn();for(const u of c){const h=this.jn(M.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);h.isFoundDocument()&&(al(t,h)||i.has(h.key))&&(l=l.insert(h.key,h))}return l})}getAllFromCollectionGroup(e,t,s,i){let r=sn();const o=uv(t,s),a=uv(t,vn.max());return Vi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,l,u)=>{const h=this.jn(M.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);r=r.insert(h.key,h),r.size===i&&u.done()}).next(()=>r)}newChangeBuffer(e){return new $D(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return lv(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}Qn(e,t){return lv(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const s=kD(this.yt,t);if(!(s.isNoDocument()&&s.version.isEqual(H.min())))return s}return Re.newInvalidDocument(e)}}function Lb(n){return new WD(n)}class $D extends Mb{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new xi(s=>s.toString(),(s,i)=>s.isEqual(i))}applyChanges(e){const t=[];let s=0,i=new Ee((r,o)=>ne(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(t.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const c=Yy(this.Yn.yt,o);i=i.add(r.path.popLast());const l=Mu(c);s+=l-a.size,t.push(this.Yn.addEntry(e,r,c))}else if(s-=a.size,this.trackRemovals){const c=Yy(this.Yn.yt,o.convertToNoDocument(H.min()));t.push(this.Yn.addEntry(e,r,c))}}),i.forEach(r=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Yn.updateMetadata(e,s)),T.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next(s=>(this.Xn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next(({documents:s,Jn:i})=>(i.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:s.get(r).readTime})}),s))}}function lv(n){return Et(n,"remoteDocumentGlobal")}function Vi(n){return Et(n,"remoteDocumentsV14")}function Ta(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function uv(n,e){const t=e.documentKey.path.toArray();return[n,Ou(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function hv(n,e){const t=n.path.toArray(),s=e.path.toArray();let i=0;for(let r=0;r<t.length-2&&r<s.length-2;++r)if(i=ne(t[r],s[r]),i)return i;return i=ne(t.length,s.length),i||(i=ne(t[t.length-2],s[s.length-2]),i||ne(t[t.length-1],s[s.length-1]))}/**
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
 */class jD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Fb{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&qa(s.mutation,i,nn.empty(),Be.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,t,s=se()){const i=es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Oa();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=es();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,se()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=sn();const o=Ba(),a=Ba();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ls)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),qa(u.mutation,l,u.mutation.getFieldMask(),Be.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new jD(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Ba();let i=new Qe((o,a)=>o-a),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||nn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||se()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ub();u.forEach(d=>{if(!r.has(d)){const f=ib(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):T.resolve(es());let a=-1,c=r;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:lb(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(s=>{let i=Oa();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Oa();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const c=function(l,u){return new Ms(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Re.newInvalidDocument(l)))});let o=Oa();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&qa(l.mutation,c,nn.empty(),Be.now()),al(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class GD{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return T.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:nt(s.createTime)}),T.resolve()}getNamedQuery(e,t){return T.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:jm(s.bundledQuery),readTime:nt(s.readTime)}}(t)),T.resolve()}}/**
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
 */class zD{constructor(){this.overlays=new Qe(M.comparator),this.es=new Map}getOverlay(e,t){return T.resolve(this.overlays.get(t))}getOverlays(e,t){const s=es();return T.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.oe(e,t,r)}),T.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,t,s){const i=es(),r=t.length+1,o=new M(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return T.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Qe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=es(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=es(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return T.resolve(a)}oe(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $m(t,s));let r=this.es.get(t);r===void 0&&(r=se(),this.es.set(t,r)),this.es.set(t,r.add(s.key))}}/**
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
 */class Hm{constructor(){this.ns=new Ee(pt.ss),this.rs=new Ee(pt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new pt(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new pt(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new M(new ge([])),s=new pt(t,e),i=new pt(t,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new M(new ge([])),s=new pt(t,e),i=new pt(t,e+1);let r=se();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new pt(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class pt{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return M.comparator(e.key,t.key)||ne(e._s,t._s)}static os(e,t){return ne(e._s,t._s)||M.comparator(e.key,t.key)}}/**
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
 */class HD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Ee(pt.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bm(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new pt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,t){return T.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ps(s),r=i<0?0:i;return T.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new pt(t,0),i=new pt(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),T.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ee(ne);return t.forEach(i=>{const r=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;M.isDocumentKey(r)||(r=r.child(""));const o=new pt(new M(r),0);let a=new Ee(ne);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(t.mutations,i=>{const r=new pt(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new pt(t,0),i=this.gs.firstAfterOrEqual(s);return T.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class KD{constructor(e){this.Es=e,this.docs=new Qe(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return T.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let s=sn();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Re.newInvalidDocument(i))}),T.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=sn();const o=t.path,a=new M(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Om(RI(u),s)<=0||(i.has(u.key)||al(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,t,s,i){q()}As(e,t){return T.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new QD(this)}getSize(e){return T.resolve(this.size)}}class QD extends Mb{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),T.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
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
 */class YD{constructor(e){this.persistence=e,this.Rs=new xi(t=>fr(t),rl),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Hm,this.targetCount=0,this.vs=yr.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,i)=>t(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),T.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new yr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,T.resolve()}updateTargetData(e,t){return this.Dn(t),T.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(r).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return T.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),T.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),T.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return T.resolve(s)}containsKey(e,t){return T.resolve(this.Ps.containsKey(t))}}/**
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
 */class Vb{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new tn(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new YD(this),this.indexManager=new MD,this.remoteDocumentCache=function(s){return new KD(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Ab(t),this.Ns=new GD(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new HD(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){N("MemoryPersistence","Starting transaction:",e);const i=new XD(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,t){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class XD extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.Fs=new Hm,this.$s=null}static Bs(e){return new Qh(e)}get Ls(){if(this.$s)return this.$s;throw q()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),T.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const i=M.fromPath(s);return this.qs(e,i).next(r=>{r||t.removeEntry(i,H.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return T.or([()=>T.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
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
 */class JD{constructor(e){this.yt=e}$(e,t,s,i){const r=new Wh("createOrUpgrade",t);s<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qy,{unique:!0}),a.createObjectStore("documentMutations")}(e),dv(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=T.resolve();return s<3&&i>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),dv(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",l)}(r))),s<4&&i>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Qy,{unique:!0});const u=c.store("mutations"),h=l.map(d=>u.put(d));return T.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&i>=5&&(o=o.next(()=>this.Us(r))),s<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),s<7&&i>=7&&(o=o.next(()=>this.Gs(r))),s<8&&i>=8&&(o=o.next(()=>this.Qs(e,r))),s<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&i>=10&&(o=o.next(()=>this.js(r))),s<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&i>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:ID});c.createIndex("collectionPathOverlayIndex",bD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",ED,{unique:!1})})(e)})),s<13&&i>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:hD});c.createIndex("documentKeyIndex",dD),c.createIndex("collectionGroupIndex",fD)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&i>=14&&(o=o.next(()=>this.zs(e,r))),s<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:yD}).createIndex("sequenceNumberIndex",vD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:wD}).createIndex("documentKeyIndex",TD,{unique:!1})}(e))),o}Ks(e){let t=0;return e.store("remoteDocuments").Z((s,i)=>{t+=Mu(i)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Us(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.W().next(i=>T.forEach(i,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>T.forEach(a,c=>{G(c.userId===r.userId);const l=$i(this.yt,c);return Rb(e,r.userId,l).next(()=>{})}))}))}Gs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const r=[];return s.Z((o,a)=>{const c=new ge(o),l=function(u){return[0,Qt(u)]}(c);r.push(t.get(l).next(u=>u?T.resolve():(h=>t.put({targetId:0,path:Qt(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>T.waitFor(r))})}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:_D});const s=t.store("collectionParents"),i=new zm,r=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:Qt(c)})}};return t.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ge(o);return r(c.popLast())}).next(()=>t.store("documentMutations").Z({X:!0},([o,a,c],l)=>{const u=ts(a);return r(u.popLast())}))}js(e){const t=e.store("targets");return t.Z((s,i)=>{const r=Pa(i),o=Nb(this.yt,r);return t.put(o)})}Ws(e,t){const s=t.store("remoteDocuments"),i=[];return s.Z((r,o)=>{const a=t.store("remoteDocumentsV14"),c=(l=o,l.document?new M(ge.fromString(l.document.name).popFirst(5)):l.noDocument?M.fromSegments(l.noDocument.path):l.unknownDocument?M.fromSegments(l.unknownDocument.path):q()).path.toArray();var l;/**
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
*/const u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>T.waitFor(i))}zs(e,t){const s=t.store("mutations"),i=Lb(this.yt),r=new Vb(Qh.Bs,this.yt.ie);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var l;let u=(l=a.get(c.userId))!==null&&l!==void 0?l:se();$i(this.yt,c).keys().forEach(h=>u=u.add(h)),a.set(c.userId,u)}),T.forEach(a,(c,l)=>{const u=new gt(l),h=Hh.re(this.yt,u),d=r.getIndexManager(u),f=Kh.re(u,this.yt,d,r.referenceDelegate);return new Fb(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new np(t,tn.at),c).next()})})}}function dv(n){n.createObjectStore("targetDocuments",{keyPath:mD}).createIndex("documentTargetsIndex",gD,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pD,{unique:!0}),n.createObjectStore("targetGlobal")}const ff="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Km{constructor(e,t,s,i,r,o,a,c,l,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Hs=r,this.window=o,this.document=a,this.Js=l,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Km.C())throw new A(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new BD(this,i),this.ii=t+"main",this.yt=new Ab(c),this.ri=new Ln(this.ii,this.Xs,new JD(this.yt)),this.Cs=new FD(this.referenceDelegate,this.yt),this.remoteDocumentCache=Lb(this.yt),this.Ns=new AD,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,ff);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new tn(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ql(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(t=>this.isPrimary&&!t?this._i(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Ni(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Ia(e).get("owner").next(t=>T.resolve(this.mi(t)))}gi(e){return Ql(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=Et(t,"clientMetadata");return s.W().next(i=>{const r=this.Ii(i,18e5),o=i.filter(a=>r.indexOf(a)===-1);return T.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?T.resolve(!0):Ia(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new A(E.FAILED_PRECONDITION,ff);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ql(e).W().next(s=>this.Ii(s,5e3).find(i=>{if(this.clientId!==i.clientId){const r=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&N("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new np(e,tn.at);return this._i(t).next(()=>this.gi(t))}),this.ri.close(),this.Pi()}Ii(e,t){return e.filter(s=>this.pi(s.updateTimeMs,t)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Ql(e).W().next(t=>this.Ii(t,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,t){return Kh.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new LD(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Hh.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,s){N("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?CD:o===14?kb:o===13?Cb:o===12?SD:o===11?Sb:void q();var o;let a;return this.ri.runTransaction(e,i,r,c=>(a=new np(c,this.Ss?this.Ss.next():tn.at),t==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new A(E.FAILED_PRECONDITION,OI);return s(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Ia(e).get("owner").next(t=>{if(t!==null&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)&&!this.mi(t)&&!(this.Ys||this.allowTabSynchronization&&t.allowTabSynchronization))throw new A(E.FAILED_PRECONDITION,ff)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ia(e).put("owner",t)}static C(){return Ln.C()}_i(e){const t=Ia(e);return t.get("owner").next(s=>this.mi(s)?(N("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):T.resolve())}pi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(et(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Rk()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const s=((t=this.oi)===null||t===void 0?void 0:t.getItem(this.Ti(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return et("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){et("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ia(n){return Et(n,"owner")}function Ql(n){return Et(n,"clientMetadata")}function Qm(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Ym{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=i}static Ci(e,t){let s=se(),i=se();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ym(e,t.fromCache,s,i)}}/**
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
 */class Ub{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,s)).next(r=>r||this.Mi(e,t))}ki(e,t){if(Uy(t))return T.resolve(null);let s=cn(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ru(t,null,"F"),s=cn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=se(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(t,a);return this.$i(t,l,o,c.readTime)?this.ki(e,Ru(t,null,"F")):this.Bi(e,l,t,c)}))})))}Oi(e,t,s,i){return Uy(t)||i.isEqual(H.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,s,i)?this.Mi(e,t):(Gf()<=me.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zf(t)),this.Bi(e,o,t,DI(i,-1)))})}Fi(e,t){let s=new Ee(YI(e));return t.forEach((i,r)=>{al(e,r)&&(s=s.add(r))}),s}$i(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return Gf()<=me.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Zf(t)),this.Ni.getDocumentsMatchingQuery(e,t,vn.min())}Bi(e,t,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class ZD{constructor(e,t,s,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new Qe(ne),this.Ui=new xi(r=>fr(r),rl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fb(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function qb(n,e,t,s){return new ZD(n,e,t,s)}async function Bb(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=se();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function eR(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=T.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(p=>{const m=c.docVersions.get(f);G(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),l.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Wb(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function tR(n,e){const t=F(n),s=e.snapshotVersion;let i=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(lt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,g){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,u)&&a.push(t.Cs.updateTargetData(r,f))});let c=sn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push($b(r,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(H.min())){const u=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.qi=i,r))}function $b(n,e,t){let s=se(),i=se();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=sn();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function nR(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function So(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Cs.getTargetData(s,e).next(r=>r?(i=r,T.resolve(i)):t.Cs.allocateTargetId(s).next(o=>(i=new si(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function Co(n,e,t){const s=F(n),i=s.qi.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ni(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function Lu(n,e,t){const s=F(n);let i=H.min(),r=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=F(a),h=u.Ui.get(l);return h!==void 0?T.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(s,o,cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?i:H.min(),t?r:se())).next(a=>(zb(s,QI(e),a),{documents:a,Hi:r})))}function jb(n,e){const t=F(n),s=F(t.Cs),i=t.qi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",r=>s.ne(r,e).next(o=>o?o.target:null))}function Gb(n,e){const t=F(n),s=t.Ki.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Gi.getAllFromCollectionGroup(i,e,DI(s,-1),Number.MAX_SAFE_INTEGER)).then(i=>(zb(t,e,i),i))}function zb(n,e,t){let s=n.Ki.get(e)||H.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ki.set(e,s)}async function sR(n,e,t,s){const i=F(n);let r=se(),o=sn();for(const l of t){const u=e.Ji(l.metadata.name);l.document&&(r=r.add(u));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(u,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await So(i,function(l){return cn(Ko(ge.fromString(`__bundle__/docs/${l}`)))}(s));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>$b(l,a,o).next(u=>(a.apply(l),u)).next(u=>i.Cs.removeMatchingKeysForTargetId(l,c.targetId).next(()=>i.Cs.addMatchingKeys(l,r,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,u.Wi,u.zi)).next(()=>u.Wi)))}async function iR(n,e,t=se()){const s=await So(n,cn(jm(e.bundledQuery))),i=F(n);return i.persistence.runTransaction("Save named query","readwrite",r=>{const o=nt(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(r,e);const a=s.withResumeToken(lt.EMPTY_BYTE_STRING,o);return i.qi=i.qi.insert(a.targetId,a),i.Cs.updateTargetData(r,a).next(()=>i.Cs.removeMatchingKeysForTargetId(r,s.targetId)).next(()=>i.Cs.addMatchingKeys(r,t,s.targetId)).next(()=>i.Ns.saveNamedQuery(r,e))})}function fv(n,e){return`firestore_clients_${n}_${e}`}function pv(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function pf(n,e){return`firestore_targets_${n}_${e}`}class Fu{constructor(e,t,s,i){this.user=e,this.batchId=t,this.state=s,this.error=i}static Zi(e,t,s){const i=JSON.parse(s);let r,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(r=new A(i.error.code,i.error.message))),o?new Fu(e,t,i.state,r):(et("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wa{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let i,r=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return r&&s.error&&(r=typeof s.error.message=="string"&&typeof s.error.code=="string",r&&(i=new A(s.error.code,s.error.message))),r?new Wa(e,s.state,i):(et("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let i=typeof s=="object"&&s.activeTargetIds instanceof Array,r=zh();for(let o=0;i&&o<s.activeTargetIds.length;++o)i=LI(s.activeTargetIds[o]),r=r.add(s.activeTargetIds[o]);return i?new Vu(e,r):(et("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Xm{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Xm(t.clientId,t.onlineState):(et("SharedClientState",`Failed to parse online state: ${e}`),null)}}class op{constructor(){this.activeTargetIds=zh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mf{constructor(e,t,s,i,r){this.window=e,this.Hs=t,this.persistenceKey=s,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Qe(ne),this.started=!1,this.cr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=fv(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new op),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const s of e){if(s===this.sr)continue;const i=this.getItem(fv(this.persistenceKey,s));if(i){const r=Vu.Zi(s,i);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const s=this.yr(t);s&&this.pr(s)}for(const s of this.cr)this.rr(s);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach((s,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,s){this.Tr(e,t,s),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(pf(this.persistenceKey,e));if(s){const i=Wa.Zi(e,s);i&&(t=i.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(pf(this.persistenceKey,e))}updateQueryState(e,t,s){this.Rr(e,t,s)}handleUserChange(e,t,s){t.forEach(i=>{this.Er(i)}),this.currentUser=e,s.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return N("SharedClientState","READ",e,t),t}setItem(e,t){N("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(N("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void et("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.lr.test(t.key)){if(t.newValue==null){const s=this.vr(t.key);return this.Vr(s,null)}{const s=this.Sr(t.key,t.newValue);if(s)return this.Vr(s.clientId,s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Dr(t.key,t.newValue);if(s)return this.Cr(s)}}else if(this._r.test(t.key)){if(t.newValue!==null){const s=this.Nr(t.key,t.newValue);if(s)return this.kr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.yr(t.newValue);if(s)return this.pr(s)}}else if(t.key===this.hr){const s=function(i){let r=tn.at;if(i!=null)try{const o=JSON.parse(i);G(typeof o=="number"),r=o}catch(o){et("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(t.newValue);s!==tn.at&&this.sequenceNumberHandler(s)}else if(t.key===this.mr){const s=this.Or(t.newValue);await Promise.all(s.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(t)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,s){const i=new Fu(this.currentUser,e,t,s),r=pv(this.persistenceKey,this.currentUser,e);this.setItem(r,i.tr())}Er(e){const t=pv(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,s){const i=pf(this.persistenceKey,e),r=new Wa(e,t,s);this.setItem(i,r.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const s=this.vr(e);return Vu.Zi(s,t)}Dr(e,t){const s=this.dr.exec(e),i=Number(s[1]),r=s[2]!==void 0?s[2]:null;return Fu.Zi(new gt(r),i,t)}Nr(e,t){const s=this._r.exec(e),i=Number(s[1]);return Wa.Zi(i,t)}yr(e){return Xm.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const s=t?this.ur.insert(e,t):this.ur.remove(e),i=this.Ir(this.ur),r=this.Ir(s),o=[],a=[];return r.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{r.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=s})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=zh();return e.forEach((s,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Hb{constructor(){this.Lr=new op,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new op,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rR{Ur(e){}shutdown(){}}/**
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
 */class mv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class aR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class cR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,i,r){const o=this.ho(e,t);N("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(c=>(N("RestConnection","Received: ",c),c),c=>{throw yo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,t,s,i,r,o){return this.ao(e,t,s,i,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,t){const s=oR[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,i){return new Promise((r,o)=>{const a=new ax;a.setWithCredentials(!0),a.listenOnce(ix.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case hf.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),r(l);break;case hf.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case hf.HTTP_ERROR:const u=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(t,"POST",c,s,15)})}wo(e,t,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=nx(),o=sx(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ox({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=i.join("");N("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new aR({Hr:p=>{h?N("Connection","Not sending because WebChannel is closed:",p):(u||(N("Connection","Opening WebChannel transport."),l.open(),u=!0),N("Connection","WebChannel sending:",p),l.send(p))},Jr:()=>l.close()}),f=(p,m,g)=>{p.listen(m,y=>{try{g(y)}catch(w){setTimeout(()=>{throw w},0)}})};return f(l,jl.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),f(l,jl.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.io())}),f(l,jl.EventType.ERROR,p=>{h||(h=!0,yo("Connection","WebChannel transport errored:",p),d.io(new A(E.UNAVAILABLE,"The operation could not be completed")))}),f(l,jl.EventType.MESSAGE,p=>{var m;if(!h){const g=p.data[0];G(!!g);const y=g,w=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(w){N("Connection","WebChannel received error:",w);const S=w.status;let C=function(v){const I=it[v];if(I!==void 0)return ab(I)}(S),_=w.message;C===void 0&&(C=E.INTERNAL,_="Unknown error status: "+S+" with message "+w.message),h=!0,d.io(new A(C,_)),l.close()}else N("Connection","WebChannel received:",g),d.ro(g)}}),f(o,rx.STAT_EVENT,p=>{p.stat===Sy.PROXY?N("Connection","Detected buffering proxy"):p.stat===Sy.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function Kb(){return typeof window<"u"?window:null}function lu(){return typeof document<"u"?document:null}/**
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
 */function hl(n){return new Zx(n,!0)}class Jm{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-s);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Qb{constructor(e,t,s,i,r,o,a,c){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Jm(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(et(t.toString()),et("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===t&&this.Go(s,i)},s=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lR extends Qb{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=nD(this.yt,e),s=function(i){if(!("targetChange"in i))return H.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?H.min():r.readTime?nt(r.readTime):H.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=pc(this.yt),t.addTarget=function(i,r){let o;const a=r.target;return o=xu(a)?{documents:yb(i,a)}:{query:vb(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=fb(i,r.resumeToken):r.snapshotVersion.compareTo(H.min())>0&&(o.readTime=Eo(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=iD(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=pc(this.yt),t.removeTarget=e,this.Bo(t)}}class uR extends Qb{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=sD(e.writeResults,e.commitTime),s=nt(e.commitTime);return this.listener.Zo(s,t)}return G(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=pc(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>mc(this.yt,s))};this.Bo(t)}}/**
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
 */class hR extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}_o(e,t,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(E.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class dR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(et(t),this.ou=!1):N("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class fR{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Di(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=F(a);c._u.add(4),await Xo(c),c.gu.set("Unknown"),c._u.delete(4),await dl(c)}(this))})}),this.gu=new dR(s,i)}}async function dl(n){if(Di(n))for(const e of n.wu)await e(!0)}async function Xo(n){for(const e of n.wu)await e(!1)}function Yh(n,e){const t=F(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),tg(t)?eg(t):Zo(t).ko()&&Zm(t,e))}function gc(n,e){const t=F(n),s=Zo(t);t.du.delete(e),s.ko()&&Yb(t,e),t.du.size===0&&(s.ko()?s.Fo():Di(t)&&t.gu.set("Unknown"))}function Zm(n,e){n.yu.Ot(e.targetId),Zo(n).zo(e)}function Yb(n,e){n.yu.Ot(e),Zo(n).Ho(e)}function eg(n){n.yu=new Qx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),Zo(n).start(),n.gu.uu()}function tg(n){return Di(n)&&!Zo(n).No()&&n.du.size>0}function Di(n){return F(n)._u.size===0}function Xb(n){n.yu=void 0}async function pR(n){n.du.forEach((e,t)=>{Zm(n,e)})}async function mR(n,e){Xb(n),tg(n)?(n.gu.hu(e),eg(n)):n.gu.set("Unknown")}async function gR(n,e,t){if(n.gu.set("Online"),e instanceof db&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Uu(n,s)}else if(e instanceof au?n.yu.Kt(e):e instanceof hb?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(H.min()))try{const s=await Wb(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),Yb(i,a);const l=new si(c.target,a,1,c.sequenceNumber);Zm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Uu(n,s)}}async function Uu(n,e,t){if(!Ni(e))throw e;n._u.add(1),await Xo(n),n.gu.set("Offline"),t||(t=()=>Wb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await dl(n)})}function Jb(n,e){return e().catch(t=>Uu(n,t,e))}async function Jo(n){const e=F(n),t=mi(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;_R(e);)try{const i=await nR(e.localStore,s);if(i===null){e.fu.length===0&&t.Fo();break}s=i.batchId,yR(e,i)}catch(i){await Uu(e,i)}Zb(e)&&eE(e)}function _R(n){return Di(n)&&n.fu.length<10}function yR(n,e){n.fu.push(e);const t=mi(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function Zb(n){return Di(n)&&!mi(n).No()&&n.fu.length>0}function eE(n){mi(n).start()}async function vR(n){mi(n).eu()}async function wR(n){const e=mi(n);for(const t of n.fu)e.Xo(t.mutations)}async function TR(n,e,t){const s=n.fu.shift(),i=Wm.from(s,e,t);await Jb(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Jo(n)}async function IR(n,e){e&&mi(n).Yo&&await async function(t,s){if(i=s.code,ob(i)&&i!==E.ABORTED){const r=t.fu.shift();mi(t).Mo(),await Jb(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Jo(t)}var i}(n,e),Zb(n)&&eE(n)}async function gv(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=Di(t);t._u.add(3),await Xo(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await dl(t)}async function ap(n,e){const t=F(n);e?(t._u.delete(2),await dl(t)):e||(t._u.add(2),await Xo(t),t.gu.set("Unknown"))}function Zo(n){return n.pu||(n.pu=function(e,t,s){const i=F(e);return i.su(),new lR(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:pR.bind(null,n),Zr:mR.bind(null,n),Wo:gR.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),tg(n)?eg(n):n.gu.set("Unknown")):(await n.pu.stop(),Xb(n))})),n.pu}function mi(n){return n.Iu||(n.Iu=function(e,t,s){const i=F(e);return i.su(),new uR(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:vR.bind(null,n),Zr:IR.bind(null,n),tu:wR.bind(null,n),Zo:TR.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Jo(n)):(await n.Iu.stop(),n.fu.length>0&&(N("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
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
 */class ng{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new ng(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ea(n,e){if(et("AsyncQueue",`${e}: ${n}`),Ni(n))return new A(E.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ao{constructor(e){this.comparator=e?(t,s)=>e(t,s)||M.comparator(t.key,s.key):(t,s)=>M.comparator(t.key,s.key),this.keyedMap=Oa(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class _v{constructor(){this.Tu=new Qe(M.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):q():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class ko{constructor(e,t,s,i,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ko(e,t,ao.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class bR{constructor(){this.Au=void 0,this.listeners=[]}}class ER{constructor(){this.queries=new xi(e=>KI(e),ol),this.onlineState="Unknown",this.Ru=new Set}}async function sg(n,e){const t=F(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new bR),i)try{r.Au=await t.onListen(s)}catch(o){const a=ea(o,`Initialization of query '${Zf(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&rg(t)}async function ig(n,e){const t=F(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function SR(n,e){const t=F(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&rg(t)}function CR(n,e,t){const s=F(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function rg(n){n.Ru.forEach(e=>{e.next()})}class og{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class kR{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}/**
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
 */class yv{constructor(e){this.yt=e}Ji(e){return ss(this.yt,e)}Yi(e){return e.metadata.exists?_b(this.yt,e.document,!1):Re.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return nt(e)}}class AR{constructor(e,t,s){this.Mu=e,this.localStore=t,this.yt=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=tE(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const s=ge.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,s=new yv(this.yt);for(const i of e)if(i.metadata.queries){const r=s.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||se()).add(r);t.set(o,a)}}return t}async complete(){const e=await sR(this.localStore,new yv(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const s of this.queries)await iR(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function tE(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class nE{constructor(e){this.key=e}}class sE{constructor(e){this.key=e}}class iE{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=se(),this.mutatedKeys=se(),this.Gu=YI(e),this.Qu=new ao(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new _v,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=al(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),g=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),g=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),g=!0):d&&!f&&(s.track({type:1,doc:d}),g=!0,(c||l)&&(a=!0)),g&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((l,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return f(h)-f(d)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,r.length!==0||c?{snapshot:new ko(this.query,e.Qu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new _v,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=se(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new sE(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new nE(s))}),t}tc(e){this.qu=e.Hi,this.Ku=se();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ko.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class NR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class xR{constructor(e){this.key=e,this.nc=!1}}class DR{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new xi(a=>KI(a),ol),this.rc=new Map,this.oc=new Set,this.uc=new Qe(M.comparator),this.cc=new Map,this.ac=new Hm,this.hc={},this.lc=new Map,this.fc=yr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function RR(n,e){const t=hg(n);let s,i;const r=t.ic.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await So(t.localStore,cn(e));t.isPrimaryClient&&Yh(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ag(t,e,s,a==="current",o.resumeToken)}return i}async function ag(n,e,t,s,i){n._c=(h,d,f)=>async function(p,m,g,y){let w=m.view.Wu(g);w.$i&&(w=await Lu(p.localStore,m.query,!1).then(({documents:_})=>m.view.Wu(_,w)));const S=y&&y.targetChanges.get(m.targetId),C=m.view.applyChanges(w,p.isPrimaryClient,S);return cp(p,m.targetId,C.Xu),C.snapshot}(n,h,d,f);const r=await Lu(n.localStore,e,!0),o=new iE(e,r.Hi),a=o.Wu(r.documents),c=ul.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,c);cp(n,t,l.Xu);const u=new NR(e,t,o);return n.ic.set(e,u),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),l.snapshot}async function OR(n,e){const t=F(n),s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(r=>!ol(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Co(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),gc(t.remoteStore,s.targetId),Ao(t,s.targetId)}).catch(Ai)):(Ao(t,s.targetId),await Co(t.localStore,s.targetId,!0))}async function PR(n,e,t){const s=dg(n);try{const i=await function(r,o){const a=F(r),c=Be.now(),l=o.reduce((d,f)=>d.add(f.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=sn(),p=se();return a.Gi.getEntries(d,l).next(m=>{f=m,f.forEach((g,y)=>{y.isValidDocument()||(p=p.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const g=[];for(const y of o){const w=$x(y,u.get(y.key).overlayedDocument);w!=null&&g.push(new Ls(y.key,w,zI(w.value.mapValue),Ue.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(m=>{h=m;const g=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,g)})}).then(()=>({batchId:h.batchId,changes:lb(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.hc[r.currentUser.toKey()];c||(c=new Qe(ne)),c=c.insert(o,a),r.hc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Fs(s,i.changes),await Jo(s.remoteStore)}catch(i){const r=ea(i,"Failed to persist write");t.reject(r)}}async function rE(n,e){const t=F(n);try{const s=await tR(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.cc.get(r);o&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?G(o.nc):i.removedDocuments.size>0&&(G(o.nc),o.nc=!1))}),await Fs(t,s,e)}catch(s){await Ai(s)}}function vv(n,e,t){const s=F(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=F(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&rg(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function MR(n,e,t){const s=F(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Qe(M.comparator);o=o.insert(r,Re.newNoDocument(r,H.min()));const a=se().add(r),c=new ll(H.min(),new Map,new Ee(ne),o,a);await rE(s,c),s.uc=s.uc.remove(r),s.cc.delete(e),ug(s)}else await Co(s.localStore,e,!1).then(()=>Ao(s,e,t)).catch(Ai)}async function LR(n,e){const t=F(n),s=e.batch.batchId;try{const i=await eR(t.localStore,e);lg(t,s,null),cg(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Fs(t,i)}catch(i){await Ai(i)}}async function FR(n,e,t){const s=F(n);try{const i=await function(r,o){const a=F(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(G(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);lg(s,e,t),cg(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Fs(s,i)}catch(i){await Ai(i)}}async function VR(n,e){const t=F(n);Di(t.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(r){const o=F(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const i=t.lc.get(s)||[];i.push(e),t.lc.set(s,i)}catch(s){const i=ea(s,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cg(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function lg(n,e,t){const s=F(n);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Ao(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||oE(n,s)})}function oE(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(gc(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),ug(n))}function cp(n,e,t){for(const s of t)s instanceof nE?(n.ac.addReference(s.key,e),UR(n,s)):s instanceof sE?(N("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||oE(n,s.key)):q()}function UR(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(N("SyncEngine","New document in limbo: "+t),n.oc.add(s),ug(n))}function ug(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new M(ge.fromString(e)),s=n.fc.next();n.cc.set(s,new xR(t)),n.uc=n.uc.insert(t,s),Yh(n.remoteStore,new si(cn(Ko(t.path)),s,2,tn.at))}}async function Fs(n,e,t){const s=F(n),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=Ym.Ci(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,c){const l=F(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Ni(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.qi.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(h,p)}}}(s.localStore,r))}async function qR(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await Bb(t.localStore,e);t.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,r))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fs(t,s.ji)}}function BR(n,e){const t=F(n),s=t.cc.get(e);if(s&&s.nc)return se().add(s.key);{let i=se();const r=t.rc.get(e);if(!r)return i;for(const o of r){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function WR(n,e){const t=F(n),s=await Lu(t.localStore,e.query,!0),i=e.view.tc(s);return t.isPrimaryClient&&cp(t,e.targetId,i.Xu),i}async function $R(n,e){const t=F(n);return Gb(t.localStore,e).then(s=>Fs(t,s))}async function jR(n,e,t,s){const i=F(n),r=await function(o,a){const c=F(o),l=F(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Tn(u,a).next(h=>h?c.localDocuments.getDocuments(u,h):T.resolve(null)))}(i.localStore,e);r!==null?(t==="pending"?await Jo(i.remoteStore):t==="acknowledged"||t==="rejected"?(lg(i,e,s||null),cg(i,e),function(o,a){F(F(o).mutationQueue).An(a)}(i.localStore,e)):q(),await Fs(i,r)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function GR(n,e){const t=F(n);if(hg(t),dg(t),e===!0&&t.dc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),i=await wv(t,s.toArray());t.dc=!0,await ap(t.remoteStore,!0);for(const r of i)Yh(t.remoteStore,r)}else if(e===!1&&t.dc!==!1){const s=[];let i=Promise.resolve();t.rc.forEach((r,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):i=i.then(()=>(Ao(t,o),Co(t.localStore,o,!0))),gc(t.remoteStore,o)}),await i,await wv(t,s),function(r){const o=F(r);o.cc.forEach((a,c)=>{gc(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new Qe(M.comparator)}(t),t.dc=!1,await ap(t.remoteStore,!1)}}async function wv(n,e,t){const s=F(n),i=[],r=[];for(const o of e){let a;const c=s.rc.get(o);if(c&&c.length!==0){a=await So(s.localStore,cn(c[0]));for(const l of c){const u=s.ic.get(l),h=await WR(s,u);h.snapshot&&r.push(h.snapshot)}}else{const l=await jb(s.localStore,o);a=await So(s.localStore,l),await ag(s,aE(l),o,!1,a.resumeToken)}i.push(a)}return s.sc.Wo(r),i}function aE(n){return HI(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function zR(n){const e=F(n);return F(F(e.localStore).persistence).vi()}async function HR(n,e,t,s){const i=F(n);if(i.dc)return void N("SyncEngine","Ignoring unexpected query state notification.");const r=i.rc.get(e);if(r&&r.length>0)switch(t){case"current":case"not-current":{const o=await Gb(i.localStore,QI(r[0])),a=ll.createSynthesizedRemoteEventForCurrentChange(e,t==="current",lt.EMPTY_BYTE_STRING);await Fs(i,o,a);break}case"rejected":await Co(i.localStore,e,!0),Ao(i,e,s);break;default:q()}}async function KR(n,e,t){const s=hg(n);if(s.dc){for(const i of e){if(s.rc.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const r=await jb(s.localStore,i),o=await So(s.localStore,r);await ag(s,aE(r),o.targetId,!1,o.resumeToken),Yh(s.remoteStore,o)}for(const i of t)s.rc.has(i)&&await Co(s.localStore,i,!1).then(()=>{gc(s.remoteStore,i),Ao(s,i)}).catch(Ai)}}function hg(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MR.bind(null,e),e.sc.Wo=SR.bind(null,e.eventManager),e.sc.wc=CR.bind(null,e.eventManager),e}function dg(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FR.bind(null,e),e}function QR(n,e,t){const s=F(n);(async function(i,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=F(h),p=nt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",m=>f.Ns.getBundleMetadata(m,d.id)).then(m=>!!m&&m.createTime.compareTo(p)>=0)}(i.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(tE(a));const c=new AR(a,i.localStore,r.yt);let l=await r.mc();for(;l;){const h=await c.Fu(l);h&&o._updateProgress(h),l=await r.mc()}const u=await c.complete();return await Fs(i,u.Lu,void 0),await function(h,d){const f=F(h);return f.persistence.runTransaction("Save bundle","readwrite",p=>f.Ns.saveBundleMetadata(p,d))}(i.localStore,a),o._completeWith(u.progress),Promise.resolve(u.Bu)}catch(a){return yo("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(i=>{s.sharedClientState.notifyBundleLoaded(i)})}class cE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=hl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return qb(this.persistence,new Ub,e.initialUser,this.yt)}yc(e){return new Vb(Qh.Bs,this.yt)}gc(e){return new Hb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class lE extends cE{constructor(e,t,s){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await dg(this.Ac.syncEngine),await Jo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return qb(this.persistence,new Ub,e.initialUser,this.yt)}Tc(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new UD(s,e.asyncQueue,t)}Ec(e,t){const s=new bx(t,this.persistence);return new Ix(e.asyncQueue,s)}yc(e){const t=Qm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Km(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,Kb(),lu(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Hb}}class YR extends lE{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof mf&&(this.sharedClientState.syncEngine={Fr:jR.bind(null,t),$r:HR.bind(null,t),Br:KR.bind(null,t),vi:zR.bind(null,t),Mr:$R.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li(async s=>{await GR(this.Ac.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}gc(e){const t=Kb();if(!mf.C(t))throw new A(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Qm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new mf(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class fg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>vv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qR.bind(null,this.syncEngine),await ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ER}createDatastore(e){const t=hl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new cR(i));var i;return function(r,o,a,c){return new hR(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>vv(this.syncEngine,a,0),o=mv.C()?new mv:new rR,new fR(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,c,l){const u=new DR(s,i,r,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);N("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Xo(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function pg(n,e,t){if(!t)throw new A(E.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uE(n,e,t,s){if(e===!0&&s===!0)throw new A(E.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tv(n){if(!M.isDocumentKey(n))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iv(n){if(M.isDocumentKey(n))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function _e(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xh(n);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function hE(n,e){if(e<=0)throw new A(E.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */const bv=new Map;class Ev{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class fl{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ev({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ev(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ux;switch(t.type){case"gapi":const s=t.client;return new px(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bv.get(e);t&&(N("ComponentProvider","Removing Datastore"),bv.delete(e),t.terminate())}(this),Promise.resolve()}}function XR(n,e,t,s={}){var i;const r=(n=_e(n,fl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&yo("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=gt.MOCK_USER;else{o=oT(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new gt(c)}n._authCredentials=new hx(new kI(o,a))}}/**
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
 */class Oe{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}}class Rt{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rt(this.firestore,e,this._query)}}class is extends Rt{constructor(e,t,s){super(e,t,Ko(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new M(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function dE(n,e,...t){if(n=B(n),pg("collection","path",e),n instanceof fl){const s=ge.fromString(e,...t);return Iv(s),new is(n,null,s)}{if(!(n instanceof Oe||n instanceof is))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return Iv(s),new is(n.firestore,null,s)}}function JR(n,e){if(n=_e(n,fl),pg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(n,null,function(t){return new Ms(ge.emptyPath(),t)}(e))}function qu(n,e,...t){if(n=B(n),arguments.length===1&&(e=AI.R()),pg("doc","path",e),n instanceof fl){const s=ge.fromString(e,...t);return Tv(s),new Oe(n,null,new M(s))}{if(!(n instanceof Oe||n instanceof is))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ge.fromString(e,...t));return Tv(s),new Oe(n.firestore,n instanceof is?n.converter:null,new M(s))}}function fE(n,e){return n=B(n),e=B(e),(n instanceof Oe||n instanceof is)&&(e instanceof Oe||e instanceof is)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function pE(n,e){return n=B(n),e=B(e),n instanceof Rt&&e instanceof Rt&&n.firestore===e.firestore&&ol(n._query,e._query)&&n.converter===e.converter}/**
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
 */function Sv(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):et("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class ZR{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new vt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(s=>{s&&s.Ou()?this.metadata.resolve(s.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.ku)}`))},s=>this.metadata.reject(s))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const t=this.vc.decode(e),s=Number(t);isNaN(s)&&this.Dc(`length string (${t}) is not valid number`);const i=await this.Cc(s);return new kR(JSON.parse(i),e.length+s)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class e1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new A(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,i){const r=F(s),o=pc(r.yt)+"/documents",a={documents:i.map(h=>fc(r.yt,h))},c=await r._o("BatchGetDocuments",o,a,i.length),l=new Map;c.forEach(h=>{const d=tD(r.yt,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());G(!!d),u.push(d)}),u}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new Yo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const i=M.fromPath(s);this.mutations.push(new Um(i,this.precondition(i)))}),await async function(t,s){const i=F(t),r=pc(i.yt)+"/documents",o={writes:s.map(a=>mc(i.yt,a))};await i.ao("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q();t=H.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new A(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(H.min())?Ue.exists(!1):Ue.updateTime(t):Ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(H.min()))throw new A(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ue.updateTime(t)}return Ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class t1{constructor(e,t,s,i,r){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=i,this.deferred=r,this.kc=s.maxAttempts,this.xo=new Jm(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new e1(this.datastore),t=this.Mc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(i=>{this.Fc(i)}))}).catch(s=>{this.Fc(s)})})}Mc(e){try{const t=this.updateFunction(e);return!il(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ob(t)}return!1}}/**
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
 */class n1{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=AI.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ea(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function mE(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Bb(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function gE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mg(n);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>gv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>gv(e.remoteStore,r)),n.onlineComponents=e}async function mg(n){return n.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await mE(n,new cE)),n.offlineComponents}async function Zh(n){return n.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await gE(n,new fg)),n.onlineComponents}function _E(n){return mg(n).then(e=>e.persistence)}function gg(n){return mg(n).then(e=>e.localStore)}function yE(n){return Zh(n).then(e=>e.remoteStore)}function _g(n){return Zh(n).then(e=>e.syncEngine)}function s1(n){return Zh(n).then(e=>e.datastore)}async function No(n){const e=await Zh(n),t=e.eventManager;return t.onListen=RR.bind(null,e.syncEngine),t.onUnlisten=OR.bind(null,e.syncEngine),t}function i1(n){return n.asyncQueue.enqueue(async()=>{const e=await _E(n),t=await yE(n);return e.setNetworkEnabled(!0),function(s){const i=F(s);return i._u.delete(0),dl(i)}(t)})}function r1(n){return n.asyncQueue.enqueue(async()=>{const e=await _E(n),t=await yE(n);return e.setNetworkEnabled(!1),async function(s){const i=F(s);i._u.add(0),await Xo(i),i.gu.set("Offline")}(t)})}function o1(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await function(a,c){const l=F(a);return l.persistence.runTransaction("read document","readonly",u=>l.localDocuments.getDocument(u,c))}(s,i);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new A(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ea(o,`Failed to get document '${i} from cache`);r.reject(a)}}(await gg(n),e,t)),t.promise}function vE(n,e,t={}){const s=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Jh({next:h=>{r.enqueueAndForget(()=>ig(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new A(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new A(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new og(Ko(o.path),l,{includeMetadataChanges:!0,Nu:!0});return sg(i,u)}(await No(n),n.asyncQueue,e,t,s)),s.promise}function a1(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget(async()=>async function(s,i,r){try{const o=await Lu(s,i,!0),a=new iE(i,o.Hi),c=a.Wu(o.documents),l=a.applyChanges(c,!1);r.resolve(l.snapshot)}catch(o){const a=ea(o,`Failed to execute query '${i} against cache`);r.reject(a)}}(await gg(n),e,t)),t.promise}function wE(n,e,t={}){const s=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new Jh({next:h=>{r.enqueueAndForget(()=>ig(i,u)),h.fromCache&&a.source==="server"?c.reject(new A(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new og(o,l,{includeMetadataChanges:!0,Nu:!0});return sg(i,u)}(await No(n),n.asyncQueue,e,t,s)),s.promise}function c1(n,e){const t=new Jh(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,i){F(s).Ru.add(i),i.next()}(await No(n),t)),()=>{t.bc(),n.asyncQueue.enqueueAndForget(async()=>function(s,i){F(s).Ru.delete(i)}(await No(n),t))}}function l1(n,e,t,s){const i=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(c,l){return new ZR(c,l)}(function(c,l){if(c instanceof Uint8Array)return Sv(c,l);if(c instanceof ArrayBuffer)return Sv(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,hl(e));n.asyncQueue.enqueueAndForget(async()=>{QR(await _g(n),i,s)})}function u1(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const i=F(t);return i.persistence.runTransaction("Get named query","readonly",r=>i.Ns.getNamedQuery(r,s))}(await gg(n),e))}class h1{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Jm(this,"async_queue_retry"),this.Wc=()=>{const t=lu();t&&N("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=lu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=lu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new vt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ni(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=ng.createAndSchedule(this,e,t,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function lp(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class d1{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const f1=-1;class Ye extends fl{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new h1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TE(this),this._firestoreClient.terminate()}}function St(n){return n._firestoreClient||TE(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function TE(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new Ex(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new n1(n._authCredentials,n._appCheckCredentials,n._queue,s)}function p1(n,e){bE(n=_e(n,Ye));const t=St(n),s=n._freezeSettings(),i=new fg;return IE(t,i,new lE(i,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function m1(n){bE(n=_e(n,Ye));const e=St(n),t=n._freezeSettings(),s=new fg;return IE(e,s,new YR(s,t.cacheSizeBytes))}function IE(n,e,t){const s=new vt;return n.asyncQueue.enqueue(async()=>{try{await mE(n,t),await gE(n,e),s.resolve()}catch(i){const r=i;if(!function(o){return o.name==="FirebaseError"?o.code===E.FAILED_PRECONDITION||o.code===E.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;yo("Error enabling offline persistence. Falling back to persistence disabled: "+r),s.reject(r)}}).then(()=>s.promise)}function g1(n){if(n._initialized&&!n._terminated)throw new A(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ln.C())return Promise.resolve();const s=t+"main";await Ln.delete(s)}(Qm(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function _1(n){return function(e){const t=new vt;return e.asyncQueue.enqueueAndForget(async()=>VR(await _g(e),t)),t.promise}(St(n=_e(n,Ye)))}function y1(n){return i1(St(n=_e(n,Ye)))}function v1(n){return r1(St(n=_e(n,Ye)))}function w1(n,e){const t=St(n=_e(n,Ye)),s=new d1;return l1(t,n._databaseId,e,s),s}function T1(n,e){return u1(St(n=_e(n,Ye)),e).then(t=>t?new Rt(n,null,t.query):null)}function bE(n){if(n._initialized||n._terminated)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(lt.fromBase64String(e))}catch(t){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new as(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lr{constructor(e){this._methodName=e}}/**
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
 */class ed{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */const I1=/^__.*__$/;class b1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qo(e,this.data,t,this.fieldTransforms)}}class EE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ls(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function SE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class td{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new td(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(SE(this.sa)&&I1.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class E1{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||hl(e)}da(e,t,s,i=!1){return new td({sa:e,methodName:t,fa:s,path:tt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Fr(n){const e=n._freezeSettings(),t=hl(n._databaseId);return new E1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function nd(n,e,t,s,i,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,i);Tg("Data must be an object, but it was:",o,s);const a=AE(s,o);let c,l;if(r.merge)c=new nn(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=up(e,h,t);if(!o.contains(d))throw new A(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xE(u,d)||u.push(d)}c=new nn(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new b1(new Nt(a),c,l)}class pl extends Lr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pl}}function CE(n,e,t){return new td({sa:3,fa:e.settings.fa,methodName:n._methodName,oa:t},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class yg extends Lr{_toFieldTransform(e){return new cl(e.path,new Io)}isEqual(e){return e instanceof yg}}class S1 extends Lr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=CE(this,e,!0),s=this._a.map(r=>Vr(r,t)),i=new pr(s);return new cl(e.path,i)}isEqual(e){return this===e}}class C1 extends Lr{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=CE(this,e,!0),s=this._a.map(r=>Vr(r,t)),i=new mr(s);return new cl(e.path,i)}isEqual(e){return this===e}}class k1 extends Lr{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new bo(e.yt,ZI(e.yt,this.wa));return new cl(e.path,t)}isEqual(e){return this===e}}function vg(n,e,t,s){const i=n.da(1,e,t);Tg("Data must be an object, but it was:",i,s);const r=[],o=Nt.empty();Mr(s,(c,l)=>{const u=Ig(e,c,t);l=B(l);const h=i.ca(u);if(l instanceof pl)r.push(u);else{const d=Vr(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new nn(r);return new EE(o,a,i.fieldTransforms)}function wg(n,e,t,s,i,r){const o=n.da(1,e,t),a=[up(e,s,t)],c=[i];if(r.length%2!=0)throw new A(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(up(e,r[d])),c.push(r[d+1]);const l=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!xE(l,a[d])){const f=a[d];let p=c[d];p=B(p);const m=o.ca(f);if(p instanceof pl)l.push(f);else{const g=Vr(p,m);g!=null&&(l.push(f),u.set(f,g))}}const h=new nn(l);return new EE(u,h,o.fieldTransforms)}function kE(n,e,t,s=!1){return Vr(t,n.da(s?4:3,e))}function Vr(n,e){if(NE(n=B(n)))return Tg("Unsupported field value:",e,n),AE(n,e);if(n instanceof Lr)return function(t,s){if(!SE(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=Vr(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=B(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return ZI(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Be.fromDate(t);return{timestampValue:Eo(s.yt,i)}}if(t instanceof Be){const i=new Be(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Eo(s.yt,i)}}if(t instanceof ed)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof as)return{bytesValue:fb(s.yt,t._byteString)};if(t instanceof Oe){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qm(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${Xh(t)}`)}(n,e)}function AE(n,e){const t={};return MI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(n,(s,i)=>{const r=Vr(i,e.ra(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function NE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Be||n instanceof ed||n instanceof as||n instanceof Oe||n instanceof Lr)}function Tg(n,e,t){if(!NE(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Xh(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function up(n,e,t){if((e=B(e))instanceof gi)return e._internalPath;if(typeof e=="string")return Ig(n,e);throw Bu("Field path arguments must be of type string or ",n,!1,void 0,t)}const A1=new RegExp("[~\\*/\\[\\]]");function Ig(n,e,t){if(e.search(A1)>=0)throw Bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new gi(...e.split("."))._internalPath}catch{throw Bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bu(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new A(E.INVALID_ARGUMENT,a+n+c)}function xE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class _c{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class N1 extends _c{data(){return super.data()}}function sd(n,e){return typeof e=="string"?Ig(n,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
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
 */function DE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bg{}class ml extends bg{}function zs(n,e,...t){let s=[];e instanceof bg&&s.push(e),s=s.concat(t),function(i){const r=i.filter(a=>a instanceof Eg).length,o=i.filter(a=>a instanceof id).length;if(r>1||r>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class id extends ml{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new id(e,t,s)}_apply(e){const t=this._parse(e);return OE(e._query,t),new Rt(e.firestore,e.converter,Jf(e._query,t))}_parse(e){const t=Fr(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){kv(u,l);const d=[];for(const f of u)d.push(Cv(a,i,f));h={arrayValue:{values:d}}}else h=Cv(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||kv(u,l),h=kE(o,r,u,l==="in"||l==="not-in");return fe.create(c,l,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function x1(n,e,t){const s=e,i=sd("where",n);return id._create(i,s,t)}class Eg extends bg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Eg(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Te.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)OE(r,a),r=Jf(r,a)}(e._query,t),new Rt(e.firestore,e.converter,Jf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sg extends ml{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sg(e,t)}_apply(e){const t=function(s,i,r){if(s.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new oo(i,r);return function(a,c){if(Fm(a)===null){const l=$h(a);l!==null&&PE(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Rt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Ms(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function D1(n,e="asc"){const t=e,s=sd("orderBy",n);return Sg._create(s,t)}class rd extends ml{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new rd(e,t,s)}_apply(e){return new Rt(e.firestore,e.converter,Ru(e._query,this._limit,this._limitType))}}function R1(n){return hE("limit",n),rd._create("limit",n,"F")}function O1(n){return hE("limitToLast",n),rd._create("limitToLast",n,"L")}class od extends ml{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new od(e,t,s)}_apply(e){const t=RE(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(s,i){return new Ms(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function P1(...n){return od._create("startAt",n,!0)}function M1(...n){return od._create("startAfter",n,!1)}class ad extends ml{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new ad(e,t,s)}_apply(e){const t=RE(e,this.type,this._docOrFields,this._inclusive);return new Rt(e.firestore,e.converter,function(s,i){return new Ms(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function L1(...n){return ad._create("endBefore",n,!1)}function F1(...n){return ad._create("endAt",n,!0)}function RE(n,e,t,s){if(t[0]=B(t[0]),t[0]instanceof _c)return function(i,r,o,a,c){if(!a)throw new A(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of tr(i))if(u.field.isKeyField())l.push(dr(r,a.key));else{const h=a.data.field(u.field);if(Mm(h))throw new A(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new A(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new pi(l,c)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const i=Fr(n.firestore);return function(r,o,a,c,l,u){const h=r.explicitOrderBy;if(l.length>h.length)throw new A(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const p=l[f];if(h[f].field.isKeyField()){if(typeof p!="string")throw new A(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof p}`);if(!Vm(r)&&p.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${p}' contains a slash.`);const m=r.path.child(ge.fromString(p));if(!M.isDocumentKey(m))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${m}' is not because it contains an odd number of segments.`);const g=new M(m);d.push(dr(o,g))}else{const m=kE(a,c,p);d.push(m)}}return new pi(d,u)}(n._query,n.firestore._databaseId,i,e,t,s)}}function Cv(n,e,t){if(typeof(t=B(t))=="string"){if(t==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vm(e)&&t.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ge.fromString(t));if(!M.isDocumentKey(s))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dr(n,new M(s))}if(t instanceof Oe)return dr(n,t._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(t)}.`)}function kv(n,e){if(!Array.isArray(n)||n.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new A(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function OE(n,e){if(e.isInequality()){const s=$h(n),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Fm(n);r!==null&&PE(n,i,r)}const t=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function PE(n,e,t){if(!t.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Cg{convertValue(e,t="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw q()}}convertObject(e,t){const s={};return Mr(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new ed(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=FI(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(uc(e));default:return null}}convertTimestamp(e){const t=di(e);return new Be(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ge.fromString(e);G(bb(s));const i=new hi(s.get(1),s.get(3)),r=new M(s.popFirst(5));return i.isEqual(t)||et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function cd(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class V1 extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}/**
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
 */class Yi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xs extends _c{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(sd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class $a extends xs{data(e={}){return super.data(e)}}class _i{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Yi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new $a(this._firestore,this._userDataWriter,s.key,s,new Yi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new $a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new $a(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Yi(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:U1(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function U1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function ME(n,e){return n instanceof xs&&e instanceof xs?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof _i&&e instanceof _i&&n._firestore===e._firestore&&pE(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function q1(n){n=_e(n,Oe);const e=_e(n.firestore,Ye);return vE(St(e),n._key).then(t=>kg(e,n,t))}class Ur extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function B1(n){n=_e(n,Oe);const e=_e(n.firestore,Ye),t=St(e),s=new Ur(e);return o1(t,n._key).then(i=>new xs(e,s,n._key,i,new Yi(i!==null&&i.hasLocalMutations,!0),n.converter))}function W1(n){n=_e(n,Oe);const e=_e(n.firestore,Ye);return vE(St(e),n._key,{source:"server"}).then(t=>kg(e,n,t))}function $1(n){n=_e(n,Rt);const e=_e(n.firestore,Ye),t=St(e),s=new Ur(e);return DE(n._query),wE(t,n._query).then(i=>new _i(e,s,n,i))}function j1(n){n=_e(n,Rt);const e=_e(n.firestore,Ye),t=St(e),s=new Ur(e);return a1(t,n._query).then(i=>new _i(e,s,n,i))}function G1(n){n=_e(n,Rt);const e=_e(n.firestore,Ye),t=St(e),s=new Ur(e);return wE(t,n._query,{source:"server"}).then(i=>new _i(e,s,n,i))}function Av(n,e,t){n=_e(n,Oe);const s=_e(n.firestore,Ye),i=cd(n.converter,e,t);return gl(s,[nd(Fr(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ue.none())])}function Nv(n,e,t,...s){n=_e(n,Oe);const i=_e(n.firestore,Ye),r=Fr(i);let o;return o=typeof(e=B(e))=="string"||e instanceof gi?wg(r,"updateDoc",n._key,e,t,s):vg(r,"updateDoc",n._key,e),gl(i,[o.toMutation(n._key,Ue.exists(!0))])}function z1(n){return gl(_e(n.firestore,Ye),[new Yo(n._key,Ue.none())])}function H1(n,e){const t=_e(n.firestore,Ye),s=qu(n),i=cd(n.converter,e);return gl(t,[nd(Fr(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Ue.exists(!1))]).then(()=>s)}function LE(n,...e){var t,s,i;n=B(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||lp(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(lp(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(n instanceof Oe)l=_e(n.firestore,Ye),u=Ko(n._key.path),c={next:h=>{e[o]&&e[o](kg(l,n,h))},error:e[o+1],complete:e[o+2]};else{const h=_e(n,Rt);l=_e(h.firestore,Ye),u=h._query;const d=new Ur(l);c={next:f=>{e[o]&&e[o](new _i(l,d,h,f))},error:e[o+1],complete:e[o+2]},DE(n._query)}return function(h,d,f,p){const m=new Jh(p),g=new og(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>sg(await No(h),g)),()=>{m.bc(),h.asyncQueue.enqueueAndForget(async()=>ig(await No(h),g))}}(St(l),u,a,c)}function K1(n,e){return c1(St(n=_e(n,Ye)),lp(e)?e:{next:e})}function gl(n,e){return function(t,s){const i=new vt;return t.asyncQueue.enqueueAndForget(async()=>PR(await _g(t),s,i)),i.promise}(St(n),e)}function kg(n,e,t){const s=t.docs.get(e._key),i=new Ur(n);return new xs(n,i,e._key,s,new Yi(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const Q1={maxAttempts:5};/**
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
 */class Y1{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fr(e)}set(e,t,s){this._verifyNotCommitted();const i=Xs(e,this._firestore),r=cd(i.converter,t,s),o=nd(this._dataReader,"WriteBatch.set",i._key,r,i.converter!==null,s);return this._mutations.push(o.toMutation(i._key,Ue.none())),this}update(e,t,s,...i){this._verifyNotCommitted();const r=Xs(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof gi?wg(this._dataReader,"WriteBatch.update",r._key,t,s,i):vg(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(o.toMutation(r._key,Ue.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Xs(e,this._firestore);return this._mutations=this._mutations.concat(new Yo(t._key,Ue.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new A(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xs(n,e){if((n=B(n)).firestore!==e)throw new A(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class X1 extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Fr(e)}get(e){const t=Xs(e,this._firestore),s=new V1(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return q();const r=i[0];if(r.isFoundDocument())return new _c(this._firestore,s,r.key,r,t.converter);if(r.isNoDocument())return new _c(this._firestore,s,t._key,null,t.converter);throw q()})}set(e,t,s){const i=Xs(e,this._firestore),r=cd(i.converter,t,s),o=nd(this._dataReader,"Transaction.set",i._key,r,i.converter!==null,s);return this._transaction.set(i._key,o),this}update(e,t,s,...i){const r=Xs(e,this._firestore);let o;return o=typeof(t=B(t))=="string"||t instanceof gi?wg(this._dataReader,"Transaction.update",r._key,t,s,i):vg(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,o),this}delete(e){const t=Xs(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Xs(e,this._firestore),s=new Ur(this._firestore);return super.get(e).then(i=>new xs(this._firestore,s,t._key,i._document,new Yi(!1,!1),t.converter))}}function J1(n,e,t){n=_e(n,Ye);const s=Object.assign(Object.assign({},Q1),t);return function(i){if(i.maxAttempts<1)throw new A(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(i,r,o){const a=new vt;return i.asyncQueue.enqueueAndForget(async()=>{const c=await s1(i);new t1(i.asyncQueue,c,o,r,a).run()}),a.promise}(St(n),i=>e(new X1(n,i)),s)}/**
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
 */function Z1(){return new pl("deleteField")}function eO(){return new yg("serverTimestamp")}function tO(...n){return new S1("arrayUnion",n)}function nO(...n){return new C1("arrayRemove",n)}function sO(n){return new k1("increment",n)}(function(n,e=!0){(function(t){Ho=t})(Si),As(new _n("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new Ye(new dx(t.getProvider("auth-internal")),new gx(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hi(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xn(Cy,"3.8.3",n),xn(Cy,"3.8.3","esm2017")})();const iO="@firebase/firestore-compat",rO="0.3.3";/**
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
 */function Ag(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new A("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function xv(){if(typeof Uint8Array>"u")throw new A("unimplemented","Uint8Arrays are not available in this environment.")}function Dv(){if(!Sx())throw new A("unimplemented","Blobs are unavailable in Firestore in this environment.")}let FE=class hp{constructor(e){this._delegate=e}static fromBase64String(e){return Dv(),new hp(as.fromBase64String(e))}static fromUint8Array(e){return xv(),new hp(as.fromUint8Array(e))}toBase64(){return Dv(),this._delegate.toBase64()}toUint8Array(){return xv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function dp(n){return oO(n,["next","error","complete"])}function oO(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}/**
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
 */class aO{enableIndexedDbPersistence(e,t){return p1(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return m1(e._delegate)}clearIndexedDbPersistence(e){return g1(e._delegate)}}class VE{constructor(e,t,s){this._delegate=t,this._persistenceProvider=s,this.INTERNAL={delete:()=>this.terminate()},e instanceof hi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&yo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,s={}){XR(this._delegate,e,t,s)}enableNetwork(){return y1(this._delegate)}disableNetwork(){return v1(this._delegate)}enablePersistence(e){let t=!1,s=!1;return e&&(t=!!e.synchronizeTabs,s=!!e.experimentalForceOwningTab,uE("synchronizeTabs",t,"experimentalForceOwningTab",s)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,s)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return _1(this._delegate)}onSnapshotsInSync(e){return K1(this._delegate,e)}get app(){if(!this._appCompat)throw new A("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new xo(this,dE(this._delegate,e))}catch(t){throw $t(t,"collection()","Firestore.collection()")}}doc(e){try{return new Cn(this,qu(this._delegate,e))}catch(t){throw $t(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new wc(this,JR(this._delegate,e))}catch(t){throw $t(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return J1(this._delegate,t=>e(new UE(this,t)))}batch(){return St(this._delegate),new qE(new Y1(this._delegate,e=>gl(this._delegate,e)))}loadBundle(e){return w1(this._delegate,e)}namedQuery(e){return T1(this._delegate,e).then(t=>t?new wc(this,t):null)}}class ld extends Cg{constructor(e){super(),this.firestore=e}convertBytes(e){return new FE(new as(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Cn.forKey(t,this.firestore,null)}}function cO(n){cx(n)}class UE{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new ld(e)}get(e){const t=Xi(e);return this._delegate.get(t).then(s=>new yc(this._firestore,new xs(this._firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,t.converter)))}set(e,t,s){const i=Xi(e);return s?(Ag("Transaction.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=Xi(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=Xi(e);return this._delegate.delete(t),this}}class qE{constructor(e){this._delegate=e}set(e,t,s){const i=Xi(e);return s?(Ag("WriteBatch.set",s),this._delegate.set(i,t,s)):this._delegate.set(i,t),this}update(e,t,s,...i){const r=Xi(e);return arguments.length===2?this._delegate.update(r,t):this._delegate.update(r,t,s,...i),this}delete(e){const t=Xi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class vr{constructor(e,t,s){this._firestore=e,this._userDataWriter=t,this._delegate=s}fromFirestore(e,t){const s=new $a(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new vc(this._firestore,s),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const s=vr.INSTANCES;let i=s.get(e);i||(i=new WeakMap,s.set(e,i));let r=i.get(t);return r||(r=new vr(e,new ld(e),t),i.set(t,r)),r}}vr.INSTANCES=new WeakMap;class Cn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ld(e)}static forPath(e,t,s){if(e.length%2!==0)throw new A("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Cn(t,new Oe(t._delegate,s,new M(e)))}static forKey(e,t,s){return new Cn(t,new Oe(t._delegate,s,e))}get id(){return this._delegate.id}get parent(){return new xo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new xo(this.firestore,dE(this._delegate,e))}catch(t){throw $t(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof Oe?fE(this._delegate,e):!1}set(e,t){t=Ag("DocumentReference.set",t);try{return t?Av(this._delegate,e,t):Av(this._delegate,e)}catch(s){throw $t(s,"setDoc()","DocumentReference.set()")}}update(e,t,...s){try{return arguments.length===1?Nv(this._delegate,e):Nv(this._delegate,e,t,...s)}catch(i){throw $t(i,"updateDoc()","DocumentReference.update()")}}delete(){return z1(this._delegate)}onSnapshot(...e){const t=BE(e),s=WE(e,i=>new yc(this.firestore,new xs(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return LE(this._delegate,t,s)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=B1(this._delegate):(e==null?void 0:e.source)==="server"?t=W1(this._delegate):t=q1(this._delegate),t.then(s=>new yc(this.firestore,new xs(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)))}withConverter(e){return new Cn(this.firestore,e?this._delegate.withConverter(vr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $t(n,e,t){return n.message=n.message.replace(e,t),n}function BE(n){for(const e of n)if(typeof e=="object"&&!dp(e))return e;return{}}function WE(n,e){var t,s;let i;return dp(n[0])?i=n[0]:dp(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:r=>{i.next&&i.next(e(r))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(s=i.complete)===null||s===void 0?void 0:s.bind(i)}}class yc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Cn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return ME(this._delegate,e._delegate)}}class vc extends yc{data(e){const t=this._delegate.data(e);return lx(t!==void 0),t}}let wc=class Kn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new ld(e)}where(e,t,s){try{return new Kn(this.firestore,zs(this._delegate,x1(e,t,s)))}catch(i){throw $t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Kn(this.firestore,zs(this._delegate,D1(e,t)))}catch(s){throw $t(s,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Kn(this.firestore,zs(this._delegate,R1(e)))}catch(t){throw $t(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Kn(this.firestore,zs(this._delegate,O1(e)))}catch(t){throw $t(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Kn(this.firestore,zs(this._delegate,P1(...e)))}catch(t){throw $t(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Kn(this.firestore,zs(this._delegate,M1(...e)))}catch(t){throw $t(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Kn(this.firestore,zs(this._delegate,L1(...e)))}catch(t){throw $t(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Kn(this.firestore,zs(this._delegate,F1(...e)))}catch(t){throw $t(t,"endAt()","Query.endAt()")}}isEqual(e){return pE(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=j1(this._delegate):(e==null?void 0:e.source)==="server"?t=G1(this._delegate):t=$1(this._delegate),t.then(s=>new fp(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)))}onSnapshot(...e){const t=BE(e),s=WE(e,i=>new fp(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return LE(this._delegate,t,s)}withConverter(e){return new Kn(this.firestore,e?this._delegate.withConverter(vr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};class lO{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new vc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class fp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new wc(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new vc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new lO(this._firestore,t))}forEach(e,t){this._delegate.forEach(s=>{e.call(t,new vc(this._firestore,s))})}isEqual(e){return ME(this._delegate,e._delegate)}}class xo extends wc{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Cn(this.firestore,e):null}doc(e){try{return e===void 0?new Cn(this.firestore,qu(this._delegate)):new Cn(this.firestore,qu(this._delegate,e))}catch(t){throw $t(t,"doc()","CollectionReference.doc()")}}add(e){return H1(this._delegate,e).then(t=>new Cn(this.firestore,t))}isEqual(e){return fE(this._delegate,e._delegate)}withConverter(e){return new xo(this.firestore,e?this._delegate.withConverter(vr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Xi(n){return _e(n,Oe)}/**
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
 */class Ng{constructor(...e){this._delegate=new gi(...e)}static documentId(){return new Ng(tt.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof gi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class zi{constructor(e){this._delegate=e}static serverTimestamp(){const e=eO();return e._methodName="FieldValue.serverTimestamp",new zi(e)}static delete(){const e=Z1();return e._methodName="FieldValue.delete",new zi(e)}static arrayUnion(...e){const t=tO(...e);return t._methodName="FieldValue.arrayUnion",new zi(t)}static arrayRemove(...e){const t=nO(...e);return t._methodName="FieldValue.arrayRemove",new zi(t)}static increment(e){const t=sO(e);return t._methodName="FieldValue.increment",new zi(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const uO={Firestore:VE,GeoPoint:ed,Timestamp:Be,Blob:FE,Transaction:UE,WriteBatch:qE,DocumentReference:Cn,DocumentSnapshot:yc,Query:wc,QueryDocumentSnapshot:vc,QuerySnapshot:fp,CollectionReference:xo,FieldPath:Ng,FieldValue:zi,setLogLevel:cO,CACHE_SIZE_UNLIMITED:f1};function hO(n,e){n.INTERNAL.registerComponent(new _n("firestore-compat",t=>{const s=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(s,i)},"PUBLIC").setServiceProps(Object.assign({},uO)))}/**
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
 */function dO(n){hO(n,(e,t)=>new VE(e,t,new aO)),n.registerVersion(iO,rO)}dO(be);function xg(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function jn(n,e,t,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,s);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function rt(n,e,t,s){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(s.next(u))}catch(h){o(h)}}function c(u){try{l(s.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((s=s.apply(n,e||[])).next())})}const ba={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Xr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function fO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function $E(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pO=fO,mO=$E,jE=new Rr("auth","Firebase",$E());/**
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
 */const Rv=new jo("@firebase/auth");function uu(n,...e){Rv.logLevel<=me.ERROR&&Rv.error(`Auth (${Si}): ${n}`,...e)}/**
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
 */function Ot(n,...e){throw Dg(n,...e)}function Dt(n,...e){return Dg(n,...e)}function GE(n,e,t){const s=Object.assign(Object.assign({},mO()),{[e]:t});return new Rr("auth","Firebase",s).create(e,{appName:n.name})}function ta(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ot(n,"argument-error"),GE(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return jE.create(n,...e)}function R(n,e,...t){if(!n)throw Dg(e,...t)}function ns(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uu(e),new Error(e)}function Wn(n,e){n||ns(e)}/**
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
 */const Ov=new Map;function mn(n){Wn(n instanceof Function,"Expected a class definition");let e=Ov.get(n);return e?(Wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ov.set(n,e),e)}function gO(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Tc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Rg(){return Pv()==="http:"||Pv()==="https:"}function Pv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function _O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rg()||aT()||"connection"in navigator)?navigator.onLine:!0}function yO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _l{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wn(t>e,"Short delay should be less than long delay!"),this.isMobile=om()||Sh()}get(){return _O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Og(n,e){Wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ns("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ns("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ns("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wO=new _l(3e4,6e4);function dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ct(n,e,t,s,i={}){return HE(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Or(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),zE.fetch()(KE(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function HE(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},vO),e);try{const i=new TO(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ma(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ma(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ma(n,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw GE(n,u,l);Ot(n,u)}}catch(i){if(i instanceof Kt)throw i;Ot(n,"network-request-failed")}}async function Vs(n,e,t,s,i={}){const r=await Ct(n,e,t,s,i);return"mfaPendingCredential"in r&&Ot(n,"multi-factor-auth-required",{_serverResponse:r}),r}function KE(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?Og(n.config,i):`${n.config.apiScheme}://${i}`}class TO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),wO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Dt(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function IO(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function bO(n,e){return Ct(n,"POST","/v1/accounts:update",e)}async function EO(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ja(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SO(n,e=!1){const t=B(n),s=await t.getIdToken(e),i=ud(s);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ja(gf(i.auth_time)),issuedAtTime:ja(gf(i.iat)),expirationTime:ja(gf(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gf(n){return Number(n)*1e3}function ud(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return uu("JWT malformed, contained fewer than 3 sections"),null;try{const i=_u(t);return i?JSON.parse(i):(uu("Failed to decode base64 JWT payload"),null)}catch(i){return uu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function CO(n){const e=ud(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ds(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Kt&&kO(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function kO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class AO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class QE{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ic(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Ds(n,EO(t,{idToken:s}));R(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?DO(r.providerUserInfo):[],a=xO(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new QE(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function NO(n){const e=B(n);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xO(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function DO(n){return n.map(e=>{var{providerId:t}=e,s=xg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function RO(n,e){const t=await HE(n,{},async()=>{const s=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=KE(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class bc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await RO(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new bc;return s&&(R(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bc,this.toJSON())}_performRefresh(){return ns("not implemented")}}/**
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
 */function Hs(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new QE(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SO(this,e)}reload(){return NO(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ic(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ds(this,IO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:C,isAnonymous:_,providerData:v,stsTokenManager:I}=t;R(S&&I,e,"internal-error");const b=bc.fromJSON(this.name,I);R(typeof S=="string",e,"internal-error"),Hs(h,e.name),Hs(d,e.name),R(typeof C=="boolean",e,"internal-error"),R(typeof _=="boolean",e,"internal-error"),Hs(f,e.name),Hs(p,e.name),Hs(m,e.name),Hs(g,e.name),Hs(y,e.name),Hs(w,e.name);const P=new nr({uid:S,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:_,photoURL:p,phoneNumber:f,tenantId:m,stsTokenManager:b,createdAt:y,lastLoginAt:w});return v&&Array.isArray(v)&&(P.providerData=v.map(x=>Object.assign({},x))),g&&(P._redirectEventId=g),P}static async _fromIdTokenResponse(e,t,s=!1){const i=new bc;i.updateFromServerResponse(t);const r=new nr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ic(r),r}}/**
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
 */class YE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}YE.type="NONE";const Do=YE;/**
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
 */function sr(n,e,t){return`firebase:${n}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=sr(this.userKey,i.apiKey,r),this.fullPersistenceKey=sr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(mn(Do),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||mn(Do);const o=sr(s,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=nr._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new co(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new co(r,e,s))}}/**
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
 */function Mv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e0(e))return"Blackberry";if(t0(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||JE(e))&&!e.includes("edge/"))return"Chrome";if(yl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function XE(n=je()){return/firefox\//i.test(n)}function Pg(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JE(n=je()){return/crios\//i.test(n)}function ZE(n=je()){return/iemobile/i.test(n)}function yl(n=je()){return/android/i.test(n)}function e0(n=je()){return/blackberry/i.test(n)}function t0(n=je()){return/webos/i.test(n)}function na(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function OO(n=je()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function PO(n=je()){var e;return na(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MO(){return cT()&&document.documentMode===10}function n0(n=je()){return na(n)||yl(n)||t0(n)||e0(n)||/windows phone/i.test(n)||ZE(n)}function LO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function s0(n,e=[]){let t;switch(n){case"Browser":t=Mv(je());break;case"Worker":t=`${Mv(je())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Si}/${s}`}/**
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
 */class FO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class VO{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new FO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mn(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?B(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mn(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function It(n){return B(n)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=hT(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function UO(n,e,t){const s=It(n);R(s._canInitEmulator,s,"emulator-config-failed"),R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=i0(e),{host:o,port:a}=qO(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BO()}function i0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qO(n){const e=i0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fv(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fv(o)}}}function Fv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class sa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ns("not implemented")}_getIdTokenResponse(e){return ns("not implemented")}_linkToIdToken(e,t){return ns("not implemented")}_getReauthenticationResolver(e){return ns("not implemented")}}/**
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
 */async function r0(n,e){return Ct(n,"POST","/v1/accounts:resetPassword",dt(n,e))}async function o0(n,e){return Ct(n,"POST","/v1/accounts:update",e)}async function WO(n,e){return Ct(n,"POST","/v1/accounts:update",dt(n,e))}/**
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
 */async function $O(n,e){return Vs(n,"POST","/v1/accounts:signInWithPassword",dt(n,e))}async function hd(n,e){return Ct(n,"POST","/v1/accounts:sendOobCode",dt(n,e))}async function jO(n,e){return hd(n,e)}async function GO(n,e){return hd(n,e)}async function zO(n,e){return hd(n,e)}async function HO(n,e){return hd(n,e)}/**
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
 */async function KO(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",dt(n,e))}async function QO(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",dt(n,e))}/**
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
 */class Ec extends sa{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ec(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ec(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $O(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KO(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return o0(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QO(e,{idToken:t,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ss(n,e){return Vs(n,"POST","/v1/accounts:signInWithIdp",dt(n,e))}/**
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
 */const YO="http://localhost";class cs extends sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=xg(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new cs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ss(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ss(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ss(e,t)}buildRequest(){const e={requestUri:YO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Or(t)}return e}}/**
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
 */async function XO(n,e){return Ct(n,"POST","/v1/accounts:sendVerificationCode",dt(n,e))}async function JO(n,e){return Vs(n,"POST","/v1/accounts:signInWithPhoneNumber",dt(n,e))}async function ZO(n,e){const t=await Vs(n,"POST","/v1/accounts:signInWithPhoneNumber",dt(n,e));if(t.temporaryProof)throw Ma(n,"account-exists-with-different-credential",t);return t}const eP={USER_NOT_FOUND:"user-not-found"};async function tP(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vs(n,"POST","/v1/accounts:signInWithPhoneNumber",dt(n,t),eP)}/**
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
 */class ir extends sa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ir({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ir({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return JO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ZO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tP(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r}=e;return!s&&!t&&!i&&!r?null:new ir({verificationId:t,verificationCode:s,phoneNumber:i,temporaryProof:r})}}/**
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
 */function nP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sP(n){const e=so(xa(n)).link,t=e?so(xa(e)).deep_link_id:null,s=so(xa(n)).deep_link_id;return(s?so(xa(s)).link:null)||s||t||e||n}class dd{constructor(e){var t,s,i,r,o,a;const c=so(xa(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=nP((i=c.mode)!==null&&i!==void 0?i:null);R(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=sP(e);try{return new dd(t)}catch{return null}}}/**
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
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,t){return Ec._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=dd.parseLink(t);return R(s,"argument-error"),Ec._fromEmailAndCode(e,s.code,s.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Us{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ia extends Us{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class lo extends ia{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return R("providerId"in t&&"signInMethod"in t,"argument-error"),cs._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),cs._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return lo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return lo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:a}=e;if(!s&&!i&&!t&&!r||!a)return null;try{return new lo(a)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
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
 */class Yn extends ia{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Xn.credential(t,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Jn extends ia{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */const iP="http://localhost";class Ro extends sa{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ss(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ss(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ss(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,pendingToken:r}=t;return!s||!i||!r||s!==i?null:new Ro(s,r)}static _create(e,t){return new Ro(e,t)}buildRequest(){return{requestUri:iP,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const rP="saml.";class Wu extends Us{constructor(e){R(e.startsWith(rP),"argument-error"),super(e)}static credentialFromResult(e){return Wu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ro.fromJSON(e);return R(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Ro._create(s,t)}catch{return null}}}/**
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
 */class Zn extends ia{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Zn.credential(t,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function a0(n,e){return Vs(n,"POST","/v1/accounts:signUp",dt(n,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await nr._fromIdTokenResponse(e,s,i),o=Vv(s);return new Rn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Vv(s);return new Rn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Vv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function oP(n){var e;const t=It(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rn({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await a0(t,{returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class $u extends Kt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new $u(e,t,s,i)}}function c0(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(n,r,e,s):r})}/**
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
 */function l0(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function aP(n,e){const t=B(n);await fd(!0,t,e);const{providerUserInfo:s}=await bO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=l0(s||[]);return t.providerData=t.providerData.filter(r=>i.has(r.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Mg(n,e,t=!1){const s=await Ds(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rn._forOperation(n,"link",s)}async function fd(n,e,t){await Ic(e);const s=l0(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";R(s.has(t)===n,e.auth,i)}/**
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
 */async function u0(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Ds(n,c0(s,i,e,n),t);R(r.idToken,s,"internal-error");const o=ud(r.idToken);R(o,s,"internal-error");const{sub:a}=o;return R(n.uid===a,s,"user-mismatch"),Rn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),r}}/**
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
 */async function h0(n,e,t=!1){const s="signIn",i=await c0(n,s,e),r=await Rn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function pd(n,e){return h0(It(n),e)}async function d0(n,e){const t=B(n);return await fd(!1,t,e.providerId),Mg(t,e)}async function f0(n,e){return u0(B(n),e)}/**
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
 */async function cP(n,e){return Vs(n,"POST","/v1/accounts:signInWithCustomToken",dt(n,e))}/**
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
 */async function lP(n,e){const t=It(n),s=await cP(t,{token:e,returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(i.user),i}/**
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
 */class md{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Lg._fromServerResponse(e,t):Ot(e,"internal-error")}}class Lg extends md{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Lg(t)}}/**
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
 */function gd(n,e,t){var s;R(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),R(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(R(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(R(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function uP(n,e,t){const s=B(n),i={requestType:"PASSWORD_RESET",email:e};t&&gd(s,i,t),await GO(s,i)}async function hP(n,e,t){await r0(B(n),{oobCode:e,newPassword:t})}async function dP(n,e){await WO(B(n),{oobCode:e})}async function p0(n,e){const t=B(n),s=await r0(t,{oobCode:e}),i=s.requestType;switch(R(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(s.mfaInfo,t,"internal-error");default:R(s.email,t,"internal-error")}let r=null;return s.mfaInfo&&(r=md._fromServerResponse(It(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:r},operation:i}}async function fP(n,e){const{data:t}=await p0(B(n),e);return t.email}async function pP(n,e,t){const s=It(n),i=await a0(s,{returnSecureToken:!0,email:e,password:t}),r=await Rn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function mP(n,e,t){return pd(B(n),Ri.credential(e,t))}/**
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
 */async function gP(n,e,t){const s=B(n),i={requestType:"EMAIL_SIGNIN",email:e};R(t.handleCodeInApp,s,"argument-error"),t&&gd(s,i,t),await zO(s,i)}function _P(n,e){const t=dd.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function yP(n,e,t){const s=B(n),i=Ri.credentialWithLink(e,t||Tc());return R(i._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),pd(s,i)}/**
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
 */async function vP(n,e){return Ct(n,"POST","/v1/accounts:createAuthUri",dt(n,e))}/**
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
 */async function wP(n,e){const t=Rg()?Tc():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:i}=await vP(B(n),s);return i||[]}async function TP(n,e){const t=B(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&gd(t.auth,i,e);const{email:r}=await jO(t.auth,i);r!==n.email&&await n.reload()}async function IP(n,e,t){const s=B(n),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&gd(s.auth,r,t);const{email:o}=await HO(s.auth,r);o!==n.email&&await n.reload()}/**
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
 */async function bP(n,e){return Ct(n,"POST","/v1/accounts:update",e)}/**
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
 */async function EP(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=B(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ds(s,bP(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function SP(n,e){return m0(B(n),e,null)}function CP(n,e){return m0(B(n),null,e)}async function m0(n,e,t){const{auth:s}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const o=await Ds(n,o0(s,r));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function kP(n){var e,t;if(!n)return null;const{providerId:s}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(n!=null&&n.idToken)){const o=(t=(e=ud(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new uo(r,a)}}if(!s)return null;switch(s){case"facebook.com":return new AP(r,i);case"github.com":return new NP(r,i);case"google.com":return new xP(r,i);case"twitter.com":return new DP(r,i,n.screenName||null);case"custom":case"anonymous":return new uo(r,null);default:return new uo(r,s,i)}}class uo{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class g0 extends uo{constructor(e,t,s,i){super(e,t,s),this.username=i}}class AP extends uo{constructor(e,t){super(e,"facebook.com",t)}}class NP extends g0{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class xP extends uo{constructor(e,t){super(e,"google.com",t)}}class DP extends g0{constructor(e,t,s){super(e,"twitter.com",t,s)}}function RP(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:kP(t)}class Ji{constructor(e,t,s){this.type=e,this.credential=t,this.auth=s}static _fromIdtoken(e,t){return new Ji("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ji("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ji._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Ji._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Fg{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=It(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map(a=>md._fromServerResponse(s,a));R(i.mfaPendingCredential,s,"internal-error");const o=Ji._fromMfaPendingCredential(i.mfaPendingCredential);return new Fg(o,r,async a=>{const c=await a._process(s,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const u=await Rn._fromIdTokenResponse(s,t.operationType,l);return await s._updateCurrentUser(u.user),u;case"reauthenticate":return R(t.user,s,"internal-error"),Rn._forOperation(t.user,t.operationType,l);default:Ot(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function OP(n,e){var t;const s=B(n),i=e;return R(e.customData.operationType,s,"argument-error"),R((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),Fg._fromError(s,i)}/**
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
 */function PP(n,e){return Ct(n,"POST","/v2/accounts/mfaEnrollment:start",dt(n,e))}function MP(n,e){return Ct(n,"POST","/v2/accounts/mfaEnrollment:finalize",dt(n,e))}function LP(n,e){return Ct(n,"POST","/v2/accounts/mfaEnrollment:withdraw",dt(n,e))}class Vg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>md._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Vg(e)}async getSession(){return Ji._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const s=e,i=await this.getSession(),r=await Ds(this.user,s._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const i=await Ds(this.user,LP(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:r})=>r!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const _f=new WeakMap;function FP(n){const e=B(n);return _f.has(e)||_f.set(e,Vg._fromUser(e)),_f.get(e)}const ju="__sak";/**
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
 */class _0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ju,"1"),this.storage.removeItem(ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function VP(){const n=je();return Pg(n)||na(n)}const UP=1e3,qP=10;class y0 extends _0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VP()&&LO(),this.fallbackToPolling=n0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);MO()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qP):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const Ug=y0;/**
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
 */class v0 extends _0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}v0.type="SESSION";const wr=v0;/**
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
 */function BP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new _d(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await BP(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_d.receivers=[];/**
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
 */function vl(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class WP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=vl("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function $P(n){at().location.href=n}/**
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
 */function qg(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function jP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zP(){return qg()?self:null}/**
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
 */const w0="firebaseLocalStorageDb",HP=1,Gu="firebaseLocalStorage",T0="fbase_key";class wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yd(n,e){return n.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function KP(){const n=indexedDB.deleteDatabase(w0);return new wl(n).toPromise()}function pp(){const n=indexedDB.open(w0,HP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Gu,{keyPath:T0})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Gu)?e(s):(s.close(),await KP(),e(await pp()))})})}async function Uv(n,e,t){const s=yd(n,!0).put({[T0]:e,value:t});return new wl(s).toPromise()}async function QP(n,e){const t=yd(n,!1).get(e),s=await new wl(t).toPromise();return s===void 0?null:s.value}function qv(n,e){const t=yd(n,!0).delete(e);return new wl(t).toPromise()}const YP=800,XP=3;class I0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>XP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_d._getInstance(zP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jP(),!this.activeServiceWorker)return;this.sender=new WP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pp();return await Uv(e,ju,"1"),await qv(e,ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uv(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>QP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=yd(i,!1).getAll();return new wl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I0.type="LOCAL";const Sc=I0;/**
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
 */function JP(n,e){return Ct(n,"POST","/v2/accounts/mfaSignIn:start",dt(n,e))}function ZP(n,e){return Ct(n,"POST","/v2/accounts/mfaSignIn:finalize",dt(n,e))}/**
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
 */async function eM(n){return(await Ct(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function tM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function b0(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Dt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",tM().appendChild(s)})}function E0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const nM=500,sM=6e4,Yl=1e12;class iM{constructor(e){this.auth=e,this.counter=Yl,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new rM(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||Yl;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||Yl;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||Yl;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class rM{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;R(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=oM(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},sM)},nM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function oM(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<n;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const yf=E0("rcb"),aM=new _l(3e4,6e4),cM="https://www.google.com/recaptcha/api.js?";class lM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=at().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return R(uM(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(at().grecaptcha):new Promise((s,i)=>{const r=at().setTimeout(()=>{i(Dt(e,"network-request-failed"))},aM.get());at()[yf]=()=>{at().clearTimeout(r),delete at()[yf];const a=at().grecaptcha;if(!a){i(Dt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=t,s(a)};const o=`${cM}?${Or({onload:yf,render:"explicit",hl:t})}`;b0(o).catch(()=>{clearTimeout(r),i(Dt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=at().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function uM(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class hM{async load(e){return new iM(e)}clearedOneInstance(){}}/**
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
 */const S0="recaptcha",dM={theme:"light",type:"image"};let fM=class{constructor(e,t=Object.assign({},dM),s){this.parameters=t,this.type=S0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=It(s),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;R(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hM:new lM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(i=>{const r=o=>{o&&(this.tokenChangeListeners.delete(r),i(o))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=at()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(Rg()&&!qg(),this.auth,"internal-error"),await pM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await eM(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function pM(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class Bg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ir._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function mM(n,e,t){const s=It(n),i=await vd(s,e,B(t));return new Bg(i,r=>pd(s,r))}async function gM(n,e,t){const s=B(n);await fd(!1,s,"phone");const i=await vd(s.auth,e,B(t));return new Bg(i,r=>d0(s,r))}async function _M(n,e,t){const s=B(n),i=await vd(s.auth,e,B(t));return new Bg(i,r=>f0(s,r))}async function vd(n,e,t){var s;const i=await t.verify();try{R(typeof i=="string",n,"argument-error"),R(t.type===S0,n,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return R(o.type==="enroll",n,"internal-error"),(await PP(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{R(o.type==="signin",n,"internal-error");const a=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;return R(a,n,"missing-multi-factor-info"),(await JP(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await XO(n,{phoneNumber:r.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function yM(n,e){await Mg(B(n),e)}/**
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
 */let Tr=class hu{constructor(e){this.providerId=hu.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return vd(this.auth,e,B(t))}static credential(e,t){return ir._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hu.credentialFromTaggedObject(t)}static credentialFromError(e){return hu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?ir._fromTokenResponse(t,s):null}};Tr.PROVIDER_ID="phone";Tr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function qr(n,e){return e?mn(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Wg extends sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ss(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vM(n){return h0(n.auth,new Wg(n),n.bypassAuthState)}function wM(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),u0(t,new Wg(n),n.bypassAuthState)}async function TM(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Mg(t,new Wg(n),n.bypassAuthState)}/**
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
 */class C0{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vM;case"linkViaPopup":case"linkViaRedirect":return TM;case"reauthViaPopup":case"reauthViaRedirect":return wM;default:Ot(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IM=new _l(2e3,1e4);async function bM(n,e,t){const s=It(n);ta(n,e,Us);const i=qr(s,t);return new Ts(s,"signInViaPopup",e,i).executeNotNull()}async function EM(n,e,t){const s=B(n);ta(s.auth,e,Us);const i=qr(s.auth,t);return new Ts(s.auth,"reauthViaPopup",e,i,s).executeNotNull()}async function SM(n,e,t){const s=B(n);ta(s.auth,e,Us);const i=qr(s.auth,t);return new Ts(s.auth,"linkViaPopup",e,i,s).executeNotNull()}class Ts extends C0{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=vl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,IM.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const CM="pendingRedirect",Ga=new Map;class kM extends C0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const s=await AM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AM(n,e){const t=A0(e),s=k0(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function $g(n,e){return k0(n)._set(A0(e),"true")}function NM(){Ga.clear()}function jg(n,e){Ga.set(n._key(),e)}function k0(n){return mn(n._redirectPersistence)}function A0(n){return sr(CM,n.config.apiKey,n.name)}/**
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
 */function xM(n,e,t){return DM(n,e,t)}async function DM(n,e,t){const s=It(n);ta(n,e,Us),await s._initializationPromise;const i=qr(s,t);return await $g(i,s),i._openRedirect(s,e,"signInViaRedirect")}function RM(n,e,t){return OM(n,e,t)}async function OM(n,e,t){const s=B(n);ta(s.auth,e,Us),await s.auth._initializationPromise;const i=qr(s.auth,t);await $g(i,s.auth);const r=await N0(s);return i._openRedirect(s.auth,e,"reauthViaRedirect",r)}function PM(n,e,t){return MM(n,e,t)}async function MM(n,e,t){const s=B(n);ta(s.auth,e,Us),await s.auth._initializationPromise;const i=qr(s.auth,t);await fd(!1,s,e.providerId),await $g(i,s.auth);const r=await N0(s);return i._openRedirect(s.auth,e,"linkViaRedirect",r)}async function LM(n,e){return await It(n)._initializationPromise,wd(n,e,!1)}async function wd(n,e,t=!1){const s=It(n),i=qr(s,e),o=await new kM(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}async function N0(n){const e=vl(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const FM=10*60*1e3;class x0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!D0(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Dt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bv(e))}saveEventToCache(e){this.cachedEventUids.add(Bv(e)),this.lastProcessedEventTime=Date.now()}}function Bv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function D0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D0(n);default:return!1}}/**
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
 */async function R0(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
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
 */const UM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qM=/^https?/;async function BM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await R0(n);for(const t of e)try{if(WM(t))return}catch{}Ot(n,"unauthorized-domain")}function WM(n){const e=Tc(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!qM.test(t))return!1;if(UM.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $M=new _l(3e4,6e4);function Wv(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function jM(n){return new Promise((e,t)=>{var s,i,r;function o(){Wv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wv(),t(Dt(n,"network-request-failed"))},timeout:$M.get()})}if(!((i=(s=at().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=at().gapi)===null||r===void 0)&&r.load)o();else{const a=E0("iframefcb");return at()[a]=()=>{gapi.load?o():t(Dt(n,"network-request-failed"))},b0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw du=null,e})}let du=null;function GM(n){return du=du||jM(n),du}/**
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
 */const zM=new _l(5e3,15e3),HM="__/auth/iframe",KM="emulator/auth/iframe",QM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XM(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Og(e,KM):`https://${n.config.authDomain}/${HM}`,s={apiKey:e.apiKey,appName:n.name,v:Si},i=YM.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${Or(s).slice(1)}`}async function JM(n){const e=await GM(n),t=at().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:XM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QM,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(n,"network-request-failed"),a=at().setTimeout(()=>{r(o)},zM.get());function c(){at().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const ZM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eL=500,tL=600,nL="_blank",sL="http://localhost";class $v{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iL(n,e,t,s=eL,i=tL){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ZM),{width:s.toString(),height:i.toString(),top:r,left:o}),l=je().toLowerCase();t&&(a=JE(l)?nL:t),XE(l)&&(e=e||sL,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(PO(l)&&a!=="_self")return rL(e||"",a),new $v(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new $v(h)}function rL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const oL="__/auth/handler",aL="emulator/auth/handler";function mp(n,e,t,s,i,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Si,eventId:i};if(e instanceof Us){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))o[c]=l}if(e instanceof ia){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${cL(n)}?${Or(a).slice(1)}`}function cL({config:n}){return n.emulator?Og(n,aL):`https://${n.authDomain}/${oL}`}/**
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
 */const vf="webStorageSupport";class lL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=wd,this._overrideRedirectResult=jg}async _openPopup(e,t,s,i){var r;Wn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=mp(e,t,s,Tc(),i);return iL(e,o,vl())}async _openRedirect(e,t,s,i){return await this._originValidation(e),$P(mp(e,t,s,Tc(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Wn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await JM(e),s=new x0(e);return t.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vf,{type:vf},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[vf];o!==void 0&&t(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return n0()||Pg()||na()}}const uL=lL;class hL{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return ns("unexpected MultiFactorSessionType")}}}class Gg extends hL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Gg(e)}_finalizeEnroll(e,t,s){return MP(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ZP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class O0{constructor(){}static assertion(e){return Gg._fromCredential(e)}}O0.FACTOR_ID="phone";var jv="@firebase/auth",Gv="0.21.3";/**
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
 */class dL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fL(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pL(n){As(new _n("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,c)=>{R(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s0(n)},u=new VO(a,c,l);return gO(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),As(new _n("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(s=>new dL(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(jv,Gv,fL(n)),xn(jv,Gv,"esm2017")}/**
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
 */const mL=5*60;xk("authIdTokenMaxAge");pL("Browser");/**
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
 */function Ir(){return window}/**
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
 */const gL=2e3;async function _L(n,e,t){var s;const{BuildInfo:i}=Ir();Wn(e.sessionId,"AuthEvent did not contain a session ID");const r=await IL(e.sessionId),o={};return na()?o.ibi=i.packageName:yl()?o.apn=i.packageName:Ot(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=r,mp(n,t,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,o)}async function yL(n){const{BuildInfo:e}=Ir(),t={};na()?t.iosBundleId=e.packageName:yl()?t.androidPackageName=e.packageName:Ot(n,"operation-not-supported-in-this-environment"),await R0(n,t)}function vL(n){const{cordova:e}=Ir();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let i=null;s?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,OO()?"_blank":"_system","location=yes"),t(i)})})}async function wL(n,e,t){const{cordova:s}=Ir();let i=()=>{};try{await new Promise((r,o)=>{let a=null;function c(){var h;r();const d=(h=s.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function l(){a||(a=window.setTimeout(()=>{o(Dt(n,"redirect-cancelled-by-user"))},gL))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),yl()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function TL(n){var e,t,s,i,r,o,a,c,l,u;const h=Ir();R(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((r=(i=(s=h==null?void 0:h.cordova)===null||s===void 0?void 0:s.plugins)===null||i===void 0?void 0:i.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function IL(n){const e=bL(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function bL(n){if(Wn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let s=0;s<n.length;s++)t[s]=n.charCodeAt(s);return t}/**
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
 */const EL=20;class SL extends x0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function CL(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:NL(),postBody:null,tenantId:n.tenantId,error:Dt(n,"no-auth-event")}}function kL(n,e){return gp()._set(_p(n),e)}async function zv(n){const e=await gp()._get(_p(n));return e&&await gp()._remove(_p(n)),e}function AL(n,e){var t,s;const i=DL(e);if(i.includes("/__/auth/callback")){const r=fu(i),o=r.firebaseError?xL(decodeURIComponent(r.firebaseError)):null,a=(s=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||s===void 0?void 0:s[1],c=a?Dt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function NL(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<EL;t++){const s=Math.floor(Math.random()*e.length);n.push(e.charAt(s))}return n.join("")}function gp(){return mn(Ug)}function _p(n){return sr("authEvent",n.config.apiKey,n.name)}function xL(n){try{return JSON.parse(n)}catch{return null}}function DL(n){const e=fu(n),t=e.link?decodeURIComponent(e.link):void 0,s=fu(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return fu(i).link||i||s||t||n}function fu(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return so(t.join("?"))}/**
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
 */const RL=500;class OL{constructor(){this._redirectPersistence=wr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=wd,this._overrideRedirectResult=jg}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new SL(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){Ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,i){TL(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),NM(),await this._originValidation(e);const o=CL(e,s,i);await kL(e,o);const a=await _L(e,o,t),c=await vL(a);return wL(e,r,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yL(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:i,BuildInfo:r}=Ir(),o=setTimeout(async()=>{await zv(e),t.onEvent(Hv())},RL),a=async u=>{clearTimeout(o);const h=await zv(e);let d=null;h&&(u!=null&&u.url)&&(d=AL(h,u.url)),t.onEvent(d||Hv())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,a);const c=i,l=`${r.packageName.toLowerCase()}://`;Ir().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const PL=OL;function Hv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Dt("no-auth-event")}}/**
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
 */function ML(n,e){It(n)._logFramework(e)}var LL="@firebase/auth-compat",FL="0.3.3";/**
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
 */const VL=1e3;function za(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function UL(){return za()==="http:"||za()==="https:"}function P0(n=je()){return!!((za()==="file:"||za()==="ionic:"||za()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function qL(){return Sh()||am()}function BL(){return cT()&&(document==null?void 0:document.documentMode)===11}function WL(n=je()){return/Edge\/\d+/.test(n)}function $L(n=je()){return BL()||WL(n)}function M0(){try{const n=self.localStorage,e=vl();if(n)return n.setItem(e,"1"),n.removeItem(e),$L()?Za():!0}catch{return zg()&&Za()}return!1}function zg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wf(){return(UL()||aT()||P0())&&!qL()&&M0()&&!zg()}function L0(){return P0()&&typeof document<"u"}async function jL(){return L0()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},VL);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function GL(){return typeof window<"u"?window:null}/**
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
 */const fn={LOCAL:"local",NONE:"none",SESSION:"session"},Ea=R,F0="persistence";function zL(n,e){if(Ea(Object.values(fn).includes(e),n,"invalid-persistence-type"),Sh()){Ea(e!==fn.SESSION,n,"unsupported-persistence-type");return}if(am()){Ea(e===fn.NONE,n,"unsupported-persistence-type");return}if(zg()){Ea(e===fn.NONE||e===fn.LOCAL&&Za(),n,"unsupported-persistence-type");return}Ea(e===fn.NONE||M0(),n,"unsupported-persistence-type")}async function yp(n){await n._initializationPromise;const e=V0(),t=sr(F0,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function HL(n,e){const t=V0();if(!t)return[];const s=sr(F0,n,e);switch(t.getItem(s)){case fn.NONE:return[Do];case fn.LOCAL:return[Sc,wr];case fn.SESSION:return[wr];default:return[]}}function V0(){var n;try{return((n=GL())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const KL=R;class Zs{constructor(){this.browserResolver=mn(uL),this.cordovaResolver=mn(PL),this.underlyingResolver=null,this._redirectPersistence=wr,this._completeRedirectFn=wd,this._overrideRedirectResult=jg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,i)}async _openRedirect(e,t,s,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return L0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return KL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await jL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function U0(n){return n.unwrap()}function QL(n){return n.wrapped()}/**
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
 */function YL(n){return q0(n)}function XL(n,e){var t;const s=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JL(n,OP(n,e))}else if(s){const i=q0(e),r=e;i&&(r.credential=i,r.tenantId=s.tenantId||void 0,r.email=s.email||void 0,r.phoneNumber=s.phoneNumber||void 0)}}function q0(n){const{_tokenResponse:e}=n instanceof Kt?n.customData:n;if(!e)return null;if(!(n instanceof Kt)&&"temporaryProof"in e&&"phoneNumber"in e)return Tr.credentialFromResult(n);const t=e.providerId;if(!t||t===ba.PASSWORD)return null;let s;switch(t){case ba.GOOGLE:s=Xn;break;case ba.FACEBOOK:s=Yn;break;case ba.GITHUB:s=Jn;break;case ba.TWITTER:s=Zn;break;default:const{oauthIdToken:i,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!r&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Ro._create(t,a):cs._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:r}):new lo(t).credential({idToken:i,accessToken:r,rawNonce:c})}return n instanceof Kt?s.credentialFromError(n):s.credentialFromResult(n)}function Jt(n,e){return e.catch(t=>{throw t instanceof Kt&&XL(n,t),t}).then(t=>{const s=t.operationType,i=t.user;return{operationType:s,credential:YL(t),additionalUserInfo:RP(t),user:Is.getOrCreate(i)}})}async function vp(n,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Jt(n,t.confirm(s))}}class JL{constructor(e,t){this.resolver=t,this.auth=QL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(U0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Is{constructor(e){this._delegate=e,this.multiFactor=FP(e)}static getOrCreate(e){return Is.USER_MAP.has(e)||Is.USER_MAP.set(e,new Is(e)),Is.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,d0(this._delegate,e))}async linkWithPhoneNumber(e,t){return vp(this.auth,gM(this._delegate,e,t))}async linkWithPopup(e){return Jt(this.auth,SM(this._delegate,e,Zs))}async linkWithRedirect(e){return await yp(It(this.auth)),PM(this._delegate,e,Zs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,f0(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return vp(this.auth,_M(this._delegate,e,t))}reauthenticateWithPopup(e){return Jt(this.auth,EM(this._delegate,e,Zs))}async reauthenticateWithRedirect(e){return await yp(It(this.auth)),RM(this._delegate,e,Zs)}sendEmailVerification(e){return TP(this._delegate,e)}async unlink(e){return await aP(this._delegate,e),this}updateEmail(e){return SP(this._delegate,e)}updatePassword(e){return CP(this._delegate,e)}updatePhoneNumber(e){return yM(this._delegate,e)}updateProfile(e){return EP(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return IP(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Is.USER_MAP=new WeakMap;/**
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
 */const Sa=R;class wp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;Sa(s,"invalid-api-key",{appName:e.name}),Sa(s,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Zs:void 0;this._delegate=t.initialize({options:{persistence:ZL(s,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(pO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Is.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){UO(this._delegate,e,t)}applyActionCode(e){return dP(this._delegate,e)}checkActionCode(e){return p0(this._delegate,e)}confirmPasswordReset(e,t){return hP(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Jt(this._delegate,pP(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return wP(this._delegate,e)}isSignInWithEmailLink(e){return _P(this._delegate,e)}async getRedirectResult(){Sa(wf(),this._delegate,"operation-not-supported-in-this-environment");const e=await LM(this._delegate,Zs);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ML(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:i,error:r,complete:o}=Kv(e,t,s);return this._delegate.onAuthStateChanged(i,r,o)}onIdTokenChanged(e,t,s){const{next:i,error:r,complete:o}=Kv(e,t,s);return this._delegate.onIdTokenChanged(i,r,o)}sendSignInLinkToEmail(e,t){return gP(this._delegate,e,t)}sendPasswordResetEmail(e,t){return uP(this._delegate,e,t||void 0)}async setPersistence(e){zL(this._delegate,e);let t;switch(e){case fn.SESSION:t=wr;break;case fn.LOCAL:t=await mn(Sc)._isAvailable()?Sc:Ug;break;case fn.NONE:t=Do;break;default:return Ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,oP(this._delegate))}signInWithCredential(e){return Jt(this._delegate,pd(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,lP(this._delegate,e))}signInWithEmailAndPassword(e,t){return Jt(this._delegate,mP(this._delegate,e,t))}signInWithEmailLink(e,t){return Jt(this._delegate,yP(this._delegate,e,t))}signInWithPhoneNumber(e,t){return vp(this._delegate,mM(this._delegate,e,t))}async signInWithPopup(e){return Sa(wf(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,bM(this._delegate,e,Zs))}async signInWithRedirect(e){return Sa(wf(),this._delegate,"operation-not-supported-in-this-environment"),await yp(this._delegate),xM(this._delegate,e,Zs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return fP(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}wp.Persistence=fn;function Kv(n,e,t){let s=n;typeof n!="function"&&({next:s,error:e,complete:t}=n);const i=s;return{next:o=>i(o&&Is.getOrCreate(o)),error:e,complete:t}}function ZL(n,e){const t=HL(n,e);if(typeof self<"u"&&!t.includes(Sc)&&t.push(Sc),typeof window<"u")for(const s of[Ug,wr])t.includes(s)||t.push(s);return t.includes(Do)||t.push(Do),t}/**
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
 */class Hg{constructor(){this.providerId="phone",this._delegate=new Tr(U0(be.auth()))}static credential(e,t){return Tr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Hg.PHONE_SIGN_IN_METHOD=Tr.PHONE_SIGN_IN_METHOD;Hg.PROVIDER_ID=Tr.PROVIDER_ID;/**
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
 */const eF=R;class tF{constructor(e,t,s=be.app()){var i;eF((i=s.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new fM(e,t,s.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const nF="auth-compat";function sF(n){n.INTERNAL.registerComponent(new _n(nF,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new wp(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Xr.EMAIL_SIGNIN,PASSWORD_RESET:Xr.PASSWORD_RESET,RECOVER_EMAIL:Xr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Xr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Xr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Xr.VERIFY_EMAIL}},EmailAuthProvider:Ri,FacebookAuthProvider:Yn,GithubAuthProvider:Jn,GoogleAuthProvider:Xn,OAuthProvider:lo,SAMLAuthProvider:Wu,PhoneAuthProvider:Hg,PhoneMultiFactorGenerator:O0,RecaptchaVerifier:tF,TwitterAuthProvider:Zn,Auth:wp,AuthCredential:sa,Error:Kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(LL,FL)}sF(be);const Qv="@firebase/database",Yv="0.14.3";/**
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
 */let B0="";function W0(n){B0=n}/**
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
 */class iF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ec(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class rF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $0=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iF(e)}}catch{}return new rF},Zi=$0("localStorage"),Tp=$0("sessionStorage");/**
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
 */const ho=new jo("@firebase/database"),j0=function(){let n=1;return function(){return n++}}(),G0=function(n){const e=Wk(n),t=new Uk;t.update(e);const s=t.digest();return im.encodeByteArray(s)},Tl=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Tl.apply(null,s):typeof s=="object"?e+=ct(s):e+=s,e+=" "}return e};let rr=null,Xv=!0;const z0=function(n,e){O(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ho.logLevel=me.VERBOSE,rr=ho.log.bind(ho),e&&Tp.set("logging_enabled",!0)):typeof n=="function"?rr=n:(rr=null,Tp.remove("logging_enabled"))},yt=function(...n){if(Xv===!0&&(Xv=!1,rr===null&&Tp.get("logging_enabled")===!0&&z0(!0)),rr){const e=Tl.apply(null,n);rr(e)}},Il=function(n){return function(...e){yt(n,...e)}},Ip=function(...n){const e="FIREBASE INTERNAL ERROR: "+Tl(...n);ho.error(e)},ls=function(...n){const e=`FIREBASE FATAL ERROR: ${Tl(...n)}`;throw ho.error(e),new Error(e)},Ut=function(...n){const e="FIREBASE WARNING: "+Tl(...n);ho.warn(e)},oF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Td=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},aF=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yi="[MIN_NAME]",Rs="[MAX_NAME]",Br=function(n,e){if(n===e)return 0;if(n===yi||e===Rs)return-1;if(e===yi||n===Rs)return 1;{const t=Jv(n),s=Jv(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},cF=function(n,e){return n===e?0:n<e?-1:1},Ca=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ct(e))},Kg=function(n){if(typeof n!="object"||n===null)return ct(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ct(e[s]),t+=":",t+=Kg(n[e[s]]);return t+="}",t},H0=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function bt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const K0=function(n){O(!Td(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},lF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function hF(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const dF=new RegExp("^-?(0*)\\d{1,10}$"),fF=-2147483648,pF=2147483647,Jv=function(n){if(dF.test(n)){const e=Number(n);if(e>=fF&&e<=pF)return e}return null},ra=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ut("Exception was thrown by user callback.",t),e},Math.floor(0))}},mF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ha=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class gF{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class _F{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(yt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class fo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fo.OWNER="owner";/**
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
 */const Qg="5",Q0="v",Y0="s",X0="r",J0="f",Z0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eS="ls",tS="p",bp="ac",nS="websocket",sS="long_polling";/**
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
 */class iS{constructor(e,t,s,i,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yF(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function rS(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let s;if(e===nS)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===sS)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yF(n)&&(t.ns=n.namespace);const i=[];return bt(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class vF{constructor(){this.counters_={}}incrementCounter(e,t=1){gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return bk(this.counters_)}}/**
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
 */const Tf={},If={};function Yg(n){const e=n.toString();return Tf[e]||(Tf[e]=new vF),Tf[e]}function wF(n,e){const t=n.toString();return If[t]||(If[t]=e()),If[t]}/**
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
 */class TF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ra(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zv="start",IF="close",bF="pLPCommand",EF="pRTLPCB",oS="id",aS="pw",cS="ser",SF="cb",CF="seg",kF="ts",AF="d",NF="dframe",lS=1870,uS=30,xF=lS-uS,DF=25e3,RF=3e4;class ei{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Il(e),this.stats_=Yg(t),this.urlFn=c=>(this.appCheckToken&&(c[bp]=this.appCheckToken),rS(t,sS,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new TF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RF)),aF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xg((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zv)this.id=a,this.password=c;else if(o===IF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zv]="t",s[cS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[SF]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Q0]=Qg,this.transportSessionId&&(s[Y0]=this.transportSessionId),this.lastSessionId&&(s[eS]=this.lastSessionId),this.applicationId&&(s[tS]=this.applicationId),this.appCheckToken&&(s[bp]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(s[X0]=J0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ei.forceAllow_=!0}static forceDisallow(){ei.forceDisallow_=!0}static isAvailable(){return ei.forceAllow_?!0:!ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lF()&&!uF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=rT(t),i=H0(s,xF);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[NF]="t",s[oS]=e,s[aS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xg{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j0(),window[bF+this.uniqueCallbackIdentifier]=e,window[EF+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xg.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){yt("frame writing exception"),a.stack&&yt(a.stack),yt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||yt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oS]=this.myID,e[aS]=this.myPW,e[cS]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uS+s.length<=lS;){const o=this.pendingSegs.shift();s=s+"&"+CF+i+"="+o.seg+"&"+kF+i+"="+o.ts+"&"+AF+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(DF)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{yt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const OF=16384,PF=45e3;let zu=null;typeof MozWebSocket<"u"?zu=MozWebSocket:typeof WebSocket<"u"&&(zu=WebSocket);class Sn{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Il(this.connId),this.stats_=Yg(t),this.connURL=Sn.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Q0]=Qg,typeof location<"u"&&location.hostname&&Z0.test(location.hostname)&&(o[X0]=J0),t&&(o[Y0]=t),s&&(o[eS]=s),i&&(o[bp]=i),r&&(o[tS]=r),rS(e,nS,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zi.set("previous_websocket_failure",!0);try{let s;lT(),this.mySock=new zu(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zu!==null&&!Sn.forceDisallow_}static previouslyFailed(){return Zi.isInMemoryStorage||Zi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ec(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=H0(t,OF);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PF))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
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
 */class Oo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ei,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Sn&&Sn.isAvailable();let s=t&&!Sn.previouslyFailed();if(e.webSocketOnly&&(t||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Sn];else{const i=this.transports_=[];for(const r of Oo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Oo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oo.globalTransportInitialized_=!1;/**
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
 */const MF=6e4,LF=5e3,FF=10*1024,VF=100*1024,bf="t",ew="d",UF="s",tw="r",qF="e",nw="o",sw="a",iw="n",rw="p",BF="h";class WF{constructor(e,t,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Il("c:"+this.id+":"),this.transportManager_=new Oo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ha(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bf in e){const t=e[bf];t===sw?this.upgradeIfSecondaryHealthy_():t===tw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===nw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ca("t",e),s=Ca("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:iw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ca("t",e),s=Ca("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ca(bf,e);if(ew in e){const s=e[ew];if(t===BF){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===iw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===UF?this.onConnectionShutdown_(s):t===tw?this.onReset_(s):t===qF?Ip("Server Error: "+s):t===nw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ip("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Qg!==s&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ha(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(MF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ha(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hS{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class dS{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Hu extends dS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!om()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hu}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ow=32,aw=768;class we{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ye(){return new we("")}function ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function vi(n){return n.pieces_.length-n.pieceNum_}function Ce(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new we(n.pieces_,e)}function Jg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $F(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function fS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new we(e,0)}function qe(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new we(t,0)}function ce(n){return n.pieceNum_>=n.pieces_.length}function zt(n,e){const t=ae(n),s=ae(e);if(t===null)return e;if(t===s)return zt(Ce(n),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function jF(n,e){const t=Cc(n,0),s=Cc(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Br(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Zg(n,e){if(vi(n)!==vi(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function kn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(vi(n)>vi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class GF{constructor(e,t){this.errorPrefix_=t,this.parts_=Cc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ch(this.parts_[s]);pS(this)}}function zF(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ch(e),pS(n)}function HF(n){const e=n.parts_.pop();n.byteLength_-=Ch(e),n.parts_.length>0&&(n.byteLength_-=1)}function pS(n){if(n.byteLength_>aw)throw new Error(n.errorPrefix_+"has a key path longer than "+aw+" bytes ("+n.byteLength_+").");if(n.parts_.length>ow)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ow+") or object contains a cycle "+Bi(n))}function Bi(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class e_ extends dS{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new e_}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ka=1e3,KF=60*5*1e3,cw=30*1e3,QF=1.3,YF=3e4,XF="server_kill",lw=3;class Cs extends hS{constructor(e,t,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Cs.nextPersistentConnectionId_++,this.log_=Il("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ka,this.maxReconnectDelay_=KF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!lT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");e_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ct(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new en,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Cs.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&gn(e,"w")){const s=cr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Vk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Fk(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ip("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>YF&&(this.reconnectDelay_=ka),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cs.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?yt("getToken() completed but was canceled"):(yt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new WF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Ut(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(XF)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ut(h),c())}}}interrupt(e){yt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){yt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yu(this.interruptReasons_)&&(this.reconnectDelay_=ka,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Kg(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new we(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){yt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lw&&(this.reconnectDelay_=cw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){yt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+B0.replace(/\./g,"-")]=1,om()?e["framework.cordova"]=1:Sh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hu.getInstance().currentlyOnline();return yu(this.interruptReasons_)&&e}}Cs.nextPersistentConnectionId_=0;Cs.nextConnectionId_=0;/**
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
 */class ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ue(e,t)}}/**
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
 */class Id{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ue(yi,e),i=new ue(yi,t);return this.compare(s,i)!==0}minPost(){return ue.MIN}}/**
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
 */let Xl;class mS extends Id{static get __EMPTY_NODE(){return Xl}static set __EMPTY_NODE(e){Xl=e}compare(e,t){return Br(e.name,t.name)}isDefinedOn(e){throw $o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Rs,Xl)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Xl)}toString(){return".key"}}const rs=new mS;/**
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
 */class Jl{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _t{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??_t.RED,this.left=i??rn.EMPTY_NODE,this.right=r??rn.EMPTY_NODE}copy(e,t,s,i,r){return new _t(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return rn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_t.RED=!0;_t.BLACK=!1;class JF{copy(e,t,s,i,r){return this}insert(e,t,s){return new _t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rn{constructor(e,t=rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,_t.BLACK,null,null))}remove(e){return new rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_t.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jl(this.root_,null,this.comparator_,!0,e)}}rn.EMPTY_NODE=new JF;/**
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
 */function ZF(n,e){return Br(n.name,e.name)}function t_(n,e){return Br(n,e)}/**
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
 */let Ep;function eV(n){Ep=n}const gS=function(n){return typeof n=="number"?"number:"+K0(n):"string:"+n},_S=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gn(e,".sv"),"Priority must be a string or number.")}else O(n===Ep||n.isEmpty(),"priority of unexpected type.");O(n===Ep||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let uw;class ft{constructor(e,t=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_S(this.priorityNode_)}static set __childrenNodeConstructor(e){uw=e}static get __childrenNodeConstructor(){return uw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:ae(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ae(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||vi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=K0(this.value_):e+=this.value_,this.lazyHash_=G0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=ft.VALUE_TYPE_ORDER.indexOf(t),r=ft.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yS,vS;function tV(n){yS=n}function nV(n){vS=n}class sV extends Id{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Br(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Rs,new ft("[PRIORITY-POST]",vS))}makePost(e,t){const s=yS(e);return new ue(t,new ft("[PRIORITY-POST]",s))}toString(){return".priority"}}const xe=new sV;/**
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
 */const iV=Math.log(2);class rV{constructor(e){const t=r=>parseInt(Math.log(r)/iV,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ku=function(n,e,t,s){n.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new _t(d,h.node,_t.BLACK,null,null);{const f=parseInt(u/2,10)+c,p=i(c,f),m=i(f+1,l);return h=n[f],d=t?t(h):h,new _t(d,h.node,_t.BLACK,p,m)}},r=function(c){let l=null,u=null,h=n.length;const d=function(p,m){const g=h-p,y=h;h-=p;const w=i(g+1,y),S=n[g],C=t?t(S):S;f(new _t(C,S.node,m,null,w))},f=function(p){l?(l.left=p,l=p):(u=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),g=Math.pow(2,c.count-(p+1));m?d(g,_t.BLACK):(d(g,_t.BLACK),d(g,_t.RED))}return u},o=new rV(n.length),a=r(o);return new rn(s||e,a)};/**
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
 */let Ef;const Jr={};class bs{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(Jr&&xe,"ChildrenNode.ts has not been loaded"),Ef=Ef||new bs({".priority":Jr},{".priority":xe}),Ef}get(e){const t=cr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof rn?t:null}hasIndex(e){return gn(this.indexSet_,e.toString())}addIndex(e,t){O(e!==rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(ue.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ku(s,e.getCompare()):a=Jr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new bs(u,l)}addToIndexes(e,t){const s=vu(this.indexes_,(i,r)=>{const o=cr(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===Jr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(ue.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ku(a,o.getCompare())}else return Jr;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new ue(e.name,a))),c.insert(e,e.node)}});return new bs(s,this.indexSet_)}removeFromIndexes(e,t){const s=vu(this.indexes_,i=>{if(i===Jr)return i;{const r=t.get(e.name);return r?i.remove(new ue(e.name,r)):i}});return new bs(s,this.indexSet_)}}/**
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
 */let Aa;class Q{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_S(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Aa||(Aa=new Q(new rn(t_),null,bs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Aa}updatePriority(e){return this.children_.isEmpty()?this:new Q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Aa:t}}getChild(e){const t=ae(e);return t===null?this:this.getImmediateChild(t).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ue(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Aa:this.priorityNode_;return new Q(i,o,r)}}updateChild(e,t){const s=ae(e);if(s===null)return t;{O(ae(e)!==".priority"||vi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ce(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(xe,(o,a)=>{t[o]=a.val(e),s++,r&&Q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gS(this.getPriority().val())+":"),this.forEachChild(xe,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":G0(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ue(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bl?-1:0}withIndex(e){if(e===rs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Q(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(xe),i=t.getIterator(xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rs?null:this.indexMap_.get(e.toString())}}Q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oV extends Q{constructor(){super(new rn(t_),Q.EMPTY_NODE,bs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Q.EMPTY_NODE}isEmpty(){return!1}}const bl=new oV;Object.defineProperties(ue,{MIN:{value:new ue(yi,Q.EMPTY_NODE)},MAX:{value:new ue(Rs,bl)}});mS.__EMPTY_NODE=Q.EMPTY_NODE;ft.__childrenNodeConstructor=Q;eV(bl);nV(bl);/**
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
 */const aV=!0;function $e(n,e=null){if(n===null)return Q.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ft(t,$e(e))}if(!(n instanceof Array)&&aV){const t=[];let s=!1;if(bt(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=$e(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new ue(o,c)))}}),t.length===0)return Q.EMPTY_NODE;const r=Ku(t,ZF,o=>o.name,t_);if(s){const o=Ku(t,xe.getCompare());return new Q(r,$e(e),new bs({".priority":o},{".priority":xe}))}else return new Q(r,$e(e),bs.Default)}else{let t=Q.EMPTY_NODE;return bt(n,(s,i)=>{if(gn(n,s)&&s.substring(0,1)!=="."){const r=$e(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority($e(e))}}tV($e);/**
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
 */class n_ extends Id{constructor(e){super(),this.indexPath_=e,O(!ce(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Br(e.name,t.name):r}makePost(e,t){const s=$e(e),i=Q.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(t,i)}maxPost(){const e=Q.EMPTY_NODE.updateChild(this.indexPath_,bl);return new ue(Rs,e)}toString(){return Cc(this.indexPath_,0).join("/")}}/**
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
 */class cV extends Id{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Br(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,t){const s=$e(e);return new ue(t,s)}toString(){return".value"}}const s_=new cV;/**
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
 */function wS(n){return{type:"value",snapshotNode:n}}function Po(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ac(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function lV(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class i_{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(kc(t,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Po(t,s)):o.trackChildChange(Ac(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,r)=>{t.hasChild(i)||s.trackChildChange(kc(i,r))}),t.isLeafNode()||t.forEachChild(xe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ac(i,r,o))}else s.trackChildChange(Po(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Q.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Nc{constructor(e){this.indexedFilter_=new i_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nc.getStartPost_(e),this.endPost_=Nc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new ue(t,s))||(s=Q.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=Q.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Q.EMPTY_NODE);const r=this;return t.forEachChild(xe,(o,a)=>{r.matches(new ue(o,a))||(i=i.updateImmediateChild(o,Q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class uV{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Nc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new ue(t,s))||(s=Q.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=Q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const c=new ue(t,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ac(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(kc(t,h));const m=a.updateImmediateChild(t,Q.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Po(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(kc(l.name,l.node)),r.trackChildChange(Po(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(l.name,Q.EMPTY_NODE)):e}}/**
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
 */class bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hV(n){return n.loadsAllData()?new i_(n.getIndex()):n.hasLimit()?new uV(n):new Nc(n)}function dV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function fV(n,e){const t=n.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Sp(n,e,t){const s=n.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,t!=null?(s.startNameSet_=!0,s.indexStartName_=t):(s.startNameSet_=!1,s.indexStartName_=""),s}function pV(n,e,t){let s;return n.index_===rs||t?s=Sp(n,e,t):s=Sp(n,e,Rs),s.startAfterSet_=!0,s}function Cp(n,e,t){const s=n.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,t!==void 0?(s.endNameSet_=!0,s.indexEndName_=t):(s.endNameSet_=!1,s.indexEndName_=""),s}function mV(n,e,t){let s;return n.index_===rs||t?s=Cp(n,e,t):s=Cp(n,e,yi),s.endBeforeSet_=!0,s}function Ed(n,e){const t=n.copy();return t.index_=e,t}function hw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===xe?t="$priority":n.index_===s_?t="$value":n.index_===rs?t="$key":(O(n.index_ instanceof n_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ct(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ct(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ct(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ct(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function dw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==xe&&(e.i=n.index_.toString()),e}/**
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
 */class Qu extends hS{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Il("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qu.getListenId_(e,s),a={};this.listens_[o]=a;const c=hw(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),cr(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,t){const s=Qu.getListenId_(e,t);delete this.listens_[s]}get(e){const t=hw(e._queryParams),s=e._path.toString(),i=new en;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Or(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ec(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gV{constructor(){this.rootNode_=Q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Yu(){return{value:null,children:new Map}}function oa(n,e,t){if(ce(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=ae(e);n.children.has(s)||n.children.set(s,Yu());const i=n.children.get(s);e=Ce(e),oa(i,e,t)}}function kp(n,e){if(ce(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(xe,(s,i)=>{oa(n,new we(s),i)}),kp(n,e)}}else if(n.children.size>0){const t=ae(e);return e=Ce(e),n.children.has(t)&&kp(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ap(n,e,t){n.value!==null?t(e,n.value):_V(n,(s,i)=>{const r=new we(e.toString()+"/"+s);Ap(i,r,t)})}function _V(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class yV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&bt(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const fw=10*1e3,vV=30*1e3,wV=5*60*1e3;class TV{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new yV(e);const s=fw+(vV-fw)*Math.random();Ha(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;bt(e,(i,r)=>{r>0&&gn(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ha(this.reportStats_.bind(this),Math.floor(Math.random()*2*wV))}}/**
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
 */var Fn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fn||(Fn={}));function r_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function o_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function a_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Xu{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Fn.ACK_USER_WRITE,this.source=r_()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new we(e));return new Xu(ye(),t,this.revert)}}else return O(ae(this.path)===e,"operationForChild called for unrelated child."),new Xu(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class xc{constructor(e,t){this.source=e,this.path=t,this.type=Fn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new xc(this.source,ye()):new xc(this.source,Ce(this.path))}}/**
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
 */class br{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Fn.OVERWRITE}operationForChild(e){return ce(this.path)?new br(this.source,ye(),this.snap.getImmediateChild(e)):new br(this.source,Ce(this.path),this.snap)}}/**
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
 */class Mo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Fn.MERGE}operationForChild(e){if(ce(this.path)){const t=this.children.subtree(new we(e));return t.isEmpty()?null:t.value?new br(this.source,ye(),t.value):new Mo(this.source,ye(),t)}else return O(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mo(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wi{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const t=ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class IV{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bV(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(lV(o.childName,o.snapshotNode))}),Na(n,i,"child_removed",e,s,t),Na(n,i,"child_added",e,s,t),Na(n,i,"child_moved",r,s,t),Na(n,i,"child_changed",e,s,t),Na(n,i,"value",e,s,t),i}function Na(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,c)=>SV(n,a,c)),o.forEach(a=>{const c=EV(n,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function EV(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function SV(n,e,t){if(e.childName==null||t.childName==null)throw $o("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),i=new ue(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Sd(n,e){return{eventCache:n,serverCache:e}}function Ka(n,e,t,s){return Sd(new wi(e,t,s),n.serverCache)}function TS(n,e,t,s){return Sd(n.eventCache,new wi(e,t,s))}function Ju(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Er(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Sf;const CV=()=>(Sf||(Sf=new rn(cF)),Sf);class Ne{constructor(e,t=CV()){this.value=e,this.children=t}static fromObject(e){let t=new Ne(null);return bt(e,(s,i)=>{t=t.set(new we(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ye(),value:this.value};if(ce(e))return null;{const s=ae(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ce(e),t);return r!=null?{path:qe(new we(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const t=ae(e),s=this.children.get(t);return s!==null?s.subtree(Ce(e)):new Ne(null)}}set(e,t){if(ce(e))return new Ne(t,this.children);{const s=ae(e),r=(this.children.get(s)||new Ne(null)).set(Ce(e),t),o=this.children.insert(s,r);return new Ne(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const t=ae(e),s=this.children.get(t);if(s){const i=s.remove(Ce(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new Ne(null):new Ne(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const t=ae(e),s=this.children.get(t);return s?s.get(Ce(e)):null}}setTree(e,t){if(ce(e))return t;{const s=ae(e),r=(this.children.get(s)||new Ne(null)).setTree(Ce(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ne(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(qe(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ye(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(ce(e))return null;{const r=ae(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),qe(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ye(),t)}foreachOnPath_(e,t,s){if(ce(e))return this;{this.value&&s(t,this.value);const i=ae(e),r=this.children.get(i);return r?r.foreachOnPath_(Ce(e),qe(t,i),s):new Ne(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(qe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class qn{constructor(e){this.writeTree_=e}static empty(){return new qn(new Ne(null))}}function Qa(n,e,t){if(ce(e))return new qn(new Ne(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=zt(i,e);return r=r.updateChild(o,t),new qn(n.writeTree_.set(i,r))}else{const i=new Ne(t),r=n.writeTree_.setTree(e,i);return new qn(r)}}}function Np(n,e,t){let s=n;return bt(t,(i,r)=>{s=Qa(s,qe(e,i),r)}),s}function pw(n,e){if(ce(e))return qn.empty();{const t=n.writeTree_.setTree(e,new Ne(null));return new qn(t)}}function xp(n,e){return Wr(n,e)!=null}function Wr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(zt(t.path,e)):null}function mw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(xe,(s,i)=>{e.push(new ue(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ue(s,i.value))}),e}function ii(n,e){if(ce(e))return n;{const t=Wr(n,e);return t!=null?new qn(new Ne(t)):new qn(n.writeTree_.subtree(e))}}function Dp(n){return n.writeTree_.isEmpty()}function Lo(n,e){return IS(ye(),n.writeTree_,e)}function IS(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=IS(qe(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(qe(n,".priority"),s)),t}}/**
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
 */function Cd(n,e){return CS(e,n)}function kV(n,e,t,s,i){O(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Qa(n.visibleWrites,e,t)),n.lastWriteId=s}function AV(n,e,t,s){O(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Np(n.visibleWrites,e,t),n.lastWriteId=s}function NV(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function xV(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&DV(a,s.path)?i=!1:kn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return RV(n),!0;if(s.snap)n.visibleWrites=pw(n.visibleWrites,s.path);else{const a=s.children;bt(a,c=>{n.visibleWrites=pw(n.visibleWrites,qe(s.path,c))})}return!0}else return!1}function DV(n,e){if(n.snap)return kn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&kn(qe(n.path,t),e))return!0;return!1}function RV(n){n.visibleWrites=bS(n.allWrites,OV,ye()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function OV(n){return n.visible}function bS(n,e,t){let s=qn.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)kn(t,o)?(a=zt(t,o),s=Qa(s,a,r.snap)):kn(o,t)&&(a=zt(o,t),s=Qa(s,ye(),r.snap.getChild(a)));else if(r.children){if(kn(t,o))a=zt(t,o),s=Np(s,a,r.children);else if(kn(o,t))if(a=zt(o,t),ce(a))s=Np(s,ye(),r.children);else{const c=cr(r.children,ae(a));if(c){const l=c.getChild(Ce(a));s=Qa(s,ye(),l)}}}else throw $o("WriteRecord should have .snap or .children")}}return s}function ES(n,e,t,s,i){if(!s&&!i){const r=Wr(n.visibleWrites,e);if(r!=null)return r;{const o=ii(n.visibleWrites,e);if(Dp(o))return t;if(t==null&&!xp(o,ye()))return null;{const a=t||Q.EMPTY_NODE;return Lo(o,a)}}}else{const r=ii(n.visibleWrites,e);if(!i&&Dp(r))return t;if(!i&&t==null&&!xp(r,ye()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(kn(l.path,e)||kn(e,l.path))},a=bS(n.allWrites,o,e),c=t||Q.EMPTY_NODE;return Lo(a,c)}}}function PV(n,e,t){let s=Q.EMPTY_NODE;const i=Wr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ii(n.visibleWrites,e);return t.forEachChild(xe,(o,a)=>{const c=Lo(ii(r,new we(o)),a);s=s.updateImmediateChild(o,c)}),mw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ii(n.visibleWrites,e);return mw(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MV(n,e,t,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=qe(e,t);if(xp(n.visibleWrites,r))return null;{const o=ii(n.visibleWrites,r);return Dp(o)?i.getChild(t):Lo(o,i.getChild(t))}}function LV(n,e,t,s){const i=qe(e,t),r=Wr(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ii(n.visibleWrites,i);return Lo(o,s.getNode().getImmediateChild(t))}else return null}function FV(n,e){return Wr(n.visibleWrites,e)}function VV(n,e,t,s,i,r,o){let a;const c=ii(n.visibleWrites,e),l=Wr(c,ye());if(l!=null)a=l;else if(t!=null)a=Lo(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function UV(){return{visibleWrites:qn.empty(),allWrites:[],lastWriteId:-1}}function Zu(n,e,t,s){return ES(n.writeTree,n.treePath,e,t,s)}function c_(n,e){return PV(n.writeTree,n.treePath,e)}function gw(n,e,t,s){return MV(n.writeTree,n.treePath,e,t,s)}function eh(n,e){return FV(n.writeTree,qe(n.treePath,e))}function qV(n,e,t,s,i,r){return VV(n.writeTree,n.treePath,e,t,s,i,r)}function l_(n,e,t){return LV(n.writeTree,n.treePath,e,t)}function SS(n,e){return CS(qe(n.treePath,e),n.writeTree)}function CS(n,e){return{treePath:n,writeTree:e}}/**
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
 */class BV{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Ac(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,kc(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Po(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ac(s,e.snapshotNode,i.oldSnap));else throw $o("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class WV{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const kS=new WV;class u_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return l_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Er(this.viewCache_),r=qV(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function $V(n){return{filter:n}}function jV(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function GV(n,e,t,s,i){const r=new BV;let o,a;if(t.type===Fn.OVERWRITE){const l=t;l.source.fromUser?o=Rp(n,e,l.path,l.snap,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ce(l.path),o=th(n,e,l.path,l.snap,s,i,a,r))}else if(t.type===Fn.MERGE){const l=t;l.source.fromUser?o=HV(n,e,l.path,l.children,s,i,r):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Op(n,e,l.path,l.children,s,i,a,r))}else if(t.type===Fn.ACK_USER_WRITE){const l=t;l.revert?o=YV(n,e,l.path,s,i,r):o=KV(n,e,l.path,l.affectedTree,s,i,r)}else if(t.type===Fn.LISTEN_COMPLETE)o=QV(n,e,t.path,s,r);else throw $o("Unknown operation type: "+t.type);const c=r.getChanges();return zV(e,o,c),{viewCache:o,changes:c}}function zV(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ju(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(wS(Ju(e)))}}function AS(n,e,t,s,i,r){const o=e.eventCache;if(eh(s,t)!=null)return e;{let a,c;if(ce(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Er(e),u=l instanceof Q?l:Q.EMPTY_NODE,h=c_(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Zu(s,Er(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ae(t);if(l===".priority"){O(vi(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=gw(s,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ce(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=gw(s,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=l_(s,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Ka(e,a,o.isFullyInitialized()||ce(t),n.filter.filtersNodes())}}function th(n,e,t,s,i,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(ce(t))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,s);l=u.updateFullNode(c.getNode(),f,null)}else{const f=ae(t);if(!c.isCompleteForPath(t)&&vi(t)>1)return e;const p=Ce(t),g=c.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?l=u.updatePriority(c.getNode(),g):l=u.updateChild(c.getNode(),f,g,p,kS,null)}const h=TS(e,l,c.isFullyInitialized()||ce(t),u.filtersNodes()),d=new u_(i,h,r);return AS(n,h,t,i,d,a)}function Rp(n,e,t,s,i,r,o){const a=e.eventCache;let c,l;const u=new u_(i,e,r);if(ce(t))l=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ka(e,l,!0,n.filter.filtersNodes());else{const h=ae(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),s),c=Ka(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(t),f=a.getNode().getImmediateChild(h);let p;if(ce(d))p=s;else{const m=u.getCompleteChild(h);m!=null?Jg(d)===".priority"&&m.getChild(fS(d)).isEmpty()?p=m:p=m.updateChild(d,s):p=Q.EMPTY_NODE}if(f.equals(p))c=e;else{const m=n.filter.updateChild(a.getNode(),h,p,d,u,o);c=Ka(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function _w(n,e){return n.eventCache.isCompleteForChild(e)}function HV(n,e,t,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=qe(t,c);_w(e,ae(u))&&(a=Rp(n,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=qe(t,c);_w(e,ae(u))||(a=Rp(n,a,u,l,i,r,o))}),a}function yw(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Op(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ce(t)?l=s:l=new Ne(null).setTree(t,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=yw(n,f,d);c=th(n,c,new we(h),p,i,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),m=yw(n,p,d);c=th(n,c,new we(h),m,i,r,o,a)}}),c}function KV(n,e,t,s,i,r,o){if(eh(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ce(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return th(n,e,t,c.getNode().getChild(t),i,r,a,o);if(ce(t)){let l=new Ne(null);return c.getNode().forEachChild(rs,(u,h)=>{l=l.set(new we(u),h)}),Op(n,e,t,l,i,r,a,o)}else return e}else{let l=new Ne(null);return s.foreach((u,h)=>{const d=qe(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),Op(n,e,t,l,i,r,a,o)}}function QV(n,e,t,s,i){const r=e.serverCache,o=TS(e,r.getNode(),r.isFullyInitialized()||ce(t),r.isFiltered());return AS(n,o,t,s,kS,i)}function YV(n,e,t,s,i,r){let o;if(eh(s,t)!=null)return e;{const a=new u_(s,e,i),c=e.eventCache.getNode();let l;if(ce(t)||ae(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zu(s,Er(e));else{const h=e.serverCache.getNode();O(h instanceof Q,"serverChildren would be complete if leaf node"),u=c_(s,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=ae(t);let h=l_(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,Ce(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,Q.EMPTY_NODE,Ce(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zu(s,Er(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||eh(s,ye())!=null,Ka(e,l,o,n.filter.filtersNodes())}}/**
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
 */class XV{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new i_(s.getIndex()),r=hV(s);this.processor_=$V(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Q.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(Q.EMPTY_NODE,a.getNode(),null),u=new wi(c,o.isFullyInitialized(),i.filtersNodes()),h=new wi(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Sd(h,u),this.eventGenerator_=new IV(this.query_)}get query(){return this.query_}}function JV(n){return n.viewCache_.serverCache.getNode()}function ZV(n){return Ju(n.viewCache_)}function eU(n,e){const t=Er(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ce(e)&&!t.getImmediateChild(ae(e)).isEmpty())?t.getChild(e):null}function vw(n){return n.eventRegistrations_.length===0}function tU(n,e){n.eventRegistrations_.push(e)}function ww(n,e,t){const s=[];if(t){O(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Tw(n,e,t,s){e.type===Fn.MERGE&&e.source.queryId!==null&&(O(Er(n.viewCache_),"We should always have a full cache before handling merges"),O(Ju(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=GV(n.processor_,i,e,t,s);return jV(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,NS(n,r.changes,r.viewCache.eventCache.getNode(),null)}function nU(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(xe,(r,o)=>{s.push(Po(r,o))}),t.isFullyInitialized()&&s.push(wS(t.getNode())),NS(n,s,t.getNode(),e)}function NS(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return bV(n.eventGenerator_,e,t,i)}/**
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
 */let nh;class xS{constructor(){this.views=new Map}}function sU(n){O(!nh,"__referenceConstructor has already been defined"),nh=n}function iU(){return O(nh,"Reference.ts has not been loaded"),nh}function rU(n){return n.views.size===0}function h_(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Tw(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Tw(o,e,t,s));return r}}function DS(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zu(t,i?s:null),c=!1;a?c=!0:s instanceof Q?(a=c_(t,s),c=!1):(a=Q.EMPTY_NODE,c=!1);const l=Sd(new wi(a,c,!1),new wi(s,i,!1));return new XV(e,l)}return o}function oU(n,e,t,s,i,r){const o=DS(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),tU(o,t),nU(o,t)}function aU(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ti(n);if(i==="default")for(const[c,l]of n.views.entries())o=o.concat(ww(l,t,s)),vw(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(i);c&&(o=o.concat(ww(c,t,s)),vw(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ti(n)&&r.push(new(iU())(e._repo,e._path)),{removed:r,events:o}}function RS(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ri(n,e){let t=null;for(const s of n.views.values())t=t||eU(s,e);return t}function OS(n,e){if(e._queryParams.loadsAllData())return kd(n);{const s=e._queryIdentifier;return n.views.get(s)}}function PS(n,e){return OS(n,e)!=null}function Ti(n){return kd(n)!=null}function kd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sh;function cU(n){O(!sh,"__referenceConstructor has already been defined"),sh=n}function lU(){return O(sh,"Reference.ts has not been loaded"),sh}let uU=1;class Iw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=UV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d_(n,e,t,s,i){return kV(n.pendingWriteTree_,e,t,s,i),i?aa(n,new br(r_(),e,t)):[]}function hU(n,e,t,s){AV(n.pendingWriteTree_,e,t,s);const i=Ne.fromObject(t);return aa(n,new Mo(r_(),e,i))}function ti(n,e,t=!1){const s=NV(n.pendingWriteTree_,e);if(xV(n.pendingWriteTree_,e)){let r=new Ne(null);return s.snap!=null?r=r.set(ye(),!0):bt(s.children,o=>{r=r.set(new we(o),!0)}),aa(n,new Xu(s.path,r,t))}else return[]}function El(n,e,t){return aa(n,new br(o_(),e,t))}function dU(n,e,t){const s=Ne.fromObject(t);return aa(n,new Mo(o_(),e,s))}function fU(n,e){return aa(n,new xc(o_(),e))}function pU(n,e,t){const s=f_(n,t);if(s){const i=p_(s),r=i.path,o=i.queryId,a=zt(r,e),c=new xc(a_(o),a);return m_(n,r,c)}else return[]}function ih(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||PS(o,e))){const c=aU(o,e,t,s);rU(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Ti(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=_U(d);for(let p=0;p<f.length;++p){const m=f[p],g=m.query,y=VS(n,m);n.listenProvider_.startListening(Ya(g),Dc(n,g),y.hashFn,y.onComplete)}}}!h&&l.length>0&&!s&&(u?n.listenProvider_.stopListening(Ya(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(Nd(d));n.listenProvider_.stopListening(Ya(d),f)}))}yU(n,l)}return a}function MS(n,e,t,s){const i=f_(n,s);if(i!=null){const r=p_(i),o=r.path,a=r.queryId,c=zt(o,e),l=new br(a_(a),c,t);return m_(n,o,l)}else return[]}function mU(n,e,t,s){const i=f_(n,s);if(i){const r=p_(i),o=r.path,a=r.queryId,c=zt(o,e),l=Ne.fromObject(t),u=new Mo(a_(a),c,l);return m_(n,o,u)}else return[]}function Pp(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=zt(d,i);r=r||ri(f,p),o=o||Ti(f)});let a=n.syncPointTree_.get(i);a?(o=o||Ti(a),r=r||ri(a,ye())):(a=new xS,n.syncPointTree_=n.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=Q.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const m=ri(p,ye());m&&(r=r.updateImmediateChild(f,m))}));const l=PS(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Nd(e);O(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=vU();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Cd(n.pendingWriteTree_,i);let h=oU(a,e,t,u,r,c);if(!l&&!o&&!s){const d=OS(a,e);h=h.concat(wU(n,e,d))}return h}function Ad(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=zt(o,e),l=ri(a,c);if(l)return l});return ES(i,e,r,t,!0)}function gU(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const h=zt(l,t);s=s||ri(u,h)});let i=n.syncPointTree_.get(t);i?s=s||ri(i,ye()):(i=new xS,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new wi(s,!0,!1):null,a=Cd(n.pendingWriteTree_,e._path),c=DS(i,e,a,r?o.getNode():Q.EMPTY_NODE,r);return ZV(c)}function aa(n,e){return LS(e,n.syncPointTree_,null,Cd(n.pendingWriteTree_,ye()))}function LS(n,e,t,s){if(ce(n.path))return FS(n,e,t,s);{const i=e.get(ye());t==null&&i!=null&&(t=ri(i,ye()));let r=[];const o=ae(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=SS(s,o);r=r.concat(LS(a,c,l,u))}return i&&(r=r.concat(h_(i,n,s,t))),r}}function FS(n,e,t,s){const i=e.get(ye());t==null&&i!=null&&(t=ri(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=SS(s,o),u=n.operationForChild(o);u&&(r=r.concat(FS(u,a,c,l)))}),i&&(r=r.concat(h_(i,n,s,t))),r}function VS(n,e){const t=e.query,s=Dc(n,t);return{hashFn:()=>(JV(e)||Q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pU(n,t._path,s):fU(n,t._path);{const r=hF(i,t);return ih(n,t,null,r)}}}}function Dc(n,e){const t=Nd(e);return n.queryToTagMap.get(t)}function Nd(n){return n._path.toString()+"$"+n._queryIdentifier}function f_(n,e){return n.tagToQueryMap.get(e)}function p_(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new we(n.substr(0,e))}}function m_(n,e,t){const s=n.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=Cd(n.pendingWriteTree_,e);return h_(s,t,i,null)}function _U(n){return n.fold((e,t,s)=>{if(t&&Ti(t))return[kd(t)];{let i=[];return t&&(i=RS(t)),bt(s,(r,o)=>{i=i.concat(o)}),i}})}function Ya(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(lU())(n._repo,n._path):n}function yU(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Nd(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function vU(){return uU++}function wU(n,e,t){const s=e._path,i=Dc(n,e),r=VS(n,t),o=n.listenProvider_.startListening(Ya(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)O(!Ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ce(l)&&u&&Ti(u))return[kd(u).query];{let d=[];return u&&(d=d.concat(RS(u).map(f=>f.query))),bt(h,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Ya(u),Dc(n,u))}}return o}/**
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
 */class g_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new g_(t)}node(){return this.node_}}class __{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qe(this.path_,e);return new __(this.syncTree_,t)}node(){return Ad(this.syncTree_,this.path_)}}const TU=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},bw=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return IU(n[".sv"],e,t);if(typeof n[".sv"]=="object")return bU(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},IU=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},bU=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},US=function(n,e,t,s){return v_(e,new __(t,n),s)},y_=function(n,e,t){return v_(n,new g_(e),t)};function v_(n,e,t){const s=n.getPriority().val(),i=bw(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=bw(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new ft(a,$e(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ft(i))),o.forEachChild(xe,(a,c)=>{const l=v_(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class w_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function xd(n,e){let t=e instanceof we?e:new we(e),s=n,i=ae(t);for(;i!==null;){const r=cr(s.node.children,i)||{children:{},childCount:0};s=new w_(i,s,r),t=Ce(t),i=ae(t)}return s}function $r(n){return n.node.value}function T_(n,e){n.node.value=e,Mp(n)}function qS(n){return n.node.childCount>0}function EU(n){return $r(n)===void 0&&!qS(n)}function Dd(n,e){bt(n.node.children,(t,s)=>{e(new w_(t,n,s))})}function BS(n,e,t,s){t&&!s&&e(n),Dd(n,i=>{BS(i,e,!0,s)}),t&&s&&e(n)}function SU(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Sl(n){return new we(n.parent===null?n.name:Sl(n.parent)+"/"+n.name)}function Mp(n){n.parent!==null&&CU(n.parent,n.name,n)}function CU(n,e,t){const s=EU(t),i=gn(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Mp(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Mp(n))}/**
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
 */const kU=/[\[\].#$\/\u0000-\u001F\u007F]/,AU=/[\[\].#$\u0000-\u001F\u007F]/,Cf=10*1024*1024,Rd=function(n){return typeof n=="string"&&n.length!==0&&!kU.test(n)},WS=function(n){return typeof n=="string"&&n.length!==0&&!AU.test(n)},NU=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),WS(n)},Rc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Td(n)||n&&typeof n=="object"&&gn(n,".sv")},us=function(n,e,t,s){s&&e===void 0||Cl(on(n,"value"),e,t)},Cl=function(n,e,t){const s=t instanceof we?new GF(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Bi(s));if(typeof e=="function")throw new Error(n+"contains a function "+Bi(s)+" with contents = "+e.toString());if(Td(e))throw new Error(n+"contains "+e.toString()+" "+Bi(s));if(typeof e=="string"&&e.length>Cf/3&&Ch(e)>Cf)throw new Error(n+"contains a string greater than "+Cf+" utf8 bytes "+Bi(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(bt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Rd(o)))throw new Error(n+" contains an invalid key ("+o+") "+Bi(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zF(s,o),Cl(n,a,s),HF(s)}),i&&r)throw new Error(n+' contains ".value" child '+Bi(s)+" in addition to actual children.")}},xU=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Cc(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Rd(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jF);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&kn(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},$S=function(n,e,t,s){if(s&&e===void 0)return;const i=on(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];bt(e,(o,a)=>{const c=new we(o);if(Cl(i,a,qe(t,c)),Jg(c)===".priority"&&!Rc(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),xU(i,r)},I_=function(n,e,t){if(!(t&&e===void 0)){if(Td(e))throw new Error(on(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Rc(e))throw new Error(on(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},kl=function(n,e,t,s){if(!(s&&t===void 0)&&!Rd(t))throw new Error(on(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Oc=function(n,e,t,s){if(!(s&&t===void 0)&&!WS(t))throw new Error(on(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},DU=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Oc(n,e,t,s)},An=function(n,e){if(ae(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},jS=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!NU(t))throw new Error(on(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Od(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Zg(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function GS(n,e,t){Od(n,t),zS(n,s=>Zg(s,e))}function wn(n,e,t){Od(n,t),zS(n,s=>kn(s,e)||kn(e,s))}function zS(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(OU(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function OU(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();rr&&yt("event: "+t.toString()),ra(s)}}}/**
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
 */const HS="repo_interrupt",PU=25;class MU{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yu(),this.transactionQueueTree_=new w_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LU(n,e,t){if(n.stats_=Yg(n.repoInfo_),n.forceRestClient_||mF())n.server_=new Qu(n.repoInfo_,(s,i,r,o)=>{Ew(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Sw(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Cs(n.repoInfo_,e,(s,i,r,o)=>{Ew(n,s,i,r,o)},s=>{Sw(n,s)},s=>{FU(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=wF(n.repoInfo_,()=>new TV(n.stats_,n.server_)),n.infoData_=new gV,n.infoSyncTree_=new Iw({startListening:(s,i,r,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=El(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),b_(n,"connected",!1),n.serverSyncTree_=new Iw({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);wn(n.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function KS(n){const t=n.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Al(n){return TU({timestamp:KS(n)})}function Ew(n,e,t,s,i){n.dataUpdateCount++;const r=new we(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=vu(t,l=>$e(l));o=mU(n.serverSyncTree_,r,c,i)}else{const c=$e(t);o=MS(n.serverSyncTree_,r,c,i)}else if(s){const c=vu(t,l=>$e(l));o=dU(n.serverSyncTree_,r,c)}else{const c=$e(t);o=El(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Fo(n,r)),wn(n.eventQueue_,a,o)}function Sw(n,e){b_(n,"connected",e),e===!1&&qU(n)}function FU(n,e){bt(e,(t,s)=>{b_(n,t,s)})}function b_(n,e,t){const s=new we("/.info/"+e),i=$e(t);n.infoData_.updateSnapshot(s,i);const r=El(n.infoSyncTree_,s,i);wn(n.eventQueue_,s,r)}function Pd(n){return n.nextWriteId_++}function VU(n,e,t){const s=gU(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=$e(i).withIndex(e._queryParams.getIndex());Pp(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=El(n.serverSyncTree_,e._path,r);else{const a=Dc(n.serverSyncTree_,e);o=MS(n.serverSyncTree_,e._path,r,a)}return wn(n.eventQueue_,e._path,o),ih(n.serverSyncTree_,e,t,null,!0),r},i=>(ca(n,"get for query "+ct(e)+" failed: "+i),Promise.reject(new Error(i))))}function E_(n,e,t,s,i){ca(n,"set",{path:e.toString(),value:t,priority:s});const r=Al(n),o=$e(t,s),a=Ad(n.serverSyncTree_,e),c=y_(o,a,r),l=Pd(n),u=d_(n.serverSyncTree_,e,c,l,!0);Od(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||Ut("set at "+e+" failed: "+d);const m=ti(n.serverSyncTree_,l,!p);wn(n.eventQueue_,e,m),Ii(n,i,d,f)});const h=C_(n,e);Fo(n,h),wn(n.eventQueue_,h,[])}function UU(n,e,t,s){ca(n,"update",{path:e.toString(),value:t});let i=!0;const r=Al(n),o={};if(bt(t,(a,c)=>{i=!1,o[a]=US(qe(e,a),$e(c),n.serverSyncTree_,r)}),i)yt("update() called with empty data.  Don't do anything."),Ii(n,s,"ok",void 0);else{const a=Pd(n),c=hU(n.serverSyncTree_,e,o,a);Od(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const h=l==="ok";h||Ut("update at "+e+" failed: "+l);const d=ti(n.serverSyncTree_,a,!h),f=d.length>0?Fo(n,e):e;wn(n.eventQueue_,f,d),Ii(n,s,l,u)}),bt(t,l=>{const u=C_(n,qe(e,l));Fo(n,u)}),wn(n.eventQueue_,e,[])}}function qU(n){ca(n,"onDisconnectEvents");const e=Al(n),t=Yu();Ap(n.onDisconnect_,ye(),(i,r)=>{const o=US(i,r,n.serverSyncTree_,e);oa(t,i,o)});let s=[];Ap(t,ye(),(i,r)=>{s=s.concat(El(n.serverSyncTree_,i,r));const o=C_(n,i);Fo(n,o)}),n.onDisconnect_=Yu(),wn(n.eventQueue_,ye(),s)}function BU(n,e,t){n.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&kp(n.onDisconnect_,e),Ii(n,t,s,i)})}function Cw(n,e,t,s){const i=$e(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&oa(n.onDisconnect_,e,i),Ii(n,s,r,o)})}function WU(n,e,t,s,i){const r=$e(t,s);n.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&oa(n.onDisconnect_,e,r),Ii(n,i,o,a)})}function $U(n,e,t,s){if(yu(t)){yt("onDisconnect().update() called with empty data.  Don't do anything."),Ii(n,s,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,r)=>{i==="ok"&&bt(t,(o,a)=>{const c=$e(a);oa(n.onDisconnect_,qe(e,o),c)}),Ii(n,s,i,r)})}function jU(n,e,t){let s;ae(e._path)===".info"?s=Pp(n.infoSyncTree_,e,t):s=Pp(n.serverSyncTree_,e,t),GS(n.eventQueue_,e._path,s)}function Lp(n,e,t){let s;ae(e._path)===".info"?s=ih(n.infoSyncTree_,e,t):s=ih(n.serverSyncTree_,e,t),GS(n.eventQueue_,e._path,s)}function QS(n){n.persistentConnection_&&n.persistentConnection_.interrupt(HS)}function GU(n){n.persistentConnection_&&n.persistentConnection_.resume(HS)}function ca(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),yt(t,...e)}function Ii(n,e,t,s){e&&ra(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function zU(n,e,t,s,i,r){ca(n,"transaction on "+e);const o={path:e,update:t,onComplete:s,status:null,order:j0(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=S_(n,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Cl("transaction failed: Data returned ",c,o.path),o.status=0;const l=xd(n.transactionQueueTree_,e),u=$r(l)||[];u.push(o),T_(l,u);let h;typeof c=="object"&&c!==null&&gn(c,".priority")?(h=cr(c,".priority"),O(Rc(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Ad(n.serverSyncTree_,e)||Q.EMPTY_NODE).getPriority().val();const d=Al(n),f=$e(c,h),p=y_(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=Pd(n);const m=d_(n.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);wn(n.eventQueue_,e,m),Md(n,n.transactionQueueTree_)}}function S_(n,e,t){return Ad(n.serverSyncTree_,e,t)||Q.EMPTY_NODE}function Md(n,e=n.transactionQueueTree_){if(e||Ld(n,e),$r(e)){const t=XS(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&HU(n,Sl(e),t)}else qS(e)&&Dd(e,t=>{Md(n,t)})}function HU(n,e,t){const s=t.map(l=>l.currentWriteId),i=S_(n,e,s);let r=i;const o=i.hash();for(let l=0;l<t.length;l++){const u=t[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=zt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{ca(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(ti(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ld(n,xd(n.transactionQueueTree_,e)),Md(n,n.transactionQueueTree_),wn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)ra(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ut("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Fo(n,e)}},o)}function Fo(n,e){const t=YS(n,e),s=Sl(t),i=XS(n,t);return KU(n,i,s),s}function KU(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=zt(t,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(ti(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=PU)u=!0,h="maxretry",i=i.concat(ti(n.serverSyncTree_,c.currentWriteId,!0));else{const d=S_(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Cl("transaction failed: Data returned ",f,c.path);let p=$e(f);typeof f=="object"&&f!=null&&gn(f,".priority")||(p=p.updatePriority(d.getPriority()));const g=c.currentWriteId,y=Al(n),w=y_(p,d,y);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=w,c.currentWriteId=Pd(n),o.splice(o.indexOf(g),1),i=i.concat(d_(n.serverSyncTree_,c.path,w,c.currentWriteId,c.applyLocally)),i=i.concat(ti(n.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(ti(n.serverSyncTree_,c.currentWriteId,!0))}wn(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ld(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)ra(s[a]);Md(n,n.transactionQueueTree_)}function YS(n,e){let t,s=n.transactionQueueTree_;for(t=ae(e);t!==null&&$r(s)===void 0;)s=xd(s,t),e=Ce(e),t=ae(e);return s}function XS(n,e){const t=[];return JS(n,e,t),t.sort((s,i)=>s.order-i.order),t}function JS(n,e,t){const s=$r(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Dd(e,i=>{JS(n,i,t)})}function Ld(n,e){const t=$r(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,T_(e,t.length>0?t:void 0)}Dd(e,s=>{Ld(n,s)})}function C_(n,e){const t=Sl(YS(n,e)),s=xd(n.transactionQueueTree_,e);return SU(s,i=>{kf(n,i)}),kf(n,s),BS(s,i=>{kf(n,i)}),t}function kf(n,e){const t=$r(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(O(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ti(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?T_(e,void 0):t.length=r+1,wn(n.eventQueue_,Sl(e),i);for(let o=0;o<s.length;o++)ra(s[o])}}/**
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
 */function QU(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function YU(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ut(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fp=function(n,e){const t=XU(n),s=t.namespace;t.domain==="firebase.com"&&ls(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||oF();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new iS(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new we(t.pathString)}},XU=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=QU(n.substring(u,h)));const d=YU(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const kw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",JU=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=kw.charAt(t%64),t=Math.floor(t/64);O(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=kw.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class ZS{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class eC{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class k_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let ZU=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new en;return BU(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){An("OnDisconnect.remove",this._path);const e=new en;return Cw(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){An("OnDisconnect.set",this._path),us("OnDisconnect.set",e,this._path,!1);const t=new en;return Cw(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){An("OnDisconnect.setWithPriority",this._path),us("OnDisconnect.setWithPriority",e,this._path,!1),I_("OnDisconnect.setWithPriority",t,!1);const s=new en;return WU(this._repo,this._path,e,t,s.wrapCallback(()=>{})),s.promise}update(e){An("OnDisconnect.update",this._path),$S("OnDisconnect.update",e,this._path,!1);const t=new en;return $U(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class un{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:Jg(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=dw(this._queryParams),t=Kg(e);return t==="{}"?"default":t}get _queryObject(){return dw(this._queryParams)}isEqual(e){if(e=B(e),!(e instanceof un))return!1;const t=this._repo===e._repo,s=Zg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$F(this._path)}}function Fd(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Oi(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===rs){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==yi)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Rs)throw new Error(s);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===xe){if(e!=null&&!Rc(e)||t!=null&&!Rc(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(n.getIndex()instanceof n_||n.getIndex()===s_,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Vd(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class On extends un{constructor(e,t){super(e,t,new bd,!1)}get parent(){const e=fS(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Ud=class Vp{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new we(e),s=Sr(this.ref,e);return new Vp(this._node.getChild(t),s,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Vp(i,Sr(this.ref,s),xe)))}hasChild(e){const t=new we(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function tC(n,e){return n=B(n),n._checkNotDeleted("ref"),e!==void 0?Sr(n._root,e):n._root}function Aw(n,e){n=B(n),n._checkNotDeleted("refFromURL");const t=Fp(e,n._repo.repoInfo_.nodeAdmin);jS("refFromURL",t);const s=t.repoInfo;return!n._repo.repoInfo_.isCustomHost()&&s.host!==n._repo.repoInfo_.host&&ls("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+n._repo.repoInfo_.host+")"),tC(n,t.path.toString())}function Sr(n,e){return n=B(n),ae(n._path)===null?DU("child","path",e,!1):Oc("child","path",e,!1),new On(n._repo,qe(n._path,e))}function eq(n,e){n=B(n),An("push",n._path),us("push",e,n._path,!0);const t=KS(n._repo),s=JU(t),i=Sr(n,s),r=Sr(n,s);let o;return e!=null?o=A_(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function tq(n){return An("remove",n._path),A_(n,null)}function A_(n,e){n=B(n),An("set",n._path),us("set",e,n._path,!1);const t=new en;return E_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function nq(n,e){n=B(n),An("setPriority",n._path),I_("setPriority",e,!1);const t=new en;return E_(n._repo,qe(n._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function sq(n,e,t){if(An("setWithPriority",n._path),us("setWithPriority",e,n._path,!1),I_("setWithPriority",t,!1),n.key===".length"||n.key===".keys")throw"setWithPriority failed: "+n.key+" is a read-only object.";const s=new en;return E_(n._repo,n._path,e,t,s.wrapCallback(()=>{})),s.promise}function iq(n,e){$S("update",e,n._path,!1);const t=new en;return UU(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function rq(n){n=B(n);const e=new k_(()=>{}),t=new Nl(e);return VU(n._repo,n,t).then(s=>new Ud(s,new On(n._repo,n._path),n._queryParams.getIndex()))}class Nl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ZS("value",this,new Ud(e.snapshotNode,new On(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new eC(this,e,t):null}matches(e){return e instanceof Nl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class qd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new eC(this,e,t):null}createEvent(e,t){O(e.childName!=null,"Child events should have a childName.");const s=Sr(new On(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ZS(e.type,this,new Ud(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof qd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function xl(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=t,l=(u,h)=>{Lp(n._repo,n,a),c(u,h)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new k_(t,r||void 0),a=e==="value"?new Nl(o):new qd(e,o);return jU(n._repo,n,a),()=>Lp(n._repo,n,a)}function Up(n,e,t,s){return xl(n,"value",e,t,s)}function Nw(n,e,t,s){return xl(n,"child_added",e,t,s)}function xw(n,e,t,s){return xl(n,"child_changed",e,t,s)}function Dw(n,e,t,s){return xl(n,"child_moved",e,t,s)}function Rw(n,e,t,s){return xl(n,"child_removed",e,t,s)}function Ow(n,e,t){let s=null;const i=t?new k_(t):null;e==="value"?s=new Nl(i):e&&(s=new qd(e,i)),Lp(n._repo,n,s)}class Gn{}class nC extends Gn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){us("endAt",this._value,e._path,!0);const t=Cp(e._queryParams,this._value,this._key);if(Vd(t),Oi(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new un(e._repo,e._path,t,e._orderByCalled)}}function oq(n,e){return kl("endAt","key",e,!0),new nC(n,e)}class aq extends Gn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){us("endBefore",this._value,e._path,!1);const t=mV(e._queryParams,this._value,this._key);if(Vd(t),Oi(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new un(e._repo,e._path,t,e._orderByCalled)}}function cq(n,e){return kl("endBefore","key",e,!0),new aq(n,e)}class sC extends Gn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){us("startAt",this._value,e._path,!0);const t=Sp(e._queryParams,this._value,this._key);if(Vd(t),Oi(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new un(e._repo,e._path,t,e._orderByCalled)}}function lq(n=null,e){return kl("startAt","key",e,!0),new sC(n,e)}class uq extends Gn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){us("startAfter",this._value,e._path,!1);const t=pV(e._queryParams,this._value,this._key);if(Vd(t),Oi(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new un(e._repo,e._path,t,e._orderByCalled)}}function hq(n,e){return kl("startAfter","key",e,!0),new uq(n,e)}class dq extends Gn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new un(e._repo,e._path,dV(e._queryParams,this._limit),e._orderByCalled)}}function fq(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new dq(n)}class pq extends Gn{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new un(e._repo,e._path,fV(e._queryParams,this._limit),e._orderByCalled)}}function mq(n){if(typeof n!="number"||Math.floor(n)!==n||n<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new pq(n)}class gq extends Gn{constructor(e){super(),this._path=e}_apply(e){Fd(e,"orderByChild");const t=new we(this._path);if(ce(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new n_(t),i=Ed(e._queryParams,s);return Oi(i),new un(e._repo,e._path,i,!0)}}function _q(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Oc("orderByChild","path",n,!1),new gq(n)}class yq extends Gn{_apply(e){Fd(e,"orderByKey");const t=Ed(e._queryParams,rs);return Oi(t),new un(e._repo,e._path,t,!0)}}function vq(){return new yq}class wq extends Gn{_apply(e){Fd(e,"orderByPriority");const t=Ed(e._queryParams,xe);return Oi(t),new un(e._repo,e._path,t,!0)}}function Tq(){return new wq}class Iq extends Gn{_apply(e){Fd(e,"orderByValue");const t=Ed(e._queryParams,s_);return Oi(t),new un(e._repo,e._path,t,!0)}}function bq(){return new Iq}class Eq extends Gn{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(us("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new nC(this._value,this._key)._apply(new sC(this._value,this._key)._apply(e))}}function Sq(n,e){return kl("equalTo","key",e,!0),new Eq(n,e)}function Pn(n,...e){let t=B(n);for(const s of e)t=s._apply(t);return t}sU(On);cU(On);/**
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
 */const Cq="FIREBASE_DATABASE_EMULATOR_HOST",qp={};let kq=!1;function Aq(n,e,t,s){n.repoInfo_=new iS(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function iC(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),yt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fp(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[Cq]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Fp(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new fo(fo.OWNER):new _F(n.name,n.options,e);jS("Invalid Firebase Database URL",o),ce(o.path)||ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xq(a,n,u,new gF(n.name,t));return new Dq(h,n)}function Nq(n,e){const t=qp[e];(!t||t[n.key]!==n)&&ls(`Database ${e}(${n.repoInfo_}) has already been deleted.`),QS(n),delete t[n.key]}function xq(n,e,t,s){let i=qp[e.name];i||(i={},qp[e.name]=i);let r=i[n.toURLString()];return r&&ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new MU(n,kq,t,s),i[n.toURLString()]=r,r}let Dq=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nq(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ls("Cannot call "+e+" on a deleted database.")}};function rC(){Oo.IS_TRANSPORT_INITIALIZED&&Ut("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Rq(){rC(),ei.forceDisallow()}function Oq(){rC(),Sn.forceDisallow(),ei.forceAllow()}function Pq(n,e,t,s={}){n=B(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ls("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ls('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fo(fo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:oT(s.mockUserToken,n.app.options.projectId);r=new fo(o)}Aq(i,e,t,r)}function Mq(n){n=B(n),n._checkNotDeleted("goOffline"),QS(n._repo)}function Lq(n){n=B(n),n._checkNotDeleted("goOnline"),GU(n._repo)}function Fq(n,e){z0(n,e)}/**
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
 */function Vq(n){W0(Si),As(new _n("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return iC(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),xn(Qv,Yv,n),xn(Qv,Yv,"esm2017")}/**
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
 */const Uq={".sv":"timestamp"};function qq(){return Uq}function Bq(n){return{".sv":{increment:n}}}/**
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
 */let Wq=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function $q(n,e,t){var s;if(n=B(n),An("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(s=t==null?void 0:t.applyLocally)!==null&&s!==void 0?s:!0,r=new en,o=(c,l,u)=>{let h=null;c?r.reject(c):(h=new Ud(u,new On(n._repo,n._path),xe),r.resolve(new Wq(l,h)))},a=Up(n,()=>{});return zU(n._repo,n._path,e,o,a,i),r.promise}Cs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Cs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vq();const jq="@firebase/database-compat",Gq="0.3.3";/**
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
 */const zq=new jo("@firebase/database-compat"),oC=function(n){const e="FIREBASE WARNING: "+n;zq.warn(e)};/**
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
 */const Hq=function(n,e,t,s){if(!(s&&t===void 0)&&typeof t!="boolean")throw new Error(on(n,e)+"must be a boolean.")},Kq=function(n,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(on(n,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class Qq{constructor(e){this._delegate=e}cancel(e){X("OnDisconnect.cancel",0,1,arguments.length),mt("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),s=>e(s)),t}remove(e){X("OnDisconnect.remove",0,1,arguments.length),mt("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),s=>e(s)),t}set(e,t){X("OnDisconnect.set",1,2,arguments.length),mt("OnDisconnect.set","onComplete",t,!0);const s=this._delegate.set(e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){X("OnDisconnect.setWithPriority",2,3,arguments.length),mt("OnDisconnect.setWithPriority","onComplete",s,!0);const i=this._delegate.setWithPriority(e,t);return s&&i.then(()=>s(null),r=>s(r)),i}update(e,t){if(X("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,oC("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}mt("OnDisconnect.update","onComplete",t,!0);const s=this._delegate.update(e);return t&&s.then(()=>t(null),i=>t(i)),s}}/**
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
 */class Yq{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return X("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class oi{constructor(e,t){this._database=e,this._delegate=t}val(){return X("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return X("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return X("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return X("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return X("DataSnapshot.child",0,1,arguments.length),e=String(e),Oc("DataSnapshot.child","path",e,!1),new oi(this._database,this._delegate.child(e))}hasChild(e){return X("DataSnapshot.hasChild",1,1,arguments.length),Oc("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return X("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return X("DataSnapshot.forEach",1,1,arguments.length),mt("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new oi(this._database,t)))}hasChildren(){return X("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return X("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return X("DataSnapshot.ref",0,0,arguments.length),new pn(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class kt{constructor(e,t){this.database=e,this._delegate=t}on(e,t,s,i){var r;X("Query.on",2,4,arguments.length),mt("Query.on","callback",t,!1);const o=kt.getCancelAndContextArgs_("Query.on",s,i),a=(l,u)=>{t.call(o.context,new oi(this.database,l),u)};a.userCallback=t,a.context=o.context;const c=(r=o.cancel)===null||r===void 0?void 0:r.bind(o.context);switch(e){case"value":return Up(this._delegate,a,c),t;case"child_added":return Nw(this._delegate,a,c),t;case"child_removed":return Rw(this._delegate,a,c),t;case"child_changed":return xw(this._delegate,a,c),t;case"child_moved":return Dw(this._delegate,a,c),t;default:throw new Error(on("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,s){if(X("Query.off",0,3,arguments.length),Kq("Query.off",e,!0),mt("Query.off","callback",t,!0),sy("Query.off","context",s,!0),t){const i=()=>{};i.userCallback=t,i.context=s,Ow(this._delegate,e,i)}else Ow(this._delegate,e)}get(){return rq(this._delegate).then(e=>new oi(this.database,e))}once(e,t,s,i){X("Query.once",1,4,arguments.length),mt("Query.once","callback",t,!0);const r=kt.getCancelAndContextArgs_("Query.once",s,i),o=new en,a=(l,u)=>{const h=new oi(this.database,l);t&&t.call(r.context,h,u),o.resolve(h)};a.userCallback=t,a.context=r.context;const c=l=>{r.cancel&&r.cancel.call(r.context,l),o.reject(l)};switch(e){case"value":Up(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":Nw(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":Rw(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":xw(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":Dw(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(on("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return X("Query.limitToFirst",1,1,arguments.length),new kt(this.database,Pn(this._delegate,fq(e)))}limitToLast(e){return X("Query.limitToLast",1,1,arguments.length),new kt(this.database,Pn(this._delegate,mq(e)))}orderByChild(e){return X("Query.orderByChild",1,1,arguments.length),new kt(this.database,Pn(this._delegate,_q(e)))}orderByKey(){return X("Query.orderByKey",0,0,arguments.length),new kt(this.database,Pn(this._delegate,vq()))}orderByPriority(){return X("Query.orderByPriority",0,0,arguments.length),new kt(this.database,Pn(this._delegate,Tq()))}orderByValue(){return X("Query.orderByValue",0,0,arguments.length),new kt(this.database,Pn(this._delegate,bq()))}startAt(e=null,t){return X("Query.startAt",0,2,arguments.length),new kt(this.database,Pn(this._delegate,lq(e,t)))}startAfter(e=null,t){return X("Query.startAfter",0,2,arguments.length),new kt(this.database,Pn(this._delegate,hq(e,t)))}endAt(e=null,t){return X("Query.endAt",0,2,arguments.length),new kt(this.database,Pn(this._delegate,oq(e,t)))}endBefore(e=null,t){return X("Query.endBefore",0,2,arguments.length),new kt(this.database,Pn(this._delegate,cq(e,t)))}equalTo(e,t){return X("Query.equalTo",1,2,arguments.length),new kt(this.database,Pn(this._delegate,Sq(e,t)))}toString(){return X("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return X("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(X("Query.isEqual",1,1,arguments.length),!(e instanceof kt)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,s){const i={cancel:void 0,context:void 0};if(t&&s)i.cancel=t,mt(e,"cancel",i.cancel,!0),i.context=s,sy(e,"context",i.context,!0);else if(t)if(typeof t=="object"&&t!==null)i.context=t;else if(typeof t=="function")i.cancel=t;else throw new Error(on(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new pn(this.database,new On(this._delegate._repo,this._delegate._path))}}class pn extends kt{constructor(e,t){super(e,new un(t._repo,t._path,new bd,!1)),this.database=e,this._delegate=t}getKey(){return X("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return X("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new pn(this.database,Sr(this._delegate,e))}getParent(){X("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new pn(this.database,e):null}getRoot(){return X("Reference.root",0,0,arguments.length),new pn(this.database,this._delegate.root)}set(e,t){X("Reference.set",1,2,arguments.length),mt("Reference.set","onComplete",t,!0);const s=A_(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}update(e,t){if(X("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let r=0;r<e.length;++r)i[""+r]=e[r];e=i,oC("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}An("Reference.update",this._delegate._path),mt("Reference.update","onComplete",t,!0);const s=iq(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}setWithPriority(e,t,s){X("Reference.setWithPriority",2,3,arguments.length),mt("Reference.setWithPriority","onComplete",s,!0);const i=sq(this._delegate,e,t);return s&&i.then(()=>s(null),r=>s(r)),i}remove(e){X("Reference.remove",0,1,arguments.length),mt("Reference.remove","onComplete",e,!0);const t=tq(this._delegate);return e&&t.then(()=>e(null),s=>e(s)),t}transaction(e,t,s){X("Reference.transaction",1,3,arguments.length),mt("Reference.transaction","transactionUpdate",e,!1),mt("Reference.transaction","onComplete",t,!0),Hq("Reference.transaction","applyLocally",s,!0);const i=$q(this._delegate,e,{applyLocally:s}).then(r=>new Yq(r.committed,new oi(this.database,r.snapshot)));return t&&i.then(r=>t(null,r.committed,r.snapshot),r=>t(r,!1,null)),i}setPriority(e,t){X("Reference.setPriority",1,2,arguments.length),mt("Reference.setPriority","onComplete",t,!0);const s=nq(this._delegate,e);return t&&s.then(()=>t(null),i=>t(i)),s}push(e,t){X("Reference.push",0,2,arguments.length),mt("Reference.push","onComplete",t,!0);const s=eq(this._delegate,e),i=s.then(o=>new pn(this.database,o));t&&i.then(()=>t(null),o=>t(o));const r=new pn(this.database,s);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return An("Reference.onDisconnect",this._delegate._path),new Qq(new ZU(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Pc{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Rq,forceLongPolling:Oq}}useEmulator(e,t,s={}){Pq(this._delegate,e,t,s)}ref(e){if(X("database.ref",0,1,arguments.length),e instanceof pn){const t=Aw(this._delegate,e.toString());return new pn(this,t)}else{const t=tC(this._delegate,e);return new pn(this,t)}}refFromURL(e){X("database.refFromURL",1,1,arguments.length);const s=Aw(this._delegate,e);return new pn(this,s)}goOffline(){return X("database.goOffline",0,0,arguments.length),Mq(this._delegate)}goOnline(){return X("database.goOnline",0,0,arguments.length),Lq(this._delegate)}}Pc.ServerValue={TIMESTAMP:qq(),increment:n=>Bq(n)};/**
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
 */function Xq({app:n,url:e,version:t,customAuthImpl:s,namespace:i,nodeAdmin:r=!1}){W0(t);const o=new dT("auth-internal",new fT("database-standalone"));return o.setComponent(new _n("auth-internal",()=>s,"PRIVATE")),{instance:new Pc(iC(n,o,void 0,e,r),n),namespace:i}}var Jq=Object.freeze({__proto__:null,initStandalone:Xq});/**
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
 */const Zq=Pc.ServerValue;function eB(n){n.INTERNAL.registerComponent(new _n("database-compat",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new Pc(i,s)},"PUBLIC").setServiceProps({Reference:pn,Query:kt,Database:Pc,DataSnapshot:oi,enableLogging:Fq,INTERNAL:Jq,ServerValue:Zq}).setMultipleInstances(!0)),n.registerVersion(jq,Gq)}eB(be);const aC="14.7.77",Pw=(n,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:n}),Mw=(n,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:n}),Bp=(n,e)=>({startTime:e,type:"setValue",value:n}),cC=(n,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:n}),lC=(n,e,{startTime:t,target:s,timeConstant:i})=>s+(e-s)*Math.exp((t-n)/i),ro=n=>n.type==="exponentialRampToValue",rh=n=>n.type==="linearRampToValue",Qs=n=>ro(n)||rh(n),N_=n=>n.type==="setValue",_s=n=>n.type==="setValueCurve",oh=(n,e,t,s)=>{const i=n[e];return i===void 0?s:Qs(i)||N_(i)?i.value:_s(i)?i.values[i.values.length-1]:lC(t,oh(n,e-1,i.startTime,s),i)},Lw=(n,e,t,s,i)=>t===void 0?[s.insertTime,i]:Qs(t)?[t.endTime,t.value]:N_(t)?[t.startTime,t.value]:_s(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,oh(n,e-1,t.startTime,i)],Wp=n=>n.type==="cancelAndHold",$p=n=>n.type==="cancelScheduledValues",Ks=n=>Wp(n)||$p(n)?n.cancelTime:ro(n)||rh(n)?n.endTime:n.startTime,Fw=(n,e,t,{endTime:s,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((n-e)/(s-e)):0,Vw=(n,e,t,{endTime:s,value:i})=>t+(n-e)/(s-e)*(i-t),tB=(n,e)=>{const t=Math.floor(e),s=Math.ceil(e);return t===s?n[t]:(1-(e-t))*n[t]+(1-(s-e))*n[s]},nB=(n,{duration:e,startTime:t,values:s})=>{const i=(n-t)/e*(s.length-1);return tB(s,i)},Zl=n=>n.type==="setTarget";class sB{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=Ks(e);if(Wp(e)||$p(e)){const s=this._automationEvents.findIndex(r=>$p(e)&&_s(r)?r.startTime+r.duration>=t:Ks(r)>=t),i=this._automationEvents[s];if(s!==-1&&(this._automationEvents=this._automationEvents.slice(0,s)),Wp(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&Qs(i)){if(Zl(r))throw new Error("The internal list is malformed.");const o=_s(r)?r.startTime+r.duration:Ks(r),a=_s(r)?r.values[r.values.length-1]:r.value,c=ro(i)?Fw(t,o,a,i):Vw(t,o,a,i),l=ro(i)?Pw(c,t,this._currenTime):Mw(c,t,this._currenTime);this._automationEvents.push(l)}r!==void 0&&Zl(r)&&this._automationEvents.push(Bp(this.getValue(t),t)),r!==void 0&&_s(r)&&r.startTime+r.duration>t&&(this._automationEvents[this._automationEvents.length-1]=cC(new Float32Array([6,7]),r.startTime,t-r.startTime))}}else{const s=this._automationEvents.findIndex(o=>Ks(o)>t),i=s===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[s-1];if(i!==void 0&&_s(i)&&Ks(i)+i.duration>t)return!1;const r=ro(e)?Pw(e.value,e.endTime,this._currenTime):rh(e)?Mw(e.value,t,this._currenTime):e;if(s===-1)this._automationEvents.push(r);else{if(_s(e)&&t+e.duration>Ks(this._automationEvents[s]))return!1;this._automationEvents.splice(s,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(s=>Ks(s)>e);if(t>1){const s=this._automationEvents.slice(t-1),i=s[0];Zl(i)&&s.unshift(Bp(oh(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=s}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>Ks(o)>e),s=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&Zl(r)&&(s===void 0||!Qs(s)||s.insertTime>e))return lC(e,oh(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&N_(r)&&(s===void 0||!Qs(s)))return r.value;if(r!==void 0&&_s(r)&&(s===void 0||!Qs(s)||r.startTime+r.duration>e))return e<r.startTime+r.duration?nB(e,r):r.values[r.values.length-1];if(r!==void 0&&Qs(r)&&(s===void 0||!Qs(s)))return r.value;if(s!==void 0&&ro(s)){const[o,a]=Lw(this._automationEvents,i,r,s,this._defaultValue);return Fw(e,o,a,s)}if(s!==void 0&&rh(s)){const[o,a]=Lw(this._automationEvents,i,r,s,this._defaultValue);return Vw(e,o,a,s)}return this._defaultValue}}const iB=n=>({cancelTime:n,type:"cancelAndHold"}),rB=n=>({cancelTime:n,type:"cancelScheduledValues"}),oB=(n,e)=>({endTime:e,type:"exponentialRampToValue",value:n}),aB=(n,e)=>({endTime:e,type:"linearRampToValue",value:n}),cB=(n,e,t)=>({startTime:e,target:n,timeConstant:t,type:"setTarget"}),lB=()=>new DOMException("","AbortError"),uB=n=>(e,t,[s,i,r],o)=>{n(e[i],[t,s,r],a=>a[0]===t&&a[1]===s,o)},hB=n=>(e,t,s)=>{const i=[];for(let r=0;r<s.numberOfInputs;r+=1)i.push(new Set);n.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},dB=n=>(e,t)=>{n.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Vo=new WeakSet,uC=new WeakMap,x_=new WeakMap,hC=new WeakMap,D_=new WeakMap,Bd=new WeakMap,dC=new WeakMap,jp=new WeakMap,Gp=new WeakMap,zp=new WeakMap,fC={construct(){return fC}},fB=n=>{try{const e=new Proxy(n,fC);new e}catch{return!1}return!0},Uw=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,qw=(n,e)=>{const t=[];let s=n.replace(/^[\s]+/,""),i=s.match(Uw);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),s=s.slice(i[0].length).replace(/^[\s]+/,""),i=s.match(Uw)}return[t.join(";"),s]},Bw=n=>{if(n!==void 0&&!Array.isArray(n))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Ww=n=>{if(!fB(n))throw new TypeError("The given value for processorCtor should be a constructor.");if(n.prototype===null||typeof n.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},pB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>{let f=0;return(p,m,g={credentials:"omit"})=>{const y=u.get(p);if(y!==void 0&&y.has(m))return Promise.resolve();const w=l.get(p);if(w!==void 0){const _=w.get(m);if(_!==void 0)return _}const S=r(p),C=S.audioWorklet===void 0?i(m).then(([_,v])=>{const[I,b]=qw(_,v),P=`${I};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${b}
})})(window,'_AWGS')`;return t(P)}).then(()=>{const _=d._AWGS.pop();if(_===void 0)throw new SyntaxError;s(S.currentTime,S.sampleRate,()=>_(class{},void 0,(v,I)=>{if(v.trim()==="")throw e();const b=Gp.get(S);if(b!==void 0){if(b.has(v))throw e();Ww(I),Bw(I.parameterDescriptors),b.set(v,I)}else Ww(I),Bw(I.parameterDescriptors),Gp.set(S,new Map([[v,I]]))},S.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(n(h,h))]).then(([[_,v],I])=>{const b=f+1;f=b;const[P,x]=qw(_,v),V=`${P};((AudioWorkletProcessor,registerProcessor)=>{${x}
})(${I?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${I?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${I?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${b}',class extends AudioWorkletProcessor{process(){return !1}})`,J=new Blob([V],{type:"application/javascript; charset=utf-8"}),$=URL.createObjectURL(J);return S.audioWorklet.addModule($,g).then(()=>{if(a(S))return S;const z=o(S);return z.audioWorklet.addModule($,g).then(()=>z)}).then(z=>{if(c===null)throw new SyntaxError;try{new c(z,`__sac${b}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL($))});return w===void 0?l.set(p,new Map([[m,C]])):w.set(m,C),C.then(()=>{const _=u.get(p);_===void 0?u.set(p,new Set([m])):_.add(m)}).finally(()=>{const _=l.get(p);_!==void 0&&_.delete(m)}),C}},$n=(n,e)=>{const t=n.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Wd=(n,e)=>{const t=Array.from(n).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[s]=t;return n.delete(s),s},pC=(n,e,t,s)=>{const i=$n(n,e),r=Wd(i,o=>o[0]===t&&o[1]===s);return i.size===0&&n.delete(e),r},Dl=n=>$n(dC,n),Uo=n=>{if(Vo.has(n))throw new Error("The AudioNode is already stored.");Vo.add(n),Dl(n).forEach(e=>e(!0))},mC=n=>"port"in n,Rl=n=>{if(!Vo.has(n))throw new Error("The AudioNode is not stored.");Vo.delete(n),Dl(n).forEach(e=>e(!1))},Hp=(n,e)=>{!mC(n)&&e.every(t=>t.size===0)&&Rl(n)},mB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(p,m,g,y,w)=>{const{activeInputs:S,passiveInputs:C}=r(m),{outputs:_}=r(p),v=a(p),I=b=>{const P=c(m),x=c(p);if(b){const D=pC(C,p,g,y);n(S,p,D,!1),!w&&!h(p)&&t(x,P,g,y),d(m)&&Uo(m)}else{const D=s(S,p,g,y);e(C,y,D,!1),!w&&!h(p)&&i(x,P,g,y);const k=o(m);if(k===0)u(m)&&Hp(m,S);else{const W=f.get(m);W!==void 0&&clearTimeout(W),f.set(m,setTimeout(()=>{u(m)&&Hp(m,S)},k*1e3))}}};return l(_,[m,g,y],b=>b[0]===m&&b[1]===g&&b[2]===y,!0)?(v.add(I),u(p)?n(S,p,[g,y,I],!0):e(C,y,[p,g,I],!0),!0):!1}},gB=n=>(e,t,[s,i,r],o)=>{const a=e.get(s);a===void 0?e.set(s,new Set([[i,t,r]])):n(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},_B=n=>(e,t)=>{const s=n(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(s).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(s),s.disconnect()};t.addEventListener("ended",i)},yB=n=>(e,t)=>{n(e).add(t)},vB={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},wB=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...vB,...c},h=s(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Bt=(n,e)=>n.context===e,TB=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Bt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ah=n=>{try{n.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},fs=()=>new DOMException("","IndexSizeError"),R_=n=>{n.getChannelData=(e=>t=>{try{return e.call(n,t)}catch(s){throw s.code===12?fs():s}})(n.getChannelData)},IB={numberOfChannels:1},bB=(n,e,t,s,i,r,o,a)=>{let c=null;return class gC{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...IB,...u};c===null&&(c=new i(1,1,44100));const p=s!==null&&e(r,r)?new s({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),R_(p)):e(ah,()=>ah(p))||a(p),n.add(p),p}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===gC.prototype||n.has(u)}}},Zt=-34028234663852886e22,jt=-Zt,ks=n=>Vo.has(n),EB={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},SB=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...EB,...u},f=i(h,d),p=o(h),m=p?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,p,f.playbackRate,jt,Zt)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw s();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Uo(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),ks(this)&&Rl(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},CB=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Bt(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await n(u,l.playbackRate,h.playbackRate):await s(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},kB=n=>"playbackRate"in n,AB=n=>"frequency"in n&&"gain"in n,NB=n=>"offset"in n,xB=n=>!("frequency"in n)&&"gain"in n,DB=n=>"detune"in n&&"frequency"in n,RB=n=>"pan"in n,Ht=n=>$n(uC,n),Ol=n=>$n(hC,n),Kp=(n,e)=>{const{activeInputs:t}=Ht(n);t.forEach(i=>i.forEach(([r])=>{e.includes(n)||Kp(r,[...e,n])}));const s=kB(n)?[n.playbackRate]:mC(n)?Array.from(n.parameters.values()):AB(n)?[n.Q,n.detune,n.frequency,n.gain]:NB(n)?[n.offset]:xB(n)?[n.gain]:DB(n)?[n.detune,n.frequency]:RB(n)?[n.pan]:[];for(const i of s){const r=Ol(i);r!==void 0&&r.activeInputs.forEach(([o])=>Kp(o,e))}ks(n)&&Rl(n)},_C=n=>{Kp(n.destination,[])},OB=n=>n===void 0||typeof n=="number"||typeof n=="string"&&(n==="balanced"||n==="interactive"||n==="playback"),PB=(n,e,t,s,i,r,o,a,c)=>class extends n{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(h===null)throw s();if(!OB(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",p)};h.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),_C(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},MB=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),p=d?e(a):null;super(l,!1,f,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},LB=n=>{const e=new WeakMap,t=async(s,i)=>{const r=i.destination;return e.set(i,r),await n(s,i,r),r};return{render(s,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(s,i)}}},FB=(n,e,t,s,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const _=new Float32Array(1),v=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),I=o(l);let b=!1,P=[0,0,-1,0,1,0],x=[0,0,0];const D=()=>{if(b)return;b=!0;const J=s(l,256,9,0);J.onaudioprocess=({inputBuffer:$})=>{const z=[r($,_,0),r($,_,1),r($,_,2),r($,_,3),r($,_,4),r($,_,5)];z.some((Y,oe)=>Y!==P[oe])&&(u.setOrientation(...z),P=z);const le=[r($,_,6),r($,_,7),r($,_,8)];le.some((Y,oe)=>Y!==x[oe])&&(u.setPosition(...le),x=le)},v.connect(J)},k=J=>$=>{$!==P[J]&&(P[J]=$,u.setOrientation(...P))},W=J=>$=>{$!==x[J]&&(x[J]=$,u.setPosition(...x))},V=(J,$,z)=>{const le=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:$});le.connect(v,0,J),le.start(),Object.defineProperty(le.offset,"defaultValue",{get(){return $}});const Y=n({context:c},I,le.offset,jt,Zt);return a(Y,"value",oe=>()=>oe.call(Y),oe=>te=>{try{oe.call(Y,te)}catch(Ie){if(Ie.code!==9)throw Ie}D(),I&&z(te)}),Y.cancelAndHoldAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.cancelAndHoldAtTime),Y.cancelScheduledValues=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.cancelScheduledValues),Y.exponentialRampToValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.exponentialRampToValueAtTime),Y.linearRampToValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.linearRampToValueAtTime),Y.setTargetAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setTargetAtTime),Y.setValueAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setValueAtTime),Y.setValueCurveAtTime=(oe=>I?()=>{throw i()}:(...te)=>{const Ie=oe.apply(Y,te);return D(),Ie})(Y.setValueCurveAtTime),Y};return{forwardX:V(0,0,k(0)),forwardY:V(1,0,k(1)),forwardZ:V(2,-1,k(2)),positionX:V(6,0,W(0)),positionY:V(7,0,W(1)),positionZ:V(8,0,W(2)),upX:V(3,0,k(3)),upY:V(4,1,k(4)),upZ:V(5,0,k(5))}},{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:g,positionZ:y,upX:w,upY:S,upZ:C}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return g},get positionZ(){return y},get upX(){return w},get upY(){return S},get upZ(){return C}}},ch=n=>"context"in n,Pl=n=>ch(n[0]),jr=(n,e,t,s)=>{for(const i of n)if(t(i)){if(s)return!1;throw Error("The set contains at least one similar element.")}return n.add(e),!0},$w=(n,e,[t,s],i)=>{jr(n,[e,t,s],r=>r[0]===e&&r[1]===t,i)},jw=(n,[e,t,s],i)=>{const r=n.get(e);r===void 0?n.set(e,new Set([[t,s]])):jr(r,[t,s],o=>o[0]===t,i)},la=n=>"inputs"in n,lh=(n,e,t,s)=>{if(la(e)){const i=e.inputs[s];return n.connect(i,t,0),[i,t,0]}return n.connect(e,t,s),[e,t,s]},yC=(n,e,t)=>{for(const s of n)if(s[0]===e&&s[1]===t)return n.delete(s),s;return null},VB=(n,e,t)=>Wd(n,s=>s[0]===e&&s[1]===t),vC=(n,e)=>{if(!Dl(n).delete(e))throw new Error("Missing the expected event listener.")},wC=(n,e,t)=>{const s=$n(n,e),i=Wd(s,r=>r[0]===t);return s.size===0&&n.delete(e),i},uh=(n,e,t,s)=>{la(e)?n.disconnect(e.inputs[s],t,0):n.disconnect(e,t,s)},Pe=n=>$n(x_,n),Mc=n=>$n(D_,n),Cr=n=>jp.has(n),pu=n=>!Vo.has(n),Gw=(n,e)=>new Promise(t=>{if(e!==null)t(!0);else{const s=n.createScriptProcessor(256,1,1),i=n.createGain(),r=n.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=n.createBufferSource();a.buffer=r,a.loop=!0,a.connect(s).connect(n.destination),a.connect(i),a.disconnect(i),s.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),s.onaudioprocess=null,a.disconnect(s),s.disconnect(n.destination)},a.start()}}),Af=(n,e)=>{const t=new Map;for(const s of n)for(const i of s){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((s,i)=>e(i,s))},hh=n=>"context"in n,UB=n=>{const e=new Map;n.connect=(t=>(s,i=0,r=0)=>{const o=hh(s)?t(s,i,r):t(s,i),a=e.get(s);return a===void 0?e.set(s,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(n.connect.bind(n)),n.disconnect=(t=>(s,i,r)=>{if(t.apply(n),s===void 0)e.clear();else if(typeof s=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==s);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(s))if(i===void 0)e.delete(s);else{const o=e.get(s);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(s):e.set(s,a)}}for(const[o,a]of e)a.forEach(c=>{hh(o)?n.connect(o,c.output,c.input):n.connect(o,c.output)})})(n.disconnect)},qB=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Ol(e),{outputs:o}=Ht(n),a=Dl(n),c=l=>{const u=Pe(n),h=Mc(e);if(l){const d=wC(r,n,t);$w(i,n,d,!1),!s&&!Cr(n)&&u.connect(h,t)}else{const d=VB(i,n,t);jw(r,d,!1),!s&&!Cr(n)&&u.disconnect(h,t)}};return jr(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),ks(n)?$w(i,n,[t,c],!0):jw(r,[n,t,c],!0),!0):!1},BB=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Ht(e),o=yC(i[s],n,t);return o===null?[pC(r,n,t,s)[2],!1]:[o[2],!0]},WB=(n,e,t)=>{const{activeInputs:s,passiveInputs:i}=Ol(e),r=yC(s,n,t);return r===null?[wC(i,n,t)[1],!1]:[r[2],!0]},O_=(n,e,t,s,i)=>{const[r,o]=BB(n,t,s,i);if(r!==null&&(vC(n,r),o&&!e&&!Cr(n)&&uh(Pe(n),Pe(t),s,i)),ks(t)){const{activeInputs:a}=Ht(t);Hp(t,a)}},P_=(n,e,t,s)=>{const[i,r]=WB(n,t,s);i!==null&&(vC(n,i),r&&!e&&!Cr(n)&&Pe(n).disconnect(Mc(t),s))},$B=(n,e)=>{const t=Ht(n),s=[];for(const i of t.outputs)Pl(i)?O_(n,e,...i):P_(n,e,...i),s.push(i[0]);return t.outputs.clear(),s},jB=(n,e,t)=>{const s=Ht(n),i=[];for(const r of s.outputs)r[1]===t&&(Pl(r)?O_(n,e,...r):P_(n,e,...r),i.push(r[0]),s.outputs.delete(r));return i},GB=(n,e,t,s,i)=>{const r=Ht(n);return Array.from(r.outputs).filter(o=>o[0]===t&&(s===void 0||o[1]===s)&&(i===void 0||o[2]===i)).map(o=>(Pl(o)?O_(n,e,...o):P_(n,e,...o),r.outputs.delete(o),o[0]))},zB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m)=>class extends l{constructor(y,w,S,C){super(S),this._context=y,this._nativeAudioNode=S;const _=u(y);h(_)&&t(Gw,()=>Gw(_,m))!==!0&&UB(S),x_.set(this,S),dC.set(this,new Set),y.state!=="closed"&&w&&Uo(this),n(this,C,S)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(y){this._nativeAudioNode.channelCount=y}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(y){this._nativeAudioNode.channelCountMode=y}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(y){this._nativeAudioNode.channelInterpretation=y}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(y,w=0,S=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw i();const C=u(this._context),_=p(C);if(d(y)||f(y))throw r();if(ch(y)){const b=Pe(y);try{const x=lh(this._nativeAudioNode,b,w,S),D=pu(this);(_||D)&&this._nativeAudioNode.disconnect(...x),this.context.state!=="closed"&&!D&&pu(y)&&Uo(y)}catch(x){throw x.code===12?r():x}if(e(this,y,w,S,_)){const x=c([this],y);Af(x,s(_))}return y}const v=Mc(y);if(v.name==="playbackRate"&&v.maxValue===1024)throw o();try{this._nativeAudioNode.connect(v,w),(_||pu(this))&&this._nativeAudioNode.disconnect(v,w)}catch(b){throw b.code===12?r():b}if(qB(this,y,w,_)){const b=c([this],y);Af(b,s(_))}}disconnect(y,w,S){let C;const _=u(this._context),v=p(_);if(y===void 0)C=$B(this,v);else if(typeof y=="number"){if(y<0||y>=this.numberOfOutputs)throw i();C=jB(this,v,y)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||ch(y)&&S!==void 0&&(S<0||S>=y.numberOfInputs))throw i();if(C=GB(this,v,y,w,S),C.length===0)throw r()}for(const I of C){const b=c([this],I);Af(b,a)}}},HB=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>(f,p,m,g=null,y=null)=>{const w=new sB(m.defaultValue),S=p?s(w):null,C={get defaultValue(){return m.defaultValue},get maxValue(){return g===null?m.maxValue:g},get minValue(){return y===null?m.minValue:y},get value(){return m.value},set value(_){m.value=_,C.setValueAtTime(_,f.context.currentTime)},cancelAndHoldAtTime(_){if(typeof m.cancelAndHoldAtTime=="function")S===null&&w.flush(f.context.currentTime),w.add(i(_)),m.cancelAndHoldAtTime(_);else{const v=Array.from(w).pop();S===null&&w.flush(f.context.currentTime),w.add(i(_));const I=Array.from(w).pop();m.cancelScheduledValues(_),v!==I&&I!==void 0&&(I.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(I.value,I.endTime):I.type==="linearRampToValue"?m.linearRampToValueAtTime(I.value,I.endTime):I.type==="setValue"?m.setValueAtTime(I.value,I.startTime):I.type==="setValueCurve"&&m.setValueCurveAtTime(I.values,I.startTime,I.duration))}return C},cancelScheduledValues(_){return S===null&&w.flush(f.context.currentTime),w.add(r(_)),m.cancelScheduledValues(_),C},exponentialRampToValueAtTime(_,v){if(_===0)throw new RangeError;if(!Number.isFinite(v)||v<0)throw new RangeError;return S===null&&w.flush(f.context.currentTime),w.add(o(_,v)),m.exponentialRampToValueAtTime(_,v),C},linearRampToValueAtTime(_,v){return S===null&&w.flush(f.context.currentTime),w.add(a(_,v)),m.linearRampToValueAtTime(_,v),C},setTargetAtTime(_,v,I){return S===null&&w.flush(f.context.currentTime),w.add(c(_,v,I)),m.setTargetAtTime(_,v,I),C},setValueAtTime(_,v){return S===null&&w.flush(f.context.currentTime),w.add(l(_,v)),m.setValueAtTime(_,v),C},setValueCurveAtTime(_,v,I){const b=_ instanceof Float32Array?_:new Float32Array(_);if(h!==null&&h.name==="webkitAudioContext"){const P=v+I,x=f.context.sampleRate,D=Math.ceil(v*x),k=Math.floor(P*x),W=k-D,V=new Float32Array(W);for(let $=0;$<W;$+=1){const z=(b.length-1)/I*((D+$)/x-v),le=Math.floor(z),Y=Math.ceil(z);V[$]=le===Y?b[le]:(1-(z-le))*b[le]+(1-(Y-z))*b[Y]}S===null&&w.flush(f.context.currentTime),w.add(u(V,v,I)),m.setValueCurveAtTime(V,v,I);const J=k/x;J<P&&d(C,V[V.length-1],J),d(C,b[b.length-1],P)}else S===null&&w.flush(f.context.currentTime),w.add(u(b,v,I)),m.setValueCurveAtTime(b,v,I);return C}};return t.set(C,m),e.set(C,f),n(C,S),C},KB=n=>({replay(e){for(const t of n)if(t.type==="exponentialRampToValue"){const{endTime:s,value:i}=t;e.exponentialRampToValueAtTime(i,s)}else if(t.type==="linearRampToValue"){const{endTime:s,value:i}=t;e.linearRampToValueAtTime(i,s)}else if(t.type==="setTarget"){const{startTime:s,target:i,timeConstant:r}=t;e.setTargetAtTime(i,s,r)}else if(t.type==="setValue"){const{startTime:s,value:i}=t;e.setValueAtTime(i,s)}else if(t.type==="setValueCurve"){const{duration:s,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,s)}else throw new Error("Can't apply an unknown automation.")}});class TC{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((s,i)=>e.call(t,s,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const QB={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},YB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(m,g,y){var w;const S=a(m),C=c(S),_=u({...QB,...y});d(_);const v=Gp.get(S),I=v==null?void 0:v.get(g),b=C||S.state!=="closed"?S:(w=o(S))!==null&&w!==void 0?w:S,P=i(b,C?null:m.baseLatency,l,g,I,_),x=C?s(g,_,I):null;super(m,!0,P,x);const D=[];P.parameters.forEach((W,V)=>{const J=t(this,C,W);D.push([V,J])}),this._nativeAudioWorkletNode=P,this._onprocessorerror=null,this._parameters=new TC(D),C&&n(S,this);const{activeInputs:k}=r(this);h(P,k)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const y=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=y!==null&&y===g?m:y}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function dh(n,e,t,s,i){if(typeof n.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),n.copyFromChannel(e[t],s,i);else{const r=n.getChannelData(s);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const IC=(n,e,t,s,i)=>{typeof n.copyToChannel=="function"?e[t].byteLength!==0&&n.copyToChannel(e[t],s,i):e[t].byteLength!==0&&n.getChannelData(s).set(e[t],i)},fh=(n,e)=>{const t=[];for(let s=0;s<n;s+=1){const i=[],r=typeof e=="number"?e:e[s];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},XB=(n,e)=>{const t=$n(zp,n),s=Pe(e);return $n(t,s)},JB=async(n,e,t,s,i,r,o)=>{const a=e===null?Math.ceil(n.context.length/128)*128:e.length,c=s.channelCount*s.numberOfInputs,l=i.reduce((g,y)=>g+y,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Ht(n),d=await XB(t,n),f=fh(s.numberOfInputs,s.channelCount),p=fh(s.numberOfOutputs,i),m=Array.from(n.parameters.keys()).reduce((g,y)=>({...g,[y]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(s.numberOfInputs>0&&e!==null)for(let y=0;y<s.numberOfInputs;y+=1)for(let w=0;w<s.channelCount;w+=1)dh(e,f[y],w,w,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:y},w)=>{dh(e,m,y,c+w,g)});for(let y=0;y<s.numberOfInputs;y+=1)for(let w=0;w<i[y];w+=1)p[y][w].byteLength===0&&(p[y][w]=new Float32Array(128));try{const y=f.map((S,C)=>h.activeInputs[C].size===0?[]:S),w=o(g/t.sampleRate,t.sampleRate,()=>d.process(y,p,m));if(u!==null)for(let S=0,C=0;S<s.numberOfOutputs;S+=1){for(let _=0;_<i[S];_+=1)IC(u,p[S],_,C+_,g);C+=i[S]}if(!w)break}catch(y){n.dispatchEvent(new ErrorEvent("processorerror",{colno:y.colno,filename:y.filename,lineno:y.lineno,message:y.message}));break}}return u},ZB=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m)=>(g,y,w)=>{const S=new WeakMap;let C=null;const _=async(v,I)=>{let b=u(v),P=null;const x=Bt(b,I),D=Array.isArray(y.outputChannelCount)?y.outputChannelCount:Array.from(y.outputChannelCount);if(h===null){const k=D.reduce(($,z)=>$+z,0),W=i(I,{channelCount:Math.max(1,k),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,k)}),V=[];for(let $=0;$<v.numberOfOutputs;$+=1)V.push(s(I,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:D[$]}));const J=o(I,{channelCount:y.channelCount,channelCountMode:y.channelCountMode,channelInterpretation:y.channelInterpretation,gain:1});J.connect=e.bind(null,V),J.disconnect=c.bind(null,V),P=[W,V,J]}else x||(b=new h(I,g));if(S.set(I,P===null?b:P[2]),P!==null){if(C===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const z=v.channelCount*v.numberOfInputs,le=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,Y=z+le;C=JB(v,Y===0?null:await(async()=>{const te=new d(Y,Math.ceil(v.context.length/128)*128,I.sampleRate),Ie=[],hn=[];for(let Me=0;Me<y.numberOfInputs;Me+=1)Ie.push(o(te,{channelCount:y.channelCount,channelCountMode:y.channelCountMode,channelInterpretation:y.channelInterpretation,gain:1})),hn.push(i(te,{channelCount:y.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:y.channelCount}));const dn=await Promise.all(Array.from(v.parameters.values()).map(async Me=>{const Wt=r(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:Me.value});return await f(te,Me,Wt.offset),Wt})),he=s(te,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,z+le)});for(let Me=0;Me<y.numberOfInputs;Me+=1){Ie[Me].connect(hn[Me]);for(let Wt=0;Wt<y.channelCount;Wt+=1)hn[Me].connect(he,Wt,Me*y.channelCount+Wt)}for(const[Me,Wt]of dn.entries())Wt.connect(he,0,z+Me),Wt.start(0);return he.connect(te.destination),await Promise.all(Ie.map(Me=>p(v,te,Me))),m(te)})(),I,y,D,w,l)}const k=await C,W=t(I,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[V,J,$]=P;k!==null&&(W.buffer=k,W.start(0)),W.connect(V);for(let z=0,le=0;z<v.numberOfOutputs;z+=1){const Y=J[z];for(let oe=0;oe<D[z];oe+=1)V.connect(Y,le+oe,oe);le+=D[z]}return $}if(x)for(const[k,W]of v.parameters.entries())await n(I,W,b.parameters.get(k));else for(const[k,W]of v.parameters.entries())await f(I,W,b.parameters.get(k));return await p(v,I,b),b};return{render(v,I){a(I,v);const b=S.get(I);return b!==void 0?Promise.resolve(b):_(v,I)}}},eW=(n,e,t,s,i,r,o,a,c,l,u,h,d,f,p,m,g,y,w,S)=>class extends p{constructor(_,v){super(_,v),this._nativeContext=_,this._audioWorklet=n===void 0?void 0:{addModule:(I,b)=>n(this,I,b)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(_,v,I){return new t({length:v,numberOfChannels:_,sampleRate:I})}createBufferSource(){return new s(this)}createChannelMerger(_=6){return new r(this,{numberOfInputs:_})}createChannelSplitter(_=6){return new o(this,{numberOfOutputs:_})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(_=1){return new u(this,{maxDelayTime:_})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(_,v){return new f(this,{feedback:v,feedforward:_})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(_,v,I={disableNormalization:!1}){return new y(this,{...I,imag:v,real:_})}createStereoPanner(){return new w(this)}createWaveShaper(){return new S(this)}decodeAudioData(_,v,I){return l(this._nativeContext,_).then(b=>(typeof v=="function"&&v(b),b),b=>{throw typeof I=="function"&&I(b),b})}},tW={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},nW=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...tW,...u},f=i(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._Q=e(this,p,f.Q,jt,Zt),this._detune=e(this,p,f.detune,1200*Math.log2(jt),-1200*Math.log2(jt)),this._frequency=e(this,p,f.frequency,l.sampleRate/2,0),this._gain=e(this,p,f.gain,40*Math.log10(jt),Zt),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?s():d}if(l.length!==u.length||u.length!==h.length)throw s()}},sW=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Bt(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)):(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},iW=(n,e)=>(t,s)=>{const i=e.get(t);if(i!==void 0)return i;const r=n.get(t);if(r!==void 0)return r;try{const o=s();return o instanceof Promise?(n.set(t,o),o.catch(()=>!1).then(a=>(n.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},rW={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},oW=(n,e,t,s,i)=>class extends n{constructor(o,a){const c=s(o),l={...rW,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},aW=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Bt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},cW={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},lW=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u=r({...cW,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},uW=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Bt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},hW=n=>(e,t,s)=>n(t,e,s),dW=n=>(e,t,s=0,i=0)=>{const r=e[s];if(r===void 0)throw n();return hh(t)?r.connect(t,0,i):r.connect(t,0)},fW=n=>(e,t)=>{const s=n(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return s.buffer=i,s.loop=!0,s.connect(t),s.start(),()=>{s.stop(),s.disconnect(t)}},pW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},mW=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...pW,...l},d=s(u,h),f=r(u),p=f?t():null;super(c,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,jt,Zt),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Uo(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),ks(this)&&Rl(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},gW=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=Bt(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await n(u,l.offset,h.offset):await s(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},_W=n=>e=>(n[0]=e,n[0]),yW={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},vW=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u={...yW,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},wW=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Bt(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=n(o,l)}return s.set(o,a),la(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},TW=(n,e)=>(t,s,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,s,i)}catch(r){throw r.name==="SyntaxError"?n():r}},IW=()=>new DOMException("","DataCloneError"),zw=n=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(s=>{const i=()=>{t.onmessage=null,e.close(),t.close(),s()};t.onmessage=()=>i();try{e.postMessage(n,[n])}catch{}finally{i()}})},bW=(n,e,t,s,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(p=>(zw(d).catch(()=>{}),e(a,()=>a(p))||u(p),n.add(p),p)):new Promise((p,m)=>{const g=async()=>{try{await zw(d)}catch{}},y=w=>{m(w),g()};try{f.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),R_(w)),n.add(w),g().then(()=>p(w))},w=>{y(w===null?s():w)})}catch(w){y(w)}})},EW=(n,e,t,s,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=s(c),{outputs:p}=t(c);for(const m of p)if(Pl(m)){const g=s(m[0]);n(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(c,u-l)},SW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},CW=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...SW,...l},d=s(u,h),f=r(u),p=f?t(h.maxDelayTime):null;super(c,!1,d,p),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},kW=(n,e,t,s,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=Bt(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await n(l,c.delayTime,u.delayTime):await s(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},AW=n=>(e,t,s,i)=>n(e[i],r=>r[0]===t&&r[1]===s),NW=n=>(e,t)=>{n(e).delete(t)},xW=n=>"delayTime"in n,DW=(n,e,t)=>function s(i,r){const o=ch(r)?r:t(n,r);if(xW(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>s([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},eu=(n,e,t)=>{const s=e[t];if(s===void 0)throw n();return s},RW=n=>(e,t=void 0,s=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?eu(n,e,t).disconnect():hh(t)?s===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?eu(n,e,s).disconnect(t,0):eu(n,e,s).disconnect(t,0,i):s===void 0?e.forEach(r=>r.disconnect(t)):eu(n,e,s).disconnect(t,0),OW={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},PW=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,u){const h=r(l),d={...OW,...u},f=s(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._attack=e(this,p,f.attack),this._knee=e(this,p,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,p,f.ratio),this._release=e(this,p,f.release),this._threshold=e(this,p,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},MW=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Bt(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)):(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},LW=()=>new DOMException("","EncodingError"),FW=n=>e=>new Promise((t,s)=>{if(n===null){s(new SyntaxError);return}const i=n.document.head;if(i===null)s(new SyntaxError);else{const r=n.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=n.onerror,l=()=>{n.onerror=c,URL.revokeObjectURL(a)};n.onerror=(u,h,d,f,p)=>{if(h===a||h===n.location.href&&d===1&&f===1)return l(),s(p),!1;if(c!==null)return c(u,h,d,f,p)},r.onerror=()=>{l(),s(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),VW=n=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,s,i){if(s!==null){let r=this._listeners.get(s);r===void 0&&(r=n(this,s),typeof s=="function"&&this._listeners.set(s,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,s,i){const r=s===null?void 0:this._listeners.get(s);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},UW=n=>(e,t,s)=>{Object.defineProperties(n,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return s()}finally{n!==null&&(delete n.currentFrame,delete n.currentTime)}},qW=n=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw n()},BW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},WW=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...BW,...c},h=s(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,jt,Zt)}get gain(){return this._gain}},$W=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Bt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await n(c,a.gain,l.gain):await s(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},jW=(n,e)=>t=>e(n,t),GW=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},zW=n=>e=>{var t;return(t=n.get(e))!==null&&t!==void 0?t:0},HW=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},KW=n=>e=>n.get(e),wt=()=>new DOMException("","InvalidStateError"),QW=n=>e=>{const t=n.get(e);if(t===void 0)throw wt();return t},YW=(n,e)=>t=>{let s=n.get(t);if(s!==void 0)return s;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return s=new e(1,1,44100),n.set(t,s),s},XW=n=>e=>{const t=n.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},$d=()=>new DOMException("","InvalidAccessError"),JW=n=>{n.getFrequencyResponse=(e=>(t,s,i)=>{if(t.length!==s.length||s.length!==i.length)throw $d();return e.call(n,t,s,i)})(n.getFrequencyResponse)},ZW={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},e2=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),u=i(l),h={...ZW,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),JW(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},bC=(n,e,t,s,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let p=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&c-1;p+=t[m]*r[g],p-=n[m]*o[g]}for(let m=i;m<s;m+=1)p+=t[m]*r[d-m&c-1];for(let m=i;m<e;m+=1)p-=n[m]*o[d-m&c-1];r[d]=l[f],o[d]=p,d=d+1&c-1,u[f]=p}return d},t2=(n,e,t,s)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=s instanceof Float64Array?s:new Float64Array(s),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<a;p+=1)i[p]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(n.numberOfChannels,n.length,n.sampleRate),f=n.numberOfChannels;for(let p=0;p<f;p+=1){const m=n.getChannelData(p),g=d.getChannelData(p);u.fill(0),h.fill(0),bC(i,o,r,a,c,u,h,0,l,m,g)}return d},n2=(n,e,t,s,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const p=Bt(f,h);if(h.createIIRFilter===void 0?d=n(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await s(u,g,g.destination);const y=await i(g);return t2(y,h,r,o)})()}const m=await c;return d.buffer=m,d.start(0),d}return await s(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},s2=(n,e,t,s,i,r)=>o=>(a,c)=>{const l=n.get(a);if(l===void 0){if(!o&&r(a)){const u=s(a),{outputs:h}=t(a);for(const d of h)if(Pl(d)){const f=s(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}n.set(a,c)}else n.set(a,l+c)},i2=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},r2=(n,e)=>t=>n.has(t)||e(t),o2=(n,e)=>t=>n.has(t)||e(t),a2=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},c2=n=>e=>n!==null&&e instanceof n,l2=n=>e=>n!==null&&typeof n.AudioNode=="function"&&e instanceof n.AudioNode,u2=n=>e=>n!==null&&typeof n.AudioParam=="function"&&e instanceof n.AudioParam,h2=(n,e)=>t=>n(t)||e(t),d2=n=>e=>n!==null&&e instanceof n,f2=n=>n!==null&&n.isSecureContext,p2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},m2={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},g2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r);if(s(a))throw new TypeError;const c={...m2,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},_2=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},y2=(n,e,t)=>class extends n{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},v2=(n,e,t,s,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,Bd.set(this,a),s(a)&&i.set(a,new Set),this._destination=new n(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Lc=n=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=n.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},w2=(n,e)=>(t,s,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),n(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&s(),a;o.call(t,a,c),n(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&s()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},Fe=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t]&&(n[t]=s)},ut=(n,e)=>{Fe(n,e,"channelCount"),Fe(n,e,"channelCountMode"),Fe(n,e,"channelInterpretation")},Hw=n=>typeof n.getFloatTimeDomainData=="function",T2=n=>{n.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);n.getByteTimeDomainData(t);const s=Math.max(t.length,n.fftSize);for(let i=0;i<s;i+=1)e[i]=(t[i]-128)*.0078125;return e}},I2=(n,e)=>(t,s)=>{const i=t.createAnalyser();if(ut(i,s),!(s.maxDecibels>s.minDecibels))throw e();return Fe(i,s,"fftSize"),Fe(i,s,"maxDecibels"),Fe(i,s,"minDecibels"),Fe(i,s,"smoothingTimeConstant"),n(Hw,()=>Hw(i))||T2(i),i},b2=n=>n===null?null:n.hasOwnProperty("AudioBuffer")?n.AudioBuffer:null,He=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t].value&&(n[t].value=s)},E2=n=>{n.start=(e=>{let t=!1;return(s=0,i=0,r)=>{if(t)throw wt();e.call(n,s,i,r),t=!0}})(n.start)},M_=n=>{n.start=(e=>(t=0,s=0,i)=>{if(typeof i=="number"&&i<0||s<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(n,t,s,i)})(n.start)},L_=n=>{n.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(n,t)})(n.stop)},S2=(n,e,t,s,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return ut(f,d),He(f,d,"playbackRate"),Fe(f,d,"buffer"),Fe(f,d,"loop"),Fe(f,d,"loopEnd"),Fe(f,d,"loopStart"),e(t,()=>t(h))||E2(f),e(s,()=>s(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||M_(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||L_(f),n(h,f),f},C2=n=>n===null?null:n.hasOwnProperty("AudioContext")?n.AudioContext:n.hasOwnProperty("webkitAudioContext")?n.webkitAudioContext:null,k2=(n,e)=>(t,s,i)=>{const r=t.destination;if(r.channelCount!==s)try{r.channelCount=s}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:s});const o=n(t,{channelCount:s,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},A2=n=>n===null?null:n.hasOwnProperty("AudioWorkletNode")?n.AudioWorkletNode:null,N2=n=>{const{port1:e}=new MessageChannel;try{e.postMessage(n)}finally{e.close()}},x2=(n,e,t,s,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw n()}},channelCountMode:{get:()=>"explicit",set:()=>{throw n()}},onprocessorerror:{get:()=>f,set:p=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof p=="function"?p:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const y=d.get(m[1]);y!==void 0?m[1]=y:(m[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(m[0],{...w}))},d.set(g,m[1]))}}return p.call(h,"error",m[1],m[2]),p.call(h,...m)})(h.addEventListener),h.removeEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return p.call(h,"error",m[1],m[2]),p.call(h,m[0],m[1],m[2])})(h.removeEventListener),u.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(p).connect(r.destination),i(h,()=>p.disconnect(),()=>p.connect(r.destination))}return h}catch(h){throw h.code===11?s():h}if(l===void 0)throw s();return N2(u),e(r,o,l,u)},EC=(n,e)=>n===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(n*e))))),D2=n=>new Promise((e,t)=>{const{port1:s,port2:i}=new MessageChannel;s.onmessage=({data:r})=>{s.close(),i.close(),e(r)},s.onmessageerror=({data:r})=>{s.close(),i.close(),t(r)},i.postMessage(n)}),R2=async(n,e)=>{const t=await D2(e);return new n(t)},O2=(n,e,t,s)=>{let i=zp.get(n);i===void 0&&(i=new WeakMap,zp.set(n,i));const r=R2(t,s);return i.set(e,r),r},P2=(n,e,t,s,i,r,o,a,c,l,u,h,d)=>(f,p,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const y=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(y.some(U=>U<1))throw c();if(y.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const w=g.channelCount*g.numberOfInputs,S=y.reduce((U,Z)=>U+Z,0),C=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(w+C>6||S>6)throw c();const _=new MessageChannel,v=[],I=[];for(let U=0;U<g.numberOfInputs;U+=1)v.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),I.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const b=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:U,maxValue:Z,minValue:ot,name:We}of m.parameterDescriptors){const ve=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[We]!==void 0?g.parameterData[We]:U===void 0?0:U});Object.defineProperties(ve.offset,{defaultValue:{get:()=>U===void 0?0:U},maxValue:{get:()=>Z===void 0?jt:Z},minValue:{get:()=>ot===void 0?Zt:ot}}),b.push(ve)}const P=s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+C)}),x=EC(p,f.sampleRate),D=a(f,x,w+C,Math.max(1,S)),k=i(f,{channelCount:Math.max(1,S),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,S)}),W=[];for(let U=0;U<g.numberOfOutputs;U+=1)W.push(s(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:y[U]}));for(let U=0;U<g.numberOfInputs;U+=1){v[U].connect(I[U]);for(let Z=0;Z<g.channelCount;Z+=1)I[U].connect(P,Z,U*g.channelCount+Z)}const V=new TC(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:U},Z)=>{const ot=b[Z];return ot.connect(P,0,w+Z),ot.start(0),[U,ot.offset]}));P.connect(D);let J=g.channelInterpretation,$=null;const z=g.numberOfOutputs===0?[D]:W,le={get bufferSize(){return x},get channelCount(){return g.channelCount},set channelCount(U){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(U){throw t()},get channelInterpretation(){return J},set channelInterpretation(U){for(const Z of v)Z.channelInterpretation=U;J=U},get context(){return D.context},get inputs(){return v},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return $},set onprocessorerror(U){typeof $=="function"&&le.removeEventListener("processorerror",$),$=typeof U=="function"?U:null,typeof $=="function"&&le.addEventListener("processorerror",$)},get parameters(){return V},get port(){return _.port2},addEventListener(...U){return D.addEventListener(U[0],U[1],U[2])},connect:n.bind(null,z),disconnect:l.bind(null,z),dispatchEvent(...U){return D.dispatchEvent(U[0])},removeEventListener(...U){return D.removeEventListener(U[0],U[1],U[2])}},Y=new Map;_.port1.addEventListener=(U=>(...Z)=>{if(Z[0]==="message"){const ot=typeof Z[1]=="function"?Z[1]:typeof Z[1]=="object"&&Z[1]!==null&&typeof Z[1].handleEvent=="function"?Z[1].handleEvent:null;if(ot!==null){const We=Y.get(Z[1]);We!==void 0?Z[1]=We:(Z[1]=ve=>{u(f.currentTime,f.sampleRate,()=>ot(ve))},Y.set(ot,Z[1]))}}return U.call(_.port1,Z[0],Z[1],Z[2])})(_.port1.addEventListener),_.port1.removeEventListener=(U=>(...Z)=>{if(Z[0]==="message"){const ot=Y.get(Z[1]);ot!==void 0&&(Y.delete(Z[1]),Z[1]=ot)}return U.call(_.port1,Z[0],Z[1],Z[2])})(_.port1.removeEventListener);let oe=null;Object.defineProperty(_.port1,"onmessage",{get:()=>oe,set:U=>{typeof oe=="function"&&_.port1.removeEventListener("message",oe),oe=typeof U=="function"?U:null,typeof oe=="function"&&(_.port1.addEventListener("message",oe),_.port1.start())}}),m.prototype.port=_.port1;let te=null;O2(f,le,m,g).then(U=>te=U);const hn=fh(g.numberOfInputs,g.channelCount),dn=fh(g.numberOfOutputs,y),he=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((U,{name:Z})=>({...U,[Z]:new Float32Array(128)}),{});let Me=!0;const Wt=()=>{g.numberOfOutputs>0&&D.disconnect(k);for(let U=0,Z=0;U<g.numberOfOutputs;U+=1){const ot=W[U];for(let We=0;We<y[U];We+=1)k.disconnect(ot,Z+We,We);Z+=y[U]}},K=new Map;D.onaudioprocess=({inputBuffer:U,outputBuffer:Z})=>{if(te!==null){const ot=h(le);for(let We=0;We<x;We+=128){for(let ve=0;ve<g.numberOfInputs;ve+=1)for(let Ge=0;Ge<g.channelCount;Ge+=1)dh(U,hn[ve],Ge,Ge,We);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:ve},Ge)=>{dh(U,he,ve,w+Ge,We)});for(let ve=0;ve<g.numberOfInputs;ve+=1)for(let Ge=0;Ge<y[ve];Ge+=1)dn[ve][Ge].byteLength===0&&(dn[ve][Ge]=new Float32Array(128));try{const ve=hn.map((bn,$s)=>{if(ot[$s].size>0)return K.set($s,x/128),bn;const Xd=K.get($s);return Xd===void 0?[]:(bn.every(wk=>wk.every(Tk=>Tk===0))&&(Xd===1?K.delete($s):K.set($s,Xd-1)),bn)});Me=u(f.currentTime+We/f.sampleRate,f.sampleRate,()=>te.process(ve,dn,he));for(let bn=0,$s=0;bn<g.numberOfOutputs;bn+=1){for(let ma=0;ma<y[bn];ma+=1)IC(Z,dn[bn],ma,$s+ma,We);$s+=y[bn]}}catch(ve){Me=!1,le.dispatchEvent(new ErrorEvent("processorerror",{colno:ve.colno,filename:ve.filename,lineno:ve.lineno,message:ve.message}))}if(!Me){for(let ve=0;ve<g.numberOfInputs;ve+=1){v[ve].disconnect(I[ve]);for(let Ge=0;Ge<g.channelCount;Ge+=1)I[We].disconnect(P,Ge,ve*g.channelCount+Ge)}if(m.parameterDescriptors!==void 0){const ve=m.parameterDescriptors.length;for(let Ge=0;Ge<ve;Ge+=1){const bn=b[Ge];bn.disconnect(P,0,w+Ge),bn.stop()}}P.disconnect(D),D.onaudioprocess=null,Li?Wt():Kr();break}}}};let Li=!1;const Fi=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Hr=()=>D.connect(Fi).connect(f.destination),Kr=()=>{D.disconnect(Fi),Fi.disconnect()},yk=()=>{if(Me){Kr(),g.numberOfOutputs>0&&D.connect(k);for(let U=0,Z=0;U<g.numberOfOutputs;U+=1){const ot=W[U];for(let We=0;We<y[U];We+=1)k.connect(ot,Z+We,We);Z+=y[U]}}Li=!0},vk=()=>{Me&&(Hr(),Wt()),Li=!1};return Hr(),d(le,yk,vk)},SC=(n,e)=>{const t=n.createBiquadFilter();return ut(t,e),He(t,e,"Q"),He(t,e,"detune"),He(t,e,"frequency"),He(t,e,"gain"),Fe(t,e,"type"),t},M2=(n,e)=>(t,s)=>{const i=t.createChannelMerger(s.numberOfInputs);return n!==null&&n.name==="webkitAudioContext"&&e(t,i),ut(i,s),i},L2=n=>{const e=n.numberOfOutputs;Object.defineProperty(n,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw wt()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw wt()}}),Object.defineProperty(n,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw wt()}})},Ml=(n,e)=>{const t=n.createChannelSplitter(e.numberOfOutputs);return ut(t,e),L2(t),t},F2=(n,e,t,s,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return ut(a,o),He(a,o,"offset"),e(s,()=>s(r))||M_(a),e(i,()=>i(r))||L_(a),n(r,a),a},ua=(n,e)=>(n.connect=e.connect.bind(e),n.disconnect=e.disconnect.bind(e),n),V2=(n,e,t,s)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(p){c.onended=p},addEventListener(...p){return c.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return c.dispatchEvent(p[0])},removeEventListener(...p){return c.removeEventListener(p[0],p[1],p[2])},start(p=0){c.start.call(c,p)},stop(p=0){c.stop.call(c,p)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return n(i,c),s(ua(h,l),d,f)},U2=(n,e)=>(t,s)=>{const i=t.createConvolver();if(ut(i,s),s.disableNormalization===i.normalize&&(i.normalize=!s.disableNormalization),Fe(i,s,"buffer"),s.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw n();return r.call(i,o)}),s.channelCountMode==="max"))throw n();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw n();return r.call(i,o)}),i},CC=(n,e)=>{const t=n.createDelay(e.maxDelayTime);return ut(t,e),He(t,e,"delayTime"),t},q2=n=>(e,t)=>{const s=e.createDynamicsCompressor();if(ut(s,t),t.channelCount>2||t.channelCountMode==="max")throw n();return He(s,t,"attack"),He(s,t,"knee"),He(s,t,"ratio"),He(s,t,"release"),He(s,t,"threshold"),s},ln=(n,e)=>{const t=n.createGain();return ut(t,e),He(t,e,"gain"),t},B2=n=>(e,t,s)=>{if(e.createIIRFilter===void 0)return n(e,t,s);const i=e.createIIRFilter(s.feedforward,s.feedback);return ut(i,s),i};function W2(n,e){const t=e[0]*e[0]+e[1]*e[1];return[(n[0]*e[0]+n[1]*e[1])/t,(n[1]*e[0]-n[0]*e[1])/t]}function $2(n,e){return[n[0]*e[0]-n[1]*e[1],n[0]*e[1]+n[1]*e[0]]}function Kw(n,e){let t=[0,0];for(let s=n.length-1;s>=0;s-=1)t=$2(t,e),t[0]+=n[s];return t}const j2=(n,e,t,s)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=EC(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),p=d.length,m=f.length,g=Math.min(p,m);if(p===0||p>20)throw s();if(d[0]===0)throw e();if(m===0||m>20)throw s();if(f[0]===0)throw e();if(d[0]!==1){for(let b=0;b<m;b+=1)f[b]/=d[0];for(let b=1;b<p;b+=1)d[b]/=d[0]}const y=t(i,h,o,o);y.channelCount=o,y.channelCountMode=a,y.channelInterpretation=c;const w=32,S=[],C=[],_=[];for(let b=0;b<o;b+=1){S.push(0);const P=new Float32Array(w),x=new Float32Array(w);P.fill(0),x.fill(0),C.push(P),_.push(x)}y.onaudioprocess=b=>{const P=b.inputBuffer,x=b.outputBuffer,D=P.numberOfChannels;for(let k=0;k<D;k+=1){const W=P.getChannelData(k),V=x.getChannelData(k);S[k]=bC(d,p,f,m,g,C[k],_[k],S[k],w,W,V)}};const v=i.sampleRate/2;return ua({get bufferSize(){return h},get channelCount(){return y.channelCount},set channelCount(b){y.channelCount=b},get channelCountMode(){return y.channelCountMode},set channelCountMode(b){y.channelCountMode=b},get channelInterpretation(){return y.channelInterpretation},set channelInterpretation(b){y.channelInterpretation=b},get context(){return y.context},get inputs(){return[y]},get numberOfInputs(){return y.numberOfInputs},get numberOfOutputs(){return y.numberOfOutputs},addEventListener(...b){return y.addEventListener(b[0],b[1],b[2])},dispatchEvent(...b){return y.dispatchEvent(b[0])},getFrequencyResponse(b,P,x){if(b.length!==P.length||P.length!==x.length)throw n();const D=b.length;for(let k=0;k<D;k+=1){const W=-Math.PI*(b[k]/v),V=[Math.cos(W),Math.sin(W)],J=Kw(f,V),$=Kw(d,V),z=W2(J,$);P[k]=Math.sqrt(z[0]*z[0]+z[1]*z[1]),x[k]=Math.atan2(z[1],z[0])}},removeEventListener(...b){return y.removeEventListener(b[0],b[1],b[2])}},y)},G2=(n,e)=>n.createMediaElementSource(e.mediaElement),z2=(n,e)=>{const t=n.createMediaStreamDestination();return ut(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},H2=(n,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const s=t.slice(0,1),i=n.createMediaStreamSource(new MediaStream(s));return Object.defineProperty(i,"mediaStream",{value:e}),i},K2=(n,e)=>(t,{mediaStreamTrack:s})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(s);const i=new MediaStream([s]),r=t.createMediaStreamSource(i);if(s.kind!=="audio")throw n();if(e(t))throw new TypeError;return r},Q2=n=>n===null?null:n.hasOwnProperty("OfflineAudioContext")?n.OfflineAudioContext:n.hasOwnProperty("webkitOfflineAudioContext")?n.webkitOfflineAudioContext:null,Y2=(n,e,t,s,i,r)=>(o,a)=>{const c=o.createOscillator();return ut(c,a),He(c,a,"detune"),He(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):Fe(c,a,"type"),e(t,()=>t(o))||M_(c),e(s,()=>s(o))||r(c,o),e(i,()=>i(o))||L_(c),n(o,c),c},X2=n=>(e,t)=>{const s=e.createPanner();return s.orientationX===void 0?n(e,t):(ut(s,t),He(s,t,"orientationX"),He(s,t,"orientationY"),He(s,t,"orientationZ"),He(s,t,"positionX"),He(s,t,"positionY"),He(s,t,"positionZ"),Fe(s,t,"coneInnerAngle"),Fe(s,t,"coneOuterAngle"),Fe(s,t,"coneOuterGain"),Fe(s,t,"distanceModel"),Fe(s,t,"maxDistance"),Fe(s,t,"panningModel"),Fe(s,t,"refDistance"),Fe(s,t,"rolloffFactor"),s)},J2=(n,e,t,s,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:p,maxDistance:m,orientationX:g,orientationY:y,orientationZ:w,panningModel:S,positionX:C,positionY:_,positionZ:v,refDistance:I,rolloffFactor:b,...P})=>{const x=u.createPanner();if(P.channelCount>2||P.channelCountMode==="max")throw o();ut(x,P);const D={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},k=t(u,{...D,channelInterpretation:"speakers",numberOfInputs:6}),W=s(u,{...P,gain:1}),V=s(u,{...D,gain:1}),J=s(u,{...D,gain:0}),$=s(u,{...D,gain:0}),z=s(u,{...D,gain:0}),le=s(u,{...D,gain:0}),Y=s(u,{...D,gain:0}),oe=i(u,256,6,1),te=r(u,{...D,curve:new Float32Array([1,1]),oversample:"none"});let Ie=[g,y,w],hn=[C,_,v];const dn=new Float32Array(1);oe.onaudioprocess=({inputBuffer:K})=>{const Li=[c(K,dn,0),c(K,dn,1),c(K,dn,2)];Li.some((Hr,Kr)=>Hr!==Ie[Kr])&&(x.setOrientation(...Li),Ie=Li);const Fi=[c(K,dn,3),c(K,dn,4),c(K,dn,5)];Fi.some((Hr,Kr)=>Hr!==hn[Kr])&&(x.setPosition(...Fi),hn=Fi)},Object.defineProperty(J.gain,"defaultValue",{get:()=>0}),Object.defineProperty($.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(le.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0});const he={get bufferSize(){},get channelCount(){return x.channelCount},set channelCount(K){if(K>2)throw o();W.channelCount=K,x.channelCount=K},get channelCountMode(){return x.channelCountMode},set channelCountMode(K){if(K==="max")throw o();W.channelCountMode=K,x.channelCountMode=K},get channelInterpretation(){return x.channelInterpretation},set channelInterpretation(K){W.channelInterpretation=K,x.channelInterpretation=K},get coneInnerAngle(){return x.coneInnerAngle},set coneInnerAngle(K){x.coneInnerAngle=K},get coneOuterAngle(){return x.coneOuterAngle},set coneOuterAngle(K){x.coneOuterAngle=K},get coneOuterGain(){return x.coneOuterGain},set coneOuterGain(K){if(K<0||K>1)throw e();x.coneOuterGain=K},get context(){return x.context},get distanceModel(){return x.distanceModel},set distanceModel(K){x.distanceModel=K},get inputs(){return[W]},get maxDistance(){return x.maxDistance},set maxDistance(K){if(K<0)throw new RangeError;x.maxDistance=K},get numberOfInputs(){return x.numberOfInputs},get numberOfOutputs(){return x.numberOfOutputs},get orientationX(){return V.gain},get orientationY(){return J.gain},get orientationZ(){return $.gain},get panningModel(){return x.panningModel},set panningModel(K){x.panningModel=K},get positionX(){return z.gain},get positionY(){return le.gain},get positionZ(){return Y.gain},get refDistance(){return x.refDistance},set refDistance(K){if(K<0)throw new RangeError;x.refDistance=K},get rolloffFactor(){return x.rolloffFactor},set rolloffFactor(K){if(K<0)throw new RangeError;x.rolloffFactor=K},addEventListener(...K){return W.addEventListener(K[0],K[1],K[2])},dispatchEvent(...K){return W.dispatchEvent(K[0])},removeEventListener(...K){return W.removeEventListener(K[0],K[1],K[2])}};h!==he.coneInnerAngle&&(he.coneInnerAngle=h),d!==he.coneOuterAngle&&(he.coneOuterAngle=d),f!==he.coneOuterGain&&(he.coneOuterGain=f),p!==he.distanceModel&&(he.distanceModel=p),m!==he.maxDistance&&(he.maxDistance=m),g!==he.orientationX.value&&(he.orientationX.value=g),y!==he.orientationY.value&&(he.orientationY.value=y),w!==he.orientationZ.value&&(he.orientationZ.value=w),S!==he.panningModel&&(he.panningModel=S),C!==he.positionX.value&&(he.positionX.value=C),_!==he.positionY.value&&(he.positionY.value=_),v!==he.positionZ.value&&(he.positionZ.value=v),I!==he.refDistance&&(he.refDistance=I),b!==he.rolloffFactor&&(he.rolloffFactor=b),(Ie[0]!==1||Ie[1]!==0||Ie[2]!==0)&&x.setOrientation(...Ie),(hn[0]!==0||hn[1]!==0||hn[2]!==0)&&x.setPosition(...hn);const Me=()=>{W.connect(x),n(W,te,0,0),te.connect(V).connect(k,0,0),te.connect(J).connect(k,0,1),te.connect($).connect(k,0,2),te.connect(z).connect(k,0,3),te.connect(le).connect(k,0,4),te.connect(Y).connect(k,0,5),k.connect(oe).connect(u.destination)},Wt=()=>{W.disconnect(x),a(W,te,0,0),te.disconnect(V),V.disconnect(k),te.disconnect(J),J.disconnect(k),te.disconnect($),$.disconnect(k),te.disconnect(z),z.disconnect(k),te.disconnect(le),le.disconnect(k),te.disconnect(Y),Y.disconnect(k),k.disconnect(oe),oe.disconnect(u.destination)};return l(ua(he,x),Me,Wt)},Z2=n=>(e,{disableNormalization:t,imag:s,real:i})=>{const r=s instanceof Float32Array?s:new Float32Array(s),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(s).length<2)throw n();return a},Ll=(n,e,t,s)=>n.createScriptProcessor(e,t,s),e$=(n,e)=>(t,s)=>{const i=s.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return n(t,s);const r=t.createStereoPanner();return ut(r,s),He(r,s,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},t$=(n,e,t,s,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(p,m,g,y)=>{const w=new Float32Array(16385),S=new Float32Array(16385);for(let P=0;P<16385;P+=1){const x=P/16384*c;w[P]=Math.cos(x),S[P]=Math.sin(x)}const C=t(p,{...l,gain:0}),_=s(p,{...u,curve:w}),v=s(p,{...u,curve:a}),I=t(p,{...l,gain:0}),b=s(p,{...u,curve:S});return{connectGraph(){m.connect(C),m.connect(v.inputs===void 0?v:v.inputs[0]),m.connect(I),v.connect(g),g.connect(_.inputs===void 0?_:_.inputs[0]),g.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(C.gain),b.connect(I.gain),C.connect(y,0,0),I.connect(y,0,1)},disconnectGraph(){m.disconnect(C),m.disconnect(v.inputs===void 0?v:v.inputs[0]),m.disconnect(I),v.disconnect(g),g.disconnect(_.inputs===void 0?_:_.inputs[0]),g.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(C.gain),b.disconnect(I.gain),C.disconnect(y,0,0),I.disconnect(y,0,1)}}},d=(p,m,g,y)=>{const w=new Float32Array(16385),S=new Float32Array(16385),C=new Float32Array(16385),_=new Float32Array(16385),v=Math.floor(16385/2);for(let z=0;z<16385;z+=1)if(z>v){const le=(z-v)/(16384-v)*c;w[z]=Math.cos(le),S[z]=Math.sin(le),C[z]=0,_[z]=1}else{const le=z/(16384-v)*c;w[z]=1,S[z]=0,C[z]=Math.cos(le),_[z]=Math.sin(le)}const I=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),b=t(p,{...l,gain:0}),P=s(p,{...u,curve:w}),x=t(p,{...l,gain:0}),D=s(p,{...u,curve:S}),k=s(p,{...u,curve:a}),W=t(p,{...l,gain:0}),V=s(p,{...u,curve:C}),J=t(p,{...l,gain:0}),$=s(p,{...u,curve:_});return{connectGraph(){m.connect(I),m.connect(k.inputs===void 0?k:k.inputs[0]),I.connect(b,0),I.connect(x,0),I.connect(W,1),I.connect(J,1),k.connect(g),g.connect(P.inputs===void 0?P:P.inputs[0]),g.connect(D.inputs===void 0?D:D.inputs[0]),g.connect(V.inputs===void 0?V:V.inputs[0]),g.connect($.inputs===void 0?$:$.inputs[0]),P.connect(b.gain),D.connect(x.gain),V.connect(W.gain),$.connect(J.gain),b.connect(y,0,0),W.connect(y,0,0),x.connect(y,0,1),J.connect(y,0,1)},disconnectGraph(){m.disconnect(I),m.disconnect(k.inputs===void 0?k:k.inputs[0]),I.disconnect(b,0),I.disconnect(x,0),I.disconnect(W,1),I.disconnect(J,1),k.disconnect(g),g.disconnect(P.inputs===void 0?P:P.inputs[0]),g.disconnect(D.inputs===void 0?D:D.inputs[0]),g.disconnect(V.inputs===void 0?V:V.inputs[0]),g.disconnect($.inputs===void 0?$:$.inputs[0]),P.disconnect(b.gain),D.disconnect(x.gain),V.disconnect(W.gain),$.disconnect(J.gain),b.disconnect(y,0,0),W.disconnect(y,0,0),x.disconnect(y,0,1),J.disconnect(y,0,1)}}},f=(p,m,g,y,w)=>{if(m===1)return h(p,g,y,w);if(m===2)return d(p,g,y,w);throw i()};return(p,{channelCount:m,channelCountMode:g,pan:y,...w})=>{if(g==="max")throw i();const S=n(p,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),C=t(p,{...w,channelCount:m,channelCountMode:g,gain:1}),_=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:y});let{connectGraph:v,disconnectGraph:I}=f(p,m,C,_,S);Object.defineProperty(_.gain,"defaultValue",{get:()=>0}),Object.defineProperty(_.gain,"maxValue",{get:()=>1}),Object.defineProperty(_.gain,"minValue",{get:()=>-1});const b={get bufferSize(){},get channelCount(){return C.channelCount},set channelCount(k){C.channelCount!==k&&(P&&I(),{connectGraph:v,disconnectGraph:I}=f(p,k,C,_,S),P&&v()),C.channelCount=k},get channelCountMode(){return C.channelCountMode},set channelCountMode(k){if(k==="clamped-max"||k==="max")throw i();C.channelCountMode=k},get channelInterpretation(){return C.channelInterpretation},set channelInterpretation(k){C.channelInterpretation=k},get context(){return C.context},get inputs(){return[C]},get numberOfInputs(){return C.numberOfInputs},get numberOfOutputs(){return C.numberOfOutputs},get pan(){return _.gain},addEventListener(...k){return C.addEventListener(k[0],k[1],k[2])},dispatchEvent(...k){return C.dispatchEvent(k[0])},removeEventListener(...k){return C.removeEventListener(k[0],k[1],k[2])}};let P=!1;const x=()=>{v(),P=!0},D=()=>{I(),P=!1};return r(ua(b,S),x,D)}},n$=(n,e,t,s,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);ut(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();Fe(l,{curve:u},"curve"),Fe(l,c,"oversample");let h=null,d=!1;return o(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(s(g)&&h===null?h=n(a,l):!s(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,s(l.curve)&&(h=n(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},s$=(n,e,t,s,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();ut(l,c),ut(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),p=t(r,{...c,gain:-1});let m=null,g=!1,y=null;const w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){h.channelCount=_,d.channelCount=_,l.channelCount=_,f.channelCount=_,u.channelCount=_,p.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){h.channelCountMode=_,d.channelCountMode=_,l.channelCountMode=_,f.channelCountMode=_,u.channelCountMode=_,p.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){h.channelInterpretation=_,d.channelInterpretation=_,l.channelInterpretation=_,f.channelInterpretation=_,u.channelInterpretation=_,p.channelInterpretation=_},get context(){return l.context},get curve(){return y},set curve(_){if(_!==null&&_.length<2)throw e();if(_===null)l.curve=_,u.curve=_;else{const v=_.length,I=new Float32Array(v+2-v%2),b=new Float32Array(v+2-v%2);I[0]=_[0],b[0]=-_[v-1];const P=Math.ceil((v+1)/2),x=(v+1)/2-1;for(let D=1;D<P;D+=1){const k=D/P*x,W=Math.floor(k),V=Math.ceil(k);I[D]=W===V?_[W]:(1-(k-W))*_[W]+(1-(V-k))*_[V],b[D]=W===V?-_[v-1-W]:-((1-(k-W))*_[v-1-W])-(1-(V-k))*_[v-1-V]}I[P]=v%2===1?_[P-1]:(_[P-2]+_[P-1])/2,l.curve=I,u.curve=b}y=_,g&&(s(y)&&m===null?m=n(r,h):m!==null&&(m(),m=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(_){l.oversample=_,u.oversample=_},addEventListener(..._){return h.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return h.dispatchEvent(_[0])},removeEventListener(..._){return h.removeEventListener(_[0],_[1],_[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==w.oversample&&(w.oversample=a);const S=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(p).connect(f),g=!0,s(y)&&(m=n(r,h))},C=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(p),p.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(ua(w,f),S,C)},Yt=()=>new DOMException("","NotSupportedError"),i$={numberOfChannels:1},r$=(n,e,t,s,i)=>class extends n{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...i$,...l},f=s(h,u,d);e(Lc,()=>Lc(f))||f.addEventListener("statechange",(()=>{let p=0;const m=g=>{this._state==="running"&&(p>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return m})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,_C(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},o$={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},a$=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...o$,...l},d=t(u,h),f=r(u),p=f?s():null,m=c.sampleRate/2;super(c,!1,d,p),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Uo(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),ks(this)&&Rl(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},c$=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=Bt(d,h);if(!f){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,p),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)):(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},l$={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},u$=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...l$,...l},d=t(u,h),f=r(u),p=f?s():null;super(c,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,jt,Zt),this._orientationY=e(this,f,d.orientationY,jt,Zt),this._orientationZ=e(this,f,d.orientationZ,jt,Zt),this._positionX=e(this,f,d.positionX,jt,Zt),this._positionY=e(this,f,d.positionY,jt,Zt),this._positionZ=e(this,f,d.positionZ,jt,Zt),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},h$=(n,e,t,s,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,p)=>{let m=null,g=r(f);const y={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={...y,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},S=Bt(g,p);if("bufferSize"in g)m=s(p,{...y,gain:1});else if(!S){const C={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,C)}if(u.set(p,m===null?g:m),m!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=new o(6,f.context.length,p.sampleRate),k=e(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});k.connect(D.destination),h=(async()=>{const W=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(V,J)=>{const $=t(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:J===0?1:0});return await a(D,V,$.offset),$}));for(let V=0;V<6;V+=1)W[V].connect(k,0,V),W[V].start(0);return l(D)})()}const C=await h,_=s(p,{...y,gain:1});await c(f,p,_);const v=[];for(let D=0;D<C.numberOfChannels;D+=1)v.push(C.getChannelData(D));let I=[v[0][0],v[1][0],v[2][0]],b=[v[3][0],v[4][0],v[5][0]],P=s(p,{...y,gain:1}),x=i(p,{...w,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:b[0],positionY:b[1],positionZ:b[2]});_.connect(P).connect(x.inputs[0]),x.connect(m);for(let D=128;D<C.length;D+=128){const k=[v[0][D],v[1][D],v[2][D]],W=[v[3][D],v[4][D],v[5][D]];if(k.some((V,J)=>V!==I[J])||W.some((V,J)=>V!==b[J])){I=k,b=W;const V=D/p.sampleRate;P.gain.setValueAtTime(0,V),P=s(p,{...y,gain:0}),x=i(p,{...w,orientationX:I[0],orientationY:I[1],orientationZ:I[2],positionX:b[0],positionY:b[1],positionZ:b[2]}),P.gain.setValueAtTime(1,V),_.connect(P).connect(x.inputs[0]),x.connect(m)}}return m}return S?(await n(p,f.orientationX,g.orientationX),await n(p,f.orientationY,g.orientationY),await n(p,f.orientationZ,g.orientationZ),await n(p,f.positionX,g.positionX),await n(p,f.positionY,g.positionY),await n(p,f.positionZ,g.positionZ)):(await a(p,f.orientationX,g.orientationX),await a(p,f.orientationY,g.orientationY),await a(p,f.orientationZ,g.orientationZ),await a(p,f.positionX,g.positionX),await a(p,f.positionY,g.positionY),await a(p,f.positionZ,g.positionZ)),la(g)?await c(f,p,g.inputs[0]):await c(f,p,g),g};return{render(f,p){const m=u.get(p);return m!==void 0?Promise.resolve(m):d(f,p)}}},d$={disableNormalization:!1},f$=(n,e,t,s)=>class kC{constructor(r,o){const a=e(r),c=s({...d$,...o}),l=n(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===kC.prototype||t.has(r)}},p$=(n,e)=>(t,s,i)=>(n(s).replay(i),e(s,t,i)),m$=(n,e,t)=>async(s,i,r)=>{const o=n(s);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=s.context.destination;!t(l)&&(s!==f||!t(s))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},g$=(n,e,t)=>async(s,i,r)=>{const o=e(s);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await n(a).render(a,i);t(a)||u.connect(r,c)}))},_$=(n,e,t,s)=>i=>n(Lc,()=>Lc(i))?Promise.resolve(n(s,s)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),y$=n=>(e,t)=>{n.set(e,t)},v$=n=>(e,t)=>n.set(e,t),w$=(n,e,t,s,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(s(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),R_(u)):e(r,()=>r(u))||a(u),n.add(u),u)),T$={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},I$=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),u={...T$,...c},h=t(l,u),d=r(l),f=d?s():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},b$=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=Bt(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await n(c,a.pan,l.pan):await s(c,a.pan,l.pan),la(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},E$=n=>()=>{if(n===null)return!1;try{new n({length:1,sampleRate:44100})}catch{return!1}return!0},S$=(n,e)=>async()=>{if(n===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),s=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await s.audioWorklet.addModule(i);const a=new n(s,"a",{numberOfOutputs:0}),c=s.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await s.startRendering()}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},C$=(n,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),s=n(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{s.disconnect(),i(t.currentTime!==0)},t.startRendering()})},k$=()=>new DOMException("","UnknownError"),A$={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},N$=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const u=i(c),h={...A$,...l},d=t(u,h),p=r(u)?s():null;super(c,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},x$=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Bt(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=n(o,l)}return s.set(o,a),la(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},D$=()=>typeof window>"u"?null:window,R$=(n,e)=>t=>{t.copyFromChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=s.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)s[h]=l[h+o]},t.copyToChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=s.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=s[h]}},O$=n=>e=>{e.copyFromChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyToChannel)},P$=n=>(e,t)=>{const s=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=s),n(e,"buffer",i=>()=>{const r=i.call(e);return r===s?null:r},i=>r=>i.call(e,r===null?s:r))},M$=(n,e)=>(t,s)=>{s.channelCount=1,s.channelCountMode="explicit",Object.defineProperty(s,"channelCount",{get:()=>1,set:()=>{throw n()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:()=>{throw n()}});const i=t.createBufferSource();e(s,()=>{const a=s.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(s,0,c)},()=>i.disconnect(s))},AC=(n,e,t)=>n.copyFromChannel===void 0?n.getChannelData(t)[0]:(n.copyFromChannel(e,t),e[0]),NC=n=>{if(n===null)return!1;const e=n.length;return e%2!==0?n[Math.floor(e/2)]!==0:n[e/2-1]+n[e/2]!==0},Fl=(n,e,t,s)=>{let i=n;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(n,e,{get:t(r),set:s(o)})},L$=n=>({...n,outputChannelCount:n.outputChannelCount!==void 0?n.outputChannelCount:n.numberOfInputs===1&&n.numberOfOutputs===1?[n.channelCount]:Array.from({length:n.numberOfOutputs},()=>1)}),F$=n=>({...n,channelCount:n.numberOfOutputs}),V$=n=>{const{imag:e,real:t}=n;return e===void 0?t===void 0?{...n,imag:[0,0],real:[0,0]}:{...n,imag:Array.from(t,()=>0),real:t}:t===void 0?{...n,imag:e,real:Array.from(e,()=>0)}:{...n,imag:e,real:t}},xC=(n,e,t)=>{try{n.setValueAtTime(e,t)}catch(s){if(s.code!==9)throw s;xC(n,e,t+1e-7)}},U$=n=>{const e=n.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},q$=n=>{const e=n.createBufferSource(),t=n.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},B$=n=>{const e=n.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},F_=n=>{const e=n.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},DC=n=>{const e=n.createBuffer(1,1,44100),t=n.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},V_=n=>{const e=n.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},W$=n=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(n)}finally{e.close(),t.close()}},$$=n=>{n.start=(e=>(t=0,s=0,i)=>{const r=n.buffer,o=r===null?s:Math.min(r.duration,s);r!==null&&o>r.duration-.5/n.context.sampleRate?e.call(n,t,0,0):e.call(n,t,o,i)})(n.start)},RC=(n,e)=>{const t=e.createGain();n.connect(t);const s=(i=>()=>{i.call(n,t),n.removeEventListener("ended",s)})(n.disconnect);n.addEventListener("ended",s),ua(n,t),n.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(n,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(n,o),r=!0}})(n.stop)},ha=(n,e)=>t=>{const s={value:n};return Object.defineProperties(t,{currentTarget:s,target:s}),typeof e=="function"?e.call(n,t):e.handleEvent.call(n,t)},j$=uB(jr),G$=gB(jr),z$=AW(Wd),OC=new WeakMap,H$=zW(OC),zn=iW(new Map,new WeakMap),hs=D$(),PC=I2(zn,fs),U_=GW(Ht),Mt=m$(Ht,U_,Cr),K$=TB(PC,Pe,Mt),De=QW(Bd),qs=Q2(hs),Se=d2(qs),MC=new WeakMap,LC=VW(ha),Vl=C2(hs),q_=c2(Vl),B_=l2(hs),FC=u2(hs),Fc=A2(hs),st=zB(hB(uC),mB(j$,G$,lh,z$,uh,Ht,H$,Dl,Pe,jr,ks,Cr,pu),zn,s2(jp,uh,Ht,Pe,Mc,ks),fs,$d,Yt,EW(lh,jp,Ht,Pe,Mc,De,ks,Se),DW(MC,Ht,$n),LC,De,q_,B_,FC,Se,Fc),Q$=wB(st,K$,fs,PC,De,Se),W_=new WeakSet,Qw=b2(hs),VC=_W(new Uint32Array(1)),$_=R$(VC,fs),j_=O$(VC),Y$=bB(W_,zn,Yt,Qw,qs,E$(Qw),$_,j_),jd=_B(ln),UC=g$(U_,Ol,Cr),ps=hW(UC),da=S2(jd,zn,U$,q$,B$,F_,DC,V_,$$,P$(Fl),RC),ms=p$(HW(Ol),UC),X$=CB(ps,da,Pe,ms,Mt),Hn=HB(dB(hC),MC,D_,KB,iB,rB,oB,aB,cB,Bp,cC,Vl,xC),J$=SB(st,X$,Hn,wt,da,De,Se,ha),Z$=MB(st,LB,fs,wt,k2(ln,Fl),De,Se,Mt),ej=sW(ps,SC,Pe,ms,Mt),Gr=v$(OC),tj=nW(st,Hn,ej,$d,SC,De,Se,Gr),Pi=w2(jr,B_),nj=M$(wt,Pi),Mi=M2(Vl,nj),sj=aW(Mi,Pe,Mt),ij=oW(st,sj,Mi,De,Se),rj=uW(Ml,Pe,Mt),oj=lW(st,rj,Ml,De,Se,F$),aj=V2(jd,da,ln,Pi),fa=F2(jd,zn,aj,F_,V_),cj=gW(ps,fa,Pe,ms,Mt),lj=mW(st,Hn,cj,fa,De,Se,ha),qC=U2(Yt,Fl),uj=wW(qC,Pe,Mt),hj=vW(st,uj,qC,De,Se,Gr),dj=kW(ps,CC,Pe,ms,Mt),fj=CW(st,Hn,dj,CC,De,Se,Gr),BC=q2(Yt),pj=MW(ps,BC,Pe,ms,Mt),mj=PW(st,Hn,pj,BC,Yt,De,Se,Gr),gj=$W(ps,ln,Pe,ms,Mt),_j=WW(st,Hn,gj,ln,De,Se),yj=j2($d,wt,Ll,Yt),Gd=_$(zn,ln,Ll,C$(ln,qs)),vj=n2(da,Pe,qs,Mt,Gd),wj=B2(yj),Tj=e2(st,wj,vj,De,Se,Gr),Ij=FB(Hn,Mi,fa,Ll,Yt,AC,Se,Fl),WC=new WeakMap,bj=v2(Z$,Ij,LC,Se,WC,ha),$C=Y2(jd,zn,F_,DC,V_,RC),Ej=c$(ps,$C,Pe,ms,Mt),Sj=a$(st,Hn,$C,Ej,De,Se,ha),jC=fW(da),Cj=s$(jC,wt,ln,NC,Pi),zd=n$(jC,wt,Cj,NC,Pi,Vl,Fl),kj=J2(lh,wt,Mi,ln,Ll,zd,Yt,uh,AC,Pi),GC=X2(kj),Aj=h$(ps,Mi,fa,ln,GC,Pe,qs,ms,Mt,Gd),Nj=u$(st,Hn,GC,Aj,De,Se,Gr),xj=Z2(fs),Dj=f$(xj,De,new WeakSet,V$),Rj=t$(Mi,Ml,ln,zd,Yt,Pi),zC=e$(Rj,Yt),Oj=b$(ps,zC,Pe,ms,Mt),Pj=I$(st,Hn,zC,Oj,De,Se),Mj=x$(zd,Pe,Mt),Lj=N$(st,wt,zd,Mj,De,Se,Gr),HC=f2(hs),G_=UW(hs),KC=new WeakMap,Fj=YW(KC,qs),Vj=HC?pB(zn,Yt,FW(hs),G_,qW(lB),De,Fj,Se,Fc,new WeakMap,new WeakMap,S$(Fc,qs),hs):void 0,Uj=h2(q_,Se),qj=bW(W_,zn,IW,LW,new WeakSet,De,Uj,ah,Lc,$_,j_),QC=eW(Vj,Q$,Y$,J$,tj,ij,oj,lj,hj,qj,fj,mj,_j,Tj,bj,Sj,Nj,Dj,Pj,Lj),Bj=p2(st,G2,De,Se),Wj=g2(st,z2,De,Se),$j=_2(st,H2,De,Se),jj=K2(wt,Se),Gj=y2(st,jj,De),zj=PB(QC,wt,Yt,k$,Bj,Wj,$j,Gj,Vl),z_=XW(WC),Hj=yB(z_),YC=dW(fs),Kj=NW(z_),XC=RW(fs),JC=new WeakMap,Qj=jW(JC,$n),Yj=P2(YC,fs,wt,Mi,Ml,fa,ln,Ll,Yt,XC,G_,Qj,Pi),Xj=x2(wt,Yj,ln,Yt,Pi),Jj=ZB(ps,YC,da,Mi,Ml,fa,ln,Kj,XC,G_,Pe,Fc,qs,ms,Mt,Gd),Zj=KW(KC),eG=y$(JC),Yw=HC?YB(Hj,st,Hn,Jj,Xj,Ht,Zj,De,Se,Fc,L$,eG,W$,ha):void 0,tG=TW(Yt,qs),nG=w$(W_,zn,U_,z_,Gd,ah,$_,j_),sG=r$(QC,zn,wt,tG,nG),iG=i2(Bd,q_),rG=r2(x_,B_),oG=o2(D_,FC),aG=a2(Bd,Se);function ie(n,e){if(!n)throw new Error(e)}function Os(n,e,t=1/0){if(!(e<=n&&n<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${n}`)}function ZC(n){!n.isOffline&&n.state!=="running"&&tk('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let ek=console;function cG(...n){ek.log(...n)}function tk(...n){ek.warn(...n)}function Dn(n){return typeof n>"u"}function de(n){return!Dn(n)}function lG(n){return typeof n=="function"}function kr(n){return typeof n=="number"}function or(n){return Object.prototype.toString.call(n)==="[object Object]"&&n.constructor===Object}function uG(n){return typeof n=="boolean"}function Bn(n){return Array.isArray(n)}function ds(n){return typeof n=="string"}function tu(n){return ds(n)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(n)}function hG(n){return new zj(n)}function dG(n,e,t){return new sG(n,e,t)}const ar=typeof self=="object"?self:null,fG=ar&&(ar.hasOwnProperty("AudioContext")||ar.hasOwnProperty("webkitAudioContext"));function pG(n,e,t){return ie(de(Yw),"This node only works in a secure context (https or localhost)"),new Yw(n,e,t)}class mG{constructor(e,t,s){this._callback=e,this._type=t,this._updateInterval=s,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),s=new Worker(t);s.onmessage=this._callback.bind(this),this._worker=s}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){this._updateInterval=Math.max(e,128/44100),this._type==="worker"&&this._worker.postMessage(Math.max(e*1e3,1))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Ar(n){return oG(n)}function ai(n){return rG(n)}function mu(n){return aG(n)}function no(n){return iG(n)}function nk(n){return n instanceof AudioBuffer}function gG(n,e){return n==="value"||Ar(e)||ai(e)||nk(e)}function po(n,...e){if(!e.length)return n;const t=e.shift();if(or(n)&&or(t))for(const s in t)gG(s,t[s])?n[s]=t[s]:or(t[s])?(n[s]||Object.assign(n,{[s]:{}}),po(n[s],t[s])):Object.assign(n,{[s]:t[s]});return po(n,...e)}function _G(n,e){return n.length===e.length&&n.every((t,s)=>e[s]===t)}function L(n,e,t=[],s){const i={},r=Array.from(e);if(or(r[0])&&s&&!Reflect.has(r[0],s)&&(Object.keys(r[0]).some(a=>Reflect.has(n,a))||(po(i,{[s]:r[0]}),t.splice(t.indexOf(s),1),r.shift())),r.length===1&&or(r[0]))po(i,r[0]);else for(let o=0;o<t.length;o++)de(r[o])&&(i[t[o]]=r[o]);return po(n,i)}function yG(n){return n.constructor.getDefaults()}function mo(n,e){return Dn(n)?e:n}function Xw(n,e){return e.forEach(t=>{Reflect.has(n,t)&&delete n[t]}),n}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;ty(FG);const VG=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;ty(VG);const UG=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;ty(UG);const qG="feedback-comb-filter",BG=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;mk(qG,BG);class Hc extends xr{constructor(){super(L(Hc.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const e=L(Hc.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),t={};Object.keys(e.urls).forEach(s=>{const i=parseInt(s,10);if(ie(tu(s)||kr(i)&&isFinite(i),`url key is neither a note or midi pitch: ${s}`),tu(s)){const r=new Nn(this.context,s).toMidi();t[r]=e.urls[s]}else kr(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new J_({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(xr.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ke,onerror:ke,release:.1,urls:{}})}_findClosest(e){let s=0;for(;s<96;){if(this._buffers.has(e+s))return-s;if(this._buffers.has(e-s))return s;s++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,s=1){return this.log("triggerAttack",e,t,s),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=hk(new Nn(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=uk(c+a),d=new Uc({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,s),Bn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),p=f.indexOf(d);p!==-1&&f.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(s=>{const i=new Nn(this.context,s).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(s=>{for(;s.length;)s.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,s,i=1){const r=this.toSeconds(s);return this.triggerAttack(e,r,i),Bn(t)?(ie(Bn(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,s){if(ie(tu(e)||isFinite(e),`note must be a pitch or midi: ${e}`),tu(e)){const i=new Nn(this.context,e).toMidi();this._buffers.add(i,t,s)}else this._buffers.add(e,t,s);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}jn([Ws(0)],Hc.prototype,"attack",void 0);jn([Ws(0)],Hc.prototype,"release",void 0);class Th extends re{constructor(){super(Object.assign(L(Th.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const e=L(Th.getDefaults(),arguments,["pan"]);this.pan=new Le({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",Xe(this,"pan")}static getDefaults(){return Object.assign(re.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const WG="bit-crusher",$G=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;mk(WG,$G);class Ih extends re{constructor(){super(L(Ih.getDefaults(),arguments,["channels"])),this.name="Split";const e=L(Ih.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(re.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class bh extends re{constructor(){super(L(bh.getDefaults(),arguments,["type","size"])),this.name="Analyser",this._analysers=[],this._buffers=[];const e=L(bh.getDefaults(),arguments,["type","size"]);this.input=this.output=this._gain=new qt({context:this.context}),this._split=new Ih({context:this.context,channels:e.channels}),this.input.connect(this._split),Os(e.channels,1);for(let t=0;t<e.channels;t++)this._analysers[t]=this.context.createAnalyser(),this._split.connect(this._analysers[t],t,0);this.size=e.size,this.type=e.type}static getDefaults(){return Object.assign(re.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((e,t)=>{const s=this._buffers[t];this._type==="fft"?e.getFloatFrequencyData(s):this._type==="waveform"&&e.getFloatTimeDomainData(s)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(e){this._analysers.forEach((t,s)=>{t.fftSize=e*2,this._buffers[s]=new Float32Array(e)})}get channels(){return this._analysers.length}get type(){return this._type}set type(e){ie(e==="waveform"||e==="fft",`Analyser: invalid type: ${e}`),this._type=e}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(e){this._analysers.forEach(t=>t.smoothingTimeConstant=e)}dispose(){return super.dispose(),this._analysers.forEach(e=>e.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class Je extends re{constructor(){super(L(Je.getDefaults(),arguments,["solo"])),this.name="Solo";const e=L(Je.getDefaults(),arguments,["solo"]);this.input=this.output=new qt({context:this.context}),Je._allSolos.has(this.context)||Je._allSolos.set(this.context,new Set),Je._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(re.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),Je._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Je._soloed.has(this.context)||Je._soloed.set(this.context,new Set),Je._soloed.get(this.context).add(this)}_removeSolo(){Je._soloed.has(this.context)&&Je._soloed.get(this.context).delete(this)}_isSoloed(){return Je._soloed.has(this.context)&&Je._soloed.get(this.context).has(this)}_noSolos(){return!Je._soloed.has(this.context)||Je._soloed.has(this.context)&&Je._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Je._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Je._allSolos=new Map;Je._soloed=new Map;class Eh extends re{constructor(){super(L(Eh.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const e=L(Eh.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Th({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new bi({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,Xe(this,["pan","volume"])}static getDefaults(){return Object.assign(re.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Hi extends re{constructor(){super(L(Hi.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const e=L(Hi.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Je({solo:e.solo,context:this.context}),this._panVol=this.output=new Eh({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Xe(this,["pan","volume"])}static getDefaults(){return Object.assign(re.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Hi.buses.has(e)||Hi.buses.set(e,new qt({context:this.context})),Hi.buses.get(e)}send(e,t=0){const s=this._getBus(e),i=new qt({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(s),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Hi.buses=new Map;class jG extends re{constructor(){super(...arguments),this.name="Listener",this.positionX=new Le({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Le({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Le({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Le({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Le({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Le({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Le({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Le({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Le({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(re.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Hd(n=>{n.listener=new jG({context:n})});Kd(n=>{n.listener.dispose()});const Kc=Vn().transport;Vn().destination;Vn().destination;Vn().listener;Vn().draw;Vn();let Zp;be.initializeApp({apiKey:"AIzaSyDYf0BlW0pNhi1e8RYjxMhAov6ngDGJakE",authDomain:"node-drone-c94f1.firebaseapp.com",projectId:"node-drone-c94f1",storageBucket:"node-drone-c94f1.appspot.com",messagingSenderId:"741839883014",appId:"1:741839883014:web:09aec33b0f7b002f822c87"});let En=1;const GG=[{name:"C",frequency:523.25/2*En},{name:"C#",frequency:554.37/2*En},{name:"D",frequency:587.33/2*En},{name:"D#",frequency:622.25/2*En},{name:"E",frequency:659.25/2*En},{name:"F",frequency:698.46/2*En},{name:"F#",frequency:739.99/2*En},{name:"G",frequency:783.99/2*En},{name:"G#",frequency:830.61/2*En},{name:"A",frequency:880/2*En},{name:"A#",frequency:932.33/2*En},{name:"B",frequency:987.77/2*En}],Zw=["fierce","gentle","elegant","funky","quirky"],eT=["elephant","giraffe","zebra","lion","tiger"],zG=Zw[Math.floor(Math.random()*Zw.length)],HG=eT[Math.floor(Math.random()*eT.length)],KG=`${zG} ${HG}`,tT=new In("Samples/RU_FD_one_shot_guitar_stones_Cmin.wav").toDestination(),em=new In("Samples/RU_GA_guitar_soundscape_drone_pluto_cm.wav").toDestination(),tm=new In("Samples/RU_GA_80_guitar_cherry_plum_triplets_C.wav").toDestination(),nm=new In("Samples/C_chunky.wav").toDestination();em.loop=!0;tm.loop=!0;nm.loop=!0;be.database();const vs=new Wo().toDestination();let su,La,nT;be.auth().onAuthStateChanged(n=>{console.log(n),n&&(su=n.uid,La=be.database().ref(`players/${su}`),nT=be.database().ref(`players/${su}`).child("samples"),La.set({id:su,name:KG,type:"sawtooth",freq:261.625,vol:-12,isPlaying:!1,hasClickedPlayerButton:!1,samples:{cmDroneisPlaying:!1,eDrone1isPlaying:!1,cmSampleisPlaying:!1}}),La.on("value",e=>{const t=e.val();Zp=t.name,console.log("player updated:",t),t.isPlaying?(vs.type=t.type,vs.frequency.rampTo(t.freq,1),vs.start()):vs.stop(),vs.volume.value=t.vol,t.transportSampleIsPlaying?tT.start():tT.stop()}),nT.on("value",e=>{const t=e.val();Zp=t.name,t.cmDroneisPlaying?em.start():em.stop(),t.eDrone1isPlaying?tm.start():tm.stop(),t.cmSampleisPlaying?nm.start():nm.stop()}),La.onDisconnect().remove())});be.auth().signInAnonymously().catch(n=>{var e=n.code,t=n.message;console.log(e,t)});let Lt=[];const sm=document.getElementById("playerList"),QG=document.getElementById("visualizer-container");document.getElementById("hostStartBtn").addEventListener("click",()=>{const n=document.createElement("button"),e=document.createElement("button");n.innerHTML="Start Transport",e.innerHTML="Stop Transport",n.addEventListener("click",()=>{Kc.start()}),e.addEventListener("click",()=>{Kc.stop()}),document.getElementById("overlay").style.display="none",document.getElementById("backimg").style.display="none",document.getElementById("chord-buttons").style.display="flex";let t=document.getElementById("globalControl");t.style.display="flex",t.appendChild(n),t.appendChild(e),document.getElementById("hostSamplePad").style.display="flex",tz(),QG.style.display="none",sm.style.display="block",lk(),gk(),nz()});document.getElementById("startBtn").addEventListener("click",()=>{document.getElementById("overlay").style.display="none",document.getElementById("backimg").style.display="none",document.getElementById("samplePad").style.display="flex",lk(),La.update({hasClickedPlayerButton:!0});const n=document.getElementById("PlayerDispContainer");n.style.display="flex";const e=document.createElement("div");e.setAttribute("id","playerDisplay"),e.textContent=Zp,document.getElementById("name").appendChild(e);const t=document.createElement("input");t.type="range",t.min="-70",t.max="0",t.value=-12,t.addEventListener("change",()=>{vs.volume.value=t.value}),n.appendChild(t),XG()});function gk(){sm.innerHTML="";for(const n in Lt){const e=Lt[n];if(!e.hasClickedPlayerButton)continue;const t=document.createElement("div");t.classList.add("player"),t.setAttribute("id","playerDiv");const s=document.createElement("div");s.textContent=e.name,s.style.fontSize="30px",s.classList.add("playerName"),t.appendChild(s);const i=document.createElement("div");i.textContent=`Type: ${e.type}`,i.classList.add("playerType"),t.appendChild(i);const r=document.createElement("div");r.textContent=`Freq: ${e.freq}`,r.classList.add("playerFreq"),t.appendChild(r);const o=document.createElement("div");o.classList.add("playerControls");const a=document.createElement("button");a.textContent="Play",a.addEventListener("click",()=>{be.database().ref(`players/${n}`).child("isPlaying").set(!0)}),o.appendChild(a);const c=document.createElement("button");c.textContent="Pause",c.addEventListener("click",()=>{be.database().ref(`players/${n}`).child("isPlaying").set(!1)}),o.appendChild(c);const l=document.createElement("div");GG.forEach(h=>{const d=document.createElement("button");d.className="key",d.textContent=h.name,d.addEventListener("click",()=>{be.database().ref(`players/${n}`).child("freq").set(h.frequency)}),l.appendChild(d)}),t.appendChild(l);const u=document.createElement("input");u.type="range",u.min="-70",u.max="0",u.value=-12,u.value=e.vol,u.addEventListener("change",()=>{be.database().ref(`players/${n}`).child("vol").set(u.value)}),t.appendChild(u),t.appendChild(o),sm.appendChild(t)}}const YG=be.database().ref("players");YG.on("value",n=>{Lt=n.val(),console.log("player list updated:",Lt),gk()});function XG(){const n=new bh("waveform",256),e=document.getElementById("canvas"),t=e.getContext("2d");vs.connect(n);function s(){requestAnimationFrame(s),t.strokeStyle="#FFFFFF";const i=n.getValue();t.clearRect(0,0,e.width,e.height),t.beginPath();const r=e.width/i.length;let o=0;for(const a of i){const c=(a+1)/2*e.height;o===0?t.moveTo(o,c):t.lineTo(o,c),o+=r}t.stroke()}s()}const JG=document.getElementById("start");JG.addEventListener("click",()=>{vs.start()});const ZG=document.getElementById("stop");ZG.addEventListener("click",()=>{vs.stop()});const ez=[{name:"C Major",notes:[261.63,329.63,392]},{name:"G Major",notes:[392,493.88,587.33]},{name:"A Minor",notes:[440,523.25,659.25]},{name:"D Major",notes:[293.66,369.99,440]},{name:"Eb Major",notes:[311.13,392,466.16]},{name:"E Major",notes:[329.63,415.3,493.88]},{name:"F Major",notes:[349.23,440,523.25]},{name:"Bb Major",notes:[466.16,587.33,698.46]},{name:"G Minor",notes:[392,466.16,587.33]},{name:"C Minor",notes:[261.63,311.13,392]},{name:"F Minor",notes:[349.23,369.99,440]}];function tz(){document.querySelectorAll("#chord-buttons button").forEach(function(n){n.addEventListener("click",function(){const e=n.innerHTML,t=ez.find(function(i){return i.name===e});console.log(t);let s=0;if(t)for(const i in Lt){const r=t.notes[s];console.log(r),be.database().ref(`players/${i}`).child("freq").set(r),s<=t.notes.length?s++:s=0}})})}function nz(){document.getElementById("playAll").addEventListener("click",()=>{for(const n in Lt)be.database().ref(`players/${n}`).child("isPlaying").set(!0)}),document.getElementById("stopAll").addEventListener("click",()=>{for(const n in Lt)be.database().ref(`players/${n}`).child("isPlaying").set(!1)}),document.getElementById("cmDrone").addEventListener("change",function(){if(this.checked)for(const n in Lt)be.database().ref(`players/${n}/samples`).child("cmDroneisPlaying").set(!0);else for(const n in Lt)be.database().ref(`players/${n}/samples`).child("cmDroneisPlaying").set(!1)}),document.getElementById("eDrone1").addEventListener("change",function(){if(this.checked)for(const n in Lt)be.database().ref(`players/${n}/samples`).child("eDrone1isPlaying").set(!0);else for(const n in Lt)be.database().ref(`players/${n}/samples`).child("eDrone1isPlaying").set(!1)}),document.getElementById("cmSample").addEventListener("change",function(){if(this.checked)for(const n in Lt)be.database().ref(`players/${n}/samples`).child("cmSampleisPlaying").set(!0);else for(const n in Lt)be.database().ref(`players/${n}/samples`).child("cmSampleisPlaying").set(!1)})}const sz=new In("/Samples/SheepBaa_S08AN.310.wav").toDestination(),iz=new In("Samples/elephantCry.wav").toDestination(),rz=new In("Samples/SPLC-4185_FX_Loop_Radio_Noise_Handheld_Voice_Distorted.wav").toDestination(),_k=new In("Samples/plath.wav").toDestination(),oz=new bi(2).toDestination();_k.connect(oz);document.getElementById("elephant").addEventListener("click",()=>{iz.start()});document.getElementById("sheep").addEventListener("click",()=>{sz.start()});document.getElementById("time").addEventListener("click",()=>{rz.start()});document.getElementById("plath").addEventListener("click",()=>{_k.start()});Kc.bpm.value=80;let Nf=0;Kc.scheduleRepeat(n=>{const e=Object.keys(Lt)[Nf];Lt[e],be.database().ref("players/"+e).update({transportSampleIsPlaying:!0}),Kc.scheduleOnce(t=>{be.database().ref("players/"+e).update({transportSampleIsPlaying:!1})},"+8n"),Nf=(Nf+1)%Object.keys(Lt).length},"4n");