import React from 'react';
import PropTypes from 'prop-types';
import Form from "../Form"


import { Button, Container } from 'react-bootstrap';
import styles from './Contact.module.css';

const Contact = ({ contact }) => (
    <div className={styles.box}>
    <Container fluid>
    <a href="/Form">
        <button className={styles.button}>NEXT
        </button>
    </a>
    </Container>
    </div>
);

export default Contact;