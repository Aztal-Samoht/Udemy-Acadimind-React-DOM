import React, { /*useReducer, useState, useRef, useEffect, useContext, useImperativeahandle, */Fragment } from "react";

import HeaderCardButton from './HeaderCartButton/HeaderCartButton'
import headerImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCardButton onClick={props.onButtonClick}/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt="a table of food"/>
        </div>
    </Fragment>
};

export default Header;