"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[9557],{35318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(t),h=o,b=c["".concat(d,".").concat(h)]||c[h]||u[h]||i;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=c;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},52379:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=t(25773),o=t(30808),i=(t(27378),t(35318)),s=["components"],a={id:"subscriptions-webhooks",title:"Handle Webhooks with GraphQL Subscriptions",sidebar_label:"Subscriptions & Webhooks"},d={unversionedId:"recipes/subscriptions-webhooks",id:"recipes/subscriptions-webhooks",isDocsHomePage:!1,title:"Handle Webhooks with GraphQL Subscriptions",description:"GraphQL Mesh can consume Webhooks as GraphQL Subscriptions in the unified schema by using built-in PubSub implementation",source:"@site/docs/recipes/subscriptions-webhooks.md",sourceDirName:"recipes",slug:"/recipes/subscriptions-webhooks",permalink:"/docs/recipes/subscriptions-webhooks",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/subscriptions-webhooks.md",version:"current",sidebar_label:"Subscriptions & Webhooks",frontMatter:{id:"subscriptions-webhooks",title:"Handle Webhooks with GraphQL Subscriptions",sidebar_label:"Subscriptions & Webhooks"},sidebar:"sidebar",previous:{title:"Custom Server",permalink:"/docs/recipes/custom-server"},next:{title:"Live Queries",permalink:"/docs/recipes/live-queries"}},l=[{value:"Add new Subscription field",id:"add-new-subscription-field",children:[{value:"Use JSON Schema Handler instead",id:"use-json-schema-handler-instead",children:[]}]},{value:"Handle Webhook HTTP Requests",id:"handle-webhook-http-requests",children:[{value:"Using Declarative API",id:"using-declarative-api",children:[]},{value:"Custom Handler in Code",id:"custom-handler-in-code",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://the-guild.dev/blog-assets/graphql-mesh-subscriptions/cover.png",width:"300"}),(0,i.kt)("br",null)),(0,i.kt)("p",null,"GraphQL Mesh can consume Webhooks as GraphQL Subscriptions in the unified schema by using built-in PubSub implementation"),(0,i.kt)("h2",{id:"add-new-subscription-field"},"Add new Subscription field"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalTypeDefs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalResolvers")," to add subscription root fields to your unified schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"additionalTypeDefs: |\n  # If you don't have Subscription type defined anywhere\n  # You have to extend subscription definition\n  extend schema {\n    subscription: Subscription\n  }\n  type Subscription {\n    todoAdded: Todo\n  }\nadditionalResolvers:\n  - targetTypeName: Subscription\n    targetFieldName: todoAdded\n    pubsubTopic: todoAdded\n    # result: data.someProp.someOtherProp # You can get nested fields\n    # filterBy: root.userId === args.userId # You can filter the payload by `userId` for example\n")),(0,i.kt)("p",null,"We're able to use existing types from our unified schema, and this root field is subscribed to our specific ",(0,i.kt)("inlineCode",{parentName:"p"},"topic")," in our PubSub service."),(0,i.kt)("h3",{id:"use-json-schema-handler-instead"},"Use JSON Schema Handler instead"),(0,i.kt)("p",null,"You can also use JSON Schema handler if you don't want to write an extra GraphQL type definitions. You can generate GraphQL type definitions from sample JSON response;"),(0,i.kt)("p",null,"Just add the following to your existing JSON schema handler configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},".meshrc.yml")," file;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"          - type: Subscription\n            field: todoAdded\n            pubsubTopic: todoAdded\n            responseSample: ./todo.json\n")),(0,i.kt)("h2",{id:"handle-webhook-http-requests"},"Handle Webhook HTTP Requests"),(0,i.kt)("p",null,"Add custom express handler to listen specific path for your HTTP Webhook on Mesh CLI Server. You can do it either in a programmatic or declarative way."),(0,i.kt)("h3",{id:"using-declarative-api"},"Using Declarative API"),(0,i.kt)("p",null,"Let's say you have running GraphQL Mesh server listening ",(0,i.kt)("inlineCode",{parentName:"p"},"4000")," port, and you need to listen a specific route for upcoming HTTP requests as HTTP Webhook."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"serve:\n  port: 4000\n  handlers:\n    - path: /webhooks/todo_added\n      pubsubTopic: todoAdded\n      # payload: data # you can get `data` prop of the received data\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"path"),' defines the path in our server that will receive HTTP requests as "Webhook" from our API then send it to ',(0,i.kt)("inlineCode",{parentName:"p"},"pubsubTopic"),"."),(0,i.kt)("h3",{id:"custom-handler-in-code"},"Custom Handler in Code"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"handler")," can get any kind of Express request handler. So you can extend Mesh Server however you want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"serve:\n  port: 4000\n  handlers:\n    - path: /webhooks/todo_added\n      handler: ./todo_added.handler.js\n")),(0,i.kt)("p",null,"and in ",(0,i.kt)("inlineCode",{parentName:"p"},"todo_added_handler.js")," we have something like following;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (req, res) => {\n    // Mesh PubSub instance is available under `req`\n    req.pubsub.publish('todoAdded', req.body);\n    res.end(); // Don't forget to finish the HTTP connection\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can check out our example")),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/json-schema-subscriptions?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"json-schema-subscriptions",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}u.isMDXComponent=!0}}]);