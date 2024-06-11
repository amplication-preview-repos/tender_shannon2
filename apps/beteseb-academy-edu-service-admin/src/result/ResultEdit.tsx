import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ExamTitle } from "../exam/ExamTitle";
import { QuizTitle } from "../quiz/QuizTitle";

export const ResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
