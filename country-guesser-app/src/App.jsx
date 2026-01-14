import { useState, useEffect } from "react";
import countryService from "./services/country";
import Display from "./components/Display";

function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(null);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (country === null || country === "") {
      countryService
        .getAllCountries()
        .then((initialCountries) => setCountry(initialCountries));
    } else {
      setFilter(country.filter((place) => place.name.common.includes(search)));
    }
  }, [search]);

  if (!country) {
    return null;
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleShow = (event, place) => {
    event.preventDefault();
    setSearch(place);
    countryService.getCountry(place).then((response) => setFilter([response]));
  };

  return (
    <>
      <div>
        <p>
          find countries <input type="text" onChange={handleSearch}></input>
        </p>
      </div>
      <Display countries={filter} handleShow={handleShow} />
    </>
  );
}

export default App;
