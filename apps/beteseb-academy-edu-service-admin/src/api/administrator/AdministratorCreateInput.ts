import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdministratorCreateInput = {
  user?: UserWhereUniqueInput | null;
};
