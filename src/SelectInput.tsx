// SelectInput ---------------------------------------------------------------

// Renders the <Col> component for a select input control.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_CONTROL_CLASS_NAME, DEFAULT_INPUT_CLASS_NAME } from "./Constants";
import { BaseInputProps, SelectOptions } from "./Types";

// Property Details ----------------------------------------------------------

export interface Props extends BaseInputProps {
    options: SelectOptions;     // Individual options for this control [*REQUIRED*]
}

// Component Details ---------------------------------------------------------

export const SelectInput = (props: Props) => {

    const FIELD_NAME = (props.fieldName ? props.fieldName : "select");

    return (
        <>
            <Col
                className={props.fieldClassName ? props.fieldClassName : DEFAULT_INPUT_CLASS_NAME}
                data-testid="SelectInputCol"
            >
                <select
                    autoFocus={props.autoFocus ? props.autoFocus : undefined}
                    className={props.controlClassName ? props.controlClassName : DEFAULT_CONTROL_CLASS_NAME}
                    disabled={props.fieldDisabled ? props.fieldDisabled : undefined}
                    id={props.fieldName ? props.fieldName : FIELD_NAME}
                    name={props.fieldName ? props.fieldName : FIELD_NAME}
                    onBlur={props.onBlur ? props.onBlur : undefined}
                    onChange={props.onChange ? props.onChange : undefined}
                    onFocus={props.onFocus ? props.onFocus : undefined}
                    // readOnly={props.readOnly ? props.readOnly : undefined}
                    required={props.required ? props.required : undefined}
                    value={props.fieldValue ? props.fieldValue : ""}
                >
                    {props.options.map(option => (
                        <option key={option.value} value={"" + option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </Col>
        </>
    )

}
