"use strict";(self["webpackChunkmyApp"]=self["webpackChunkmyApp"]||[]).push([[541],{3541:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>k,keyboardDidClose:()=>f,keyboardDidOpen:()=>w,keyboardDidResize:()=>y,resetKeyboardAssist:()=>h,setKeyboardClose:()=>g,setKeyboardOpen:()=>c,startKeyboardAssist:()=>p,trackViewportChanges:()=>D});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ionKeyboardDidShow",o="ionKeyboardDidHide",a=150;let d={},r={},n=!1;const h=()=>{d={},r={},n=!1},p=e=>{b(e),e.visualViewport&&(r=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),w()||y(e)?c(e):f(e)&&g(e)})},b=e=>{e.addEventListener("keyboardDidShow",(t=>c(e,t))),e.addEventListener("keyboardDidHide",(()=>g(e)))},c=(e,t)=>{l(e,t),n=!0},g=e=>{u(e),n=!1},w=()=>{const e=(d.height-r.height)*r.scale;return!n&&d.width===r.width&&e>a},y=e=>n&&!f(e),f=e=>n&&r.height===e.innerHeight,l=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-r.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},u=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{d=Object.assign({},r),r=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.c2452116.js.map