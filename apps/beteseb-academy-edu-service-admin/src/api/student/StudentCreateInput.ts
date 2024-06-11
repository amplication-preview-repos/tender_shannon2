import { ExamCreateNestedManyWithoutStudentsInput } from "./ExamCreateNestedManyWithoutStudentsInput";
import { PerformanceAnalyticsCreateNestedManyWithoutStudentsInput } from "./PerformanceAnalyticsCreateNestedManyWithoutStudentsInput";
import { QuizCreateNestedManyWithoutStudentsInput } from "./QuizCreateNestedManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentCreateInput = {
  exams?: ExamCreateNestedManyWithoutStudentsInput;
  performanceAnalyticsItems?: PerformanceAnalyticsCreateNestedManyWithoutStudentsInput;
  quizzes?: QuizCreateNestedManyWithoutStudentsInput;
  user?: UserWhereUniqueInput | null;
  virtualIdCard?: string | null;
};
