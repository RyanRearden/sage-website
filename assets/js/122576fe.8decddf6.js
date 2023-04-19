"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,u=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8526:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},o="Wildfire Detection",s={type:"mdx",permalink:"/sage-website/science/wildfire-science",source:"@site/src/pages/science/wildfire-science.md",title:"Wildfire Detection",description:"by Aristana Scourtas",frontMatter:{}},l=[{value:"Fire moves fast",id:"fire-moves-fast",level:2},{value:"What deep learning can do",id:"what-deep-learning-can-do",level:2},{value:"Current algorithms",id:"current-algorithms",level:2},{value:"Is time the secret ingredient?",id:"is-time-the-secret-ingredient",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],c={toc:l},m="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wildfire-detection"},"Wildfire Detection"),(0,r.kt)("p",null,"by Aristana Scourtas"),(0,r.kt)("p",null,"Hi friendly reader! My name is Aristana Scourtas, and I\u2019m currently pursuing my MS in Artificial Intelligence at Northwestern University. I have two years of industry software experience and a dream to apply my computing skills to environmental and climate change-related issues. This summer I\u2019m committed to finding novel solutions to an old problem \u2014 early detection of wildfires."),(0,r.kt)("h2",{id:"fire-moves-fast"},"Fire moves fast"),(0,r.kt)("p",null,"The early detection of smoke from wildfires is critical to saving lives, infrastructure, and the environment \u2014 and every minute counts. Once ignited, a fire can spread at speeds of up to around 14 mph",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"1"),"]")," \u2014 that\u2019s about 2.3 miles every 10 minutes! The devastating Camp wildfire that tore through northern California in 2018 moved at more than a football field per second (160 ft/s) at its fastest point.",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"2"),"]")),(0,r.kt)("p",null,"The Camp Wildfire (Nov 8th, 2018), imaged via Landsat 8, a NASA/USGS satellite.",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"3"),"]"),"\nSo how can we do this? Currently, wildfires are detected any number of ways: in California, wildfires are typically first recorded via 911 (a US emergency hotline) calls",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"4"),"]"),", but we also detect wildfires via fire watchtowers or by camera networks and satellite images (like from the GOES",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"5"),"]")," or VIIRS",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"6"),"]")," satellites) that inspect areas of interest. In all of these cases, a person needs to continually monitor the data streams for signs of smoke and fires."),(0,r.kt)("p",null,"However, human beings can only do so much. Continuously monitoring multiple video feeds for fires is a fatiguing, error-prone task that would be challenging for any person."),(0,r.kt)("p",null,"But how about a computer?"),(0,r.kt)("h2",{id:"what-deep-learning-can-do"},"What deep learning can do"),(0,r.kt)("p",null,"Deep learning is a subset of machine learning that focuses specifically on neural networks with a high number of layers. Machine learning is really good at doing things humans are typically bad at, like rapidly synthesizing Gigabytes of data and finding complicated patterns and relationships."),(0,r.kt)("p",null,"A simple neural network with only one hidden layer. We\u2019d call this a \u201cshallow\u201d neural network. (Graphic modified from V. Valkov)",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"8"),"]"),"\nNeural networks are said to be \u201cuniversal approximators\u201d,",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"7"),"]")," because they can learn any nonlinear function between an input and an output \u2014 this is very helpful for analyzing the patterns and relationships in images, for example."),(0,r.kt)("p",null,"Deep learning algorithms are good for the task of smoke detection, because they can constantly and automatically \u201cmonitor\u201d the image and video streams from fire watchtower networks and satellites, and alert officials when there\u2019s likely smoke in the image."),(0,r.kt)("h2",{id:"current-algorithms"},"Current algorithms"),(0,r.kt)("p",null,"As I\u2019m writing this article, the current research out there on deep learning for wildfire smoke detection largely focuses on using Convolutional Neural Networks (CNNs) for static images. CNNs are commonly used for image data, and are good at learning spatial information."),(0,r.kt)("p",null,"For example, in my smoke detection research, we\u2019re working with an image dataset from the HPWREN",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"9"),"]")," tower network in southern California."),(0,r.kt)("p",null,"An example HPWREN image capturing smoke. This image, after it is pre-processed for the neural network, is then fed to the CNN as input.\nUnfortunately, while these CNN-based algorithms usually have high accuracy, they can also produce a high number of false positives, meaning they mistake other things, like clouds or fog, for smoke."),(0,r.kt)("p",null,"Furthermore, while these models do well in their studies, oftentimes they do not perform well when assessed with images from other regions. For instance, the ForestWatch model, which has been deployed in a variety of countries such as South Africa, Slovakia, and the USA, did not perform well when assessed using data from Australian watch towers."),(0,r.kt)("p",null,"This begged the question: \u201cwell, how do humans detect wildfire smoke?\u201d Looking through the dataset of images of California landscapes, I often found I could not tell if there was smoke in any of the early images.",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"10"),"]")),(0,r.kt)("p",null,"Can you find the smoke in this image from the HPWREN towers? It was taken 9 minutes after the smoke plume was confirmed to be visible from the tower.\n(Answer: from the left of the image, it\u2019s 1/3 of the way in)\nI\u2019d only see the smoke once I compared images sequentially, from one timestamp to the next. Intuitively, movement on or below the horizon seemed to be a key aspect of recognizing smoke."),(0,r.kt)("h2",{id:"is-time-the-secret-ingredient"},"Is time the secret ingredient?"),(0,r.kt)("p",null,"After listening to the opinions of my mentors and a California fire marshal, it seemed like everyone agreed \u2014 movement was a key part of how we identified smoke."),(0,r.kt)("p",null,"Could we create a model that learns temporal information as well as spatial information? In other words, could it learn both what smoke looked like (spatial), and how the images of smoke changed over time (temporal)?"),(0,r.kt)("p",null,"I\u2019m now developing an algorithm that can do just that. Often, a Long Short-Term Memory network (LSTM), which is a kind of Recurrent Neural Network (RNN), are used for learning patterns over time (i.e. in sequential data). For instance, LSTMs are frequently used for text prediction and generation (like that in the Messages app on iPhones)."),(0,r.kt)("p",null,"Models that combine spatial data (often learned via CNNs) with some other model or technique that captures temporal data have been used in a variety of other applications with video or sequential image data, such as person re-identification, object tracking, etc."),(0,r.kt)("p",null,"We\u2019re exploring how we can apply a similar hybrid spatial-temporal model to our smoke dataset."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Automated early detection of wildfire smoke using deep learning models has shown promising results, but false positive rates remain high, particularly when the models are deployed to novel environments."),(0,r.kt)("p",null,"Including a temporal component may be a key way we can improve these models, and help them distinguish better between smoke and clouds or fog."),(0,r.kt)("p",null,"This work doesn\u2019t come a moment too soon, as wildfires are increasing in intensity and frequency due to climate change\u2019s effects on air temperature, humidity, and vegetation, among other factors. Unfortunately, fires like the ones that tore across Australia earlier this year will become much more common in many parts of the globe."),(0,r.kt)("p",null,"Hopefully, as we improve the technology to detect these fires early on, we can save lives and ecosystems!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The Amazon Rainforest",src:a(2839).Z,width:"800",height:"531"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Amazon Rainforest, home to many peoples and countless species. A home worth protecting.11")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u201cHow Wildfires Work\u201d. ",(0,r.kt)("a",{parentName:"li",href:"https://science.howstuffworks.com/nature/natural-disasters/wildfire.htm"},"https://science.howstuffworks.com/nature/natural-disasters/wildfire.htm")),(0,r.kt)("li",{parentName:"ol"},"\u201cWhy the California wildfires are spreading so quickly\u201d. ",(0,r.kt)("a",{parentName:"li",href:"https://www.cnn.com/2018/11/09/us/wildfires-why-they-spread-so-quickly-wcx/index.html"},"https://www.cnn.com/2018/11/09/us/wildfires-why-they-spread-so-quickly-wcx/index.html")),(0,r.kt)("li",{parentName:"ol"},"Camp Fire photo. ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Camp_Fire_(2018)"},"https://en.wikipedia.org/wiki/Camp_Fire_(2018)")),(0,r.kt)("li",{parentName:"ol"},"Govil, K., Welch, M. L., Ball, J. T., & Pennypacker, C. R. (2020). Preliminary Results from a Wildfire Detection System Using Deep Learning on Remote Camera Images. Remote Sensing, 12(1), 166. ",(0,r.kt)("a",{parentName:"li",href:"https://www.mdpi.com/2072-4292/12/1/166"},"https://www.mdpi.com/2072-4292/12/1/166")),(0,r.kt)("li",{parentName:"ol"},"GOES. ",(0,r.kt)("a",{parentName:"li",href:"https://www.nasa.gov/content/goes-overview/index.html"},"https://www.nasa.gov/content/goes-overview/index.html")),(0,r.kt)("li",{parentName:"ol"},"VIIRS. ",(0,r.kt)("a",{parentName:"li",href:"https://ncc.nesdis.noaa.gov/VIIRS/"},"https://ncc.nesdis.noaa.gov/VIIRS/")),(0,r.kt)("li",{parentName:"ol"},"Scarselli, F., & Tsoi, A. C. (1998). Universal approximation using feedforward neural networks: A survey of some existing methods, and some new results. Neural networks, 11(1), 15-37. ",(0,r.kt)("a",{parentName:"li",href:"https://www.sciencedirect.com/science/article/pii/S089360809700097X?casa_token=NaZxQdSUi6MAAAAA:zMhRIkTNDTZWSWze5wIHVK73EtlgHzLm3cAMkRBpQmepxH3cSAyhIvPKpu_H5b-2kYdTcG1IQA"},"https://www.sciencedirect.com/science/article/pii/S089360809700097X?casa_token=NaZxQdSUi6MAAAAA:zMhRIkTNDTZWSWze5wIHVK73EtlgHzLm3cAMkRBpQmepxH3cSAyhIvPKpu_H5b-2kYdTcG1IQA")),(0,r.kt)("li",{parentName:"ol"},"NN graphic. ",(0,r.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/build-a-simple-neural-network-with-tensorflow-js-d434a30fcb8"},"https://towardsdatascience.com/build-a-simple-neural-network-with-tensorflow-js-d434a30fcb8")),(0,r.kt)("li",{parentName:"ol"},"HPWREN. ",(0,r.kt)("a",{parentName:"li",href:"http://hpwren.ucsd.edu/cameras/"},"http://hpwren.ucsd.edu/cameras/")),(0,r.kt)("li",{parentName:"ol"},"Alkhatib, A. A. (2014). A review on forest fire detection techniques. International Journal of Distributed Sensor Networks, 10(3), 597368. ",(0,r.kt)("a",{parentName:"li",href:"https://journals.sagepub.com/doi/full/10.1155/2014/597368"},"https://journals.sagepub.com/doi/full/10.1155/2014/597368")),(0,r.kt)("li",{parentName:"ol"},"Amazon Rainforest photo. ",(0,r.kt)("a",{parentName:"li",href:"https://www.flickr.com/photos/cifor/35781446921/in/photolist-WvTgyD-Wswjpu-WvThhH-aDkLRK-gc6ber-pTyR3d-WDWRaN-5DmhEW-26zB5WS-Wsw47L-okSB39-tGJNa6-fmiT3G-WDWQt7-bhuWwB-apiuo5-Tiiyso-4Liefh-Wsw5a7-VriduL-Wsw2so-4CffYr-Wswded-WvTeXH-Vri41W-9BLm5D-WDWS1L-iDTuNX-27MfQ1F-fmPDax-KDSb2e-7J1mrw-28tozv-27NbL44-21FpxXP-CSH5z-c1pwo-c1oNM-WswfXQ-9c2X8q-9BLn9X-9BPeJY-VADYoe-XJJZUo-U8xYB1-9BPcuC-Vrjgjm-9BLhcZ-Wsx9s3-9BPfHU"},"https://www.flickr.com/photos/cifor/35781446921/in/photolist-WvTgyD-Wswjpu-WvThhH-aDkLRK-gc6ber-pTyR3d-WDWRaN-5DmhEW-26zB5WS-Wsw47L-okSB39-tGJNa6-fmiT3G-WDWQt7-bhuWwB-apiuo5-Tiiyso-4Liefh-Wsw5a7-VriduL-Wsw2so-4CffYr-Wswded-WvTeXH-Vri41W-9BLm5D-WDWS1L-iDTuNX-27MfQ1F-fmPDax-KDSb2e-7J1mrw-28tozv-27NbL44-21FpxXP-CSH5z-c1pwo-c1oNM-WswfXQ-9c2X8q-9BLn9X-9BPeJY-VADYoe-XJJZUo-U8xYB1-9BPcuC-Vrjgjm-9BLhcZ-Wsx9s3-9BPfHU"))))}p.isMDXComponent=!0},2839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wildfire-1-cd03705517a536183eacdde3d67bfca1.jpg"}}]);