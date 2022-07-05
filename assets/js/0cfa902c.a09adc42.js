"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3822:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Anti-aliasing",u={unversionedId:"antialiasing",id:"antialiasing",isDocsHomePage:!1,title:"Anti-aliasing",description:"Anti-Aliasing in COD:MWR does not seem to work on all objects in the scene (namely, it does not seem to work well on your viewmodel (hands, gun)). To bypass this issue, there are multiple solutions you could use.",source:"@site/docs/antialiasing.md",sourceDirName:".",slug:"/antialiasing",permalink:"/antialiasing",editUrl:"https://github.com/h1-mod/website/tree/docs/edit/docs/antialiasing.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Ranked Multiplayer",permalink:"/ranked"},next:{title:"Aim assist",permalink:"/aimassist"}},d=[{value:"How to use DLDSR",id:"how-to-use-dldsr",children:[],level:2},{value:"&quot;But I don&#39;t have an RTX card! What can I do?&quot;",id:"but-i-dont-have-an-rtx-card-what-can-i-do",children:[],level:2},{value:"Additional Note",id:"additional-note",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anti-aliasing"},"Anti-aliasing"),(0,a.kt)("p",null,"Anti-Aliasing in COD:MWR does not seem to work on all objects in the scene (namely, it does not seem to work well on your viewmodel (hands, gun)). To bypass this issue, there are multiple solutions you could use."),(0,a.kt)("p",null,"The best low-end solution is to try and use FXAA in-game. This is a post-process anti-aliasing method which smears the entire image, making it look smoother. Good for lower-end PCs which do not have spare performance to use for the next few methods."),(0,a.kt)("h1",{id:"dldsr"},"DLDSR"),(0,a.kt)("p",null,"DLDSR (RTX ONLY). This is the best way to eliminate jagged edges in COD:MWR, and by extension, H1-Mod. DLDSR is a super-sampling anti-aliasing method that renders the image at a high resolution, then fits it on a smaller display. This makes the entire game look a lot sharper, and removes jagged edges. DLDSR at 1.25x has no performance cost."),(0,a.kt)("h2",{id:"how-to-use-dldsr"},"How to use DLDSR"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to Nvidia Control Panel, and then "Manage 3D Settings"'),(0,a.kt)("li",{parentName:"ol"},'In the "Global" tab, search for "DSR - Factors"'),(0,a.kt)("li",{parentName:"ol"},"Then, you should see the DL (Deep Learning) part, with some factors (usually 1440p and 1620p)"),(0,a.kt)("li",{parentName:"ol"},"Enable your desired DLDSR factors."),(0,a.kt)("li",{parentName:"ol"},'Then, within Nvidia Control Panel, go to the "Change Resolution" tab.'),(0,a.kt)("li",{parentName:"ol"},"Change your resolution to one of the DLDSR ones. Make sure your refresh rate is also what you desire."),(0,a.kt)("li",{parentName:"ol"},"Run H1-Mod, and make sure that it runs in Borderless mode. Exclusive fullscreen does not work for this method.")),(0,a.kt)("h2",{id:"but-i-dont-have-an-rtx-card-what-can-i-do"},'"But I don\'t have an RTX card! What can I do?"'),(0,a.kt)("p",null,'You may use the standard DSR factors, if you are not running a laptop (usually known as "Optimus") Nvidia or AMD GPU. Both Nvidia and AMD have their respective DSR systems, but they are very expensive when it comes to performance. Usage is recommended only on very powerful GPUs. The normal DSR factors will be the same tab as the DLDSR factors. Please follow the above DLDSR tutorial on how to enable other factors.'),(0,a.kt)("h2",{id:"additional-note"},"Additional Note"),(0,a.kt)("p",null,"Your desktop will look blurry in DSR / DLDSR mode. Make sure to bear that in mind, and revert back to normal resolution once you are done with your gaming session."))}p.isMDXComponent=!0}}]);