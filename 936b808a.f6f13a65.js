(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(96)),o=["components"],c={id:"housing_search",title:"Housing Search API"},s={unversionedId:"housing_search",id:"housing_search",isDocsHomePage:!1,title:"Housing Search API",description:"Purpose",source:"@site/docs/housing_search.md",slug:"/housing_search",permalink:"/api-specifications/housing_search",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/housing_search.md",version:"current",sidebar:"docs",previous:{title:"Contact Details API",permalink:"/api-specifications/contact_details"},next:{title:"Notes API",permalink:"/api-specifications/notes"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"User Needs",id:"user-needs",children:[{value:"Searching",id:"searching",children:[]},{value:"Filtering",id:"filtering",children:[]},{value:"Considerations",id:"considerations",children:[]}]},{value:"API Specification",id:"api-specification",children:[]},{value:"Architecture diagram",id:"architecture-diagram",children:[]},{value:"Benefits of using ElasticSearch and indexes",id:"benefits-of-using-elasticsearch-and-indexes",children:[{value:"Workshop 26/04/2022",id:"workshop-26042022",children:[]}]}],b={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"purpose"},"Purpose"),Object(i.b)("p",null,"To define how a new proposed search service will work. The microservice will be reusable across different housing services and will provide searching functionality for both people and properties. The service will make use of ElasticSearch as a search engine (for performance benefits and to support free-text and fuzzy search) and will aggregate assets and people data for ease of search purposes."),Object(i.b)("p",null,"ElasticSearch\u2019s data store will be updated at real time - this will be implemented using event driven architecture, where each microservice serving a specific data domain will create an event each time new data is added or updated."),Object(i.b)("p",null,"ElasticSearch will be updated by a Lambda function, holding business logic, that has subscribed to events and thus will have data kept up-to-date in real time."),Object(i.b)("h2",{id:"vision"},"Vision"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A reliable and efficient search service, that allows for free-text and fuzzy search for people and properties."),Object(i.b)("li",{parentName:"ul"},"A microservice that does not impact user experience with poor performance related to searching data from multiple data domains.")),Object(i.b)("h2",{id:"user-needs"},"User Needs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a service: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want the ability to view the details of the results returned in a search"),Object(i.b)("li",{parentName:"ul"},"So that I can easily look through the different results and make the correct selection and proceed to the profile that I was looking for")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," As a TA officer: ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I want the ability to filter the details of the results returned in an asset search"),Object(i.b)("li",{parentName:"ul"},"So that I can easily look through the different results and find accommodation matching my requirements")),Object(i.b)("h3",{id:"searching"},"Searching"),Object(i.b)("p",null,"Searching is achieved by providing ",Object(i.b)("inlineCode",{parentName:"p"},"searchText")," as a string parameter."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Search by :")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Person - First name, Middle name, Last name"),Object(i.b)("li",{parentName:"ol"},"Asset - Address line 1, Postcode, Asset type"),Object(i.b)("li",{parentName:"ol"},"Tenure - Payment Reference, FullAddress of TenuredAsset , Household Members FullName  "),Object(i.b)("li",{parentName:"ol"},"Transactions - Sender name, Transaction Type, Payment Reference, Bank Account Number, Transaction Date, Transaction Amount  ")),Object(i.b)("h3",{id:"filtering"},"Filtering"),Object(i.b)("p",null,"Filter parameters will be added to\n",Object(i.b)("inlineCode",{parentName:"p"},"/search/assets/all")," and searchText will be optional giving the ability to filter of specific fields without the need to search by text.\nWe propose to enforce a rule of at least one parameter to mitigate against the API being abused and returning every asset."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter by :")," "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Asset - assetStatus, numberOfBedrooms, numberOfBedSpaces, numberOfCots, groundFloor, privateBathroom, privateKitchen, stepFree, isTemporaryAccomodation, parentAssetId")),Object(i.b)("h3",{id:"considerations"},"Considerations"),Object(i.b)("h4",{id:"transactions"},"Transactions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The search must be flexible enough to allow for the successful finding of information without assuming the form of the query. An officer may know the PRN, or the address, or just the sender name."),Object(i.b)("li",{parentName:"ul"},"A result should act as a navigation tool to deeper more meaningful information."),Object(i.b)("li",{parentName:"ul"},"Search will most likely be the first thing a user does in order to find information."),Object(i.b)("li",{parentName:"ul"},"Search should be available for any data set (property, transaction, document)."),Object(i.b)("li",{parentName:"ul"},"Bank account search should be available for transactions so that if this is the form of the query (a resident has phoned in and asked why their payment has gone missing) then the officer can find the payment in either 'all transactions' or 'suspense account' sections. The bank account data coming from Civica / Cedar may already be redacted. In which case, the last 3-4 digits of the account number should be searchable."),Object(i.b)("li",{parentName:"ul"},"The name linked to the transaction is the name linked to the account of the sender. This could be a person or a company.")),Object(i.b)("h2",{id:"api-specification"},"API Specification"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0"},"https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0")),Object(i.b)("h2",{id:"architecture-diagram"},"Architecture diagram"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view"},"https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view")),Object(i.b)("p",null,"The search indexes will be kept in sync via events. In particular there will be a listener per each search index which will subscribe to the relevant publishers.\nBenefits of having an event driven architecture"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scalability :"),Object(i.b)("li",{parentName:"ul"},"Flexible approach:"),Object(i.b)("li",{parentName:"ul"},"Fault Tolerance :"),Object(i.b)("li",{parentName:"ul"},"Durability:"),Object(i.b)("li",{parentName:"ul"},"Event flow tracking")),Object(i.b)("h2",{id:"benefits-of-using-elasticsearch-and-indexes"},"Benefits of using ElasticSearch and indexes"),Object(i.b)("p",null,"Allows to search on fields which do not exist only on platform APIs. It allows to do aggregate searches without dependencies which means it is adaptable for any services wishes to use. Major advantage is that it provides huge improvements on performance of these search queries.These are other benefits offered by Elastic search are as follows"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Easy Filtering"),Object(i.b)("li",{parentName:"ol"},"Advanced searches"),Object(i.b)("li",{parentName:"ol"},"Better performance for read queries."),Object(i.b)("li",{parentName:"ol"},"Drives distributed architecture"),Object(i.b)("li",{parentName:"ol"},"Schema free"),Object(i.b)("li",{parentName:"ol"},"High Scalable")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Dependencies : ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By person"),Object(i.b)("li",{parentName:"ul"},"Person Information"),Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Asset Information"),Object(i.b)("li",{parentName:"ul"},"Transactions"),Object(i.b)("li",{parentName:"ul"},"Alerts")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," By Asset ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Asset Information"),Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Alert")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," By Tenure ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tenure"),Object(i.b)("li",{parentName:"ul"},"Person Information"),Object(i.b)("li",{parentName:"ul"},"Alert")),Object(i.b)("h3",{id:"workshop-26042022"},"Workshop 26/04/2022"),Object(i.b)("p",null,"We discussed the need for filter parameters without searchText so that we can refine lists based purely on the filter params.\nIt was decided to use the ",Object(i.b)("inlineCode",{parentName:"p"},"/search/assets/all")," to produce this outcome.\nReference doc can be found ",Object(i.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ZMa2dKqV5XfgFiyA0RL9hCqy1QLoo53VnOJPpGxQA_s/edit#heading=h.dx6cih64yr6k"},"here")))}u.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);