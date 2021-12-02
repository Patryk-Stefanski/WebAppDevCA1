import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch";
import SiteHeader from "../components/siteHeader";

const MustWatchPage = () => {
  const {mustWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const movies = mustWatchQueries.map((q) => q.data);
  const toDo = () => true;
  return (
    <>
    <SiteHeader/>
    <PageTemplate
      title="Must Watch"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatchIcon movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
    </>
  );
};

export default MustWatchPage;