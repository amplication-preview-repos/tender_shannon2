import { MeetingUpdateManyWithoutTeachersInput } from "./MeetingUpdateManyWithoutTeachersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeacherUpdateInput = {
  meetings?: MeetingUpdateManyWithoutTeachersInput;
  user?: UserWhereUniqueInput | null;
};
