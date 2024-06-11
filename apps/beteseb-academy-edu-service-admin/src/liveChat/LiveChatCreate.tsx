import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LiveChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="admin" source="admin" />
        <BooleanInput label="isMonitored" source="isMonitored" />
        <TextInput label="participants" source="participants" />
      </SimpleForm>
    </Create>
  );
};
