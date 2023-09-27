"use strict";(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[169],{70169:(v,i,e)=>{e.r(i),e.d(i,{REVIEW_WORKFLOW_FILTERS:()=>P});var l=e(21892),t=e(45485),E=e(8295),d=e(61121),n=e(70627),s=e.n(n),o=e(61020),r=e(78186),a=e(54920);const u=({value:T,onChange:A})=>{const{formatMessage:W}=(0,o.Z)(),{users:S,isLoading:p}=(0,a.R)();return t.createElement(E.hQ,{value:T,"aria-label":W({id:"content-manager.components.Filters.usersSelect.label",defaultMessage:"Search and select an user to filter"}),onChange:A,loading:p},S.map(m=>t.createElement(d.O,{key:m.id,value:m.id.toString()},(0,r.G)(m,W))))};u.propTypes={onChange:s().func.isRequired,value:s().string},u.defaultProps={value:""};var g=e(63738),O=e(10701),c=e(32370),f=e(77970),C=e(52258),y=e(5318);const R=({value:T,onChange:A,uid:W})=>{const{formatMessage:S}=(0,o.Z)(),{workflows:[p],isLoading:m}=(0,C.n)({filters:{contentTypes:W}});return t.createElement(g.q4,{"aria-label":S({id:"content-manager.components.Filters.reviewWorkflows.label",defaultMessage:"Search and select an workflow stage to filter"}),value:T,onChange:A,loading:m,customizeContent:()=>t.createElement(O.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%"},t.createElement(c.Z,{textColor:"neutral800",ellipsis:!0},T),m?t.createElement(f.a,{small:!0,style:{display:"flex"}}):null)},(p?.stages??[]).map(({id:h,color:L,name:w})=>{const{themeColorName:F}=(0,y.k)(L);return t.createElement(g.ag,{key:h,startIcon:t.createElement(O.k,{height:2,background:L,borderColor:F==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:w},w)}))};R.defaultProps={value:""},R.propTypes={onChange:s().func.isRequired,uid:s().string.isRequired,value:s().string};const P=[{fieldSchema:{type:"relation",mainField:{name:"name",schema:{type:"string"}}},metadatas:{customInput:R,label:{id:(0,l.OB)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}},name:"strapi_stage"},{fieldSchema:{type:"relation",mainField:{name:"id",schema:{type:"int"}}},metadatas:{customInput:u,customOperators:[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],label:{id:(0,l.OB)("containers.ListPage.table-headers.reviewWorkflows.assignee.label"),defaultMessage:"Assignee"}},name:"strapi_assignee"}]},86978:(v,i,e)=>{e.d(i,{$k:()=>r,Ef:()=>c,FT:()=>g,Nj:()=>o,Ot:()=>s,VS:()=>a,_X:()=>f,gu:()=>E,lv:()=>u,qZ:()=>d,sN:()=>t,uL:()=>O,x4:()=>n});var l=e(97003);const t="settings_review-workflows",E="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_WORKFLOW",n="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",s="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",r="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",a="Settings/Review_Workflows/WORKFLOW_UPDATE",u={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},g=l.W.colors.primary600,O={STAGE:"stage"},c="numberOfWorkflows",f="stagesPerWorkflow"},52258:(v,i,e)=>{e.d(i,{n:()=>E});var l=e(17741),t=e(40464);function E(d={}){const{get:n}=(0,l.kY)(),{id:s="",...o}=d,r={populate:"stages"},{data:a,isLoading:u,status:g,refetch:O}=(0,t.useQuery)(["review-workflows","workflows",s],async()=>(await n(`/admin/review-workflows/workflows/${s}`,{params:{...r,...o}})).data);let c=[];return s&&a?.data?c=[a.data]:Array.isArray(a?.data)&&(c=a.data),{meta:a?.meta??{},workflows:c,isLoading:u,status:g,refetch:O}}},5318:(v,i,e)=>{e.d(i,{k:()=>E,s:()=>d});var l=e(97003),t=e(86978);function E(n){if(!n)return null;const o=Object.entries(l.W.colors).filter(([,r])=>r.toUpperCase()===n.toUpperCase()).reduce((r,[a])=>(t.lv?.[a]&&(r=a),r),null);return o?{themeColorName:o,name:t.lv[o]}:null}function d(){return Object.entries(t.lv).map(([n,s])=>({hex:l.W.colors[n].toUpperCase(),name:s}))}}}]);
