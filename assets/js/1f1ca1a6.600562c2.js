"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=h(a),c=r,u=p["".concat(l,".").concat(c)]||p[c]||g[c]||i;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var h=2;h<i;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Architecture",sidebar_position:2},s="Architecture",o={unversionedId:"about/architecture",id:"about/architecture",title:"Architecture",description:"The cyberinfrastructure consists of coordinating hardware and software services enabling AI at the edge. Below is a quick summary of the different infrastructure pieces, starting at the highest-level and zooming into each component to understand the relationships and role each plays.",source:"@site/docs/about/architecture.md",sourceDirName:"about",slug:"/about/architecture",permalink:"/docs/about/architecture",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/about/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/about/overview"},next:{title:"Resources",permalink:"/docs/category/resources"}},l={},h=[{value:"High-Level Infrastructure",id:"high-level-infrastructure",level:2},{value:"Beekeeper",id:"beekeeper",level:3},{value:"Beehive",id:"beehive",level:3},{value:"Beehive Infrastructure",id:"beehive-infrastructure",level:2},{value:"Data Repository (DR)",id:"data-repository-dr",level:3},{value:"Edge Scheduler (ES)",id:"edge-scheduler-es",level:3},{value:"Edge Code Repository (ECR)",id:"edge-code-repository-ecr",level:3},{value:"Lambda Triggers (LT)",id:"lambda-triggers-lt",level:3},{value:"Nodes",id:"nodes",level:2},{value:"Wild Sage/Waggle Node",id:"wild-sagewaggle-node",level:3},{value:"Waggle Blade Node",id:"waggle-blade-node",level:3},{value:"Running plugins @ the Edge",id:"running-plugins--the-edge",level:2},{value:"Waggle Edge Stack (WES)",id:"waggle-edge-stack-wes",level:3},{value:"What is a plugin",id:"what-is-a-plugin",level:3},{value:"Science Goals",id:"science-goals",level:3}],d={toc:h},p="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"The cyberinfrastructure consists of coordinating hardware and software services enabling AI at the edge. Below is a quick summary of the different infrastructure pieces, starting at the highest-level and zooming into each component to understand the relationships and role each plays."),(0,r.kt)("h2",{id:"high-level-infrastructure"},"High-Level Infrastructure"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 1: High-level Node &amp; Beehive Relationship",src:a(9688).Z,width:"529",height:"423"})),(0,r.kt)("p",null,"There are 2 main components of the cyberinfrastructure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#waggle-nodes"},"Nodes")," that exist at the edge"),(0,r.kt)("li",{parentName:"ul"},"The cloud that hosts services and storage systems to facilitate running ",(0,r.kt)("a",{parentName:"li",href:"#science-goals"},"\u201cscience goals\u201d")," @ the edge")),(0,r.kt)("p",null,"Every edge node maintains connections to 2 core cloud components: 1 to a ",(0,r.kt)("a",{parentName:"p",href:"#beehive"},"Beehive")," and 1 to a ",(0,r.kt)("a",{parentName:"p",href:"#beekeper"},"Beekeeper")),(0,r.kt)("h3",{id:"beekeeper"},"Beekeeper"),(0,r.kt)("p",null,'The Beekeeper is an administrative server that allows system administrators to perform actions on the nodes such as gather health metrics, and perform software updates.  All Waggle nodes "phone home" to their Beekeeper and maintain this "life-line" connection.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/beekeeper"},"https://github.com/waggle-sensor/beekeeper"))),(0,r.kt)("h3",{id:"beehive"},"Beehive"),(0,r.kt)("p",null,"The Waggle node <-> Beehive connection is the pipeline for the science. It is over this connection that instructions for the node will be sent, in addition to how data is published into the Beehive storage systems from ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," running on the nodes."),(0,r.kt)("p",null,'The overall Waggle infrastructure supports multiple Beehives, where each Waggle nodes is associated with a single Beehive. The set of nodes associated with a Beehive creates a "project" where each "project" is separate, having its own data store, web services, etc.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 2: Multiple Beehives",src:a(2918).Z,width:"598",height:"432"})),(0,r.kt)("p",null,"In the example above, there are 2 nodes associated with Beehive 1, while a single Waggle node is associated with Beehive 2.  With all nodes, in this example, being administered by a single ",(0,r.kt)("a",{parentName:"p",href:"#beekeeper"},"Beekeeper"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note"),": the example above shows a single Beekeeper, but a second Beekeeper could have been used for administrative isolation.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-beehive-v2"},"https://github.com/waggle-sensor/waggle-beehive-v2"))),(0,r.kt)("h2",{id:"beehive-infrastructure"},"Beehive Infrastructure"),(0,r.kt)("p",null,"Looking deeper into the Waggle Beehive infrastructure, it contains 2 main components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"software services such as the ",(0,r.kt)("a",{parentName:"li",href:"#edge-scheduler-es"},"Edge Scheduler (ES)"),", ",(0,r.kt)("a",{parentName:"li",href:"#lambda-triggers-lt"},"Lambda Triggers (LT)"),", data APIs, and website hosting"),(0,r.kt)("li",{parentName:"ul"},"data storage systems such as the ",(0,r.kt)("a",{parentName:"li",href:"#data-repository-dr"},"Data Repository (DR)")," and the ",(0,r.kt)("a",{parentName:"li",href:"#edge-code-repository-ecr"},"Edge Code Repository (ECR)"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 3: Beehive High-level Architecture",src:a(7814).Z,width:"521",height:"462"})),(0,r.kt)("p",null,"The Beehive is the \u201ccommand center\u201d for interacting with the Waggle nodes at the edge. Hosting websites and interfaces allowing scientists to create ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," to run ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugins"},"plugins")," at the edge & browse the data produced by those ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 4: Beehive Infrastructure Details",src:a(801).Z,width:"898",height:"482"})),(0,r.kt)("p",null,"The software services and data storage systems are deployed within a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"kubernetes")," environment to allow for easy administration and to support running in a multiple server architecture, supporting redundancy and service replication."),(0,r.kt)("p",null,"While the services running within Beehive are many (both graphical and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST")," style API interfaces), the following is an outline of the most vital."),(0,r.kt)("h3",{id:"data-repository-dr"},"Data Repository (DR)"),(0,r.kt)("p",null,"The Data Repository is the data store for housing all the edge produced ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," data. It consists of different storage technologies (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"influxdb"),") and techniques to store simple textual data (i.e. key-value pairs) in addition to large blobular data (i.e. audio, images, video). The Data Repository additionally has an API interface for easy access to this data."),(0,r.kt)("p",null,"The data store is a time-series database of key-value pairs with each entry containing metadata about how and when the data originated @ the edge. Included in this metadata is the data collection timestamp, ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," version used to collect the data, the ",(0,r.kt)("a",{parentName:"p",href:"#waggle-nodes"},"Waggle node")," the ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," was run on, and the specific compute unit within the node that the ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," was running on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp":"2022-06-10T22:37:47.369013647Z",\n    "name":"iio.in_temp_input",\n    "value":25050,\n    "meta":{\n        "host":"0000dca632ed6d06.ws-rpi",\n        "job":"sage",\n        "node":"000048b02d35a97c",\n        "plugin":"plugin-iio:0.6.0",\n        "sensor":"bme680",\n        "task":"iio-rpi",\n        "vsn":"W08C"\n    }\n}\n')),(0,r.kt)("p",null,"In the above example, the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"25050")," was collected @ ",(0,r.kt)("inlineCode",{parentName:"p"},"2022-06-10T22:37:47.369013647Z")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bme680")," sensor on node ",(0,r.kt)("inlineCode",{parentName:"p"},"000048b02d35a97c")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-iio:0.6.0")," ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note"),": see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/accessing-data"},"Access and use data")," site for more details and data access examples.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/data-repository"},"https://github.com/waggle-sensor/data-repository"))),(0,r.kt)("h3",{id:"edge-scheduler-es"},"Edge Scheduler (ES)"),(0,r.kt)("p",null,"The Edge Scheduler is defined as the suite of services running in Beehive that facilitate running ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," @ the edge. Included here are user interfaces and APIs for scientists to create and manage their ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d"),". The Edge Scheduler continously analyzes node workloads against all the ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," to determine how the ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," are deployed to the Beehive nodes. When it is determined that a node's ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," are to be updated, the Edge Scheduler interfaces with ",(0,r.kt)("a",{parentName:"p",href:"#waggle-edge-stack-wes"},"WES")," running on those nodes to update the node's local copy of the ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d"),". Essentially, the Edge Scheduler is the overseer of all the Beehive's nodes, deploying ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d")," to them to meet the scientists ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," execution objectives."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler"},"https://github.com/waggle-sensor/edge-scheduler"))),(0,r.kt)("h3",{id:"edge-code-repository-ecr"},"Edge Code Repository (ECR)"),(0,r.kt)("p",null,'The Edge Code Repository is the "app store" that hosts all the tested and benchmarked edge ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," that can be deployed to the nodes. This is the interface allowing users to discover existing ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," (for potential inclusion in their ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goals\u201d"),") in addition to submitting their own. At it's core, the ECR provides a verified and versioned repository of ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," images that are pulled by the nodes when a ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," is to be downloaded as run-time component of a ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goal\u201d"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-code-repository"},"https://github.com/waggle-sensor/edge-code-repository"))),(0,r.kt)("h3",{id:"lambda-triggers-lt"},"Lambda Triggers (LT)"),(0,r.kt)("p",null,"The Lambda Triggers service provides a framework for running reactive code within the Beehive. There are two kinds of reaction triggers considered here: From-Edge and To-Edge."),(0,r.kt)("p",null,"From-Edge triggers, or messages that originate from an edge node, can be used to trigger lambda functions -- for example, if high wind velocity is detected, a function could be triggered to determine how to reconfigure sensors or launch a computation or send an alert."),(0,r.kt)("p",null,"To-Edge triggers are messages that are to change a node's behavior. For example an HPC calculation or cloud-based data analysis could trigger an ",(0,r.kt)("a",{parentName:"p",href:"#edge-scheduler-es"},"Edge Scheduler")," API call to request a ",(0,r.kt)("a",{parentName:"p",href:"#science-goals"},"\u201cscience goal\u201d")," to be run on a particular set of edge nodes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/lambda-triggers"},"https://github.com/waggle-sensor/lambda-triggers"))),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Nodes are the edge computing component of the cyberinfrastructure. All nodes consist of 3 items:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Persisent storage")," for housing downloaded ",(0,r.kt)("a",{parentName:"li",href:"#what-is-a-plugin"},"plugins")," and caching published data before it is transferred to the node's Beehive"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CPU and GPU compute modules")," where ",(0,r.kt)("a",{parentName:"li",href:"#what-is-a-plugin"},"plugins")," are executed and perform the accelerated inferences"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sensors")," such as environment sensors, cameras and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lidar"},"LiDAR systems"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 5: Waggle Node Overview",src:a(4152).Z,width:"528",height:"335"})),(0,r.kt)("p",null,'Sage/Waggle nodes enable @ the edge fast computation, leveraging the large non-volatile storage to handle caching of high frequency data (including images, audio and video) in the event the node is "offline" from its Beehive.  Through expansion ports the nodes support the adding and removing of sensors to fully customize the node deployments for the particular deployment environment.'),(0,r.kt)("p",null,"Overall, even though the nodes may use different CPU architectures and different sensor configurations, they all leverage the same ",(0,r.kt)("a",{parentName:"p",href:"#waggle-edge-stack-wes"},"Waggle Edge Stack (WES)")," to run ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins"),"."),(0,r.kt)("h3",{id:"wild-sagewaggle-node"},"Wild Sage/Waggle Node"),(0,r.kt)("p",null,"The Wild Sage Node (or Wild Waggle Node) is a custom built weather-proof enclosure intended for remote outdoor installation. The node features software and hardware resilience via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/wildnode-image"},"custom Waggle operating system")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/wagman"},"custom Wagman circuit board"),". Internal to the node is a power supply and PoE network switch supporting the addition of sensors through standard Ethernet (PoE), USB and other embedded protocols via the node expansion ports."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 6: Wild Waggle Node Overview",src:a(9585).Z,width:"515",height:"401"})),(0,r.kt)("p",null,"The technical capabilities of the Wild Waggle Node consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NVidia Xavier NX ARM64 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/nodecontroller"},"Node Controller")," w/ 8GB of shared CPU/GPU RAM"),(0,r.kt)("li",{parentName:"ul"},"1 TB of NVMe storage"),(0,r.kt)("li",{parentName:"ul"},"4x PoE expansion ports"),(0,r.kt)("li",{parentName:"ul"},"1x USB2 expansion port"),(0,r.kt)("li",{parentName:"ul"},"optional ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stevenson_screen"},"Stevenson Shield")," housing a RPi 4 w/ environmental sensors & microphone"),(0,r.kt)("li",{parentName:"ul"},"optional 2nd NVidia Xavier NX ARM64 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edgeprocessor"},"Edge Processor"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Manual: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.waggle-edge.ai/docs/about/resources/wsn-manual"},"https://docs.waggle-edge.ai/docs/about/resources/wsn-manual"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/wild-waggle-node"},"https://github.com/waggle-sensor/wild-waggle-node"))),(0,r.kt)("h3",{id:"waggle-blade-node"},"Waggle Blade Node"),(0,r.kt)("p",null,"The Waggle Blade Node is a standard commercially available server intended for us in a climate controlled machine room, or extended temperature range telecom-grade blades for harsher environments. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/blade-image"},"AMD64 based Waggle operating system")," supports these types of nodes, enabling the services needed to support ",(0,r.kt)("a",{parentName:"p",href:"#waggle-edge-stack-wes"},"WES"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 7: Waggle Blade Node Overview",src:a(7642).Z,width:"517",height:"390"})),(0,r.kt)("p",null,"The above diagram shows the basic technical configuration of a Waggle Blade Node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-core ARM64"),(0,r.kt)("li",{parentName:"ul"},"32GB of RAM"),(0,r.kt)("li",{parentName:"ul"},"Dedicated NVida T4 GPU"),(0,r.kt)("li",{parentName:"ul"},"1 TB of SSD storage")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note"),": it is possible to add the same optional ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Stevenson_screen"},"Stevenson Shield")," housing that is available to the ",(0,r.kt)("a",{parentName:"p",href:"#wild-waggle-node"},"Wild Waggle Nodes"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-blade"},"https://github.com/waggle-sensor/waggle-blade"))),(0,r.kt)("h2",{id:"running-plugins--the-edge"},"Running plugins @ the Edge"),(0,r.kt)("p",null,"Included in the Waggle operating systems are the core components necessary to enable running ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," @ the edge.  At the heart of this is ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s"),", which creates a protected & isolated run-time environment. This environment combined with the tools and services provided by ",(0,r.kt)("a",{parentName:"p",href:"#waggle-edge-stack-wes"},"WES")," enable ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," access to the node's CPU, GPU, sensors and cameras."),(0,r.kt)("h3",{id:"waggle-edge-stack-wes"},"Waggle Edge Stack (WES)"),(0,r.kt)("p",null,"The Waggle Edge Stack is the set of core services running within the ",(0,r.kt)("a",{parentName:"p",href:"#waggle-nodes"},"Waggle node's")," ",(0,r.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3s")," run-time environment that supports all the features that ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," need to run on the Waggle nodes. The WES services coordinate with the core ",(0,r.kt)("a",{parentName:"p",href:"#beehive"},"Beehive")," services to download & run scheduled ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," (including load balancing) and facilitate uploading ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," published data to the Beehive ",(0,r.kt)("a",{parentName:"p",href:"#data-repository-dr"},"data repository"),". Through abstraction technologies and WES provided tools, ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," have access to sensor and camera data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure 8: Waggle Edge Stack Overview",src:a(3822).Z,width:"636",height:"539"})),(0,r.kt)("p",null,"The above diagram demonstrates 2 ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins"),' running on a Waggle node.  Plugin 1 ("neon-kafka") is an example ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin"),' that is running alongside Plugin 2 ("data-smooth"). In this example, "neon-kafka" (via the WES tools) is reading metrics from the node\'s sensors and then publishing that data within the WES run-time environment (internal to the node).\nAt the same time, the "data-smooth" ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin")," is subscribing to this data stream, performing some sort of inference and then publishing the inference results (via WES tools) to Beehive."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note"),": see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/edge-apps"},"Edge apps")," guide on how to create a Waggle ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugin"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Details & source code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-edge-stack"},"https://github.com/waggle-sensor/waggle-edge-stack"))),(0,r.kt)("h3",{id:"what-is-a-plugin"},"What is a plugin"),(0,r.kt)("p",null,"Plugins are the user developed module that the Waggle cyberinfrastructure is designed around. At it's simplest definition a \"plugin\" is code that runs @ the edge to perform some task. That task may be simply collecting sample camera images or a complex inference combining sensor data and results published from other plugins. A plugin's code will interface with the edge node's sensor(s) and then publish resulting data via the tools provided by ",(0,r.kt)("a",{parentName:"p",href:"#waggle-edge-stack-wes"},"WES"),". All developed plugins are hosted by the Beehive ",(0,r.kt)("a",{parentName:"p",href:"#edge-code-repository-ecr"},"Edge Code Repository"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/edge-apps"},"how to create plugins")," for details.")),(0,r.kt)("h3",{id:"science-goals"},"Science Goals"),(0,r.kt)("p",null,'A "science goal" is a rule-set for how and when ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins"),' are run on edge nodes. These "science goals" are created by scientist to accomplish a science objective through the execution of ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugin"},"plugins")," in a specific manner. Goals are created, in a human language, and managed within the Beehive ",(0,r.kt)("a",{parentName:"p",href:"#edge-scheduler-es"},"Edge Scheduler"),'. It is then the cyberinfrastucture responsibility to deploy the "science goals" to the edge nodes and execute the goal\'s ',(0,r.kt)("a",{parentName:"p",href:"#what-is-a-plugins"},"plugins"),". The ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/schedule-jobs"},"tutorial")," walks through running a science goal."))}g.isMDXComponent=!0},2918:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch_beehives_01-b8018d2fcb011afe51840fc080dac4dc.svg"},9688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch_high_01-770507cc9c88a2a5ec6125510fb8e527.svg"},801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/beehive_details_01-17afa73f2d666b43d21ba820c0423888.svg"},7814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/beehive_high_01-22e4d3a5822b0072fe6573674d3c109e.svg"},7642:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node_blade_01-60cda8bc9c4d201ab4ee6876b4f4c67c.svg"},4152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node_overview_01-98f28b1ff8c7610992042d1d2c719127.svg"},9585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node_wild_01-addd18fb19d07c36aaec6ffe2187a064.svg"},3822:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wes_overview_01-9559b1c3f53314fa18388e193870a589.svg"}}]);