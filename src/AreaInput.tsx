// AreaInput -----------------------------------------------------------------

// Renders the <Col> component for a textarea input control.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { DEFAULT_CONTROL_CLASS_NAME, DEFAULT_INPUT_CLASS_NAME } from "./Constants";
import { BaseAreaProps } from "./Types";

// Property Details ----------------------------------------------------------

export interface Props extends BaseAreaProps {
}

// Component Details ---------------------------------------------------------

export const AreaInput = (props: Props) => {

    const FIELD_NAME = (props.fieldName ? props.fieldName : "area");

    return (
        <>
            <Col
                className={props.fieldClassName ? props.fieldClassName : DEFAULT_INPUT_CLASS_NAME}
                data-testid="AreaInputCol"
            >
                <textarea
                    autoFocus={props.autoFocus ? props.autoFocus : undefined}
                    className={props.controlClassName ? props.controlClassName : DEFAULT_CONTROL_CLASS_NAME}
                    cols={props.cols ? props.cols : undefined}
                    disabled={props.fieldDisabled ? props.fieldDisabled : undefined}
                    id={props.fieldName ? props.fieldName : FIELD_NAME}
                    maxLength={props.maxLength ? props.maxLength : undefined}
                    minLength={props.minLength ? props.minLength : undefined}
                    name={props.fieldName ? props.fieldName : FIELD_NAME}
                    onBlur={props.onBlur ? props.onBlur : undefined}
                    onChange={props.onChange ? props.onChange : undefined}
                    onFocus={props.onFocus ? props.onFocus : undefined}
                    onKeyDown={props.onKeyDown ? props.onKeyDown: undefined}
                    placeholder={props.placeholder ? props.placeholder : undefined}
                    readOnly={props.readOnly ? props.readOnly : undefined}
                    required={props.required ? props.required : undefined}
                    rows={props.rows ? props.rows : undefined}
                    value={props.fieldValue ? props.fieldValue : ""}
                />
            </Col>
        </>
    )

}
