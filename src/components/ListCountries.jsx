import Country from "./Country";
import "../scss/components/ListCountries.scss"

const ListCountries = ({ countries }) => {
  return (
      <ul className="countriesList">
        {countries.map((country) => {
          return <Country key={country.flag} item={country} />;
        })}
      </ul>
  );
};

export default ListCountries;
