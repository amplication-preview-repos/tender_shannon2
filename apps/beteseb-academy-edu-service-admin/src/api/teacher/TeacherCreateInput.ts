import { MeetingCreateNestedManyWithoutTeachersInput } from "./MeetingCreateNestedManyWithoutTeachersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeacherCreateInput = {
  meetings?: MeetingCreateNestedManyWithoutTeachersInput;
  user?: UserWhereUniqueInput | null;
};
