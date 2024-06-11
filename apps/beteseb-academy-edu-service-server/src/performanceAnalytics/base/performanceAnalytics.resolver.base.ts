/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PerformanceAnalytics } from "./PerformanceAnalytics";
import { PerformanceAnalyticsCountArgs } from "./PerformanceAnalyticsCountArgs";
import { PerformanceAnalyticsFindManyArgs } from "./PerformanceAnalyticsFindManyArgs";
import { PerformanceAnalyticsFindUniqueArgs } from "./PerformanceAnalyticsFindUniqueArgs";
import { CreatePerformanceAnalyticsArgs } from "./CreatePerformanceAnalyticsArgs";
import { UpdatePerformanceAnalyticsArgs } from "./UpdatePerformanceAnalyticsArgs";
import { DeletePerformanceAnalyticsArgs } from "./DeletePerformanceAnalyticsArgs";
import { Student } from "../../student/base/Student";
import { PerformanceAnalyticsService } from "../performanceAnalytics.service";
@graphql.Resolver(() => PerformanceAnalytics)
export class PerformanceAnalyticsResolverBase {
  constructor(protected readonly service: PerformanceAnalyticsService) {}

  async _performanceAnalyticsItemsMeta(
    @graphql.Args() args: PerformanceAnalyticsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PerformanceAnalytics])
  async performanceAnalyticsItems(
    @graphql.Args() args: PerformanceAnalyticsFindManyArgs
  ): Promise<PerformanceAnalytics[]> {
    return this.service.performanceAnalyticsItems(args);
  }

  @graphql.Query(() => PerformanceAnalytics, { nullable: true })
  async performanceAnalytics(
    @graphql.Args() args: PerformanceAnalyticsFindUniqueArgs
  ): Promise<PerformanceAnalytics | null> {
    const result = await this.service.performanceAnalytics(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PerformanceAnalytics)
  async createPerformanceAnalytics(
    @graphql.Args() args: CreatePerformanceAnalyticsArgs
  ): Promise<PerformanceAnalytics> {
    return await this.service.createPerformanceAnalytics({
      ...args,
      data: {
        ...args.data,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PerformanceAnalytics)
  async updatePerformanceAnalytics(
    @graphql.Args() args: UpdatePerformanceAnalyticsArgs
  ): Promise<PerformanceAnalytics | null> {
    try {
      return await this.service.updatePerformanceAnalytics({
        ...args,
        data: {
          ...args.data,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PerformanceAnalytics)
  async deletePerformanceAnalytics(
    @graphql.Args() args: DeletePerformanceAnalyticsArgs
  ): Promise<PerformanceAnalytics | null> {
    try {
      return await this.service.deletePerformanceAnalytics(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Student, {
    nullable: true,
    name: "student",
  })
  async getStudent(
    @graphql.Parent() parent: PerformanceAnalytics
  ): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
