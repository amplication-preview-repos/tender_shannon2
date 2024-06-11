import { SortOrder } from "../../util/SortOrder";

export type AiResponseOrderByInput = {
  answer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  keywords?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
