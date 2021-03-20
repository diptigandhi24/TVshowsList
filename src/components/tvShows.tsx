import React, { useState, useEffect } from "react";
import "./list.css";
import { TvShow } from "../Types/dataTypes";

import NavBar from "./navigation";
interface ShowsProps {
  tvShows: Array<TvShow>;
  toggleFavourites: (id: number) => void;
  favourites: Set<number>;
}
export default function ShowList({
  tvShows,
  toggleFavourites,
  favourites,
}: ShowsProps): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="listWrapper">
        <ul>
          {tvShows !== null &&
            tvShows.map((tvShow: TvShow, index: number) => {
              return (
                <li key={index.toString()}>
                  <img
                    src={tvShow.image.medium}
                    width="50px"
                    height="50px"
                    alt="icon"
                  />
                  <p>
                    {tvShow.name}
                    <span className="tooltiptext">{tvShow.summary}</span>
                  </p>
                  <button
                    type="button"
                    id={`${index}`}
                    onClick={(event) => {
                      toggleFavourites(tvShow.id);
                    }}
                  >
                    {favourites.has(tvShow.id)
                      ? "Favourite!"
                      : "Add to favorite"}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
