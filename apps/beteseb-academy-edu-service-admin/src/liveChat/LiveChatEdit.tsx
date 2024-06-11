import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LiveChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="admin" source="admin" />
        <BooleanInput label="isMonitored" source="isMonitored" />
        <TextInput label="participants" source="participants" />
      </SimpleForm>
    </Edit>
  );
};
