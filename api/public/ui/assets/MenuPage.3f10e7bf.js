import{d as U,ae as D,h as V,r as f,ah as S,o as v,c as q,w as n,e,cq as T,as as y,I as E,J as z,K as g,cr as c,cH as H,aA as F,Q as M,at as B,aq as I,ai as C,au as $,L as K,al as k,am as O,cx as j,cz as G,av as J,aw as R}from"./index.ec12e3c9.js";import{Q as W}from"./QPagination.3ebcd4c8.js";import{Q as X}from"./QPage.4ca4209e.js";import{_ as Y,a as Z}from"./ProductDetailed.1bf7996f.js";import{Q as h}from"./QSelect.7edfac1e.js";import{Q as ee}from"./QForm.67305c05.js";import{i as N}from"./index.bc5e0984.js";import{u as P}from"./notification.13128510.js";import"./format.a33550d6.js";import"./QChip.1482e881.js";import"./selection.27da7e1e.js";import"./rtl.b51694b1.js";import"./router.d7dae7c8.js";const ae={class:"text-h6 text-center"},le=U({__name:"ProductForm",props:{update:null},emits:["completed"],setup(Q,{emit:_}){const l=Q,p=N(D),d=V(()=>p.categories),a=f({category_id:1,description:"",image:"",production_price:0,sell_price:0,title:"",top_price:0,onsale:!1}),s=V(()=>Boolean(l.update));async function x(){try{let m;s.value&&l.update?m=(await p.updateProduct(l.update.id,a.value)).data:m=(await p.storeProduct(a.value)).data,_("completed",m)}catch(m){P.axiosError(m)}}return S(()=>{l.update&&(a.value={category_id:l.update.category.id,description:l.update.description,image:l.update.image,onsale:l.update.onsale,production_price:l.update.production_price,sell_price:l.update.sell_price,title:l.update.title,top_price:l.update.top_price})}),(m,t)=>(v(),q(B,null,{default:n(()=>[e(ee,{onSubmit:T(x,["prevent"])},{default:n(()=>[e(y,null,{default:n(()=>[E("div",ae,z(g(s)?"Actualizar":"Crear")+" Producto ",1)]),_:1}),e(y,{class:"q-gutter-y-sm"},{default:n(()=>[e(c,{modelValue:a.value.title,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value.title=o),type:"text",label:"Nombre",required:""},null,8,["modelValue"]),e(c,{modelValue:a.value.description,"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.description=o),type:"textarea",label:"Detalles",required:""},null,8,["modelValue"]),e(h,{modelValue:a.value.category_id,"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.category_id=o),options:g(d),"emit-value":"","map-options":"","option-label":"title","option-value":"id",label:"Categoria"},null,8,["modelValue","options"]),e(H,{modelValue:a.value.onsale,"onUpdate:modelValue":t[3]||(t[3]=o=>a.value.onsale=o),color:"green",label:"Disponible"},null,8,["modelValue"]),e(c,{modelValue:a.value.production_price,"onUpdate:modelValue":t[4]||(t[4]=o=>a.value.production_price=o),type:"number",styp:"0.01",label:"Precio de Producci\xF3n",prefix:"$"},null,8,["modelValue"]),e(c,{modelValue:a.value.sell_price,"onUpdate:modelValue":t[5]||(t[5]=o=>a.value.sell_price=o),type:"number",styp:"0.01",label:"Precio de Venta",prefix:"$",required:""},null,8,["modelValue"]),e(c,{modelValue:a.value.top_price,"onUpdate:modelValue":t[6]||(t[6]=o=>a.value.top_price=o),type:"number",styp:"0.01",label:"Precio de Superable",prefix:"$"},null,8,["modelValue"])]),_:1}),e(F,null,{default:n(()=>[e(M,{color:"primary",icon:"mdi-check",label:"Guardar",type:"submit",class:"full-width"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}}),te={class:"row q-col-gutter-sm"},Ve=U({__name:"MenuPage",setup(Q){const _=N(D),l=f(!1),p=f(!1),d=f({data:[],links:{},meta:{current_page:0}}),a=V(()=>d.value.meta.last_page?Number(d.value.meta.last_page):d.value.meta.current_page),s=f(),x=V(()=>d.value.data);function m(u){s.value=u,l.value=!0}function t(u){s.value=u||void 0,l.value=!1,p.value=!0}async function o(u){await b(u),j()}async function A(u){G.create({title:"Eliminar Producto",message:`Desea eliminar el producto ${u.title}?`,ok:"Eliminar",cancel:"Cancelar"}).onOk(async()=>{try{await _.destroyProduct(u.id),w()}catch(r){P.axiosError(r)}})}function w(){p.value=!1,l.value=!1,s.value=void 0,b()}async function b(u=1){try{d.value=(await _.list(u)).data}catch(r){P.axiosError(r)}}return S(async()=>{I("Menu"),await b()}),(u,r)=>(v(),C(k,null,[e(X,{padding:""},{default:n(()=>[e(B,{class:"no-box-shadow"},{default:n(()=>[e(y,null,{default:n(()=>[e(M,{color:"primary",icon:"mdi-plus",label:"A\xF1adir",class:"full-width",onClick:r[0]||(r[0]=i=>t(void 0))})]),_:1})]),_:1}),e(y,{class:"q-px-none"},{default:n(()=>[E("div",te,[(v(!0),C(k,null,O(g(x),(i,L)=>(v(),C("div",{class:J(g(R)),key:`product-${i.id}-${L}`},[e(Z,{data:i,onClick:oe=>m(i)},null,8,["data","onClick"])],2))),128))])]),_:1}),e(F,{class:"q-pa-lg flex flex-center"},{default:n(()=>[e(W,{modelValue:d.value.meta.current_page,"onUpdate:modelValue":[r[1]||(r[1]=i=>d.value.meta.current_page=i),r[2]||(r[2]=i=>o(i))],max:g(a),input:""},null,8,["modelValue","max"])]),_:1})]),_:1}),e($,{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=i=>p.value=i)},{default:n(()=>[e(le,{class:"dialog-form",update:s.value,onCompleted:w},null,8,["update"])]),_:1},8,["modelValue"]),s.value?(v(),q($,{key:0,modelValue:l.value,"onUpdate:modelValue":r[4]||(r[4]=i=>l.value=i)},{default:n(()=>[e(Y,{data:s.value,editable:"",class:"dialog-form",onEdit:t,onRemove:A},null,8,["data"])]),_:1},8,["modelValue"])):K("",!0)],64))}});export{Ve as default};
