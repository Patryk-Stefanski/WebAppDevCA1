import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
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
        <Route exact path="/movies/home" component={HomePage}></Route>
        <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
        <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route exact path="/movies/must_watch" component={MustWatchPage} />
        <Route exact path="/movies/top_rated" component={TopRatedPage} />
        <Route exact path="/movies/popular" component={PopularPage} />
        <Route exact path="/movies/now_playing" component={NowPlayingPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/" component={signIn} />
        <Redirect from="*" to="/" />
      </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));