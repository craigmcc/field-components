// BaseAction.test -----------------------------------------------------------

// Unit tests for the <BaseAction/> component.  Other than an existence check,
// the nested <ActionButton/> is assumed to be supported by its own tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Modules ----------------------------------------------------------

import { BaseAction, Props as BaseActionProps } from "../../src/BaseAction";

// Test Globals --------------------------------------------------------------

const TEST_ID = "BaseActionCol";

const defaultProps: BaseActionProps = {
}

const renderComponent = (testProps: Partial<BaseActionProps> = {}) => {
    return render(
        <BaseAction
            {...defaultProps}
            {...testProps}
        />
    );
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<BaseAction/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<BaseActionProps> = {
            action: "My Action",
            actionClassName: "col-99 mr-1 mb-2",
            actionDisabled: true,
            actionSize: "lg",
            actionType: "button",
            actionVariant: "primary",
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseAction/>");
//        screen.debug(col);
        expect(col).toHaveClass("" + testProps.actionClassName);

        const actionButton = screen.getByText("" + testProps.action);
        // This verifies existence, renaming tests for ActionButton are separate

    });

    test("Render with minimum props", () => {

        const testProps: Partial<BaseActionProps> = {
            action: "Minimum Action",
        }
        renderComponent(testProps);

        const col = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseAction/> minimum");
//        screen.debug(col);
        expect(col).toHaveAttribute("class", "col"); // Nothing added

        const actionButton = screen.getByText("" + testProps.action);
        // This verifies existence, renaming tests for ActionButton are separate

    });

    test("Render with no action prop", () => {

        const { queryByTestId } = renderComponent({});
//        console.info("Rendered <BaseAction/> with no action prop:");
//        screen.debug();

        expect(queryByTestId(TEST_ID)).toBeNull();

    });

});
