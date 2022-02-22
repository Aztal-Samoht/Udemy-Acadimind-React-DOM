import React, { /*useReducer, useRef, useEffect, useState*/ Fragment } from "react";

import Card from "../UI/Card";

const Martini = (props) => {
    return <Fragment>
        <Card><h1>Martini</h1></Card>
        <Card>
            <h2>ingredients</h2>
            <ul>
                <li>london dry gin -- 3oz</li>
                <li>dry vermouth -- 3/4oz  </li>
            </ul>
        </Card>
        <Card><h2></h2></Card>
        <Card><h2></h2></Card>
    </Fragment>
};

export default Martini;