import f from"./LoadPanel-96a868ef.js";import{c as h,r as p,h as r,p as s,q as n,x as v,z as l,U as y,Q as c,R as i,_ as g}from"./framework-5866ffd3.js";const k={class:"demo"},x={class:"demo-frame-container"},U=["src"],B=h({__name:"Demo",props:{url:null,baseUrl:{default:"/vue-map-ui-docs/playground/"},width:null,height:{default:"25rem"}},setup(o){const e=o,a=p(!0),d=r(()=>({width:e.width,height:e.height}));function m(t){return t.startsWith("/")?t.slice(1):t}const u=r(()=>`${e.baseUrl}${m(e.url??"")}`);function _(){a.value=!1}return(t,D)=>(s(),n("div",k,[o.url?(s(),n("div",{key:0,class:"demo-display",style:v(l(d))},[a.value?(s(),y(f,{key:0})):c("v-if",!0),i("div",x,[i("iframe",{class:"demo-frame",src:l(u),onLoad:_},null,40,U)])],4)):c("v-if",!0)]))}});const b=g(B,[["__file","Demo.vue"]]);export{b as default};
