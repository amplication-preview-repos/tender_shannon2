import { StringFilter } from "../../util/StringFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeacherWhereInput = {
  id?: StringFilter;
  meetings?: MeetingListRelationFilter;
  user?: UserWhereUniqueInput;
};
