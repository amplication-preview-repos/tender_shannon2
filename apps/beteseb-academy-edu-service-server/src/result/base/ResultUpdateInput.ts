/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExamWhereUniqueInput } from "../../exam/base/ExamWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { ExamUpdateManyWithoutResultsInput } from "./ExamUpdateManyWithoutResultsInput";
import { QuizUpdateManyWithoutResultsInput } from "./QuizUpdateManyWithoutResultsInput";

@InputType()
class ResultUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ExamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExamWhereUniqueInput)
  @IsOptional()
  @Field(() => ExamWhereUniqueInput, {
    nullable: true,
  })
  exam?: ExamWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ExamUpdateManyWithoutResultsInput,
  })
  @ValidateNested()
  @Type(() => ExamUpdateManyWithoutResultsInput)
  @IsOptional()
  @Field(() => ExamUpdateManyWithoutResultsInput, {
    nullable: true,
  })
  exams?: ExamUpdateManyWithoutResultsInput;

  @ApiProperty({
    required: false,
    type: () => QuizUpdateManyWithoutResultsInput,
  })
  @ValidateNested()
  @Type(() => QuizUpdateManyWithoutResultsInput)
  @IsOptional()
  @Field(() => QuizUpdateManyWithoutResultsInput, {
    nullable: true,
  })
  quizzes?: QuizUpdateManyWithoutResultsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number | null;
}

export { ResultUpdateInput as ResultUpdateInput };
