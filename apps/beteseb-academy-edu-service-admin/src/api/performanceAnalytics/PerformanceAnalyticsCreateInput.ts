import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type PerformanceAnalyticsCreateInput = {
  date?: Date | null;
  grade?: number | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
