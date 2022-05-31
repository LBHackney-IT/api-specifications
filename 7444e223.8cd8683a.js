(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),s=(n(0),n(96)),o=["components"],i={id:"processes-api",title:"Processes API"},c={unversionedId:"processes-api",id:"processes-api",isDocsHomePage:!1,title:"Processes API",description:"Context",source:"@site/docs/processes-api.md",slug:"/processes-api",permalink:"/api-specifications/processes-api",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/processes-api.md",version:"current",sidebar:"docs",previous:{title:"Equality Information API",permalink:"/api-specifications/equality-information-api"},next:{title:"Contact Our Development Team",permalink:"/api-specifications/contact_us"}},p=[{value:"Context",id:"context",children:[]},{value:"Vision",id:"vision",children:[]},{value:"User Needs",id:"user-needs",children:[]}],l={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"context"},"Context"),Object(s.b)("p",null,"As part of Manage My Home, there is a need to build a workflow engine that will allow housing officers and other members of staff to initiate new workflows, upload documents, assign them and capture form information. In addition, where possible, various aspects of the workflow should be automated in order to reduce the dependency on housing officers' time to carry out repeatable steps."),Object(s.b)("h2",{id:"vision"},"Vision"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Store the state of a workflow process in order to be able to resume it at another time"),Object(s.b)("li",{parentName:"ul"},"Store the allowed next steps in the process"),Object(s.b)("li",{parentName:"ul"},"Enable assignment of a process between patches"),Object(s.b)("li",{parentName:"ul"},"Enable capture of form data"),Object(s.b)("li",{parentName:"ul"},"Allow documents to be attached to a process"),Object(s.b)("li",{parentName:"ul"},"Enable developers to quickly create and configure new and existing processes")),Object(s.b)("h2",{id:"user-needs"},"User Needs"),Object(s.b)("p",null,"As a service user, I would like to be able to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Initiate a workflow process so that I can keep track of progress"),Object(s.b)("li",{parentName:"ul"},"Assign a process to a specific patch so that I can enable assingment of a process between patches"),Object(s.b)("li",{parentName:"ul"},"Capture form data related to the process so that I can view data related to the process"),Object(s.b)("li",{parentName:"ul"},"Upload documents to the process so that I can add additional documents related to the process")),Object(s.b)("p",null,"As a consumer of this API, I would like to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Initialise a new process so that processes can be stored in one place"),Object(s.b)("li",{parentName:"ul"},"Get the status of an existing process so that I can keep track of progress"),Object(s.b)("li",{parentName:"ul"},"Update an existing process so that the process has the most update details"),Object(s.b)("li",{parentName:"ul"},"Progress an existing process so that the process has the most update-to-date progress")),Object(s.b)("p",null,"As a developer, I would like to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Easily manage the configuration of processes so that development time is reduced"),Object(s.b)("li",{parentName:"ul"},"Identify and re-use as much common code as possible across the processes so that consistenct and reusablily are achieved"),Object(s.b)("li",{parentName:"ul"},"Include sufficient levels of test coverage over the processes so that Test Driven standards are met")),Object(s.b)("h4",{id:"api-endpoints-with-payload"},"API Endpoints with Payload:"),Object(s.b)("h6",{id:"get-endpoint"},"GET Endpoint:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'\nGET /api/v1/process/process-name/{id}/\n\n{\n  "process": {\n    "id": "dc3eb7a0-73b2-4ad4-a267-622510fa06cb",\n    "targetId": "f83540f9-034a-7bfe-9348-7094dd0e0f46",\n    "targetType": "tenure",\n    "relatedEntities": [\n    {\n     "id":"6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n     "type": "tenure",\n     "subType":"tenant",\n     "description": "This is a description"\n    }\n    ],\n    "processName": "Change of Name",\n    "currentState": {\n      "stateName": "DocumentsAttached",\n      "permittedTriggers": [\n        "SubmitApplication"\n      ],\n      "assignment": {\n        "type": "patch",\n        "value": "string"\n      },\n      "processData": {\n        "formData": "{}",\n        "documents": [\n          "00578577-91c6-4244-a72c-c757fefe8d87",\n          "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",\n          "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",\n          "7d791694-e72d-44d5-aeee-9d2c400abdd5",\n          "5658204f-f8f4-44c4-ad11-3345d295ac33"\n        ]\n      },\n      "createdAt": "2021-09-24T09:30:00Z",\n      "updatedAt": "2021-09-24T09:30:00Z"\n    },\n    "previousStates": [\n      {\n        "stateName": "ApplicationStarted",\n        "permittedTriggers": [\n          "AttachDocuments"\n        ],\n        "assignment": {\n          "type": "googleGroup",\n          "value": "housingofficers"\n        },\n        "processData": {\n          "formData": {\n            "title": "Mr",\n            "firstName": "Patrick",\n            "middleName": "",\n            "surname": "Williams"\n          },\n          "documents": null\n        },\n        "createdAt": "2021-09-24T09:30:00Z",\n        "updatedAt": "2021-09-24T09:30:00Z"\n      },\n      {\n        "stateName": "DocumentsAttached",\n        "permittedTriggers": [\n          "SubmitApplication"\n        ],\n        "assignment": {\n          "type": "email",\n          "value": "estatesafety@hackney.gov.uk"\n        },\n        "processData": {\n          "formData": "{}",\n          "documents": [\n            "00578577-91c6-4244-a72c-c757fefe8d87",\n            "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",\n            "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",\n            "7d791694-e72d-44d5-aeee-9d2c400abdd5",\n            "5658204f-f8f4-44c4-ad11-3345d295ac33"\n          ]\n        },\n        "createdAt": "2021-09-24T09:30:00Z",\n        "updatedAt": "2021-09-24T09:30:00Z"\n      }\n    ]\n  }\n}\n')),Object(s.b)("h6",{id:"post-endpoint"},"POST Endpoint:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'POST /api/v1/process/{process-name}\n{\n  "targetId": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n  "targetType": "tenure",\n  "relatedEntities": [\n  {\n     "id":"6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n     "type": "tenure",\n     "subType":"tenant",\n     "description": "This is a description"\n  }\n  ],\n  "formData": {\n    "field1": true,\n    "field2": "string",\n    "field3": 1,\n    "field4": "string",\n    "field5": false\n  },\n  "documents": [\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"\n  ]\n}\n')),Object(s.b)("h6",{id:"patch-endpoint"},"PATCH Endpoint:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'PATCH /api/v1/process/{process-name}/{id}/{process-trigger}\n\n{\n  "formData": {\n    "field1": true,\n    "field2": "string",\n    "field3": 1,\n    "field4": "string",\n    "field5": false\n  },\n  "documents": [\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"\n  ]\n}\n\n')),Object(s.b)("h6",{id:"patch-by-id-endpoint"},"PATCH by id Endpoint:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'PATCH /api/v1/process/{process-name}/{id}/\n\n{\n  "formData": {\n    "field1": true,\n    "field2": "string",\n    "field3": 1,\n    "field4": "string",\n    "field5": false\n  },\n  "documents": [\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e7",\n    "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e8"\n  ],\n  "assignment": {\n    "type": "email",\n    "value": "estatesafety@hackney.gov.uk"\n  }\n}\n\n')))}d.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,f=d["".concat(o,".").concat(u)]||d[u]||b[u]||s;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);