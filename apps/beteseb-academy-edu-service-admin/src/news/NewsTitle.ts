import { News as TNews } from "../api/news/News";

export const NEWS_TITLE_FIELD = "headline";

export const NewsTitle = (record: TNews): string => {
  return record.headline?.toString() || String(record.id);
};
