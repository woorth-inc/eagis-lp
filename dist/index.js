import t,{useState as n,useRef as f}from"../_snowpack/pkg/react.js";import y from"../_snowpack/pkg/react-dom.js";import g from"./components/header/header.js";import h from"./pages/home/home.js";import j from"./pages/dummy/dummy.js";import"./style.css.proxy.js";const k=()=>performance.now(),w=()=>{const[r,s]=n("home"),[c,i]=n("fadein"),[l,u]=n("fadeout"),[b,E]=n(k()+1500),o=f(!0),m=(e,a)=>{switch(e){case"home":{i(a);break}case"dummy":{u(a);break}}},d=e=>{o.current&&(o.current=!1),m(r,"fadeout"),setTimeout(()=>{m(e,"fadein"),s(e)},700)},p=[{delay:1,label:"home",active:!0},{delay:2,label:"dummy"}].map(e=>Object.assign(e,{onClick:()=>{d(e.label)}}));return t.createElement(t.Fragment,null,t.createElement(g,{items:p}),t.createElement(h,{firstRender:o.current,animation:c}),t.createElement(j,{animation:l}))};y.render(t.createElement(w,null),document.getElementById("app"));