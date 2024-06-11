import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  date?: Date | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
