import React, { createContext, useState } from 'react';

// Create a context with a default value
const SearchContext = createContext(null);

const SearchProvider = ({ children }) => {
    const [anything, setAnything] = useState('')
    const [notanything, setNotAnything] = useState('')
    const [eggs, setEggs] = useState()
    const [baths, setBaths] = useState();
    const [tags, setTags] = useState();

  const values = { 
    anything, setAnything,
    notanything, setNotAnything,
    eggs, setEggs,
    baths, setBaths,
    tags, setTags,
  }

  return (
    <SearchContext.Provider value={values}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };