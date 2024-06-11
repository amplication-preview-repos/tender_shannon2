import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  headline?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
