import "../scss/App.scss";
import Filters from "./Filters";
import ListCountries from "./ListCountries";
import AddCountry from "./AddCountry";
import dataCountries from "../services/data.json";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState(dataCountries);
  const [countrySearch, setCountrySearch] = useState("");
  const [continentSearch, setContinentSearch] = useState("");
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");
  const [continent, setContinent] = useState("");

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeCapital = (value) => {
    setCapital(value);
  };

  const onChangeFlag = (value) => {
    setFlag(value);
  };

  const onChangeContinent = (value) => {
    setContinent(value);
  };

  const handleSubmitForm = () => {
    const newCountry = {
      name: {common: name},
      capital: [capital],
      flag: flag,
      continents: [continent],
    };
    setCountries([...countries, newCountry]);
  };

  const handleCountry = (countryValue) => {
    setCountrySearch(countryValue.toLowerCase());
  };

  const handleContinent = (continentValue) => {
    setContinentSearch(continentValue);
  };

  const filteredCountries = countries
    .filter((country) => {
      return country.name.common.toLowerCase().includes(countrySearch);
    })
    .filter((country) => {
      return country.continents.toString().includes(continentSearch);
    });

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
          <AddCountry
            onChangeName={onChangeName}
            onChangeCapital={onChangeCapital}
            onChangeFlag={onChangeFlag}
            onChangeContinent={onChangeContinent}
            onSubmit={handleSubmitForm}
          />
        </section>
        <ListCountries countries={filteredCountries} />
      </main>
    </>
  );
}

export default App;
