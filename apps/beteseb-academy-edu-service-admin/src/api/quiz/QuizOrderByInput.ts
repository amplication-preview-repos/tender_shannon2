import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  resultId?: SortOrder;
  studentId?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
