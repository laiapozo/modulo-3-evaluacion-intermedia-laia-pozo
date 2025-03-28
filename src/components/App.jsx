import "../scss/App.scss";
import Filters from "./Filters";
import ListCountries from "./ListCountries";
import AddCountry from "./AddCountry";
import dataCountries from "../services/data.json";
import { useState } from "react";

function App() {
  const [countrySearch, setCountrySearch] = useState("");
  const [continentSearch, setContinentSearch] = useState("");
  const [newCountry, setNewCountry] = useState({});

  const handleCountry = (countryValue) => {
    setCountrySearch(countryValue.toLowerCase());
  };

  const handleContinent = (continentValue) => {
    setContinentSearch(continentValue);
  };

  const handleNewCountry = (newCountryValue) => {
    setNewCountry(newCountryValue);
  };

  const filteredCountries = dataCountries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(countrySearch) &&
      country.continents.toString().toLowerCase().includes(continentSearch)
    );
  });

  const allCountries = { ...filteredCountries, newCountry };

  return (
    <>
      <header className="header">
        <h2>Country info App</h2>
        <p>
          Explore information about countries, capitals and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main className="main">
        <section className="hero">
          <Filters
            countryFilter={handleCountry}
            continentFilter={handleContinent}
          />
          <AddCountry countryAdd={handleNewCountry} />
        </section>
        <ListCountries countries={filteredCountries} />
      </main>
    </>
  );
}

export default App;
