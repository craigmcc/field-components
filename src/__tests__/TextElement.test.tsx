// TextElement.test ----------------------------------------------------------

// Unit tests for the <TextElement/> component.  Other than an existence check,
// child components are expected to have their own detailed unit tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

// Internal Modules ----------------------------------------------------------

import { TextElement, Props as TextElementProps } from "../../src/TextElement";
import { DEFAULT_ELEMENT_CLASS_NAME } from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "TextElementRow";

const onChange = jest.fn();

const defaultProps: TextElementProps = {
    fieldName: "myTextElement",
    onChange: onChange,
}

const renderComponent = (testProps: Partial<TextElementProps>) => {
    return render(
        <TextElement
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<TextElementProps>, areaElementRow: HTMLElement): void => {

    if (testProps.elementClassName) {
        expect(areaElementRow).toHaveClass(testProps.elementClassName);
    } else {
        expect(areaElementRow).toHaveClass(DEFAULT_ELEMENT_CLASS_NAME);
    }

}

const testChildren = (testProps: Partial<TextElementProps>): void => {
    if (testProps.action) {
        screen.getByTestId("BaseActionCol");
    }
    screen.getByTestId("TextInputCol");
    if (testProps.label) {
        screen.getByTestId("BaseLabelCol");
    }
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<TextElement/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<TextElementProps> = {
            action: "My Action",
            elementClassName: "MyElementClass",
            label: "My Label",
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

    test("Render with no props", () => {

        const testProps: Partial<TextElementProps> = {
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

});
