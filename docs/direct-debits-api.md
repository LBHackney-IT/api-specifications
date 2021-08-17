---
id: direct-debits-api
title: Direct Debits API
---

## Purpose
To identify all information to be captured with regards to the Direct Debit domain. 
As part of our solution, we are proposing a housing stream to develop the first version of this service as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more citizen-centric self-service capability, enabling even more service transactions to be carried out online. 

## Functions
- Actual Direct Debits - The direct debits that are set up to an account. Direct debits can be set up for one or more days.
- Export Direct Debit submission file
- Retain a record of the Direct Debit submission file
- Send submission file to the bank
- Manage activities around direct debit maintenance - updates, suspensions cancellations
- Provide information on active direct debits
- Initial direct debit instruction


## Vision
- A single, centralized data source, holding all the direct debit data for possible services that require recurring payments such as housing rent, council tax, licensing.
- A reusable microservice API used for managing council direct debits.
- Avoidance of any duplication of data, a normalised view and consistency across the board.
- Reducing development costs across all streams/domains.


## User Needs
### Direct Debits:
1. As an Income/Finance Officer, I want to be able to create, cancel or edit direct debits so that I can maintain payments of ongoing services from residents.
2. As a Developer, I would like to be able to save the direct debit information in the DB as and when there is a change or a new record is created so that I can be confident that the direct debit record is stored correctly.
2. As a Data officer I would like to be able to get the history of all maintenance activity on direct debits so that I can provide insightful reports to stakeholders.

### Direct Debit Submissions:
As an Income/Finance Officer, I would like to be able to export and send direct debit submission files to the bank so that direct debits can be processed.
As a Developer, I would like to save the submission information in the DB as and when it is created so I have an audit record of submissions sent to the bank.

### Direct Debit Maintenance
As an Income/Finance Officer, I want to be able to make changes to the direct debit record so that I can be confident that the amount being charged can be kept up to date.
As a Developer, I would like to record the direct debit maintenance information in the database with a direct relationship to the direct debit so I can maintain a history of changes to the direct debit record.

## Data Meetup Outcome
https://ideaflip.com/b/eqjpktpctwe3/

## Entity: Direct Debits
### Endpoints to be created
POST **/direct-debit**

POST **/direct-debits/export**

GET **/direct-debits?targetType={targetType}&targetId={targetId}&status={status}&collectionDate={collectionDate}**

GET **/direct-debit/{id}**

### Request Payload - Direct Debit Exports
```
{
 "fileType": "dat",
  "selectedDirectDebitLists": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  ]
}
```

### Response Payload - Direct Debit Exports ###
```
{
    “exportFile” : [binary file]
}
```

