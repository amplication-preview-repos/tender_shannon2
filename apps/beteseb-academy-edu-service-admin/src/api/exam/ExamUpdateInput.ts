import { ResultWhereUniqueInput } from "../result/ResultWhereUniqueInput";
import { ResultUpdateManyWithoutExamsInput } from "./ResultUpdateManyWithoutExamsInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ExamUpdateInput = {
  date?: Date | null;
  result?: ResultWhereUniqueInput | null;
  results?: ResultUpdateManyWithoutExamsInput;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
