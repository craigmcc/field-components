// PropTypes -----------------------------------------------------------------

// Type definitions for "props" arguments to the React components
// defined in this library.

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

// Props common to all "Action" <Col> components.
export interface BaseActionProps {
    action?: string;            // Action button text [no <Col> is rendered]
    actionClassName?: string;   // CSS styles for action <Col> [not rendered]
    actionDisabled?: boolean;   // Mark action button disabled? [not rendered]
    actionSize?: ButtonSize;    // Action button size [sm]
    actionType?: ButtonType;    // Action button type [button]
    actionVariant: Variant;     // Action button style variant [not rendered]
    onClick?(event: OnClickEvent) : void;
                                // Handle (event) for button click [not rendered]
}

// Props common to all "Element" <Row> components.
export interface BaseElementProps {
    elementClassName?: string;  // CSS styles for element <Row> [DEFAULT_ELEMENT_CLASS_NAME]
}

// Props common to all "Input" <Col> components.
export interface BaseInputProps {
    autoFocus?: boolean;        // Set automatic focus on this field? [false]
    fieldClassName?: string;    // CSS styles for field <Col> [col-9]
    fieldDisabled?: boolean;    // Mark field as disabled? [false]
    fieldName: string;          // HTML field name [*REQUIRED*]
    fieldValue?: any;           // Initially displayed field value [not rendered]
                                // (type is overridden in sub-interface)
    inputClassName?: string;    // CSS styles for input field [default in sub-interface]
    onBlur?(event: OnBlurEvent) : void;
                                // Handle (event) for losing focus [not rendered]
    onFocus?(event: OnFocusEvent) : void;
                                // Handle (event) for gaining focus [not rendered]
    onKeyDown?(event: OnKeyDownEvent) : void;
                                // Handle (event) for field being typed in [not rendered]

}

// Props common to all "Label" <Col> components.
export interface BaseLabelProps {
    fieldName: string;          // Field name for label mapping [*REQUIRED*]
    label?: string;             // Label text [no <Col> is rendered]
    labelClassName?: string;    // CSS styles for label <Col> [col-3]
}

// Props specific to a CheckboxElement <Row> component.
export interface CheckboxElementProps
    extends BaseActionProps, BaseElementProps, BaseLabelProps, CheckboxInputProps {
}

// Props specific to a CheckboxInput <Col> component.
export interface CheckboxInputProps extends BaseInputProps {
    fieldValue?: boolean;       // Initially displayed field value [not rendered]
    inputClassName?: string;    // CSS styles for input field [mr-2]
    label?: string;             // Label text [Checked?]
    onChange?(event: OnChangeEvent) : void;
                                // Handle (event) for field being changed [not rendered]
}

// Props specific to a SelectElement <Row> component.
export interface SelectElementProps
    extends BaseActionProps, BaseElementProps, BaseLabelProps, SelectInputProps {
}

// Props specific to a SelectInput <Col> component.
export interface SelectInputProps extends BaseInputProps {
    fieldValue?: string;        // Initially displayed field value [not rendered]
    inputClassName?: string;    // CSS styles for input field [form-control]
    onChange?(event: OnSelectEvent) : void;
                                // Handle (event) for field being changed [not rendered]
    options: SelectOptions;     // Individual options for this control [*REQUIRED*]
}

// Props specific to a TextElement <Row> component.
export interface TextElementProps
    extends BaseActionProps, BaseElementProps, BaseLabelProps, TextInputProps {
}

// Props specific to a TextInput <Col> component.
export interface TextInputProps extends BaseInputProps {
    fieldValue?: string;        // Initially displayed field value [not rendered]
    inputClassName?: string;    // CSS styles for input field [form-control]
    max?: string;               // Maximum allowed value [not rendered]
    maxLength?: number;         // Maximum characters allowed [not rendered]
    min?: string;               // Minimum value allowed [not rendered]
    minLength?: number;         // Minimum characters allowed [not rendered]
    onChange?(event: OnChangeEvent) : void;
                                // Handle (event) for field being changed [not rendered]
    pattern?: string;           // Regular expression match allowed [not rendered]
    placeholder?: string;       // Placeholder text for no value [not rendered]
    required?: boolean;         // Mark field as required? [not rendered]
    type?: string;              // Input control type [text]
}

// Private Definitions -------------------------------------------------------

// Detailed property types for non-basic properties
type ButtonSize = "lg" | "sm";
type ButtonType = "button" | "reset" | "submit";
type OnBlurEvent = React.FocusEvent<HTMLElement>;
type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;
type OnClickEvent = React.MouseEvent<HTMLElement, MouseEvent>;
type OnFocusEvent = React.FocusEvent<HTMLElement>;
type OnKeyDownEvent = React.KeyboardEvent<HTMLInputElement>;
type OnSelectEvent = React.ChangeEvent<HTMLSelectElement>; // onChange for a <select>
type SelectOption = {
    label: string;              // Label shown for this option [*REQUIRED*]
    value: string;              // Value returned for this option [*REQUIRED*]
}
type SelectOptions = SelectOption[];
type Variant = "primary" | "secondary" | "success" | "warning" | "danger"
    | "info" | "light" | "dark";

// Default className values for <Row> and <Col> components
export const DEFAULT_ELEMENT_CLASS_NAME = "mb-1 col-12";
export const DEFAULT_INPUT_CLASS_NAME = "col-9";
export const DEFAULT_LABEL_CLASS_NAME = "col-3";

