"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40357:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Unleashing the Power of Collaboration",s={type:"mdx",permalink:"/science/collaboration",source:"@site/src/pages/science/collaboration.md",title:"Unleashing the Power of Collaboration",description:"Clouds have long fascinated humans because of their complex and diverse nature. To gain a deeper understanding of these atmospheric phenomena, a multidisciplinary team of computer scientists, meteorologists, and machine learning experts from Northwestern-Argonne Institute of Science and Engineering (NAISE) collaborated on the National Science Foundation (NSF)-supported SAGE project. The project's goal was to develop new edge computing technologies that would allow scientists to collect and analyze large amounts of data from advanced sensors in real time.",frontMatter:{}},l=[{value:"Featured works:",id:"featured-works",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unleashing-the-power-of-collaboration"},"Unleashing the Power of Collaboration"),(0,r.kt)("p",null,"Clouds have long fascinated humans because of their complex and diverse nature. To gain a deeper understanding of these atmospheric phenomena, a multidisciplinary team of computer scientists, meteorologists, and machine learning experts from Northwestern-Argonne Institute of Science and Engineering (NAISE) collaborated on the National Science Foundation (NSF)-supported SAGE project. The project's goal was to develop new edge computing technologies that would allow scientists to collect and analyze large amounts of data from advanced sensors in real time."),(0,r.kt)("p",null,"Inspired by compelling results after applying a self-supervised machine learning model (called DINO) to bird sound analysis, our team explored the possibility of utilizing similar techniques to study cloud images (referring to it as ClouDINO). Encouraging early results prompted us to seek further application of the model by leveraging data from the Atmospheric Radiation Measurement (ARM) User Facility at the Department of Energy's Southern Great Plains (SGP) atmospheric observatory and Argonne Testbed for Multiscale Observational Science (ATMOS) at the U.S. Department of Energy\u2019s Argonne National Laboratory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Zones",src:n(20566).Z,width:"1910",height:"1666"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fig:1")," ",(0,r.kt)("em",{parentName:"p"},"The feature vectors trained with DINO in PCS space.")),(0,r.kt)("p",null,"We used a self-supervised learning model capable of autonomously extracting prominent features from ground-based sky camera images. Using a joint embedding architecture with Vision Transformers, our model learned to autonomously segment cloudy images and classify them based on their properties such as coverage, diurnal variation, and cloud base height. Notably, the self-supervised model even showed potential for semantic segmentation without the need for labeled data which we would like to explore further. The results were comparable to the other studies of our team lead by Bobby Jackson, an atmospheric scientist and instrument specialist at Argonne, who primarily utilized Doppler Lidar data. Furthermore, Seongha Park's prior work in solar energy prediction, leveraging her expertise in computer science and information technology, significantly complemented our findings and greatly boosted our validation efforts with new a dataset. This made our results more robust due to intercomparison from the different perspectives."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Clusters_Labelled",src:n(14630).Z,width:"1390",height:"1270"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fig:2")," ",(0,r.kt)("em",{parentName:"p"},"K-means clusters of the above feature vectors.")),(0,r.kt)("p",null,"One particular impact of our work will be on the incorporation of edge computing via SAGE nodes, enabling self-supervised learning to occur at the edge itself. This real-time data processing will remove the need of transmitting large data to the cloud, and it can enable sensor configuration in response to changing conditions and opening new avenues for application, putting privacy at the peak priority. We are testing our ideas at the edge thanks to the constant support provided by the Waggle cyber infrastructure team."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"instruments2",src:n(37812).Z,width:"901",height:"1209"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fig:3")," ",(0,r.kt)("em",{parentName:"p"},"Sage node at the ARM User Facility at Southern Great Plains (SGP) atmospheric observatory.")),(0,r.kt)("p",null,"As we published our findings, we reflected on the knowledge and experience acquired during this period. Dario Dematties, a machine learning expert, expanded his understanding of clouds, while Bhupendra Raut, a meteorologist, delved deeper into the intricacies of advanced machine learning models. The journey not only was intellectually stimulating but also filled with joy and team spirit. This work is an example of the power of blending expertise from various fields to gain deeper insights into the natural world."),(0,r.kt)("p",null,"Looking ahead, we plan to utilize more SAGE data with advanced machine learning techniques. By harnessing multiple sources of  diverse data from the NSF NEON, the DOE ARM and CROCUS projects we can adapt our model's architecture to capture the complexities of weather and climate processes. Our collaborative project exemplifies the power of multidisciplinary teamwork and the potential of edge computing in advancing earth science."),(0,r.kt)("h2",{id:"featured-works"},"Featured works:"),(0,r.kt)("p",null,"[1]"," Dematties et al. (2023) - Self-Supervised Approach for Cloud Image Analysis in Artificial Intelligence for the Earth Systems, 2(2), p.220063."),(0,r.kt)("p",null,"[2]"," Jackson et al. (2023) - ARMing the Edge: Designing Edge Computing-Capable Machine Learning Algorithms for ARM Doppler Lidar Processing in Artificial Intelligence for Earth Systems, doi.org/10.1175/AIES-D-22-0062.1."),(0,r.kt)("p",null,"[3]"," Raut et al. (2023) - Self-Supervised Approach for Cloud Image Analysis in the 103rd AMS Annual Meeting."),(0,r.kt)("p",null,"[4]"," Dematties et al. (2022) - Self-Supervised Learning for Automated Species Detection from Soundscapes in Avian Diversity Monitoring at SC22 Conference, Dallas, Texas."))}d.isMDXComponent=!0},14630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Clusters_Labelled-dc8172f0406c0cbb7b13ae40ba1f9937.png"},20566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Zones-2440ff6d679854736fe65a9332344640.png"},37812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/instruments2-edffde987cd245e30a754e338a9a2dd4.jpg"}}]);