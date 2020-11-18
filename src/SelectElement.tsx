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
import { BaseLabel, Props as BaseLabelProps } from "./BaseLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";
import { SelectInput, Props as SelectInputProps } from "./SelectInput";
import { BaseElementProps } from "./Types";

// Property Details ---------------------------------------------------------

export interface Props extends BaseElementProps {
}

// Component Details --------------------------------------------------------

export const SelectElement = (props: Props) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
                data-testid="SelectElement"
            >
                <BaseLabel {...props as BaseLabelProps}/>
                <SelectInput {...props as SelectInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
