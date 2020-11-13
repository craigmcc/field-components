// CheckboxElement -----------------------------------------------------------

// Renders the <Row> component for a checkbox, with up to three nested <Col>s:
// - Optional CheckboxLabel component
// - Required CheckboxInput component
// - Optional BaseAction component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import BaseAction from "./BaseAction";
import CheckboxInput from "./CheckboxInput";
import CheckboxLabel from "./CheckboxLabel";
import { CheckboxElementProps, DEFAULT_ELEMENT_CLASS_NAME } from "./PropTypes";

// Component Details --------------------------------------------------------

const CheckboxElement = (props: CheckboxElementProps) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}>
                <CheckboxLabel {...props}/>
                <CheckboxInput {...props}/>
                <BaseAction {...props}/>
            </Row>
        </>
    )

}

export default CheckboxElement;
