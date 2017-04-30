# Citizen Service Requests App

Meteor.js app with a React UI layer and Mongodb
http://asheville.jonathangoley.com/

## Overview
I chose to create the application with Meteor/React/Node/MongoDB/(Jade and Stylus)
because it's what I'm most familiar with. I do have expereince writing
SQL queries but its been a few years. A great advantage of Meteor is its
build system which allows for fast prototyping.
#### Market Research
I did some research looking for existing applications with similar features to
determine direction.
http://statelocaltryit.maps.arcgis.com/apps/dashboard/index.html#/b55ff60f627148c3ad5e401786952916
http://cagismaps.hamilton-co.org/csr/cincinnati
http://gis.fwb.org/CitizenServiceRequest/default.htm
http://maps.kcmo.org/apps/311ServiceRequest/
http://dashboard.southwindsor.org/gis-web/swfv23pub/
https://gov.seeclickfix.com/government/


## Design/UI
Because of time restraints I concentrated on functionality over UI (its ugly, I know).
I sketched out ideas but didn't flush those out into wireframes or mockups.
Typically I use Adobe's Expereince Design (XD) to create wires and mockups.
XD offers the helpful features of actually wiring views together to create
interactive mocks. Here are a few that I've put together while working for
EcoHealth Alliance:
#### EIDR-Connect:
- wires: https://xd.adobe.com/view/1fbd83eb-4bc9-44e1-9f53-0c127c7e97ab/
- mocks: https://xd.adobe.com/view/6e5c7960-a51b-4ed2-91a7-aa502cfec8c2/
         https://xd.adobe.com/view/f914c5e2-3b36-4080-aae2-66eef3e8ed94/

#### GoodQuestion (mobile app)
- https://xd.adobe.com/view/1fbd83eb-4bc9-44e1-9f53-0c127c7e97ab/

_(click on the image to see clickable areas)_

## Data

I made a few changes to the data.
The application as it stands has two collections:
`RequestTypes` and `Requests`
I created `RequestTypes` to make it easier to list and query the `Requests` collection
I added a few properties to the `Requests` collections:
- `location`: lattitude and longitude (helped to show request locations in map) I used the google geocode API to lookup the location by address
- `zipCode` : will help when querying and analyzing
These changes are made when the meteor app starts.

## Functionality

- counts for request types
- graph showing requests over time (based on monthly totals)
- average response time for request
- map showing groups of requests by type
