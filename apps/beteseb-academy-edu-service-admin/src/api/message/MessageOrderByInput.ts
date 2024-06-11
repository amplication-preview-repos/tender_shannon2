import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  updatedAt?: SortOrder;
};
