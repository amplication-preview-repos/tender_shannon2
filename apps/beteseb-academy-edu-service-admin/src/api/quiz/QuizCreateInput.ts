import { ResultWhereUniqueInput } from "../result/ResultWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type QuizCreateInput = {
  date?: Date | null;
  result?: ResultWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
