---
id: processes-api
title: Processes API
---


## Context
As part of Manage My Home, there is a need to build a workflow engine that will allow housing officers and other members of staff to initiate new workflows, upload documents, assign them and capture form information. In addition, where possible, various aspects of the workflow should be automated in order to reduce the dependency on housing officers' time to carry out repeatable steps.

## Vision
- Store the state of a workflow process in order to be able to resume it at another time
- Store the allowed next steps in the process
- Enable assignment of a process between patches
- Enable capture of form data
- Allow documents to be attached to a process
- Enable developers to quickly create and configure new and existing processes

## User Needs
As a service user, I would like to be able to:
- Initiate a workflow process so that I can keep track of progress
- Assign a process to a specific patch
- Capture form data related to the process
- Upload documents to the process

As a consumer of this API, I would like to:
- Initialise a new process
- Get the status of an existing process
- Update an existing process
- Progress an existing process

As a developer, I would like to:
- Easily manage the configuration of processes
- Identify and re-use as much common code as possible across the processes
- Include sufficient levels of test coverage over the processes


#### API Endpoints:
```
GET /api/v1/process/process-name/{id}/
POST /api/v1/process
PATCH /api/v1/process/process-name/{id}
```

#### Payload

```json
{
  "processName": {
    "id": "dc3eb7a0-73b2-4ad4-a267-622510fa06cb",
    "currentState": {
      "state": "DocumentsAttached",
      "permittedTriggers": [
        "SubmitApplication"
      ],
      "assignment": {
        "patch": "patch1"
      },
      "processData": {
        "targetId": "f83540f9-034a-7bfe-9348-7094dd0e0f46",
        "formData": "{}",
        "documents": [
          "00578577-91c6-4244-a72c-c757fefe8d87",
          "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",
          "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",
          "7d791694-e72d-44d5-aeee-9d2c400abdd5",
          "5658204f-f8f4-44c4-ad11-3345d295ac33"
        ]
      },
      "createdAt": "2021-09-24T09:30:00Z",
      "updatedAt": "2021-09-24T09:30:00Z"
    },
    "processStates": [
      {
        "state": "ApplicationStarted",
        "permittedTriggers": [
          "AttachDocuments"
        ],
        "assignment": {
          "patch": "housingofficers"
        },
        "processData": {
          "targetId": "f83540f9-034a-7bfe-9348-7094dd0e0f46",
          "formData": {
            "title": "Mr",
            "firstName": "Patrick",
            "middleName": "",
            "surname": "Williams"
          },
          "documents": null
        },
        "createdAt": "2021-09-24T09:30:00Z",
        "updatedAt": "2021-09-24T09:30:00Z"
      },
      {
        "state": "DocumentsAttached",
        "permittedTriggers": [
          "SubmitApplication"
        ],
        "assignment": {
          "patch": "housingofficers"
        },
        "processData": {
          "targetId": "f83540f9-034a-7bfe-9348-7094dd0e0f46",
          "formData": "{}",
          "documents": [
            "00578577-91c6-4244-a72c-c757fefe8d87",
            "c5f358f8-a57f-4b0a-bc49-c8ccc4e955d5",
            "bb6b92c9-537b-4fae-95a8-c17d9a190aa8",
            "7d791694-e72d-44d5-aeee-9d2c400abdd5",
            "5658204f-f8f4-44c4-ad11-3345d295ac33"
          ]
        },
        "createdAt": "2021-09-24T09:30:00Z",
        "updatedAt": "2021-09-24T09:30:00Z"
      }
    ]
  }
}
```



