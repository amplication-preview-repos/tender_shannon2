import { Quiz as TQuiz } from "../api/quiz/Quiz";

export const QUIZ_TITLE_FIELD = "subject";

export const QuizTitle = (record: TQuiz): string => {
  return record.subject?.toString() || String(record.id);
};
