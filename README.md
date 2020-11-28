# Habitual Habits Capstone
Habitual Habits is an application that helps users create and maintain habits.

## Working Prototype (to do later)
You can access a working prototype of the React app here: https://habit-tracker-capstone-client.vercel.app/ and Node app here: https:/habit-tracker-capstone.herokuapp.com/api -->


## User Stories
This app is for logged in users and visitors

#### Landing Page
* As a new user 
* I would like to understand what the page is about
* so that I can use the app efficiently 
* As a new user 
* I want to be able to create a new account
* so that I can access the habit tracker
* As a new user 
* I want to be able to sign in into my account
* so that I can start using my tracker

#### Dashboard Page
* As a returning user
* I would like to view a list of my habits
* As a returning user 
* I would like to be able to log out of my account

#### Add Habit Page
* As a returning user 
* I want to be able to add new habits to my dashboard

#### Habit List Page
* As a returning user
* I want to be able to view a list of my habits

#### Mobile Version
* As a new and returning user 
* I would like to view the website on both mobile devices and desktop computers
* so that I can use it on multiple devices

#### Accessibility
* As a user with disabilities 
* I would like to navigate the website with the use of keyboard
* so that I can use the website 
* As a user with disabilities 
* I would like for the website to keep high contrast for visibility
* so that I can see the displayed web app accordingly
* As a user with disabilities 
* I would like for the website to be accessible (ARIA)
* so that I have no problems with using the app
* As a user with disabilities 
* I would like for the website to be well structured for the screen readers’s accesibility
* so that I can use screen reader efficiently


### Wireframes
Landing/Login Page
:-------------------------:
![Landing/Login Page](/github-images/wireframes/landing-page.jpg)
Categories Page
![Categories Page](/github-images/wireframes/categories.jpg)
Habit Drop Down Page
![Categories Page](/github-images/wireframes/habit-drop-down.jpg)
Habit Drop Down Alternate Page
![Categories Page](/github-images/wireframes/habit-drop-down-2.jpg)

For Greybox Wireframes Visit https://bmbachow.github.io/habit-tracker-capstone-client/greybox-wireframes/

## Screenshots
Landing/Login Page
:-------------------------:
![Landing Page](/screenshots/add-habit.png)
Landing/Register Page
![Register Page](/screenshots/login.png)
![Habits List Page](/screenshots/habits-list.png)
![Add Habit Page](/screenshots/add-habit.png)
![Side Bar](/screenshots/side-bar.png)

## Functionality
The app's functionality includes:
* Every visitor has the ability to create an account
* Every registered user can log in to his/her account 
* Every registered user can view a list of their habits
* Every registered user can add habits to the list

## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __RegistartionPage.js__ (stateful)
        * __LoginPage.js__ (stateful)
        * __Navigation.js__ (stateless)
            * __Backdrop.js__ (stateless) 
            * __SideDrawer.js__ (stateless)
            * __DrawerToggleButton.js__ (stateless)
        * __Dashboard.js__ (stateful)
        * __AddHabitPage.js__ (stateful) 
        * __HabitListPage.js__ (stateful) 

## Back-end Structure - Business Objects

* users (database table)
    * id 
    * user_name (only lowercase and uppercase letters and dash)
    * user_password ( at least one number, one lowercase and one uppercase letter, at least eight characters that are letters, numbers or the underscore)
    * user_email (email validation)

* habits (database table)
    * id 
    * user_id (connnection with id from users table)
    * name
    * times_completed (numeric)
    * notes (varchar 255)

## API Documentation
API Documentation details:
* get all habits by users => /api/habit/user/:user_id
```json
[
    {
        "id": 27,
        "user_id": 3,
        "name": "eat vegetables",
        "times_completed": 0,
        "notes": "eat at least 2 ounces of raw vegetables"
    }
]
```
* post habits => api/habit
```json
{
    "id": 3,
    "user_id": 1,
    "name": "sleep",
    "times_completed": 0,
    "notes": "sleep for at least 8 hours"
}
```
* post login users => /api/auth/login
```json
{
    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2MDIxNzQzNTksInN1YiI6Ik1pY2hhZWwifQ.l6e9Wk39rLfqMdlo8R9nJJEYIDmptqiYOwvAvqrzjos",
    "userId": 1
}
```
* post registered users => /api/users
```json
{
    "id": 4,
    "user_name": "Steven"
}
```
* delete habit by id => /api/habit/:habit_id
```json
204 No Content
```

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* ability to log times completed and see progress towards goals
* ability to give habits daily or times-per-week requirements
* integration with other software applications as well as technology like fitness trackers and smart watches
* badges to reward and incentivize users for successful habit tracking
* ability to show progress not just on an individual habit, but also on overall habit performance


## How to run it
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