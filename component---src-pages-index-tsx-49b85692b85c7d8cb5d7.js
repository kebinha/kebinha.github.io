"use strict";(self.webpackChunkkeb_inha=self.webpackChunkkeb_inha||[]).push([[691],{3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return v},P:function(){return w},S:function(){return N},_:function(){return s},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),l=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,d);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=s(e,g);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=s(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var y;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,b);return t?r.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(E,i({},e)),r.createElement("noscript",null,r.createElement(E,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=E.propTypes;const S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:l().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],L=new Set;let Z,W;const T=function(e){let{as:t="div",image:n,style:l,backgroundColor:c,className:u,class:d,onStartLoad:m,onLoad:p,onError:g}=e,h=s(e,C);const{width:f,height:E,layout:y}=n,b=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,E,y),{style:w,className:v}=b,S=s(b,x),k=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const z=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(y,f,E);return(0,r.useEffect)((()=>{Z||(Z=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return W=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(T);if(W&&L.has(T))return;let t,r;return Z.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:L.has(T),image:n},h)),L.has(T)||(t=requestAnimationFrame((()=>{k.current&&(r=s(k.current,T,L,l,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{L.has(T)&&W&&(k.current.innerHTML=W(i({isLoading:L.has(T),isLoaded:L.has(T),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},S,{style:i({},w,l,{backgroundColor:c}),className:v+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));z.propTypes=k,z.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),I={src:l().string.isRequired,alt:S,width:_,height:_,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},N=(q=z,function(e){let{src:t,__imageData:a,__error:n}=e,l=s(e,O);return n&&console.warn(n),a?r.createElement(q,i({image:a},l)):(console.warn("Image not loaded",t),null)});var q;N.displayName="StaticImage",N.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const l=e[n];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return h}});var r=a(7294),n=a(2547),l=a(3669),i=a(5434),s=a(2939),o=a(1013),c=a(8025),u=a(1461),d=a(4604),m=a(3723),p=a(9928),g=a(2825);t.default=()=>r.createElement(d.Z,null,r.createElement(o.Z,{title:"K-Software Empowerment BootCamp",subTitle:"인하대학교에서 SW 개발에 관심있는 인재를 양성하고 현업 중심의 프로젝트를 경험할 수 있는 <2023 K-Software Empowerment BootCamp>를 시작합니다",img:c.Z}),r.createElement(u.Z,null,r.createElement(l.Z,null,"프로그램 소개"),r.createElement("p",null,"본 프로그램은 총 640시간으로 구성되어 있으며 280시간은 대학 연합으로 프로그래밍, SW 기술에 대한 교육으로 360시간은 참여기업 주관의 프로젝트 심화 과목으로 구성되어 있습니다."),r.createElement("p",null,"2023년도부터는 교육생들에게 보다 더 전문적인 교육을 해주고자 인공지능 특화교육으로 구성하였습니다. 비전공자 학생들을 인공지능에 대하여 보다 더 세분화하여 교육예정입니다."),r.createElement(m.S,{src:"../assets/abstract.png",alt:"abstract",__imageData:a(9600)})),r.createElement(u.Z,{grayish:!0},r.createElement(l.Z,null,"대학연합 개설과목"),r.createElement("p",null,"3개 소프트웨어 선도 대학(인하대, 성균관대, 경기대 - 소프트웨어 중심대학)에서 개설하는 실습 중심의 강좌를 통해, 프로그래밍 기술과 SW전반에 대한 지식을 쌓을 수 있습니다."),r.createElement("p",null,"대학 연합에서 주관하는 SW 강좌는 크게 프로그래밍(기초),SW이론교육(기초) , SW기술역량교육(심화) 으로 총 280시간으로 구성되어 있으며 하부 강좌들이 존재합니다."),r.createElement("p",null,"각 강좌 내 세부 강좌들은 선택적으로 수강할 수 있는 구조를 통해, 개인의 개발 목적에 맞는 유연한 강의 수강이 가능합니다."),r.createElement(p.k,null,r.createElement(n.Z,{title:"프로그래밍 기초",subTitle:"100시간",arrowAfter:!0},r.createElement("p",null,"SW개발에 입문하는 과정으로 SW개발에 사용되는 여러가지 언어들 중 가장 많이 사용되는 언어들에 대한 강의로 구성되어 있습니다.")),r.createElement(n.Z,{title:"SW이론교육",subTitle:"60시간",arrowAfter:!0},r.createElement("p",null,"SW이론교육에서는 여러가지 응용문제들을 해결하는 능력을 기르고 데이터를 다루는 세부적인 방법에 대해 배울 수 있습니다.")),r.createElement(n.Z,{title:"SW기술역량 교육",subTitle:"심화"},r.createElement("p",null,"현업에서 사용할 수 있는 기술을 배우기 위해 SW기술역량 교육은 여러가지 분야에 대한 이론 및 실습 강좌를 통해 현업 SW개발자가 되기 위한 준비를 도와줍니다.")))),r.createElement(u.Z,null,r.createElement(l.Z,null,"참여기업 프로젝트"),r.createElement(s.Z,{grayish:!0},r.createElement("p",{style:{fontWeight:"bold"}},"27개 참여기업(SK CC, Kakao, Nexon, 한글과컴퓨터, NeoWiz, 오비고, 포스트시뮬레이션, 네오드림등)의 현업 멘토들과 함께 실제 기업에서 직면하는 문제를 해결하고 프로젝트를 진행하며 현업 역량을 갖춘 SW 개발자로 거듭날 수 있습니다.")),r.createElement("p",null,"프로젝트는 크게 스마트 팩토리 헬스케어 게임 로 구성되어 있으며 각 주제 아래 세부 주제들의 프로젝트가 존재합니다."),r.createElement("p",null,"팀 구성별 난이도에 따라 2~3개의 프로젝트를 선택하여 수행하며, 각 프로젝트당 60~90시간 정도가 소요됩니다."),r.createElement(p.k,null,r.createElement(n.Z,{dark:!0,title:"스마트 팩토리"},r.createElement("p",null,"제조 산업을 주제로 SW개발을 수행하는 프로젝트로 하드웨어 기반, 소프트웨어 기반, 디지털 트윈 기반 의 프로젝트를 경험하고 현업 기술을 기를 수 있습니다.")),r.createElement(n.Z,{dark:!0,title:"헬스 케어"},r.createElement("p",null,"의료 산업 및 헬스케어 분야에서 요구되는 SW개발 기술을 배울 수 있으며, 임베디드 기반, 클라우드 기반 , 모바일 기반 개인 서비스 등의 프로젝트를 경험할 수 있습니다.")),r.createElement(n.Z,{dark:!0,title:"게임"},r.createElement("p",null,"게임산업에서 많이 사용되는 프로그램의 실습과 사용을 통해 현업 역량을 양성할 수 있으며, 슈팅 게임, 아케이드 게임, RPG 게임, 퍼즐 게임, 플랫폼 등의 프로젝트를 경험할 수 있습니다.")),r.createElement(n.Z,{dark:!0,title:"자율주행"},r.createElement("p",null,"자율주행의 핵심 인공지능 기술과 시스템에 대한 역량을 양성할 수 있으며 어떻게 인공지능이 자율주행의 모든 기능을 구현하고 있는지 어떻게 더 발전할 것인지를 이해할 수 있습니다.")))),r.createElement(u.Z,{grayish:!0},r.createElement(l.Z,null,"참여 혜택"),r.createElement(p.k,null,r.createElement(n.Z,{title:"학점인정",icon:r.createElement(i.eAf,{style:{color:"#202c3c",fontSize:"36px"}})},r.createElement("p",null,"일반(교양)학점으로"," ",r.createElement("a",{href:"https://www.inha.ac.kr/kr/1834/subview.do",target:"_blank"},"마이크로 전공 (미래차공학)")," ","추진중")),r.createElement(n.Z,{title:"교육지원금",icon:r.createElement(i.xVD,{style:{color:"#202c3c",fontSize:"36px"}})},r.createElement("p",null,"교육 지원금을 제공하여 비용 걱정 없이 학습에만 집중할 수 있도록 최선의 지원을 아끼지 않습니다 (금액 미정)")),r.createElement(n.Z,{title:"교통",icon:r.createElement(i.ov6,{style:{color:"#202c3c",fontSize:"36px"}})},r.createElement("p",null,"판교 교육장까지의 거리가 먼 경우를 위해 무료 셔틀버스 운행을 운행 (예정, 변경가능)")),r.createElement(n.Z,{title:"중/석식비",icon:r.createElement(i.TkG,{style:{color:"#202c3c",fontSize:"36px"}})},r.createElement("p",null,"교육 수강자 전부에게 중/석식비를 제공 (예정, 변경가능)")),r.createElement(n.Z,{title:"인턴/서류면제",icon:r.createElement(i.d6R,{style:{color:"#202c3c",fontSize:"36px"}})},r.createElement("p",null,"수료 성적 상위 10% SK, MDS 등 기업 채용형 인턴 확정, 수료인원에 한해서는 서류 면제 협의중.")))),r.createElement(u.Z,null,r.createElement(l.Z,null,"교육 일정"),r.createElement(s.Z,{grayish:!0,ma:"0 0 20px 0"},r.createElement("h3",null,"대학 기초 교육"),r.createElement("ul",null,r.createElement("li",null,"기간: 1~2월(주 5일)"),r.createElement("li",null,"수업시간: 10:00시작 수업 6시간, 4시간 실습 및 질문 (조교 항시상주), 280시간"),r.createElement("li",null,"수업방식: 온라인/오프라인"),r.createElement("li",null,"위치: 60주년기념관 808호(수업), 1401A호(실습)"))),r.createElement(s.Z,{grayish:!0,ma:"0 0 20px 0"},r.createElement("h3",null,"조별 프로젝트"),r.createElement("ul",null,r.createElement("li",null,"기간: 3월~ 6월"),r.createElement("li",null,"수업시간: 45시간"),r.createElement("li",null,"수업방식: 온라인 및 온프라인, 주 1~2회 조별상의하에 정기모임"),r.createElement("li",null,"참고: 교육생분들의 정규수업 일정에 맞추어 피해가 가지 않도록 구성 예정입니다."))),r.createElement(s.Z,{grayish:!0,ma:"0 0 30px 0"},r.createElement("h3",null,"대학별 집체교육 프로젝트"),r.createElement("ul",null,r.createElement("li",null,"기간: 6월~9월"),r.createElement("li",null,"수업시간: 총 360시간"),r.createElement("li",null,"수업방식: 온라인/오프라인")))));const h=()=>r.createElement(g.Z,{title:"K-Software Empowerment BootCamp"})},9600:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d85e2bc9da07fd038e044bade9036de4/6fe52/abstract.png","srcSet":"/static/d85e2bc9da07fd038e044bade9036de4/d7a93/abstract.png 979w,\\n/static/d85e2bc9da07fd038e044bade9036de4/5f5b5/abstract.png 1958w,\\n/static/d85e2bc9da07fd038e044bade9036de4/6fe52/abstract.png 3916w","sizes":"(min-width: 3916px) 3916px, 100vw"},"sources":[{"srcSet":"/static/d85e2bc9da07fd038e044bade9036de4/a3ead/abstract.webp 979w,\\n/static/d85e2bc9da07fd038e044bade9036de4/560a0/abstract.webp 1958w,\\n/static/d85e2bc9da07fd038e044bade9036de4/45621/abstract.webp 3916w","type":"image/webp","sizes":"(min-width: 3916px) 3916px, 100vw"}]},"width":3916,"height":2256}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-49b85692b85c7d8cb5d7.js.map