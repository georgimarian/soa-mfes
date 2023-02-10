# soa-mfes

Micro frontend homework for SOA course.

This application provides the frontend (using webpack module federation) and backend for a Vacation Planner application.
The calendar of the planner is its separate React App, while the Planner itself is the wrapper.

## Front-end

For frontend, used starter code from [https://github.com/jherr/wp5-intro-video-code] for module federation.

Split the planner into the calendar and the wrapper. The calendar is its own application, while the planner imports the calendar. The planner handles the API calls.

## Back-end

For backend, I used The list of public holidays coming from [Holiday API](https://holidayapi.com/countries/de/2022).
The backend is split into two express applications, weekdays and holidays. Both (unfortunately) call the holiday API, but handle different aspects of it. 

## Third party library

The application calls the Holiday API, as mentioned above.

## Diagrams
### UML Diagram
![Diagram](./assets/soa-uml.png?raw=true "Title")
