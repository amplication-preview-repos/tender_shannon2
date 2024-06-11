import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <TextInput label="headline" source="headline" />
      </SimpleForm>
    </Create>
  );
};
