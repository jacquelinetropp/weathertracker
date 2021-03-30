import React from "react";
import styled from "styled-components";

const CurrentWrapper = styled.div`
  border-radius: 20px;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#046f94),
    to(#3493ad)
  );
  width: 55%;
  margin: 0 auto;
  color: var(--color-white);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
`;

const Info = styled.div`
  grid-column: 1/2;
  text-align: center;
`;

const Image = styled.div`
  grid-column: 2/-1;
  text-align: center;
  align-self: center;

  display: grid;
  padding: 2rem;
  justify-content: end;
`;

const CurrentWeather = ({ data }) => {
  console.log(data);
  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${!data ? null : data.current.weather[0].icon}` +
    ".png";
  return (
    <CurrentWrapper>
      <Content>
        <Info>
          <h1 className="cardtitle">Current Weather</h1>
          <p className="cardsubtitle">
            As of {new Date().toLocaleTimeString()}
          </p>
          <h1>
            {" "}
            {data.current.temp}
            <sup>o</sup>
          </h1>
          
          <div className="flex center">
            <h6 className="padding-xs">{data.current.weather[0].main}</h6>
            <p className="padding-xs">{data.current.weather[0].description}</p>
          </div>
        </Info>
        <Image>
    
          <img className="icon" src={iconurl} alt="weather symbol" />
          <h5 className="padding-s">
            {data.daily[0].temp.max} <sup>o</sup>/{data.daily[0].temp.min}{" "}
            <sup>o</sup>
          </h5>
        </Image>
      </Content>
    </CurrentWrapper>
  );
};

export default CurrentWeather;
