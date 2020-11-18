// TextElement ---------------------------------------------------------------

// Renders the <Row> component for an input, with up to three nested <Col>s:
// - Optional <BaseLabel> component
// - Required <TextInput> component
// - Optional <BaseAction> component

// External Modules ----------------------------------------------------------

import React from "react";
import Row from "react-bootstrap/Row";

// Internal Modules ----------------------------------------------------------

import { BaseAction, Props as BaseActionProps } from "./BaseAction";
import { BaseLabel, Props as BaseLabelProps } from "./BaseLabel";
import { DEFAULT_ELEMENT_CLASS_NAME } from "./Constants";
import { TextInput, Props as TextInputProps } from "./TextInput";
import { BaseElementProps } from "./Types";

// Property Details ---------------------------------------------------------

export interface Props extends
    BaseActionProps, BaseElementProps, BaseLabelProps, TextInputProps {
}

// Component Details --------------------------------------------------------

export const TextElement = (props: Props) => {

    return (
        <>
            <Row
                className={props.elementClassName ? props.elementClassName : DEFAULT_ELEMENT_CLASS_NAME}
                data-testid="TextElement"
            >
                <BaseLabel {...props as BaseLabelProps}/>
                <TextInput {...props as TextInputProps}/>
                <BaseAction {...props as BaseActionProps}/>
            </Row>
        </>
    )

}
