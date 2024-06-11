import { MeetingUpdateManyWithoutParentsInput } from "./MeetingUpdateManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentUpdateInput = {
  children?: string | null;
  meetings?: MeetingUpdateManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
