import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const MeetingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="agenda" multiline source="agenda" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="parent.id" reference="Parent" label="parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceInput source="teacher.id" reference="Teacher" label="teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
