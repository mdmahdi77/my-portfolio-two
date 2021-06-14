import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyles = styled.div`
        background: url(${MapImg}) no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 400px;
    .container {
        position: relative;
        min-height: 400px;
    }
    .map__card {
        position: absolute;
        right: 10%;
        bottom: 10%;
        padding: 2rem;
        background: var(--deep-dark);
        width: 100%;
        max-width: 300px;
        border-radius: 12px;
    }
    .map__card__heading {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .map__card__link {
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        background-position: 80% center;
      }
      @media only screen and (max-width: 400px) {
        .map__card {
          max-width: none;
          right: auto;
        }
      }
`;

const Map = () => {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here Is Me</h3>
                    <PText>Mirjapur, Bindopur Bazar, Rajshahi, Bangladesh</PText>
                    <a className="map__card__link" href="https://www.google.com/maps/@24.3622247,88.6504776,16z" target="__blank">Open In Google Map</a>
                </div>
            </div>
        </MapStyles>
    );
};

export default Map;