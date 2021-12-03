import React from 'react';
import PropTypes from 'prop-types';
import {Container,} from 'react-bootstrap';

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
    <Container fluid>
    <div className="d-flex justify-content-between">
        <p className="mb-1 text-center text-uppercase"><img width="30" src={`icons/${name}.png`} alt="" />
           {name}</p>
        <p className="mb-1">
            {value} {unit}
        </p>
    </div>
    </Container>
);

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;