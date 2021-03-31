import React from "react";
import styled from 'styled-components';

const DetailsWrapper = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    border-radius: 20px;
    background-color: var(--color-white);

`;

const DetailsInfo = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 1rem;
`;

const CurrentDetails = ({ data }) => {
  return (
    <DetailsWrapper>
      <DetailsInfo>
        <div className="section1">
          <table>
            <tr>
              <td>
                <h6>High/Low</h6>
              </td>
              <td>
                <p>
                  {data.daily[0].temp.max}/{data.daily[0].temp.min}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Humidity</h6>
              </td>
              <td>
                <p>{data.current.humidity} %</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Pressure</h6>
              </td>
              <td>
                <p>{data.current.pressure} hPa</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Visibility</h6>
              </td>
              <td>
                <p>{data.current.visibility} m</p>
              </td>
            </tr>
          </table>
        </div>

        <div className="section2">
          <table>
            <tr>
              <td>
                <h6>Wind</h6>
              </td>
              <td>
                <p>{data.current.wind_speed} mi/hr</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Wind Direction</h6>
              </td>
              <td>
                <p>
                  {data.current.wind_deg}
                  <sup>o</sup> deg
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Sunrise</h6>
              </td>
              <td>
                <p>
                  {new Date(data.current.sunrise * 1000).toLocaleTimeString()}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Sunset</h6>
              </td>
              <td>
                <p>
                  {new Date(data.current.sunset * 1000).toLocaleTimeString()}
                </p>
              </td>
            </tr>
          </table>
        </div>
      </DetailsInfo>
    </DetailsWrapper>
  );
};

export default CurrentDetails;
