import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const BookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="isbn" source="isbn" />
        <DateTimeInput label="publicationDate" source="publicationDate" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
