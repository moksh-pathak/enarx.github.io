"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3667],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u=void 0,s={unversionedId:"Contributing/Demo-videos-2019",id:"Contributing/Demo-videos-2019",isDocsHomePage:!1,title:"Demo-videos-2019",description:"Here are two short demo videos of an early (late 2019) build of core Enarx functionality in action.",source:"@site/docs/Contributing/Demo-videos-2019.md",sourceDirName:"Contributing",slug:"/Contributing/Demo-videos-2019",permalink:"/docs/Contributing/Demo-videos-2019",editUrl:"https://github.com/enarx/docs/docs/Contributing/Demo-videos-2019.md",tags:[],version:"current",frontMatter:{}},p=[{value:"AMD SEV",id:"amd-sev",children:[{value:"Building the demo",id:"building-the-demo",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:4},{value:"Building",id:"building",children:[],level:4}],level:3},{value:"Running the demo",id:"running-the-demo",children:[],level:3}],level:2},{value:"Intel SGX",id:"intel-sgx",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here are two short demo videos of an early (late 2019) build of core Enarx functionality in action."),(0,i.kt)("p",null,"They show the same example being run on two different underlying physical TEE technologies, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/SEV-architectural"},"AMD SEV")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/SGX-architectural"},"Intel SGX"),"."),(0,i.kt)("h2",{id:"amd-sev"},"AMD SEV"),(0,i.kt)("p",null,"In this first example, you can see a Keep being initiated using AMD SEV and executing a simple addition."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/enarx/enarx.github.io/master/asets/video/enarx-SEV-demo-video-2019.webm"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/enarx/enarx.github.io/blob/master/assets/video/enarx-SEV-demo-video-2019.gif",alt:"Enarx SEV demo video"}))),(0,i.kt)("h3",{id:"building-the-demo"},"Building the demo"),(0,i.kt)("p",null,"Want to try it out for yourself? Make sure you've got everything you need\nbefore you begin:"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An AMD processor with SEV capabilities (EPYC)"),(0,i.kt)("li",{parentName:"ul"},"A Linux kernel with ",(0,i.kt)("inlineCode",{parentName:"li"},"CONFIG_KVM_AMD_SEV")," enabled (set to 'y') with the appropriate\nkernel command line parameters set: ",(0,i.kt)("inlineCode",{parentName:"li"},"mem_encrypt=on kvm_amd.sev=1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NOTE: The above requirements are out of scope for this document. Please refer to\nthe following resources and/or your favorite internet search engine to get started."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kernelnewbies.org/KernelBuild"},"How do I build the Linux kernel?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/system_design_guide/configuring-kernel-command-line-parameters_system-design-guide"},"How do I set kernel command line parameters?")))),(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/enarx/demo.git"},"Enarx development environment")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"wasm32-unknown-unknown")," Rust toolchain target")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rustup target add wasm32-unknown-unknown\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake")," package must be installed to build the demo")),(0,i.kt)("h4",{id:"building"},"Building"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the demo repository:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/enarx/demo.git\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Enter the cloned repository and build the project:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd demo\n$ cargo build\n")),(0,i.kt)("h3",{id:"running-the-demo"},"Running the demo"),(0,i.kt)("p",null,"Once built, the demo can be ran like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run --bin demo 3 4\n")),(0,i.kt)("p",null,"Alternatively:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./target/debug/demo 3 4\n")),(0,i.kt)("h2",{id:"intel-sgx"},"Intel SGX"),(0,i.kt)("p",null,"In this second example, the same thing is done using Intel SGX."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://asciinema.org/a/IdQsQjspjypMP6rZUVSOt240d"},(0,i.kt)("img",{parentName:"a",src:"https://asciinema.org/a/IdQsQjspjypMP6rZUVSOt240d.png",alt:"asciicast"}))),(0,i.kt)("h1",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"For more information about Enarx, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/Enarx-Introduction"},"introduction")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/Enarx-FAQ"},"FAQ")),(0,i.kt)("p",null,"For more information about Enarx components, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/Enarx-components"},"Enarx components page"),"."),(0,i.kt)("p",null,"For more information about TEEs, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enarx/enarx/wiki/TEEs-(Trusted-Execution-Environment)"},"TEEs")," page."))}m.isMDXComponent=!0}}]);