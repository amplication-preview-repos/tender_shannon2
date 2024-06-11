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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentWhereUniqueInput } from "../../parent/base/ParentWhereUniqueInput";
import { TeacherWhereUniqueInput } from "../../teacher/base/TeacherWhereUniqueInput";

@InputType()
class MeetingWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  agenda?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  date?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ParentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParentWhereUniqueInput)
  @IsOptional()
  @Field(() => ParentWhereUniqueInput, {
    nullable: true,
  })
  parent?: ParentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TeacherWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeacherWhereUniqueInput)
  @IsOptional()
  @Field(() => TeacherWhereUniqueInput, {
    nullable: true,
  })
  teacher?: TeacherWhereUniqueInput;
}

export { MeetingWhereInput as MeetingWhereInput };