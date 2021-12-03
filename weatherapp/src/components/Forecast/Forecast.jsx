import React from 'react';
import PropTypes from 'prop-types';
import Form from "../Form"


import { Container, Row, Col,Button } from 'react-bootstrap';

import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';

import styles from './Forecast.module.css';

const Forecast = ({ forecast }) => (
    <div className={styles.box}>
    <Container fluid>
    
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecast.currentDay} />
                </div>
            </Col>
            <Col xs={13} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingDaysForecast days={forecast.upcomingDays} />
            </Col>
        </Row>
        <a href="/Form">
        <button className={styles.button}>NEXT
        </button>
        </a>
    </Container>
    </div>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;