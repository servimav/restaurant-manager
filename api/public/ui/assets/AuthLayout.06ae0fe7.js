import{d as _,ag as y,U as g,r as h,o as c,e as m,w as e,f as a,as as u,b3 as x,aI as d,aA as Q,Q as b,at as w,R as p,bs as I,bt as L,J as C}from"./index.04fb470e.js";import{Q as V}from"./QPage.35b7a6ff.js";import{Q as E,a as F}from"./QLayout.953ec825.js";import{Q as S}from"./QForm.88d99e78.js";import{i as U}from"./index.6925d095.js";import{u as A}from"./notification.bcef4808.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"./router.1722d853.js";const N=t=>(I("data-v-9a1fa0c0"),t=t(),L(),t),M=N(()=>C("div",{class:"text-body1"}," Inicia sesi\xF3n para vivir una mejor experiencia ",-1)),q=_({__name:"LoginForm",setup(t){const r=y(),l=U(g),o=h({phone:"",password:""});async function v(){try{await l.login(o.value),l.isManager?r.push({name:p.HOME}):r.push({name:p.CLIENT_MENU})}catch(i){A.axiosError(i)}}return(i,s)=>(c(),m(w,{class:"login-card"},{default:e(()=>[a(u,{class:"text-center text-grey-9"},{default:e(()=>[M]),_:1}),a(S,{onSubmit:x(v,["prevent"])},{default:e(()=>[a(u,{class:"q-gutter-y-md"},{default:e(()=>[a(d,{name:"phone",modelValue:o.value.phone,"onUpdate:modelValue":s[0]||(s[0]=n=>o.value.phone=n),type:"tel",label:"Tel\xE9fono",requried:""},null,8,["modelValue"]),a(d,{name:"password",modelValue:o.value.password,"onUpdate:modelValue":s[1]||(s[1]=n=>o.value.password=n),type:"password",label:"Contrase\xF1a",required:""},null,8,["modelValue"])]),_:1}),a(Q,null,{default:e(()=>[a(b,{class:"full-width",color:"primary",label:"Iniciar",type:"submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}});var B=f(q,[["__scopeId","data-v-9a1fa0c0"]]);const R=_({__name:"AuthLayout",setup(t){return(r,l)=>(c(),m(E,{view:"lHh Lpr lff"},{default:e(()=>[a(F,{class:"bg-grey-8"},{default:e(()=>[a(V,{padding:"",class:"q-pa-sm"},{default:e(()=>[a(u,{class:"vh mx-auto"},{default:e(()=>[a(B,{class:"absolute-center"})]),_:1})]),_:1})]),_:1})]),_:1}))}});var K=f(R,[["__scopeId","data-v-64979048"]]);export{K as default};
