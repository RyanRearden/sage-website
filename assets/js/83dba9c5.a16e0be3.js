"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[968],{88881:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=i(74848),r=i(28453);const a={},s="Lightning Detection with Software Defined Radio",o={type:"mdx",permalink:"/science/lightning-detector",source:"@site/src/pages/science/lightning-detector.md",title:"Lightning Detection with Software Defined Radio",description:"Lightning causes significant damage, starts wildfires, and poses a threat to human safety. Lightning strike releases a large pulse of electromagnetic energy that can be detected and recorded with software-defined radio (SDR). These recordings can be used to:",frontMatter:{},unlisted:!1},h={},l=[{value:"How Lightning is Created",id:"how-lightning-is-created",level:2},{value:"Charge Separation",id:"charge-separation",level:3},{value:"Danger of Postive Lightning",id:"danger-of-postive-lightning",level:3},{value:"Approach and Future Directions",id:"approach-and-future-directions",level:2},{value:"References",id:"references",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lightning-detection-with-software-defined-radio",children:"Lightning Detection with Software Defined Radio"}),"\n",(0,n.jsx)(t.p,{children:"Lightning causes significant damage, starts wildfires, and poses a threat to human safety. Lightning strike releases a large pulse of electromagnetic energy that can be detected and recorded with software-defined radio (SDR). These recordings can be used to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Determine the location of a lightning strike by using the time of arrival method."}),"\n",(0,n.jsx)(t.li,{children:"May be able to determine the type of lightning. Positive cloud to ground lightning discharge are likely to cause fire\r\nAdditionally, the data collected by SDR is collected at about 10 MB/s making it essential to only record specific batches of data."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-lightning-is-created",children:"How Lightning is Created"}),"\n",(0,n.jsxs)(t.p,{children:["According to the article that NWS provides",(0,n.jsxs)("sup",{children:["[",(0,n.jsx)(t.a,{href:"#references",children:"1"}),"]"]}),", the conditions needed to produce lightning have been known for some time. However, exactly how lightning forms has never been verified so there is room for debate. Leading theories focus around separation of electric charge and generation of an electric field within a thunderstorm. Recent studies also indicate that ice, hail, and semi-frozen water drops known as graupel are essential to lightning development. Storms that fail to produce large quantities of ice usually fail to produce lightning."]}),"\n",(0,n.jsx)(t.h3,{id:"charge-separation",children:"Charge Separation"}),"\n",(0,n.jsx)(t.p,{children:'Thunderstorms have very turbulent environments. Strong updrafts and downdrafts occur with regularity and within close proximity to each other. The updrafts transport small liquid water droplets from the lower regions of the storm to heights between 35,000 and 70,000 feet, miles above the freezing level. Meanwhile, downdrafts transport hail and ice from the frozen upper regions of the storm. When these collide, the water droplets freeze and release heat. This heat in turn keeps the surface of the hail and ice slightly warmer than its surrounding environment, and a "soft hail", or "graupel" forms. When this graupel collides with additional water droplets and ice particles, a critical phenomenon occurs: Electrons are sheared off of the ascending particles and collect on the descending particles. Because electrons carry a negative charge, the result is a storm cloud with a negatively charged base and a positively charged top.'}),"\n",(0,n.jsx)(t.p,{children:"When that charge threshold is reached, the strength of the electric field overpowers the atmosphere's insulating properties, and lightning results. The electric field within the storm is not the only one that develops. Below the negatively charged storm base, positive charge begins to pool within the surface of the earth. This positive charge will shadow the storm wherever it goes, and is responsible for cloud-to-ground lightning."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(83512).A+"",width:"4400",height:"2475"})}),"\n",(0,n.jsx)(t.p,{children:'Some lightning originates in the cirrus anvil or upper parts near the top of the thunderstorm, where a high positive charge resides. Lightning that forms in this region follows the same scenario as previously described, but the descending stepped leader will carry a positive charge while its subsequent ground streamers will have a negative charge. These bolts are known as "positive lightning" because there is a net transfer of positive charge from the cloud to the ground.'}),"\n",(0,n.jsx)(t.h3,{id:"danger-of-postive-lightning",children:"Danger of Postive Lightning"}),"\n",(0,n.jsx)(t.p,{children:"Positive lightning makes up less than 5% of all strikes. However, despite a significantly lower rate of occurrence, positive lightning is particularly dangerous for several reasons. Since it originates in the upper levels of a storm, the amount of air it must burn through to reach the ground usually much greater. Therefore, its electric field typically is much stronger than a negative strike. Its flash duration is longer, and its peak charge and potential can be ten times greater than a negative strike. Positive flashes are believed to be responsible for a large percentage of forest fires and power line damage. Thus, positive lightning is much more lethal and causes greater damage than negative lightning."}),"\n",(0,n.jsx)(t.h2,{id:"approach-and-future-directions",children:"Approach and Future Directions"}),"\n",(0,n.jsx)(t.p,{children:"In terms of predicting and forecasting wildfire caused by lightning strike, we employed a software-defined radio (SDR) to collect data about negative and postive lightning. So we built a weatherproofed SDR box that could be connected to a Waggle/Sage node. The radio generates 10 MB/s data."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(47004).A+"",width:"810",height:"1080"})}),"\n",(0,n.jsx)(t.p,{children:"As a preliminary result, we were able to recieve a distinguishable signal."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(96722).A+"",width:"1228",height:"920"})," ",(0,n.jsx)(t.img,{src:i(68386).A+"",width:"1228",height:"920"})]}),"\n",(0,n.jsx)(t.p,{children:"We are expecting that we can collect sufficient positive and negative lightning data, so that we can build a process to distinguish them. Additionally, when Waggle/Sage nodes including this SDR are deployed and formed a grid, we will implement a way to triangulate the location of a lighting strike."}),"\n",(0,n.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.weather.gov/source/zhu/ZHU_Training_Page/lightning_stuff/lightning2/lightning_intro.html",children:"https://www.weather.gov/source/zhu/ZHU_Training_Page/lightning_stuff/lightning2/lightning_intro.html"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},83512:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lightning-fedb01ed45be26385def0b135fe71894.png"},47004:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lightning2-f9d2ce24e061b1680838d536fc4a5d5c.jpg"},96722:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lightning_result-1f19a74edd2e9b277daa78b105ec7668.png"},68386:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/lightning_result_plot-6d02171eceba9c883569733bc5c2972a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var n=i(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);