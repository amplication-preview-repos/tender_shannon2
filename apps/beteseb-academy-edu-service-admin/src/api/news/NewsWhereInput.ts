import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type NewsWhereInput = {
  details?: StringNullableFilter;
  headline?: StringNullableFilter;
  id?: StringFilter;
};
