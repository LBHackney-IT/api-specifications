---
id: activities_api
title: Activities API
---

## Purpose:
To identify all information to be captured with regards to the Activities(Record logging) domain.
As one of the core entities for all interactions with the council, we understand that the Activities is an entity which is common between all three streams (Finance, Tenants & Leaseholders,Repairs) of MTHF and possibly other datasets as well as it is only meant to log all activities against the entity in need.

As part of our solution, we are proposing to develop the first version of this API as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more self-service capability, enabling even more service transactions to be carried out online.

Our goal is to ensure we build reusable components as part of the MFTH stream and thereby extending to other domains if they need similar information. This will enable us to eliminate the silos mechanism for asset information collection and help us to present a single view on it which will also help us to reduce the future development cost and yield a better ROI.

## Vision

- A single, centralized data source, holding all activities data, updated by multiple services.
- A reusable microservice API used for managing that data.
- Single data source to identify all activities related to different domains such as Housing etc to avoid any duplication of data,a normalised view and consistency across the board.

## Our users and their needs

**As a service user I would like to see the Activities so that: **
- I can see my rent being charged
- I can see my housing benefits
- I can see payments which have previously been made
- I can see account adjustments ( e.g cancellation of service)
- I can be provided with recharge repairs details, billing and payment details


** As a leasehold/shareholder  service user I would like to see Activities so that: **
- I can see my estimated service charge
- I can my balancing charge
- I can see payments which have previously been made
- I can see account adjustments
- I can see if I have a major works accounts and complete transactions if needed
- I can be provided with recharge repairs details,  billing and payment details

** As a consumer I need to have an API specification (e.g. Swagger doc, README), so that: **
- I can have a clear understanding of the endpoints which are available
- I know what the requests and responses should look like
- I need to be able to query for an individual activity record or list of activities so that
I can use the information as per the service need in question
- I would like to have the option for paginated results so that
the query duration doesn’t impact the performance of the frontend negatively.
- I can set the page size for large results.


** As a developer I need to create an API specification so that: **
- I can provide clear documentation about endpoints and payloads, etc.
- I can help the external agency developer on quick onboarding.
- I need to be notified when errors occur and have visibility of errors (e.g logs) and issues on the API, so that I can fix them as soon as possible.
- I need to make sure that access to the API is secure via tokens so that only authorised users can make requests to this API.
-  I need to know the structure and content of the entities I am exposing data for, so that I know I am meeting user needs.
- I need to know which data this API will be concerned with, so that
endpoints are relevant;
- I don’t duplicate data provided by other platform APIs.


** As an application  support analyst: **
 - I need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data.

** As a data analyst I need to connect to the API via Qlik so that: **
- data is easy to interpret and available for further reporting purposes.


# Workshop outcome
## Workshop 1

Summary

The workshop was based on identifying different sources that might contribute towards the Activities API. As activities are not representing the complete history against the entity and each dataset has their own wrapper around the activities model it will be best if we have a single repository to handle all activities with filters based on the domain and entities we are dealing with.

** https://ideaflip.com/b/5xu3waqetkxg/ **

## Benefits of centralised Activities repository
1. Single view of all Activities
2. Activities model
3. Better organisation of data
4. Improve analysis
5. Quick troubleshooting

## API Endpoints
- Create activity history
- Get Activity History

**Payload**
https://app.swaggerhub.com/apis-docs/Hackney/activitiesApi/1.0.0 