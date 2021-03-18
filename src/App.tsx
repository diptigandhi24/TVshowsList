import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";
import getShowList from "./server/api";
import { TvShow } from "./Types/dataTypes";

const ShowList = React.lazy(() => import("./components/tvShows"));

function App() {
  const [tvShows, updateList] = useState<Array<TvShow>>([]);
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
      <ShowList tvShows={tvShows} updateList={updateList} />
    </Suspense>
  );
}

export default App;
