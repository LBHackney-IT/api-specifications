(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(94)),o=["components"],s={id:"patches-api",title:"Patches API"},c={unversionedId:"patches-api",id:"patches-api",isDocsHomePage:!1,title:"Patches API",description:"Context",source:"@site/docs/patches-api.md",slug:"/patches-api",permalink:"/api-specifications/patches-api",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/patches-api.md",version:"current",sidebar:"docs",previous:{title:"Accounts API",permalink:"/api-specifications/accounts-api"},next:{title:"Equality Information API",permalink:"/api-specifications/equality-information-api"}},l=[{value:"Context",id:"context",children:[]},{value:"Vision",id:"vision",children:[]},{value:"User needs",id:"user-needs",children:[]},{value:"Workshop outcome",id:"workshop-outcome",children:[]},{value:"API Endpoints:",id:"api-endpoints",children:[]}],p={toc:l};function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"context"},"Context"),Object(i.b)("p",null,"As part of Manage my Home and Manage areas projects, we looked at how patches and areas are managed and what data we store related to those. There has been a need identified to create a new data entity and microservice to store and manage this data as it previously lived in UH and Dynamics CRM 365. Patches data is important as it is used for determining the responsible entity for a patch/area - whether that\u2019s an individual or a group. The person/group responsible for a patch is usually responsible for dealing with processes/actions related to tenures on properties that fall within the given patch."),Object(i.b)("h2",{id:"vision"},"Vision"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single, centralized data store for our list of patches and areas,   regardless of which domain they apply to."),Object(i.b)("li",{parentName:"ul"},"Single, reusable microservice that manages our areas and patches data, including reassignment. "),Object(i.b)("li",{parentName:"ul"},"Microservice and data domain designed with extensibility in mind, so future service areas could potentially re-use it and extend it if / when future user needs are identified")),Object(i.b)("h2",{id:"user-needs"},"User needs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"As a MMH user, I want to be able to see which patch is responsible for a property."),Object(i.b)("li",{parentName:"ul"},"As a MMH user (manager), I want to be able to re-assign the responsible officer/s for a given patch."),Object(i.b)("li",{parentName:"ul"},"As a MMH user, I want to know which officer/s is/are responsible for a patch or area."),Object(i.b)("li",{parentName:"ul"},"As a MA user, I want to know which cases are allocated to the patch I am assigned to so that I can focus only on the cases that are relevant to me."),Object(i.b)("li",{parentName:"ul"},"As a MA manager I want to be able to easily assign arrears cases to a group of workers so I can manage casework effectively.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a consumer of this API I would like to see: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The name of the patch so that this data is available for any housing service (at present) that requires it."),Object(i.b)("li",{parentName:"ul"},"The type of patch so that this data is available to any service that requires it."),Object(i.b)("li",{parentName:"ul"},"The domain of the patch so that this data is available for any service that requires it."),Object(i.b)("li",{parentName:"ul"},"The responsibile Entity, so that I have this data available for any service that requires it.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a developer, I want to: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"built and reuse a single Patches and Area API microservice so that development efforts can be focused on other requirements"),Object(i.b)("li",{parentName:"ul"},"Ensure data updated, retrieved and inserted is consistent across services and reliable"),Object(i.b)("li",{parentName:"ul"},"Have an easy way to retrieve any data related to a patch/area so that I don\u2019t need to make additional calls to find references for related systems")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As an application  support analyst ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data,")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a data analyst")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I need to connect to the API via Qlik so that data is easy to interpret and available for further reporting purpose.and analysis.")),Object(i.b)("h2",{id:"workshop-outcome"},"Workshop outcome"),Object(i.b)("p",null,"We looked at two services - Manage a Tenancy (MaT) and Manage Areas(MA) and concluded that patches and areas are different in the context of the two services. Although they do refer to geographical areas, those areas are different based on the service. Further to this, in the context of MA, patches for leaseholders are different - not based only on a geographical area. Reassignment is also different between the two applications. "),Object(i.b)("p",null,"With MaT, reassignment of the responsible officer/s for a patch happens when someone is off sick, on maternity leave, etc. Once a patch is reassigned, the responsible officer would see all processes/action items that are related to their patch in their work tray. With MA, everyone can see all items in their work tray, which leads towards the concept of a \u201cgroup\u201d responsible for a patch, rather than individuals. "),Object(i.b)("p",null,"However, despite the different business processes of dealing with a patch, the data we store for a patch area at its core is the same.\nPatch/area code/name\nResponsible entity (whether that\u2019s an individual or a group)"),Object(i.b)("p",null,"Due to above reasons we propose a single, simple data entity to be created to contain a list of all patches and areas we have in the various services, as well as a reference to the responsible entity."),Object(i.b)("p",null,"Following that, each individual service can use this data to develop their custom business logic. "),Object(i.b)("h2",{id:"api-endpoints"},"API Endpoints:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GET /patch/{id}\nGET /patch?parentId={parentId}\nDELETE /patch/{id}/responsible-entity/{responsible-entity-id}\nPOST /PATCH\nPATCH /patch/{id}/responsible-entity/{responsible-entity-id}\n")),Object(i.b)("h4",{id:"update-responseobject"},"Update ResponseObject:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "",\n  "name": "",\n  "type": "Housing officer/group/etc"\n}\n')),Object(i.b)("h4",{id:"payload"},"Payload:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n   "Id":"guid",\n   "parentId": "guid",\n   "name":"CP7",\n   "type":"Patch / area",\n   "domain":"MMH",\n   "responsibleEntities":[\n      {\n         "id":"",\n         "name":"",\n         "type":"Housing officer/group/etc"\n      },\n      {\n         "id":"",\n         "name":"",\n         "type":"Housing area manager"\n      }\n\n   ]\n}\n')),Object(i.b)("p",null,"The above data will then be saved against each asset record and the consuming service can decide which patch data to display by using the domain data associated. "))}d.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,b=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);