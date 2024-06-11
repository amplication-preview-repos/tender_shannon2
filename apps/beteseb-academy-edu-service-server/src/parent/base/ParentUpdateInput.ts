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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { MeetingUpdateManyWithoutParentsInput } from "./MeetingUpdateManyWithoutParentsInput";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ParentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  children?: string | null;

  @ApiProperty({
    required: false,
    type: () => MeetingUpdateManyWithoutParentsInput,
  })
  @ValidateNested()
  @Type(() => MeetingUpdateManyWithoutParentsInput)
  @IsOptional()
  @Field(() => MeetingUpdateManyWithoutParentsInput, {
    nullable: true,
  })
  meetings?: MeetingUpdateManyWithoutParentsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { ParentUpdateInput as ParentUpdateInput };
