import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatMessageWhereInput = {
  chatSession?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
