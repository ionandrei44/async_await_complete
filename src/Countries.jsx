import React, { useEffect, useState } from "react";
import Country from "./Country";

import "./Countries.css";

const Countries = () => {
  return (
    <div className="countries">
      <h1>Fetching data using Async Await in React JS</h1>

      <div className="countries_grid">
        <Country
          name="Peru"
          population="32971846"
          capital="Lima"
          flagImg="https://flagcdn.com/w320/pe.png"
          map="https://goo.gl/maps/uDWEUaXNcZTng1fP6"
        />
      </div>
    </div>
  );
};

export default Countries;
