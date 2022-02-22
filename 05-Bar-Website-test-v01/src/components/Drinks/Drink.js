import React, { /*useReducer, useState, useRef,*/ Fragment } from "react";

import Card from "../UI/Card";

const Drink = (props) => {
    return <Fragment>
        <Card><h1>{props.info.name}</h1></Card>
        <Card>
            <h2>hardware</h2>
            <ul>
                {props.info.hardware.map((x) =>
                <li key={Math.random()}>
                {x}
                </li>)}
            </ul>
        </Card>
        <Card>
            <h2>software</h2>
            <ul>
            {props.info.software.map((x) =>
                <li key={Math.random()}>
                {x}
                </li>)}
            </ul>
        </Card>
        <Card><h2>procedure:</h2></Card>
            <ol>
            {props.info.steps.map((x) =>
                <li key={Math.random()}>
                {x}
                </li>)}
                <li>Enjoy!</li>
            </ol>
        <Card>
            <h2>citation</h2>
            <p><b>creator:</b> {props.info.person}</p>
            <ul>
            {props.info.link.map((x) =>
                <li key={Math.random()}>
                <a href={x}>source</a>
                </li>)}
            </ul>
        </Card>

    </Fragment>
};

export default Drink;