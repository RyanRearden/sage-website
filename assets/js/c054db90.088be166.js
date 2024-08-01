"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7320],{75979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),a=t(28453);const s={},o="Scalable AI@Edge computing in X-ray beamline experiments",r={type:"mdx",permalink:"/science/scalable-ci-in-aps",source:"@site/src/pages/science/scalable-ci-in-aps.md",title:"Scalable AI@Edge computing in X-ray beamline experiments",description:"Can Edge Computing Be Used in X-Ray Beamline Experiments to Process a High-Volume and Fast Data Stream and Help Scientists Make Real-Time Decisions for Experiments?",frontMatter:{},unlisted:!1},c={},d=[{value:"Configuring Edge Computing in The Beamline",id:"configuring-edge-computing-in-the-beamline",level:2},{value:"Performance of The Pipeline",id:"performance-of-the-pipeline",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"References",id:"references",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"scalable-aiedge-computing-in-x-ray-beamline-experiments",children:"Scalable AI@Edge computing in X-ray beamline experiments"}),"\n",(0,i.jsx)(n.p,{children:"Can Edge Computing Be Used in X-Ray Beamline Experiments to Process a High-Volume and Fast Data Stream and Help Scientists Make Real-Time Decisions for Experiments?"}),"\n",(0,i.jsxs)(n.p,{children:["Edge computing offers computation close to sensors for real-time data processing. Various X-ray sensor beamlines at Argonne's Advanced Photon Source (APS) stream enormous data at a fast frame rate to the cloud for data analysis, and science discovery happens in a high performance computing (HPC) facility. The scientists and engineers in the beamlines have recently added the data streaming and processing feature to their PvaPy",(0,i.jsxs)("sup",{children:["[",(0,i.jsx)(n.a,{href:"#references",children:"1"}),"]"]})," software package. This feature enables users to process data in real-time, allowing them to see experiment results immediately, as data is streamed to HPC, and make decisions as experiments take place. Edge computing can provide the same real-time data processing capability by deploying computation next to the sensors and can host AI@Edge applications that process data directly from the sensor. The Sage team questioned whether edge computing could scale its AI computation and match the requirement to provide the same real-time data processing capability while reducing the latency by not moving data to the cloud."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-edge-computing-in-the-beamline",children:"Configuring Edge Computing in The Beamline"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dataflow",src:t(34809).A+"",width:"1024",height:"768"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Figure 1: Dataflow of the pipeline: from X-ray detector to a visualization computer. Note that the control program in the diagram was designed for automatic scaling, but not implemented in this work."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To understand how edge computing plays in this domain, the Sage team established a workflow pipeline connecting an X-ray detector with a visualization computer placed at the end of the pipeline. We used multiple of a 1U server rack, equipped with a Nvidia T4 GPU accelerator, as an edge computing node and configured them in the middle of the pipeline to offer AI computation. The edge nodes were connected to the detector via a high-speed 10 Gbps network, however each node\u2019s network supported up to 1 Gbps network. The nodes hosted computing resources for running the scientist-developed machine learning (ML) model",(0,i.jsxs)("sup",{children:["[",(0,i.jsx)(n.a,{href:"#references",children:"2"}),"]"]})," after we quantized it to make the inference faster, though the process  sacrifices up to ~10% of accuracy. This allowed the nodes to run more instances of the model using the same computing resource. The X-ray detector was configured to stream 0.5 Mega-pixel frames at the frame rate of 1 - 2 kHz. To understand computation and network loads required in the workflow pipeline, we varied the number of edge nodes and instances of the AI@Edge application."]}),"\n",(0,i.jsx)(n.h2,{id:"performance-of-the-pipeline",children:"Performance of The Pipeline"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tracking traffic",src:t(96155).A+"",width:"1280",height:"640"})}),"\n",(0,i.jsx)(n.p,{children:"Interestingly, yet expectedly, we have found throughout the experiments that putting more edge computing nodes and model instances at the edge can satisfy the required frame rate by processing the streaming data (See Figure 2 and 3). We needed the number of edge nodes to be high enough to accommodate the network bandwidth required by the desired frame rate. Having more instances of the ML model enabled faster frame rate processing. What\u2019s more, adding more edge nodes and model instances at the edge can visualize the processed frames to the scientist. However, we also found that using an excessive number of instances does not - significantly improve the ability to process the frames, but the edge nodes\u2019 resources were underutilized as  more network burden was created. Controlling of such resource allocation will be the key to optimizing both computing and network resources per experiment and satisfying requirements unique per experiment, towards the scientific goal, i.e. rate and resolution of frames. This pipeline with the power of edge computing can help use the beamtime more efficiently, thus reducing the time and resources used in the beamline. This pipeline can also reduce radiological exposure to the sample, minimizing damage."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"performance-1khz",src:t(2314).A+"",width:"1275",height:"1210"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Figure 2: Performance of the pipeline at receiving 1 kHz data streaming. Among the cases, 5 edge nodes - each running 2 instances of the ML model, 10 instances in total - performed mostly efficiently to keep up with the frame rate."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"performance-2khz",src:t(41171).A+"",width:"1275",height:"1210"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Figure 3: Performance of the pipeline at receiving 2 kHz data streaming. Among the 3 cases, the total of 27 instances distributed in 9 edge nodes handled the data without losing any frame."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,i.jsx)(n.p,{children:"We believe that the capabilities of edge computing demonstrated in this experiment will be the key driving force to make successful beamline experiments. Advanced X-ray sensors with higher resolution and faster frame rate will demand faster edge computation and better control algorithms to distribute and manage the computation loads. As we demonstrated, the workflow can scale horizontally by allocating more edge nodes to an experiment, as computation and realtimeness of data processing needs increase. This workflow will also need to use given computing resources efficiently to run ML models with different resource allocation, driven by a control algorithm, and to host multiple experiments on the same edge computing node, when it cannot scale horizontally."}),"\n",(0,i.jsx)(n.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsxs)(n.p,{children:["We thank the Argonne's Advanced Photon Source for the opportunity to use the beamtime to perform the experiment. We also thank ",(0,i.jsx)(n.a,{href:"https://www.anl.gov/profile/mathew-joseph-cherukara",children:"Dr. Cherukara"}),", his group members, and ",(0,i.jsx)(n.a,{href:"https://www.anl.gov/profile/tao-zhou",children:"Dr. Zhou"})," for the help and support on the beamline configuration, as well as the machine learning model. We also thank Sini\u0161a Veseli for all the immediate support in the Pvapy library,  fixes, and improvements."]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["PvaPy: Python Binding for EPICS pvAccess, ",(0,i.jsx)(n.a,{href:"https://github.com/epics-base/pvaPy",children:"https://github.com/epics-base/pvaPy"})]}),"\n",(0,i.jsx)(n.li,{children:"Cherukara, M. J., Zhou, T., Nashed, Y., Enfedaque, P., Hexemer, A., Harder, R. J., & Holt, M. V. (2020). AI-enabled high-resolution scanning coherent diffraction imaging. Applied Physics Letters, 117(4), 044103."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},34809:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scalable-ci-in-aps-1-592c5d23531ecbfbea9d513bb2cf8c06.jpg"},2314:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scalable-ci-in-aps-2-e2aded9372ecf503cd379e3f9f31c895.png"},41171:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scalable-ci-in-aps-3-28e434f2fc3729396e873bac9573980e.png"},96155:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/scalable-ci-in-aps-4-d0b0e3fe856b3b8ae01942f5758114af.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);