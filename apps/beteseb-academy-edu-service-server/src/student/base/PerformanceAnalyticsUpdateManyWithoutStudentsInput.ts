/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PerformanceAnalyticsWhereUniqueInput } from "../../performanceAnalytics/base/PerformanceAnalyticsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PerformanceAnalyticsUpdateManyWithoutStudentsInput {
  @Field(() => [PerformanceAnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PerformanceAnalyticsWhereUniqueInput],
  })
  connect?: Array<PerformanceAnalyticsWhereUniqueInput>;

  @Field(() => [PerformanceAnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PerformanceAnalyticsWhereUniqueInput],
  })
  disconnect?: Array<PerformanceAnalyticsWhereUniqueInput>;

  @Field(() => [PerformanceAnalyticsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PerformanceAnalyticsWhereUniqueInput],
  })
  set?: Array<PerformanceAnalyticsWhereUniqueInput>;
}

export { PerformanceAnalyticsUpdateManyWithoutStudentsInput as PerformanceAnalyticsUpdateManyWithoutStudentsInput };