"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1576],{12462:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(6446),s=a(36624);function i(e){const{sidebar:t,toc:a,children:i,...o}=e,m=t&&t.items.length>0;return l.createElement(r.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(s.Z,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},15289:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(44996),r=a(9460);function s(e){let{children:t,className:a}=e;const{frontMatter:s,assets:i}=(0,r.C)(),{withBaseUrl:o}=(0,n.C)(),m=i.image??s.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&l.createElement("meta",{itemProp:"image",content:o(m,{absolute:!0})}),t)}},99714:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(18780),s=a(9460),i=a(5868);function o(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,s.C)();return l.createElement("div",{id:o?r.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(i.Z,null,t))}},12046:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),n=a(86010),r=a(9460),s=a(84881),i=a(71526),o=a(87462),m=a(95999),c=a(39960);function u(){return l.createElement("b",null,l.createElement(m.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return l.createElement(c.Z,(0,o.Z)({"aria-label":(0,m.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(u,null))}const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function h(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:o,editUrl:m,hasTruncateMarker:c}=e,u=!t&&c,h=a.length>0;return h||u||m?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull)},h&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":u})},l.createElement(i.Z,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(s.Z,{editUrl:m})),u&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":h})},l.createElement(d,{blogPostTitle:o,to:e.permalink}))):null}},1916:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(86010),r=a(9460),s=a(39960);function i(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function o(e){let{author:t,className:a}=e;const{name:r,title:s,url:o,imageURL:m,email:c}=t,u=o||c&&`mailto:${c}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},m&&l.createElement(i,{href:u,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:m,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i,{href:u,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),s&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const m={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function c(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?m.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!i&&"col col--6",i?m.imageOnlyAuthorCol:m.authorCol),key:t},l.createElement(o,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}},7743:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(67294),n=a(86010),r=a(9460),s=a(15289),i=a(39960);const o={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:m,title:c}=a,u=s?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(o.title,t),itemProp:"headline"},s?c:l.createElement(i.Z,{itemProp:"url",to:m},c))}var c=a(95999),u=a(88824);const d={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.c)();return t=>{const a=Math.ceil(t);return e(a,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return l.createElement(l.Fragment,null," \xb7 ")}function E(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:i,readingTime:o}=a;return l.createElement("div",{className:(0,n.Z)(d.container,"margin-vert--md",t)},l.createElement(h,{date:s,formattedDate:i}),void 0!==o&&l.createElement(l.Fragment,null,l.createElement(p,null),l.createElement(g,{readingTime:o})))}var b=a(1916);function f(){return l.createElement("header",null,l.createElement(m,null),l.createElement(E,null),l.createElement(b.Z,null))}var v=a(99714),Z=a(12046);function _(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(s.Z,{className:(0,n.Z)(i,a)},l.createElement(f,null),l.createElement(v.Z,null,t),l.createElement(Z.Z,null))}},36624:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(67294),n=a(87524),r=a(86010),s=a(39960),i=a(95999);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(o.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var c=a(13102);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return l.createElement(c.Zo,{component:u,props:e})}function g(e){let{sidebar:t}=e;const a=(0,n.i)();return t?.items.length?"mobile"===a?l.createElement(d,{sidebar:t}):l.createElement(m,{sidebar:t}):null}},84881:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(95999),r=a(35281),s=a(87462),i=a(86010);const o={iconEdit:"iconEdit_Z9Sw"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),n=a(86010),r=a(39960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return l.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(86010),r=a(39960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},71526:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(95999),s=a(13008);const i={tags:"tags_jXut",tag:"tag_QGVx"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>s});var l=a(67294),n=a(902);const r=l.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:s},t)}function i(){const e=(0,l.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},88824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(67294),n=a(52263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);