// SelectElement.test --------------------------------------------------------

// Unit tests for the <SelectElement/> component.  Other than an existence check,
// child components are expected to have their own detailed unit tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

// Internal Modules ----------------------------------------------------------

import { SelectElement, Props as SelectElementProps } from "../../src/SelectElement";
import { DEFAULT_ELEMENT_CLASS_NAME } from "../Constants";
import {SelectOptions} from "../Types";

// Test Globals --------------------------------------------------------------

const TEST_ID = "SelectElementRow";

const onChange = jest.fn();

const defaultProps: SelectElementProps = {
    fieldName: "mySelectElement",
    onChange: onChange,
    options: []
}

const renderComponent = (testProps: Partial<SelectElementProps>) => {
    return render(
        <SelectElement
            {...defaultProps}
            {...testProps}
        />
    )
}

const testAttributes = (testProps: Partial<SelectElementProps>, areaElementRow: HTMLElement): void => {

    if (testProps.elementClassName) {
        expect(areaElementRow).toHaveClass(testProps.elementClassName);
    } else {
        expect(areaElementRow).toHaveClass(DEFAULT_ELEMENT_CLASS_NAME);
    }

}

const testChildren = (testProps: Partial<SelectElementProps>): void => {
    if (testProps.action) {
        screen.getByTestId("BaseActionCol");
    }
    screen.getByTestId("SelectInputCol");
    if (testProps.label) {
        screen.getByTestId("BaseLabelCol");
    }
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<SelectElement/>", () => {

    test("Render with all props", () => {

        const testOptions: SelectOptions = [
            { label: "Foo", value: "0" },
            { label: "Bar", value: "1" },
            { label: "Baz", value: "2" },
            { label: "Bop", value: "3" },
        ];
        const testProps: Partial<SelectElementProps> = {
            action: "My Action",
            elementClassName: "MyElementClass",
            label: "My Label",
            options: testOptions,
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

    test("Render with no props", () => {

        const testProps: Partial<SelectElementProps> = {
        }
        renderComponent(testProps);

        screen.getByTestId(TEST_ID);
        testChildren(testProps);

    });

});
