(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{299:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(304)),a={id:"introspection-cache",title:"Introspection cache",sidebar_label:"Introspection cache"},c={unversionedId:"recipes/introspection-cache",id:"recipes/introspection-cache",isDocsHomePage:!1,title:"Introspection cache",description:"By default GraphQL Mesh fetches your remote data sources at runtime, during initialisation, to retrieve their raw schema and potentially translate it into GraphQL (when relevant).",source:"@site/docs/recipes/introspection-cache.md",slug:"/recipes/introspection-cache",permalink:"/docs/recipes/introspection-cache",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/introspection-cache.md",version:"current",sidebar_label:"Introspection cache",sidebar:"sidebar",previous:{title:"Apollo Federation",permalink:"/docs/recipes/federation"},next:{title:"Handle Webhooks with GraphQL Subscriptions",permalink:"/docs/recipes/subscriptions-webhooks"}},s=[{value:"Setting the Mesh Config file",id:"setting-the-mesh-config-file",children:[]},{value:"Setup the script to write the cache",id:"setup-the-script-to-write-the-cache",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default GraphQL Mesh fetches your remote data sources at runtime, during initialisation, to retrieve their raw schema and potentially translate it into GraphQL (when relevant).",Object(o.b)("br",{parentName:"p"}),"\n","However, to reduce dependencies at runtime, GraphQL Mesh allows you to cache the raw schema of your remote data sources so they are locally available at runtime.",Object(o.b)("br",{parentName:"p"}),"\n","This is important because if, for instance, one of the data sources you consume experiences downtime when your GraphQL Mesh server is starting, this would cause a failure and will ultimately force you to restart your server; effectively making this unavailable until you're able to start it successfully (in this case, only when all your data sources can provide their raw schemas).",Object(o.b)("br",{parentName:"p"}),"\n","By following the steps below, you can instead move this dependency from runtime to build-time, by invoking a command that downloads the remote schemas and save them into a local file to be used as cache during server initialisation. In this case if one of your remote resources is not available when you attempt to build this local cache, it would cause a build failure which will stop your deployment process; hence not affecting your service availability."),Object(o.b)("p",null,"To achieve this, you just need to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tell Mesh, through config file (",Object(o.b)("inlineCode",{parentName:"li"},".meshrc.yaml"),"), which file you want to use to cache remote sources raw schemas"),Object(o.b)("li",{parentName:"ul"},"Set a script, to be invoked at build-time, to fetch and cache your remote sources raw schemas (leveraging Mesh CLI)")),Object(o.b)("h2",{id:"setting-the-mesh-config-file"},"Setting the Mesh Config file"),Object(o.b)("p",null,"You just need to add the ",Object(o.b)("inlineCode",{parentName:"p"},"introspectionCache")," property to your ",Object(o.b)("inlineCode",{parentName:"p"},".meshrc.yaml")," file, like below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"introspectionCache: ./introspectionCache.json\nsources: [...]\ntransforms: [...]\n")),Object(o.b)("p",null,"When this property is set, Mesh will attempt to read from this file during initialisation, and will use the raw schemas available there; hence preventing network requests that would otherwise be required to retrieve the raw schemas from your remote data sources directly."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: make sure your designated file has a ",Object(o.b)("inlineCode",{parentName:"p"},"json")," extension.")),Object(o.b)("h2",{id:"setup-the-script-to-write-the-cache"},"Setup the script to write the cache"),Object(o.b)("p",null,"Mesh CLI provides you the ",Object(o.b)("inlineCode",{parentName:"p"},"write-introspection-cache"),"command which goes through all your remote data sources, retrieves their raw schemas, and eventually store these into your designated file. This command does not require any argument, since it is aware of your nominated ",Object(o.b)("inlineCode",{parentName:"p"},"introspectionCache")," file from the property set in your Mesh Config."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: Make sure you have installed the ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-mesh/cli")," package to run CLI commands.")),Object(o.b)("p",null,"Here is an example of how you might want to set up your build script in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "graphql-mesh-server",\n  ...\n  "main": "src/index.js",\n  "scripts": {\n    "write-introspection-cache": "graphql-mesh write-introspection-cache",\n    "build": "npm run write-introspection-cache && babel src -d dist",\n    ...\n  },\n  ...\n}\n')),Object(o.b)("p",null,"Alternatively, you might prefer to set up a step in your CI that invokes ",Object(o.b)("inlineCode",{parentName:"p"},"write-introspection-cache"),".",Object(o.b)("br",{parentName:"p"}),"\n","The key point is to make sure that this command is invoked before you attempt to start the server, so that when initialising Mesh will find the introspection cache file and read from it, as opposed to querying your remote sources."))}u.isMDXComponent=!0},304:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||h[b]||o;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);