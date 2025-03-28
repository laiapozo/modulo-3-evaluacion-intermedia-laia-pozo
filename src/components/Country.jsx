import "../scss/components/Country.scss";

const Country = ({ item }) => {
  return (
    <li className="country">
      <p>{item.flag}</p>
      <h3>{item.name.common}</h3>
      <p>{item.capital}</p>
      <p>{item.continents.join(", ")}</p>
    </li>
  );
};

export default Country;
