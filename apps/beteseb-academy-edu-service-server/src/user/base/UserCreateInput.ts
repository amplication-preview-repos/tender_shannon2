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
import { AdministratorCreateNestedManyWithoutUsersInput } from "./AdministratorCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { ParentCreateNestedManyWithoutUsersInput } from "./ParentCreateNestedManyWithoutUsersInput";
import { EnumUserRole } from "./EnumUserRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { StudentCreateNestedManyWithoutUsersInput } from "./StudentCreateNestedManyWithoutUsersInput";
import { TeacherCreateNestedManyWithoutUsersInput } from "./TeacherCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AdministratorCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AdministratorCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AdministratorCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  administrators?: AdministratorCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ParentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ParentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ParentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  parents?: ParentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    enum: EnumUserRole,
  })
  @IsEnum(EnumUserRole)
  @IsOptional()
  @Field(() => EnumUserRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => StudentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => StudentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => StudentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  students?: StudentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TeacherCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TeacherCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TeacherCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  teachers?: TeacherCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}

export { UserCreateInput as UserCreateInput };
