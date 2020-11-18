// TextInput.test ------------------------------------------------------------

// Unit tests for <TextInput/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

// Internal Modules ----------------------------------------------------------

import { TextInput, Props as TextInputProps } from "../../src/TextInput";
import {DEFAULT_CONTROL_CLASS_NAME, DEFAULT_INPUT_CLASS_NAME} from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "TextInputCol";

const defaultProps: TextInputProps = {
    fieldName: "myTextInput",
}

const extractControl = (): HTMLElement => {
    return screen.getByRole("textbox");
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

const onKeyDown = (event: React.KeyboardEvent): void => {
    onKeyDownCount++;
}
let onKeyDownCount: number = 0;

const renderComponent = (testProps: Partial<TextInputProps> = {}) => {
    return render(
        <TextInput
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<TextInputProps>, textInputCol: HTMLElement): void => {

    if (testProps.fieldClassName) {
        expect(textInputCol).toHaveClass(testProps.fieldClassName);
    } else {
        expect(textInputCol).toHaveClass(DEFAULT_INPUT_CLASS_NAME);
    }

    const textInput: HTMLElement = extractControl();
    expect(textInput.tagName).toBe("INPUT");

    // Check BaseInputProps attributes
    /*
        if (testProps.autoFocus) {
            expect(textInput).toHaveAttribute("autoFocus");
            expect(textInput).toHaveFocus();
        } else {
            expect(textInput).not.toHaveAttribute("autoFocus");
            expect(textInput).not.toHaveFocus();
        }
    */
    if (testProps.controlClassName) {
        expect(textInput).toHaveClass(testProps.controlClassName);
    } else {
        expect(textInput).toHaveClass(DEFAULT_CONTROL_CLASS_NAME);
    }
    if (testProps.fieldDisabled) {
        expect(textInput).toHaveAttribute("disabled");
        expect(textInput).toBeDisabled();
    } else {
        expect(textInput).not.toHaveAttribute("disabled");
        expect(textInput).not.toBeDisabled();
    }
    if (testProps.fieldName) {
        expect(textInput).toHaveAttribute("id", testProps.fieldName);
        expect(textInput).toHaveAttribute("name", testProps.fieldName);
    } else {
        expect(textInput).toHaveAttribute("id", testProps.fieldName);
        expect(textInput).toHaveAttribute("name", testProps.fieldName);
    }
    if (testProps.fieldValue) {
        expect(textInput).toHaveValue(testProps.fieldValue);
    }
    if (testProps.max) {
        expect(textInput).toHaveAttribute("max", testProps.max);
    }
    if (testProps.maxLength) {
        expect(textInput).toHaveAttribute("maxLength", "" + testProps.maxLength);
    }
    if (testProps.min) {
        expect(textInput).toHaveAttribute("min", testProps.min);
    }
    if (testProps.minLength) {
        expect(textInput).toHaveAttribute("minLength", "" + testProps.minLength);
    }
    if (testProps.readOnly) {
        expect(textInput).toHaveAttribute("readonly");
    } else {
        expect(textInput).not.toHaveAttribute("readonly");
    }
    if (testProps.required) {
        expect(textInput).toHaveAttribute("required");
        expect(textInput).toBeRequired();
    } else {
        expect(textInput).not.toHaveAttribute("required");
        expect(textInput).not.toBeRequired();
    }

}

const testEvents = (testProps: Partial<TextInputProps>, textInputCol: HTMLElement) => {

    const textInput: HTMLElement = extractControl();

    if (testProps.onBlur) {
        fireEvent.blur(textInput);
        expect(onBlurCount).toBe(1);
    }
    if (testProps.onChange) {
        const newText = "New Value Goes Here";
//        userEvent.type(textInput, newText, {skipClick: true});
        fireEvent.change(textInput, {target: {value: newText}})
        expect(onChangeCount).toBe(1);
    }
    if (testProps.onFocus) {
        fireEvent.focus(textInput);
        expect(onFocusCount).toBe(1);
    }
    if (testProps.onKeyDown) {
        fireEvent.keyDown(textInput);
        expect(onKeyDownCount).toBe(1);
    }

}

// Test Lifecycle Hooks ------------------------------------------------------

beforeEach(() => {
    onBlurCount = 0;
    onChangeCount = 0;
    onFocusCount = 0;
    onKeyDownCount = 0;
});

// Test Suites ---------------------------------------------------------------

describe("<TextInput/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<TextInputProps> = {
            autoFocus: true,
            controlClassName: "not-form-control",
            fieldClassName: "col-99 mr-1",
            fieldDisabled: true,
            fieldValue: "abc",
            max: "ZZZ",
            maxLength: 999,
            min: "AAA",
            minLength: 0,
            onChange: onChange, // To avoid "no onChange" warning
            readOnly: true,
            required: true,
        }
        renderComponent(testProps);

        const textInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <TextInput/> all");
//        screen.debug(textInputCol);
        testAttributes(testProps, textInputCol);
        testEvents(testProps, textInputCol);

    });

    test("Render with event handlers", () => {

        const testProps: Partial<TextInputProps> = {
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
        }
        renderComponent(testProps);

        const textInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <TextInput/> events");
//        screen.debug(textInputCol);
        testEvents(testProps, textInputCol);

    });

    test("Render with minimal props", () => {

        const testProps: Partial<TextInputProps> = {
            onChange: onChange, // To avoid "no onChange" warning
        }
        renderComponent(testProps);

        const textInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <TextInput/> minimal");
//        screen.debug(textInputCol);
        testAttributes(testProps, textInputCol);
        testEvents(testProps, textInputCol);

    });

});
