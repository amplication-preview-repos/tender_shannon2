import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "recipient";

export const MessageTitle = (record: TMessage): string => {
  return record.recipient?.toString() || String(record.id);
};
