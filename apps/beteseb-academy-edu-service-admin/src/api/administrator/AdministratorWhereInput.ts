import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdministratorWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
