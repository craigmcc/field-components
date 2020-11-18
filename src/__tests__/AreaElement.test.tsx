// AreaElement.test ----------------------------------------------------------

// Unit tests for the <AreaElement/> component.  Other than an existence check,
// child components are expected to have their own detailed unit tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

// Internal Modules ----------------------------------------------------------

import { AreaElement, Props as AreaElementProps } from "../../src/AreaElement";
import { DEFAULT_ELEMENT_CLASS_NAME } from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "AreaElementRow";

const onChange = jest.fn();

const defaultProps: AreaElementProps = {
    fieldName: "myAreaElement",
    onChange: onChange
}

const renderComponent = (testProps: Partial<AreaElementProps>) => {
    return render(
        <AreaElement
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<AreaElementProps>, areaElementRow: HTMLElement): void => {

    if (testProps.elementClassName) {
        expect(areaElementRow).toHaveClass(testProps.elementClassName);
    } else {
        expect(areaElementRow).toHaveClass(DEFAULT_ELEMENT_CLASS_NAME);
    }

}

const testChildren = (testProps: Partial<AreaElementProps>): void => {
    if (testProps.action) {
        screen.getByTestId("BaseActionCol");
    }
    screen.getByTestId("AreaInputCol");
    if (testProps.label) {
        screen.getByTestId("BaseLabelCol");
    }
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<AreaElement/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<AreaElementProps> = {
            action: "My Action",
            elementClassName: "MyElementClass",
            label: "My Label"
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

    test("Render with no props", () => {

        const testProps: Partial<AreaElementProps> = {
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

});
