import { ResultWhereUniqueInput } from "../result/ResultWhereUniqueInput";
import { ResultCreateNestedManyWithoutExamsInput } from "./ResultCreateNestedManyWithoutExamsInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ExamCreateInput = {
  date?: Date | null;
  result?: ResultWhereUniqueInput | null;
  results?: ResultCreateNestedManyWithoutExamsInput;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
