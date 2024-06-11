export type ChatMessageCreateInput = {
  chatSession?: string | null;
  message?: string | null;
  sender?: string | null;
  timestamp?: Date | null;
};
