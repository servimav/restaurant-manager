import{c as D,bm as lt,bn as Tt,g as jt,aX as Ft,S as At,W as Et,bo as Nt,r as E,q as te,j as h,T as oe,k as pt,n as Bt,bp as Zt,bq as Qt,C as We,Q as I,d as Lt,ah as Rt,aq as zt,o as Pt,e as Ut,w as X,f as A,as as Je,J as fe,av as qe,u as ke,at as Ge,aA as Xt,au as Wt,br as Oe,aL as Ie}from"./index.04fb470e.js";import{p as _}from"./format.3e32b8d9.js";import{Q as Jt}from"./QPage.35b7a6ff.js";function Gt(){const e=new Map;return{getCache:function(r,u){return e[r]===void 0?e[r]=u:e[r]},getCacheWithFn:function(r,u){return e[r]===void 0?e[r]=u():e[r]}}}const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Kt(e,r,u){return Object.prototype.toString.call(e)==="[object Date]"&&(u=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),na(je(e,r,u))}function Ke(e,r,u){return st(aa(e,r,u))}function ea(e){return ta(e)===0}function he(e,r){return r<=6?31:r<=11||ea(e)?30:29}function ta(e){const r=R.length;let u=R[0],s,l,o,y,i;if(e<u||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<r&&(s=R[i],l=s-u,!(e<s));i+=1)u=s;return y=e-u,l-y<6&&(y=y-l+Y(l+4,33)*33),o=V(V(y+1,33)-1,4),o===-1&&(o=4),o}function ut(e,r){const u=R.length,s=e+621;let l=-14,o=R[0],y,i,m,x,f;if(e<o||e>=R[u-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<u&&(y=R[f],i=y-o,!(e<y));f+=1)l=l+Y(i,33)*8+Y(V(i,33),4),o=y;x=e-o,l=l+Y(x,33)*8+Y(V(x,33)+3,4),V(i,33)===4&&i-x===4&&(l+=1);const w=Y(s,4)-Y((Y(s,100)+1)*3,4)-150,N=20+l-w;return r||(i-x<6&&(x=x-i+Y(i+4,33)*33),m=V(V(x+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:s,march:N}}function aa(e,r,u){const s=ut(e,!0);return je(s.gy,3,s.march)+(r-1)*31-Y(r,7)*(r-7)+u-1}function na(e){const r=st(e).gy;let u=r-621,s,l,o;const y=ut(u,!1),i=je(r,3,y.march);if(o=e-i,o>=0){if(o<=185)return l=1+Y(o,31),s=V(o,31)+1,{jy:u,jm:l,jd:s};o-=186}else u-=1,o+=179,y.leap===1&&(o+=1);return l=7+Y(o,30),s=V(o,30)+1,{jy:u,jm:l,jd:s}}function je(e,r,u){let s=Y((e+Y(r-8,6)+100100)*1461,4)+Y(153*V(r+9,12)+2,5)+u-34840408;return s=s-Y(Y(e+100100+Y(r-8,6),100)*3,4)+752,s}function st(e){let r=4*e+139361631;r=r+Y(Y(4*e+183187720,146097)*3,4)*4-3908;const u=Y(V(r,1461),4)*5+308,s=Y(V(u,153),5)+1,l=V(Y(u,153),12)+1;return{gy:Y(r,1461)-100100+Y(8-l,6),gm:l,gd:s}}function Y(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const ra=["gregorian","persian"],oa={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>ra.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},la=["update:modelValue"];function Q(e){return e.year+"/"+_(e.month)+"/"+_(e.day)}function ua(e,r){const u=D(()=>e.disable!==!0&&e.readonly!==!0),s=D(()=>e.editable===!0?0:-1),l=D(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(i){const m=new Date,x=i===!0?null:0;if(e.calendar==="persian"){const f=Kt(m);return{year:f.jy,month:f.jm,day:f.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:u,tabindex:s,headerClass:l,getLocale:o,getCurrentDate:y}}const it=864e5,sa=36e5,Te=6e4,dt="YYYY-MM-DDTHH:mm:ss.SSSZ",ia=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,da=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Ve={};function ca(e,r){const u="("+r.days.join("|")+")",s=e+u;if(Ve[s]!==void 0)return Ve[s];const l="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",i={};let m=0;const x=e.replace(da,w=>{switch(m++,w){case"YY":return i.YY=m,"(-?\\d{1,2})";case"YYYY":return i.YYYY=m,"(-?\\d{1,4})";case"M":return i.M=m,"(\\d{1,2})";case"MM":return i.M=m,"(\\d{2})";case"MMM":return i.MMM=m,y;case"MMMM":return i.MMMM=m,o;case"D":return i.D=m,"(\\d{1,2})";case"Do":return i.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=m,"(\\d{2})";case"H":return i.H=m,"(\\d{1,2})";case"HH":return i.H=m,"(\\d{2})";case"h":return i.h=m,"(\\d{1,2})";case"hh":return i.h=m,"(\\d{2})";case"m":return i.m=m,"(\\d{1,2})";case"mm":return i.m=m,"(\\d{2})";case"s":return i.s=m,"(\\d{1,2})";case"ss":return i.s=m,"(\\d{2})";case"S":return i.S=m,"(\\d{1})";case"SS":return i.S=m,"(\\d{2})";case"SSS":return i.S=m,"(\\d{3})";case"A":return i.A=m,"(AM|PM)";case"a":return i.a=m,"(am|pm)";case"aa":return i.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return l;case"dddd":return u;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return i.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=m,"(-?\\d+)";case"x":return i.x=m,"(-?\\d{4,})";default:return m--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:i,regex:new RegExp("^"+x)};return Ve[s]=f,f}function ct(e,r){return e!==void 0?e:r!==void 0?r.date:Tt.date}function et(e,r=""){const u=e>0?"-":"+",s=Math.abs(e),l=Math.floor(s/60),o=s%60;return u+_(l)+r+_(o)}function va(e,r,u,s,l){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(l!==void 0&&Object.assign(o,l),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=dt);const y=ct(u,lt.props),i=y.months,m=y.monthsShort,{regex:x,map:f}=ca(r,y),w=e.match(x);if(w===null)return o;let N="";if(f.X!==void 0||f.x!==void 0){const T=parseInt(w[f.X!==void 0?f.X:f.x],10);if(isNaN(T)===!0||T<0)return o;const j=new Date(T*(f.X!==void 0?1e3:1));o.year=j.getFullYear(),o.month=j.getMonth()+1,o.day=j.getDate(),o.hour=j.getHours(),o.minute=j.getMinutes(),o.second=j.getSeconds(),o.millisecond=j.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(w[f.YYYY],10);else if(f.YY!==void 0){const T=parseInt(w[f.YY],10);o.year=T<0?T:2e3+T}if(f.M!==void 0){if(o.month=parseInt(w[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=m.indexOf(w[f.MMM])+1:f.MMMM!==void 0&&(o.month=i.indexOf(w[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(w[f.D],10),o.year===null||o.month===null||o.day<1)return o;const T=s!=="persian"?new Date(o.year,o.month,0).getDate():he(o.year,o.month);if(o.day>T)return o}f.H!==void 0?o.hour=parseInt(w[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(w[f.h],10)%12,(f.A&&w[f.A]==="PM"||f.a&&w[f.a]==="pm"||f.aa&&w[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(w[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(w[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(w[f.S],10)*10**(3-w[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(N=f.Z!==void 0?w[f.Z].replace(":",""):w[f.ZZ],o.timezoneOffset=(N[0]==="+"?-1:1)*(60*N.slice(1,3)+1*N.slice(3,5)))}return o.dateHash=_(o.year,6)+"/"+_(o.month)+"/"+_(o.day),o.timeHash=_(o.hour)+":"+_(o.minute)+":"+_(o.second)+N,o}function tt(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const u=new Date(r.getFullYear(),0,4);u.setDate(u.getDate()-(u.getDay()+6)%7+3);const s=r.getTimezoneOffset()-u.getTimezoneOffset();r.setHours(r.getHours()-s);const l=(r-u)/(it*7);return 1+Math.floor(l)}function B(e,r,u){const s=new Date(e),l=`set${u===!0?"UTC":""}`;switch(r){case"year":case"years":s[`${l}Month`](0);case"month":case"months":s[`${l}Date`](1);case"day":case"days":case"date":s[`${l}Hours`](0);case"hour":case"hours":s[`${l}Minutes`](0);case"minute":case"minutes":s[`${l}Seconds`](0);case"second":case"seconds":s[`${l}Milliseconds`](0)}return s}function me(e,r,u){return(e.getTime()-e.getTimezoneOffset()*Te-(r.getTime()-r.getTimezoneOffset()*Te))/u}function vt(e,r,u="days"){const s=new Date(e),l=new Date(r);switch(u){case"years":case"year":return s.getFullYear()-l.getFullYear();case"months":case"month":return(s.getFullYear()-l.getFullYear())*12+s.getMonth()-l.getMonth();case"days":case"day":case"date":return me(B(s,"day"),B(l,"day"),it);case"hours":case"hour":return me(B(s,"hour"),B(l,"hour"),sa);case"minutes":case"minute":return me(B(s,"minute"),B(l,"minute"),Te);case"seconds":case"second":return me(B(s,"second"),B(l,"second"),1e3)}}function at(e){return vt(e,B(e,"year"),"days")+1}function nt(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const rt={YY(e,r,u){const s=this.YYYY(e,r,u)%100;return s>=0?_(s):"-"+_(Math.abs(s))},YYYY(e,r,u){return u!=null?u:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return _(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return nt(this.Q(e))},D(e){return e.getDate()},Do(e){return nt(e.getDate())},DD(e){return _(e.getDate())},DDD(e){return at(e)},DDDD(e){return _(at(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return tt(e)},ww(e){return _(tt(e))},H(e){return e.getHours()},HH(e){return _(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return _(this.h(e))},m(e){return e.getMinutes()},mm(e){return _(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return _(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return _(Math.floor(e.getMilliseconds()/10))},SSS(e){return _(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,u,s){const l=s==null?e.getTimezoneOffset():s;return et(l,":")},ZZ(e,r,u,s){const l=s==null?e.getTimezoneOffset():s;return et(l)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function fa(e,r,u,s,l){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=dt);const y=ct(u,lt.props);return r.replace(ia,(i,m)=>i in rt?rt[i](o,y,s,l):m===void 0?i:m.split("\\]").join("]"))}const W=20,ma=["Calendar","Years","Months"],ot=e=>ma.includes(e),$e=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ae=" \u2014 ";function L(e){return e.year+"/"+_(e.month)}var ha=jt({name:"QDate",props:{...oa,...Ft,...At,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:$e},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:$e},navigationMaxYearMonth:{type:String,validator:$e},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:ot}},emits:[...la,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:u}){const{proxy:s}=Bt(),{$q:l}=s,o=Et(e,l),{getCache:y}=Gt(),{tabindex:i,headerClass:m,getLocale:x,getCurrentDate:f}=ua(e,l);let w;const N=Nt(e),T=Zt(N),j=E(null),z=E(Qe()),C=E(x()),ft=D(()=>Qe()),mt=D(()=>x()),p=D(()=>f()),g=E(Le(z.value,C.value)),O=E(e.defaultView),Fe=l.lang.rtl===!0?"right":"left",le=E(Fe.value),ge=E(Fe.value),ye=g.value.year,ue=E(ye-ye%W-(ye<0?W:0)),H=E(null),ht=D(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),P=D(()=>e.color||"primary"),J=D(()=>e.textColor||"white"),se=D(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Me=D(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),F=D(()=>Me.value.filter(t=>typeof t=="string").map(t=>_e(t,z.value,C.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),G=D(()=>{const t=a=>_e(a,z.value,C.value);return Me.value.filter(a=>Qt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ie=D(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Ke(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),De=D(()=>e.calendar==="persian"?Q:(t,a,n)=>fa(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?z.value:a,n===void 0?C.value:n,t.year,t.timezoneOffset)),ne=D(()=>F.value.length+G.value.reduce((t,a)=>t+1+vt(ie.value(a.to),ie.value(a.from)),0)),Ae=D(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if(H.value!==null){const n=H.value.init,c=ie.value(n);return C.value.daysShort[c.getDay()]+", "+C.value.monthsShort[n.month-1]+" "+n.day+ae+"?"}if(ne.value===0)return ae;if(ne.value>1)return`${ne.value} ${C.value.pluralDay}`;const t=F.value[0],a=ie.value(t);return isNaN(a.valueOf())===!0?ae:C.value.headerTitle!==void 0?C.value.headerTitle(a,t):C.value.daysShort[a.getDay()]+", "+C.value.monthsShort[t.month-1]+" "+t.day}),gt=D(()=>F.value.concat(G.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),yt=D(()=>F.value.concat(G.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ee=D(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(ne.value===0)return ae;if(ne.value>1){const t=gt.value,a=yt.value,n=C.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ae+n[a.month-1]+" ":t.month!==a.month?ae+n[a.month-1]:"")+" "+a.year}return F.value[0].year}),de=D(()=>{const t=[l.iconSet.datetime.arrowLeft,l.iconSet.datetime.arrowRight];return l.lang.rtl===!0?t.reverse():t}),Ne=D(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):C.value.firstDayOfWeek),Mt=D(()=>{const t=C.value.daysShort,a=Ne.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=D(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():he(t.year,t.month)}),Dt=D(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=D(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=D(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),we=D(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=D(()=>{const t={};return F.value.forEach(a=>{const n=L(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),pe=D(()=>{const t={};return G.value.forEach(a=>{const n=L(a.from),c=L(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===c?a.to.day:void 0,range:a}),n<c){let d;const{year:b,month:v}=a.from,M=v<12?{year:b,month:v+1}:{year:b+1,month:1};for(;(d=L(M))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?a.to.day:void 0,range:a}),M.month++,M.month>12&&(M.year++,M.month=1)}}),t}),re=D(()=>{if(H.value===null)return;const{init:t,initHash:a,final:n,finalHash:c}=H.value,[d,b]=a<=c?[t,n]:[n,t],v=L(d),M=L(b);if(v!==$.value&&M!==$.value)return;const S={};return v===$.value?(S.from=d.day,S.includeFrom=!0):S.from=1,M===$.value?(S.to=b.day,S.includeTo=!0):S.to=Z.value,S}),$=D(()=>L(g.value)),wt=D(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Z.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Z.value;n++){const c=$.value+"/"+_(n);t[n]=a(c)}return t}),bt=D(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Z.value;n++){const c=$.value+"/"+_(n);t[n]=a(c)===!0&&Dt.value(c)}}return t}),_t=D(()=>{let t,a;const{year:n,month:c}=g.value;if(e.calendar!=="persian")t=new Date(n,c-1,1),a=new Date(n,c-1,0).getDate();else{const d=Ke(n,c,1);t=new Date(d.gy,d.gm-1,d.gd);let b=c-1,v=n;b===0&&(b=12,v--),a=he(v,b)}return{days:t.getDay()-Ne.value-1,endDay:a}}),Be=D(()=>{const t=[],{days:a,endDay:n}=_t.value,c=a<0?a+7:a;if(c<6)for(let v=n-c;v<=n;v++)t.push({i:v,fill:!0});const d=t.length;for(let v=1;v<=Z.value;v++){const M={i:v,event:bt.value[v],classes:[]};wt.value[v]===!0&&(M.in=!0,M.flat=!0),t.push(M)}if(ce.value[$.value]!==void 0&&ce.value[$.value].forEach(v=>{const M=d+v-1;Object.assign(t[M],{selected:!0,unelevated:!0,flat:!1,color:P.value,textColor:J.value})}),pe.value[$.value]!==void 0&&pe.value[$.value].forEach(v=>{if(v.from!==void 0){const M=d+v.from-1,S=d+(v.to||Z.value)-1;for(let He=M;He<=S;He++)Object.assign(t[He],{range:v.range,unelevated:!0,color:P.value,textColor:J.value});Object.assign(t[M],{rangeFrom:!0,flat:!1}),v.to!==void 0&&Object.assign(t[S],{rangeTo:!0,flat:!1})}else if(v.to!==void 0){const M=d+v.to-1;for(let S=d;S<=M;S++)Object.assign(t[S],{range:v.range,unelevated:!0,color:P.value,textColor:J.value});Object.assign(t[M],{flat:!1,rangeTo:!0})}else{const M=d+Z.value-1;for(let S=d;S<=M;S++)Object.assign(t[S],{range:v.range,unelevated:!0,color:P.value,textColor:J.value})}}),re.value!==void 0){const v=d+re.value.from-1,M=d+re.value.to-1;for(let S=v;S<=M;S++)t[S].color=P.value,t[S].editRange=!0;re.value.includeFrom===!0&&(t[v].editRangeFrom=!0),re.value.includeTo===!0&&(t[M].editRangeTo=!0)}g.value.year===p.value.year&&g.value.month===p.value.month&&(t[d+p.value.day-1].today=!0);const b=t.length%7;if(b>0){const v=7-b;for(let M=1;M<=v;M++)t.push({i:M,fill:!0})}return t.forEach(v=>{let M="q-date__calendar-item ";v.fill===!0?M+="q-date__calendar-item--fill":(M+=`q-date__calendar-item--${v.in===!0?"in":"out"}`,v.range!==void 0&&(M+=` q-date__range${v.rangeTo===!0?"-to":v.rangeFrom===!0?"-from":""}`),v.editRange===!0&&(M+=` q-date__edit-range${v.editRangeFrom===!0?"-from":""}${v.editRangeTo===!0?"-to":""}`),(v.range!==void 0||v.editRange===!0)&&(M+=` text-${v.color}`)),v.classes=M}),t}),Yt=D(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});te(()=>e.modelValue,t=>{if(w===t)w=0;else{const{year:a,month:n}=Le(z.value,C.value);K(a,n)}}),te(O,()=>{j.value!==null&&j.value.focus()}),te(()=>g.value.year,t=>{u("navigation",{year:t,month:g.value.month})}),te(()=>g.value.month,t=>{u("navigation",{year:g.value.year,month:t})}),te(ft,t=>{Xe(t,C.value,"mask"),z.value=t}),te(mt,t=>{Xe(z.value,t,"locale"),C.value=t});function Ze(){const t=p.value,a=ce.value[L(t)];(a===void 0||a.includes(t.day)===!1)&&Se(t),be(t.year,t.month)}function St(t){ot(t)===!0&&(O.value=t)}function xt(t,a){["month","year"].includes(t)&&(t==="month"?ze:Ye)(a===!0?-1:1)}function be(t,a){O.value="Calendar",K(t,a)}function Ct(t,a){if(e.range===!1||!t){H.value=null;return}const n=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):n;H.value={init:n,initHash:Q(n),final:c,finalHash:Q(c)},be(n.year,n.month)}function Qe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function _e(t,a,n){return va(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Le(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Re();const c=n[n.length-1],d=_e(c.from!==void 0?c.from:c,t,a);return d.dateHash===null?Re():d}function Re(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=p.value!==void 0?p.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+_(a)+"/01"}}function ze(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),K(a,n),se.value===!0&&ve("month")}function Ye(t){const a=Number(g.value.year)+t;K(a,g.value.month),se.value===!0&&ve("year")}function Ht(t){K(t,g.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",se.value===!0&&ve("year")}function qt(t){K(g.value.year,t),O.value="Calendar",se.value===!0&&ve("month")}function kt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?xe:Se)(t)}function U(t){return{year:t.year,month:t.month,day:t.day}}function K(t,a){q.value!==null&&t<=q.value.year&&(t=q.value.year,a<q.value.month&&(a=q.value.month)),k.value!==null&&t>=k.value.year&&(t=k.value.year,a>k.value.month&&(a=k.value.month));const n=t+"/"+_(a)+"/01";n!==g.value.dateHash&&(le.value=g.value.dateHash<n==(l.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(ge.value=le.value),We(()=>{ue.value=t-t%W-(t<0?W:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:n})}))}function Pe(t,a,n){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=c;const{reason:d,details:b}=Ue(a,n);u("update:modelValue",c,d,b)}function ve(t){const a=F.value[0]!==void 0&&F.value[0].dateHash!==null?{...F.value[0]}:{...g.value};We(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():he(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const c=ee(a);w=c;const{details:d}=Ue("",a);u("update:modelValue",c,t,d)})}function Ue(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...U(a.target),from:U(a.from),to:U(a.to)}}:{reason:`${t}-day`,details:U(a)}}function ee(t,a,n){return t.from!==void 0?{from:De.value(t.from,a,n),to:De.value(t.to,a,n)}:De.value(t,a,n)}function Se(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=Q(t.from),c=Q(t.to),d=F.value.filter(v=>v.dateHash<n||v.dateHash>c),b=G.value.filter(({from:v,to:M})=>M.dateHash<n||v.dateHash>c);a=d.concat(b).concat(t).map(v=>ee(v))}else{const n=Me.value.slice();n.push(ee(t)),a=n}else a=ee(t);Pe(a,"add",t)}function xe(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=ee(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==n.from&&c.to!==n.to:!0):a=e.modelValue.filter(c=>c!==n),a.length===0&&(a=null)}Pe(a,"remove",t)}function Xe(t,a,n){const c=F.value.concat(G.value).map(d=>ee(d,t,a)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);u("update:modelValue",(e.multiple===!0?c:c[0])||null,n)}function Ot(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ee.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...y("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Ee.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(oe,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Ae.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...y("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Ae.value]))]),e.todayBtn===!0?h(I,{class:"q-date__header-today self-start",icon:l.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:Ze}):null])])}function Ce({label:t,type:a,key:n,dir:c,goTo:d,boundaries:b,cls:v}){return[h("div",{class:"row items-center q-date__arrow"},[h(I,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[0],tabindex:i.value,disable:b.prev===!1,...y("go-#"+a,{onClick(){d(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+v},[h(oe,{name:"q-transition--jump-"+c},()=>h("div",{key:n},[h(I,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...y("view#"+a,{onClick:()=>{O.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(I,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[1],tabindex:i.value,disable:b.next===!1,...y("go+#"+a,{onClick(){d(1)}})})])]}const It={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},Ce({label:C.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:le.value,goTo:ze,boundaries:we.value.month,cls:" col"}).concat(Ce({label:g.value.year,type:"Years",key:g.value.year,dir:ge.value,goTo:Ye,boundaries:we.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Mt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(oe,{name:"q-transition--slide-"+le.value},()=>h("div",{key:$.value,class:"q-date__calendar-days fit"},Be.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(I,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...y("day#"+t.i,{onClick:()=>{Vt(t.i)},onMouseover:()=>{$t(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===p.value.year,a=c=>q.value!==null&&g.value.year===q.value.year&&q.value.month>c||k.value!==null&&g.value.year===k.value.year&&k.value.month<c,n=C.value.monthsShort.map((c,d)=>{const b=g.value.month===d+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(I,{class:t===!0&&p.value.month===d+1?"q-date__today":null,flat:b!==!0,label:c,unelevated:b,color:b===!0?P.value:null,textColor:b===!0?J.value:null,tabindex:i.value,disable:a(d+1),...y("month#"+d,{onClick:()=>{qt(d+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[Ce({label:g.value.year,type:"Years",key:g.value.year,dir:ge.value,goTo:Ye,boundaries:we.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=ue.value,a=t+W,n=[],c=d=>q.value!==null&&q.value.year>d||k.value!==null&&k.value.year<d;for(let d=t;d<=a;d++){const b=g.value.year===d;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(I,{key:"yr"+d,class:p.value.year===d?"q-date__today":null,flat:!b,label:d,dense:!0,unelevated:b,color:b===!0?P.value:null,textColor:b===!0?J.value:null,tabindex:i.value,disable:c(d),...y("yr#"+d,{onClick:()=>{Ht(d)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(I,{round:!0,dense:!0,flat:!0,icon:de.value[0],tabindex:i.value,disable:c(t),...y("y-",{onClick:()=>{ue.value-=W}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(I,{round:!0,dense:!0,flat:!0,icon:de.value[1],tabindex:i.value,disable:c(a),...y("y+",{onClick:()=>{ue.value+=W}})})])])}};function Vt(t){const a={...g.value,day:t};if(e.range===!1){kt(a,$.value);return}if(H.value===null){const n=Be.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&n.range!==void 0){xe({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){xe(a);return}const c=Q(a);H.value={init:a,initHash:c,final:a,finalHash:c},u("rangeStart",U(a))}else{const n=H.value.initHash,c=Q(a),d=n<=c?{from:H.value.init,to:a}:{from:a,to:H.value.init};H.value=null,Se(n===c?a:{target:a,...d}),u("rangeEnd",{from:U(d.from),to:U(d.to)})}}function $t(t){if(H.value!==null){const a={...g.value,day:t};Object.assign(H.value,{final:a,finalHash:Q(a)})}}return Object.assign(s,{setToday:Ze,setView:St,offsetCalendar:xt,setCalendarTo:be,setEditingRange:Ct}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(oe,{name:"q-transition--fade"},It[O.value])])],a=pt(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&T(t,"push"),h("div",{class:ht.value,...Yt.value},[Ot(),h("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}});const ga={class:"row q-col-gutter-sm"},wa=Lt({__name:"ReportsPage",setup(e){const r=E({mode:"orders",show:!1,date:null});function u(l){l==="menu"?window.location.assign(`${Oe}/reports/cart`):r.value={mode:l,show:!0,date:null}}function s(){let l;r.value.mode==="products"?(l=`${Oe}/reports/products`,r.value.date&&(r.value.date.from&&(l+=`?from=${r.value.date.from}`),r.value.date.to&&(l+=`&to=${r.value.date.to}`)),window.location.assign(l)):r.value.mode==="orders"&&(l=`${Oe}/reports/orders`,r.value.date&&(r.value.date.from&&(l+=`?from=${r.value.date.from}`),r.value.date.to&&(l+=`&to=${r.value.date.to}`)),window.location.assign(l)),r.value={mode:"products",show:!1,date:null}}return Rt(()=>{zt("Reportes")}),(l,o)=>(Pt(),Ut(Jt,{padding:"",class:"q-gutter-sm"},{default:X(()=>[A(Ge,null,{default:X(()=>[A(Je,null,{default:X(()=>[fe("div",ga,[fe("div",{class:qe(ke(Ie))},[A(I,{color:"primary",outline:"",icon:"mdi-currency-usd",label:"Datos por Pedidos",class:"full-width",onClick:o[0]||(o[0]=y=>u("orders"))})],2),fe("div",{class:qe(ke(Ie))},[A(I,{color:"primary",outline:"",icon:"mdi-food-turkey",label:"Datos por Producto",class:"full-width",onClick:o[1]||(o[1]=y=>u("products"))})],2),fe("div",{class:qe(ke(Ie))},[A(I,{color:"primary",outline:"",icon:"mdi-format-list-checkbox",label:"Menu",class:"full-width",onClick:o[2]||(o[2]=y=>u("menu"))})],2)])]),_:1})]),_:1}),A(Wt,{modelValue:r.value.show,"onUpdate:modelValue":o[4]||(o[4]=y=>r.value.show=y),persistent:""},{default:X(()=>[A(Ge,{class:"dialog-form"},{default:X(()=>[A(Je,null,{default:X(()=>[A(ha,{modelValue:r.value.date,"onUpdate:modelValue":o[3]||(o[3]=y=>r.value.date=y),range:""},null,8,["modelValue"])]),_:1}),A(Xt,null,{default:X(()=>[A(I,{color:"primary",icon:"mdi-check",label:"Solicitar Reporte",onClick:s})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{wa as default};
