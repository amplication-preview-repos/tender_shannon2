import { AdministratorUpdateManyWithoutUsersInput } from "./AdministratorUpdateManyWithoutUsersInput";
import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { ParentUpdateManyWithoutUsersInput } from "./ParentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StudentUpdateManyWithoutUsersInput } from "./StudentUpdateManyWithoutUsersInput";
import { TeacherUpdateManyWithoutUsersInput } from "./TeacherUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  administrators?: AdministratorUpdateManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  parents?: ParentUpdateManyWithoutUsersInput;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  students?: StudentUpdateManyWithoutUsersInput;
  teachers?: TeacherUpdateManyWithoutUsersInput;
  username?: string;
};
