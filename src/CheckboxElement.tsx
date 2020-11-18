// CheckboxElement -----------------------------------------------------------

// Renders the <Row> component for a checkbox, with up to three nested <Col>s:
// - Optional <CheckboxLabel> component
// - Required <CheckboxInput> component
// - Optional <BaseAction> component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import { BaseAction, Props as BaseActionProps } from "./BaseAction";
import { Props as BaseElementProps } from "./BaseElement";
import { CheckboxInput, Props as CheckboxInputProps } from "./CheckboxInput";
import { CheckboxLabel, Props as CheckboxLabelProps } from "./CheckboxLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";

// Property Details ---------------------------------------------------------

export interface Props extends
    BaseActionProps, BaseElementProps, CheckboxInputProps, CheckboxLabelProps {
}

// Component Details --------------------------------------------------------

export const CheckboxElement = (props: Props) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
                data-testid="CheckboxElementRow"
            >
                <CheckboxLabel {...props as CheckboxLabelProps}/>
                <CheckboxInput {...props as CheckboxInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
