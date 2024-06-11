import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PerformanceAnalyticsUpdateInput = {
  date?: Date | null;
  grade?: number | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
