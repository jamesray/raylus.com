import b from"./TabsHeader.5cb29dcb.js";import g from"./ComponentPlaygroundProps.6f8147f4.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.55d53690.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.bc18b492.js";import{a as D}from"./index.79a5ded6.js";import{d as V,r as k,b as n,c as C,g as P,I as o,K as m,aj as T,f as l,l as I}from"./entry.431a9363.js";import"./ProseH4.123f3f2d.js";import"./ProseCodeInline.776b027b.js";import"./Badge.c74be1e3.js";import"./ContentSlot.b91d863d.js";import"./ProseP.efda5a23.js";const j={class:"component-playground-data"},B=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=b,_=g,i=v,f=x;return n(),C("div",j,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":c[0]||(c[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const w=I(B,[["__scopeId","data-v-ef4d9ec9"]]);export{w as default};