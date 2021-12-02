import React, { Fragment } from 'react';
import Header from '../Header';
import styles from './Page.module.css';

import From from '../From';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

const Page = () => {
    return (
        <Fragment>
            <Header />
        <div className={styles.box}>
          {/* From */}
          {/* Error */}
          {/* Loader */}
          {/* Forecast */}
        </div>
        </Fragment>
    );
};

export default Page;