import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  date?: Date | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
