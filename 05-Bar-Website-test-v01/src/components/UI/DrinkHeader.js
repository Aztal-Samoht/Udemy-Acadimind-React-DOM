import React, { /*useReducer, useState, useRef,*/ Fragment } from "react";

import Card from "../../../04-section 10/src/components/UI/Card/Card";
import { Fragment } from "react";

const NewComponent = (props) => {
    return <Card>
        <H1>{props.drinkName}</H1>
    </Card>
};

export default NewComponent;