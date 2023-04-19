"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},l="Part 3: Testing an edge app",i={unversionedId:"tutorials/edge-apps/testing-an-edge-app",id:"tutorials/edge-apps/testing-an-edge-app",title:"Part 3: Testing an edge app",description:"In the last part, we took a code snippit and iterated on it until it was ready for the edge. By the end, we had basic camera access and publishing working!",source:"@site/docs/tutorials/edge-apps/3-testing-an-edge-app.md",sourceDirName:"tutorials/edge-apps",slug:"/tutorials/edge-apps/testing-an-edge-app",permalink:"/docs/tutorials/edge-apps/testing-an-edge-app",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/tutorials/edge-apps/3-testing-an-edge-app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Part 2: Creating an edge app",permalink:"/docs/tutorials/edge-apps/creating-an-edge-app"},next:{title:"Part 4: Publishing to ECR",permalink:"/docs/tutorials/edge-apps/publishing-to-ecr"}},p={},s=[{value:"Accessing development nodes",id:"accessing-development-nodes",level:2},{value:"Organizing our app",id:"organizing-our-app",level:2},{value:"Building our app",id:"building-our-app",level:2},{value:"Running our app",id:"running-our-app",level:2},{value:"Viewing our output",id:"viewing-our-output",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"part-3-testing-an-edge-app"},"Part 3: Testing an edge app"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"creating-an-edge-app"},"last part"),", we took a code snippit and iterated on it until it was ready for the edge. By the end, we had basic camera access and publishing working!"),(0,o.kt)("p",null,"Now, we're ready to start testing it on a development node and describing our build steps."),(0,o.kt)("h2",{id:"accessing-development-nodes"},"Accessing development nodes"),(0,o.kt)("p",null,"The first thing we need to do is get access to a development node. Unfortunately, we are still developing the infrastructure to open this up to general users."),(0,o.kt)("p",null,"For now, please ",(0,o.kt)("a",{parentName:"p",href:"/docs/contact-us"},"contact us")," to request access to a development node and we'll work with you to setup access."),(0,o.kt)("h2",{id:"organizing-our-app"},"Organizing our app"),(0,o.kt)("p",null,"Before connecting to our node, let's take a moment to organize our code into a repo we will later use on the node."),(0,o.kt)("p",null,"Go ahead and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-app-template/generate"},"generate a new repo from our edge app template"),". We will use repository name ",(0,o.kt)("inlineCode",{parentName:"p"},"app-tutorial")," for this tutorial. (",(0,o.kt)("em",{parentName:"p"},"You'll need to be signed in to Github to do this."),")"),(0,o.kt)("p",null,"This will provide you a new repo with the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edge-app-template/blob/main/main.py"},"main.py"),": Main code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edge-app-template/blob/main/requirements.txt"},"requirements.txt"),": Python dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edge-app-template/blob/main/Dockerfile"},"Dockerfile"),": App build instructions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/edge-app-template/blob/main/sage.yaml"},"sage.yaml"),": App metadata template.")),(0,o.kt)("p",null,"If you made any changes to your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," from part 2, feel free to commit and push any of your own changes, otherwise we will use the example from the template for the rest of the tutorial."),(0,o.kt)("h2",{id:"building-our-app"},"Building our app"),(0,o.kt)("p",null,"Now that we've setup node access, ssh to the node then clone and cd into your ",(0,o.kt)("inlineCode",{parentName:"p"},"app-tutorial")," repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/username/app-tutorial\ncd app-tutorial\n")),(0,o.kt)("p",null,"The first thing we'll do is build our app on the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pluginctl build .\n")),(0,o.kt)("p",null,"This may take some time, but once it completes you should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Sending build context to Docker daemon  59.39kB\nStep 1/6 : FROM waggle/plugin-base:1.1.1-base\n...\nStep 2/6 : WORKDIR /app\n...\nStep 3/6 : COPY requirements.txt .\n...\nStep 4/6 : RUN pip3 install --no-cache-dir -r requirements.txt\n...\nStep 5/6 : COPY . .\n...\nStep 6/6 : ENTRYPOINT ["python3", "main.py"]\n...\nb38bc0a208d0: Pushed \n1101ffccd70a: Pushed \nlatest: digest: sha256:7bee2a62fbcc9913f1c53bbdab79e973e70947618ffe4db90cae6a8f0ff6c8d7 size: 2407\nSuccessfully built plugin\n\n10.31.81.1:5000/local/app-tutorial\n')),(0,o.kt)("p",null,"Once we see ",(0,o.kt)("inlineCode",{parentName:"p"},"Successfully built plugin"),", we can continue to running our app."),(0,o.kt)("h2",{id:"running-our-app"},"Running our app"),(0,o.kt)("p",null,"When we successfully built our app, the last line of output was ",(0,o.kt)("inlineCode",{parentName:"p"},"10.31.81.1:5000/local/app-tutorial"),". We will\nnow use this reference to run our app."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pluginctl run --name app-tutorial 10.31.81.1:5000/local/app-tutorial\n")),(0,o.kt)("p",null,"When you run this, you'll see that there's a bug in the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'Launched the plugin app-tutorial-1659971085 successfully \nINFO: 2022/08/08 15:04:45 run.go:63: Plugin is in "Pending" state. Waiting...\n\n[ WARN:0@0.032] global /io/opencv/modules/videoio/src/cap_v4l.cpp (902) open VIDEOIO(V4L2:/dev/video0): can\'t open camera by index\nTraceback (most recent call last):\n  File "main.py", line 32, in <module>\n    main()\n  File "main.py", line 15, in main\n    with Camera() as camera:\n  File "/usr/local/lib/python3.8/dist-packages/waggle/data/vision.py", line 107, in __enter__\n    self.capture.__enter__()\n  File "/usr/local/lib/python3.8/dist-packages/waggle/data/vision.py", line 133, in __enter__\n    raise RuntimeError(f"unable to open video capture for device {self.device!r}")\nRuntimeError: unable to open video capture for device 0\n')),(0,o.kt)("p",null,"This was caused by the fact that most nodes have multiple cameras, so we need to be more specific about which camera to use."),(0,o.kt)("p",null,"To address this, we'll change the following line in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"        with Camera() as camera:\n")),(0,o.kt)("p",null,"to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'        with Camera("left") as camera:\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The specific camera name will depend on your specific node. If you are having problems accessing a camera, please ",(0,o.kt)("a",{parentName:"em",href:"/docs/contact-us"},"contact us")," for more details.")),(0,o.kt)("p",null,"After rebuilding and running this again, the plugin should run and exit cleanly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Launched the plugin app-tutorial-1659971085 successfully \nINFO: 2022/08/08 15:04:45 run.go:63: Plugin is in "Pending" state. Waiting...\n# should exit cleanly with no output\n')),(0,o.kt)("p",null,"Now that we know this works, please commit and push the change to the repo from your machine."),(0,o.kt)("p",null,"Finally, if you are rebuilding and running code frequently, you can combine the build and run into a single step as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo pluginctl run --name app-tutorial $(sudo pluginctl build .)\n")),(0,o.kt)("h2",{id:"viewing-our-output"},"Viewing our output"),(0,o.kt)("p",null,"We'll close this part, by looking at the data we just published. To do this, we'll query the ",(0,o.kt)("a",{parentName:"p",href:"/docs/about/architecture#data-repository-dr"},"Beehive Data Repository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -s \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'\n{\n    "start": "-5m",\n    "filter": {\n        "task": "app-tutorial"\n    }\n}\'\n')),(0,o.kt)("p",null,"You should see some results like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.b","value":133.61671793619792,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}\n{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.g","value":136.46639404296874,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}\n{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.r","value":134.48696818033855,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}\n{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/Pluginctl/sage-app-tutorial-app-tutorial/000048b02d15bdc2/1659971088820981933-snapshot.jpg","meta":{"filename":"snapshot.jpg","host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}\n')),(0,o.kt)("p",null,"These are exactly the mean color values we computed and published!"),(0,o.kt)("p",null,"This is intended to be a quick preview of how to access data to help get you started. If you are interested, we cover this topic in much depth ",(0,o.kt)("a",{parentName:"p",href:"../accessing-data"},"here"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Now we've been able to build, run and even fix a bug in our code! In ",(0,o.kt)("a",{parentName:"p",href:"publishing-to-ecr"},"part 4"),", we'll see how to publish a first release of our code to the Edge Code Repository!"))}d.isMDXComponent=!0}}]);