import { PerformanceAnalyticsWhereInput } from "./PerformanceAnalyticsWhereInput";
import { PerformanceAnalyticsOrderByInput } from "./PerformanceAnalyticsOrderByInput";

export type PerformanceAnalyticsFindManyArgs = {
  where?: PerformanceAnalyticsWhereInput;
  orderBy?: Array<PerformanceAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
