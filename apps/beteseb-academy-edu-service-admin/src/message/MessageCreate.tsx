import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
