import { Administrator } from "../administrator/Administrator";
import { Feedback } from "../feedback/Feedback";
import { Parent } from "../parent/Parent";
import { JsonValue } from "type-fest";
import { Student } from "../student/Student";
import { Teacher } from "../teacher/Teacher";

export type User = {
  administrators?: Array<Administrator>;
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  lastName: string | null;
  parents?: Array<Parent>;
  role?: "Option1" | null;
  roles: JsonValue;
  students?: Array<Student>;
  teachers?: Array<Teacher>;
  updatedAt: Date;
  username: string;
};
