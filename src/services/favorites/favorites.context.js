import React, { useState, createContext, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = value => {
    console.log(value);
    const jsonValue = JSON.stringify(value);
    localStorage.setItem('favorites', jsonValue);
  };

  const loadFavorites = () => {
    console.log('Loaded favs');

    const jsonValue = localStorage.getItem('favorites');
    return jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
  };

  const add = track => {
    setFavorites([...favorites, track]);
  };

  const remove = track => {
    const newFavorites = favorites.filter(x => x.title !== track.title);

    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
