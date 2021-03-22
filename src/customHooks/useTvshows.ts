import { useState } from "react";

export default function useFavouriteShows(): [
  Set<number>,
  (id: number) => void
] {
  const [favourites, updateFavourites] = useState(new Set<number>());

  function toggleFavourites(id: number): void {
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

  return [favourites, toggleFavourites];
}
