// BaseAction ----------------------------------------------------------------

// Renders the <Col> element for the action button after any "Input" component.
// It is only rendered if an "action" prop is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import { ActionButton } from "./ActionButton";
import { ActionButtonProps, BaseActionProps } from "./PropTypes";

// Component Details ---------------------------------------------------------

export const BaseAction = (props: BaseActionProps) => {

    let actionButtonProps: ActionButtonProps = {
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
                <Col className={props.actionClassName ? props.actionClassName : undefined}>
                    <ActionButton {... actionButtonProps}/>
                </Col>
            ) : null }
        </>
    )

}
