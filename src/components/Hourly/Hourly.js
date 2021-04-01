import React from "react";
import styled from "styled-components";
import Moment from 'react-moment';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const HourlyWrapper = styled.div`
  grid-row: 3/4;
  grid-column: 1/-1;
  max-width: 95vw;
`;

const HourlyContent = styled.div`
  background-color: var(--color-white);
  border-radius: 20px;
  text-align: center;
  margin: 1rem;

`;

class Hourly extends React.Component {
    render(){
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        slidesPerRow: 2,
    } 
    const {weather} = this.props;
 
    return (
   
        <HourlyWrapper>
        <Slider {...settings}>
          {weather.map((hour) => {
            return (
              <HourlyContent key={Math.floor(Math.random() * 87)}>
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
                <p>{
                    <Moment format="hh:mm a">{hour.dt}</Moment>
                }</p>
              </HourlyContent>
            );
          })}
          </Slider>
        </HourlyWrapper>
      );
}

  
};

export default Hourly;
