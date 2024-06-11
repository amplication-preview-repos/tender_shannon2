import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { ExamUpdateManyWithoutResultsInput } from "./ExamUpdateManyWithoutResultsInput";
import { QuizUpdateManyWithoutResultsInput } from "./QuizUpdateManyWithoutResultsInput";

export type ResultUpdateInput = {
  exam?: ExamWhereUniqueInput | null;
  exams?: ExamUpdateManyWithoutResultsInput;
  quizzes?: QuizUpdateManyWithoutResultsInput;
  score?: number | null;
};
