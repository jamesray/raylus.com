import f from"./TabsHeader.5cb29dcb.js";import{d as x,ai as g,r as n,o as h,b as r,c as l,K as S,I as c,f as y,l as k}from"./entry.431a9363.js";const $={class:"sandbox"},w=["src"],B={key:2},I=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=g(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(o).map(t=>({label:t})),d=n(-1),b=n(),s=n(""),a=n(""),_=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},m=t=>{d.value=t,_(u[t].label)};return h(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,C)=>{const v=f;return r(),l("div",$,[i.src?y("",!0):(r(),S(v,{key:0,ref_key:"tabs",ref:b,"active-tab-index":c(d),tabs:c(u),"onUpdate:activeTabIndex":m},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const O=k(I,[["__scopeId","data-v-91be1191"]]);export{O as default};