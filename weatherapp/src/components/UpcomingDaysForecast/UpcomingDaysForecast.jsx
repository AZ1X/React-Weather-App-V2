import React from 'react';
import PropTypes from 'prop-types';

import {Container} from 'react-bootstrap';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) => (
    <Container fluid>
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <UpcomingDaysForecastItem {...day} key={day.weekday} />
        ))}
    </ul>
    </Container>
);

UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;