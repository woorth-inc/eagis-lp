import e,{useState as n,useRef as l}from"../_snowpack/pkg/react.js";import f from"../_snowpack/pkg/react-dom.js";import p from"./components/header/header.js";import y from"./pages/about/about.js";import b from"./pages/dummy/dummy.js";import"./style.css.proxy.js";const o=()=>performance.now(),h=()=>{const[s,a]=n("fadein"),[c,r]=n("fadeout"),[u,i]=n(o()+1500),t=l(!0),m=d=>{if(!(o()-u<1500))switch(t.current&&(t.current=!1),i(o()),d){case"about":{a("fadeout"),r("fadein");break}case"dummy":{a("fadein"),r("fadeout");break}}};return e.createElement(e.Fragment,null,e.createElement(p,null),e.createElement(y,{firstRender:t.current,animation:s,onWheel:()=>m("about")}),e.createElement(b,{animation:c,onWheel:()=>m("dummy")}))};f.render(e.createElement(h,null),document.getElementById("app"));
