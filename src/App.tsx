import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import getShowList from "./server/api";
import { TvShow } from "./Types/dataTypes";
import useFavouriteShows from "./customHooks/useTvshows";
const ShowList = React.lazy(() => import("./components/tvShows"));

function App() {
  const [tvShows, updateList] = useState<Array<TvShow>>([]);
  const [favourites, toggleFavourites] = useFavouriteShows();

  useEffect(() => {
    getShowList().then((data) => {
      console.log("Tvshows", data);
      updateList(data);
    });
  }, []);

  return (
    <Suspense
      fallback={<Spinner animation="border" variant="primary"></Spinner>}
    >
      <ShowList
        tvShows={tvShows}
        toggleFavourites={toggleFavourites}
        favourites={favourites}
      />
    </Suspense>
  );
}

export default App;
