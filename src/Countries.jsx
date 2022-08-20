import React, { useEffect, useState } from "react";
import Country from "./Country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) {
      throw new Error("Something went wrong...");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((response) => {
        setLoading(false);
        setCountries(response);
      })
      .catch((e) => {
        setLoading(false);
        setErrorMsg(e.message);
      });
  }, []);

  if (errorMsg) {
    return (
      <p style={{ textAlign: "center", fontWeight: "bold" }}>{errorMsg}</p>
    );
  }

  return (
    <div className="countries">
      <h1>Fetching data using Async Await in React JS</h1>

      <div className="countries_grid">
        {loading ? (
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Fetching Data...
          </p>
        ) : (
          countries.map((country) => (
            <Country
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              capital={country.capital}
              flagImg={country.flags.png}
              map={country.maps.googleMaps}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Countries;
