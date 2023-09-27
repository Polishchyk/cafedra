"use strict";(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[3981],{63542:(z,b,n)=>{n.r(b),n.d(b,{HomePageCE:()=>U,default:()=>Ge});var e=n(45485),c=n(93415),B=n(27997),P=n(9941),k=n(23298),v=n(74577),l=n(17741),L=n(364),D=n(48627),y=n(61020),O=n(32757);function $(t,o){var a=t.values,r=(0,D._T)(t,["values"]),i=o.values,u=(0,D._T)(o,["values"]);return(0,O.wU)(i,a)&&(0,O.wU)(r,u)}function G(t){var o=(0,y.Z)(),a=o.formatMessage,r=o.textComponent,i=r===void 0?e.Fragment:r,u=t.id,C=t.description,M=t.defaultMessage,f=t.values,p=t.children,h=t.tagName,x=h===void 0?i:h,I=t.ignoreTag,We={id:u,description:C,defaultMessage:M},S=a(We,f,{ignoreTag:I});return typeof p=="function"?p(Array.isArray(S)?S:[S]):x?e.createElement(x,null,e.Children.toArray(S)):e.createElement(e.Fragment,null,S)}G.displayName="FormattedMessage";var W=e.memo(G,$);W.displayName="MemoizedFormattedMessage";const K=W;var V=n(51447),d=n(72450),m=n(10701),E=n(32370),F=n(48102),A=n(53274),Y=n(99571),N=n(70627),s=n.n(N),g=n(16334),w=n(43234),J=n(2364);const H=({type:t,title:o,number:a,content:r,hasLine:i})=>{const{formatMessage:u}=(0,y.Z)();return e.createElement(c.x,null,e.createElement(m.k,null,e.createElement(c.x,{minWidth:(0,l.Q1)(30),marginRight:5},e.createElement(J.Z,{type:t,number:a})),e.createElement(E.Z,{variant:"delta",as:"h3"},u(o))),e.createElement(m.k,{alignItems:"flex-start"},e.createElement(m.k,{justifyContent:"center",minWidth:(0,l.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},i&&e.createElement(w.Z,{type:t,minHeight:t===g.lW?(0,l.Q1)(85):(0,l.Q1)(65)})),e.createElement(c.x,{marginTop:2},t===g.lW&&r)))};H.defaultProps={content:void 0,number:void 0,type:g.VM,hasLine:!0},H.propTypes={content:s().node,number:s().number,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,type:s().oneOf([g.lW,g.hx,g.VM]),hasLine:s().bool};const X=H,q=(t,o)=>t===-1||o<t?g.hx:o>t?g.VM:g.lW,Z=({sections:t,currentSectionKey:o})=>{const a=t.findIndex(r=>r.key===o);return e.createElement(c.x,null,t.map((r,i)=>e.createElement(X,{key:r.key,title:r.title,content:r.content,number:i+1,type:q(a,i),hasLine:i!==t.length-1})))};Z.defaultProps={currentSectionKey:void 0},Z.propTypes={sections:s().arrayOf(s().shape({key:s().string.isRequired,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,content:s().node})).isRequired,currentSectionKey:s().string};const _=Z,ee=()=>{const{guidedTourState:t,setSkipped:o}=(0,l.c1)(),{formatMessage:a}=(0,y.Z)(),{trackUsage:r}=(0,l.rS)(),i=Object.entries(Y.Z).map(([f,p])=>({key:f,title:p.home.title,content:e.createElement(l.Qj,{onClick:()=>r(p.home.trackingEvent),to:p.home.cta.target,endIcon:e.createElement(A.Z,null)},a(p.home.cta.title))})),C=i.map(f=>({isDone:Object.entries(t[f.key]).every(([,p])=>p),...f})).find(f=>!f.isDone)?.key,M=()=>{o(!0),r("didSkipGuidedtour")};return e.createElement(c.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(E.Z,{variant:"beta",as:"h2"},a({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(_,{sections:i,currentSectionKey:C})),e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(F.z,{variant:"tertiary",onClick:M},a({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},te=t=>Object.entries(t).every(([,o])=>Object.entries(o).every(([,a])=>a));var ne=n(92686),ae=n(80902);const oe=n.p+"7e9af4fb7e723fcebf1f.svg";var le=n(87050),re=n(23227),se=n(75682),ie=n(96700);const ce=n.p+"27d16aefee06412db90a.png",de=n.p+"bb4d0d527bdfb161bc5a.svg",me=n.p+"bb3108f7fd1e6179bde1.svg",ue=d.default.a`
  text-decoration: none;
`,pe=(0,d.default)(c.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,ge=(0,d.default)(m.k)`
  background: rgba(255, 255, 255, 0.3);
`,fe=()=>{const{formatMessage:t}=(0,y.Z)(),{trackUsage:o}=(0,l.rS)();return e.createElement(ue,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{o("didClickOnTryStrapiCloudSection")}},e.createElement(m.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(pe,{backgroundImage:ce,hasRadius:!0,padding:3},e.createElement(ge,{width:(0,l.Q1)(32),height:(0,l.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:me,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(m.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(m.k,null,e.createElement(E.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(E.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(c.x,{src:de,position:"absolute",top:0,right:0,as:"img"}))))},T=d.default.a`
  text-decoration: none;
`,he=()=>{const{formatMessage:t}=(0,y.Z)(),{trackUsage:o}=(0,l.rS)(),a=r=>{o(r)};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(fe,null),e.createElement(T,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonReadTheDocumentationSection")},e.createElement(l.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(le.Z,null),iconBackground:"primary100"})),e.createElement(T,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonCodeExampleSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(re.Z,null),iconBackground:"warning100"})),e.createElement(T,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonTutorialSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(se.Z,null),iconBackground:"secondary100"})),e.createElement(T,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonBlogSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ie.Z,null),iconBackground:"alternative100"})))};var Q=n(79213);const Ee=(0,d.default)(E.Z)`
  word-break: break-word;
`,R=({hasCreatedContentType:t,onCreateCT:o})=>{const{formatMessage:a}=(0,y.Z)();return e.createElement("div",null,e.createElement(c.x,{paddingLeft:6,paddingBottom:10},e.createElement(m.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(E.Z,{as:"h1",variant:"alpha"},a(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Ee,{textColor:"neutral600",variant:"epsilon"},a(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(Q.r,{isExternal:!0,href:"https://strapi.io/blog"},a({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(F.z,{size:"L",onClick:o,endIcon:e.createElement(A.Z,null)},a({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};R.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},R.propTypes={hasCreatedContentType:s().bool,onCreateCT:s().func};const ye=R;var ve=n(37370),ke=n(73352),Ce=n(82063),Me=n(70525),Se=n(1072),be=n(73354),Be=n(66770),Te=n(48157);const xe=(0,d.default)(ke.Z)`
  path {
    fill: #7289da !important;
  }
`,Pe=(0,d.default)(Ce.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,j=(0,d.default)(Me.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Le=(0,d.default)(Se.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,He=(0,d.default)(be.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Ze=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Be.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(xe,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(Pe,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Le,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(He,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(j,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(j,null),alt:"career"}],Re=(0,d.default)(ve.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,je=(0,d.default)(k.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ie=()=>{const{formatMessage:t}=(0,y.Z)(),{communityEdition:o}=(0,l.L7)(),a=[...Ze,{icon:e.createElement(j,null),link:o?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(c.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(c.x,{paddingBottom:7},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(E.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(E.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(Q.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Te.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(je,null,a.map(({icon:r,link:i,name:u})=>e.createElement(v.P,{col:6,s:12,key:u.id},e.createElement(Re,{size:"L",startIcon:r,variant:"tertiary",href:i,isExternal:!0},t(u))))))},De=(0,d.default)(c.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,U=()=>{const{collectionTypes:t,singleTypes:o,isLoading:a}=(0,ne.G)(),{guidedTourState:r,isGuidedTourVisible:i,isSkipped:u}=(0,l.c1)(),C=!te(r)&&i&&!u,{push:M}=(0,V.k6)(),f=h=>{h.preventDefault(),M("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const h=x=>x.filter(I=>I.isDisplayed);return h(t).length>1||h(o).length>0},[t,o]);return a?e.createElement(l.dO,null):e.createElement(B.A,null,e.createElement(K,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},h=>e.createElement(L.q,{title:h[0]})),e.createElement(P.o,null,e.createElement(De,null,e.createElement("img",{alt:"","aria-hidden":!0,src:oe})),e.createElement(c.x,{padding:10},e.createElement(k.r,null,e.createElement(v.P,{col:8,s:12},e.createElement(ye,{onCreateCT:f,hasCreatedContentType:p}))),e.createElement(k.r,{gap:6},e.createElement(v.P,{col:8,s:12},C?e.createElement(ee,null):e.createElement(he,null)),e.createElement(v.P,{col:4,s:12},e.createElement(Ie,null))))))};function Oe(){const t=(0,ae.c)(U,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const Ge=Oe},27997:(z,b,n)=>{n.d(b,{A:()=>v});var e=n(74081),c=n(72450),B=n(93415);const P=(0,c.default)(B.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,k=(0,c.default)(B.x)`
  overflow-x: hidden;
`,v=({sideNav:l,children:L})=>(0,e.jsxs)(P,{hasSideNav:Boolean(l),children:[l,(0,e.jsx)(k,{paddingBottom:10,children:L})]})}}]);
