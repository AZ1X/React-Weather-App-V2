import React from 'react';

import styles from './Form.module.css';

const Form = () => {
    return (
        <form>
            <img
          alt="none"
          src="icons/channel.png"
          width="102"
          height="102"
          className="rounded mx-auto d-block"
        />
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
            />

            <button type="submit" className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};

export default Form;