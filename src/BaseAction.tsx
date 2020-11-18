// BaseAction ----------------------------------------------------------------

// Renders the <Col> element for the action button after any "Input" component.
// It is only rendered if an "action" prop is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { ActionButton, Props as ActionButtonProps } from "./ActionButton";
import { BaseActionProps } from "./Types";

// Property Details ----------------------------------------------------------

export interface Props extends BaseActionProps {
}

// Component Details ---------------------------------------------------------

export const BaseAction = (props: Props) => {

    let actionButtonProps: ActionButtonProps = {
        autoFocus: props.autoFocus,
        disabled: props.actionDisabled,
        label: props.action,
        onClick: props.onClick,
        size: props.actionSize,
        type: props.actionType,
        variant: props.actionVariant,
    }

    return (
        <>
            {props.action ? (
                <Col
                    className={props.actionClassName ? props.actionClassName : undefined}
                    data-testid="BaseActionCol"
                >
                    <ActionButton {... actionButtonProps}/>
                </Col>
            ) : null }
        </>
    )

}
