import React from 'react'
import styled from 'styled-components';

const DailyWrapper = styled.div`
    grid-column: 3/-1;
    grid-row: 1/3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
    grid-gap: 1rem;
`;

const DailyContent = styled.div`
background-color: var(--color-white);
text-align:center;
border-radius: 20px;

`;

const DailyWeather = ({data}) => {
    console.log(data);
    return (
        <DailyWrapper>
        {data.map((day) => {
            return (
              <DailyContent key={Math.floor(Math.random() * 99)}>
              <h6>Day of the Week</h6>
                <img
                  src={
                    "http://openweathermap.org/img/w/" +
                    `${!day ? null : day.weather[0].icon}` +
                    ".png"
                  }
                  alt="weather icon"
                  className="neg-marbottom icon"
                />
             
                <h3>{day.temp.max}</h3>
                <h5>{day.temp.min}</h5>
              
              </DailyContent>
            );
          })}
       
        </DailyWrapper>
    )
}

export default DailyWeather
