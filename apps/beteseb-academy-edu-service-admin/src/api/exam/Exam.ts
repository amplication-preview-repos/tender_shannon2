import { Result } from "../result/Result";
import { Student } from "../student/Student";

export type Exam = {
  createdAt: Date;
  date: Date | null;
  id: string;
  result?: Result | null;
  results?: Array<Result>;
  student?: Student | null;
  subject: string | null;
  updatedAt: Date;
};
