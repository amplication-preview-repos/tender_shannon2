import { LiveChatWhereInput } from "./LiveChatWhereInput";
import { LiveChatOrderByInput } from "./LiveChatOrderByInput";

export type LiveChatFindManyArgs = {
  where?: LiveChatWhereInput;
  orderBy?: Array<LiveChatOrderByInput>;
  skip?: number;
  take?: number;
};
