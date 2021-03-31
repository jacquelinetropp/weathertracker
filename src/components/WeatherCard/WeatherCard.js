import React from "react";
import CurrentDetails from "../CurrentDetails/CurrentDetails";

import CurrentWeather from '../CurrentWeather/CurrentWeather';

const WeatherCard = ({data}) => {
  // const { data } = props;
  // console.log(data); 
  const iconurl =
    "http://openweathermap.org/img/w/" +
    `${data.cod !== 404 ? data.current.weather[0].icon : null}` +
    ".png";
  return (
  
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
        <CurrentWeather data={data}/>
        <CurrentDetails data={data} />
          <div className="maincard">
            <span className="cardtitle">
              {data.lat} , {data.lon}. Weather
            </span>
            <span className="cardsubtitle">
              As of {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {data.current.temp}
              <sup>o</sup>
            </h1>
           

            <span className="weather-description">
              {" "}
              <img className="weather-icon" src={iconurl} alt="" />
            </span>
          </div>
          
  
           
       
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;