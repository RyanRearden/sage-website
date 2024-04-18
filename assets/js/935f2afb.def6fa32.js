"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8581],{35610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"About","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/docs/about/overview","docId":"about/overview","unlisted":false},{"type":"link","label":"Architecture","href":"/docs/about/architecture","docId":"about/architecture","unlisted":false}],"href":"/docs/category/about"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Edge apps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Part 1: Intro to edge apps","href":"/docs/tutorials/edge-apps/intro-to-edge-apps","docId":"tutorials/edge-apps/intro-to-edge-apps","unlisted":false},{"type":"link","label":"Part 2: Creating an edge app","href":"/docs/tutorials/edge-apps/creating-an-edge-app","docId":"tutorials/edge-apps/creating-an-edge-app","unlisted":false},{"type":"link","label":"Part 3: Testing an edge app","href":"/docs/tutorials/edge-apps/testing-an-edge-app","docId":"tutorials/edge-apps/testing-an-edge-app","unlisted":false},{"type":"link","label":"Part 4: Publishing to ECR","href":"/docs/tutorials/edge-apps/publishing-to-ecr","docId":"tutorials/edge-apps/publishing-to-ecr","unlisted":false}],"href":"/docs/category/edge-apps"},{"type":"link","label":"Submit your job","href":"/docs/tutorials/schedule-jobs","docId":"tutorials/schedule-jobs","unlisted":false},{"type":"link","label":"Access and use data","href":"/docs/tutorials/accessing-data","docId":"tutorials/accessing-data","unlisted":false},{"type":"link","label":"Access Waggle sensors","href":"/docs/tutorials/access-waggle-sensors","docId":"tutorials/access-waggle-sensors","unlisted":false},{"type":"link","label":"Cloud compute & HPC on edge data","href":"/docs/tutorials/cloud-compute","docId":"tutorials/cloud-compute","unlisted":false},{"type":"link","label":"Building your own Waggle device","href":"/docs/tutorials/create-waggle","docId":"tutorials/create-waggle","unlisted":false}],"href":"/docs/category/tutorials"},{"type":"category","label":"Reference guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"pluginctl","href":"/docs/reference-guides/pluginctl","docId":"reference-guides/pluginctl","unlisted":false},{"type":"link","label":"sesctl","href":"/docs/reference-guides/sesctl","docId":"reference-guides/sesctl","unlisted":false},{"type":"link","label":"Trigger examples","href":"/docs/reference-guides/triggers","docId":"reference-guides/triggers","unlisted":false},{"type":"link","label":"Developer quick reference","href":"/docs/reference-guides/dev-quick-reference","docId":"reference-guides/dev-quick-reference","unlisted":false}],"href":"/docs/category/reference-guides"},{"type":"category","label":"Events","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Past events","collapsible":true,"collapsed":false,"items":[{"type":"link","label":"August 2023 Hackathon","href":"/docs/events/past/hackathon-2023","docId":"events/past/hackathon-2023","unlisted":false}]}]},{"type":"category","label":"Installation manuals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Wild Sage Node manual","href":"/docs/installation-manuals/wsn-manual","docId":"installation-manuals/wsn-manual","unlisted":false}],"href":"/docs/category/installation-manuals"},{"type":"link","label":"Contact us","href":"/docs/contact-us","docId":"contact-us","unlisted":false}]},"docs":{"about/architecture":{"id":"about/architecture","title":"Architecture","description":"The cyberinfrastructure consists of coordinating hardware and software services enabling AI at the edge. Below is a quick summary of the different infrastructure pieces, starting at the highest-level and zooming into each component to understand the relationships and role each plays.","sidebar":"tutorialSidebar"},"about/overview":{"id":"about/overview","title":"Sage: A distributed software-defined sensor network.","description":"What is Sage?","sidebar":"tutorialSidebar"},"contact-us":{"id":"contact-us","title":"Contact us","description":"Email","sidebar":"tutorialSidebar"},"events/past/hackathon-2023":{"id":"events/past/hackathon-2023","title":"August 2023 Sage Hackathon","description":"We are hosting a Hackathon for Sage in late August with preliminary dates August 30-31!","sidebar":"tutorialSidebar"},"installation-manuals/wsn-manual":{"id":"installation-manuals/wsn-manual","title":"Wild Sage Node manual","description":"The Wild Sage Node \\"Getting Started\\" manual is a complete overview of getting started with your new WSN.","sidebar":"tutorialSidebar"},"reference-guides/dev-quick-reference":{"id":"reference-guides/dev-quick-reference","title":"Developer quick reference","description":"Disclaimer","sidebar":"tutorialSidebar"},"reference-guides/pluginctl":{"id":"reference-guides/pluginctl","title":"pluginctl: a tool to develop and test plugins on a node","description":"We developed the tool pluginctl to help end users develop and test their edge application (i.e., plugin) on a node before registering the plugin in Edge code repository. The tool helps on simplifying the process of testing the edge code and making changes as needed for development, by buildig the code into a container, running the container inside the node, and checking the result from the container.","sidebar":"tutorialSidebar"},"reference-guides/sesctl":{"id":"reference-guides/sesctl","title":"sesctl: a tool to schedule jobs in Waggle edge computing","description":"The tool sesctl is a command-line tool that communicates with an Edge scheduler in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool.","sidebar":"tutorialSidebar"},"reference-guides/triggers":{"id":"reference-guides/triggers","title":"Trigger Examples","description":"This page provides a few examples of triggers within Sage. Triggers are programs which generally use data and events from the edge or cloud to automatically drive or notify other behavior in the system.","sidebar":"tutorialSidebar"},"tutorials/access-waggle-sensors":{"id":"tutorials/access-waggle-sensors","title":"Access Waggle sensors","description":"A Waggle sensor is an entity that produces measurements of a phenomenon and that helps users analyze what is happening in the environment. There are sensors already hosted by Waggle and also sensors that are being integrated into Waggle as a user-hosted sensor. A sensor does not necessarily mean a physical device, but can be a program producing measurements from data -- we call it software-defined sensor. Once those sensors become available in Waggle nodes edge applications running inside the nodes can pull measurements from the sensors to process them.","sidebar":"tutorialSidebar"},"tutorials/accessing-data":{"id":"tutorials/accessing-data","title":"Access and use data","description":"Data Movement","sidebar":"tutorialSidebar"},"tutorials/cloud-compute":{"id":"tutorials/cloud-compute","title":"Cloud compute & HPC on edge data","description":"Waggle provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Waggle.","sidebar":"tutorialSidebar"},"tutorials/create-waggle":{"id":"tutorials/create-waggle","title":"Building your own Waggle device","description":"Are you a professor that wants to use affordable Waggle devices to teach students interested in AI? Are you someone interested in developing a new edge app using a local development platform? Are you a Waggle user interested in using a new sensor (i.e. a new camera, a bat signal detector, a custom sensor they built)? If you would like to build, design and deploy software that could answer your questions above, then Waggle is the right choice for you.","sidebar":"tutorialSidebar"},"tutorials/edge-apps/creating-an-edge-app":{"id":"tutorials/edge-apps/creating-an-edge-app","title":"Part 2: Creating an edge app","description":"In part 1, we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we\'ll dive right in and start writing our very own edge app!","sidebar":"tutorialSidebar"},"tutorials/edge-apps/intro-to-edge-apps":{"id":"tutorials/edge-apps/intro-to-edge-apps","title":"Part 1: Intro to edge apps","description":"What are edge apps?","sidebar":"tutorialSidebar"},"tutorials/edge-apps/publishing-to-ecr":{"id":"tutorials/edge-apps/publishing-to-ecr","title":"Part 4: Publishing to ECR","description":"Now that we\'ve finished preparing our code and testing it, we\'re almost ready to publish it to the Edge Code Repository!","sidebar":"tutorialSidebar"},"tutorials/edge-apps/testing-an-edge-app":{"id":"tutorials/edge-apps/testing-an-edge-app","title":"Part 3: Testing an edge app","description":"In the previous part, we took a code snippit and iterated on it until it was ready for the edge. By the end, we had basic camera access and publishing working!","sidebar":"tutorialSidebar"},"tutorials/schedule-jobs":{"id":"tutorials/schedule-jobs","title":"Submit your job","description":"Are you ready to deploy your plugins to measure the world? We will use edge scheduler to submit a job and demonstrate how you can deploy plugins to field-deployed Waggle nodes.","sidebar":"tutorialSidebar"}}}')}}]);