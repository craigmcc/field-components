// BaseLabel.test ------------------------------------------------------------

// Unit tests for the <BaseLabel/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Modules ----------------------------------------------------------

import { BaseLabel, Props as BaseLabelProps } from "../../src/BaseLabel";
import { DEFAULT_LABEL_CLASS_NAME } from "../Constants";

// Test Globals --------------------------------------------------------------

const TEST_ID = "BaseLabelCol";

const defaultProps: BaseLabelProps = {
    fieldName: "field"
}

const renderComponent = (testProps: Partial<BaseLabelProps> = {}) => {
    return render(
        <BaseLabel
            {...defaultProps}
            {...testProps}/>
    );
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<BaseLabel/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<BaseLabelProps> = {
            fieldName: "myField",
            label: "My Label",
            labelClassName: "col-99"
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseLabel/> all");
//        screen.debug(col);
        expect(col).toHaveClass("" + testProps.labelClassName);

        const label = screen.getByText("" + testProps.label);
        expect(label).toHaveAttribute("for", testProps.fieldName);

    });

    test("Render with minimum props", () => {

        const testProps: Partial<BaseLabelProps> = {
            label: "Minimum Label:"
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseLabel/> minimum");
//        screen.debug(col);
        expect(col).toHaveClass(DEFAULT_LABEL_CLASS_NAME);

        const label = screen.getByText("" + testProps.label);
        expect(label).toHaveAttribute("for", defaultProps.fieldName);

    });

    test("Render with no label prop", () => {

        const { queryByTestId } = renderComponent({});
//        console.info("Rendered <BaseLabel/> with no label prop:");
//        screen.debug();

        expect(queryByTestId(TEST_ID)).toBeNull();

    });

});
