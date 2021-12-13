(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec17-bc2d618e0a473bb284c7e0e091d74b2e.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),s=(n(0),n(95)),o=["components"],r={id:"assessment_process",title:"Assessment Process"},c={unversionedId:"assessment_process",id:"assessment_process",isDocsHomePage:!1,title:"Assessment Process",description:"Purpose",source:"@site/docs/asessment_process.md",slug:"/assessment_process",permalink:"/api-specifications/assessment_process",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/asessment_process.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/api-specifications/"},next:{title:"Activities API",permalink:"/api-specifications/activities_api"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"Developer Needs",id:"developer-needs",children:[]},{value:"The Assessment Process",id:"the-assessment-process",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Data Meetup Feedback",id:"data-meetup-feedback",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],d={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(s.b)("wrapper",Object(i.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"purpose"},"Purpose"),Object(s.b)("p",null,"The purpose of this process is to provide a clear,open and  consistent method of providing new and amended API specifications, evaluating them and getting them published in a way that is easy for a wider audience to access."),Object(s.b)("p",null,"Our API specifications have become a fundamental part of our API development process; all new APIs begin from a set of design specifications.  As the number of APIs we are developing continues to grow, we have begun to identify areas of inconsistency that we want to be able to improve on including:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Where the specifications are stored - specs tend to be stored in different locations by different projects making them difficult to track down when needed which ends up re-inventing the wheel.  If they cannot be found then we lose their value."),Object(s.b)("li",{parentName:"ul"},"The review and approval process - once a specification has been approved, if there needs to be changes to the specifications, there needs to be a consistent approach for getting this done or we risk implementing changes that could present any of a number of risks to consumers of the API including developing against outdated specifications and systems not working as expected.")),Object(s.b)("p",null,"Our API specifications are different from the API documentation in Swagger whose main purpose is to describe the various endpoints of the APIs.  The specifications add more light into the design process and attempt to capture the decisions behind approaches or changes to an API along with the user and data needs.  This further contributes to building our APIs in a more consistent way as departures from the standard set of tools and methodologies can be clearly documented here."),Object(s.b)("p",null,"We believe in the value of collaboration and having colleagues contribute to the design process allows for shared learning and potentially improves the quality of the output of these reusable APIs.  Having this process in place allows us to inject a diverse set of knowledge into the design of the API which would lead to positive and consistent outcomes for our development."),Object(s.b)("h2",{id:"vision"},"Vision"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A single, centralised repository holding all of our API design specifications."),Object(s.b)("li",{parentName:"ul"},"A way to easily and consistently access published API specifications in a way that is familiar to people."),Object(s.b)("li",{parentName:"ul"},"A way to standardise the management of changes to specifications."),Object(s.b)("li",{parentName:"ul"},"A way to link the API specifications to the API catalog going forward.")),Object(s.b)("h2",{id:"developer-needs"},"Developer Needs"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"As a developer I want a way to easily find API specifications so that I can better understand and use these APIs effectively as well as stay up to date on any changes that may affect my product."),Object(s.b)("li",{parentName:"ul"},"As a developer I want to be able to publish specifications in a way that colleagues, stakeholders and interested parties can easily access and provide feedback on.")),Object(s.b)("h2",{id:"the-assessment-process"},"The Assessment Process"),Object(s.b)("p",null,"Below is a diagram that provides some illustration of the process for assessing/evaluating our API specifications.  Each step in the process is expanded upon a bit further:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"API",src:n(197).default})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Draft Specification ")," - The individual or project will draft the API specification as part of their internal design process, ensuring that the specification meets the needs of the identified users and follows our development standards as outlined in the API Playbook.  Once the draft is completed it should be exported to an MD (markdown) file and added to the API specifications repository ","[repository url to be added]","."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Raise the PR ")," - Once the specification is ready for review, a pull request is raised to facilitate review and merge into the main branch.  If this is a new document, a link to it should be added to the repository\u2019s navigation component.  A pull request can be reviewed either collaboratively at our tech meetups or offline by the development manager with a retrospective review if the pull request brings significant change."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Agreement Stage ")," - If the specification is agreed then the pull request is approved and merged to the main branch.  Once merged it will trigger an update to the specifications web page, publishing any changes.  If, however, the specification is not agreed, any comments or concerns raised are added to the pull request and it is returned to the individual or project proposing the specification.  The individual or project will then review and address the requested changes, either by making improvements or by providing justification for maintaining the original design."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Subsequent Discoveries or Reviews ")," - It is expected that API specifications will continue to evolve as further discoveries are made.  This process will allow for specifications to be iterated and improved.  The changes will be made on a new branch, separate from the main branch.  Once the changes have been completed a pull request will be raised and the review process will be triggered again."),Object(s.b)("h2",{id:"versioning"},"Versioning"),Object(s.b)("p",null,"While we iterate and improve on our API specifications, there needs to be a way to refer to previously agreed versions of the specifications.  For this we will use the features of Github to track changes to our designs.  With this in place, consumers of our API will be able to see how the APIs have evolved and address any changes that may impact their use."),Object(s.b)("h2",{id:"data-meetup-feedback"},"Data Meetup Feedback"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://ideaflip.com/b/wa4zzqf97nke/"},"https://ideaflip.com/b/wa4zzqf97nke/")),Object(s.b)("h2",{id:"decision"},"Decision"),Object(s.b)("p",null,"This process was proposed at our technical architecture meetup meeting on Tuesday 20th July, 2021.  The process was reviewed and agreed with the following items to consider:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If we will be able to fully monitor who and where each API is being used across the system(s) so that we can update users; for instance where there are changes in specification."),Object(s.b)("li",{parentName:"ul"},"If the use of APIs will be added to a fuller system diagram."),Object(s.b)("li",{parentName:"ul"},"We currently have Swagger docs generated by the APIs themselves as well as manually added to Swagger Hub.  Having a third source of documentation might be a bit much.  We will need to look at why we have Swagger documents generated in multiple locations."),Object(s.b)("li",{parentName:"ul"},"We need to check that we do not add any new security risks by publishing more detailed information about our designs."),Object(s.b)("li",{parentName:"ul"},"We will need to clearly distinguish between target specifications and actual; the idea being these specification documents will be more of a target and the - --Swagger docs will represent the actual."),Object(s.b)("li",{parentName:"ul"},"We need to ensure that there is a standardised and recorded testing process for changes to the API.")),Object(s.b)("h2",{id:"consequences"},"Consequences"),Object(s.b)("p",null,"Additional effort will be required to convert the document from a Google Doc (or original format) to the Markdown (MD) file format.  This could potentially contribute to documents not being in sync."))}p.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,b=p["".concat(o,".").concat(h)]||p[h]||u[h]||s;return n?a.a.createElement(b,r(r({ref:t},l),{},{components:n})):a.a.createElement(b,r({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);