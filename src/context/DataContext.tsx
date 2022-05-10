import axios from "axios";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [breeds, setBreeds] = useState([] as any[]);
  const [catDetails, setCatDetails] = useState([] as any[]);

  useEffect(() => {
    const getBreedsData = async () => {
      await axios
        .get("https://api.thecatapi.com/v1/breeds")
        .then((res) => {
          setBreeds(res.data);
        })
        .catch((err) =>
          alert(
            "Apologies but we could not load new cats for you at this time! Miau 🐱🐱🐱"
          )
        );
    };
    getBreedsData();
  }, []);

  const getCatDetails = (name: string) => {
    const filteredCatDetails = breeds?.filter((breed) => breed.name === name);
    setCatDetails(filteredCatDetails);
  };

  return (
    <DataContext.Provider
      value={{
        breeds,
        catDetails,
        getCatDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
