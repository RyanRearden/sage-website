"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="Cloud compute & HPC on edge data",s={unversionedId:"tutorials/cloud-compute",id:"tutorials/cloud-compute",title:"Cloud compute & HPC on edge data",description:"Waggle provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Waggle.",source:"@site/docs/tutorials/cloud-compute.md",sourceDirName:"tutorials",slug:"/tutorials/cloud-compute",permalink:"/sage-website/docs/tutorials/cloud-compute",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/tutorials/cloud-compute.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Access Waggle sensors",permalink:"/sage-website/docs/tutorials/access-waggle-sensors"},next:{title:"Building your own Waggle device",permalink:"/sage-website/docs/tutorials/create-waggle"}},l={},c=[{value:"Triggering on data from the edge",id:"triggering-on-data-from-the-edge",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloud-compute--hpc-on-edge-data"},"Cloud compute & HPC on edge data"),(0,o.kt)("p",null,"Waggle provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Waggle."),(0,o.kt)("h2",{id:"triggering-on-data-from-the-edge"},"Triggering on data from the edge"),(0,o.kt)("p",null,"A common application is monitoring data from the edge and triggering actions when values exceed a threshold or an unusual event is detected."),(0,o.kt)("p",null,"As a getting started example, we demonstrate an outline of how this can be done in Waggle using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/sage-data-client"},"Sage data client"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import sage_data_client\nimport time\n\nwhile True:\n    # query pressure data in recent 10 minute window\n    df = sage_data_client.query(\n        start="-10m",\n        filter={\n            "name": "env.pressure",\n            "sensor": "bme680",\n        }\n    )\n\n    # compute stddev for nodes\' pressure data in window\n    std = df.groupby("meta.vsn").value.std()\n\n    # find all pressure events exceeding an example threshold\n    events = std[std > 8.0]\n\n    # "post" vsn to alert system\n    for vsn in events.index:\n        print(f"post {vsn} to alert system")\n\n    time.sleep(60)\n')),(0,o.kt)("p",null,'The above code queries a 10 minute window of atmospheric pressure data every minute and "posts" alerts for nodes exceeding a predefined standard deviation threshold.'),(0,o.kt)("p",null,"This example and more can be found in the Sage data client ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/sage-data-client/blob/main/examples/"},"examples")," directory."))}p.isMDXComponent=!0}}]);