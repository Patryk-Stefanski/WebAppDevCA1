import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };

   // We will use this function in a later section
   const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToMustWatch = (movie) => {
    setMustWatch([...mustWatch,movie.id])
    console.log([...mustWatch,movie.id]);
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        addToMustWatch,
        removeFromFavorites,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
