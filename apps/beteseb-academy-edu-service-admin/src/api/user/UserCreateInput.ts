import { AdministratorCreateNestedManyWithoutUsersInput } from "./AdministratorCreateNestedManyWithoutUsersInput";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { ParentCreateNestedManyWithoutUsersInput } from "./ParentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StudentCreateNestedManyWithoutUsersInput } from "./StudentCreateNestedManyWithoutUsersInput";
import { TeacherCreateNestedManyWithoutUsersInput } from "./TeacherCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  administrators?: AdministratorCreateNestedManyWithoutUsersInput;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  parents?: ParentCreateNestedManyWithoutUsersInput;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  students?: StudentCreateNestedManyWithoutUsersInput;
  teachers?: TeacherCreateNestedManyWithoutUsersInput;
  username: string;
};
