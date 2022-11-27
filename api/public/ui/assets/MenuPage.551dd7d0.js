import{n as ae,r as A,c as g,a8 as ye,a1 as le,a3 as be,j as z,g as Fe,aW as Ve,aX as _e,aY as xe,aZ as he,a_ as Ce,a$ as Se,b0 as Ae,b1 as Pe,a7 as De,b2 as J,d as ne,af as ie,ah as oe,o as $,e as ue,w as x,f as m,b3 as Ne,as as B,J as re,K as ke,u as q,aI as O,a0 as ze,b4 as we,aA as se,Q as de,at as ce,aq as Ue,ai as W,au as Z,L as Ie,al as ee,am as Qe,aK as Ee,aM as Oe,av as $e,aw as qe}from"./index.04fb470e.js";import{Q as Me}from"./QPagination.36b8f6b7.js";import{Q as Te}from"./QPage.35b7a6ff.js";import{_ as Be,a as je}from"./ProductDetailed.adb69d4d.js";import{Q as Le}from"./QSelect.d11fb4e1.js";import{Q as Re}from"./QChip.2f03b717.js";import{h as We}from"./format.3e32b8d9.js";import{Q as Ke}from"./QForm.88d99e78.js";import{i as me}from"./index.6925d095.js";import{u as K}from"./notification.bcef4808.js";import"./selection.07c9d277.js";import"./rtl.b51694b1.js";import"./router.1722d853.js";function w(e,t,l,s){const u=[];return e.forEach(o=>{s(o)===!0?u.push(o):t.push({failedPropValidation:l,file:o})}),u}function T(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),le(e)}const Xe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ye=["rejected"];function Ge({editable:e,dnd:t,getFileInput:l,addFilesToQueue:s}){const{props:u,emit:o,proxy:n}=ae(),y=A(null),P=g(()=>u.accept!==void 0?u.accept.split(",").map(a=>(a=a.trim(),a==="*"?"*/":(a.endsWith("/*")&&(a=a.slice(0,a.length-1)),a.toUpperCase()))):null),V=g(()=>parseInt(u.maxFiles,10)),c=g(()=>parseInt(u.maxTotalSize,10));function p(a){if(e.value)if(a!==Object(a)&&(a={target:null}),a.target!==null&&a.target.matches('input[type="file"]')===!0)a.clientX===0&&a.clientY===0&&ye(a);else{const C=l();C&&C!==a.target&&C.click(a)}}function N(a){e.value&&a&&s(null,a)}function k(a,C,Q,E){let d=Array.from(C||a.target.files);const h=[],D=()=>{h.length>0&&o("rejected",h)};if(u.accept!==void 0&&P.value.indexOf("*/")===-1&&(d=w(d,h,"accept",f=>P.value.some(F=>f.type.toUpperCase().startsWith(F)||f.name.toUpperCase().endsWith(F))),d.length===0))return D();if(u.maxFileSize!==void 0){const f=parseInt(u.maxFileSize,10);if(d=w(d,h,"max-file-size",F=>F.size<=f),d.length===0)return D()}if(u.multiple!==!0&&d.length>0&&(d=[d[0]]),d.forEach(f=>{f.__key=f.webkitRelativePath+f.lastModified+f.name+f.size}),E===!0){const f=Q.map(F=>F.__key);d=w(d,h,"duplicate",F=>f.includes(F.__key)===!1)}if(d.length===0)return D();if(u.maxTotalSize!==void 0){let f=E===!0?Q.reduce((F,L)=>F+L.size,0):0;if(d=w(d,h,"max-total-size",F=>(f+=F.size,f<=c.value)),d.length===0)return D()}if(typeof u.filter=="function"){const f=u.filter(d);d=w(d,h,"filter",F=>f.includes(F))}if(u.maxFiles!==void 0){let f=E===!0?Q.length:0;if(d=w(d,h,"max-files",()=>(f++,f<=V.value)),d.length===0)return D()}if(D(),d.length>0)return d}function b(a){T(a),t.value!==!0&&(t.value=!0)}function i(a){le(a),(a.relatedTarget!==null||be.is.safari!==!0?a.relatedTarget!==y.value:document.elementsFromPoint(a.clientX,a.clientY).includes(y.value)===!1)===!0&&(t.value=!1)}function v(a){T(a);const C=a.dataTransfer.files;C.length>0&&s(null,C),t.value=!1}function I(a){if(t.value===!0)return z("div",{ref:y,class:`q-${a}__dnd absolute-full`,onDragenter:T,onDragover:T,onDragleave:i,onDrop:v})}return Object.assign(n,{pickFiles:p,addFiles:N}),{pickFiles:p,addFiles:N,onDragover:b,onDragleave:i,processFiles:k,getDndNode:I,maxFilesNumber:V,maxTotalSizeNumber:c}}var He=Fe({name:"QFile",inheritAttrs:!1,props:{...Ve,..._e,...Xe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...xe,...Ye],setup(e,{slots:t,emit:l,attrs:s}){const{proxy:u}=ae(),o=he(),n=A(null),y=A(!1),P=Ce(e),{pickFiles:V,onDragover:c,onDragleave:p,processFiles:N,getDndNode:k}=Ge({editable:o.editable,dnd:y,getFileInput:G,addFilesToQueue:H}),b=Se(e),i=g(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),v=g(()=>J(i.value)),I=g(()=>i.value.map(r=>r.name).join(", ")),a=g(()=>We(i.value.reduce((r,_)=>r+_.size,0))),C=g(()=>({totalSize:a.value,filesNumber:i.value.length,maxFiles:e.maxFiles})),Q=g(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:P.value,...s,id:o.targetUid.value,disabled:o.editable.value!==!0})),E=g(()=>"q-file q-field--auto-height"+(y.value===!0?" q-file--dnd":"")),d=g(()=>e.multiple===!0&&e.append===!0);function h(r){const _=i.value.slice();_.splice(r,1),f(_)}function D(r){const _=i.value.findIndex(r);_>-1&&h(_)}function f(r){l("update:modelValue",e.multiple===!0?r:r[0])}function F(r){r.keyCode===13&&De(r)}function L(r){(r.keyCode===13||r.keyCode===32)&&V(r)}function G(){return n.value}function H(r,_){const S=N(r,_,i.value,d.value),R=G();R!=null&&(R.value=""),S!==void 0&&((e.multiple===!0?e.modelValue&&S.every(ge=>i.value.includes(ge)):e.modelValue===S[0])||f(d.value===!0?i.value.concat(S):S))}function M(){return[z("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function pe(){if(t.file!==void 0)return i.value.length===0?M():i.value.map((_,S)=>t.file({index:S,file:_,ref:this}));if(t.selected!==void 0)return i.value.length===0?M():t.selected({files:i.value,ref:this});if(e.useChips===!0)return i.value.length===0?M():i.value.map((_,S)=>z(Re,{key:"file-"+S,removable:o.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{h(S)}},()=>z("span",{class:"ellipsis",textContent:_.name})));const r=e.displayValue!==void 0?e.displayValue:I.value;return r.length>0?[z("div",{class:e.inputClass,style:e.inputStyle,textContent:r})]:M()}function ve(){const r={ref:n,...Q.value,...b.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:H};return e.multiple===!0&&(r.multiple=!0),z("input",r)}return Object.assign(o,{fieldClass:E,emitValue:f,hasValue:v,inputRef:n,innerValue:i,floatingLabel:g(()=>v.value===!0||J(e.displayValue)),computedCounter:g(()=>{if(e.counterLabel!==void 0)return e.counterLabel(C.value);const r=e.maxFiles;return`${i.value.length}${r!==void 0?" / "+r:""} (${a.value})`}),getControlChild:()=>k("file"),getControl:()=>{const r={ref:o.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return o.editable.value===!0&&Object.assign(r,{onDragover:c,onDragleave:p,onKeydown:F,onKeyup:L}),z("div",r,[ve()].concat(pe()))}}),Object.assign(u,{removeAtIndex:h,removeFile:D,getNativeElement:()=>n.value}),Ae(u,"nativeEl",()=>n.value),Pe(o)}});function Y(e){return e===void 0}function Je(e){return e===null}function Ze(e){return typeof e=="boolean"}function j(e){return e===Object(e)}function te(e){return Array.isArray(e)}function et(e){return e instanceof Date}function fe(e,t){return t?j(e)&&!Y(e.uri):j(e)&&typeof e.size=="number"&&typeof e.type=="string"&&typeof e.slice=="function"}function tt(e,t){return fe(e,t)&&typeof e.name=="string"&&(j(e.lastModifiedDate)||typeof e.lastModified=="number")}function U(e){return Y(e)?!1:e}function X(e,t,l,s){t=t||{},l=l||new FormData,t.indices=U(t.indices),t.nullsAsUndefineds=U(t.nullsAsUndefineds),t.booleansAsIntegers=U(t.booleansAsIntegers),t.allowEmptyArrays=U(t.allowEmptyArrays),t.noFilesWithArrayNotation=U(t.noFilesWithArrayNotation),t.dotsForObjectNotation=U(t.dotsForObjectNotation);const u=typeof l.getParts=="function";return Y(e)||(Je(e)?t.nullsAsUndefineds||l.append(s,""):Ze(e)?t.booleansAsIntegers?l.append(s,e?1:0):l.append(s,e):te(e)?e.length?e.forEach((o,n)=>{let y=s+"["+(t.indices?n:"")+"]";t.noFilesWithArrayNotation&&tt(o,u)&&(y=s),X(o,t,l,y)}):t.allowEmptyArrays&&l.append(s+"[]",""):et(e)?l.append(s,e.toISOString()):j(e)&&!fe(e,u)?Object.keys(e).forEach(o=>{const n=e[o];if(te(n))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);const y=s?t.dotsForObjectNotation?s+"."+o:s+"["+o+"]":o;X(n,t,l,y)}):l.append(s,e)),l}var at={serialize:X};const lt={class:"text-h6 text-center"},nt=ne({__name:"ProductForm",props:{update:null},emits:["completed"],setup(e,{emit:t}){const l=e,s=me(ie),u=g(()=>s.categories),o=A(),n=A({category_id:1,description:"",image:"",production_price:0,sell_price:0,title:"",top_price:0,onsale:!1}),y=g(()=>Boolean(l.update));async function P(){try{let V;n.value.image=o.value;const c=at.serialize(n.value,{nullsAsUndefineds:!0,booleansAsIntegers:!0});console.log({form:n.value}),y.value&&l.update?V=(await s.updateProduct(l.update.id,c)).data:V=(await s.storeProduct(c)).data,t("completed",V)}catch(V){K.axiosError(V)}}return oe(()=>{l.update&&(n.value={category_id:l.update.category.id,description:l.update.description,image:l.update.image,onsale:l.update.onsale,production_price:l.update.production_price,sell_price:l.update.sell_price,title:l.update.title,top_price:l.update.top_price})}),(V,c)=>($(),ue(ce,null,{default:x(()=>[m(Ke,{onSubmit:Ne(P,["prevent"])},{default:x(()=>[m(B,null,{default:x(()=>[re("div",lt,ke(q(y)?"Actualizar":"Crear")+" Producto ",1)]),_:1}),m(B,{class:"q-gutter-y-sm"},{default:x(()=>[m(O,{modelValue:n.value.title,"onUpdate:modelValue":c[0]||(c[0]=p=>n.value.title=p),type:"text",label:"Nombre",required:""},null,8,["modelValue"]),m(O,{modelValue:n.value.description,"onUpdate:modelValue":c[1]||(c[1]=p=>n.value.description=p),type:"textarea",label:"Detalles",required:""},null,8,["modelValue"]),m(Le,{modelValue:n.value.category_id,"onUpdate:modelValue":c[2]||(c[2]=p=>n.value.category_id=p),options:q(u),"emit-value":"","map-options":"","option-label":"title","option-value":"id",label:"Categoria"},null,8,["modelValue","options"]),m(He,{outlined:"",modelValue:o.value,"onUpdate:modelValue":c[3]||(c[3]=p=>o.value=p),accept:".jpg, image/*",label:"Imagen"},{prepend:x(()=>[m(ze,{name:"mdi-image"})]),_:1},8,["modelValue"]),m(we,{modelValue:n.value.onsale,"onUpdate:modelValue":c[4]||(c[4]=p=>n.value.onsale=p),color:"green",label:"Disponible"},null,8,["modelValue"]),m(O,{modelValue:n.value.production_price,"onUpdate:modelValue":c[5]||(c[5]=p=>n.value.production_price=p),type:"number",styp:"0.01",label:"Precio de Producci\xF3n",prefix:"$"},null,8,["modelValue"]),m(O,{modelValue:n.value.sell_price,"onUpdate:modelValue":c[6]||(c[6]=p=>n.value.sell_price=p),type:"number",styp:"0.01",label:"Precio de Venta",prefix:"$",required:""},null,8,["modelValue"]),m(O,{modelValue:n.value.top_price,"onUpdate:modelValue":c[7]||(c[7]=p=>n.value.top_price=p),type:"number",styp:"0.01",label:"Precio de Superable",prefix:"$"},null,8,["modelValue"])]),_:1}),m(se,null,{default:x(()=>[m(de,{color:"primary",icon:"mdi-check",label:"Guardar",type:"submit",class:"full-width"})]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}}),it={class:"row q-col-gutter-sm"},Ft=ne({__name:"MenuPage",setup(e){const t=me(ie),l=A(!1),s=A(!1),u=A({data:[],links:{},meta:{current_page:0}}),o=g(()=>u.value.meta.last_page?Number(u.value.meta.last_page):u.value.meta.current_page),n=A(),y=g(()=>u.value.data);function P(b){n.value=b,l.value=!0}function V(b){n.value=b||void 0,l.value=!1,s.value=!0}async function c(b){await k(b),Ee()}async function p(b){Oe.create({title:"Eliminar Producto",message:`Desea eliminar el producto ${b.title}?`,ok:"Eliminar",cancel:"Cancelar"}).onOk(async()=>{try{await t.destroyProduct(b.id),N()}catch(i){K.axiosError(i)}})}function N(){s.value=!1,l.value=!1,n.value=void 0,k()}async function k(b=1){try{u.value=(await t.list(b)).data}catch(i){K.axiosError(i)}}return oe(async()=>{Ue("Menu"),await k()}),(b,i)=>($(),W(ee,null,[m(Te,{padding:""},{default:x(()=>[m(ce,{class:"no-box-shadow"},{default:x(()=>[m(B,null,{default:x(()=>[m(de,{color:"primary",icon:"mdi-plus",label:"A\xF1adir",class:"full-width",onClick:i[0]||(i[0]=v=>V(void 0))})]),_:1})]),_:1}),m(B,{class:"q-px-none"},{default:x(()=>[re("div",it,[($(!0),W(ee,null,Qe(q(y),(v,I)=>($(),W("div",{class:$e(q(qe)),key:`product-${v.id}-${I}`},[m(je,{data:v,onClick:a=>P(v)},null,8,["data","onClick"])],2))),128))])]),_:1}),m(se,{class:"q-pa-lg flex flex-center"},{default:x(()=>[m(Me,{modelValue:u.value.meta.current_page,"onUpdate:modelValue":[i[1]||(i[1]=v=>u.value.meta.current_page=v),i[2]||(i[2]=v=>c(v))],max:q(o),input:""},null,8,["modelValue","max"])]),_:1})]),_:1}),m(Z,{modelValue:s.value,"onUpdate:modelValue":i[3]||(i[3]=v=>s.value=v)},{default:x(()=>[m(nt,{class:"dialog-form",update:n.value,onCompleted:N},null,8,["update"])]),_:1},8,["modelValue"]),n.value?($(),ue(Z,{key:0,modelValue:l.value,"onUpdate:modelValue":i[4]||(i[4]=v=>l.value=v)},{default:x(()=>[m(Be,{data:n.value,editable:"",class:"dialog-form",onEdit:V,onRemove:p},null,8,["data"])]),_:1},8,["modelValue"])):Ie("",!0)],64))}});export{Ft as default};