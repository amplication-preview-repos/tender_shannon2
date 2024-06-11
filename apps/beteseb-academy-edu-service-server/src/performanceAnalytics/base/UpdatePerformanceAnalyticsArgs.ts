/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PerformanceAnalyticsWhereUniqueInput } from "./PerformanceAnalyticsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PerformanceAnalyticsUpdateInput } from "./PerformanceAnalyticsUpdateInput";

@ArgsType()
class UpdatePerformanceAnalyticsArgs {
  @ApiProperty({
    required: true,
    type: () => PerformanceAnalyticsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PerformanceAnalyticsWhereUniqueInput)
  @Field(() => PerformanceAnalyticsWhereUniqueInput, { nullable: false })
  where!: PerformanceAnalyticsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PerformanceAnalyticsUpdateInput,
  })
  @ValidateNested()
  @Type(() => PerformanceAnalyticsUpdateInput)
  @Field(() => PerformanceAnalyticsUpdateInput, { nullable: false })
  data!: PerformanceAnalyticsUpdateInput;
}

export { UpdatePerformanceAnalyticsArgs as UpdatePerformanceAnalyticsArgs };
