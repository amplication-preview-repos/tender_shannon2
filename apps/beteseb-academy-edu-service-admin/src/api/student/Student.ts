import { Exam } from "../exam/Exam";
import { PerformanceAnalytics } from "../performanceAnalytics/PerformanceAnalytics";
import { Quiz } from "../quiz/Quiz";
import { User } from "../user/User";

export type Student = {
  createdAt: Date;
  exams?: Array<Exam>;
  id: string;
  performanceAnalyticsItems?: Array<PerformanceAnalytics>;
  quizzes?: Array<Quiz>;
  updatedAt: Date;
  user?: User | null;
  virtualIdCard: string | null;
};
