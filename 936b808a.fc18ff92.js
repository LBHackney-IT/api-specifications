(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(89)),c=["components"],l={id:"housing_search",title:"Housing Search API"},o={unversionedId:"housing_search",id:"housing_search",isDocsHomePage:!1,title:"Housing Search API",description:"Purpose",source:"@site/docs/housing_search.md",slug:"/housing_search",permalink:"/api-specifications/housing_search",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/housing_search.md",version:"current",sidebar:"docs",previous:{title:"Contact Details API",permalink:"/api-specifications/contact_details"},next:{title:"Notes API",permalink:"/api-specifications/notes"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"User Needs",id:"user-needs",children:[]},{value:"API Specification",id:"api-specification",children:[]},{value:"Architecture diagram",id:"architecture-diagram",children:[]},{value:"Benefits of using ElasticSearch and indexes",id:"benefits-of-using-elasticsearch-and-indexes",children:[]}],p={toc:s};function b(e){var t=e.components,r=Object(n.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"To define how a new proposed search service will work. The microservice will be reusable across different housing services and will provide searching functionality for both people and properties. The service will make use of ElasticSearch as a search engine (for performance benefits and to support free-text and fuzzy search) and will aggregate assets and people data for ease of search purposes."),Object(i.b)("p",null,"ElasticSearch\u2019s data store will be updated at real time - this will be implemented using event driven architecture, where each microservice serving a specific data domain will create an event each time new data is added or updated."),Object(i.b)("p",null,"ElasticSearch will be updated by a Lambda function, holding business logic, that has subscribed to events and thus will have data kept up-to-date in real time."),Object(i.b)("h2",{id:"vision"},"Vision"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A reliable and efficient search service, that allows for free-text and fuzzy search for people and properties."),Object(i.b)("li",{parentName:"ul"},"A microservice that does not impact user experience with poor performance related to searching data from multiple data domains.")),Object(i.b)("h2",{id:"user-needs"},"User Needs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a service: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want the ability to view the details of the results returned in a search"),Object(i.b)("li",{parentName:"ul"},"So that I can easily look through the different results and make the correct selection and proceed to the profile that I was looking for")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Search by : ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First name,Middle name,Last name"),Object(i.b)("li",{parentName:"ol"},"Asset- Address line1,Postcode")),Object(i.b)("h2",{id:"api-specification"},"API Specification"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0"},"https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0")),Object(i.b)("h2",{id:"architecture-diagram"},"Architecture diagram"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view"},"https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view")),Object(i.b)("p",null,"The search indexes will be kept in sync via events. In particular there will be a listener per each search index which will subscribe to the relevant publishers.\nBenefits of having an event driven architecture"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scalability :"),Object(i.b)("li",{parentName:"ul"},"Flexible approach:"),Object(i.b)("li",{parentName:"ul"},"Fault Tolerance :"),Object(i.b)("li",{parentName:"ul"},"Durability:"),Object(i.b)("li",{parentName:"ul"},"Event flow tracking")),Object(i.b)("h2",{id:"benefits-of-using-elasticsearch-and-indexes"},"Benefits of using ElasticSearch and indexes"),Object(i.b)("p",null,"Allows to search on fields which do not exist only on platform APIs. It allows to do aggregate searches without dependencies which means it is adaptable for any services wishes to use. Major advantage is that it provides huge improvements on performance of these search queries.These are other benefits offered by Elastic search are as follows"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Easy Filtering"),Object(i.b)("li",{parentName:"ol"},"Advanced searches"),Object(i.b)("li",{parentName:"ol"},"Better performance for read queries."),Object(i.b)("li",{parentName:"ol"},"Drives distributed architecture"),Object(i.b)("li",{parentName:"ol"},"Schema free"),Object(i.b)("li",{parentName:"ol"},"High Scalable")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Dependencies : ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By person"),Object(i.b)("li",{parentName:"ul"},"Person Information"),Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Alerts")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," By Asset ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Asset Information"),Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Alert")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," By Tenure ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Person Information"),Object(i.b)("li",{parentName:"ul"},"Alert")))}b.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,h=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return r?n.a.createElement(h,l(l({ref:t},s),{},{components:r})):n.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);