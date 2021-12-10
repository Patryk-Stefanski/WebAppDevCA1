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

 No New Storybook Components
 
### UI Design.

![image](https://user-images.githubusercontent.com/74991829/145590004-93fc87e2-c8e8-4835-a6ed-98992e408c03.png)

> Login page which uses authentication in order to gain access to app.

![image](https://user-images.githubusercontent.com/74991829/145590380-c5430216-af5a-4362-ba9c-d2edcee9f28f.png)

> Signup page which allows you to register a new account which is necessary to gain access to app.

![image](https://user-images.githubusercontent.com/74991829/145588727-a1843510-b7cd-4645-b086-4d1d6261716a.png)

> Forgot password page where you can reset you users password if you have forgoten it.

![image](https://user-images.githubusercontent.com/74991829/145588935-173ced58-0e34-4d77-bb3f-cdadf0f1b287.png)

> Upcoming movies page shows all movies which will be released soon.

![image](https://user-images.githubusercontent.com/74991829/145590516-5a8e0667-1183-4ad7-bbfd-7a12eec8a168.png)

> Top rated page shows  the movies on tmdb with the highest ratings.

![image](https://user-images.githubusercontent.com/74991829/145589165-36fb682d-612b-4292-8a19-b2c770889e12.png)

> Popular moies page shows all the currently trending movies.

![image](https://user-images.githubusercontent.com/74991829/145589303-70186f7c-d610-4a17-a6a5-d9eb89d1c159.png)

> Must watch page shows all the movies a user has added to his must watch list.

![image](https://user-images.githubusercontent.com/74991829/145589417-ea294ded-c126-4aa2-9d48-f34e57696524.png)

> Now playing page shows all the movies which have been released recently.

![image](https://user-images.githubusercontent.com/74991829/145589525-5f236e66-24cd-4e79-86f3-5cae9f3dfe6a.png)

>Actor page shows all the popular actors , clicking details will bring you to the actor details page .

![image](https://user-images.githubusercontent.com/74991829/145589638-d8e09311-f847-493c-9d0b-3be841d46079.png)

> Actor details page shows the actors biography and other details.

![image](https://user-images.githubusercontent.com/74991829/145589763-2162715e-962e-43e7-953c-f2fff3b9e655.png)

> Account page lets the user to logout , update his email or update his password.Logging out will bring you to the logi page.


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

