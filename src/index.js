import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedPage from "./pages/topRatedPage";
import PopularPage from "./pages/popularPage";
import MustWatchPage from "./pages/mustWatchPage"
import NowPlayingPage from "./pages/nowPlayingMovies"
import signIn from "./pages/signInPage";
import "bootstrap/dist/css/bootstrap.min.css"
import PrivateRoute from "./components/userAuth/privateRoute";
import LogOutPage from "./pages/logoutPage";
import ActorsPage from "./pages/actorsPage";
import ActorPage from "./pages/actorDetailsPage";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MoviesContextProvider>
            {" "}
            <Switch>
        <Route exact path="/movies/home" component={HomePage}/>
        <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <PrivateRoute exact path="/movies/must_watch" component={MustWatchPage} />
        <PrivateRoute exact path="/movies/top_rated" component={TopRatedPage} />
        <PrivateRoute exact path="/movies/popular" component={PopularPage} />
        <PrivateRoute path="/actors/home" component={ActorsPage} />
        <PrivateRoute exact path="/movies/now_playing" component={NowPlayingPage} />
        <PrivateRoute path="/actors/:id" component={ActorPage} />
        <PrivateRoute path="/movies/:id" component={MoviePage} />
        <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
        <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute path="/account" component={LogOutPage} />
        <Route exact pah="/" component={signIn} />t
        <Redirect from="*" to="/" />
      </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));