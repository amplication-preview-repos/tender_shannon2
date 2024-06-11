import { Student } from "../student/Student";

export type PerformanceAnalytics = {
  createdAt: Date;
  date: Date | null;
  grade: number | null;
  id: string;
  student?: Student | null;
  subject: string | null;
  updatedAt: Date;
};
