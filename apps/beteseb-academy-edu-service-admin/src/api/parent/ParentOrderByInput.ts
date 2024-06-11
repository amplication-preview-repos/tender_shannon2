import { SortOrder } from "../../util/SortOrder";

export type ParentOrderByInput = {
  children?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
