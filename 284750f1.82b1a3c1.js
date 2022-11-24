(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{159:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec6-f4018feed51892c75078360d41f7ee50.png"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec7-d35a2430bf71e49e58bf7c410b607d82.png"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec10-0e4777303bf8eea2a64a2f13a3eebd46.png"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec11-97745975ef2b51aa8a67cba5e36f23c4.png"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec12-8f786be508705d2ca15ce8c324875b44.png"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/spec13-f78721f1ed0593b2dae64548ef893204.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(97)),i=["components"],o={id:"asset_info",title:"Asset Information API"},c={unversionedId:"asset_info",id:"asset_info",isDocsHomePage:!1,title:"Asset Information API",description:"Purpose",source:"@site/docs/asset_info.md",slug:"/asset_info",permalink:"/api-specifications/asset_info",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/asset_info.md",version:"current",sidebar:"docs",previous:{title:"Activity History API",permalink:"/api-specifications/activities_api"},next:{title:"Configuration",permalink:"/api-specifications/configuration"}},l=[{value:"Purpose",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"Our users and their needs",id:"our-users-and-their-needs",children:[]},{value:"Workshop 1",id:"workshop-1",children:[]},{value:"Workshop 26/04/2022",id:"workshop-26042022",children:[]},{value:"Entities dependent on Asset API",id:"entities-dependent-on-asset-api",children:[]},{value:"Endpoints to be Created:",id:"endpoints-to-be-created",children:[]},{value:"Example full payload",id:"example-full-payload",children:[]}],p={toc:l};function b(e){var t=e.components,o=Object(r.a)(e,i);return Object(s.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"purpose"},"Purpose"),Object(s.b)("p",null,"To identify all information to be captured with regards to the Core-Asset domain."),Object(s.b)("p",null,"As one of the core entities for all interactions with the council, we understand that the Asset is another entity that had to be brainstormed thoroughly between all three streams (Finance, Tenants & Lease Holders, and Housing) of MTHF. We believe that naming this API as Asset instead of properties will capture other entities which do not necessarily come under properties terminology for eg: facilities such as lifts, booster pumps etc."),Object(s.b)("p",null,"As part of our solution, we are proposing to develop the first version of this service as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more asset-centric self-service capability, enabling even more service transactions to be carried out online."),Object(s.b)("p",null,"Our goal is to ensure we build reusable components as part of the MFTH stream and thereby extending to other domains if they need similar information. This will enable us to eliminate the silos mechanism for asset information collection and help us to present a single view on it which will also help us to reduce the future development cost and yield a better ROI."),Object(s.b)("p",null,"We have agreed on a flexible approach to following HACT standards for Asset information API as some of our needs are not being met."),Object(s.b)("h2",{id:"vision"},"Vision"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A single, centralized data source, holding all core assets data, updated by multiple services."),Object(s.b)("li",{parentName:"ul"},"A reusable microservice API used for managing that data."),Object(s.b)("li",{parentName:"ul"},"Single data source to identify all assets related to different domains such as Housing etc to avoid any duplication of data,a normalised view and consistency across the board.")),Object(s.b)("h2",{id:"our-users-and-their-needs"},"Our users and their needs"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the Asset address so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can assess the raised repairs information."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset belongs the block"),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset belongs to the estate.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the information for property reference and major reference so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find the level code(a code which identifies the type of asset whether property or facilities) details."),Object(s.b)("li",{parentName:"ul"},"I can find if any facilities are linked to the property."),Object(s.b)("li",{parentName:"ul"},"I can direct the required repairs information to the team.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see what type of property it is so that: "),"  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can decide what action they can take. For example: if it is a house and the roof is leaking then it will be a house repair similarly if it is a block then it will be a block repair."),Object(s.b)("li",{parentName:"ul"},"I can find out if the property comes under new build and direct the required team to take action.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs service user I would like to see the tenure type so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can associate the required team for the repair responsibilities."),Object(s.b)("li",{parentName:"ul"},"I can find out if the RTB(Right to buy) flag is set in order to take the required repair request/action.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Tenancy & Leaseholder service user I would like to see the asset information so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find out whether the property is void."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset is lettable."),Object(s.b)("li",{parentName:"ul"},"I can find out the letting patches information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the ward information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the address of the property recorded against the tenure.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Finance service user I would like to see the asset information so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can find out whether the property is void."),Object(s.b)("li",{parentName:"ul"},"I can find out if the asset is lettable."),Object(s.b)("li",{parentName:"ul"},"I can find out the tenure information of the property."),Object(s.b)("li",{parentName:"ul"},"I can find out the rent group of the property (HRA information).")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a Repairs/Tenancy and Leaseholder service user I need to know the LLPG reference so that: "),"  "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can identify the location of the property."),Object(s.b)("li",{parentName:"ul"},"I can see the status of the property (whether the property belongs to a block/estate etc)")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a consumer I need to have an API specification (e.g. Swagger doc, README), so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"I can have a clear understanding of the endpoints which are available"),Object(s.b)("li",{parentName:"ul"},"I know what the requests and responses should look like"),Object(s.b)("li",{parentName:"ul"},"I need to be able to query for an individual asset record or list of assets so that I can use the information as per the service need in question.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a consumer I would like to have the option for paginated results so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The query duration doesn\u2019t impact the performance of the frontend negatively."),Object(s.b)("li",{parentName:"ul"},"I can set the page size for large results")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a housing officer I want to create a new asset so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The new asset gets validated against uprn(Unique Property Reference Number) field in the address."),Object(s.b)("li",{parentName:"ul"},'If uprn matches we would throw a validation error "Asset with this uprn already exists".'),Object(s.b)("li",{parentName:"ul"},"If uprn is new we would create new asset.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a housing officer I want to update an existing asset so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The asset information is always up to date."),Object(s.b)("li",{parentName:"ul"},"I can correct asset information."),Object(s.b)("li",{parentName:"ul"},"I can change assets status.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a developer I need to create an API specification so that: ")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I can provide clear documentation about endpoints and payloads, etc.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I can help the external agency developer on quick onboarding.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to be notified when errors occur and have visibility of errors (e.g logs) and issues on the API, so that I can fix them as soon as possible.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to make sure that access to the API is secure so that only authorised users can make requests to this API.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to know the structure and content of the entities I am exposing data for, so that I know I am meeting user needs.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"As a developer I need to know which data this API will be concerned with, so that\nendpoints are relevant")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"I don\u2019t duplicate data provided by other platform APIs"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As an application support analyst"),"\nI need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a data analyst I need to connect to the API via Qlik so that: "),Object(s.b)("br",{parentName:"p"}),"\n","data is easy to interpret and available for further reporting purposes."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," As a data analyst I need to know the LLPG reference so that: "),"\nI can identify the location of the property.\nI can see the status of the property (whether the property belongs to a block/estate etc)"),Object(s.b)("h1",{id:"workshop-outcome"},"Workshop outcome"),Object(s.b)("h2",{id:"workshop-1"},"Workshop 1"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Summary")),Object(s.b)("p",null,"The workshop was based on identifying different sources that might contribute towards the Asset Information API. We also identified different types of assets based on their classifications and usage and their references in individual MFTH workstreams."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://ideaflip.com/edit/d7zfwtixmyhv/zGJtvUcZSq52"},"https://ideaflip.com/edit/d7zfwtixmyhv/zGJtvUcZSq52"))),Object(s.b)("h2",{id:"workshop-26042022"},"Workshop 26/04/2022"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Summary")),Object(s.b)("p",null,"We covered the need for temporary accomodation assets to have new fields introduced along with a discussion around the relationship between assetTypes hotels/hostels and their children rooms."),Object(s.b)("p",null,"Below is the proposal link to all the new fields."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("a",{parentName:"strong",href:"https://docs.google.com/document/d/1gUub2ye7bnvPO42hc9GqDy2eYCWtR1JRaL78fBKUDv0"},"https://docs.google.com/document/d/1gUub2ye7bnvPO42hc9GqDy2eYCWtR1JRaL78fBKUDv0"))),Object(s.b)("h1",{id:"questions-to-ask"},"Questions to ask"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Do we follow HACT standards for Asset Information API. If not, is there any flexibility? ")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," We decided not to follow HACT standards in its entirety due to its rigid structure which might meet our user needs. ")),Object(s.b)("h2",{id:"entities-dependent-on-asset-api"},"Entities dependent on Asset API"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Addresses API"),Object(s.b)("li",{parentName:"ol"},"Notes"),Object(s.b)("li",{parentName:"ol"},"Tenure"),Object(s.b)("li",{parentName:"ol"},"Contract"),Object(s.b)("li",{parentName:"ol"},"Activities"),Object(s.b)("li",{parentName:"ol"},"Cautionary alerts"),Object(s.b)("li",{parentName:"ol"},"Lease"),Object(s.b)("li",{parentName:"ol"},"Repairs (work order)")),Object(s.b)("h2",{id:"endpoints-to-be-created"},"Endpoints to be Created:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Get Properties ")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Purpose: ")," Gets one or more properties from the properties table.  Requests can be made by specifying a ref path parameter or searching for properties based on a series of parameters."),Object(s.b)("p",null,"Endpoint URLs:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"   /assets\n   /assets/{prop-ref}\n   /assets?llpg-ref={llpg-ref}\n   /assets/?postcode=E8 1DY\n\n   Method: GET (list, search, view)\n   Request Querystring Parameters:\n   postcode - specifies the postcode on which to base the search for requests.\n   prop-ref - provides unique property reference\n   llpg-ref - provides LLPG reference.\n")),Object(s.b)("p",null,"  Request Path Parameter:\nId - specifies the Id of a specific help request record to return"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Response:\n200"),Object(s.b)("li",{parentName:"ul"},"One or more property")),Object(s.b)("p",null,Object(s.b)("img",{alt:"API",src:n(159).default}),"\n404\nIf item was not found"),Object(s.b)("p",null,Object(s.b)("img",{alt:"API",src:n(160).default})),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"}," Post Properties "))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Purpose: ")," Adds a new asset to the assets table in dynamoDB database.\nThe new asset gets validated against uprn(Unique Property Reference Number) field in the address."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},'If uprn matches we would throw a validation error "Asset with this uprn already exists".'),Object(s.b)("li",{parentName:"ul"},"If uprn is new we would create new asset in the database.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"proposed validations"),"\nuprn - unique\nassetId - unique\nassetAddress - mandatory\n",Object(s.b)("strong",{parentName:"p"}," Endpoint URL: "),"\nassets/"),Object(s.b)("p",null,"Method: Post\nPost object:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n    "assetId":"string",\n    "assetType":"Block",\n    "rootAsset":"string",\n    "parentAssetIds":"string",\n    "assetLocation":{\n        "floorNo":"string",\n        "totalBlockFloors":0,\n        "parentAssets":[\n            {\n                "type":"string",\n                "id":"3fa85f64-5717-4562-b3fc-2c963f66afa6",\n                "name":"string"\n            }\n        ]\n    },\n    "assetAddress":{\n        "uprn":"string",\n        "addressLine1":"string",\n        "addressLine2":"string",\n        "addressLine3":"string",\n        "addressLine4":"string",\n        "postCode":"string",\n        "postPreamble":"string"\n    },\n    "assetManagement":{\n        "agent":"string",\n        "areaOfficeName":"string",\n        "isCouncilProperty":true,\n        "managingOrganisation":"string",\n        "managingOrganisationId":"3fa85f64-5717-4562-b3fc-2c963f66afa6",\n        "owner":"string",\n        "isTMOManaged":true,\n        "propertyOccupiedStatus":"string",\n        "isNoRepairsMaintenance":true,\n        "fundingSource":"string",\n        "costCentre":"string",\n        "councilTaxType":"string",\n        "councilTaxLiability":"string",\n        "lhaArea":"string",\n        "isTemporaryAccomodation":true,\n        "readyToLetDate":true\n    },\n    "assetCharacteristics":{\n        "numberOfBedrooms":0,\n        "numberOfLifts":0,\n        "numberOfLivingRooms":0,\n        "windowType":"string",\n        "yearConstructed":"string",\n        "assetPropertyFolderLink":"string",\n        "epcExpiryDate":"2022-05-17T17:42:12.659Z",\n        "fireSafetyCertificateExpiryDate":"2022-05-17T17:42:12.659Z",\n        "gasSafetyCertificateExpiryDate":"2022-05-17T17:42:12.659Z",\n        "elecCertificateExpiryDate":"2022-05-17T17:42:12.659Z",\n        "optionToTax":true,\n        "hasStairs":true,\n        "numberOfStairs":0,\n        "hasRampAccess":true,\n        "hasCommunalAreas":true,\n        "hasPrivateBathroom":true,\n        "numberOfBathrooms":0,\n        "bathroomFloor":"string",\n        "hasPrivateKitchen":true,\n        "numberOfKitchens":0,\n        "kitchenfloor":"string",\n        "alertSystemExpiryDate":"2022-05-17T17:42:12.659Z",\n        "epcScore":"string",\n        "numberOfFloors":0,\n        "accessibilityComments":"string",\n        "numberOfBedSpaces":0,\n        "numberOfCots":0,\n        "sleepingArrangementNotes":"string",\n        "numberOfShowers":0,\n        "kitchenNotes":"string",\n        "isStepFree":true\n    },\n    "tenure":{\n        "id":"string",\n        "paymentReference":"string",\n        "type":"string",\n        "startOfTenureDate":"2022-05-17T17:42:12.659Z",\n        "endOfTenureDate":"2022-05-17T17:42:12.659Z",\n        "isActive":true\n    }\n}\n')),Object(s.b)("p",null,"Response: 201\nAsset created"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n  "assetId": "string",\n  "assetType": "Block",\n  "rootAsset": "string",\n  "parentAssetIds": "string",\n  "assetLocation": {\n    "floorNo": "string",\n    "totalBlockFloors": 0,\n    "parentAssets": [\n      {\n        "type": "string",\n        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n        "name": "string"\n      }\n    ]\n  },\n  "assetAddress": {\n    "uprn": "string",\n    "addressLine1": "string",\n    "addressLine2": "string",\n    "addressLine3": "string",\n    "addressLine4": "string",\n    "postCode": "string",\n    "postPreamble": "string"\n  },\n  "assetManagement": {\n    "agent": "string",\n    "areaOfficeName": "string",\n    "isCouncilProperty": true,\n    "managingOrganisation": "string",\n    "managingOrganisationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "owner": "string",\n    "isTMOManaged": true,\n    "propertyOccupiedStatus": "string",\n    "isNoRepairsMaintenance": true,\n    "fundingSource": "string",\n    "costCentre": "string",\n    "councilTaxType": "string",\n    "councilTaxLiability": "string",\n    "lhaArea": "string",\n    "isTemporaryAccomodation": true,\n    "readyToLetDate": true\n  },\n  "assetCharacteristics": {\n    "numberOfBedrooms": 0,\n    "numberOfLifts": 0,\n    "numberOfLivingRooms": 0,\n    "windowType": "string",\n    "yearConstructed": "string",\n    "assetPropertyFolderLink": "string",\n    "epcExpiryDate": "2022-05-17T17:42:12.659Z",\n    "fireSafetyCertificateExpiryDate": "2022-05-17T17:42:12.659Z",\n    "gasSafetyCertificateExpiryDate": "2022-05-17T17:42:12.659Z",\n    "elecCertificateExpiryDate": "2022-05-17T17:42:12.659Z",\n    "optionToTax": true,\n    "hasStairs": true,\n    "numberOfStairs": 0,\n    "hasRampAccess": true,\n    "hasCommunalAreas": true,\n    "hasPrivateBathroom": true,\n    "numberOfBathrooms": 0,\n    "bathroomFloor": "string",\n    "hasPrivateKitchen": true,\n    "numberOfKitchens": 0,\n    "kitchenfloor": "string",\n    "alertSystemExpiryDate": "2022-05-17T17:42:12.659Z",\n    "epcScore": "string",\n    "numberOfFloors": 0,\n    "accessibilityComments": "string",\n    "numberOfBedSpaces": 0,\n    "numberOfCots": 0,\n    "sleepingArrangementNotes": "string",\n    "numberOfShowers": 0,\n    "kitchenNotes": "string",\n    "isStepFree": true\n  },\n  "tenure": {\n    "id": "string",\n    "paymentReference": "string",\n    "type": "string",\n    "startOfTenureDate": "2022-05-17T17:42:12.659Z",\n    "endOfTenureDate": "2022-05-17T17:42:12.659Z",\n    "isActive": true\n  }\n}\n')),Object(s.b)("p",null,"400\nBad request\n",Object(s.b)("img",{alt:"API",src:n(161).default})),Object(s.b)("p",null,"500\nInternal Server Error\n",Object(s.b)("img",{alt:"API",src:n(162).default})),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"}," Put Properties "),Object(s.b)("strong",{parentName:"li"}," Purpose: ")," Update a particular asset")),Object(s.b)("p",null,"Endpoint URL: asset/{id}"),Object(s.b)("p",null,"Method: Put\nRequest put object:\nAsset object: Json object of the updated asset details e.g.\n",Object(s.b)("img",{alt:"API",src:n(163).default})),Object(s.b)("p",null,"Response:\n204\nAsset Updated\n",Object(s.b)("img",{alt:"API",src:n(164).default})),Object(s.b)("p",null,"404\nNot found"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'   {\n   "DevErrorMessages  ": ["validation errors"],\n   "UserErrorMessage": "Your item could not be updated for the following  \n          reasons..."\n   }\n')),Object(s.b)("p",null,"500"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"   Internal Server Error\n")),Object(s.b)("ol",{start:4},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"PATCH properties ",Object(s.b)("inlineCode",{parentName:"p"},"/assets/{id}")),Object(s.b)("p",{parentName:"li"},"   ",Object(s.b)("strong",{parentName:"p"}," Purpose: ")," Updates an existing asset in dynamoDB database.\nWe are using patch to allow for in place editing (single field updates)."))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Request Headers")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"If-Match")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Request Payload:")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    {\n        "assetType": "Garage | Dwelling | Estate ...",\n        "assetManagement": {\n              "agent": "HAH",\n              "areaOfficeName": "Clapton Panel Area Team",\n              "isCouncilProperty": false,\n              "managingOrganisation": "LBH, -- Hackney or TMO",\n              "managingOrganisationId": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n              "owner": "London Borough of Hackney",\n              "isTMOManaged": true,\n              "propertyOccupiedStatus" : "Vacant",\n              "isNoRepairsMaintenance" : true,\n              "fundingSource" : "TA",\n              "costCentre" : "D0720",\n              "councilTaxType" : "House in multiple occupancy (HMO)",\n              "councilTaxLiability" : "Void only",\n              "lhaArea" : "Inner East London",\n              "isTemporaryAccomodation" : true,\n              "readyToLetDate" : true\n       },\n       "assetCharacteristics": {\n              "numberOfBedrooms": "2",\n              "numberOfLifts": "1",\n              "numberOfLivingRooms": "1",\n              "windowType": "DBL",\n              "yearConstructed": "1978",\n              "assetPropertyFolderLink" : "https://drive.google.com/drive/folders/1Vo7xUYx-wRNR1NTjE4pJGV07DnYirflU",\n              "epcExpiryDate" : "31-12-2030",\n              "fireSafetyCertificateExpiryDate" : "31-12-2030",\n              "gasSafetyCertificateExpiryDate" : "31-12-2030",\n              "elecCertificateExpiryDate" : "31-12-2030",\n              "optionToTax" : true,\n              "hasStairs" : true,\n              "numberOfStairs" : 20,\n              "hasRampAccess" : true,\n              "hasCommunalAreas" : true,\n              "hasPrivateBathroom" : true,\n              "numberOfBathrooms" : 4,\n              "bathroomFloor" : 4,\n              "hasPrivateKitchen" : true,\n              "numberOfKitchens" : 4,\n              "kitchenfloor" : 3,\n              "alertSystemExpiryDate" : "31-12-2030",\n              "epcScore" : "80 C",\n              "numberOfFloors" : 8,\n              "accessibilityComments" : "There\'s a step to get into the shower",\n              "numberOfBedSpaces" : 9,\n              "numberOfCots" : 12,\n              "sleepingArrangementNotes" : "Ground Floor",\n              "numberOfShowers" : 4,\n              "kitchenNotes" : "Shared, on 1st and 3rd floors",\n              "isStepFree" : true\n       },\n       "rootAsset": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n    }\n')),Object(s.b)("p",null," ",Object(s.b)("strong",{parentName:"p"},"Response:")),Object(s.b)("p",null," Code 200 OK returning the ",Object(s.b)("a",{parentName:"p",href:"#example-full-payload"},"full payload"),"."),Object(s.b)("h2",{id:"example-full-payload"},"Example full payload"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n       "Id": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n       "assetId": "00007918",\n       "assetType": "Garage | Dwelling | Estate ...",\n       "assetLocation": {\n              "parentAssets": [\n              {\n                     "id": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n                     "type": "sub-block",\n                     "name": "Newcombe House (1-18)"\n              },\n              {\n                     "id": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n                     "type": "block",\n                     "name": "Newcombe House (1-35)"\n              },\n              {\n                     "id": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n                     "type": "estate",\n                     "name": "Newcombe House Estate Powell Road"\n              }\n              ],\n              "floor": "G",\n              "totalBlockFloors": "5"\n       },\n       "assetAddress": {\n              "uprn": "100021065786",\n              "addressLine1": "Powell Road",\n              "addressLine2": "Hackney",\n              "addressLine3": "London",\n              "addressLine4": "",\n              "postCode": "E5 8DH",\n              "postPreamble": "1 Newcome House"\n       },\n       "assetManagement": {\n              "agent": "HAH",\n              "areaOfficeName": "Clapton Panel Area Team",\n              "isCouncilProperty": false,\n              "managingOrganisation": "LBH, -- Hackney or TMO",\n              "managingOrganisationId": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n              "owner": "London Borough of Hackney",\n              "isTMOManaged": true,\n              "propertyOccupiedStatus" : "Vacant",\n              "isNoRepairsMaintenance" : true,\n              "fundingSource" : "TA",\n              "costCentre" : "D0720",\n              "councilTaxType" : "House in multiple occupancy (HMO)",\n              "councilTaxLiability" : "Void only",\n              "lhaArea" : "Inner East London",\n              "isTemporaryAccomodation" : true,\n              "readyToLetDate" : true\n       },\n       "assetCharacteristics": {\n              "numberOfBedrooms": "2",\n              "numberOfLifts": "1",\n              "numberOfLivingRooms": "1",\n              "windowType": "DBL",\n              "yearConstructed": "1978",\n              "assetPropertyFolderLink" : "https://drive.google.com/drive/folders/1Vo7xUYx-wRNR1NTjE4pJGV07DnYirflU",\n              "epcExpiryDate" : "31-12-2030",\n              "fireSafetyCertificateExpiryDate" : "31-12-2030",\n              "gasSafetyCertificateExpiryDate" : "31-12-2030",\n              "elecCertificateExpiryDate" : "31-12-2030",\n              "optionToTax" : true,\n              "hasStairs" : true,\n              "numberOfStairs" : 20,\n              "hasRampAccess" : true,\n              "hasCommunalAreas" : true,\n              "hasPrivateBathroom" : true,\n              "numberOfBathrooms" : 4,\n              "bathroomFloor" : 4,\n              "hasPrivateKitchen" : true,\n              "numberOfKitchens" : 4,\n              "kitchenfloor" : 3,\n              "alertSystemExpiryDate" : "31-12-2030",\n              "epcScore" : "80 C",\n              "numberOfFloors" : 8,\n              "accessibilityComments" : "There\'s a step to get into the shower",\n              "numberOfBedSpaces" : 9,\n              "numberOfCots" : 12,\n              "sleepingArrangementNotes" : "Ground Floor",\n              "numberOfShowers" : 4,\n              "kitchenNotes" : "Shared, on 1st and 3rd floors",\n              "isStepFree" : true\n       },\n       "rootAsset": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n       "parentAssetIds": "6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6#6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6#6f22e9ae-3e8a-4e0e-af46-db02eb87f8e6",\n       "Links":  [\n              {\n                     "Activities":  "https://activitiesapi.hackney.gov.uk/propertyactivities/[propertyId]"\n              },\n              {\n                     "Documents":  "https://documentsapi.hackney.gov.uk?type=property&id=[propertyId]"\n              },\n              {\n                     "EPC Certificate" : "https://assetapi.hackney.gov.uk/epc-cert/[00001111]"\n              },\n              {\n                     "Tenancies": "https://tenanciesapi.hackney.gov.uk/tenancies[propertyId]"\n              },\n              {\n                     "Facilities": "https://assetsapi.hackney.gov.uk/facilities/[00001111]"\n              }\n       ]\n}\n')))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return n?r.a.createElement(f,o(o({ref:t},l),{},{components:n})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);