## Overview
A simple React.js web app to fetch houses from the API and display them using the Infinite Scroll.

## Assumptions
Using the given API end point, I accessed the houses using the default setting of 10 houses per page while accessing all the pages

## Architecture
The architecture is based off of Client-Server suing React components.

Client: The Client is developed using HTML(JSX), CSS, React,Bootstrap and by making use of container(Stateful) and component(Stateless) principles of React called the Houses.js and Layout.js respectively in the homevision folder.

Server: Since the client is making continuous HTTP get requests to the API using Axios, that becomes the server.

## Performance
The Internal Server Error (code 503) is handled by setting a timeout of 1.5 seconds before making the successive GET request to the API after the error is caught.This simply increases the performance since we do not make continuous API calls.

## Design
The Design of the App is pretty simple with a background image and a header.Have also made use of Card component from React Bootstrap to make the house information look presentable.

## Usage
```
cd homevision
npm start
```
