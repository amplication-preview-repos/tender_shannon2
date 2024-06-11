import { Result } from "../result/Result";
import { Student } from "../student/Student";

export type Quiz = {
  createdAt: Date;
  date: Date | null;
  id: string;
  result?: Result | null;
  student?: Student | null;
  subject: string | null;
  updatedAt: Date;
};
