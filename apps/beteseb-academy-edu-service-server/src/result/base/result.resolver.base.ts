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
import { Result } from "./Result";
import { ResultCountArgs } from "./ResultCountArgs";
import { ResultFindManyArgs } from "./ResultFindManyArgs";
import { ResultFindUniqueArgs } from "./ResultFindUniqueArgs";
import { CreateResultArgs } from "./CreateResultArgs";
import { UpdateResultArgs } from "./UpdateResultArgs";
import { DeleteResultArgs } from "./DeleteResultArgs";
import { ExamFindManyArgs } from "../../exam/base/ExamFindManyArgs";
import { Exam } from "../../exam/base/Exam";
import { QuizFindManyArgs } from "../../quiz/base/QuizFindManyArgs";
import { Quiz } from "../../quiz/base/Quiz";
import { ResultService } from "../result.service";
@graphql.Resolver(() => Result)
export class ResultResolverBase {
  constructor(protected readonly service: ResultService) {}

  async _resultsMeta(
    @graphql.Args() args: ResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Result])
  async results(@graphql.Args() args: ResultFindManyArgs): Promise<Result[]> {
    return this.service.results(args);
  }

  @graphql.Query(() => Result, { nullable: true })
  async result(
    @graphql.Args() args: ResultFindUniqueArgs
  ): Promise<Result | null> {
    const result = await this.service.result(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Result)
  async createResult(@graphql.Args() args: CreateResultArgs): Promise<Result> {
    return await this.service.createResult({
      ...args,
      data: {
        ...args.data,

        exam: args.data.exam
          ? {
              connect: args.data.exam,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Result)
  async updateResult(
    @graphql.Args() args: UpdateResultArgs
  ): Promise<Result | null> {
    try {
      return await this.service.updateResult({
        ...args,
        data: {
          ...args.data,

          exam: args.data.exam
            ? {
                connect: args.data.exam,
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

  @graphql.Mutation(() => Result)
  async deleteResult(
    @graphql.Args() args: DeleteResultArgs
  ): Promise<Result | null> {
    try {
      return await this.service.deleteResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Exam], { name: "exams" })
  async findExams(
    @graphql.Parent() parent: Result,
    @graphql.Args() args: ExamFindManyArgs
  ): Promise<Exam[]> {
    const results = await this.service.findExams(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Quiz], { name: "quizzes" })
  async findQuizzes(
    @graphql.Parent() parent: Result,
    @graphql.Args() args: QuizFindManyArgs
  ): Promise<Quiz[]> {
    const results = await this.service.findQuizzes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Exam, {
    nullable: true,
    name: "exam",
  })
  async getExam(@graphql.Parent() parent: Result): Promise<Exam | null> {
    const result = await this.service.getExam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}