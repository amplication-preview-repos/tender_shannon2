import { SortOrder } from "../../util/SortOrder";

export type ExamOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  resultId?: SortOrder;
  studentId?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
