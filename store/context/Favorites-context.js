import { createContext, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesContextprovider({ children }) {
  const [Favoritemealid, setFavoritemealid] = useState([]);

  function addFavorites(id) {
    setFavoritemealid((currentfavid) => [...currentfavid, id]);
  }

  function removeFavorites(id) {
    setFavoritemealid((currentfavid) =>
      currentfavid.filter((mealid) => mealid !== id)
    );
  }

  const value ={
    ids: Favoritemealid,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextprovider;
