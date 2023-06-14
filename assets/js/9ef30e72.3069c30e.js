"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=o,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8993:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:2},l="Part 2: Creating an edge app",i={unversionedId:"tutorials/edge-apps/creating-an-edge-app",id:"tutorials/edge-apps/creating-an-edge-app",title:"Part 2: Creating an edge app",description:"In part 1, we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we'll dive right in and start writing our very own edge app!",source:"@site/docs/tutorials/edge-apps/2-creating-an-edge-app.md",sourceDirName:"tutorials/edge-apps",slug:"/tutorials/edge-apps/creating-an-edge-app",permalink:"/docs/tutorials/edge-apps/creating-an-edge-app",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/tutorials/edge-apps/2-creating-an-edge-app.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Part 1: Intro to edge apps",permalink:"/docs/tutorials/edge-apps/intro-to-edge-apps"},next:{title:"Part 3: Testing an edge app",permalink:"/docs/tutorials/edge-apps/testing-an-edge-app"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development workflow",id:"development-workflow",level:2},{value:"A driving example",id:"a-driving-example",level:2},{value:"Bootstrapping our app from a template",id:"bootstrapping-our-app-from-a-template",level:2},{value:"Installing the dependencies",id:"installing-the-dependencies",level:3},{value:"Accessing a camera",id:"accessing-a-camera",level:3},{value:"Publishing results",id:"publishing-results",level:3},{value:"Viewing run logs",id:"viewing-run-logs",level:3},{value:"Uploading a snapshot",id:"uploading-a-snapshot",level:3},{value:"Tools for analyzing run logs (Optional)",id:"tools-for-analyzing-run-logs-optional",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"part-2-creating-an-edge-app"},"Part 2: Creating an edge app"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"intro-to-edge-apps"},"part 1"),", we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we'll dive right in and start writing our very own edge app!"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For this part of the tutorial, we'll assume you are developing directly on a laptop or machine with a camera or webcam available. You should have some basic development experience in ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org"},"Python")," and with ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com"},"git")," for version control."),(0,o.kt)("h2",{id:"development-workflow"},"Development workflow"),(0,o.kt)("p",null,"In the next few parts of this tutorial, we'll deep dive into the following app development workflow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App Workflow",src:a(2600).Z,width:"1740",height:"580"})),(0,o.kt)("p",null,"First, ",(0,o.kt)("strong",{parentName:"p"},"data and model selection")," is where you scope the problem and identify a new or existing model for your application. This typically happens ",(0,o.kt)("em",{parentName:"p"},"outside")," of our ecosystem."),(0,o.kt)("p",null,"Second, ",(0,o.kt)("strong",{parentName:"p"},"develop and test")," is where you begin to integrate your initial code with our ecosystem, test and finally build your application in ",(0,o.kt)("a",{parentName:"p",href:"/docs/about/architecture#edge-code-repository-ecr"},"ECR"),"."),(0,o.kt)("p",null,"Finally, ",(0,o.kt)("strong",{parentName:"p"},"deploy and iterate")," is where you schedule your application for deployment and look at the results."),(0,o.kt)("h2",{id:"a-driving-example"},"A driving example"),(0,o.kt)("p",null,"In order to illustrate progress through each of these stages, we'll start with a concrete code example and iterate on it over the next few sections."),(0,o.kt)("p",null,"In practice, ",(0,o.kt)("em",{parentName:"p"},"lots")," of work goes into the data and model selection step. For now, we'll assume that groundwork has already been done and we've settled on the following code snippit to start with."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport cv2\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    # read example image from file\n    image = cv2.imread("example.jpg")\n\n    # compute mean color\n    mean_color = compute_mean_color(image)\n\n    # print mean color\n    print(mean_color)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h2",{id:"bootstrapping-our-app-from-a-template"},"Bootstrapping our app from a template"),(0,o.kt)("p",null,"We'll start our by using a cookiecutter template to bootstrap our app."),(0,o.kt)("p",null,"First, ensure cookiecutter is installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install cookiecutter\n")),(0,o.kt)("p",null,"Now, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cookiecutter gh:waggle-sensor/cookiecutter-sage-app\n")),(0,o.kt)("p",null,"You should be prompted to fill in the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"name []: app-tutorial\ndescription [My really amazing app!]:\nauthor [My name]: Your name\nversion [0.1.0]:\nSelect template:\n1 - vision\n2 - usbserial_sensor\n3 - minimal\n4 - tutorial\nChoose from 1, 2, 3, 4 [1]: 4\n")),(0,o.kt)("p",null,"If this succeeds, a new ",(0,o.kt)("inlineCode",{parentName:"p"},"app-tutorial")," directory will be created with the following files:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"main.py"),(0,o.kt)("td",{parentName:"tr",align:null},"Main code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requirements.txt"),(0,o.kt)("td",{parentName:"tr",align:null},"Code dependencies")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dockerfile"),(0,o.kt)("td",{parentName:"tr",align:null},"App build instructions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sage.yaml"),(0,o.kt)("td",{parentName:"tr",align:null},"App metadata")))),(0,o.kt)("h3",{id:"installing-the-dependencies"},"Installing the dependencies"),(0,o.kt)("p",null,"The first step in preparing our example for the edge is to install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle")," in our local development environment."),(0,o.kt)("p",null,"pywaggle is our Python SDK which provides edge apps access to devices (ex. cameras and microphones) and messaging within a node."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Accessing Devices",src:a(9494).Z,width:"1280",height:"509"})),(0,o.kt)("p",null,"For this tutorial, we'll install the latest version of the requirements included in the template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install --upgrade --requirement requirements.txt\n")),(0,o.kt)("h3",{id:"accessing-a-camera"},"Accessing a camera"),(0,o.kt)("p",null,"Now that we have pywaggle, the first change we'll make is to use a camera as input rather than a static image file. We'll use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"shapshot()")," function to take an RGB snapshot from the camera."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    # open camera and take snapshot\n    with Camera() as camera:\n        snapshot = camera.snapshot()\n\n    # compute mean color\n    mean_color = compute_mean_color(snapshot.data)\n\n    # print mean color\n    print(mean_color)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("p",null,"Now, we can try this out by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,o.kt)("p",null,"You should see output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"[51.43575738 51.83611871 54.64226671]\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You're exact numbers may differ as this is computed using your default camera.")),(0,o.kt)("h3",{id:"publishing-results"},"Publishing results"),(0,o.kt)("p",null,"The next change we'll make is to publish our data to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/about/architecture#data-repository-dr"},"Beehive Data Repository")," instead of just print it. This will allow it to be sent to a Beehive once it's scheduled on a node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.plugin import Plugin\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    with Plugin() as plugin:\n        # open camera and take snapshot\n        with Camera() as camera:\n            snapshot = camera.snapshot()\n\n        # compute mean color\n        mean_color = compute_mean_color(snapshot.data)\n\n        # publish mean color\n        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("p",null,"Now, we'll run this using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,o.kt)("p",null,"You may notice something... there's no output! Usually, published data is sent to a beehive where it can be viewed later. However, because we're developing locally and have not configured a beehive, the data isn't going anywhere. In the next section, we'll see how we can tap into our published data."),(0,o.kt)("h3",{id:"viewing-run-logs"},"Viewing run logs"),(0,o.kt)("p",null,"In order to make developing and debugging apps easier, pywaggle can write out a log directory as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export PYWAGGLE_LOG_DIR=test-run\npython3 main.py\n")),(0,o.kt)("p",null,"This will create a new directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"test-run")," and will contain a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"data.ndjson")," which contains something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:04.619466000","value":32.67932074652778}\n{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:04.619466000","value":19.087491319444446}\n{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:04.619466000","value":10.337491319444444}\n')),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 main.py")," again, then we'll see new data appended to that file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:04.619466000","value":32.67932074652778}\n{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:04.619466000","value":19.087491319444446}\n{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:04.619466000","value":10.337491319444444}\n{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:19.719910000","value":30.90709743923611}\n{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:19.719910000","value":16.61302517361111}\n{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:19.719910000","value":8.565154079861111}\n')),(0,o.kt)("p",null,"This provides a convenient way to understand the behavior of an app, particularly one with a more complicated flow."),(0,o.kt)("h3",{id:"uploading-a-snapshot"},"Uploading a snapshot"),(0,o.kt)("p",null,"Finally, the last change we'll make is to upload our snapshots after publishing the mean color."),(0,o.kt)("p",null,"We'll upload every snapshot for demonstration purposes, but you wouldn't want to do this in a real app. Instead, you'd typically upload in response to detecting an event such as an anomalous object or loud noise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\n\nfrom waggle.plugin import Plugin\nfrom waggle.data.vision import Camera\n\n\ndef compute_mean_color(image):\n    return np.mean(image, (0, 1)).astype(float)\n\n\ndef main():\n    with Plugin() as plugin:\n        # open camera and take snapshot\n        with Camera() as camera:\n            snapshot = camera.snapshot()\n\n        # compute mean color\n        mean_color = compute_mean_color(snapshot.data)\n\n        # publish mean color\n        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)\n        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)\n\n        # save and upload image\n        snapshot.save("snapshot.jpg")\n        plugin.upload_file("snapshot.jpg", timestamp=snapshot.timestamp)\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("p",null,"Let's run our app again using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export PYWAGGLE_LOG_DIR=test-run\npython3 main.py\n")),(0,o.kt)("p",null,"If you take a look in the ",(0,o.kt)("inlineCode",{parentName:"p"},"test-run/uploads")," directory, you should now see an image."),(0,o.kt)("p",null,"Uploads are added to the run log directory using the format ",(0,o.kt)("inlineCode",{parentName:"p"},"nstimestamp-filename"),"."),(0,o.kt)("p",null,"You should also see a corresponding item in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data.ndjson")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:39:34.985679000","value":29.601871744791666}\n{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:39:34.985679000","value":16.004838324652777}\n{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:39:34.985679000","value":8.217218967013888}\n{"meta":{"filename":"snapshot.jpg"},"name":"upload","timestamp":"2022-08-23T13:39:34.985679000","value":"/Users/sean/dev/pw-example/test-run/uploads/1661279974985679000-snapshot.jpg"}\n')),(0,o.kt)("h3",{id:"tools-for-analyzing-run-logs-optional"},"Tools for analyzing run logs (Optional)"),(0,o.kt)("p",null,"If you find yourself working with run logs frequently, we recommend the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/sage-data-client/"},"Sage data client")," which provides convenient functionality for loading and doing analysis on the ",(0,o.kt)("inlineCode",{parentName:"p"},"data.ndjson")," file. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sagecontinuum/sage-data-client#load-results-from-file"},'"Load results from file" example')," for more info."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Congratulations! You've finished preparing our example code for the edge!"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"testing-an-edge-app"},"part 3"),", we'll look at how we can build and test our app on a real node!"))}d.isMDXComponent=!0},2600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plugin-workflow-9b43ba26e58ea48e2d15dff3b447b842.svg"},9494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/access_to_sensors-862c26d27348053c048f1fdf6babeb77.svg"}}]);