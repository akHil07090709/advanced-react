import React from "react";
import { Form, FormGroup, FormInput } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <FormGroup>
        <FormInput
          width={12}
          label="Description"
          icon="tags"
          placeholder="New Transaction"
        />
        <FormInput
          width={3}
          label="Value"
          icon="dollar"
          placeholder="100.00"
          iconPosition="left"
        />
      </FormGroup>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
