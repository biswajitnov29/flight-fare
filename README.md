# Flight Fare
Display flights fares for selected month in calendar view

 ```bash
 This Application worked best in Chrome browser
 ```

## Table of contents

- [Feature's included](#features-included)
- [Dependencies](#dependencies)
- [Project Setup](#project-setup)
- [Run Application](#run-application)
- [Build Application](#build-application)
- [Running Unit Tests](#running-unit-tests)
- [Running e2e tests] (#running-e2e-tests)

## Feature's included

- [x] Search flight with lowest price for routes between these cities,
  - Singapore,
  - Kuala Lumpur,
  - San Francisco International,
- [x] Validate `From` and `To` place, so that these should not be same,
- [x] Component based project structure,
- [x] Integrated Full Calendar (https://fullcalendar.io/) with Angular,
- [x] Integrated Skyscanner Flight Search API with Angular, 
- [x] Common service for all re-usable code,
- [x] Notification alert when error occure in rest service ( Using Angular Animation ),
- [x] Unit test with jasmine and karma,
- [x] Configure End-To-End testing with tested test-case. 

## Dependencies:

- Angular – Latest version (8.2.2),
- Full-Calendar – 4.3.1,
- Moment –2.24,
- Rxjs,
- Zone.js,
- Karma,
- Jasmine,
- Typescrip

## Project Setup

- Download and install Node.js (https://nodejs.org/en/) to your computer,
- Open `Node Command Prompt` and run command `npm  –v` to check node version,
- Run command ` npm install -g @angular/cli ` to install angular-cli,
- Angular-Cli helps to create/run/build project,
- Select project directory in `Node Command Prompt` and run `ng –v’ to check version,
- Run ` npm install ` to install all project dependencies.

## Run Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 ```bash
 This Application worked best in Chrome browser
 ```

## Build Application

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests

Run `ng e2e` to execute the end-to-end test cases.
