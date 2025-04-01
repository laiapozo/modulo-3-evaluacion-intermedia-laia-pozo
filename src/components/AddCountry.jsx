const AddCountry = ({
  onChangeName,
  onChangeCapital,
  onChangeFlag,
  onChangeContinent,
  onSubmit
}) => {
  return (
    <section>
      <h4>Add Country</h4>
      <form>
        <input
          type="text"
          placeholder="Country Name"
          onChange={(ev) => onChangeName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Capital"
          onChange={(ev) => onChangeCapital(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Flag Icon"
          onChange={(ev) => onChangeFlag(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Continent"
          onChange={(ev) => onChangeContinent(ev.target.value)}
        />
        <input type="submit" value="Add Country" onClick={(ev) => {
          ev.preventDefault();
          onSubmit();
        }}/>
      </form>
    </section>
  );
};

export default AddCountry;
