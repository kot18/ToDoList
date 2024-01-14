import React from 'react';
import classes from "../css/header.module.css"

const Header = () => {
    return (
        <section className={classes.sectionHeader}>
            <h1>Дневной список дел</h1>
        </section>
    );
};

export default Header;