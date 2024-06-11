import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PerformanceAnalyticsWhereInput = {
  date?: DateTimeNullableFilter;
  grade?: IntNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  subject?: StringNullableFilter;
};
