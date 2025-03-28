import "../scss/components/Filters.scss";

const Filters = ({ countryFilter, continentFilter }) => {
  const handleCountryFilter = (ev) => {
    countryFilter(ev.target.value);
  };
  const handleContinentFilter = (ev) => {
    continentFilter(ev.target.value);
  };

  return (
    <section className="filters">
      <h4>Filters</h4>
      <label htmlFor="byCountry">By country</label>
      <input
        id="byCountry"
        type="text"
        placeholder="Spain..."
        onChange={handleCountryFilter}
      />
      <label htmlFor="byContinent">By continent</label>
      <select
        name="byContinent"
        id="byContinent"
        onChange={handleContinentFilter}
      >
        <option value="">All</option>
        <option value="africa">Africa</option>
        <option value="north america">North America</option>
        <option value="south america">South America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Filters;
