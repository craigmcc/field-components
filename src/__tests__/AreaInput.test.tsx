// AreaInput.test ------------------------------------------------------------

// Unit tests for <AreaInput/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

// Internal Modules ----------------------------------------------------------

import { AreaInput, Props as AreaInputProps } from "../../src/AreaInput";
import {DEFAULT_CONTROL_CLASS_NAME, DEFAULT_INPUT_CLASS_NAME} from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "AreaInputCol";

const defaultProps: AreaInputProps = {
    fieldName: "myAreaInput",
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
let onKeyDownCount = 0;

const renderComponent = (testProps: Partial<AreaInputProps> = {}) => {
    return render(
        <AreaInput
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<AreaInputProps>, areaInputCol: HTMLElement): void => {

    if (testProps.fieldClassName) {
        expect(areaInputCol).toHaveClass(testProps.fieldClassName);
    } else {
        expect(areaInputCol).toHaveClass(DEFAULT_INPUT_CLASS_NAME);
    }

    const areaInput: HTMLElement = extractControl();
    expect(areaInput.tagName).toBe("TEXTAREA");

    // Check BaseInputProps attributes
/*
    if (testProps.autoFocus) {
        expect(areaInput).toHaveAttribute("autoFocus");
        expect(areaInput).toHaveFocus();
    } else {
        expect(areaInput).not.toHaveAttribute("autoFocus");
        expect(areaInput).not.toHaveFocus();
    }
*/
    if (testProps.controlClassName) {
        expect(areaInput).toHaveClass(testProps.controlClassName);
    } else {
        expect(areaInput).toHaveClass(DEFAULT_CONTROL_CLASS_NAME);
    }
    if (testProps.fieldDisabled) {
        expect(areaInput).toHaveAttribute("disabled");
        expect(areaInput).toBeDisabled();
    } else {
        expect(areaInput).not.toHaveAttribute("disabled");
        expect(areaInput).not.toBeDisabled();
    }
    if (testProps.fieldName) {
        expect(areaInput).toHaveAttribute("id", testProps.fieldName);
        expect(areaInput).toHaveAttribute("name", testProps.fieldName);
    } else {
        expect(areaInput).toHaveAttribute("id", testProps.fieldName);
        expect(areaInput).toHaveAttribute("name", testProps.fieldName);
    }
    if (testProps.fieldValue) {
        expect(areaInput).toHaveValue(testProps.fieldValue);
    }
    if (testProps.maxLength) {
        expect(areaInput).toHaveAttribute("maxLength", "" + testProps.maxLength);
    }
    if (testProps.minLength) {
        expect(areaInput).toHaveAttribute("minLength", "" + testProps.minLength);
    }
    if (testProps.readOnly) {
        expect(areaInput).toHaveAttribute("readonly");
    } else {
        expect(areaInput).not.toHaveAttribute("readonly");
    }
    if (testProps.required) {
        expect(areaInput).toHaveAttribute("required");
        expect(areaInput).toBeRequired();
    } else {
        expect(areaInput).not.toHaveAttribute("required");
        expect(areaInput).not.toBeRequired();
    }

    // Check AreaInputProps Extra Attributes
    if (testProps.cols) {
        expect(areaInput).toHaveAttribute("cols", "" + testProps.cols);
    } else {
        expect(areaInput).not.toHaveAttribute("cols");
    }
    if (testProps.rows) {
        expect(areaInput).toHaveAttribute("rows", "" + testProps.rows);
    } else {
        expect(areaInput).not.toHaveAttribute("rows");
    }

}

const testEvents = (testProps: Partial<AreaInputProps>, areaInputCol: HTMLElement) => {

    const areaInput: HTMLElement = extractControl();

    if (testProps.onBlur) {
        fireEvent.blur(areaInput);
        expect(onBlurCount).toBe(1);
    }
    if (testProps.onChange) {
        const newText = "New Value Goes Here";
//        userEvent.type(areaInput, newText, {skipClick: true});
        fireEvent.change(areaInput, {target: {value: newText}})
        expect(onChangeCount).toBe(1);
    }
    if (testProps.onFocus) {
        fireEvent.focus(areaInput);
        expect(onFocusCount).toBe(1);
    }
    if (testProps.onKeyDown) {
        fireEvent.keyDown(areaInput);
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

describe("<AreaInput/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<AreaInputProps> = {
            autoFocus: true,
            cols: 50,
            controlClassName: "not-form-control",
            fieldClassName: "col-99 mr-1",
            fieldDisabled: true,
            fieldValue: "abc",
            onChange: onChange, // To avoid "no onChange" warning
            readOnly: true,
            required: true,
            rows: 10,
        }
        renderComponent(testProps);

        const areaInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <AreaInput/> all");
//        screen.debug(areaInputCol);
        testAttributes(testProps, areaInputCol);
        testEvents(testProps, areaInputCol);

    });

    test("Render with event handlers", () => {

        const testProps: Partial<AreaInputProps> = {
            onBlur: onBlur,
            onChange: onChange,
            onFocus: onFocus,
            onKeyDown: onKeyDown,
        }
        renderComponent(testProps);

        const areaInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <AreaInput/> events");
//        screen.debug(areaInputCol);
        testEvents(testProps, areaInputCol);

    });

    test("Render with minimal props", () => {

        const testProps: Partial<AreaInputProps> = {
            onChange: onChange, // To avoid "no onChange" warning
        }
        renderComponent(testProps);

        const areaInputCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <AreaInput/> minimal");
//        screen.debug(areaInputCol);
        testAttributes(testProps, areaInputCol);
        testEvents(testProps, areaInputCol);

    });

});
