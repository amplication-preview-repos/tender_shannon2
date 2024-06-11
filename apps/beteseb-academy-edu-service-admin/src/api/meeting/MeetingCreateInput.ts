import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type MeetingCreateInput = {
  agenda?: string | null;
  date?: Date | null;
  parent?: ParentWhereUniqueInput | null;
  teacher?: TeacherWhereUniqueInput | null;
};
