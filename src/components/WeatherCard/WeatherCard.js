import React from "react";

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
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {data.daily[0].temp.max}/
                      {data.daily[0].temp.min}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.current.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>{data.current.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.current.visibility} m</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{data.current.wind_speed} mi/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.wind_deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.current.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.current.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
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