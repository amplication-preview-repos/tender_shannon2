import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "virtualIdCard";

export const StudentTitle = (record: TStudent): string => {
  return record.virtualIdCard?.toString() || String(record.id);
};
