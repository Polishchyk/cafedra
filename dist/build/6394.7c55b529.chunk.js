"use strict";(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[6394],{84409:(L,o,e)=>{e.d(o,{p:()=>d});var t=e(45485),u=e(17741),E=e(40464);const d=(c={})=>{const{get:_}=(0,u.kY)(),{data:n,isLoading:a}=(0,E.useQuery)(["ee","providers"],async()=>{const{data:m}=await _("/admin/providers");return m},c);return{providers:t.useMemo(()=>n??[],[n]),isLoading:a}}},76394:(L,o,e)=>{e.r(o),e.d(o,{LoginEE:()=>l});var t=e(45485),u=e(84366),E=e(93415),d=e(10701),c=e(32370),_=e(70627),n=e.n(_),a=e(61020),D=e(72450),m=e(50745),O=e(31640),M=e(84409),v=e(80090);const i=(0,D.default)(u.i)`
  flex: 1;
`,l=P=>{const{formatMessage:s}=(0,a.Z)(),{isLoading:g,providers:p}=(0,M.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!g&&p.length===0?t.createElement(m.ZP,null,t.createElement(O.Z,{...P})):t.createElement(m.ZP,null,t.createElement(O.Z,{...P},t.createElement(E.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(E.x,{paddingLeft:3,paddingRight:3},t.createElement(c.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:p,displayAllProviders:!1})))))};l.defaultProps={onSubmit:P=>P.preventDefault(),requestError:null},l.propTypes={formErrors:n().object.isRequired,modifiedData:n().object.isRequired,onChange:n().func.isRequired,onSubmit:n().func,requestError:n().object}},80090:(L,o,e)=>{e.d(o,{Z:()=>P});var t=e(45485),u=e(10701),E=e(2981),d=e(32370),c=e(23298),_=e(74577),n=e(70627),a=e.n(n),D=e(61020),m=e(47533),O=e(72450);const M=O.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`,v=(0,O.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,i=({provider:s})=>t.createElement(E.u,{label:s.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`},s.icon?t.createElement("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,s.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const l=({providers:s,displayAllProviders:g})=>{const{formatMessage:p}=(0,D.Z)();return g?t.createElement(c.r,{gap:4},s.map(r=>t.createElement(_.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):s.length>2&&!g?t.createElement(c.r,{gap:4},s.slice(0,2).map(r=>t.createElement(_.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(_.P,{col:4},t.createElement(E.u,{label:p({id:"global.see-more"})},t.createElement(M,{as:m.Link,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},s.map(r=>t.createElement(i,{key:r.uid,provider:r})))};l.defaultProps={displayAllProviders:!0},l.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const P=l}}]);
