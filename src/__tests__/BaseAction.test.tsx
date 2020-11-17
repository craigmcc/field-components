// BaseAction.test -----------------------------------------------------------

// Unit tests for the <BaseAction/> component.  Other than an existence check,
// the nested <ActionButton/> is assumed to be supported by its own tests.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

// Internal Modules ----------------------------------------------------------

import { BaseAction } from "../../src/BaseAction";
import {BaseActionProps, OnClickEvent} from "../../src/PropTypes";

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
            actionClassName: "col-99",
            actionDisabled: true,
            actionSize: "lg",
            actionType: "button",
            actionVariant: "primary",
        }
        renderComponent(testProps);

        const baseActionCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseAction/>");
//        screen.debug(baseActionCol);
        // TODO - verify class includes {actionClassName}
        // TODO - verify disabled
        // TODO - deal with passing on onClick (and maybe make it required?)

        const baseActionButton = screen.getByText("" + testProps.action);
//        console.log("Rendered <ActionButton/> for <BaseAction/>");
//        screen.debug(baseActionButton);

    });

    test("Render with minimum props", () => {

        const testProps: Partial<BaseActionProps> = {
            action: "Minimum Action",
        }
        renderComponent(testProps);

        const baseActionCol = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Col/> for <BaseAction/> minimum");
//        screen.debug(baseActionCol);
        // TODO - verify class not rendered?

        const baseActionButton = screen.getByText("" + testProps.action);
//        console.log("Rendered <ActionButton/> for <BaseAction/>");
//        screen.debug(baseActionButton);

    });

    test("Render with no action prop", () => {

        const { queryByTestId } = renderComponent({});
//        console.info("Rendered <BaseAction/> with no action prop:");
//        screen.debug();

        expect(queryByTestId(TEST_ID)).toBeNull();

    });

});
