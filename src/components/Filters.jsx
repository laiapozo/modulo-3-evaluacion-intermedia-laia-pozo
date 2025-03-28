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
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </section>
  );
};

export default Filters;
