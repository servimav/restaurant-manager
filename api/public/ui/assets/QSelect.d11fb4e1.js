import{g as Xe,aW as Ye,aY as Vt,b1 as pt,aZ as kt,r as F,ao as Mt,a7 as ze,C as ue,a5 as dt,q as N,s as Nt,t as qe,n as Re,aa as jt,y as je,b5 as ft,a3 as Qt,D as Ut,P as Xt,S as Yt,b6 as Gt,V as Zt,c as V,W as Jt,aT as el,ab as tl,b7 as ll,Y as nl,b8 as ul,b9 as ol,a9 as il,ba as al,bb as vt,x as rl,j as M,k as sl,T as cl,bc as dl,bd as fl,be as vl,bf as ml,a1 as ve,v as hl,bg as gl,ah as Sl,aU as yl,aV as bl,aX as wl,a_ as xl,bh as Cl,bi as Vl,a0 as pl,aS as Ee,a8 as pe,aR as kl,au as Ml,b2 as mt,G as Al,bj as El}from"./index.04fb470e.js";import{Q as Tl}from"./QChip.2f03b717.js";import{c as zl,b as ql,a as Hl,Q as Fl}from"./selection.07c9d277.js";import{r as Qe}from"./rtl.b51694b1.js";import{n as ht}from"./format.3e32b8d9.js";var Ol=Xe({name:"QField",inheritAttrs:!1,props:Ye,emits:Vt,setup(){return pt(kt())}});const Il={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Bl({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:o,proxy:v,emit:u}=Re(),d=F(null);let g;function h(i){return d.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const y={};n===void 0&&(Object.assign(y,{hide(i){v.hide(i)},toggle(i){v.toggle(i),i.qAnchorHandled=!0},toggleKey(i){Mt(i,13)===!0&&y.toggle(i)},contextClick(i){v.hide(i),ze(i),ue(()=>{v.show(i),i.qAnchorHandled=!0})},prevent:ze,mobileTouch(i){if(y.mobileCleanup(i),h(i)!==!0)return;v.hide(i),d.value.classList.add("non-selectable");const z=i.target;dt(y,"anchor",[[z,"touchmove","mobileCleanup","passive"],[z,"touchend","mobileCleanup","passive"],[z,"touchcancel","mobileCleanup","passive"],[d.value,"contextmenu","prevent","notPassive"]]),g=setTimeout(()=>{v.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){d.value.classList.remove("non-selectable"),clearTimeout(g),e.value===!0&&i!==void 0&&zl()}}),n=function(i=o.contextMenu){if(o.noParentEvent===!0||d.value===null)return;let z;i===!0?v.$q.platform.is.mobile===!0?z=[[d.value,"touchstart","mobileTouch","passive"]]:z=[[d.value,"mousedown","hide","passive"],[d.value,"contextmenu","contextClick","notPassive"]]:z=[[d.value,"click","toggle","passive"],[d.value,"keyup","toggleKey","passive"]],dt(y,"anchor",z)});function s(){jt(y,"anchor")}function p(i){for(d.value=i;d.value.classList.contains("q-anchor--skip");)d.value=d.value.parentNode;n()}function k(){if(o.target===!1||o.target===""||v.$el.parentNode===null)d.value=null;else if(o.target===!0)p(v.$el.parentNode);else{let i=o.target;if(typeof o.target=="string")try{i=document.querySelector(o.target)}catch{i=void 0}i!=null?(d.value=i.$el||i,n()):(d.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return N(()=>o.contextMenu,i=>{d.value!==null&&(s(),n(i))}),N(()=>o.target,()=>{d.value!==null&&s(),k()}),N(()=>o.noParentEvent,i=>{d.value!==null&&(i===!0?s():n())}),Nt(()=>{k(),l!==!0&&o.modelValue===!0&&d.value===null&&u("update:modelValue",!1)}),qe(()=>{clearTimeout(g),s()}),{anchorEl:d,canShow:h,anchorEvents:y}}function Ll(e,l){const n=F(null);let o;function v(g,h){const y=`${h!==void 0?"add":"remove"}EventListener`,s=h!==void 0?h:o;g!==window&&g[y]("scroll",s,je.passive),window[y]("scroll",s,je.passive),o=h}function u(){n.value!==null&&(v(n.value),n.value=null)}const d=N(()=>e.noParentEvent,()=>{n.value!==null&&(u(),l())});return qe(d),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:v}}let At;const{notPassiveCapture:Le}=je,me=[];function Pe(e){clearTimeout(At);const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=ft.length-1;for(;n>=0;){const o=ft[n].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=me.length-1;o>=0;o--){const v=me[o];if((v.anchorEl.value===null||v.anchorEl.value.contains(l)===!1)&&(l===document.body||v.innerRef.value!==null&&v.innerRef.value.contains(l)===!1))e.qClickOutside=!0,v.onClickOutside(e);else return}}function Pl(e){me.push(e),me.length===1&&(document.addEventListener("mousedown",Pe,Le),document.addEventListener("touchstart",Pe,Le))}function gt(e){const l=me.findIndex(n=>n===e);l>-1&&(me.splice(l,1),me.length===0&&(clearTimeout(At),document.removeEventListener("mousedown",Pe,Le),document.removeEventListener("touchstart",Pe,Le)))}let St,yt;function bt(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Rl(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Ue={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Ue[`${e}#ltr`]=e,Ue[`${e}#rtl`]=e});function wt(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:Ue[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function _l(e,l){let{top:n,left:o,right:v,bottom:u,width:d,height:g}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],o-=l[0],u+=l[1],v+=l[0],d+=l[0],g+=l[1]),{top:n,left:o,right:v,bottom:u,width:d,height:g,middle:o+(v-o)/2,center:n+(u-n)/2}}function Dl(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Wl(e){if(Qt.is.ios===!0&&window.visualViewport!==void 0){const g=document.body.style,{offsetLeft:h,offsetTop:y}=window.visualViewport;h!==St&&(g.setProperty("--q-pe-left",h+"px"),St=h),y!==yt&&(g.setProperty("--q-pe-top",y+"px"),yt=y)}let l;const{scrollLeft:n,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)l=_l(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:g,left:h}=e.anchorEl.getBoundingClientRect(),y=g+e.absoluteOffset.top,s=h+e.absoluteOffset.left;l={top:y,left:s,width:1,height:1,right:s+1,center:y,middle:s,bottom:y+1}}let v={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(v.minWidth=l.width+"px",e.cover===!0&&(v.minHeight=l.height+"px")),Object.assign(e.el.style,v);const u=Dl(e.el),d={top:l[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:l[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};$l(d,l,u,e.anchorOrigin,e.selfOrigin),v={top:d.top+"px",left:d.left+"px"},d.maxHeight!==void 0&&(v.maxHeight=d.maxHeight+"px",l.height>d.maxHeight&&(v.minHeight=v.maxHeight)),d.maxWidth!==void 0&&(v.maxWidth=d.maxWidth+"px",l.width>d.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(e.el.style,v),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function $l(e,l,n,o,v){const u=n.bottom,d=n.right,g=Ut(),h=window.innerHeight-g,y=document.body.clientWidth;if(e.top<0||e.top+u>h)if(v.vertical==="center")e.top=l[o.vertical]>h/2?Math.max(0,h-u):0,e.maxHeight=Math.min(u,h);else if(l[o.vertical]>h/2){const s=Math.min(h,o.vertical==="center"?l.center:o.vertical===v.vertical?l.bottom:l.top);e.maxHeight=Math.min(u,s),e.top=Math.max(0,s-u)}else e.top=Math.max(0,o.vertical==="center"?l.center:o.vertical===v.vertical?l.top:l.bottom),e.maxHeight=Math.min(u,h-e.top);if(e.left<0||e.left+d>y)if(e.maxWidth=Math.min(d,y),v.horizontal==="middle")e.left=l[o.horizontal]>y/2?Math.max(0,y-d):0;else if(l[o.horizontal]>y/2){const s=Math.min(y,o.horizontal==="middle"?l.middle:o.horizontal===v.horizontal?l.right:l.left);e.maxWidth=Math.min(d,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?l.middle:o.horizontal===v.horizontal?l.left:l.right),e.maxWidth=Math.min(d,y-e.left)}var Kl=Xe({name:"QMenu",inheritAttrs:!1,props:{...Il,...Xt,...Yt,...Gt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:bt},self:{type:String,validator:bt},offset:{type:Array,validator:Rl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Zt,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:o}){let v=null,u,d,g;const h=Re(),{proxy:y}=h,{$q:s}=y,p=F(null),k=F(!1),i=V(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),z=Jt(e,s),{registerTick:L,removeTick:j}=el(),{registerTimeout:Q}=tl(),{transitionProps:R,transitionStyle:U}=ll(e),{localScrollTarget:q,changeScrollEvent:H,unconfigureScrollTarget:X}=Ll(e,x),{anchorEl:$,canShow:oe}=Bl({showing:k}),{hide:ie}=nl({showing:k,canShow:oe,handleShow:m,handleHide:c,hideOnRouteChange:i,processOnMount:!0}),{showPortal:G,hidePortal:W,renderPortal:ae}=ul(h,p,B),te={anchorEl:$,innerRef:p,onClickOutside(a){if(e.persistent!==!0&&k.value===!0)return ie(a),(a.type==="touchstart"||a.target.classList.contains("q-dialog__backdrop"))&&ve(a),!0}},re=V(()=>wt(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),le=V(()=>e.cover===!0?re.value:wt(e.self||"top start",s.lang.rtl)),Z=V(()=>(e.square===!0?" q-menu--square":"")+(z.value===!0?" q-menu--dark q-dark":"")),he=V(()=>e.autoClose===!0?{onClick:E}:{}),se=V(()=>k.value===!0&&e.persistent!==!0);N(se,a=>{a===!0?(dl(C),Pl(te)):(vt(C),gt(te))});function J(){fl(()=>{let a=p.value;a&&a.contains(document.activeElement)!==!0&&(a=a.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||a.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||a.querySelector("[autofocus], [data-autofocus]")||a,a.focus({preventScroll:!0}))})}function m(a){if(v=e.noRefocus===!1?document.activeElement:null,ol(I),G(),x(),u=void 0,a!==void 0&&(e.touchPosition||e.contextMenu)){const _=il(a);if(_.left!==void 0){const{top:ne,left:ce}=$.value.getBoundingClientRect();u={left:_.left-ce,top:_.top-ne}}}d===void 0&&(d=N(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,b)),e.noFocus!==!0&&document.activeElement.blur(),L(()=>{b(),e.noFocus!==!0&&J()}),Q(()=>{s.platform.is.ios===!0&&(g=e.autoClose,p.value.click()),b(),G(!0),n("show",a)},e.transitionDuration)}function c(a){j(),W(),S(!0),v!==null&&(a===void 0||a.qClickOutside!==!0)&&(v.focus(),v=null),Q(()=>{W(!0),n("hide",a)},e.transitionDuration)}function S(a){u=void 0,d!==void 0&&(d(),d=void 0),(a===!0||k.value===!0)&&(al(I),X(),gt(te),vt(C)),a!==!0&&(v=null)}function x(){($.value!==null||e.scrollTarget!==void 0)&&(q.value=rl($.value,e.scrollTarget),H(q.value,b))}function E(a){g!==!0?(vl(y,a),n("click",a)):g=!1}function I(a){se.value===!0&&e.noFocus!==!0&&ml(p.value,a.target)!==!0&&J()}function C(a){n("escapeKey"),ie(a)}function b(){const a=p.value;a===null||$.value===null||Wl({el:a,offset:e.offset,anchorEl:$.value,anchorOrigin:re.value,selfOrigin:le.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function B(){return M(cl,R.value,()=>k.value===!0?M("div",{role:"menu",...o,ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,o.class],style:[o.style,U.value],...he.value},sl(l.default)):null)}return qe(S),Object.assign(y,{focus:J,updatePosition:b}),ae}});const Y=1e3,Nl=["start","center","end","start-force","center-force","end-force"],Et=Array.prototype.filter,jl=window.getComputedStyle(document.body).overflowAnchor===void 0?hl:function(e,l){e!==null&&(cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;const n=e.children||[];Et.call(n,v=>v.dataset&&v.dataset.qVsAnchor!==void 0).forEach(v=>{delete v.dataset.qVsAnchor});const o=n[l];o&&o.dataset&&(o.dataset.qVsAnchor="")}))};function ke(e,l){return e+l}function Ne(e,l,n,o,v,u,d,g){const h=e===window?document.scrollingElement||document.documentElement:e,y=v===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-d-g,scrollMaxSize:0,offsetStart:-d,offsetEnd:-g};if(v===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=h.scrollLeft,s.scrollViewSize+=h.clientWidth),s.scrollMaxSize=h.scrollWidth,u===!0&&(s.scrollStart=(Qe===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=h.scrollTop,s.scrollViewSize+=h.clientHeight),s.scrollMaxSize=h.scrollHeight),n!==null)for(let p=n.previousElementSibling;p!==null;p=p.previousElementSibling)p.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=p[y]);if(o!==null)for(let p=o.nextElementSibling;p!==null;p=p.nextElementSibling)p.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=p[y]);if(l!==e){const p=h.getBoundingClientRect(),k=l.getBoundingClientRect();v===!0?(s.offsetStart+=k.left-p.left,s.offsetEnd-=k.width):(s.offsetStart+=k.top-p.top,s.offsetEnd-=k.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function xt(e,l,n,o){l==="end"&&(l=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(o===!0&&(l=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-l),window.scrollTo(l,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,l):n===!0?(o===!0&&(l=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-l),e.scrollLeft=l):e.scrollTop=l}function Te(e,l,n,o){if(n>=o)return 0;const v=l.length,u=Math.floor(n/Y),d=Math.floor((o-1)/Y)+1;let g=e.slice(u,d).reduce(ke,0);return n%Y!==0&&(g-=l.slice(u*Y,n).reduce(ke,0)),o%Y!==0&&o!==v&&(g-=l.slice(o,d*Y).reduce(ke,0)),g}const Ql={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ul={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Ql};function Xl({virtualScrollLength:e,getVirtualScrollTarget:l,getVirtualScrollEl:n,virtualScrollItemSizeComputed:o}){const v=Re(),{props:u,emit:d,proxy:g}=v,{$q:h}=g;let y,s,p,k=[],i;const z=F(0),L=F(0),j=F({}),Q=F(null),R=F(null),U=F(null),q=F({from:0,to:0}),H=V(()=>u.tableColspan!==void 0?u.tableColspan:100);o===void 0&&(o=V(()=>u.virtualScrollItemSize));const X=V(()=>o.value+";"+u.virtualScrollHorizontal),$=V(()=>X.value+";"+u.virtualScrollSliceRatioBefore+";"+u.virtualScrollSliceRatioAfter);N($,()=>{Z()}),N(X,oe);function oe(){le(s,!0)}function ie(c){le(c===void 0?s:c)}function G(c,S){const x=l();if(x==null||x.nodeType===8)return;const E=Ne(x,n(),Q.value,R.value,u.virtualScrollHorizontal,h.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd);p!==E.scrollViewSize&&Z(E.scrollViewSize),ae(x,E,Math.min(e.value-1,Math.max(0,parseInt(c,10)||0)),0,Nl.indexOf(S)>-1?S:s>-1&&c>s?"end":"start")}function W(){const c=l();if(c==null||c.nodeType===8)return;const S=Ne(c,n(),Q.value,R.value,u.virtualScrollHorizontal,h.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd),x=e.value-1,E=S.scrollMaxSize-S.offsetStart-S.offsetEnd-L.value;if(y===S.scrollStart)return;if(S.scrollMaxSize<=0){ae(c,S,0,0);return}p!==S.scrollViewSize&&Z(S.scrollViewSize),te(q.value.from);const I=Math.floor(S.scrollMaxSize-Math.max(S.scrollViewSize,S.offsetEnd)-Math.min(i[x],S.scrollViewSize/2));if(I>0&&Math.ceil(S.scrollStart)>=I){ae(c,S,x,S.scrollMaxSize-S.offsetEnd-k.reduce(ke,0));return}let C=0,b=S.scrollStart-S.offsetStart,B=b;if(b<=E&&b+S.scrollViewSize>=z.value)b-=z.value,C=q.value.from,B=b;else for(let a=0;b>=k[a]&&C<x;a++)b-=k[a],C+=Y;for(;b>0&&C<x;)b-=i[C],b>-S.scrollViewSize?(C++,B=b):B=i[C]+b;ae(c,S,C,B)}function ae(c,S,x,E,I){const C=typeof I=="string"&&I.indexOf("-force")>-1,b=C===!0?I.replace("-force",""):I,B=b!==void 0?b:"start";let a=Math.max(0,x-j.value[B]),_=a+j.value.total;_>e.value&&(_=e.value,a=Math.max(0,_-j.value.total)),y=S.scrollStart;const ne=a!==q.value.from||_!==q.value.to;if(ne===!1&&b===void 0){se(x);return}const{activeElement:ce}=document,ee=U.value;ne===!0&&ee!==null&&ee!==ce&&ee.contains(ce)===!0&&(ee.addEventListener("focusout",re),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",re)})),jl(ee,x-a);const He=b!==void 0?i.slice(a,x).reduce(ke,0):0;if(ne===!0){const ge=_>=q.value.from&&a<=q.value.to?q.value.to:_;q.value={from:a,to:ge},z.value=Te(k,i,0,a),L.value=Te(k,i,_,e.value),requestAnimationFrame(()=>{q.value.to!==_&&y===S.scrollStart&&(q.value={from:q.value.from,to:_},L.value=Te(k,i,_,e.value))})}requestAnimationFrame(()=>{if(y!==S.scrollStart)return;ne===!0&&te(a);const ge=i.slice(a,x).reduce(ke,0),Se=ge+S.offsetStart+z.value,Fe=Se+i[x];let Me=Se+E;if(b!==void 0){const K=ge-He,P=S.scrollStart+K;Me=C!==!0&&P<Se&&Fe<P+S.scrollViewSize?P:b==="end"?Fe-S.scrollViewSize:Se-(b==="start"?0:Math.round((S.scrollViewSize-i[x])/2))}y=Me,xt(c,Me,u.virtualScrollHorizontal,h.lang.rtl),se(x)})}function te(c){const S=U.value;if(S){const x=Et.call(S.children,a=>a.classList&&a.classList.contains("q-virtual-scroll--skip")===!1),E=x.length,I=u.virtualScrollHorizontal===!0?a=>a.getBoundingClientRect().width:a=>a.offsetHeight;let C=c,b,B;for(let a=0;a<E;){for(b=I(x[a]),a++;a<E&&x[a].classList.contains("q-virtual-scroll--with-prev")===!0;)b+=I(x[a]),a++;B=b-i[C],B!==0&&(i[C]+=B,k[Math.floor(C/Y)]+=B),C++}}}function re(){U.value!==null&&U.value!==void 0&&U.value.focus()}function le(c,S){const x=1*o.value;(S===!0||Array.isArray(i)===!1)&&(i=[]);const E=i.length;i.length=e.value;for(let C=e.value-1;C>=E;C--)i[C]=x;const I=Math.floor((e.value-1)/Y);k=[];for(let C=0;C<=I;C++){let b=0;const B=Math.min((C+1)*Y,e.value);for(let a=C*Y;a<B;a++)b+=i[a];k.push(b)}s=-1,y=void 0,z.value=Te(k,i,0,q.value.from),L.value=Te(k,i,q.value.to,e.value),c>=0?(te(q.value.from),ue(()=>{G(c)})):J()}function Z(c){if(c===void 0&&typeof window!="undefined"){const b=l();b!=null&&b.nodeType!==8&&(c=Ne(b,n(),Q.value,R.value,u.virtualScrollHorizontal,h.lang.rtl,u.virtualScrollStickySizeStart,u.virtualScrollStickySizeEnd).scrollViewSize)}p=c;const S=parseFloat(u.virtualScrollSliceRatioBefore)||0,x=parseFloat(u.virtualScrollSliceRatioAfter)||0,E=1+S+x,I=c===void 0||c<=0?1:Math.ceil(c/o.value),C=Math.max(1,I,Math.ceil((u.virtualScrollSliceSize>0?u.virtualScrollSliceSize:10)/E));j.value={total:Math.ceil(C*E),start:Math.ceil(C*S),center:Math.ceil(C*(.5+S)),end:Math.ceil(C*(1+S)),view:I}}function he(c,S){const x=u.virtualScrollHorizontal===!0?"width":"height",E={["--q-virtual-scroll-item-"+x]:o.value+"px"};return[c==="tbody"?M(c,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[M("tr",[M("td",{style:{[x]:`${z.value}px`,...E},colspan:H.value})])]):M(c,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[x]:`${z.value}px`,...E}}),M(c,{class:"q-virtual-scroll__content",key:"content",ref:U,tabindex:-1},S.flat()),c==="tbody"?M(c,{class:"q-virtual-scroll__padding",key:"after",ref:R},[M("tr",[M("td",{style:{[x]:`${L.value}px`,...E},colspan:H.value})])]):M(c,{class:"q-virtual-scroll__padding",key:"after",ref:R,style:{[x]:`${L.value}px`,...E}})]}function se(c){s!==c&&(u.onVirtualScroll!==void 0&&d("virtualScroll",{index:c,from:q.value.from,to:q.value.to-1,direction:c<s?"decrease":"increase",ref:g}),s=c)}Z();const J=gl(W,h.platform.is.ios===!0?120:35);Sl(()=>{Z()});let m=!1;return yl(()=>{m=!0}),bl(()=>{if(m!==!0)return;const c=l();y!==void 0&&c!==void 0&&c!==null&&c.nodeType!==8?xt(c,y,u.virtualScrollHorizontal,h.lang.rtl):G(s)}),qe(()=>{J.cancel()}),Object.assign(g,{scrollTo:G,reset:oe,refresh:ie}),{virtualScrollSliceRange:q,virtualScrollSliceSizeComputed:j,setVirtualScrollSize:Z,onVirtualScrollEvt:J,localResetVirtualScroll:le,padVirtualScroll:he,scrollTo:G,reset:oe,refresh:ie}}const Ct=e=>["add","add-unique","toggle"].includes(e),Yl=".*+?^${}()|[]\\",Gl=Object.keys(Ye);var nn=Xe({name:"QSelect",inheritAttrs:!1,props:{...Ul,...wl,...Ye,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Ct},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...Vt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:l,emit:n}){const{proxy:o}=Re(),{$q:v}=o,u=F(!1),d=F(!1),g=F(-1),h=F(""),y=F(!1),s=F(!1);let p,k,i,z,L,j,Q,R,U;const q=F(null),H=F(null),X=F(null),$=F(null),oe=F(null),ie=xl(e),G=El(it),W=V(()=>Array.isArray(e.options)?e.options.length:0),ae=V(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:te,virtualScrollSliceSizeComputed:re,localResetVirtualScroll:le,padVirtualScroll:Z,onVirtualScrollEvt:he,scrollTo:se,setVirtualScrollSize:J}=Xl({virtualScrollLength:W,getVirtualScrollTarget:Ht,getVirtualScrollEl:ut,virtualScrollItemSizeComputed:ae}),m=kt(),c=V(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,f=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const r=e.mapOptions===!0&&k!==void 0?k:[],w=f.map(T=>qt(T,r));return e.modelValue===null&&t===!0?w.filter(T=>T!==null):w}return f}),S=V(()=>{const t={};return Gl.forEach(f=>{const r=e[f];r!==void 0&&(t[f]=r)}),t}),x=V(()=>e.optionsDark===null?m.isDark.value:e.optionsDark),E=V(()=>mt(c.value)),I=V(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||c.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),C=V(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),b=V(()=>W.value===0),B=V(()=>c.value.map(t=>P.value(t)).join(", ")),a=V(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),_=V(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||c.value.some(a.value))),ne=V(()=>m.focused.value===!0?e.tabindex:-1),ce=V(()=>({tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":u.value===!0?"true":"false","aria-owns":`${m.targetUid.value}_lb`,"aria-controls":`${m.targetUid.value}_lb`})),ee=V(()=>{const t={id:`${m.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"};return g.value>=0&&(t["aria-activedescendant"]=`${m.targetUid.value}_${g.value}`),t}),He=V(()=>c.value.map((t,f)=>({index:f,opt:t,html:a.value(t),selected:!0,removeAtIndex:zt,toggleOption:de,tabindex:ne.value}))),ge=V(()=>{if(W.value===0)return[];const{from:t,to:f}=te.value;return e.options.slice(t,f).map((r,w)=>{const T=ye.value(r)===!0,A=t+w,O={clickable:!0,active:!1,activeClass:Me.value,manualFocus:!0,focused:!1,disable:T,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option",id:`${m.targetUid.value}_${A}`,onClick:()=>{de(r)}};return T!==!0&&(We(r)===!0&&(O.active=!0),g.value===A&&(O.focused=!0),O["aria-selected"]=O.active===!0?"true":"false",v.platform.is.desktop===!0&&(O.onMousemove=()=>{u.value===!0&&be(A)})),{index:A,opt:r,html:a.value(r),label:P.value(r),selected:O.active,focused:O.focused,toggleOption:de,setOptionIndex:be,itemProps:O}})}),Se=V(()=>e.dropdownIcon!==void 0?e.dropdownIcon:v.iconSet.arrow.dropdown),Fe=V(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Me=V(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),K=V(()=>De(e.optionValue,"value")),P=V(()=>De(e.optionLabel,"label")),ye=V(()=>De(e.optionDisable,"disable")),Oe=V(()=>c.value.map(t=>K.value(t))),Tt=V(()=>{const t={onInput:it,onChange:G,onKeydown:nt,onKeyup:tt,onKeypress:lt,onFocus:Je,onClick(f){i===!0&&pe(f)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=G,t});N(c,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&m.innerLoading.value!==!0&&(d.value!==!0&&u.value!==!0||E.value!==!0)&&(z!==!0&&Ve(),(d.value===!0||u.value===!0)&&we(""))},{immediate:!0}),N(()=>e.fillInput,Ve),N(u,$e),N(W,Kt);function Ge(t){return e.emitValue===!0?K.value(t):t}function _e(t){if(t>-1&&t<c.value.length)if(e.multiple===!0){const f=e.modelValue.slice();n("remove",{index:t,value:f.splice(t,1)[0]}),n("update:modelValue",f)}else n("update:modelValue",null)}function zt(t){_e(t),m.focus()}function Ze(t,f){const r=Ge(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(P.value(t),!0,!0),n("update:modelValue",r);return}if(c.value.length===0){n("add",{index:0,value:r}),n("update:modelValue",e.multiple===!0?[r]:r);return}if(f===!0&&We(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const w=e.modelValue.slice();n("add",{index:w.length,value:r}),w.push(r),n("update:modelValue",w)}function de(t,f){if(m.editable.value!==!0||t===void 0||ye.value(t)===!0)return;const r=K.value(t);if(e.multiple!==!0){f!==!0&&(Ae(e.fillInput===!0?P.value(t):"",!0,!0),fe()),H.value!==null&&H.value.focus(),(c.value.length===0||Ee(K.value(c.value[0]),r)!==!0)&&n("update:modelValue",e.emitValue===!0?r:t);return}if((i!==!0||y.value===!0)&&m.focus(),Je(),c.value.length===0){const A=e.emitValue===!0?r:t;n("add",{index:0,value:A}),n("update:modelValue",e.multiple===!0?[A]:A);return}const w=e.modelValue.slice(),T=Oe.value.findIndex(A=>Ee(A,r));if(T>-1)n("remove",{index:T,value:w.splice(T,1)[0]});else{if(e.maxValues!==void 0&&w.length>=e.maxValues)return;const A=e.emitValue===!0?r:t;n("add",{index:w.length,value:A}),w.push(A)}n("update:modelValue",w)}function be(t){if(v.platform.is.desktop!==!0)return;const f=t>-1&&t<W.value?t:-1;g.value!==f&&(g.value=f)}function Ie(t=1,f){if(u.value===!0){let r=g.value;do r=ht(r+t,-1,W.value-1);while(r!==-1&&r!==g.value&&ye.value(e.options[r])===!0);g.value!==r&&(be(r),se(r),f!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(r>=0?P.value(e.options[r]):j))}}function qt(t,f){const r=w=>Ee(K.value(w),t);return e.options.find(r)||f.find(r)||t}function De(t,f){const r=t!==void 0?t:f;return typeof r=="function"?r:w=>w!==null&&typeof w=="object"&&r in w?w[r]:w}function We(t){const f=K.value(t);return Oe.value.find(r=>Ee(r,f))!==void 0}function Je(t){e.useInput===!0&&H.value!==null&&(t===void 0||H.value===t.target&&t.target.value===B.value)&&H.value.select()}function et(t){Mt(t,27)===!0&&u.value===!0&&(pe(t),fe(),Ve()),n("keyup",t)}function tt(t){const{value:f}=t.target;if(t.keyCode!==void 0){et(t);return}if(t.target.value="",clearTimeout(p),Ve(),typeof f=="string"&&f.length>0){const r=f.toLocaleLowerCase(),w=A=>{const O=e.options.find(D=>A.value(D).toLocaleLowerCase()===r);return O===void 0?!1:(c.value.indexOf(O)===-1?de(O):fe(),!0)},T=A=>{w(K)!==!0&&(w(P)===!0||A===!0||we(f,!0,()=>T(!0)))};T()}else m.clearValue(t)}function lt(t){n("keypress",t)}function nt(t){if(n("keydown",t),kl(t)===!0)return;const f=h.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),r=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||f===!0);if(t.keyCode===27){ze(t);return}if(t.keyCode===9&&r===!1){xe();return}if(t.target===void 0||t.target.id!==m.targetUid.value)return;if(t.keyCode===40&&m.innerLoading.value!==!0&&u.value===!1){ve(t),Ce();return}if(t.keyCode===8&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?_e(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ve(t),g.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&re.value!==void 0&&(ve(t),g.value=Math.max(-1,Math.min(W.value,g.value+(t.keyCode===33?-1:1)*re.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),Ie(t.keyCode===38?-1:1,e.multiple));const w=W.value;if((R===void 0||U<Date.now())&&(R=""),w>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===t.ctrlKey&&(t.keyCode!==32||R.length>0)){u.value!==!0&&Ce(t);const T=t.key.toLocaleLowerCase(),A=R.length===1&&R[0]===T;U=Date.now()+1500,A===!1&&(ve(t),R+=T);const O=new RegExp("^"+R.split("").map(Ke=>Yl.indexOf(Ke)>-1?"\\"+Ke:Ke).join(".*"),"i");let D=g.value;if(A===!0||D<0||O.test(P.value(e.options[D]))!==!0)do D=ht(D+1,-1,w-1);while(D!==g.value&&(ye.value(e.options[D])===!0||O.test(P.value(e.options[D]))!==!0));g.value!==D&&ue(()=>{be(D),se(D),D>=0&&e.useInput===!0&&e.fillInput===!0&&Be(P.value(e.options[D]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||r===!1))){if(t.keyCode!==9&&ve(t),g.value>-1&&g.value<w){de(e.options[g.value]);return}if(f===!0){const T=(A,O)=>{if(O){if(Ct(O)!==!0)return}else O=e.newValueMode;if(A==null)return;Ae("",e.multiple!==!0,!0),(O==="toggle"?de:Ze)(A,O==="add-unique"),e.multiple!==!0&&(H.value!==null&&H.value.focus(),fe())};if(e.onNewValue!==void 0?n("newValue",h.value,T):T(h.value),e.multiple!==!0)return}u.value===!0?xe():m.innerLoading.value!==!0&&Ce()}}function ut(){return i===!0?oe.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ht(){return ut()}function Ft(){return e.hideSelected===!0?[]:l["selected-item"]!==void 0?He.value.map(t=>l["selected-item"](t)).slice():l.selected!==void 0?[].concat(l.selected()):e.useChips===!0?He.value.map((t,f)=>M(Tl,{key:"option-"+f,removable:m.editable.value===!0&&ye.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ne.value,onRemove(){t.removeAtIndex(f)}},()=>M("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[M("span",{[_.value===!0?"innerHTML":"textContent"]:e.displayValue!==void 0?e.displayValue:B.value})]}function ot(){if(b.value===!0)return l["no-option"]!==void 0?l["no-option"]({inputValue:h.value}):void 0;const t=l.option!==void 0?l.option:r=>M(Fl,{key:r.index,...r.itemProps},()=>M(ql,()=>M(Hl,()=>M("span",{[r.html===!0?"innerHTML":"textContent"]:r.label}))));let f=Z("div",ge.value.map(t));return l["before-options"]!==void 0&&(f=l["before-options"]().concat(f)),Al(l["after-options"],f)}function Ot(t,f){const r=f===!0?{...ce.value,...m.splitAttrs.attributes.value}:void 0,w={ref:f===!0?H:void 0,key:"i_t",class:I.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...r,id:f===!0?m.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Tt.value};return t!==!0&&i===!0&&(Array.isArray(w.class)===!0?w.class=[...w.class,"no-pointer-events"]:w.class+=" no-pointer-events"),M("input",w)}function it(t){clearTimeout(p),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),z=!0,j=h.value,m.focused.value!==!0&&(i!==!0||y.value===!0)&&m.focus(),e.onFilter!==void 0&&(p=setTimeout(()=>{we(h.value)},e.inputDebounce)))}function Be(t){h.value!==t&&(h.value=t,n("inputValue",t))}function Ae(t,f,r){z=r!==!0,e.useInput===!0&&(Be(t),(f===!0||r!==!0)&&(j=t),f!==!0&&we(t))}function we(t,f,r){if(e.onFilter===void 0||f!==!0&&m.focused.value!==!0)return;m.innerLoading.value===!0?n("filterAbort"):(m.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&c.value.length>0&&z!==!0&&t===P.value(c.value[0])&&(t="");const w=setTimeout(()=>{u.value===!0&&(u.value=!1)},10);clearTimeout(L),L=w,n("filter",t,(T,A)=>{(f===!0||m.focused.value===!0)&&L===w&&(clearTimeout(L),typeof T=="function"&&T(),s.value=!1,ue(()=>{m.innerLoading.value=!1,m.editable.value===!0&&(f===!0?u.value===!0&&fe():u.value===!0?$e(!0):u.value=!0),typeof A=="function"&&ue(()=>{A(o)}),typeof r=="function"&&ue(()=>{r(o)})}))},()=>{m.focused.value===!0&&L===w&&(clearTimeout(L),m.innerLoading.value=!1,s.value=!1),u.value===!0&&(u.value=!1)})}function It(){return M(Kl,{ref:X,class:C.value,style:e.popupContentStyle,modelValue:u.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&b.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Fe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:he,onBeforeShow:rt,onBeforeHide:Bt,onShow:Lt},ot)}function Bt(t){st(t),xe()}function Lt(){J()}function Pt(t){pe(t),H.value!==null&&H.value.focus(),y.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Rt(t){pe(t),ue(()=>{y.value=!1})}function _t(){const t=[M(Ol,{class:`col-auto ${m.fieldClass.value}`,...S.value,for:m.targetUid.value,dark:x.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:h.value.length>0,...m.splitAttrs.listeners.value,onFocus:Pt,onBlur:Rt},{...l,rawControl:()=>m.getControl(!0),before:void 0,after:void 0})];return u.value===!0&&t.push(M("div",{ref:oe,class:C.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:ze,onScrollPassive:he},ot())),M(Ml,{ref:$,modelValue:d.value,position:e.useInput===!0?"top":void 0,transitionShow:Q,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:rt,onBeforeHide:Dt,onHide:Wt,onShow:$t},()=>M("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(y.value===!0?" q-select__dialog--focused":"")},t))}function Dt(t){st(t),$.value!==null&&$.value.__updateRefocusTarget(m.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),m.focused.value=!1}function Wt(t){fe(),m.focused.value===!1&&n("blur",t),Ve()}function $t(){const t=document.activeElement;(t===null||t.id!==m.targetUid.value)&&H.value!==null&&H.value!==t&&H.value.focus(),J()}function xe(){d.value!==!0&&(g.value=-1,u.value===!0&&(u.value=!1),m.focused.value===!1&&(clearTimeout(L),L=void 0,m.innerLoading.value===!0&&(n("filterAbort"),m.innerLoading.value=!1,s.value=!1)))}function Ce(t){m.editable.value===!0&&(i===!0?(m.onControlFocusin(t),d.value=!0,ue(()=>{m.focus()})):m.focus(),e.onFilter!==void 0?we(h.value):(b.value!==!0||l["no-option"]!==void 0)&&(u.value=!0))}function fe(){d.value=!1,xe()}function Ve(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&c.value.length>0&&P.value(c.value[0])||"",!0,!0)}function $e(t){let f=-1;if(t===!0){if(c.value.length>0){const r=K.value(c.value[0]);f=e.options.findIndex(w=>Ee(K.value(w),r))}le(f)}be(f)}function Kt(t,f){u.value===!0&&m.innerLoading.value===!1&&(le(-1,!0),ue(()=>{u.value===!0&&m.innerLoading.value===!1&&(t>f?le():$e(!0))}))}function at(){d.value===!1&&X.value!==null&&X.value.updatePosition()}function rt(t){t!==void 0&&pe(t),n("popupShow",t),m.hasPopupOpen=!0,m.onControlFocusin(t)}function st(t){t!==void 0&&pe(t),n("popupHide",t),m.hasPopupOpen=!1,m.onControlFocusout(t)}function ct(){i=v.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?l["no-option"]!==void 0||e.onFilter!==void 0||b.value===!1:!0),Q=v.platform.is.ios===!0&&i===!0&&e.useInput===!0?"fade":e.transitionShow}return Cl(ct),Vl(at),ct(),qe(()=>{clearTimeout(p)}),Object.assign(o,{showPopup:Ce,hidePopup:fe,removeAtIndex:_e,add:Ze,toggleOption:de,getOptionIndex:()=>g.value,setOptionIndex:be,moveOptionSelection:Ie,filter:we,updateMenuPosition:at,updateInputValue:Ae,isOptionSelected:We,getEmittingOptionValue:Ge,isOptionDisabled:(...t)=>ye.value.apply(null,t)===!0,getOptionValue:(...t)=>K.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(m,{innerValue:c,fieldClass:V(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:q,targetRef:H,hasValue:E,showPopup:Ce,floatingLabel:V(()=>e.hideSelected!==!0&&E.value===!0||typeof h.value=="number"||h.value.length>0||mt(e.displayValue)),getControlChild:()=>{if(m.editable.value!==!1&&(d.value===!0||b.value!==!0||l["no-option"]!==void 0))return i===!0?_t():It();m.hasPopupOpen===!0&&(m.hasPopupOpen=!1)},controlEvents:{onFocusin(t){m.onControlFocusin(t)},onFocusout(t){m.onControlFocusout(t,()=>{Ve(),xe()})},onClick(t){if(ze(t),i!==!0&&u.value===!0){xe(),H.value!==null&&H.value.focus();return}Ce(t)}},getControl:t=>{const f=Ft(),r=t===!0||d.value!==!0||i!==!0;if(e.useInput===!0)f.push(Ot(t,r));else if(m.editable.value===!0){const T=r===!0?ce.value:void 0;f.push(M("input",{ref:r===!0?H:void 0,key:"d_t",class:"q-select__focus-target",id:r===!0?m.targetUid.value:void 0,readonly:!0,"data-autofocus":t!==!0&&e.autofocus===!0||void 0,...T,onKeydown:nt,onKeyup:et,onKeypress:lt})),r===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&f.push(M("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:tt}))}if(ie.value!==void 0&&e.disable!==!0&&Oe.value.length>0){const T=Oe.value.map(A=>M("option",{value:A,selected:!0}));f.push(M("select",{class:"hidden",name:ie.value,multiple:e.multiple},T))}const w=e.useInput===!0||r!==!0?void 0:m.splitAttrs.attributes.value;return M("div",{class:"q-field__native row items-center",...w},f)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[M(pl,{class:"q-select__dropdown-icon"+(u.value===!0?" rotate-180":""),name:Se.value})]:null}),pt(m)}});export{nn as Q};