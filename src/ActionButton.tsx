// ActionButton --------------------------------------------------------------

// Renders a generic button control, configured by the specified properties.

// External Modules ----------------------------------------------------------

import React from "react";
import Button from "react-bootstrap/Button";

// Internal Modules ----------------------------------------------------------

import { ActionButtonProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const ActionButton = (props: ActionButtonProps) => {

    return (
        <>
            <Button
                data-testid="ActionButton"
                disabled={props.disabled ? props.disabled : undefined}
                onClick={props.onClick ? props.onClick : undefined}
                size={props.size ? props.size : undefined}
                type={props.type ? props.type : undefined}
                variant={props.variant ? props.variant : "warning"}
            >
                {props.label ? props.label : "Action"}
            </Button>
        </>
    )

}
