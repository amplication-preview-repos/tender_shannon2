import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AiResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="answer" multiline source="answer" />
        <TextInput label="keywords" multiline source="keywords" />
        <TextInput label="question" source="question" />
      </SimpleForm>
    </Edit>
  );
};
