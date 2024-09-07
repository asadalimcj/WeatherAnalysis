import React, { useState, useEffect } from "react";

function CitySelection({ setCity }) {
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (e) => {
    setCity({ city: e.target.value });
    setSelectedCity(e.target.value);
  };
  return (
    <div>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        style={{ height: "30px" }}
      >
        <option value="">Select City</option>
        <option value="Lahore">Lahore</option>
        <option value="Karachi">Karachi</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Sahiwal">Sahiwal</option>
        <option value="Quetta">Quetta</option>
      </select>
    </div>
  );
}

export default CitySelection;
