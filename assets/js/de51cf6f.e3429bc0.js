"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[2828],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},61363:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(25773),a=r(30808),i=(r(27378),r(35318)),o=["components"],l={id:"thrift",title:"Apache Thrift",sidebar_label:"Apache Thrift"},p={unversionedId:"handlers/thrift",id:"handlers/thrift",isDocsHomePage:!1,title:"Apache Thrift",description:"image",source:"@site/docs/handlers/thrift.md",sourceDirName:"handlers",slug:"/handlers/thrift",permalink:"/docs/handlers/thrift",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/thrift.md",version:"current",sidebar_label:"Apache Thrift",frontMatter:{id:"thrift",title:"Apache Thrift",sidebar_label:"Apache Thrift"},sidebar:"sidebar",previous:{title:"OData / Microsoft Graph",permalink:"/docs/handlers/odata"},next:{title:"SQLite / Tuql",permalink:"/docs/handlers/tuql"}},c=[{value:"Config API Reference",id:"config-api-reference",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79219986-e4903080-7e5b-11ea-8220-e69ae73e7966.png",alt:"image"})),(0,i.kt)("p",null,"This handler allows you to consume ",(0,i.kt)("a",{parentName:"p",href:"https://thrift.apache.org/"},"Apache Thrift")," ",(0,i.kt)("inlineCode",{parentName:"p"},".thrift")," files and generate a remote executable schema for those services."),(0,i.kt)("p",null,"To get started, install the handler library from NPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/thrift\n")),(0,i.kt)("p",null,"Now, you can use it directly in your Mesh config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n    - name: Calculator\n      handler:\n        thrift:\n          idl: ./src/thrift/calculator.thrift\n          hostName: localhost\n          port: 8080\n          path: /thrift\n          serviceName: calculator-service\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can check out our example that uses Thrift Handler.")),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/thrift-example?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"thrift-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,i.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.kt)("p",null,(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hostName")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required) - The name of the host to connect to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Int"),", required) - The port number to attach to on the host."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),") - The path on which the Thrift service is listening. Defaults to '/thrift'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Boolean value indicating whether to use https. Defaults to false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protocol")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String (binary | compact | json)"),") - Name of the Thrift protocol type to use. Defaults to 'binary'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serviceName")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required) - The name of your service. Used for logging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON"),") - If you are using a remote URL endpoint to fetch your schema, you can set headers for the HTTP request to fetch your schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idl")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required) - Path to IDL file"))))}u.isMDXComponent=!0}}]);