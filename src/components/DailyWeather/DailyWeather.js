import React from 'react'
import styled from 'styled-components';

const DailyWrapper = styled.div`
    grid-column: 3/-1;
    grid-row: 1/3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
    grid-gap: 1rem;

    @media only screen and (max-width: 900px) {
    grid-column: 1/-1;
    grid-row: 2/3;
  }

  
  @media only screen and (max-width: 768px) {
      grid-column:1/-1;
      grid-row: 3/4;
      padding: 1rem 0;
  }

  @media only screen and (max-width: 425px) {
      grid-template-columns: repeat(2, 1fr);
  }

`;

const DailyContent = styled.div`
background-color: var(--color-white);
text-align:center;
border-radius: 20px;
padding: 1rem;

`;

const DailyWeather = ({data}) => {
    let dayOfTheWeek = [];
    function displayDate() {
      const today = new Date();
      const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      for (var i = 0; i < 14; i++) {
        if (i === 0) {
          dayOfTheWeek.push('Today');
        } else {
          dayOfTheWeek.push((week[(today.getDay() + i) % 7]));
        }
      }

    }
    displayDate();
    return (
        <DailyWrapper>
        {data.map((day, index) => {
       
            return (
              <DailyContent key={(Math.random() * 99)}>
              <h6>{`${dayOfTheWeek[index]}`}</h6>
                <img
                  src={
                    "http://openweathermap.org/img/w/" +
                    `${!day ? null : day.weather[0].icon}` +
                    ".png"
                  }
                  alt="weather icon"
                  className="neg-marbottom icon"
                />
             
                <h3>{day.temp.max}<sup>o</sup></h3>
                <h5>{day.temp.min}<sup>o</sup></h5>
              
              </DailyContent>
            );
          })}
       
        </DailyWrapper>
    )
}

export default DailyWeather
