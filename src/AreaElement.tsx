// AreaElement ---------------------------------------------------------------

// Renders the <Row> component for a <textarea>, with up to three nested <Col>s:
// - Optional <BaseLabel> component
// - Required <AreaInput> component
// - Optional <BaseAction> component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import { AreaInput, Props as AreaInputProps } from "./AreaInput";
import { BaseAction, Props as BaseActionProps } from "./BaseAction";
import { Props as BaseElementProps } from "./BaseElement";
import { BaseLabel, Props as BaseLabelProps } from "./BaseLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";

// Property Details ---------------------------------------------------------

export interface Props extends
    AreaInputProps, BaseActionProps, BaseElementProps, BaseLabelProps {
}

// Component Details --------------------------------------------------------

export const AreaElement = (props: Props) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
                data-testid="AreaElementRow"
            >
                <BaseLabel {...props as BaseLabelProps}/>
                <AreaInput {...props as AreaInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
