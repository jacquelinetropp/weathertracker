import React from "react";
import styled from "styled-components";

const HourlyWrapper = styled.div`
  grid-row: 3/4;
`;

const HourlyContent = styled.div`
  background-color: var(--color-white);
  border-radius: 20px;
  text-align: center;
  margin: 1rem;
`;

const Hourly = ({ weather }) => {
  return (
    <HourlyWrapper>
      {weather.map((hour) => {
        console.log(hour);
        return (
          <HourlyContent>
            <img
              src={
                "http://openweathermap.org/img/w/" +
                `${!hour ? null : hour.weather[0].icon}` +
                ".png"
              }
              alt="weather icon"
              className="neg-marbottom icon"
            />
            <h3>{hour.temp}</h3>
            <p>This is an hour</p>
          </HourlyContent>
        );
      })}
    </HourlyWrapper>
  );
};

export default Hourly;
