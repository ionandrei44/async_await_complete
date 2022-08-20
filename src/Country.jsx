import React from "react";

import "./Country.css";

const Country = ({ name, population, capital, flagImg, map }) => {
  return (
    <div className="country">
      <div className="flag_container">
        <img src={flagImg} alt={name} />
      </div>

      <h2 className="name">{name}</h2>

      <div className="country_details">
        <p>
          <span className="bold">Capital:</span> {capital}
        </p>
        <p>
          <span className="bold">Population:</span> {population}
        </p>
      </div>

      <form action={map}>
        <input
          type="submit"
          value="Google Maps"
          formTarget="_blank"
          className="button"
        />
      </form>
    </div>
  );
};

export default Country;
