// CommonLabel ---------------------------------------------------------------

// Renders the <Col> element for the label before a common input element.
// It is only rendered if a "label" property is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { CommonLabelProps } from "./FieldElementsProps";

// Component Details ---------------------------------------------------------

export const CommonLabel = (props: CommonLabelProps) => {

    return (
        <>
            {props.label ? (
                <Col className={props.labelClassName ? props.labelClassName : "col-3"}>
                    <label htmlFor={props.fieldName ? props.fieldName : "label"}>
                        {props.label}
                    </label>
                </Col>
            ) : null }
        </>
    )

}

export default CommonLabel;
