import { PerformanceAnalytics as TPerformanceAnalytics } from "../api/performanceAnalytics/PerformanceAnalytics";

export const PERFORMANCEANALYTICS_TITLE_FIELD = "subject";

export const PerformanceAnalyticsTitle = (
  record: TPerformanceAnalytics
): string => {
  return record.subject?.toString() || String(record.id);
};
