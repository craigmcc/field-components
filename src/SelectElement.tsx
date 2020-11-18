// SelectElement -------------------------------------------------------------

// Renders the <Row> component for a select, with up to three nested <Col>s:
// - Optional <BaseLabel> component
// - Required <SelectInput> component
// - Optional <BaseAction> component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import { BaseAction, Props as BaseActionProps } from "./BaseAction";
import { Props as BaseElementProps } from "./BaseElement";
import { BaseLabel, Props as BaseLabelProps } from "./BaseLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";
import { SelectInput, Props as SelectInputProps } from "./SelectInput";

// Property Details ---------------------------------------------------------

export interface Props extends
    BaseActionProps, BaseElementProps, BaseLabelProps, SelectInputProps {
}

// Component Details --------------------------------------------------------

export const SelectElement = (props: Props) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
                data-testid="SelectElementRow"
            >
                <BaseLabel {...props as BaseLabelProps}/>
                <SelectInput {...props as SelectInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
