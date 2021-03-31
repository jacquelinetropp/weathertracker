import React from "react";
import CurrentDetails from "../CurrentDetails/CurrentDetails";

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Hourly from "../Hourly/Hourly";

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
          
        <Hourly weather={data.hourly} />
       
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