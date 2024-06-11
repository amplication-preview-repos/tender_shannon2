import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
};
