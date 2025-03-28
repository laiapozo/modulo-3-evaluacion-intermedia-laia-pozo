import Country from "./Country";
import "../scss/components/ListCountries.scss"

const ListCountries = ({ countries }) => {
  return (
    <section>
      <ul className="countriesList">
        {countries.map((country) => {
          return <Country key={country.flag} item={country} />;
        })}
      </ul>
    </section>
  );
};

export default ListCountries;
