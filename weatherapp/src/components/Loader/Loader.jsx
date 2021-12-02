import React from 'react';

import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.box}>
       <img
          alt="none"
          src="icons/search.png"
          width="102"
          height="102"
          className="rounded mx-auto d-block"
        />
    </div>
);

export default Loader;