// CheckboxElement.test -------------------------------------------------------

// Unit tests for the <CheckboxElement/> component.  Other than an existence check,
// child components are expected to have their own detailed unit tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

// Internal Modules ----------------------------------------------------------

import { CheckboxElement, Props as CheckboxElementProps } from "../../src/CheckboxElement";
import { DEFAULT_ELEMENT_CLASS_NAME } from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "CheckboxElementRow";

const onChange = jest.fn();

const defaultProps: CheckboxElementProps = {
    fieldName: "myCheckboxElement",
    onChange: onChange,
}

const renderComponent = (testProps: Partial<CheckboxElementProps>) => {
    return render(
        <CheckboxElement
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<CheckboxElementProps>, areaElementRow: HTMLElement): void => {

    if (testProps.elementClassName) {
        expect(areaElementRow).toHaveClass(testProps.elementClassName);
    } else {
        expect(areaElementRow).toHaveClass(DEFAULT_ELEMENT_CLASS_NAME);
    }

}

const testChildren = (testProps: Partial<CheckboxElementProps>): void => {
    if (testProps.action) {
        screen.getByTestId("BaseActionCol");
    }
    screen.getByTestId("CheckboxInputCol");
    if (testProps.label) {
        screen.getByTestId("CheckboxLabelCol");
    }
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<CheckboxElement/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<CheckboxElementProps> = {
            action: "My Action",
            elementClassName: "MyElementClass",
            label: "My Label",
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

    test("Render with no props", () => {

        const testProps: Partial<CheckboxElementProps> = {
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

});
