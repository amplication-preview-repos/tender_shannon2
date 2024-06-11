export type ChatMessage = {
  chatSession: string | null;
  createdAt: Date;
  id: string;
  message: string | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
