import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiResponseWhereInput = {
  answer?: StringNullableFilter;
  id?: StringFilter;
  keywords?: StringNullableFilter;
  question?: StringNullableFilter;
};
