// CheckboxLabel -------------------------------------------------------------

// Renders the <Col> component for the label area before a checkbox "Input"
// component.  The actual label text will be rendered after the checkbox
// itself, by the CheckboxInput component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_LABEL_CLASS_NAME } from "./Constants";
import { BaseLabelProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const CheckboxLabel = (props: BaseLabelProps) => {

    return (
        <>
            {props.label ? (
                <Col className={props.labelClassName ? props.labelClassName : DEFAULT_LABEL_CLASS_NAME}>
                    {/* Label text will be rendered by CheckboxInput */}
                </Col>
            ) : null }
        </>
    )

}
