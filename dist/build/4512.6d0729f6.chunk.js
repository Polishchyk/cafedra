(self.webpackChunkcafedra=self.webpackChunkcafedra||[]).push([[4512],{34512:(Q,X,v)=>{"use strict";v.r(X),v.d(X,{default:()=>y});var j=v(45485),bt=v(70627),m=v.n(bt),S=v(72450),u=v(45648),l=v(77970),c=v(93415),g=v(17741),w=v(8175),L=v.n(w),C=v(39642),E=v(95046),O=v.n(E);const R=async(n,a)=>{if(!a)return;const{plugins:_=[]}=n,s=[..._.map(F=>F.pluginName)],P=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],A=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],H=["FontBackgroundColor","FontColor","FontFamily","FontSize"],nt=["List","DocumentList"];await Promise.all(P.filter(({name:F})=>s.includes(F)).map(async({module:F})=>await v(74060)(`./${F}/build/translations/${a}.js`).catch(()=>null))),s.some(F=>A.includes(F))&&await v(98996)(`./${a}.js`).catch(()=>null),s.some(F=>nt.includes(F))&&await v(44042)(`./${a}.js`).catch(()=>null),s.some(F=>H.includes(F))&&await v(42940)(`./${a}.js`).catch(()=>null)},B=async n=>{const a=new URLSearchParams(window.location.search),s=Object.fromEntries(a.entries())["plugins[i18n][locale]"],P=g.I8.getUserInfo().preferedLanguage,{ui:A=P||"en",content:H,textPartLanguage:nt,ignorei18n:F}=n.language||{};if(s){const it=s.split("-")[0];n.language={ui:typeof n.language=="string"?n.language:A,content:F?H:it,textPartLanguage:nt},await R(n,n.language.ui),await R(n,n.language.content)}else typeof n.language=="object"?(await R(n,n.language.ui),await R(n,n.language.content)):typeof n.language=="string"?await R(n,n.language):(n.language=P,await R(n,P))},gt=n=>{const{configs:a,configsOverwrite:_}=globalThis.CKEditorConfig||{};let s;return _?s=a:(s=C.Z,a&&Object.keys(a).map(A=>{C.Z.hasOwnProperty(A)?(s[A].fields={...C.Z[A].field,...a[A].field},s[A].styles=a[A].styles||C.Z[A].styles,s[A].editorConfig={...C.Z[A].editorConfig,...a[A].editorConfig}):s[A]=a[A]})),L()(s[n])},ft=(n,{responsiveDimensions:a},_)=>{const s=n.editorConfig?.plugins?[...n.editorConfig.plugins.map(P=>P.pluginName)]:[];s.includes("StrapiMediaLib")&&(n.editorConfig.strapiMediaLib={toggle:_}),s.includes("StrapiUploadAdapter")&&(n.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+g.I8.getToken()},backendUrl:strapi.backendURL,responsive:a}),s.includes("WordCount")&&(n.editorConfig.WordCountPlugin=!0)},rt=n=>(0,g.WY)(`/${O()}/config/${n}`,{method:"GET"}),Z=async(n,a)=>{const _=gt(n),s=await rt("upload");return ft(_,s,a),await B(_.editorConfig),{currentConfig:_,uploadPluginConfig:s}},at=(0,S.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,st=(0,S.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,d=(0,S.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,h=(0,S.css)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,x={common:at,light:st,dark:d,additional:h},z=()=>{const n=localStorage.getItem("STRAPI_THEME")||"light",{theme:a,themeOverwrite:_}=globalThis.CKEditorConfig||{},s=_?a:{...x,...a};return(0,S.createGlobalStyle)`
       ${s.common}
       ${s[n]}
       ${s.additional}
   `},T=({isOpen:n,onChange:a,onToggle:_,editor:s,uploadConfig:{responsiveDimensions:P}})=>{const{components:A}=(0,g.yX)(),H=A["media-library"],nt=it=>{let q="";it.map(({name:dt,url:_t,alt:xt,formats:ot,mime:jt})=>{if(jt.includes("image"))if(ot&&P){let zt="",G=Object.keys(ot).sort((J,vt)=>ot[J].width-ot[vt].width);G.map(J=>zt+=(0,g.CR)(ot[J].url)+` ${ot[J].width}w,`),q+=`<img src="${_t}" alt="${xt}" width="${ot[G[G.length-1]].width}px" srcset="${zt}" />`}else q+=`<img src="${_t}" alt="${xt}" />`;else jt.includes("application/pdf")&&(q=`<a href="${(0,g.CR)(_t)}" download="${dt}">${dt||"Download PDF"}</a>`)});const Y=s.data.processor.toView(q),N=s.data.toModel(Y);s.model.insertContent(N),_()},F=it=>{const q=it.map(Y=>({name:Y.name,alt:Y.alternativeText||Y.name,url:(0,g.CR)(Y.url),mime:Y.mime,formats:Y.formats}));nt(q)};return n?j.createElement(H,{onClose:_,onSelectAssets:F}):null};T.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},T.propTypes={isOpen:m().bool,onChange:m().func,onToggle:m().func};const I=T;var et=v(72958),$=v(66916);const K=z(),kt=(0,S.default)("div")`${({editorStyles:n})=>n}`,yt=({onChange:n,name:a,value:_,disabled:s,preset:P,maxLength:A})=>{const[H,nt]=(0,j.useState)(!1),[F,it]=(0,j.useState)(!1),[q,Y]=(0,j.useState)(null),[N,dt]=(0,j.useState)(null),[_t,xt]=(0,j.useState)(!1),ot=(0,j.useRef)(null),jt=()=>it(G=>!G),zt=G=>G>A?xt(!0):xt(!1);return(0,j.useEffect)(()=>{(async()=>{const{currentConfig:G,uploadPluginConfig:J}=await Z(P,jt);dt(G),Y(J)})()},[]),j.createElement(j.Fragment,null,N&&j.createElement(K,null),j.createElement(kt,{editorStyles:N?.styles},!N&&j.createElement(Ut,{hasRadius:!0,background:"neutral100"},j.createElement(l.a,null,"Loading...")),N&&j.createElement(u.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:N?.editorConfig,disabled:s,data:_,onReady:G=>{if(N.editorConfig.WordCountPlugin){const J=G.plugins.get("WordCount");J.on("update",($t,Ct)=>zt(Ct.characters)),ot.current?.appendChild(J.wordCountContainer)}G.plugins.has("ImageUploadEditing")&&G.plugins.get("ImageUploadEditing").on("uploadComplete",(J,{data:vt,imageElement:$t})=>G.model.change(Ct=>Ct.setAttribute("alt",vt.alt,$t))),nt(G)},onChange:(G,J)=>{const vt=J.getData();n({target:{name:a,value:vt}})}}),N&&N.editorConfig.WordCountPlugin&&j.createElement(wt,{color:_t?"danger500":"neutral400",ref:ot},!H&&j.createElement(l.a,{small:!0},"Loading...")),q&&j.createElement(I,{isOpen:F,onToggle:jt,editor:H,uploadConfig:q})))};yt.defaultProps={value:"",disabled:!1},yt.propTypes={onChange:m().func.isRequired,name:m().string.isRequired,value:m().string,disabled:m().bool};const wt=(0,S.default)(c.x)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Ut=(0,S.default)(c.x)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Nt=yt;var Bt=v(61020),mt=v(66769),Rt=v(58892);const lt=({name:n,attribute:a,onChange:_,value:s,intlLabel:P,labelAction:A,disabled:H,error:nt,description:F,required:it})=>{const{formatMessage:q}=(0,Bt.Z)(),{preset:Y,maxLengthCharacters:N,...dt}=a.options;return j.createElement(mt.Field,{name:n,id:n,error:nt,hint:F&&q(F)},j.createElement(Rt.Stack,{spacing:1},j.createElement(mt.FieldLabel,{action:A,required:it},q(P)),j.createElement(Nt,{disabled:H,name:n,onChange:_,value:s,preset:Y,maxLength:N}),j.createElement(mt.FieldHint,null),j.createElement(mt.FieldError,null)))};lt.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},lt.propTypes={intlLabel:m().object.isRequired,onChange:m().func.isRequired,attribute:m().object.isRequired,name:m().string.isRequired,description:m().object,disabled:m().bool,error:m().string,labelAction:m().object,required:m().bool,value:m().string};const y=lt},66916:(Q,X,v)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var j={655:(u,l,c)=>{"use strict";c.d(l,{Z:()=>L});var g=c(609),w=c.n(g)()(function(C){return C[1]});w.push([u.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const L=w},609:u=>{"use strict";u.exports=function(l){var c=[];return c.toString=function(){return this.map(function(g){var w=l(g);return g[2]?"@media ".concat(g[2]," {").concat(w,"}"):w}).join("")},c.i=function(g,w,L){typeof g=="string"&&(g=[[null,g,""]]);var C={};if(L)for(var E=0;E<this.length;E++){var O=this[E][0];O!=null&&(C[O]=!0)}for(var R=0;R<g.length;R++){var B=[].concat(g[R]);L&&C[B[0]]||(w&&(B[2]?B[2]="".concat(w," and ").concat(B[2]):B[2]=w),c.push(B))}},c}},62:(u,l,c)=>{"use strict";var g,w=function(){return g===void 0&&(g=Boolean(window&&document&&document.all&&!window.atob)),g},L=function(){var d={};return function(h){if(d[h]===void 0){var p=document.querySelector(h);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}d[h]=p}return d[h]}}(),C=[];function E(d){for(var h=-1,p=0;p<C.length;p++)if(C[p].identifier===d){h=p;break}return h}function O(d,h){for(var p={},x=[],z=0;z<d.length;z++){var T=d[z],I=h.base?T[0]+h.base:T[0],et=p[I]||0,$="".concat(I," ").concat(et);p[I]=et+1;var K=E($),kt={css:T[1],media:T[2],sourceMap:T[3]};K!==-1?(C[K].references++,C[K].updater(kt)):C.push({identifier:$,updater:st(kt,h),references:1}),x.push($)}return x}function R(d){var h=document.createElement("style"),p=d.attributes||{};if(p.nonce===void 0){var x=c.nc;x&&(p.nonce=x)}if(Object.keys(p).forEach(function(T){h.setAttribute(T,p[T])}),typeof d.insert=="function")d.insert(h);else{var z=L(d.insert||"head");if(!z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");z.appendChild(h)}return h}var B,gt=(B=[],function(d,h){return B[d]=h,B.filter(Boolean).join(`
`)});function ft(d,h,p,x){var z=p?"":x.media?"@media ".concat(x.media," {").concat(x.css,"}"):x.css;if(d.styleSheet)d.styleSheet.cssText=gt(h,z);else{var T=document.createTextNode(z),I=d.childNodes;I[h]&&d.removeChild(I[h]),I.length?d.insertBefore(T,I[h]):d.appendChild(T)}}function rt(d,h,p){var x=p.css,z=p.media,T=p.sourceMap;if(z?d.setAttribute("media",z):d.removeAttribute("media"),T&&typeof btoa<"u"&&(x+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T))))," */")),d.styleSheet)d.styleSheet.cssText=x;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(x))}}var Z=null,at=0;function st(d,h){var p,x,z;if(h.singleton){var T=at++;p=Z||(Z=R(h)),x=ft.bind(null,p,T,!1),z=ft.bind(null,p,T,!0)}else p=R(h),x=rt.bind(null,p,h),z=function(){(function(I){if(I.parentNode===null)return!1;I.parentNode.removeChild(I)})(p)};return x(d),function(I){if(I){if(I.css===d.css&&I.media===d.media&&I.sourceMap===d.sourceMap)return;x(d=I)}else z()}}u.exports=function(d,h){(h=h||{}).singleton||typeof h.singleton=="boolean"||(h.singleton=w());var p=O(d=d||[],h);return function(x){if(x=x||[],Object.prototype.toString.call(x)==="[object Array]"){for(var z=0;z<p.length;z++){var T=E(p[z]);C[T].references--}for(var I=O(x,h),et=0;et<p.length;et++){var $=E(p[et]);C[$].references===0&&(C[$].updater(),C.splice($,1))}p=I}}}},704:(u,l,c)=>{u.exports=c(79)("./src/core.js")},492:(u,l,c)=>{u.exports=c(79)("./src/engine.js")},273:(u,l,c)=>{u.exports=c(79)("./src/ui.js")},209:(u,l,c)=>{u.exports=c(79)("./src/utils.js")},79:u=>{"use strict";u.exports=CKEditor5.dll}},bt={};function m(u){var l=bt[u];if(l!==void 0)return l.exports;var c=bt[u]={id:u,exports:{}};return j[u](c,c.exports,m),c.exports}m.n=u=>{var l=u&&u.__esModule?()=>u.default:()=>u;return m.d(l,{a:l}),l},m.d=(u,l)=>{for(var c in l)m.o(l,c)&&!m.o(u,c)&&Object.defineProperty(u,c,{enumerable:!0,get:l[c]})},m.o=(u,l)=>Object.prototype.hasOwnProperty.call(u,l),m.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},m.nc=void 0;var S={};(()=>{"use strict";m.r(S),m.d(S,{ClassicEditor:()=>Rt});var u=m(273),l=m(492),c=m(209);class g extends u.EditorUI{constructor(n,a){super(n),this.view=a,this._toolbarConfig=(0,u.normalizeToolbarConfig)(n.config.get("toolbar")),this._elementReplacer=new c.ElementReplacer}get element(){return this.view.element}init(n){const a=this.editor,_=this.view,s=a.editing.view,P=_.editable,A=s.document.getRoot();P.name=A.rootName,_.render();const H=P.element;this.setEditableElement(P.name,H),_.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(H),n&&this._elementReplacer.replace(n,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const n=this.view,a=this.editor.editing.view;this._elementReplacer.restore(),a.detachDomRoot(n.editable.name),n.destroy()}_initToolbar(){const n=this.view;n.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),n.stickyPanel.limiterElement=n.element,n.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:a})=>a||0),n.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(n.toolbar)}_initPlaceholder(){const n=this.editor,a=n.editing.view,_=a.document.getRoot(),s=n.sourceElement,P=n.config.get("placeholder")||s&&s.tagName.toLowerCase()==="textarea"&&s.getAttribute("placeholder");P&&(0,l.enablePlaceholder)({view:a,element:_,text:P,isDirectHost:!1,keepOnFocus:!0})}}var w=m(62),L=m.n(w),C=m(655),E={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};L()(C.Z,E),C.Z.locals;class O extends u.BoxedEditorUIView{constructor(n,a,_={}){super(n),this.stickyPanel=new u.StickyPanelView(n),this.toolbar=new u.ToolbarView(n,{shouldGroupWhenFull:_.shouldToolbarGroupWhenFull}),this.editable=new u.InlineEditableUIView(n,a)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var R=m(704);const B=function(y){return y!=null&&typeof y=="object"},gt=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;var ft=typeof self=="object"&&self&&self.Object===Object&&self;const rt=(gt||ft||Function("return this")()).Symbol;var Z=Object.prototype,at=Z.hasOwnProperty,st=Z.toString,d=rt?rt.toStringTag:void 0;const h=function(y){var n=at.call(y,d),a=y[d];try{y[d]=void 0;var _=!0}catch{}var s=st.call(y);return _&&(n?y[d]=a:delete y[d]),s};var p=Object.prototype.toString;const x=function(y){return p.call(y)};var z="[object Null]",T="[object Undefined]",I=rt?rt.toStringTag:void 0;const et=function(y){return y==null?y===void 0?T:z:I&&I in Object(y)?h(y):x(y)},$=function(y,n){return function(a){return y(n(a))}}(Object.getPrototypeOf,Object);var K="[object Object]",kt=Function.prototype,yt=Object.prototype,wt=kt.toString,Ut=yt.hasOwnProperty,Nt=wt.call(Object);const Bt=function(y){if(!B(y)||et(y)!=K)return!1;var n=$(y);if(n===null)return!0;var a=Ut.call(n,"constructor")&&n.constructor;return typeof a=="function"&&a instanceof a&&wt.call(a)==Nt},mt=function(y){return B(y)&&y.nodeType===1&&!Bt(y)};class Rt extends(0,R.DataApiMixin)((0,R.ElementApiMixin)(R.Editor)){constructor(n,a={}){if(!lt(n)&&a.initialData!==void 0)throw new c.CKEditorError("editor-create-initial-data",null);super(a),this.config.get("initialData")===void 0&&this.config.set("initialData",function(P){return lt(P)?(0,c.getDataFromElement)(P):P}(n)),lt(n)&&(this.sourceElement=n),this.model.document.createRoot();const _=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new O(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:_});this.ui=new g(this,s),(0,R.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(n,a={}){return new Promise(_=>{const s=new this(n,a);_(s.initPlugins().then(()=>s.ui.init(lt(n)?n:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function lt(y){return mt(y)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=S})()},45648:(Q,X,v)=>{Q=v.nmd(Q);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(j,bt){Q.exports=bt(v(45485))})(self,j=>(()=>{var bt={703:(l,c,g)=>{"use strict";var w=g(414);function L(){}function C(){}C.resetWarningCache=L,l.exports=function(){function E(B,gt,ft,rt,Z,at){if(at!==w){var st=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw st.name="Invariant Violation",st}}function O(){return E}E.isRequired=E;var R={array:E,bigint:E,bool:E,func:E,number:E,object:E,string:E,symbol:E,any:E,arrayOf:O,element:E,elementType:E,instanceOf:O,node:E,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:C,resetWarningCache:L};return R.PropTypes=R,R}},697:(l,c,g)=>{l.exports=g(703)()},414:l=>{"use strict";l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:l=>{"use strict";l.exports=j}},m={};function S(l){var c=m[l];if(c!==void 0)return c.exports;var g=m[l]={exports:{}};return bt[l](g,g.exports,S),g.exports}S.n=l=>{var c=l&&l.__esModule?()=>l.default:()=>l;return S.d(c,{a:c}),c},S.d=(l,c)=>{for(var g in c)S.o(c,g)&&!S.o(l,g)&&Object.defineProperty(l,g,{enumerable:!0,get:c[g]})},S.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c),S.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var u={};return(()=>{"use strict";S.r(u),S.d(u,{CKEditor:()=>St,CKEditorContext:()=>fe});var l=S(787),c=S.n(l),g=S(697),w=S.n(g);const L=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},C=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;var E=typeof self=="object"&&self&&self.Object===Object&&self;const O=C||E||Function("return this")(),R=function(){return O.Date.now()};var B=/\s/;const gt=function(t){for(var e=t.length;e--&&B.test(t.charAt(e)););return e};var ft=/^\s+/;const rt=function(t){return t&&t.slice(0,gt(t)+1).replace(ft,"")},Z=O.Symbol;var at=Object.prototype,st=at.hasOwnProperty,d=at.toString,h=Z?Z.toStringTag:void 0;const p=function(t){var e=st.call(t,h),o=t[h];try{t[h]=void 0;var r=!0}catch{}var i=d.call(t);return r&&(e?t[h]=o:delete t[h]),i};var x=Object.prototype.toString;const z=function(t){return x.call(t)};var T="[object Null]",I="[object Undefined]",et=Z?Z.toStringTag:void 0;const $=function(t){return t==null?t===void 0?I:T:et&&et in Object(t)?p(t):z(t)},K=function(t){return t!=null&&typeof t=="object"};var kt="[object Symbol]";const yt=function(t){return typeof t=="symbol"||K(t)&&$(t)==kt};var wt=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,mt=parseInt;const Rt=function(t){if(typeof t=="number")return t;if(yt(t))return wt;if(L(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=L(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=rt(t);var o=Nt.test(t);return o||Bt.test(t)?mt(t.slice(2),o?2:8):Ut.test(t)?wt:+t};var lt="Expected a function",y=Math.max,n=Math.min;const a=function(t,e,o){var r,i,f,b,k,U,D=0,Yt=!1,Tt=!1,ut=!0;if(typeof t!="function")throw new TypeError(lt);function Dt(tt){var pt=r,At=i;return r=i=void 0,D=tt,b=t.apply(At,pt)}function Zt(tt){var pt=tt-U;return U===void 0||pt>=e||pt<0||Tt&&tt-D>=f}function It(){var tt=R();if(Zt(tt))return ct(tt);k=setTimeout(It,function(pt){var At=e-(pt-U);return Tt?n(At,f-(pt-D)):At}(tt))}function ct(tt){return k=void 0,ut&&r?Dt(tt):(r=i=void 0,b)}function ht(){var tt=R(),pt=Zt(tt);if(r=arguments,i=this,U=tt,pt){if(k===void 0)return function(At){return D=At,k=setTimeout(It,e),Yt?Dt(At):b}(U);if(Tt)return clearTimeout(k),k=setTimeout(It,e),Dt(U)}return k===void 0&&(k=setTimeout(It,e)),b}return e=Rt(e)||0,L(o)&&(Yt=!!o.leading,f=(Tt="maxWait"in o)?y(Rt(o.maxWait)||0,e):f,ut="trailing"in o?!!o.trailing:ut),ht.cancel=function(){k!==void 0&&clearTimeout(k),D=0,r=U=i=k=void 0},ht.flush=function(){return k===void 0?b:ct(R())},ht};var _="Expected a function";const s=function(t,e,o){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(_);return L(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),a(t,e,{leading:r,maxWait:e,trailing:i})},P=function(){this.__data__=[],this.size=0},A=function(t,e){return t===e||t!=t&&e!=e},H=function(t,e){for(var o=t.length;o--;)if(A(t[o][0],e))return o;return-1};var nt=Array.prototype.splice;const F=function(t){var e=this.__data__,o=H(e,t);return!(o<0)&&(o==e.length-1?e.pop():nt.call(e,o,1),--this.size,!0)},it=function(t){var e=this.__data__,o=H(e,t);return o<0?void 0:e[o][1]},q=function(t){return H(this.__data__,t)>-1},Y=function(t,e){var o=this.__data__,r=H(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function N(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}N.prototype.clear=P,N.prototype.delete=F,N.prototype.get=it,N.prototype.has=q,N.prototype.set=Y;const dt=N,_t=function(){this.__data__=new dt,this.size=0},xt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},ot=function(t){return this.__data__.get(t)},jt=function(t){return this.__data__.has(t)};var zt="[object AsyncFunction]",G="[object Function]",J="[object GeneratorFunction]",vt="[object Proxy]";const $t=function(t){if(!L(t))return!1;var e=$(t);return e==G||e==J||e==zt||e==vt},Ct=O["__core-js_shared__"];var be=function(){var t=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const so=function(t){return!!be&&be in t};var lo=Function.prototype.toString;const Et=function(t){if(t!=null){try{return lo.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,fo=Object.prototype,po=ho.toString,bo=fo.hasOwnProperty,go=RegExp("^"+po.call(bo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ko=function(t){return!(!L(t)||so(t))&&($t(t)?go:uo).test(Et(t))},mo=function(t,e){return t?.[e]},Ot=function(t,e){var o=mo(t,e);return ko(o)?o:void 0},Ht=Ot(O,"Map"),Gt=Ot(Object,"create"),vo=function(){this.__data__=Gt?Gt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var wo="__lodash_hash_undefined__",_o=Object.prototype.hasOwnProperty;const xo=function(t){var e=this.__data__;if(Gt){var o=e[t];return o===wo?void 0:o}return _o.call(e,t)?e[t]:void 0};var jo=Object.prototype.hasOwnProperty;const Co=function(t){var e=this.__data__;return Gt?e[t]!==void 0:jo.call(e,t)};var Eo="__lodash_hash_undefined__";const Oo=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Gt&&e===void 0?Eo:e,this};function Wt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Wt.prototype.clear=vo,Wt.prototype.delete=yo,Wt.prototype.get=xo,Wt.prototype.has=Co,Wt.prototype.set=Oo;const ge=Wt,Po=function(){this.size=0,this.__data__={hash:new ge,map:new(Ht||dt),string:new ge}},So=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Qt=function(t,e){var o=t.__data__;return So(e)?o[typeof e=="string"?"string":"hash"]:o.map},To=function(t){var e=Qt(this,t).delete(t);return this.size-=e?1:0,e},Io=function(t){return Qt(this,t).get(t)},Ao=function(t){return Qt(this,t).has(t)},Ro=function(t,e){var o=Qt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=Po,Mt.prototype.delete=To,Mt.prototype.get=Io,Mt.prototype.has=Ao,Mt.prototype.set=Ro;const zo=Mt;var Wo=200;const Mo=function(t,e){var o=this.__data__;if(o instanceof dt){var r=o.__data__;if(!Ht||r.length<Wo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new zo(r)}return o.set(t,e),this.size=o.size,this};function Lt(t){var e=this.__data__=new dt(t);this.size=e.size}Lt.prototype.clear=_t,Lt.prototype.delete=xt,Lt.prototype.get=ot,Lt.prototype.has=jt,Lt.prototype.set=Mo;const Lo=Lt,Fo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},ke=function(){try{var t=Ot(Object,"defineProperty");return t({},"",{}),t}catch{}}(),me=function(t,e,o){e=="__proto__"&&ke?ke(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Do=Object.prototype.hasOwnProperty;const ve=function(t,e,o){var r=t[e];Do.call(t,e)&&A(r,o)&&(o!==void 0||e in t)||me(t,e,o)},qt=function(t,e,o,r){var i=!o;o||(o={});for(var f=-1,b=e.length;++f<b;){var k=e[f],U=r?r(o[k],t[k],k,o,t):void 0;U===void 0&&(U=t[k]),i?me(o,k,U):ve(o,k,U)}return o},Uo=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var No="[object Arguments]";const ye=function(t){return K(t)&&$(t)==No};var we=Object.prototype,Bo=we.hasOwnProperty,$o=we.propertyIsEnumerable;const Ho=ye(function(){return arguments}())?ye:function(t){return K(t)&&Bo.call(t,"callee")&&!$o.call(t,"callee")},Jt=Array.isArray,Go=function(){return!1};var _e=X&&!X.nodeType&&X,xe=_e&&!0&&Q&&!Q.nodeType&&Q,je=xe&&xe.exports===_e?O.Buffer:void 0;const Ce=(je?je.isBuffer:void 0)||Go;var Ko=9007199254740991,Vo=/^(?:0|[1-9]\d*)$/;const Zo=function(t,e){var o=typeof t;return!!(e=e??Ko)&&(o=="number"||o!="symbol"&&Vo.test(t))&&t>-1&&t%1==0&&t<e};var Qo=9007199254740991;const Ee=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Qo};var M={};M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M["[object Arguments]"]=M["[object Array]"]=M["[object ArrayBuffer]"]=M["[object Boolean]"]=M["[object DataView]"]=M["[object Date]"]=M["[object Error]"]=M["[object Function]"]=M["[object Map]"]=M["[object Number]"]=M["[object Object]"]=M["[object RegExp]"]=M["[object Set]"]=M["[object String]"]=M["[object WeakMap]"]=!1;const qo=function(t){return K(t)&&Ee(t.length)&&!!M[$(t)]},Xt=function(t){return function(e){return t(e)}};var Oe=X&&!X.nodeType&&X,Kt=Oe&&!0&&Q&&!Q.nodeType&&Q,te=Kt&&Kt.exports===Oe&&C.process;const Ft=function(){try{var t=Kt&&Kt.require&&Kt.require("util").types;return t||te&&te.binding&&te.binding("util")}catch{}}();var Pe=Ft&&Ft.isTypedArray;const Yo=Pe?Xt(Pe):qo;var Jo=Object.prototype.hasOwnProperty;const Se=function(t,e){var o=Jt(t),r=!o&&Ho(t),i=!o&&!r&&Ce(t),f=!o&&!r&&!i&&Yo(t),b=o||r||i||f,k=b?Uo(t.length,String):[],U=k.length;for(var D in t)!e&&!Jo.call(t,D)||b&&(D=="length"||i&&(D=="offset"||D=="parent")||f&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||Zo(D,U))||k.push(D);return k};var Xo=Object.prototype;const ee=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||Xo)},Te=function(t,e){return function(o){return t(e(o))}},tr=Te(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!ee(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Ie=function(t){return t!=null&&Ee(t.length)&&!$t(t)},oe=function(t){return Ie(t)?Se(t):or(t)},rr=function(t,e){return t&&qt(e,oe(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!L(t))return nr(t);var e=ee(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},re=function(t){return Ie(t)?Se(t,!0):cr(t)},ar=function(t,e){return t&&qt(e,re(e),t)};var Ae=X&&!X.nodeType&&X,Re=Ae&&!0&&Q&&!Q.nodeType&&Q,ze=Re&&Re.exports===Ae?O.Buffer:void 0,We=ze?ze.allocUnsafe:void 0;const sr=function(t,e){if(e)return t.slice();var o=t.length,r=We?We(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,i=0,f=[];++o<r;){var b=t[o];e(b,o,t)&&(f[i++]=b)}return f},Me=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,Le=Object.getOwnPropertySymbols;const ne=Le?function(t){return t==null?[]:(t=Object(t),dr(Le(t),function(e){return ur.call(t,e)}))}:Me,hr=function(t,e){return qt(t,ne(t),e)},Fe=function(t,e){for(var o=-1,r=e.length,i=t.length;++o<r;)t[i+o]=e[o];return t},ie=Te(Object.getPrototypeOf,Object),De=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Fe(e,ne(t)),t=ie(t);return e}:Me,fr=function(t,e){return qt(t,De(t),e)},Ue=function(t,e,o){var r=e(t);return Jt(t)?r:Fe(r,o(t))},pr=function(t){return Ue(t,oe,ne)},br=function(t){return Ue(t,re,De)},ce=Ot(O,"DataView"),ae=Ot(O,"Promise"),se=Ot(O,"Set"),le=Ot(O,"WeakMap");var Ne="[object Map]",Be="[object Promise]",$e="[object Set]",He="[object WeakMap]",Ge="[object DataView]",gr=Et(ce),kr=Et(Ht),mr=Et(ae),vr=Et(se),yr=Et(le),Pt=$;(ce&&Pt(new ce(new ArrayBuffer(1)))!=Ge||Ht&&Pt(new Ht)!=Ne||ae&&Pt(ae.resolve())!=Be||se&&Pt(new se)!=$e||le&&Pt(new le)!=He)&&(Pt=function(t){var e=$(t),o=e=="[object Object]"?t.constructor:void 0,r=o?Et(o):"";if(r)switch(r){case gr:return Ge;case kr:return Ne;case mr:return Be;case vr:return $e;case yr:return He}return e});const de=Pt;var wr=Object.prototype.hasOwnProperty;const _r=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&wr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ke=O.Uint8Array,ue=function(t){var e=new t.constructor(t.byteLength);return new Ke(e).set(new Ke(t)),e},xr=function(t,e){var o=e?ue(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var jr=/\w*$/;const Cr=function(t){var e=new t.constructor(t.source,jr.exec(t));return e.lastIndex=t.lastIndex,e};var Ve=Z?Z.prototype:void 0,Ze=Ve?Ve.valueOf:void 0;const Er=function(t){return Ze?Object(Ze.call(t)):{}},Or=function(t,e){var o=e?ue(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Pr="[object Boolean]",Sr="[object Date]",Tr="[object Map]",Ir="[object Number]",Ar="[object RegExp]",Rr="[object Set]",zr="[object String]",Wr="[object Symbol]",Mr="[object ArrayBuffer]",Lr="[object DataView]",Fr="[object Float32Array]",Dr="[object Float64Array]",Ur="[object Int8Array]",Nr="[object Int16Array]",Br="[object Int32Array]",$r="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Kr="[object Uint32Array]";const Vr=function(t,e,o){var r=t.constructor;switch(e){case Mr:return ue(t);case Pr:case Sr:return new r(+t);case Lr:return xr(t,o);case Fr:case Dr:case Ur:case Nr:case Br:case $r:case Hr:case Gr:case Kr:return Or(t,o);case Tr:return new r;case Ir:case zr:return new r(t);case Ar:return Cr(t);case Rr:return new r;case Wr:return Er(t)}};var Qe=Object.create;const Zr=function(){function t(){}return function(e){if(!L(e))return{};if(Qe)return Qe(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Qr=function(t){return typeof t.constructor!="function"||ee(t)?{}:Zr(ie(t))};var qr="[object Map]";const Yr=function(t){return K(t)&&de(t)==qr};var qe=Ft&&Ft.isMap;const Jr=qe?Xt(qe):Yr;var Xr="[object Set]";const tn=function(t){return K(t)&&de(t)==Xr};var Ye=Ft&&Ft.isSet;const en=Ye?Xt(Ye):tn;var on=1,rn=2,nn=4,Je="[object Arguments]",Xe="[object Function]",cn="[object GeneratorFunction]",to="[object Object]",W={};W[Je]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object DataView]"]=W["[object Boolean]"]=W["[object Date]"]=W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Map]"]=W["[object Number]"]=W[to]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object Symbol]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Error]"]=W[Xe]=W["[object WeakMap]"]=!1;const an=function t(e,o,r,i,f,b){var k,U=o&on,D=o&rn,Yt=o&nn;if(r&&(k=f?r(e,i,f,b):r(e)),k!==void 0)return k;if(!L(e))return e;var Tt=Jt(e);if(Tt){if(k=_r(e),!U)return lr(e,k)}else{var ut=de(e),Dt=ut==Xe||ut==cn;if(Ce(e))return sr(e,U);if(ut==to||ut==Je||Dt&&!f){if(k=D||Dt?{}:Qr(e),!U)return D?fr(e,ar(k,e)):hr(e,rr(k,e))}else{if(!W[ut])return f?e:{};k=Vr(e,ut,U)}}b||(b=new Lo);var Zt=b.get(e);if(Zt)return Zt;b.set(e,k),en(e)?e.forEach(function(ct){k.add(t(ct,o,r,ct,e,b))}):Jr(e)&&e.forEach(function(ct,ht){k.set(ht,t(ct,o,r,ht,e,b))});var It=Tt?void 0:(Yt?D?br:pr:D?re:oe)(e);return Fo(It||e,function(ct,ht){It&&(ct=e[ht=ct]),ve(k,ht,t(ct,o,r,ht,e,b))}),k};var sn=1,ln=4;const dn=function(t,e){return an(t,sn|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,fn=Object.prototype,eo=hn.toString,pn=fn.hasOwnProperty,bn=eo.call(Object);const gn=function(t){if(!K(t)||$(t)!=un)return!1;var e=ie(t);if(e===null)return!0;var o=pn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&eo.call(o)==bn},kn=function(t){return K(t)&&t.nodeType===1&&!gn(t)};function he(t,e=new Set){const o=[t],r=new Set;let i=0;for(;o.length>i;){const f=o[i++];if(!(r.has(f)||mn(f)||e.has(f)))if(r.add(f),f[Symbol.iterator])try{for(const b of f)o.push(b)}catch{}else for(const b in f)b!=="defaultValue"&&o.push(f[b])}return r}function mn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function oo(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const i=he(t,o),f=he(e,o);for(const b of i)if(f.has(b))return!0;return!1}class ro{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const i of r)i.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class no extends ro{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=s(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,i)=>e.create(r,i),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return oo(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>kn(o)||r==="context"?o:void 0)}}const V=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Vt=Symbol("MainQueueId");class io extends ro{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Vt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let i;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return i=new no(this._watchdogConfig),i.setCreator(r.creator),i._setExcludedProperties(this._contextProps),r.destructor&&i.setDestructor(r.destructor),this._watchdogs.set(r.id,i),i.on("error",(f,{error:b,causesRestart:k})=>{this._fire("itemError",{itemId:r.id,error:b}),k&&this._actionQueues.enqueue(r.id,()=>new Promise(U=>{i.on("restart",function D(){i.off("restart",D),this._fire("itemRestart",{itemId:r.id}),U()}.bind(this))}))}),i.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const i=this._getWatchdog(r);return this._watchdogs.delete(r),i.destroy()})))}destroy(){return this._actionQueues.enqueue(Vt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Vt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=he(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return oo(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Vt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Vt),this._queues.get(e)])).then(o),f=i.catch(()=>{});return this._queues.set(e,f),i.finally(()=>{this._activeActions--,this._queues.get(e)===f&&this._activeActions===0&&this._onEmptyCallbacks.forEach(b=>b())})}}function co(t){return Array.isArray(t)?t:[t]}const ao=c().createContext("contextWatchdog");class fe extends c().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return c().createElement(ao.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new io(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}fe.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},fe.propTypes={id:w().string,isLayoutReady:w().bool,context:w().func,watchdogConfig:w().object,config:w().object,onReady:w().func,onError:w().func};const pe="Lock from React integration (@ckeditor/ckeditor5-react)";class St extends c().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=c().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(pe):this.editor.disableReadOnlyMode(pe)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return c().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof io?this.watchdog=new yn(this.context):this.watchdog=new St._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(pe);const i=r.model.document,f=r.editing.view.document;return i.on("change:data",b=>{this.props.onChange&&this.props.onChange(b,r)}),f.on("focus",b=>{this.props.onFocus&&this.props.onFocus(b,r)}),f.on("blur",b=>{this.props.onBlur&&this.props.onBlur(b,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,f=4294967296*Math.random()>>>0;return"e"+V[o>>0&255]+V[o>>8&255]+V[o>>16&255]+V[o>>24&255]+V[r>>0&255]+V[r>>8&255]+V[r>>16&255]+V[r>>24&255]+V[i>>0&255]+V[i>>8&255]+V[i>>16&255]+V[i>>24&255]+V[f>>0&255]+V[f>>8&255]+V[f>>16&255]+V[f>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:i,causesRestart:f,error:b})=>{i===this._id&&o(null,{error:b,causesRestart:f})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}St.contextType=ao,St.propTypes={editor:w().func.isRequired,data:w().string,config:w().object,watchdogConfig:w().object,onChange:w().func,onReady:w().func,onFocus:w().func,onBlur:w().func,onError:w().func,disabled:w().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},St.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},St._EditorWatchdog=no})(),u})())}}]);
