// CheckboxInput.test --------------------------------------------------------

// Unit tests for <CheckboxInput/> component.

// TODO - verify labelling if label property is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

// Internal Modules ----------------------------------------------------------

import { CheckboxInput, Props as CheckboxInputProps } from "../../src/CheckboxInput";
import {DEFAULT_CONTROL_CLASS_NAME, DEFAULT_INPUT_CLASS_NAME} from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "CheckboxInputCol";

const defaultProps: CheckboxInputProps = {
    fieldName: "myCheckboxInput",
}

const extractControl = (): HTMLElement => {
    return screen.getByRole("checkbox");
}

const onBlur = (event: React.FocusEvent): void => {
    onBlurCount++;
}
let onBlurCount: number = 0;

const onChange = (event: React.ChangeEvent): void => {
    onChangeCount++;
}
let onChangeCount: number = 0;

const onFocus = (event: React.FocusEvent): void => {
    onFocusCount++;
}
let onFocusCount: number = 0;

const renderComponent = (testProps: Partial<CheckboxInputProps> = {}) => {
    return render(
        <CheckboxInput
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<CheckboxInputProps>, checkboxInputCol: HTMLElement): void => {

    if (testProps.fieldClassName) {
        expect(checkboxInputCol).toHaveClass(testProps.fieldClassName);
    } else {
        expect(checkboxInputCol).toHaveClass(DEFAULT_INPUT_CLASS_NAME);
    }

    const checkboxInput: HTMLElement = extractControl();
    expect(checkboxInput.tagName).toBe("INPUT");

    // Check BaseInputProps attributes
    /*
        if (testProps.autoFocus) {
            expect(checkboxInput).toHaveAttribute("autoFocus");
            expect(checkboxInput).toHaveFocus();
        } else {
            expect(checkboxInput).not.toHaveAttribute("autoFocus");
            expect(checkboxInput).not.toHaveFocus();
        }
    */
    if (testProps.controlClassName) {
        expect(checkboxInput).toHaveClass(testProps.controlClassName);
    } else {
        expect(checkboxInput).toHaveClass(DEFAULT_CONTROL_CLASS_NAME + " mr-2");
    }
    if (testProps.fieldDisabled) {
        expect(checkboxInput).toHaveAttribute("disabled");
        expect(checkboxInput).toBeDisabled();
    } else {
        expect(checkboxInput).not.toHaveAttribute("disabled");
        expect(checkboxInput).not.toBeDisabled();
    }
    if (testProps.fieldName) {
        expect(checkboxInput).toHaveAttribute("id", testProps.fieldName);
        expect(checkboxInput).toHaveAttribute("name", testProps.fieldName);
    } else {
        expect(checkboxInput).toHaveAttribute("id", testProps.fieldName);
        expect(checkboxInput).toHaveAttribute("name", testProps.fieldName);
    }
    if (testProps.fieldValue) {
        expect(checkboxInput).toBeChecked();
    }
    if (testProps.readOnly) {
        expect(checkboxInput).toHaveAttribute("readonly");
    } else {
        expect(checkboxInput).not.toHaveAttribute("readonly");
    }
    if (testProps.required) {
        expect(checkboxInput).toHaveAttribute("required");
        expect(checkboxInput).toBeRequired();
    } else {
        expect(checkboxInput).not.toHaveAttribute("required");
        expect(checkboxInput).not.toBeRequired();
    }

    // TODO - verify <label> if "label" property is passed

}

const testEvents = (testProps: Partial<CheckboxInputProps>, checkboxInputCol: HTMLElement) => {

    const checkboxInput: HTMLElement = extractControl();

    if (testProps.onBlur) {
        fireEvent.blur(checkboxInput);
        expect(onBlurCount).toBe(1);
    }
/* TODO - does not get counted???
    if (testProps.onChange) {
//        userEvent.type(checkboxInput, newCheckbox, {skipClick: true});
        fireEvent.change(checkboxInput);
        expect(onChangeCount).toBe(1);
    }
*/
    if (testProps.onFocus) {
        fireEvent.focus(checkboxInput);
        expect(onFocusCount).toBe(1);
    }

}

// Test Lifecycle Hooks ------------------------------------------------------

beforeEach(() => {
    onBlurCount = 0;
    onChangeCount = 0;
    onFocusCount = 0;
});

// Test Suites ---------------------------------------------------------------

describe("<CheckboxInput/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<CheckboxInputProps> = {
            autoFocus: true,
            controlClassName: "not-form-control",
            fieldClassName: "col-99 mr-1",
            fieldDisabled: true,
            fieldValue: true,
            label: "My Label",
            onChange: onChange, // To avoid "no onChange" warning
            readOnly: true,
            required: true,
        }
        renderComponent(testProps);

        const checkboxInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <CheckboxInput/> all");
//        screen.debug(checkboxInputCol);
        testAttributes(testProps, checkboxInputCol);
        testEvents(testProps, checkboxInputCol);

    });

    test("Render with event handlers", () => {

        const testProps: Partial<CheckboxInputProps> = {
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
        }
        renderComponent(testProps);

        const checkboxInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <CheckboxInput/> events");
//        screen.debug(checkboxInputCol);
        testEvents(testProps, checkboxInputCol);

    });

    test("Render with minimal props", () => {

        const testProps: Partial<CheckboxInputProps> = {
            onChange: onChange, // To avoid "no onChange" warning
        }
        renderComponent(testProps);

        const checkboxInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <CheckboxInput/> minimal");
//        screen.debug(checkboxInputCol);
        testAttributes(testProps, checkboxInputCol);
        testEvents(testProps, checkboxInputCol);

    });

});
