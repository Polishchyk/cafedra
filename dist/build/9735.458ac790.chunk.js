(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[9735],{79194:(M,g,e)=>{"use strict";e.d(g,{v:()=>o});var t=e(45485),i=e(49402);function o(u,d){const r=(0,i.oR)();(0,t.useEffect)(()=>{r.injectReducer(u,d)},[r,u,d])}},75021:(M,g,e)=>{"use strict";e.d(g,{q:()=>u});var t=e(45485),i=e(17741),o=e(40464);function u({enabled:d}={enabled:!0}){const{get:r}=(0,i.kY)(),{data:h,isError:c,isLoading:n}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:v}}=await r("/admin/license-limit-information");return v},{enabled:d}),a=t.useMemo(()=>h??{},[h]),p=t.useCallback(v=>(a?.features??[]).find(l=>l.name===v)?.options??{},[a?.features]);return{license:a,getFeature:p,isError:c,isLoading:n}}},11984:(M,g,e)=>{"use strict";e.d(g,{CI:()=>u,FP:()=>r,Js:()=>c,_V:()=>o,fC:()=>i,rI:()=>h,xn:()=>d});var t=e(86978);function i({status:n,data:a}){return{type:t.qZ,payload:{status:n,workflow:a}}}function o(n){return{type:t.x4,payload:{stageId:n}}}function u(n={}){return{type:t.Ot,payload:n}}function d(n,a){return{type:t.Nj,payload:{stageId:n,...a}}}function r(n,a){return{type:t.$k,payload:{newIndex:a,oldIndex:n}}}function h(n){return{type:t.VS,payload:n}}function c(){return{type:t.gu}}},43390:(M,g,e)=>{"use strict";e.d(g,{eJ:()=>T,lx:()=>W,h4:()=>S,fC:()=>D});var t=e(45485),i=e(27997),o=e(9941),u=e(74758),d=e(27875),r=e(17741),h=e(76827),c=e(61020),n=e(52713),a=e(86978),p=e(10701),v=e(32370),s=e(10411),l=e(70627),E=e.n(l),w=e(72450);const C=(0,w.default)(p.k)`
  svg path {
    fill: ${({theme:m})=>m.colors.neutral600};
  }
`;function x({name:m}){return t.createElement(p.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,r.Q1)(300)},t.createElement(C,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(s.Z,{width:`${8/16}rem`})),t.createElement(v.Z,{fontWeight:"bold"},m))}x.propTypes={name:E().string.isRequired};function R({type:m,item:A}){switch(m){case a.uL.STAGE:return t.createElement(x,{...A});default:return null}}function W(){return t.createElement(n.r,{renderItem:R})}function D({children:m}){return t.createElement(i.A,null,t.createElement(o.o,{tabIndex:-1},t.createElement(u.D,null,m)))}function T({href:m}){const{formatMessage:A}=(0,c.Z)();return t.createElement(r.rU,{startIcon:t.createElement(h.Z,null),to:m},A({id:"global.back",defaultMessage:"Back"}))}function S({title:m,subtitle:A,navigationAction:I,primaryAction:b}){return t.createElement(t.Fragment,null,t.createElement(r.SL,{name:m}),t.createElement(d.T,{navigationAction:I,primaryAction:b,title:m,subtitle:A}))}},38705:(M,g,e)=>{"use strict";e.d(g,{uT:()=>R,fC:()=>T,Dx:()=>x});var t=e(45485),i=e(32370),o=e(10701),u=e(5938),d=e(15244),r=e(93415),h=e(4987),c=e(37370),n=e(95066),a=e(70627),p=e.n(a),v=e(61020),s=e(72450);const l=e.p+"0cd5f8915b265d5b1856.png",E="limits-title",w="https://strapi.io/pricing-cloud",C="https://strapi.io/contact-sales";function x({children:S}){return t.createElement(i.Z,{variant:"alpha",id:E},S)}x.propTypes={children:p().node.isRequired};function R({children:S}){return t.createElement(i.Z,{variant:"omega"},S)}R.propTypes={children:p().node.isRequired};function W(){const{formatMessage:S}=(0,v.Z)();return t.createElement(o.k,{gap:2,paddingTop:4},t.createElement(c.Q,{variant:"default",isExternal:!0,href:w},S({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(c.Q,{variant:"tertiary",isExternal:!0,href:C},S({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const D=s.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:S})=>`-${S.spaces[7]}`};
  margin-top: ${({theme:S})=>`-${S.spaces[7]}`};
  width: 360px;
`;function T({children:S,isOpen:m,onClose:A}){const{formatMessage:I}=(0,v.Z)();return m?t.createElement(u.P,{labelledBy:E},t.createElement(d.f,null,t.createElement(o.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(o.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},S,t.createElement(W,null)),t.createElement(o.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(D,{src:l,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(r.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(h.h,{icon:t.createElement(n.Z,null),"aria-label":I({id:"global.close",defaultMessage:"Close"}),onClick:A})))))):null}T.defaultProps={isOpen:!1},T.propTypes={children:p().node.isRequired,isOpen:p().bool,onClose:p().func.isRequired}},68997:(M,g,e)=>{"use strict";e.d(g,{U:()=>k});var t=e(45485),i=e(93415),o=e(10701),u=e(17741),d=e(70627),r=e.n(d),h=e(61020),c=e(49402),n=e(72450),a=e(11984),p=e(32370),v=e(77225);const s=(0,n.default)(v.Z)`
  > circle {
    fill: ${({theme:f})=>f.colors.neutral150};
  }
  > path {
    fill: ${({theme:f})=>f.colors.neutral600};
  }
`,l=(0,n.default)(i.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:f})=>f.spaces[6]};
    width: ${({theme:f})=>f.spaces[6]};

    > path {
      fill: ${({theme:f})=>f.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:f})=>f.colors.primary600} !important;
    ${p.Z} {
      color: ${({theme:f})=>f.colors.primary600} !important;
    }

    ${s} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }

  &:active {
    ${p.Z} {
      color: ${({theme:f})=>f.colors.primary600};
    }

    ${s} {
      > circle {
        fill: ${({theme:f})=>f.colors.primary600};
      }
      > path {
        fill: ${({theme:f})=>f.colors.neutral100};
      }
    }
  }
`;function E({children:f,...L}){return t.createElement(l,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...L},t.createElement(o.k,{gap:2},t.createElement(s,{"aria-hidden":!0}),t.createElement(p.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},f)))}E.propTypes={children:r().node.isRequired};var w=e(10989),C=e(45322),x=e(24920),R=e(4987),W=e(34642),D=e(23298),T=e(74577),S=e(12881),m=e(63738),A=e(78665),I=e(33039),b=e(71563),j=e(56924),G=e(21440),$=e(21892),F=e(86978),K=e(5318);const Y=(0,K.s)();function y(){return t.createElement(i.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function P({id:f,index:L,canDelete:N,canReorder:ee,canUpdate:Z,isOpen:te=!1,stagesCount:H}){const z=O=>`${O+1} of ${H}`,Q=O=>{J(B({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:U.value,position:z(O)}))},ie=O=>{J(B({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:U.value,position:z(O)}))},de=()=>{J(B({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:U.value}))},ce=(O,X)=>{J(B({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:U.value,position:z(O)})),q((0,a.FP)(X,O))},[oe,J]=t.useState(null),{formatMessage:B}=(0,h.Z)(),{trackUsage:ue}=(0,u.rS)(),q=(0,c.I0)(),[ae,me]=t.useState(te),[U,re,ge]=(0,b.U$)(`stages.${L}.name`),[_,ne,pe]=(0,b.U$)(`stages.${L}.color`),[{handlerId:fe,isDragging:ve,handleKeyDown:Ee},he,ye,Te,se]=(0,G.Y9)(ee,{index:L,item:{name:U.value},onGrabItem:Q,onDropItem:ie,onMoveItem:ce,onCancel:de,type:F.uL.STAGE}),Se=(0,$.FE)(he,ye),we=Y.map(({hex:O,name:X})=>({value:O,label:B({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:X}),color:O}));t.useEffect(()=>{se((0,j.rX)(),{captureDraggingState:!1})},[se,L]);const{themeColorName:Ce}=(0,K.k)(_.value)??{};return t.createElement(i.x,{ref:Se},oe&&t.createElement(w.T,{"aria-live":"assertive"},oe),ve?t.createElement(y,null):t.createElement(C.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:re.error??ne?.error??!1,hasErrorMessage:!1},t.createElement(x.B,{title:U.value,togglePosition:"left",action:(N||Z)&&t.createElement(o.k,null,N&&t.createElement(R.h,{background:"transparent",icon:t.createElement(A.Z,null),label:B({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>q((0,a._V)(f))}),Z&&t.createElement(R.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:Te,label:B({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:O=>O.stopPropagation(),onKeyDown:Ee},t.createElement(I.Z,null)))}),t.createElement(W.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(D.r,{gap:4},t.createElement(T.P,{col:6},t.createElement(S.o,{...U,id:U.name,disabled:!Z,label:B({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:re.error??!1,onChange:O=>{ge.setValue(O.target.value),q((0,a.xn)(f,{name:O.target.value}))},required:!0})),t.createElement(T.P,{col:6},t.createElement(m.q4,{disabled:!Z,error:ne?.error??!1,id:_.name,required:!0,label:B({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:O=>{pe.setValue(O),q((0,a.xn)(f,{color:O}))},value:_.value.toUpperCase(),startIcon:t.createElement(o.k,{as:"span",height:2,background:_.value,borderColor:Ce==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},we.map(({value:O,label:X,color:le})=>{const{themeColorName:Oe}=(0,K.k)(le);return t.createElement(m.ag,{value:O,key:O,startIcon:t.createElement(o.k,{as:"span",height:2,background:le,borderColor:Oe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},X)})))))))}P.propTypes=r().shape({id:r().number.isRequired,color:r().string.isRequired,canDelete:r().bool.isRequired,canReorder:r().bool.isRequired,canUpdate:r().bool.isRequired,stagesCount:r().number.isRequired}).isRequired;const V=(0,n.default)(i.x)`
  transform: translateX(-50%);
`;function k({canDelete:f,canUpdate:L,stages:N}){const{formatMessage:ee}=(0,h.Z)(),Z=(0,c.I0)(),{trackUsage:te}=(0,u.rS)();return t.createElement(o.k,{direction:"column",gap:6,width:"100%"},t.createElement(i.x,{position:"relative",spacing:4,width:"100%"},t.createElement(V,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},N.map((H,z)=>{const Q=H?.id??H.__temp_key__;return t.createElement(i.x,{key:`stage-${Q}`,as:"li"},t.createElement(P,{id:Q,index:z,isOpen:!H.id,canDelete:N.length>1&&f,canReorder:N.length>1,canUpdate:L,stagesCount:N.length}))}))),L&&t.createElement(E,{type:"button",onClick:()=>{Z((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}k.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},k.propTypes={canDelete:r().bool,canUpdate:r().bool,stages:r().arrayOf(r().shape({id:r().number,__temp_key__:r().number,name:r().string.isRequired}))}},85230:(M,g,e)=>{"use strict";e.d(g,{Y:()=>C});var t=e(45485),i=e(97232),o=e(32370),u=e(23298),d=e(74577),r=e(12881),h=e(17741),c=e(71563),n=e(70627),a=e.n(n),p=e(61020),v=e(49402),s=e(72450),l=e(11984);const E=(0,s.default)(i.ML)`
  padding-left: ${({theme:R})=>R.spaces[7]};
`,w=(0,s.default)(o.Z)`
  font-style: italic;
`;function C({canUpdate:R,contentTypes:{collectionTypes:W,singleTypes:D},currentWorkflow:T,workflows:S}){const{formatMessage:m,locale:A}=(0,p.Z)(),I=(0,v.I0)(),[b,j,G]=(0,c.U$)("name"),[$,F,K]=(0,c.U$)("contentTypes"),Y=(0,h.Xe)(A,{sensitivity:"base"});return t.createElement(u.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(d.P,{col:6},t.createElement(r.o,{...b,id:b.name,disabled:!R,label:m({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:j.error??!1,onChange:y=>{I((0,l.rI)({name:y.target.value})),G.setValue(y.target.value)},required:!0})),t.createElement(d.P,{col:6},t.createElement(i.NU,{...$,customizeContent:y=>m({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:y.length}),disabled:!R,error:F.error??!1,id:$.name,label:m({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:y=>{I((0,l.rI)({contentTypes:y})),K.setValue(y)},placeholder:m({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...W.length>0?[{label:m({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:W.sort((y,P)=>Y.compare(y.info.displayName,P.info.displayName)).map(y=>({label:y.info.displayName,value:y.uid}))}]:[],...D.length>0?[{label:m({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:D.map(y=>({label:y.info.displayName,value:y.uid}))}]:[]].map(y=>"children"in y?t.createElement(i.Ab,{key:y.label,label:y.label,values:y.children.map(P=>P.value.toString())},y.children.map(P=>{const{name:V}=S.find(k=>(T&&k.id!==T.id||!T)&&k.contentTypes.includes(P.value))??{};return t.createElement(E,{key:P.value,value:P.value},m({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:P.label,name:V,em:(...k)=>t.createElement(o.Z,{as:"em",fontWeight:"bold"},k),i:(...k)=>t.createElement(w,null,k)}))})):t.createElement(i.ML,{key:y.value,value:y.value},y.label)))))}const x=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});C.defaultProps={canUpdate:!0,currentWorkflow:void 0},C.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(x).isRequired,singleTypes:a().arrayOf(x).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},86978:(M,g,e)=>{"use strict";e.d(g,{$k:()=>c,Ef:()=>s,FT:()=>p,Nj:()=>h,Ot:()=>r,VS:()=>n,_X:()=>l,gu:()=>o,lv:()=>a,qZ:()=>u,sN:()=>i,uL:()=>v,x4:()=>d});var t=e(97003);const i="settings_review-workflows",o="Settings/Review_Workflows/RESET_WORKFLOW",u="Settings/Review_Workflows/SET_WORKFLOW",d="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",r="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",h="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",n="Settings/Review_Workflows/WORKFLOW_UPDATE",a={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},p=t.W.colors.primary600,v={STAGE:"stage"},s="numberOfWorkflows",l="stagesPerWorkflow"},52258:(M,g,e)=>{"use strict";e.d(g,{n:()=>o});var t=e(17741),i=e(40464);function o(u={}){const{get:d}=(0,t.kY)(),{id:r="",...h}=u,c={populate:"stages"},{data:n,isLoading:a,status:p,refetch:v}=(0,i.useQuery)(["review-workflows","workflows",r],async()=>(await d(`/admin/review-workflows/workflows/${r}`,{params:{...c,...h}})).data);let s=[];return r&&n?.data?s=[n.data]:Array.isArray(n?.data)&&(s=n.data),{meta:n?.meta??{},workflows:s,isLoading:a,status:p,refetch:v}}},3848:(M,g,e)=>{"use strict";e.d(g,{E:()=>d,I:()=>r});var t=e(61815),i=e(6078),o=e.n(i),u=e(86978);const d={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function r(c=d,n){return(0,t.Uy)(c,a=>{const{payload:p}=n;switch(n.type){case u.qZ:{const{status:v,workflow:s}=p;a.status=v,s&&(a.serverState.workflow=s,a.clientState.currentWorkflow.data={...s,stages:s.stages.map(l=>({...l,color:l?.color??u.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case u.gu:{a.clientState.currentWorkflow.data=d.clientState.currentWorkflow.data,a.serverState=d.serverState;break}case u.x4:{const{stageId:v}=p,{currentWorkflow:s}=c.clientState;a.clientState.currentWorkflow.data.stages=s.data.stages.filter(l=>(l?.id??l.__temp_key__)!==v),s.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(c.serverState.workflow?.stages??[]).find(l=>l.id===v));break}case u.Ot:{const{currentWorkflow:v}=c.clientState;v.data||(a.clientState.currentWorkflow.data={stages:[]});const s=h(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...p,color:p?.color??u.FT,__temp_key__:s});break}case u.Nj:{const{currentWorkflow:v}=c.clientState,{stageId:s,...l}=p;a.clientState.currentWorkflow.data.stages=v.data.stages.map(E=>(E.id??E.__temp_key__)===s?{...E,...l}:E);break}case u.$k:{const{currentWorkflow:{data:{stages:v}}}=c.clientState,{newIndex:s,oldIndex:l}=p;if(s>=0&&s<v.length){const E=v[l];let w=[...v];w.splice(l,1),w.splice(s,0,E),a.clientState.currentWorkflow.data.stages=w}break}case u.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...p};break}default:break}c.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!o()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const h=(c=[])=>{const n=c.map(a=>a.id??a.__temp_key__);return Math.max(...n,-1)+1}},5318:(M,g,e)=>{"use strict";e.d(g,{k:()=>o,s:()=>u});var t=e(97003),i=e(86978);function o(d){if(!d)return null;const h=Object.entries(t.W.colors).filter(([,c])=>c.toUpperCase()===d.toUpperCase()).reduce((c,[n])=>(i.lv?.[n]&&(c=n),c),null);return h?{themeColorName:h,name:i.lv[h]}:null}function u(){return Object.entries(i.lv).map(([d,r])=>({hex:t.W.colors[d].toUpperCase(),name:r}))}},66578:(M,g,e)=>{"use strict";e.d(g,{V:()=>u});var t=e(43433),i=e.n(t),o=e(47853);async function u({values:d,formatMessage:r}){const h=o.Ry({contentTypes:o.IX().of(o.Z_()),name:o.Z_().max(255,r({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:o.IX().of(o.Ry().shape({name:o.Z_().required(r({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,r({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",r({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:n}}=this;return n.stages.filter(a=>a.name===c).length===1}),color:o.Z_().required(r({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await h.validate(d,{abortEarly:!1,context:d}),!0}catch(c){let n={};return c instanceof o.p8&&c.inner.forEach(a=>{i()(n,a.path,a.message)}),n}}},86961:(M,g,e)=>{var t=e(13578),i=e(27138),o="[object Boolean]";function u(d){return d===!0||d===!1||i(d)&&t(d)==o}M.exports=u},92249:(M,g,e)=>{var t=e(37997);function i(o){return t(o)&&o!=+o}M.exports=i},37997:(M,g,e)=>{var t=e(13578),i=e(27138),o="[object Number]";function u(d){return typeof d=="number"||i(d)&&t(d)==o}M.exports=u},45322:(M,g,e)=>{"use strict";e.d(g,{U:()=>v,y:()=>a});var t=e(74081),i=e(45485),o=e(72450),u=e(39267),d=e(74513),r=e(32370),h=e(10701),c=e(93415);const n=({theme:s,expanded:l,variant:E,disabled:w,error:C})=>C?`1px solid ${s.colors.danger600} !important`:w?`1px solid ${s.colors.neutral150}`:l?`1px solid ${s.colors.primary600}`:E==="primary"?`1px solid ${s.colors.neutral0}`:`1px solid ${s.colors.neutral100}`,a=(0,o.default)(r.Z)``,p=(0,o.default)(c.x)`
  border: ${n};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:s})=>s.colors.primary600};

    ${a} {
      color: ${({theme:s,expanded:l})=>l?void 0:s.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:s,expanded:l})=>l?void 0:s.colors.primary600};
    }

    & > ${h.k} {
      background: ${({theme:s})=>s.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:s})=>s.colors.primary200};
    }
  }
`,v=({children:s,disabled:l=!1,error:E,expanded:w=!1,hasErrorMessage:C=!0,id:x,onToggle:R,toggle:W,size:D="M",variant:T="primary",shadow:S})=>{const m=(0,d.M)(x),A=i.useMemo(()=>({expanded:w,onToggle:R,toggle:W,id:m,size:D,variant:T,disabled:l}),[l,w,m,R,D,W,T]);return(0,t.jsxs)(u.S.Provider,{value:A,children:[(0,t.jsx)(p,{"data-strapi-expanded":w,disabled:l,"aria-disabled":l,expanded:w,hasRadius:!0,variant:T,error:E,shadow:S,children:s}),E&&C&&(0,t.jsx)(c.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:E})})]})}},34642:(M,g,e)=>{"use strict";e.d(g,{v:()=>u});var t=e(74081),i=e(39267),o=e(93415);const u=({children:d,...r})=>{const{expanded:h,id:c}=(0,i.A)();if(!h)return null;const n=`accordion-content-${c}`,a=`accordion-label-${c}`,p=`accordion-desc-${c}`;return(0,t.jsx)(o.x,{role:"region",id:n,"aria-labelledby":a,"aria-describedby":p,...r,children:d})}},39267:(M,g,e)=>{"use strict";e.d(g,{A:()=>o,S:()=>i});var t=e(45485);const i=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,t.useContext)(i)},24920:(M,g,e)=>{"use strict";e.d(g,{B:()=>s});var t=e(74081),i=e(10411),o=e(72450),u=e(45322),d=e(39267);const r=({expanded:l,disabled:E,variant:w})=>{let C="neutral100";return l?C="primary100":E?C="neutral150":w==="primary"&&(C="neutral0"),C};var h=e(1782),c=e(50703),n=e(10701),a=e(32370);const p=(0,o.default)(h.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:E})=>E?l.colors.primary600:l.colors.neutral500};
    }
  }
`,v=(0,o.default)(n.k)`
  min-height: ${({theme:l,size:E})=>l.sizes.accordions[E]};
  border-radius: ${({theme:l,expanded:E})=>E?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,s=({title:l,description:E,as:w="span",togglePosition:C="right",action:x,...R})=>{const{onToggle:W,toggle:D,expanded:T,id:S,size:m,variant:A,disabled:I}=(0,d.A)(),b=`accordion-content-${S}`,j=`accordion-label-${S}`,G=`accordion-desc-${S}`,$=m==="M"?6:4,F=m==="M"?$:$-2,K=r({expanded:T,disabled:I,variant:A}),y={as:w,fontWeight:m==="S"?"bold":void 0,id:j,textColor:T?"primary600":"neutral700",ellipsis:!0,variant:m==="M"?"delta":void 0},P=T?"primary600":"neutral600",V=T?"primary200":"neutral200",k=m==="M"?`${32/16}rem`:`${24/16}rem`,f=()=>{I||(D&&!W?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):W&&W())},L=(0,t.jsx)(n.k,{justifyContent:"center",borderRadius:"50%",height:k,width:k,transform:T?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:V,cursor:I?"not-allowed":"pointer",onClick:f,shrink:0,children:(0,t.jsx)(c.J,{as:i.Z,width:m==="M"?`${11/16}rem`:`${8/16}rem`,color:T?"primary600":"neutral600"})});return(0,t.jsx)(v,{paddingBottom:F,paddingLeft:$,paddingRight:$,paddingTop:F,background:K,expanded:T,size:m,justifyContent:"space-between",cursor:I?"not-allowed":"",children:(0,t.jsxs)(n.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&L,(0,t.jsx)(p,{onClick:f,"aria-disabled":I,"aria-expanded":T,"aria-controls":b,"aria-labelledby":j,"data-strapi-accordion-toggle":!0,expanded:T,type:"button",flex:1,minWidth:0,...R,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.y,{...y,children:l}),E&&(0,t.jsx)(a.Z,{as:"p",id:G,textColor:P,children:E})]})}),C==="right"&&(0,t.jsxs)(n.k,{gap:3,children:[L,x]}),C==="left"&&x]})})}}}]);
