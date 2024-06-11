import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="isbn" source="isbn" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
