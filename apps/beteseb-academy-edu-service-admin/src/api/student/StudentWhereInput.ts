import { ExamListRelationFilter } from "../exam/ExamListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PerformanceAnalyticsListRelationFilter } from "../performanceAnalytics/PerformanceAnalyticsListRelationFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StudentWhereInput = {
  exams?: ExamListRelationFilter;
  id?: StringFilter;
  performanceAnalyticsItems?: PerformanceAnalyticsListRelationFilter;
  quizzes?: QuizListRelationFilter;
  user?: UserWhereUniqueInput;
  virtualIdCard?: StringNullableFilter;
};
