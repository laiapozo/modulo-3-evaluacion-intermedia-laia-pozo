import "../scss/App.scss";
import Filters from "./Filters";
import ListCountries from "./ListCountries";
import dataCountries from "../services/data.json";
import { useState } from "react";

function App() {
  const [countrySearch, setCountrySearch] = useState("");
  const [continentSearch, setContinentSearch] = useState("");

  const handleCountry = (countryValue) => {
    setCountrySearch(countryValue);
  };

  const handleContinent = (continentValue) => {
    setContinentSearch(continentValue);
  };

  const filteredCountries = dataCountries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(countrySearch) &&
      country.continents[0].toLowerCase().includes(continentSearch)
    );
  });

  return (
    <>
      <header>
        <h2>Country info App</h2>
        <p>
          Explore information about countries, capitals and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main>
        <Filters
          countryFilter={handleCountry}
          continentFilter={handleContinent}
        />
        <ListCountries countries={filteredCountries} />
      </main>
    </>
  );
}

export default App;
