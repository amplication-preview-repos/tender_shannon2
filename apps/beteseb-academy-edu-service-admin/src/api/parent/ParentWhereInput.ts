import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentWhereInput = {
  children?: StringNullableFilter;
  id?: StringFilter;
  meetings?: MeetingListRelationFilter;
  user?: UserWhereUniqueInput;
};
