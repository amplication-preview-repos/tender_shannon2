import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResultWhereUniqueInput } from "../result/ResultWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuizWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  result?: ResultWhereUniqueInput;
  student?: StudentWhereUniqueInput;
  subject?: StringNullableFilter;
};
