// CommonAction --------------------------------------------------------------

// Renders the <Col> element for the action button after a common input
// element.  It is only rendered if an "action" prop is passed.

// External Modules ----------------------------------------------------------

import React from "react";
import Col from "react-bootstrap/Col";

// Internal Modules ----------------------------------------------------------

import ActionButton from "./ActionButton";
import { ActionButtonProps, CommonActionProps } from "./FieldElementsProps";

// Component Details ---------------------------------------------------------

export const CommonAction = (props: CommonActionProps) => {

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

export default CommonAction;
