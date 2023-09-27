"use strict";(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[695],{56752:(T,m,t)=>{t.r(m),t.d(m,{SettingsPage:()=>I,default:()=>Z});var e=t(45485),i=t(9941),f=t(27875),p=t(48102),v=t(74758),x=t(27997),s=t(10701),E=t(93415),b=t(32370),j=t(23298),C=t(74577),D=t(2548),n=t(17741),o=t(59082),r=t(5466),l=t(6078),d=t.n(l),u=t(364),M=t(61020),S=t(11727),c=t(63955);const A=a=>a;var N=t(61815),W=t(43433),H=t.n(W);const G={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},K=(a,O)=>(0,N.ZP)(a,g=>{switch(O.type){case"CANCEL_CHANGES":{g.modifiedData=a.initialData;break}case"GET_DATA_SUCCEEDED":{g.isLoading=!1,g.initialData=O.data,g.modifiedData=O.data;break}case"ON_CHANGE":{H()(g,["modifiedData",...O.keys.split(".")],O.value);break}case"ON_SUBMIT":{g.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{g.initialData=a.modifiedData,g.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{g.isSubmiting=!1;break}default:return a}}),I=()=>{const{formatMessage:a}=(0,M.Z)(),{lockApp:O,unlockApp:g}=(0,n.o1)(),F=(0,n.lm)(),{get:$,put:V}=(0,n.kY)();(0,n.go)();const[{initialData:X,isLoading:Y,isSubmiting:J,modifiedData:B},L]=(0,e.useReducer)(K,G,A),U=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const y=r.default.CancelToken.source(),w=async()=>{try{const{data:{data:P}}=await $("/upload/settings",{cancelToken:y.token});L({type:"GET_DATA_SUCCEEDED",data:P})}catch(P){console.error(P)}};return U.current&&w(),()=>{y.cancel("Operation canceled by the user."),U.current=!1}},[]);const k=d()(X,B),Q=async h=>{if(h.preventDefault(),!k){O(),L({type:"ON_SUBMIT"});try{await V("/upload/settings",B),L({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(y){console.error(y),L({type:"ON_SUBMIT_ERROR"})}g()}},z=({target:{name:h,value:y}})=>{L({type:"ON_CHANGE",keys:h,value:y})};return e.createElement(i.o,{tabIndex:-1},e.createElement(u.q,{title:a({id:(0,c.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:Q},e.createElement(f.T,{title:a({id:(0,c.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(p.z,{disabled:k,"data-testid":"save-button",loading:J,type:"submit",startIcon:e.createElement(o.Z,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,c.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(v.D,null,Y?e.createElement(n.dO,null):e.createElement(x.A,null,e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(s.k,null,e.createElement(b.Z,{variant:"delta",as:"h2"},a({id:(0,c.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(j.r,{gap:6},e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:B.responsiveDimensions,hint:a({id:(0,c.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,c.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{z({target:{name:"responsiveDimensions",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:B.sizeOptimization,hint:a({id:(0,c.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,c.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{z({target:{name:"sizeOptimization",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:B.autoOrientation,hint:a({id:(0,c.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,c.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{z({target:{name:"autoOrientation",value:h.target.checked}})}}))))))))))},Z=()=>e.createElement(n.O4,{permissions:S._I.settings},e.createElement(I,null))},74758:(T,m,t)=>{t.d(m,{D:()=>f});var e=t(74081),i=t(93415);const f=({children:p})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:p})},27875:(T,m,t)=>{t.d(m,{T:()=>j});var e=t(74081),i=t(45485),f=t(72450);const p=n=>{const o=(0,i.useRef)(null),[r,l]=(0,i.useState)(!0),d=([u])=>{l(u.isIntersecting)};return(0,i.useEffect)(()=>{const u=o.current,M=new IntersectionObserver(d,n);return u&&M.observe(o.current),()=>{u&&M.disconnect()}},[o,n]),[o,r]};var v=t(66705);const x=(n,o)=>{const r=(0,v.W)(o);(0,i.useLayoutEffect)(()=>{const l=new ResizeObserver(r);return Array.isArray(n)?n.forEach(d=>{d.current&&l.observe(d.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,r])};var s=t(93415),E=t(10701),b=t(32370);const j=n=>{const o=(0,i.useRef)(null),[r,l]=(0,i.useState)(null),[d,u]=p({root:null,rootMargin:"0px",threshold:0});return x(d,()=>{d.current&&l(d.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&l(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:r?.height},ref:d,children:u&&(0,e.jsx)(D,{ref:o,...n})}),!u&&(0,e.jsx)(D,{...n,sticky:!0,width:r?.width})]})};j.displayName="HeaderLayout";const C=(0,f.default)(s.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,D=i.forwardRef(({navigationAction:n,primaryAction:o,secondaryAction:r,subtitle:l,title:d,sticky:u,width:M,...S},c)=>{const R=typeof l=="string";return u?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{children:[n&&(0,e.jsx)(s.x,{paddingRight:3,children:n}),(0,e.jsxs)(s.x,{children:[(0,e.jsx)(b.Z,{variant:"beta",as:"h1",...S,children:d}),R?(0,e.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),(0,e.jsx)(E.k,{children:o?(0,e.jsx)(s.x,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(s.x,{ref:c,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(s.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{minWidth:0,children:[(0,e.jsx)(b.Z,{as:"h1",variant:"alpha",...S,children:d}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),o]}),R?(0,e.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},27997:(T,m,t)=>{t.d(m,{A:()=>x});var e=t(74081),i=t(72450),f=t(93415);const p=(0,i.default)(f.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,v=(0,i.default)(f.x)`
  overflow-x: hidden;
`,x=({sideNav:s,children:E})=>(0,e.jsxs)(p,{hasSideNav:Boolean(s),children:[s,(0,e.jsx)(v,{paddingBottom:10,children:E})]})},9941:(T,m,t)=>{t.d(m,{o:()=>v});var e=t(74081),i=t(72450),f=t(93415);const p=(0,i.default)(f.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:x="main-content-title",...s})=>(0,e.jsx)(p,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
