"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[626],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Referencing GSC (+ GSC dump)",c={unversionedId:"gsc-reference",id:"gsc-reference",isDocsHomePage:!1,title:"Referencing GSC (+ GSC dump)",description:'The H1 GSC Dump is still a work-in-progress that dump that mostly contains disassembled "GSC asm" files, which contains the bytecode for GSC. Some files have decompiled into plain GSC format, but the decompiler currently has a error that needs to be fixed. GSC bytecode is stack based, so the instructions are confusing but it\'s easy to understand when it comes down to it. If you need help, refer to the #scripting channel in the Discord and assistance is provided.',source:"@site/docs/gsc-reference.md",sourceDirName:".",slug:"/gsc-reference",permalink:"/gsc-reference",editUrl:"https://github.com/h1-mod/website/tree/docs/edit/docs/gsc-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Lua Syntax",permalink:"/script-syntax"},next:{title:"LUI Scripting",permalink:"/ui-scripting"}},p=[{value:"Resources",id:"resources",children:[],level:2},{value:"Calling GSC functions",id:"calling-gsc-functions",children:[],level:2},{value:"Hooking (detouring) GSC functions",id:"hooking-detouring-gsc-functions",children:[],level:2},{value:"Incorrect/missing symbols on H1-Mod",id:"incorrectmissing-symbols-on-h1-mod",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"referencing-gsc--gsc-dump"},"Referencing GSC (+ GSC dump)"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mjkzy/h1-gsc-dump"},"H1 GSC Dump"),' is still a work-in-progress that dump that mostly contains disassembled "GSC asm" files, which contains the bytecode for GSC. Some files have decompiled into plain GSC format, but the decompiler currently has a error that needs to be fixed. GSC bytecode is stack based, so the instructions are confusing but it\'s easy to understand when it comes down to it. If you need help, refer to the ',(0,o.kt)("inlineCode",{parentName:"p"},"#scripting")," channel in the Discord and assistance is provided."),(0,o.kt)("p",null,"(this documentation is based off the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mjkzy/h1-gsc-dump/blob/main/README.md"},"README of H1 GSC Dump"),")"),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mjkzy/iw6-gsc-dump"},"IW6 GSC Dump")," (provides comments, functions, methods, variables, dev comments, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mjkzy/gsc-tool-h1/tree/h1-symbols"},"gsc-tool Fork for H1"))),(0,o.kt)("h2",{id:"calling-gsc-functions"},"Calling GSC functions"),(0,o.kt)("p",null,"Calling GSC functions from Lua is made easy thanks to fed. To do so, you need to use the GSC dump and figure out what a file may be named and what a function may be named. A function/file may have a ",(0,o.kt)("inlineCode",{parentName:"p"},"_ID%d")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"_id_%x")," prefix, which you'll figure out from the GSC dump."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"scriptcall")," function is usually called on any sort of entity or the game object. It is called on an entity (ex: ",(0,o.kt)("inlineCode",{parentName:"p"},"player:scriptcall"),") when the function you are calling is also called on a entity, and it is called on the game object (ex: ",(0,o.kt)("inlineCode",{parentName:"p"},"game:scriptcall"),") if an entity doesn't need to call it."),(0,o.kt)("p",null,"In this example, we are going to be calling maps/mp/_utility::_unsetPerk on Last Stand, Martyrdom, and Juggernaut. This code should be ran in a function that has access to the entity's ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," keyword. Read ",(0,o.kt)("a",{parentName:"p",href:"script-syntax#callbacks"},"Callbacks")," to understand this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_pistoldeath")\nself:scriptcall("maps/mp/_utility", "_ID1659", "specialty_grenadepulldeath")\nself:scriptcall("maps/mp/_utility", "_ID1659", "specialty_armorvest")\n')),(0,o.kt)("p",null,"(at the time of writing this, ",(0,o.kt)("inlineCode",{parentName:"p"},"_unsetPerk")," doesn't contain a token in version v1.0.3. however, on v1.0.4, ",(0,o.kt)("inlineCode",{parentName:"p"},"_ID1659")," should be ",(0,o.kt)("inlineCode",{parentName:"p"},"_unsetperk"),")"),(0,o.kt)("h2",{id:"hooking-detouring-gsc-functions"},"Hooking (detouring) GSC functions"),(0,o.kt)("p",null,"Same as above, you need to know what a file may be named and what a function may be named."),(0,o.kt)("p",null,"Detouring a function redirects the function to your provided function callback before you either optionally call the original game's function or do your own stuff functionality. The ",(0,o.kt)("inlineCode",{parentName:"p"},"game:detour")," function is always from the game object. When you hook a function that a player entity may be calling, the first parameter of the detour will always be the player (as defined ",(0,o.kt)("inlineCode",{parentName:"p"},"self_")," in example)."),(0,o.kt)("p",null,"In this example, we will be hooking ",(0,o.kt)("inlineCode",{parentName:"p"},"codecallback_playerkilled")," and checking who the attacker is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- we define a variable so we can use this in our callback function\nlocal playerkilled_hook = nil\n\n-- our callback function for the detour\nfunction playerkilled_stub(self_, einflictor, eattacker, idamage, smeansofdeath, sweapon, vdir, shitloc, timeoffset, deathanimduration)\n    if eattacker ~= nil or game:isplayer(eattacker) == 1 then\n        print("The attacker is " .. eattacker.name)\n    else\n        print("The attacker is invalid or isn\'t a player")\n    end\n\n    -- [...]\n\n    -- the invoke function will call the original function from the game\'s stock GSC. we can modify parameters here too!\n    playerkilled_hook.invoke(self_, einflictor, eattacker, idamage, smeansofdeath, sweapon, vdir, shitloc, timeoffset, deathanimduration)\nend\n\nplayerkilled_hook = game:detour("maps/mp/gametypes/_callbacksetup", "codecallback_playerkilled", playerkilled_stub)\n')),(0,o.kt)("h2",{id:"incorrectmissing-symbols-on-h1-mod"},"Incorrect/missing symbols on H1-Mod"),(0,o.kt)("p",null,"This GSC dump may contain symbols that H1-mod does not have named or is not correctly named. Navigating to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/h1-mod/h1-mod/blob/develop/src/client/game/scripting/function_tables.cpp"},"the function table")," and finding the function_map, method_map, & token_map maps will help you. ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + F")," (Find) and search your desired value (ex: ",(0,o.kt)("inlineCode",{parentName:"p"},"isplayer"),") and see if it exists.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"If H1-mod doesn't have the specific symbol you need named, then you'll need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"_ID%d")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"_id_%x")," prefix.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"For example, if H1-mod theroetically didn't have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mjkzy/gsc-tool/blob/97abc4f5b1814d64f06fd48d118876106e8a3a39/src/h1/xsk/resolver.cpp#L877"},"this symbol"),", then you'll refer to the '0x1ad' part. This is the hexdecimal key of the value ",(0,o.kt)("inlineCode",{parentName:"p"},"isplayer"),". So, if ",(0,o.kt)("inlineCode",{parentName:"p"},"isplayer")," wasn't defined with a proper name in H1-mod's function/method table, you would call this function as ",(0,o.kt)("inlineCode",{parentName:"p"},"game:_id_1AD(player)")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"game:_ID429(player)")," depending if the first one doesn't work)",(0,o.kt)("br",null)))}u.isMDXComponent=!0}}]);