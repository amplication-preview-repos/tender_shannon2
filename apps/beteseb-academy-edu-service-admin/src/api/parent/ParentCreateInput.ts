import { MeetingCreateNestedManyWithoutParentsInput } from "./MeetingCreateNestedManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentCreateInput = {
  children?: string | null;
  meetings?: MeetingCreateNestedManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
