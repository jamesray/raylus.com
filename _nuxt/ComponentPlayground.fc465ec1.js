import{b as m,u as c,J as a,a as i,af as u,r as l,a7 as n,x as d}from"./entry.d3cf1596.js";import{u as f}from"./asyncData.2fbbf2a7.js";import _ from"./Ellipsis.f1b00bbe.js";import y from"./ComponentPlaygroundData.9dac25f0.js";import"./TabsHeader.4bc220ff.js";import"./ComponentPlaygroundProps.e8cf685a.js";import"./ProseH4.7254ac07.js";import"./ProseCodeInline.f774bc58.js";import"./Badge.16dc0df2.js";import"./ContentSlot.9a698438.js";import"./ProseP.91168c91.js";import"./index.a3df9afc.js";import"./ComponentPlaygroundSlots.vue.444cdd1a.js";import"./ComponentPlaygroundTokens.vue.8ec7787b.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return a(()=>e.value)}}const v=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=a(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,p])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=p}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(v,[["__scopeId","data-v-ffdff82a"]]);export{V as default};