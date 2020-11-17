// PropTypes -----------------------------------------------------------------

// Type definitions for "props" arguments to the React components
// defined in this library.

// External Modules ----------------------------------------------------------

import React from "react";

// Interface Details ---------------------------------------------------------

export interface ActionButtonProps {
    autoFocus?: boolean;        // Set automatic focus on this element? [false]
    disabled?: boolean;         // Mark button disabled? [not rendered]
    label?: string;             // Button label [Action]
    onClick?(event: OnClickEvent) : void;
                                // Handle (event) for button click [not rendered]
    size?: ButtonSize;          // Size of this button [sm]
    type?: ButtonType;          // Type of this button [button]
    variant?: Variant;          // Style variant [warning]
}

// Props specific to an AreaElement <Row> component.
export interface AreaElementProps
    extends AreaInputProps, BaseActionProps, BaseElementProps, BaseLabelProps  {
}

// Props specific to an AreaInput <Col> component.
export interface AreaInputProps extends BaseInputProps {
    cols?: number               // Visible width (in characters) [not rendered]
    fieldValue?: string;        // Initially displayed field value [not rendered]
    inputClassName?: string;    // CSS styles for input field [form-control]
    maxLength?: number;         // Maximum characters allowed [not rendered]
    minLength?: number;         // Minimum characters allowed [not rendered]
    onChange?(event: OnAreaEvent) : void;
                                // Handle (event) for field being changed [not rendered]
    placeholder?: string;       // Placeholder text for no value [not rendered]
    required?: boolean;         // Mark field as required? [not rendered]
    rows?: number               // Visible height (in rows) [not rendered]
}

// Props common to all "Action" <Col> components.
export interface BaseActionProps {
    action?: string;            // Action button text [no <Col> is rendered]
    actionClassName?: string;   // CSS styles for action <Col> [not rendered]
    actionDisabled?: boolean;   // Mark action button disabled? [not rendered]
    actionSize?: ButtonSize;    // Action button size [sm]
    actionType?: ButtonType;    // Action button type [button]
    actionVariant?: Variant;    // Action button style variant [not rendered]
    autoFocus?: boolean;        // Set automatic focus on this element? [false]
    onClick?(event: OnClickEvent) : void;
                                // Handle (event) for button click [not rendered]
    required?: boolean;         // Mark field as required? [not rendered]
}

// Props common to all "Element" <Row> components.
export interface BaseElementProps {
    elementClassName?: string;  // CSS styles for element <Row> [DEFAULT_ELEMENT_CLASS_NAME]
}

// Props common to all "Input" <Col> components.
export interface BaseInputProps {
    autoFocus?: boolean;        // Set automatic focus on this element? [false]
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
    readOnly?: boolean;         // Mark control as read only? [false]
    required?: boolean;         // Mark field as required? [not rendered]
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
    onKeyDown?(event: OnKeyDownEvent) : void;
                                // Handle (event) for field being typed in [not rendered]
    pattern?: string;           // Regular expression match allowed [not rendered]
    placeholder?: string;       // Placeholder text for no value [not rendered]
    type?: string;              // Input control type [text]
}

// Private Definitions -------------------------------------------------------

// Detailed property types for non-basic properties
export type ButtonSize = "lg" | "sm";
export type ButtonType = "button" | "reset" | "submit";
export type OnBlurEvent = React.FocusEvent<HTMLElement>;
export type OnAreaEvent = React.ChangeEvent<HTMLTextAreaElement>; // onChange for a <textarea>
export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type OnClickEvent = React.MouseEvent<HTMLElement, MouseEvent>;
export type OnFocusEvent = React.FocusEvent<HTMLElement>;
export type OnKeyDownEvent = React.KeyboardEvent<HTMLInputElement>;
export type OnSelectEvent = React.ChangeEvent<HTMLSelectElement>; // onChange for a <select>
export type SelectOption = {
    label: string;              // Label shown for this option [*REQUIRED*]
    value: string;              // Value returned for this option [*REQUIRED*]
}
export type SelectOptions = SelectOption[];
export type Variant = "primary" | "secondary" | "success" | "warning" | "danger"
    | "info" | "light" | "dark";

