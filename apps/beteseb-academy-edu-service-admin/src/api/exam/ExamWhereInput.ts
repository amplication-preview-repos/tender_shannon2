import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResultWhereUniqueInput } from "../result/ResultWhereUniqueInput";
import { ResultListRelationFilter } from "../result/ResultListRelationFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExamWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  result?: ResultWhereUniqueInput;
  results?: ResultListRelationFilter;
  student?: StudentWhereUniqueInput;
  subject?: StringNullableFilter;
};
