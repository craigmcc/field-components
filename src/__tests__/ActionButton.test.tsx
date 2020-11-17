// ActionButton.test ---------------------------------------------------------

// Unit tests for the <ActionButton/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Internal Modules ----------------------------------------------------------

import { ActionButton } from "../../src/ActionButton";
import {ActionButtonProps, OnClickEvent} from "../../src/PropTypes";

// Test Globals --------------------------------------------------------------

const TEST_ID = "ActionButton";

const defaultProps: ActionButtonProps = {
}

const renderComponent = (testProps: Partial<ActionButtonProps> = {}) => {
    return render(
        <ActionButton
            {...defaultProps}
            {...testProps}
        />
    );
}

// Test Lifecycle Hooks ------------------------------------------------------

// Test Suites ---------------------------------------------------------------

describe("<ActionButton/>", () => {

    test("Render with all props", () => {

        const testProps: Partial<ActionButtonProps> = {
            autoFocus: false,
            disabled: false,
            label: "My Action",
            size: "lg",
            type: "submit",
            variant: "danger",
        }
        renderComponent(testProps);
        const actionButton = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Button/> for <ActionButton/>");
//        screen.debug(actionButton);
        if (testProps.autoFocus) {
            // TODO - for some reason, <Button> does not emit autofocus
            // expect(actionButton).toHaveAttribute("autofocus");
            // TODO - but toHaveFocus() says yes in this case?
            expect(actionButton).toHaveFocus();
        } else {
            expect(actionButton).not.toHaveAttribute("autofocus");
            expect(actionButton).not.toHaveFocus();
        }
        expect(actionButton).toHaveClass("btn-" + testProps.variant);
        expect(actionButton).toHaveClass("btn-" + testProps.size);
        if (testProps.disabled) {
            expect(actionButton).toHaveAttribute("disabled");
            expect(actionButton).toBeDisabled();
        } else {
            expect(actionButton).not.toHaveAttribute("disabled");
            expect(actionButton).not.toBeDisabled();
        }
        expect(actionButton).toHaveAttribute("type", testProps.type);
        expect(actionButton).toHaveTextContent("" + testProps.label);
        // TODO - deal with onClick (and maybe make it required?)

    });


});
