import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  agenda?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  parentId?: SortOrder;
  teacherId?: SortOrder;
  updatedAt?: SortOrder;
};
