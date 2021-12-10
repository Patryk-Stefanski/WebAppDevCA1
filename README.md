# Assignment 1 - ReactJS app.

Name: Patryk Stefanski

## Overview.

Source code for  a movie librarly app created for Web App Development 2.

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Firebase Authentication
+ Sorting of Movies
+ Private Routes
+ Pagination
+ Add to Must Watch
+ Remove from Must Watch

## Setup requirements.

Run following commands to prepare environment :
```
 npm install
 npm install --save  bootstrap@4.4.1
 npm i bootstrap react-bootstrap
 npm install -s node-fetch@2
 npm install @material-ui/lab
 ```

Create env file with following  and fill in with your own values :
```
REACT_APP_TMDB_KEY=
FAST_REFRESH=false
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

## API endpoints.

+ Upcoming Movies - /movie/upcoming
+ Top Rated Movies - movie/top_rated
+ Popular Movies - /movie/popular
+ Now Playing Movies - /movie/now_playing
+ Actors List - person/popular
+ Actor - person/:id
+ Actor Images - person/:id/images

## App Design.

### Component catalogue.

[ Insert a screenshot from the Storybook UI that lists all the stories for the app's components, and highlight those relating to your __new/modified components__ - see the example screenshot below.] .......

![](./images/storybook.png)
### UI Design.

[ Insert screenshots of the __new/modified app pages__ you developed (and modified existing pages), Include an appropriate caption for each one (see example below).

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

![ ](./images/view.png)

>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

+ List of must watch movies - /movies/must_watch    (private)
+ Top Rated Movies - /movies/top_rated              (private)
+ Popular Movies - /movies/popular                  (private)
+ Now Playing Movies - /movies/now_playing          (private)
+ Upcoming Movies - /movies/upcoming                (private)
+ List of Actors - /actors/home                     (private)
+ Actor details - /actors/:id                       (private)
+ Account details/settings - /account               (private)
+ Login Page - /                                    (public)

## Independent learning (If relevant).

+ [Video on Firebase Authentication](https://www.youtube.com/watch?v=PKwu15ldZ7k).
+ [Firebase API Docs](https://firebase.google.com/docs/auth/web/manage-users).
+ [TMDB API](https://developers.themoviedb.org/3).

