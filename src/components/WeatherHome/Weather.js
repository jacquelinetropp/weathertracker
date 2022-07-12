import React, { useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import styled from "styled-components";

const WeatherWrapper = styled.div`
  padding: 3rem;
  @media only screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;

`;

const Header = styled.h1`
  font-family: "Amiri", serif;
  font-size: 35px;
  color: var(--color-white);
`;

const StyledInput = styled.input`
  border: none;
  padding: 1rem;
  background-color: rgba(106, 174, 217, 0.6);
  color: white;
  border-radius: 4px;
  margin: 5px;
  &:focus {
    border: 2px solid var(--color-mainLight);
  }

  &::placeholder {
    color: var(--color-white);
  }
`;

const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 4px;
  background-color: rgba(106, 174, 217, 0.6);
  color: white;
  &:hover {
    background-color: rgba(106, 174, 217, 0.8);
  }
`;

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const FirstKey = "ObfysELOcnDcQmgVmGvAGGS4ohPJlfFF";
  const APIKEY = "7fa77fe3445b5ebdef0bae325c71544c";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const coordinates = await fetch(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${FirstKey}&location=${form.city}`
      ) 
        .then(res => res.json())
        .then(data => data);
      const lat = coordinates.results[0].locations[0].latLng.lat;
      const lng = coordinates.results[0].locations[0].latLng.lng;

      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <WeatherWrapper>
      <HeaderWrapper>
        <Header>Weather Tracker</Header>
        <br />
        <form>
          <StyledInput
            type="text"
            placeholder="Zipcode"
            name="city"
            onChange={(e) => handleChange(e)}          />

          <StyledButton onClick={(e) => weatherData(e)}>Submit</StyledButton>
        </form>
      </HeaderWrapper>
      {weather.data != undefined ? (
        <div>
          <WeatherCard data={weather.data} />
        </div>
      ) : null}
    </WeatherWrapper>
  );
};

export default Weather;
