import { Exam as TExam } from "../api/exam/Exam";

export const EXAM_TITLE_FIELD = "subject";

export const ExamTitle = (record: TExam): string => {
  return record.subject?.toString() || String(record.id);
};