### Request Payload - Post Direct Debit ###
```
{
  “targetType”: “Tenant”,
  “targetId”: "d8cac2f8-e999-48d6-8a95-d519fcd4af6c",
  "firstPaymentDate": "2021-06-01T07:58:17 -01:00",
  "paymentReference": 166761323,
  "accountNumber": 165140412,
  "fund": "HSGSUN",
  "acc": 0,
  "trans": 17,
  "accountHolders": [
    {
      "name": "Patterson Key"
    }
  ],
  "bankAccountNumber": 118669346,
  "branchSortCode": "01-01-01",
  "serviceUserNumber": "",
  "reference": "",
  "bankOrBuildingSociety": {
    "to": "",
    "name": "",
    "address1": "",
    "address2": "",
    "address3": "",
    "postcode": ""
  },
  "status": [new, active, cancelled]
}
```
### Response Payload ###
```
{
    "id": "97ac0026-0e90-47c7-9b43-9ff4071c1371",
    “targetType”: “Tenant”,
    “targetId”: "d8cac2f8-e999-48d6-8a95-d519fcd4af6c",
    "firstPaymentDate": "2021-06-01T07:58:17 -01:00",
    "paymentReference": “166761323”,
    “createdDate”:"2021-06-01T07:58:17 -01:00",
    “cancellationDate”:"2021-06-01T07:58:17 -01:00",
    "accountNumber": “165140412”,
    "fund": "HSGSUN",
    "acc": 0,
    "trans": 17,
    "accountHolders": [
        {
            "name": "Patterson Key"
        }
    ],
    "bankAccountNumber": “118669346”, - must be 8 digits, can be padded out with leading 0s.
    "branchSortCode": "01-01-01",
    "serviceUserNumber": "",
    "reference": "",
    "bankOrBuilddingSociety": {
        "to": "",
        "name": "",
        "address1": "",
        "address2": "",
        "address3": "",
        "postcode": ""
    },
    "additionalAmount": 98.96,
    "preferredDate": 1,8,16,18,24  
    "status": "new",
    “directDebitMaintenance”: [
        {
            "id": "84113968-6076-4eba-b1b2-111305533ce6",
            "directDebitId": "ccfce192-04db-4e6e-8fb4-79a6adabc16e",
            "previousAdditionalAmount": 98.96,  
            "previousPreferredDate”: 1,
            “previousStatus”: “new”
            "newAdditionalAmount": 105.43, 
            "newPreferredDate”: 8,
            “newStatus”: “active”
            "reason": "string",
            "date": "2021-04-19T02:53:16 -01:00",
            "status": "Applied, Pending, Error",
            “errorMessage”: “Record not found”
        }
    ]
}
```

## Entity: Direct Debit Submissions ##
### Endpoints to be created ###
POST **/direct-debit-submission-file**

GET **/direct-debit-submission-file?status={status}&dateToCollectAmount={date}**

### Dependant Entities ###
- Direct Debit

### Request Payload ###
```
{
  "fileName": "",
  "directDebits": [ 
      // List of DDs 
      ],
  "dateCreated": "2021-01-01T00:00:00.000Z",
  "dateToCollectAmount": "2021-07-01T00:00:00.000Z",
  "status": "string"
}
```

### Response Payload ###
```
{
  "id": "54dac8ca-707e-498a-8611-33fff0377fa2",
  "fileName": "",
  "directDebits": [ 
      // List of DDs 
      ],
  "dateCreated": "2021-01-01T00:00:00.000Z",
  "dateToCollectAmount": "2021-07-01T00:00:00.000Z",
  "status": "string"
}
```
## Entity: Direct Debit Maintenance ##
### Endpoints to be created ###
POST **/direct-debit/{directDebitId}/direct-debit-maintenance**

GET **/direct-debit/{directDebitId}/direct-debit-maintenance/{id}**

### Dependant Entities ###
- Direct Debit

### Request Payload ###
```
{
    "id": "84113968-6076-4eba-b1b2-111305533ce6",
    "directDebitId": "ccfce192-04db-4e6e-8fb4-79a6adabc16e",
    "previousAdditionalAmount": 98.96,  
    "previousPreferredDate”: 1,
    “previousStatus”:”new”,
    "newAdditionalAmount": 105.43, 
    "newPreferredDate”: 1, 
    “newStatus”: “active”,
    "reason": "string",
    "date": "2021-04-19T02:53:16 -01:00",
    "status": "Applied, Pending"
}
```

### Response Payload ###
```
[
    {
        "id": "84113968-6076-4eba-b1b2-111305533ce6",
        "directDebitId": "ccfce192-04db-4e6e-8fb4-79a6adabc16e",
        "previousAdditionalAmount": 98.96,  
        "previousPreferredDate”: 1
        “previousStatus”:”new”,
        "newAdditionalAmount": 105.43, 
        "newPreferredDate”: 1,
        “newStatus”:”active”,
        "reason": "string",
        "date": "2021-04-19T02:53:16 -01:00",
        "status": "Applied, Pending"
    }
]
```

### Considerations ###
- Because we want to maintain entity relationships between direct debits and direct debit submissions as well as between direct debits and direct debit maintenance, would it be more appropriate to store this data in a relational database or could we use DynamoDb and still be able to maintain these entity relationships without any additional overhead, eg costs.
