import { LiveChat as TLiveChat } from "../api/liveChat/LiveChat";

export const LIVECHAT_TITLE_FIELD = "admin";

export const LiveChatTitle = (record: TLiveChat): string => {
  return record.admin?.toString() || String(record.id);
};
