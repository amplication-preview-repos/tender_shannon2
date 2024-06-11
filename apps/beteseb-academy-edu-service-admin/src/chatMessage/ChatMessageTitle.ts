import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "chatSession";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.chatSession?.toString() || String(record.id);
};
