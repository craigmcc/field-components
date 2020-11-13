// TextElement ---------------------------------------------------------------

// Renders the <Row> component for an input, with up to three nested <Col>s:
// - Optional BaseLabel component
// - Required TextInput component
// - Optional BaseAction component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import BaseAction from "./BaseAction";
import BaseLabel from "./BaseLabel";
import TextInput from "./TextInput";
import { TextElementProps, DEFAULT_ELEMENT_CLASS_NAME } from "./PropTypes";

// Component Details --------------------------------------------------------

const TextElement = (props: TextElementProps) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}>
                <BaseLabel {...props}/>
                <TextInput {...props}/>
                <BaseAction {...props}/>
            </Row>
        </>
    )

}

export default TextElement;
