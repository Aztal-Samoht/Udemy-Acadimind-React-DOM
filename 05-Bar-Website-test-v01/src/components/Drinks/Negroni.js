import React, { /*useReducer, useRef, useEffect, useState*/ Fragment } from "react";

import Card from "../UI/Card";

const Negroni = (props) => {
    return <Fragment>
        <Card><h1>Negroni</h1></Card>
        <Card>
            <h2>hardware</h2>
            <ul>
                <li>mixing glass</li>
                <li>bar spoon</li>
                <li>strainer</li>
            </ul>
        </Card>
        <Card>
            <h2>software</h2>
            <ul>
                <li>london dry gin -- 1oz</li>
                <li>campari -- 1oz</li>
                <li>sweet vermouth -- 1oz</li>
                <li>orange peel</li>
                <li>small ice</li>
            </ul>
        </Card>
        <Card><h2>procedure:</h2></Card>
            <ol>
                <li>fill mixing glass with small or crushed ice</li>
                <li>add liquid ingredients</li>
                <li>stir</li>
                <li>strain into rocks glass</li>
                <li>garnish with orange peel</li>
                <li>serve neet</li>
            </ol>
        <Card><h2></h2></Card>
    </Fragment>
};

export default Negroni;