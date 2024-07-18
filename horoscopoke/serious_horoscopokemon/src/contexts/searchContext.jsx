import React, { createContext, useState } from 'react';

// Create a context with a default value
const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
    const [anything, setAnything] = useState('')
    const [notanything, setNotAnything] = useState('')


  const values = { 
    anything,
    setAnything,
    notanything,
    setNotAnything
  }

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };