import React, { useState, createContext, useContext } from "react";
import { useEffect } from "react";

const FavContext = createContext();

export const useFavContext = () => {
  const context = useContext(FavContext);
  const [fav, setFav] = context.fav;

  const handleFav = (item) => {
    const newItem = [...fav, item];
    setFav(newItem);
    console.log(newItem);
  };

  return {
    handleFav,
    fav,
  };
};

export const FavoritesProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("favs")) || [];

  const [fav, setFav] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);
  console.log(children);
  return (
    <FavContext.Provider
      value={{
        fav: [fav, setFav],
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
