---
id: patches-api
title: Patches API
---

## Context
As part of Manage my Home and Manage areas projects, we looked at how patches and areas are managed and what data we store related to those. There has been a need identified to create a new data entity and microservice to store and manage this data as it previously lived in UH and Dynamics CRM 365. Patches data is important as it is used for determining the responsible entity for a patch/area - whether that’s an individual or a group. The person/group responsible for a patch is usually responsible for dealing with processes/actions related to tenures on properties that fall within the given patch.

## Vision
-   Single, centralized data store for our list of patches and areas,   regardless of which domain they apply to.
-   Single, reusable microservice that manages our areas and patches data, including reassignment. 
-   Microservice and data domain designed with extensibility in mind, so future service areas could potentially re-use it and extend it if / when future user needs are identified


## User needs
-   As a MMH user, I want to be able to see which patch is responsible for a property.
-   As a MMH user (manager), I want to be able to re-assign the responsible officer/s for a given patch.
-   As a MMH user, I want to know which officer/s is/are responsible for a patch or area.
-   As a MA user, I want to know which cases are allocated to the patch I am assigned to so that I can focus only on the cases that are relevant to me.
-   As a MA manager I want to be able to easily assign arrears cases to a group of workers so I can manage casework effectively.
Workshop outcome


We looked at two services - Manage a Tenancy (MaT) and Manage Areas(MA) and concluded that patches and areas are different in the context of the two services. Although they do refer to geographical areas, those areas are different based on the service. Further to this, in the context of MA, patches for leaseholders are different - not based only on a geographical area. Reassignment is also different between the two applications. With MaT, reassignment of the responsible officer/s for a patch happens when someone is off sick, on maternity leave, etc. Once a patch is reassigned, the responsible officer would see all processes/action items that are related to their patch in their work tray. With MA, everyone can see all items in their work tray, which leads towards the concept of a “group” responsible for a patch, rather than individuals. 

However, despite the different business processes of dealing with a patch, the data we store for a patch area at its core is the same.
Patch/area code/name
Responsible entity (whether that’s an individual or a group)

For this reason, we propose a single, simple data entity to be created to contain a list of all patches and areas we have in the various services, as well as a reference to the responsible entity.

Following that, each individual service can use this data to develop their custom business logic. 



## API Endpoints:

GET /patch/{id}
GET /patch?parentId={parentId}
DELETE /patch{id}/responsible-entity/{responsible-entity-id}
POST /PATCH
PATCH /patch{id}/responsible-entity/{responsible-entity-id}

#### Update ResponseObject:
```json
{
  "id": "",
  "name": "",
  "type": "Housing officer/group/etc"
}
```

#### Payload:
```json
{
   "Id":"guid",
   "parentId": "guid",
   "name":"CP7",
   "type":"Patch / area",
   "domain":"MMH",
   "responsibleEntities":[
      {
         "id":"",
         "name":"",
         "type":"Housing officer/group/etc"
      },
      {
         "id":"",
         "name":"",
         "type":"Housing area manager"
      }

   ]
}
```

The above data will then be saved against each asset record and the consuming service can decide which patch data to display by using the domain data associated. 


