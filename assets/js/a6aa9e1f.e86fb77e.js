"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{61728:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215),r=n(88060),i=n(18256),s=n(74848);function l(e){const{sidebar:t,toc:n,children:l,...o}=e,c=t&&t.items.length>0;return(0,s.jsx)(r.A,{...o,children:(0,s.jsx)("div",{className:"container margin-vert--lg",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)(i.A,{sidebar:t}),(0,s.jsx)("main",{className:(0,a.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:l}),n&&(0,s.jsx)("div",{className:"col col--2",children:n})]})})})}},35124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(96540);var a=n(18215),r=n(44586),i=n(45500),s=n(17559),l=n(61728),o=n(47713),c=n(41463),d=n(33892),u=n(5260),m=n(6676),g=n(74848);function h(e){const t=(0,m.k)(e);return(0,g.jsx)(u.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,r.A)(),{blogDescription:a,blogTitle:s,permalink:l}=t,o="/"===l?n:s;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.be,{title:o,description:a}),(0,g.jsx)(c.A,{tag:"blog_posts_list"})]})}function f(e){const{metadata:t,items:n,sidebar:a}=e;return(0,g.jsxs)(l.A,{sidebar:a,children:[(0,g.jsx)(d.A,{items:n}),(0,g.jsx)(o.A,{metadata:t})]})}function x(e){return(0,g.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(f,{...e})]})}},47713:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(21312),r=n(39022),i=n(74848);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(r.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,i.jsx)(r.A,{permalink:s,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},11160:(e,t,n)=>{n.d(t,{A:()=>w});n(96540);var a=n(18215),r=n(7131),i=n(32819),s=n(28774);const l={title:"title_f1Hy"};var o=n(74848);function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,r.e)(),{permalink:c,title:d}=n,u=i?"h1":"h2";return(0,o.jsx)(u,{className:(0,a.A)(l.title,t),children:i?d:(0,o.jsx)(s.A,{to:c,children:d})})}var d=n(21312),u=n(53465),m=n(36266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,children:n})}function f(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:n}=(0,r.e)(),{date:i,readingTime:s}=n,l=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,o.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:i,formattedDate:(c=i,l.format(new Date(c)))}),void 0!==s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(h,{readingTime:s})]})]});var c}var j=n(6853);function b(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(c,{}),(0,o.jsx)(x,{}),(0,o.jsx)(j.A,{})]})}var A=n(23125),v=n(78746);function w(e){let{children:t,className:n}=e;const s=function(){const{isBlogPostPage:e}=(0,r.e)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(i.A,{className:(0,a.A)(s,n),children:[(0,o.jsx)(b,{}),(0,o.jsx)(A.A,{children:t}),(0,o.jsx)(v.A,{})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(7131),r=n(11160),i=n(74848);function s(e){let{items:t,component:n=r.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var a=n(86025),r=n(44586),i=n(36803);var s=n(7131);const l=e=>new Date(e).toISOString();function o(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,r.A)(),{withBaseUrl:n}=(0,a.h)(),{metadata:{blogDescription:i,blogTitle:s,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:s,description:i,blogPost:e.items.map((e=>function(e,t,n){const{assets:a,frontMatter:r,metadata:i}=e,{date:s,title:d,description:u,lastUpdatedAt:m}=i,g=a.image??r.image,h=r.keywords??[],p=`${t.url}${i.permalink}`,f=m?l(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:u,datePublished:s,...f?{dateModified:f}:{},...o(i.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,s.e)(),{siteConfig:d}=(0,r.A)(),{withBaseUrl:u}=(0,a.h)(),{date:m,title:g,description:h,frontMatter:p,lastUpdatedAt:f}=n,x=t.image??p.image,j=p.keywords??[],b=f?l(f):void 0,A=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":A,mainEntityOfPage:A,url:A,headline:g,name:g,description:h,datePublished:m,...b?{dateModified:b}:{},...o(n.authors),...c(x,u,g),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(96540),r=n(44586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return a[Math.min(i,a.length-1)]}(n,t,e)}}}}]);