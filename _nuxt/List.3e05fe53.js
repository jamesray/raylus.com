import{a as r,a6 as l,J as u,a7 as e,$ as p,a8 as _,x as m}from"./entry.d3cf1596.js";import d from"./ContentSlot.9a698438.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const o=l(),{flatUnwrap:a,unwrap:s}=_(),i=u(()=>n.icon||f[n.type]);return()=>{const c=a((o.default&&o.default())??[],["ul"]).map(t=>s(t,["li"]));return e("ul",c.map(t=>e("li",[e("span",{class:`list-icon ${n.type}`},e(p,{name:i.value,class:"icon"})),e("span",e(d,{use:()=>t}))])))}}});const x=m(y,[["__scopeId","data-v-6109395b"]]);export{x as default};
