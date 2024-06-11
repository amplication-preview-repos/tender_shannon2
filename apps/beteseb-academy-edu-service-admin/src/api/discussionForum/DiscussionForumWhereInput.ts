import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscussionForumWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
