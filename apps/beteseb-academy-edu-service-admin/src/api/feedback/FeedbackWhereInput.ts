import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
