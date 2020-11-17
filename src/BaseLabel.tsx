// BaseLabel -----------------------------------------------------------------

// Renders the <Col> component for the label before any "Input" component.
// It is only rendered if a "label" property is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_LABEL_CLASS_NAME } from "./Constants";
import { BaseLabelProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const BaseLabel = (props: BaseLabelProps) => {

    return (
        <>
            {props.label ? (
                <Col
                    className={props.labelClassName ? props.labelClassName : DEFAULT_LABEL_CLASS_NAME}
                    data-testid="BaseLabelCol"
                >
                    <label htmlFor={props.fieldName ? props.fieldName : "label"}>
                        {props.label}
                    </label>
                </Col>
            ) : null }
        </>
    )

}
