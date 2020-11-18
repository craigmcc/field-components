// Constants -----------------------------------------------------------------

// Default constants used in this library

// Default className values for <Row> and <Col> components, and individual fields.
// Note that action <Col> does not have a default className
// (if you need an action, adjust the label and/or input className values)
export const DEFAULT_CONTROL_CLASS_NAME = "form-control";   // Individual field controls
export const DEFAULT_ELEMENT_CLASS_NAME = "mb-1 col-12";    // Element <Row>
export const DEFAULT_INPUT_CLASS_NAME = "col-9";            // Input <Col>
export const DEFAULT_LABEL_CLASS_NAME = "col-3";            // Label <Col>

// PRO TIP:  The column total for the label, input, and action columns
// actually rendered should be <= 12 (with standard Bootstrap styles)
// to get them all on one row.  The defaults assume action columns
// are not that common.

