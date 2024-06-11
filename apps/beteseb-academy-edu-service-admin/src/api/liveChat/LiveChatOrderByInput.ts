import { SortOrder } from "../../util/SortOrder";

export type LiveChatOrderByInput = {
  admin?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isMonitored?: SortOrder;
  participants?: SortOrder;
  updatedAt?: SortOrder;
};
