import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  author?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isbn?: SortOrder;
  publicationDate?: SortOrder;
  quantity?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
