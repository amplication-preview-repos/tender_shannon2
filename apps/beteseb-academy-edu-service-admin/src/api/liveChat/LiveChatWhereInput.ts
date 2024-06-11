import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type LiveChatWhereInput = {
  admin?: StringNullableFilter;
  id?: StringFilter;
  isMonitored?: BooleanNullableFilter;
  participants?: StringNullableFilter;
};
