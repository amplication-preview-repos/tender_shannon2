import { ExamUpdateManyWithoutStudentsInput } from "./ExamUpdateManyWithoutStudentsInput";
import { PerformanceAnalyticsUpdateManyWithoutStudentsInput } from "./PerformanceAnalyticsUpdateManyWithoutStudentsInput";
import { QuizUpdateManyWithoutStudentsInput } from "./QuizUpdateManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  exams?: ExamUpdateManyWithoutStudentsInput;
  performanceAnalyticsItems?: PerformanceAnalyticsUpdateManyWithoutStudentsInput;
  quizzes?: QuizUpdateManyWithoutStudentsInput;
  user?: UserWhereUniqueInput | null;
  virtualIdCard?: string | null;
};
