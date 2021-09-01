---
id: housing_search
title: Housing Search API
---
## Purpose

To define how a new proposed search service will work. The microservice will be reusable across different housing services and will provide searching functionality for both people and properties. The service will make use of ElasticSearch as a search engine (for performance benefits and to support free-text and fuzzy search) and will aggregate assets and people data for ease of search purposes.

ElasticSearch’s data store will be updated at real time - this will be implemented using event driven architecture, where each microservice serving a specific data domain will create an event each time new data is added or updated.

ElasticSearch will be updated by a Lambda function, holding business logic, that has subscribed to events and thus will have data kept up-to-date in real time.

## Vision

- A reliable and efficient search service, that allows for free-text and fuzzy search for people and properties.
- A microservice that does not impact user experience with poor performance related to searching data from multiple data domains.

## User Needs

** As a service: **
- I want the ability to view the details of the results returned in a search
- So that I can easily look through the different results and make the correct selection and proceed to the profile that I was looking for

** Search by : **
1. Person - First name, Middle name, Last name
2. Asset - Address kine 1, Postcode, Asset type

## API Specification

https://app.swaggerhub.com/apis/Hackney/housingSearchApi/1.0.0

## Architecture diagram 

https://drive.google.com/file/d/1UYnYkGrOn83KXZgoCcVwb8tVg5MNehRz/view

The search indexes will be kept in sync via events. In particular there will be a listener per each search index which will subscribe to the relevant publishers.
Benefits of having an event driven architecture

- Scalability :
- Flexible approach:
- Fault Tolerance :
- Durability:
- Event flow tracking

## Benefits of using ElasticSearch and indexes

Allows to search on fields which do not exist only on platform APIs. It allows to do aggregate searches without dependencies which means it is adaptable for any services wishes to use. Major advantage is that it provides huge improvements on performance of these search queries.These are other benefits offered by Elastic search are as follows

1. Easy Filtering
2. Advanced searches
3. Better performance for read queries.
4. Drives distributed architecture
5. Schema free
6. High Scalable

** Dependencies : **
- By person
- Person Information
- Tenure
- Alerts

** By Asset **
- Asset Information
- Tenure
- Alert

** By Tenure **
- Tenure
- Person Information
- Alert
