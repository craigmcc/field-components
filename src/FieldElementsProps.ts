// FieldElementsProps --------------------------------------------------------

// Interface definitions for "props" arguments to the components
// defined in this module.

// External Modules ----------------------------------------------------------

import React from "react";

// Interface Details ---------------------------------------------------------

export interface ActionButtonProps {
    disabled?: boolean;         // Mark button disabled? [not rendered]
    label?: string;             // Button label [Action]
    onClick?(event: OnClickEvent) : void;
                                // Handle (event) for button click [not rendered]
    size?: ButtonSize;          // Size of this button [sm]
    type?: ButtonType;          // Type of this button [button]
    variant?: Variant;          // Style variant [warning]
}

export interface CommonLabelProps {
    fieldName: string;          // Field name for label mapping
    label?: string;             // Label text [no <Col> is rendered]
    labelClassName?: string;    // CSS styles for label <Col> [col-3]
}

export interface CommonActionProps {
    action?: string;            // Action button text [no <Col> is rendered]
    actionClassName?: string;   // CSS styles for action <Col> [not rendered]
    actionDisabled?: boolean;   // Mark action button disabled? [not rendered]
    actionSize?: ButtonSize;    // Action button size [sm]
    actionType?: ButtonType;    // Action button type [button]
    actionVariant: Variant;     // Action button style variant [not rendered]
    onClick?(event: OnClickEvent) : void;
                                // Handle (event) for button click [not rendered]
}

// Private Definitions -------------------------------------------------------

type ButtonSize = "lg" | "sm";
type ButtonType = "button" | "reset" | "submit";
type OnClickEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type Variant = "primary" | "secondary" | "success" | "warning" | "danger"
    | "info" | "light" | "dark";

