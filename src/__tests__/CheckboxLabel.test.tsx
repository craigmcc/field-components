// BaseLabel.test ------------------------------------------------------------

// Unit tests for the <BaseLabel/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Modules ----------------------------------------------------------

import { CheckboxLabel, Props as CheckboxLabelProps } from "../../src/CheckboxLabel";
import { DEFAULT_LABEL_CLASS_NAME } from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "CheckboxLabelCol";

const defaultProps: CheckboxLabelProps = {
    fieldName: "field"
}

const renderComponent = (testProps: Partial<CheckboxLabelProps> = {}) => {
    return render(
        <CheckboxLabel
            {...defaultProps}
            {...testProps}/>
    );
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<CheckboxLabel/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<CheckboxLabelProps> = {
            fieldName: "myField",
            label: "My Label",
            labelClassName: "col-99"
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <CheckboxLabel/> all");
//        screen.debug(col);
        expect(col).toHaveClass("" + testProps.labelClassName);
        expect(col).toBeEmptyDOMElement();

    });

    test("Render with minimum props", () => {

        const testProps: Partial<CheckboxLabelProps> = {
            label: "Minimum Label:"
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <CheckboxLabel/> minimum");
//        screen.debug(col);
        expect(col).toHaveClass(DEFAULT_LABEL_CLASS_NAME);
        expect(col).toBeEmptyDOMElement();

    });

    test("Render with no label prop", () => {

        const { queryByTestId } = renderComponent({});
//        console.info("Rendered <CheckboxLabel/> with no label prop:");
//        screen.debug();

        expect(queryByTestId(TEST_ID)).toBeNull();

    });

});
