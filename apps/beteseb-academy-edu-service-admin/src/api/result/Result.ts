import { Exam } from "../exam/Exam";
import { Quiz } from "../quiz/Quiz";

export type Result = {
  createdAt: Date;
  exam?: Exam | null;
  exams?: Array<Exam>;
  id: string;
  quizzes?: Array<Quiz>;
  score: number | null;
  updatedAt: Date;
};
