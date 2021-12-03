import React from 'react';
import PropTypes from 'prop-types';
import {Container,} from 'react-bootstrap';

import styles from './CurrentDay.module.css';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => (
  <Container fluid>
            <div>
              <br />
               <h3>
              <img
          alt="none"
          src="icons/location.png"
          width="32"
          height="28"/>
              <span> {location}</span>
               </h3><br />
                <p>{weekday} {date}</p>
            </div>
            <div>
                <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
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