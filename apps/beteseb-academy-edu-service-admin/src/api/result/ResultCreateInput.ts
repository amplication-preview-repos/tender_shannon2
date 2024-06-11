import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { ExamCreateNestedManyWithoutResultsInput } from "./ExamCreateNestedManyWithoutResultsInput";
import { QuizCreateNestedManyWithoutResultsInput } from "./QuizCreateNestedManyWithoutResultsInput";

export type ResultCreateInput = {
  exam?: ExamWhereUniqueInput | null;
  exams?: ExamCreateNestedManyWithoutResultsInput;
  quizzes?: QuizCreateNestedManyWithoutResultsInput;
  score?: number | null;
};
