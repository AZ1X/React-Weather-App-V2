import React from 'react';
import PropTypes from 'prop-types';
import {Container,} from 'react-bootstrap';

import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
  <Container fluid>
            <div>
          <h3 className="mt-2">
          <img
          alt="none"
          src="icons/location.png"
          width="32"
          height="28"
          />
          <span > {location}</span>
         </h3>
         <p>{weekday} {date}</p>
          <img 
            width="102" 
            height="102"
            src={weatherIcon} 
            alt=""
            className="mb-2 mt-1 rounded mx-auto d-block"/>
          
          <h3 className="text-center">{weatherDescription}</h3>
          <h1 className="text-center font-weight-bold mb-0">
                    <span>{temperature}</span>°C
                </h1>
              <br />
            </div>
    </Container>
);
  
CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;