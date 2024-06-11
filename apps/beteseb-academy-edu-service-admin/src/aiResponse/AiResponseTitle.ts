import { AiResponse as TAiResponse } from "../api/aiResponse/AiResponse";

export const AIRESPONSE_TITLE_FIELD = "question";

export const AiResponseTitle = (record: TAiResponse): string => {
  return record.question?.toString() || String(record.id);
};
