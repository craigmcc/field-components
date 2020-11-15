// TextInput -----------------------------------------------------------------

// Renders the <Col> component for a text input control.  Supports extended types
// like "date" and "time" on modern browsers, but applications should provide
// appropriate fallback behaviors on older ones.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_INPUT_CLASS_NAME } from "./Constants";
import { TextInputProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const TextInput = (props: TextInputProps) => {

    const FIELD_NAME = (props.fieldName ? props.fieldName : "text");

    return (
        <>
            <Col className={props.fieldClassName ? props.fieldClassName : DEFAULT_INPUT_CLASS_NAME}>
                <input
                    autoFocus={props.autoFocus ? props.autoFocus : undefined}
                    className={props.inputClassName ? props.inputClassName : "form-control"}
                    disabled={props.fieldDisabled ? props.fieldDisabled : undefined}
                    id={props.fieldName ? props.fieldName : FIELD_NAME}
                    max={props.max ? props.max : undefined}
                    maxLength={props.maxLength ? props.maxLength : undefined}
                    min={props.min ? props.min : undefined}
                    minLength={props.minLength ? props.minLength : undefined}
                    name={props.fieldName ? props.fieldName : FIELD_NAME}
                    onBlur={props.onBlur ? props.onBlur : undefined}
                    onChange={props.onChange ? props.onChange : undefined}
                    onFocus={props.onFocus ? props.onFocus : undefined}
                    onKeyDown={props.onKeyDown ? props.onKeyDown : undefined}
                    pattern={props.pattern ? props.pattern : undefined}
                    placeholder={props.placeholder ? props.placeholder : undefined}
                    readOnly={props.readOnly ? props.readOnly : undefined}
                    required={props.required ? props.required : undefined}
                    type={props.type ? props.type : "text"}
                    value={props.fieldValue ? props.fieldValue : ""}
                />
            </Col>
        </>
    )

}
