import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ExamTitle } from "../exam/ExamTitle";
import { QuizTitle } from "../quiz/QuizTitle";

export const ResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="exam.id" reference="Exam" label="exam">
          <SelectInput optionText={ExamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="exams"
          reference="Exam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="quizzes"
          reference="Quiz"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuizTitle} />
        </ReferenceArrayInput>
        <NumberInput label="score" source="score" />
      </SimpleForm>
    </Create>
  );
};
