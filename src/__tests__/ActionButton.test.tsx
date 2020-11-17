// ActionButton.test ---------------------------------------------------------

// Unit tests for the <ActionButton/> component.

// External Modules ----------------------------------------------------------

import React from "react";
import { render, screen } from "@testing-library/react";

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
            disabled: true,
            label: "My Action",
            size: "lg",
            type: "submit",
            variant: "danger",
        }
        renderComponent(testProps);
        const actionButton = screen.getByTestId(TEST_ID);
//        console.log("Rendered <Button/> for <ActionButton/>");
//        screen.debug(actionButton);

        // TODO - verify class includes btn-{variant} and btn-{size}
        // TODO - verify disabled
        // TODO - verify type
        // TODO - deal with onClick (and maybe make it required?)

    });


});
