import { ExamWhereUniqueInput } from "../exam/ExamWhereUniqueInput";
import { ExamListRelationFilter } from "../exam/ExamListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ResultWhereInput = {
  exam?: ExamWhereUniqueInput;
  exams?: ExamListRelationFilter;
  id?: StringFilter;
  quizzes?: QuizListRelationFilter;
  score?: FloatNullableFilter;
};
