import{g as L,i as G,h as R,l as k,p as B,c as h,j as g,k as I,m as _,n as $,q,s as T,t as E,v as N,x as J,y as Q,z as X,A as Y,r as p,B as V,C as W,D as P,E as x,F as Z,G as ee}from"./index.04fb470e.js";var le=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:o}}=$(),e=G(k,R);if(e===R)return console.error("QPageContainer needs to be child of QLayout"),R;B(_,!0);const r=h(()=>{const a={};return e.header.space===!0&&(a.paddingTop=`${e.header.size}px`),e.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(a.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),a});return()=>g("div",{class:"q-page-container",style:r.value},I(m.default))}});const{passive:j}=Q,te=["both","horizontal","vertical"];var ne=L({name:"QScrollObserver",props:{axis:{type:String,validator:t=>te.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:m}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,a;q(()=>t.scrollTarget,()=>{l(),f()});function c(){e!==null&&e();const v=Math.max(0,X(r)),y=Y(r),u={top:v-o.position.top,left:y-o.position.left};if(t.axis==="vertical"&&u.top===0||t.axis==="horizontal"&&u.left===0)return;const w=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";o.position={top:v,left:y},o.directionChanged=o.direction!==w,o.delta=u,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),m("scroll",{...o})}function f(){r=J(a,t.scrollTarget),r.addEventListener("scroll",i,j),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,j),r=void 0)}function i(v){if(v===!0||t.debounce===0||t.debounce==="0")c();else if(e===null){const[y,u]=t.debounce?[setTimeout(c,t.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];e=()=>{u(y),e=null}}}const{proxy:d}=$();return q(()=>d.$q.lang.rtl,c),T(()=>{a=d.$el.parentNode,f()}),E(()=>{e!==null&&e(),l()}),Object.assign(d,{trigger:i,getPosition:()=>o}),N}});function ie(){const t=p(!V.value);return t.value===!1&&T(()=>{t.value=!0}),t}const A=typeof ResizeObserver!="undefined",D=A===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var M=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:m}){let o=null,e,r={width:-1,height:-1};function a(l){l===!0||t.debounce===0||t.debounce==="0"?c():o===null&&(o=setTimeout(c,t.debounce))}function c(){if(clearTimeout(o),o=null,e){const{offsetWidth:l,offsetHeight:i}=e;(l!==r.width||i!==r.height)&&(r={width:l,height:i},m("resize",r))}}const{proxy:f}=$();if(A===!0){let l;const i=d=>{e=f.$el.parentNode,e?(l=new ResizeObserver(a),l.observe(e),c()):d!==!0&&W(()=>{i(!0)})};return T(()=>{i()}),E(()=>{clearTimeout(o),l!==void 0&&(l.disconnect!==void 0?l.disconnect():e&&l.unobserve(e))}),N}else{let d=function(){clearTimeout(o),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,Q.passive),i=void 0)},v=function(){d(),e&&e.contentDocument&&(i=e.contentDocument.defaultView,i.addEventListener("resize",a,Q.passive),c())};const l=ie();let i;return T(()=>{W(()=>{e=f.$el,e&&v()})}),E(d),f.trigger=a,()=>{if(l.value===!0)return g("object",{style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:v})}}}}),re=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:o}){const{proxy:{$q:e}}=$(),r=p(null),a=p(e.screen.height),c=p(t.container===!0?0:e.screen.width),f=p({position:0,direction:"down",inflectionPoint:0}),l=p(0),i=p(V.value===!0?0:P()),d=h(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),v=h(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),y=h(()=>i.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),u=h(()=>i.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(n){if(t.container===!0||document.qScrollPrevented!==!0){const s={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};f.value=s,t.onScroll!==void 0&&o("scroll",s)}}function K(n){const{height:s,width:b}=n;let z=!1;a.value!==s&&(z=!0,a.value=s,t.onScrollHeight!==void 0&&o("scrollHeight",s),H()),c.value!==b&&(z=!0,c.value=b),z===!0&&t.onResize!==void 0&&o("resize",n)}function U({height:n}){l.value!==n&&(l.value=n,H())}function H(){if(t.container===!0){const n=a.value>l.value?P():0;i.value!==n&&(i.value=n)}}let S;const O={instances:{},view:h(()=>t.view),isContainer:h(()=>t.container),rootRef:r,height:a,containerHeight:l,scrollbarWidth:i,totalWidth:h(()=>c.value+i.value),rows:h(()=>{const n=t.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:f,animate(){S!==void 0?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),S=void 0},155)},update(n,s,b){O[n][s]=b}};if(B(k,O),P()>0){let b=function(){n=null,s.classList.remove("hide-scrollbar")},z=function(){if(n===null){if(s.scrollHeight>e.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(b,300)},C=function(F){n!==null&&F==="remove"&&(clearTimeout(n),b()),window[`${F}EventListener`]("resize",z)},n=null;const s=document.body;q(()=>t.container!==!0?"add":"remove",C),t.container!==!0&&C("add"),Z(()=>{C("remove")})}return()=>{const n=ee(m.default,[g(ne,{onScroll:w}),g(M,{onResize:K})]),s=g("div",{class:d.value,style:v.value,ref:t.container===!0?void 0:r,tabindex:-1},n);return t.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(M,{onResize:U}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:u.value},[s])])]):s}}});export{re as Q,le as a,M as b};