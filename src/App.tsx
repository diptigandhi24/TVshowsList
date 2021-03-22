import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import getShowList from "./server/api";
import { TvShow } from "./Types/dataTypes";

const ShowList = React.lazy(() => import("./components/tvShows"));

function App() {
  const [tvShows, updateList] = useState<Array<TvShow>>([]);
  const [favourites, updateFavourites] = useState<Set<number>>(new Set());
  console.log("Request inside an app", getShowList());
  function toggleFavourites(id: number) {
    updateFavourites((prevState) => {
      let newSet = new Set(prevState);
      if (prevState.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

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
