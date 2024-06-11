import { AdministratorListRelationFilter } from "../administrator/AdministratorListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { TeacherListRelationFilter } from "../teacher/TeacherListRelationFilter";

export type UserWhereInput = {
  administrators?: AdministratorListRelationFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  parents?: ParentListRelationFilter;
  role?: "Option1";
  students?: StudentListRelationFilter;
  teachers?: TeacherListRelationFilter;
  username?: StringFilter;
};
