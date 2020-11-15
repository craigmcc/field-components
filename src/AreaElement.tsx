// AreaElement ---------------------------------------------------------------

// Renders the <Row> component for an textarea, with up to three nested <Col>s:
// - Optional BaseLabel component
// - Required AreaInput component
// - Optional BaseAction component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import AreaInput from "./AreaInput";
import BaseAction from "./BaseAction";
import BaseLabel from "./BaseLabel";
import {
    AreaElementProps,
    AreaInputProps,
    BaseActionProps,
    BaseLabelProps,
    DEFAULT_ELEMENT_CLASS_NAME
} from "./PropTypes";

// Component Details --------------------------------------------------------

const AreaElement = (props: AreaElementProps) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}>
                <BaseLabel {...props as BaseLabelProps}/>
                <AreaInput {...props as AreaInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}

export default AreaElement;