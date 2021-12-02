import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <form onSubmit={onSubmit}>
                       <img
          alt="none"
          src="icons/channel.png"
          width="102"
          height="102"
          className="rounded mx-auto d-block"
          required
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;