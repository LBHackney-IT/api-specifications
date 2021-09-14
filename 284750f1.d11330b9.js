(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec6-f4018feed51892c75078360d41f7ee50.png"},155:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec7-d35a2430bf71e49e58bf7c410b607d82.png"},156:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec8-b45351354d1a10ffd0d6ebcbd134fd50.png"},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec9-f762cd592483f35ea81a1283887ddda6.png"},158:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec10-0e4777303bf8eea2a64a2f13a3eebd46.png"},159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec11-97745975ef2b51aa8a67cba5e36f23c4.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec12-8f786be508705d2ca15ce8c324875b44.png"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec13-f78721f1ed0593b2dae64548ef893204.png"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(92)),o=["components"],i={id:"asset_info",title:"Asset Information API"},c={unversionedId:"asset_info",id:"asset_info",isDocsHomePage:!1,title:"Asset Information API",description:"Purpose",source:"@site/docs/asset_info.md",slug:"/asset_info",permalink:"/api-specifications/asset_info",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/asset_info.md",version:"current",sidebar:"docs",previous:{title:"Activities API",permalink:"/api-specifications/activities_api"},next:{title:"Configuration",permalink:"/api-specifications/configuration"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"Our users and their needs",id:"our-users-and-their-needs",children:[]},{value:"Workshop 1",id:"workshop-1",children:[]},{value:"Entities dependent on Asset API",id:"entities-dependent-on-asset-api",children:[]},{value:"Endpoints to be Created:",id:"endpoints-to-be-created",children:[]},{value:"Example payload",id:"example-payload",children:[]}],p={toc:l};function b(e){var t=e.components,i=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"purpose"},"Purpose"),Object(s.b)("p",null,"To identify all information to be captured with regards to the Core-Asset domain."),Object(s.b)("p",null,"As one of the core entities for all interactions with the council, we understand that the Asset is another entity that had to be brainstormed thoroughly between all three streams (Finance, Tenants & Lease Holders, and Housing) of MTHF. We believe that naming this API as Asset instead of properties will capture other entities which do not necessarily come under properties terminology for eg: facilities such as lifts, booster pumps etc."),Object(s.b)("p",null,"As part of our solution, we are proposing to develop the first version of this service as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more asset-centric self-service capability, enabling even more service transactions to be carried out online."),Object(s.b)("p",null,"Our goal is to ensure we build reusable components as part of the MFTH stream and thereby extending to other domains if they need similar information. This will enable us to eliminate the silos mechanism for asset information collection and help us to present a single view on it which will also help us to reduce the future development cost and yield a better ROI."),Object(s.b)("p",null,"We have agreed on a flexible approach to following HACT standards for Asset information API as some of our needs are not being met."),Object(s.b)("h2",{id:"vision"},"Vision"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A single, centralized data source, holding all core assets data, updated by multiple services."),Object(s.b)("li",{parentName:"ul"},"A reusable microservice API used for managing that data."),Object(s.b)("li",{parentName:"ul"},"Single data source to identify all assets related to different domains such as Housing etc to avoid any duplication of data,a normalised view and consistency across the board.")),Object(s.b)("h2",{id:"our-users-and-their-needs"},"Our users and their needs"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the Asset address so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can assess the raised repairs information."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset belongs the block"),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset belongs to the estate.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the information for property reference and major reference so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find the level code(a code which identifies the type of asset whether property or facilities) details."),Object(s.b)("li",{parentName:"ul"},"I can find if any facilities are linked to the property."),Object(s.b)("li",{parentName:"ul"},"I can direct the required repairs information to the team.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see what type of property it is so that: "),"  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can decide what action they can take. For example: if it is a house and the roof is leaking then it will be a house repair similarly if it is a block then it will be a block repair."),Object(s.b)("li",{parentName:"ul"},"I can find out if the property comes under new build and direct the required team to take action.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the tenure type so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can associate the required team for the repair responsibilities."),Object(s.b)("li",{parentName:"ul"},"I can find out if the RTB(Right to buy) flag is set in order to take the required repair request/action.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Tenancy & Leaseholder service user I would like to see the asset information so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find out whether the property is void."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset is lettable."),Object(s.b)("li",{parentName:"ul"},"I can find out the letting patches information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the ward information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the address of the property recorded against the tenure.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Finance service user I would like to see the asset information so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find out whether the property is void."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset is lettable."),Object(s.b)("li",{parentName:"ul"},"I can find out the tenure information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the rent group of the property (HRA information).")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs/Tenancy and Leaseholder service user I need to know the LLPG reference so that: "),"  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can identify the location of the property."),Object(s.b)("li",{parentName:"ul"},"I can see the status of the property (whether the property belongs to a block/estate etc)")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a consumer I need to have an API specification (e.g. Swagger doc, README), so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can have a clear understanding of the endpoints which are available"),Object(s.b)("li",{parentName:"ul"},"I know what the requests and responses should look like"),Object(s.b)("li",{parentName:"ul"},"I need to be able to query for an individual asset record or list of assets so that I can use the information as per the service need in question.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a consumer I would like to have the option for paginated results so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The query duration doesn\u2019t impact the performance of the frontend negatively."),Object(s.b)("li",{parentName:"ul"},"I can set the page size for large results")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a developer I need to create an API specification so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I can provide clear documentation about endpoints and payloads, etc.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I can help the external agency developer on quick onboarding.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to be notified when errors occur and have visibility of errors (e.g logs) and issues on the API, so that I can fix them as soon as possible.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to make sure that access to the API is secure so that only authorised users can make requests to this API.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to know the structure and content of the entities I am exposing data for, so that I know I am meeting user needs.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to know which data this API will be concerned with, so that\nendpoints are relevant")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I don\u2019t duplicate data provided by other platform APIs"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As an application support analyst"),"\nI need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a data analyst I need to connect to the API via Qlik so that: "),Object(s.b)("br",{parentName:"p"}),"\n","data is easy to interpret and available for further reporting purposes."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a data analyst I need to know the LLPG reference so that: "),"\nI can identify the location of the property.\nI can see the status of the property (whether the property belongs to a block/estate etc)"),Object(s.b)("h1",{id:"workshop-outcome"},"Workshop outcome"),Object(s.b)("h2",{id:"workshop-1"},"Workshop 1"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Summary "),"\nThe workshop was based on identifying different sources that might contribute towards the Asset Information API. We also identified different types of assets based on their classifications and usage and their references in individual MFTH workstreams."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," ",Object(s.b)("a",{parentName:"strong",href:"https://ideaflip.com/edit/d7zfwtixmyhv/zGJtvUcZSq52"},"https://ideaflip.com/edit/d7zfwtixmyhv/zGJtvUcZSq52")," ")),Object(s.b)("h1",{id:"questions-to-ask"},"Questions to ask"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Do we follow HACT standards for Asset Information API. If not, is there any flexibility? ")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," We decided not to follow HACT standards in its entirety due to its rigid structure which might meet our user needs. ")),Object(s.b)("h2",{id:"entities-dependent-on-asset-api"},"Entities dependent on Asset API"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Addresses API"),Object(s.b)("li",{parentName:"ol"},"Notes"),Object(s.b)("li",{parentName:"ol"},"Tenure"),Object(s.b)("li",{parentName:"ol"},"Contract"),Object(s.b)("li",{parentName:"ol"},"Activities"),Object(s.b)("li",{parentName:"ol"},"Cautionary alerts"),Object(s.b)("li",{parentName:"ol"},"Lease"),Object(s.b)("li",{parentName:"ol"},"Repairs (work order)")),Object(s.b)("h2",{id:"endpoints-to-be-created"},"Endpoints to be Created:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Get Properties ")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Purpose: ")," Gets one or more properties from the properties table.  Requests can be made by specifying a ref path parameter or searching for properties based on a series of parameters."),Object(s.b)("p",null,"Endpoint URL:\n/assets\n/assets/{prop-ref}\n/assets?llpg-ref={llpg-ref}\n/assets/?postcode=E8 1DY"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"              Method: GET (list, search, view)\n              Request Querystring Parameters:\n              postcode - specifies the postcode on which to base the search for requests.\n              prop-ref - provides unique property reference\n              llpg-ref - provides LLPG reference.\n")),Object(s.b)("p",null,"  Request Path Parameter:\nId - specifies the Id of a specific help request record to return"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Response:\n200"),Object(s.b)("li",{parentName:"ul"},"One or more property")),Object(s.b)("p",null,Object(s.b)("img",{alt:"API",src:n(154).default}),"\n404\nIf item was not found"),Object(s.b)("p",null,Object(s.b)("img",{alt:"API",src:n(155).default})),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"}," Post Properties "))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Purpose: ")," Gets one or more properties from the properties table.  Requests can be made by specifying a ref path parameter or searching for properties based on a series of parameters."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Endpoint URL: "),"\nassets/"),Object(s.b)("p",null,"Method: Post\nRequest post object:\n",Object(s.b)("img",{alt:"API",src:n(156).default})),Object(s.b)("p",null,"Response:\n201\nAsset created\n",Object(s.b)("img",{alt:"API",src:n(157).default}),"\n400\nBad request\n",Object(s.b)("img",{alt:"API",src:n(158).default})),Object(s.b)("p",null,"500\nInternal Server Error\n",Object(s.b)("img",{alt:"API",src:n(159).default})),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"}," Put Properties "),Object(s.b)("strong",{parentName:"li"}," Purpose: ")," Update a particular asset")),Object(s.b)("p",null,"Endpoint URL: asset/{id}"),Object(s.b)("p",null,"Method: Put\nRequest put object:\nAsset object: Json object of the updated asset details e.g.\n",Object(s.b)("img",{alt:"API",src:n(160).default})),Object(s.b)("p",null,"Response:\n204\nAsset Updated\n",Object(s.b)("img",{alt:"API",src:n(161).default})),Object(s.b)("p",null,"}"),Object(s.b)("p",null,"404\nNot found\n{\n\u201cDevErrorMessages  \u201d: ","[\u201cvalidation errors\u201d]",",\n\u201cUserErrorMessage\u201d: \u201cYour item could not be updated for the following",Object(s.b)("br",{parentName:"p"}),"\n","reasons...\u201d\n}\n500\nInternal Server Error"),Object(s.b)("h2",{id:"example-payload"},"Example payload"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'                  {\n                  \u201cId\u201d: \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d,\n                  "assetId": "00007918",\n                  \u201cassetType\u201d: \u201cGarage | Dwelling | Estate ...\u201d,\n                  "assetLocation": {\n                    \u201cparentAssets\u201d: [\n                  {\n                        \u201cid\u201d: \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d,\n                        \u201ctype\u201d: \u201csub-block\u201d,\n                            \u201cname\u201d: \u201cNewcombe House (1-18)\u201d\n                  },\n                  {\n                            \u201cid\u201d: \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d,\n                        \u201ctype\u201d: \u201cblock\u201d,\n                  "name": "Newcombe House (1-35)"\n                  },\n                  {\n                  "id": \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d,\n                        \u201ctype\u201d: \u201cestate\u201d,\n                  "name": "Newcombe House Estate Powell Road"\n                  }\n                  ],\n                  "floor": "G",\n                  "totalBlockFloors": "5"\n                  },\n                  "assetAddress": {\n                  "uprn": "100021065786",\n                  "addressLine1": "Powell Road",\n                  "addressLine2": "Hackney",\n                  "addressLine3": "London",\n                  "addressLine4": "",\n                  "postCode": "E5 8DH",\n                  "postPreamble": "1 Newcome House"\n                  },\n                  "assetManagement": {\n                  "agent": "HAH",\n                  "areaOfficeName": "Clapton Panel Area Team",\n                  "isCouncilProperty": false,\n                  "managingOrganisation": "LBH", -- Hackney or TMO\n                  \u201cmanagingOrganisationId\u201d: \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d\n                  "owner": "London Borough of Hackney",\n                  \u201cisTMOManaged\u201d: true\n                  },\n                  "assetCharacteristics": {\n                  "numberOfBedRooms": "2",\n                  "numberOfLifts": "1",\n                  "numberOfLivingRooms": "1",\n                  "windowType": "DBL",\n                  "yearConstructed": "1978"\n                  },\n                  "rootAsset": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n                  \u201cparentAssetIds\u201d: \u201c6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6#6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6#6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6\u201d,\n')),Object(s.b)("p",null," \u201cLinks\u201d:  ["),Object(s.b)("p",null,"\u201cActivities\u201d:  \u201d",Object(s.b)("a",{parentName:"p",href:"https://activitiesapi.hackney.gov.uk/propertyactivities/%5BpropertyId%5D%E2%80%9D"},"https://activitiesapi.hackney.gov.uk/propertyactivities/[propertyId]\u201d"),","),Object(s.b)("p",null," \u201cDocuments\u201d:  \u201d",Object(s.b)("a",{parentName:"p",href:"https://documentsapi.hackney.gov.uk?type=property&id=%5BpropertyId%5D%E2%80%9D"},"https://documentsapi.hackney.gov.uk?type=property&id=[propertyId]\u201d"),","),Object(s.b)("p",null," \u201cEPC Certificate\u201d : \u201c",Object(s.b)("a",{parentName:"p",href:"https://assetapi.hackney.gov.uk/epc-cert/%5B00001111%5D%E2%80%9D"},"https://assetapi.hackney.gov.uk/epc-cert/[00001111]\u201d")),Object(s.b)("p",null," \u201cTenancies\u201d: \u201c",Object(s.b)("a",{parentName:"p",href:"https://tenanciesapi.hackney.gov.uk/tenancies%5BpropertyId%5D%E2%80%9D"},"https://tenanciesapi.hackney.gov.uk/tenancies[propertyId]\u201d"),","),Object(s.b)("p",null," \u201cFacilities\u201d: \u201c",Object(s.b)("a",{parentName:"p",href:"https://assetsapi.hackney.gov.uk/facilities/%5B00001111%5D%E2%80%9D"},"https://assetsapi.hackney.gov.uk/facilities/[00001111]\u201d"),"\n]\n}"))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(o,".").concat(d)]||b[d]||u[d]||s;return n?r.a.createElement(f,i(i({ref:t},l),{},{components:n})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);