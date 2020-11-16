// CheckboxElement -----------------------------------------------------------

// Renders the <Row> component for a checkbox, with up to three nested <Col>s:
// - Optional CheckboxLabel component
// - Required CheckboxInput component
// - Optional BaseAction component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import { BaseAction } from "./BaseAction";
import { CheckboxInput } from "./CheckboxInput";
import { CheckboxLabel } from "./CheckboxLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";
import {
    BaseActionProps,
    BaseLabelProps,
    CheckboxElementProps,
    CheckboxInputProps,
} from "./PropTypes";

// Component Details --------------------------------------------------------

export const CheckboxElement = (props: CheckboxElementProps) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
            >
                <CheckboxLabel {...props as BaseLabelProps}/>
                <CheckboxInput {...props as CheckboxInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
