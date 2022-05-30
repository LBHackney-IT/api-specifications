---
id: contracts_api
title: Contracts API
---
## Purpose

The temporary housing relationship between various people requires an agreement in place to enbable the use of the property by Hackney as a temporary accomodation asset. A landlord/hostel manager for example.

As part of our solution, we are proposing to develop the Contracts API. This API will be designed to keep the asset and people models clean and provide a link between these objects as well as holding all the contractual information between the parties.

## Our users and their needs

** As a service user I need contract information so that: **

- I can identify the responsible people at the property to contact.
- I can identify the contract details such as rates, contract start and end dates.

## Workshops

This API was discussed at TDA 25/05/22 off the back of the need to move data off the asset data model.
- https://docs.google.com/document/d/1MYJfzbop_yJhVGlSihhDmAhga6yrbxgCsZWujkYs8AA/edit?userstoinvite=lisa.stidle%40hackney.gov.uk#heading=h.xonwymseh0hm

## Endpoints to be created

### Get Contracts:

**Purpose:**  
Gets one or more Contracts from the Contract table.  Requests can be made by specifying a ref path parameter or searching for Tenures based on a series of parameters.

**Endpoint URL's:**
- /contracts
- /contracts/?firstname
- /contracts/?lastname
- /contracts/{contractId}

**Request Query String parameters:**

- firstname - persons first name
- lastname - persons last name


**Request Path Parameters:**
- contractId - the specific GUUID id of the contract

**Response:**
- 200 OK
```
{
    type: Temp Hostel GF,
    targetId: 116a2a9e-9eb4-0966-120a-238689e3e265,
    targetType: asset,
    startDate: 26/12/2022,
    endDate: 25/12/2023,
    persons: [
        {
            id: 986a2a9e-9eb4-0966-120a-238689e3e265,
            firstname: John,
            lastname: Doe,
            email: john@doe.com,
            type: Hostel manager
        },
        {
            id: 126a2a9e-9eb4-0966-120a-238689e3e269,
            firstname: Joe,
            lastname: Soap,
            email: joe@soap.com,
            type: Caretaker
        }
    ],
    rates: [
        {
            frequency: weekly,
            value: 85
        },
        {
            frequency: nightly,
            value: 12
        }
    ]
}
```

### POST Contracts:

**Purpose:**
Create a new Contract

**Endpoint URL's:**
/contracts

**Request object:**
```
{
    type: Temp Hostel GF,
    targetId: 116a2a9e-9eb4-0966-120a-238689e3e265,
    targetType: asset,
    startDate: 26/12/2022,
    endDate: 25/12/2023,
    persons: [
        {
            id: 986a2a9e-9eb4-0966-120a-238689e3e265,
            firstname: John,
            lastname: Doe,
            email: john@doe.com,
            type: Hostel manager
        },
        {
            id: 126a2a9e-9eb4-0966-120a-238689e3e269,
            firstname: Joe,
            lastname: Soap,
            email: joe@soap.com,
            type: Caretaker
        }
    ],
    rates: [
        {
            frequency: weekly,
            value: 85
        },
        {
            frequency: nightly,
            value: 12
        }
    ]
}
```
**Response:**
- 201 Created
```
{
    type: Temp Hostel GF,
    targetId: 116a2a9e-9eb4-0966-120a-238689e3e265,
    targetType: asset,
    startDate: 26/12/2022,
    endDate: 25/12/2023,
    persons: [
        {
            id: 986a2a9e-9eb4-0966-120a-238689e3e265,
            firstname: John,
            lastname: Doe,
            email: john@doe.com,
            type: Hostel manager
        },
        {
            id: 126a2a9e-9eb4-0966-120a-238689e3e269,
            firstname: Joe,
            lastname: Soap,
            email: joe@soap.com,
            type: Caretaker
        }
    ],
    rates: [
        {
            frequency: weekly,
            value: 85
        },
        {
            frequency: nightly,
            value: 12
        }
    ]
}
```

### PUT Contracts:

**Purpose:**
Updates a new Contract

**Endpoint URL's:**
- /contracts/{contractId}

Coming soon

### DELETE Contracts:

**Purpose:**
Removes a new Contract

**Endpoint URL's:**
- /contracts/{contractId}

Coming soon