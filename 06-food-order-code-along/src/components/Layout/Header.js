import React, { /*useReducer, useState, useRef, useEffect, useContext, useImperativeahandle, */Fragment } from "react";

import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './Header/HeaderCartButton/HeaderCartButton'

const NewComponent = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt="a table of food"/>
        </div>
    </Fragment>
};

export default NewComponent;