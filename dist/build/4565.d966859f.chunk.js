"use strict";(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[4565],{24565:(c,O,e)=>{e.d(O,{ReviewWorkflowsAssigneeEE:()=>u,ReviewWorkflowsStageEE:()=>W});var s=e(45485),o=e(10701),T=e(93415),l=e(32370),r=e(17741),a=e(70627),t=e.n(a),n=e(86978),E=e(5318);function W({color:i,name:R}){const{themeColorName:f}=(0,E.k)(i);return s.createElement(o.k,{alignItems:"center",gap:2,maxWidth:(0,r.Q1)(300)},s.createElement(T.x,{height:2,background:i,borderColor:f==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),s.createElement(l.Z,{fontWeight:"regular",textColor:"neutral700",ellipsis:!0},R))}W.defaultProps={color:n.FT},W.propTypes={color:t().string,name:t().string.isRequired};var A=e(61020),g=e(21892);function u({user:i}){const{formatMessage:R}=(0,A.Z)();return s.createElement(l.Z,{textColor:"neutral800"},(0,g.Gf)(i,R))}u.propTypes={user:t().shape({firstname:t().string,lastname:t().string,username:t().string}).isRequired}},86978:(c,O,e)=>{e.d(O,{$k:()=>n,Ef:()=>u,FT:()=>A,Nj:()=>t,Ot:()=>a,VS:()=>E,_X:()=>i,gu:()=>T,lv:()=>W,qZ:()=>l,sN:()=>o,uL:()=>g,x4:()=>r});var s=e(97003);const o="settings_review-workflows",T="Settings/Review_Workflows/RESET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOW",r="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",t="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",n="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",E="Settings/Review_Workflows/WORKFLOW_UPDATE",W={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},A=s.W.colors.primary600,g={STAGE:"stage"},u="numberOfWorkflows",i="stagesPerWorkflow"},5318:(c,O,e)=>{e.d(O,{k:()=>T,s:()=>l});var s=e(97003),o=e(86978);function T(r){if(!r)return null;const t=Object.entries(s.W.colors).filter(([,n])=>n.toUpperCase()===r.toUpperCase()).reduce((n,[E])=>(o.lv?.[E]&&(n=E),n),null);return t?{themeColorName:t,name:o.lv[t]}:null}function l(){return Object.entries(o.lv).map(([r,a])=>({hex:s.W.colors[r].toUpperCase(),name:a}))}}}]);
