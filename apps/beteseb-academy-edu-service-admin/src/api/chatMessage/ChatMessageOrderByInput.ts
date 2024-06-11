import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  chatSession?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
