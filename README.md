# Habit Tracker Capstone
This app helps users create and maintain habits.

## Working Prototype (to do later)
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/


## User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

#### Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it



### Wireframes (to do now)
Landing/Login Page
:-------------------------:
![Landing/Login Page](/github-images/wireframes/landing-page.jpg)
Categories Page
![Categories Page](/github-images/wireframes/categories.jpg)
Habit Drop Down Page
![Categories Page](/github-images/wireframes/habit-drop-down.jpg)
Habit Drop Down Alternate Page
![Categories Page](/github-images/wireframes/habit-drop-down-2.jpg)

## Screenshots (to do later)
Landing/Login Page
:-------------------------:
![Landing Page](/github-images/screenshots/login-page-screenshot.png)
Landing/Register Page
![Register Page](/github-images/screenshots/login-page-screenshot.png)

## Functionality (to do now)
The app's functionality includes:
* Every User has the ability to create an account

## Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## Front-end Structure - React Components Map (to do later)
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -

## Back-end Structure - Business Objects (to do later)
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


## API Documentation (to do later)
API Documentation details:
* get all users

## Responsive (done)
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* add more functionality

## How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts 
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test