// CheckboxInput -------------------------------------------------------------

// Renders the <Col> component for a checkbox input control.  Unlike other "Input"
// components, the actual label text is rendered after the checkbox, rather
// than separately in a "Label" component.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_INPUT_CLASS_NAME } from "./Constants";
import { CheckboxInputProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const CheckboxInput = (props: CheckboxInputProps) => {

    const FIELD_NAME = (props.fieldName ? props.fieldName : "checkbox");

    return (
        <>
            <Col className={props.fieldClassName ? props.fieldClassName : DEFAULT_INPUT_CLASS_NAME}>
                <input
                    autoFocus={props.autoFocus ? props.autoFocus : undefined}
                    checked={props.fieldValue ? props.fieldValue : undefined}
                    className={props.inputClassName ? props.inputClassName : "mr-2"}
                    disabled={props.fieldDisabled ? props.fieldDisabled : undefined}
                    id={props.fieldName ? props.fieldName : FIELD_NAME}
                    name={props.fieldName ? props.fieldName : FIELD_NAME}
                    onBlur={props.onBlur ? props.onBlur : undefined}
                    onChange={props.onChange ? props.onChange : undefined}
                    onFocus={props.onFocus ? props.onFocus : undefined}
                    readOnly={props.readOnly ? props.readOnly : undefined}
                    required={props.required ? props.required : undefined}
                    type="checkbox"
                />
                {props.label ? (
                    <label htmlFor={props.fieldName ? props.fieldName : FIELD_NAME}>
                        {props.label}
                    </label>
                ) : null }
            </Col>
        </>
    )

}
