// SelectElement -------------------------------------------------------------

// Renders the <Row> component for a select, with up to three nested <Col>s:
// - Optional BaseLabel component
// - Required SelectInput component
// - Optional BaseAction component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import BaseAction from "./BaseAction";
import BaseLabel from "./BaseLabel";
import SelectInput from "./SelectInput";
import { SelectElementProps, DEFAULT_ELEMENT_CLASS_NAME } from "./PropTypes";

// Component Details --------------------------------------------------------

const SelectElement = (props: SelectElementProps) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}>
                <BaseLabel {...props}/>
                <SelectInput {...props}/>
                <BaseAction {...props}/>
            </Row>
        </>
    )

}

export default SelectElement;
