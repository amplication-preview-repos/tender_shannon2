import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type MeetingWhereInput = {
  agenda?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  parent?: ParentWhereUniqueInput;
  teacher?: TeacherWhereUniqueInput;
};
