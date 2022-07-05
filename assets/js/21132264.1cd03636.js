"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[998],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7092:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={},p="Port Forwarding",c={unversionedId:"port-forwarding",id:"port-forwarding",isDocsHomePage:!1,title:"Port Forwarding",description:"1. Open up Command Prompt. (Windows key + R -> cmd).",source:"@site/docs/port-forwarding.md",sourceDirName:".",slug:"/port-forwarding",permalink:"/port-forwarding",editUrl:"https://github.com/h1-mod/website/tree/docs/edit/docs/port-forwarding.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"How to make a Dedicated Server",permalink:"/install-server"},next:{title:"Lua Scripting",permalink:"/scripting"}},l=[],s={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"port-forwarding"},"Port Forwarding"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up Command Prompt. (Windows key + R -> ",(0,i.kt)("inlineCode",{parentName:"li"},"cmd"),")."),(0,i.kt)("li",{parentName:"ol"},"Type in ",(0,i.kt)("inlineCode",{parentName:"li"},"ipconfig"),", and take the default gateway of the network device that you are using (Wireless/Ethernet)."),(0,i.kt)("li",{parentName:"ol"},"Open your internet browser and type in the default gateway IP Address (usually 192.168.X.X)"),(0,i.kt)("li",{parentName:"ol"},'Log in with your router login details (not your wifi password) and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.'),(0,i.kt)("li",{parentName:"ol"},'This is the part where you will likely need to help yourself. If something asks for an application name, put anything (we recommend "H1"). For the port, use 30120, and for the "forwarded IP address" (text might be different), put in your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can\'t, then do the process 2 times, 1 for UDP and the 2nd, TCP.'),(0,i.kt)("li",{parentName:"ol"},"Test your server by asking a friend to join. If they can join from their own PC, you did it right. If it fails, then you either did something wrong or your router does not support port forwarding (usually happens to Modem+Router Combo Devices).")))}d.isMDXComponent=!0}}]);