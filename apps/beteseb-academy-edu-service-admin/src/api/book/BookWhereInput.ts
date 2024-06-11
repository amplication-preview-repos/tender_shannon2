import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BookWhereInput = {
  author?: StringNullableFilter;
  id?: StringFilter;
  isbn?: StringNullableFilter;
  publicationDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  title?: StringNullableFilter;
};
