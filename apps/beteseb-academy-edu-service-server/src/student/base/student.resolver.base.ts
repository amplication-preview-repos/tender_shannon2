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
import { Student } from "./Student";
import { StudentCountArgs } from "./StudentCountArgs";
import { StudentFindManyArgs } from "./StudentFindManyArgs";
import { StudentFindUniqueArgs } from "./StudentFindUniqueArgs";
import { CreateStudentArgs } from "./CreateStudentArgs";
import { UpdateStudentArgs } from "./UpdateStudentArgs";
import { DeleteStudentArgs } from "./DeleteStudentArgs";
import { ExamFindManyArgs } from "../../exam/base/ExamFindManyArgs";
import { Exam } from "../../exam/base/Exam";
import { PerformanceAnalyticsFindManyArgs } from "../../performanceAnalytics/base/PerformanceAnalyticsFindManyArgs";
import { PerformanceAnalytics } from "../../performanceAnalytics/base/PerformanceAnalytics";
import { QuizFindManyArgs } from "../../quiz/base/QuizFindManyArgs";
import { Quiz } from "../../quiz/base/Quiz";
import { User } from "../../user/base/User";
import { StudentService } from "../student.service";
@graphql.Resolver(() => Student)
export class StudentResolverBase {
  constructor(protected readonly service: StudentService) {}

  async _studentsMeta(
    @graphql.Args() args: StudentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Student])
  async students(
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    return this.service.students(args);
  }

  @graphql.Query(() => Student, { nullable: true })
  async student(
    @graphql.Args() args: StudentFindUniqueArgs
  ): Promise<Student | null> {
    const result = await this.service.student(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Student)
  async createStudent(
    @graphql.Args() args: CreateStudentArgs
  ): Promise<Student> {
    return await this.service.createStudent({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Student)
  async updateStudent(
    @graphql.Args() args: UpdateStudentArgs
  ): Promise<Student | null> {
    try {
      return await this.service.updateStudent({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Student)
  async deleteStudent(
    @graphql.Args() args: DeleteStudentArgs
  ): Promise<Student | null> {
    try {
      return await this.service.deleteStudent(args);
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
    @graphql.Parent() parent: Student,
    @graphql.Args() args: ExamFindManyArgs
  ): Promise<Exam[]> {
    const results = await this.service.findExams(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [PerformanceAnalytics], {
    name: "performanceAnalyticsItems",
  })
  async findPerformanceAnalyticsItems(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: PerformanceAnalyticsFindManyArgs
  ): Promise<PerformanceAnalytics[]> {
    const results = await this.service.findPerformanceAnalyticsItems(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Quiz], { name: "quizzes" })
  async findQuizzes(
    @graphql.Parent() parent: Student,
    @graphql.Args() args: QuizFindManyArgs
  ): Promise<Quiz[]> {
    const results = await this.service.findQuizzes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Student): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
