const AddCountry = ({ countryAdd }) => {
  const newCountry = {
    name: {
      common: "",
    },
    capital: "",
    flag: "",
    continents: [],
  };

  const handleName = (ev) => {
    newCountry.name.common = ev.target.value;
  };
  const handleCapital = (ev) => {
    newCountry.capital = ev.target.value;
  };
  const handleFlag = (ev) => {
    newCountry.flag = ev.target.value;
  };
  const handleConti = (ev) => {
    newCountry.continents[0] = ev.target.value;
  };
  const handleAddCountry = (ev) => {
    ev.preventDefault();
    countryAdd(newCountry);
  };

  return (
    <section>
      <h4>Add Country</h4>
      <form>
        <input type="text" placeholder="Country Name" onChange={handleName} />
        <input type="text" placeholder="Capital" onChange={handleCapital} />
        <input type="text" placeholder="Flag Icon" onChange={handleFlag} />
        <input type="text" placeholder="Continent" onChange={handleConti} />
        <input type="submit" value="Add Country" onClick={handleAddCountry} />
      </form>
    </section>
  );
};

export default AddCountry;
