import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HourlyWrapper = styled.div`
  grid-row: 3/4;
  grid-column: 1/-1;
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    grid-row: 4/5;
  }

  @media only screen and (max-width: 425px) {
    width: 85vw;
  }
`;

const HourlyContent = styled.div`
  background-color: var(--color-white);
  border-radius: 20px;
  text-align: center;
  margin: 1rem;
  width: 85% !important;
`;

class Hourly extends React.Component {
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      slidesPerRow: 2,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 798,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    const { weather } = this.props;

    function displayHour(index) {
      let hour;
      const today = new Date();
      const newHour = today.getHours() + index;
      if (newHour > 24) {
        hour = `${newHour % 24}:00 hr`;
      } else if (index === 0) {
        hour = "Current";
      } else {
        hour = `${newHour}:00 hr`;
      }
      return hour;
    }

    return (
      <HourlyWrapper>
        <Slider {...settings}>
          {weather.map((hour, index) => {
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
                <h3>
                  {hour.temp}
                  <sup>o</sup>
                </h3>
                <p>{displayHour(index)}</p>
              </HourlyContent>
            );
          })}
        </Slider>
      </HourlyWrapper>
    );
  }
}

export default Hourly;
