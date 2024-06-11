/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TeacherService } from "../teacher.service";
import { TeacherCreateInput } from "./TeacherCreateInput";
import { Teacher } from "./Teacher";
import { TeacherFindManyArgs } from "./TeacherFindManyArgs";
import { TeacherWhereUniqueInput } from "./TeacherWhereUniqueInput";
import { TeacherUpdateInput } from "./TeacherUpdateInput";
import { MeetingFindManyArgs } from "../../meeting/base/MeetingFindManyArgs";
import { Meeting } from "../../meeting/base/Meeting";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";

export class TeacherControllerBase {
  constructor(protected readonly service: TeacherService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Teacher })
  async createTeacher(
    @common.Body() data: TeacherCreateInput
  ): Promise<Teacher> {
    return await this.service.createTeacher({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Teacher] })
  @ApiNestedQuery(TeacherFindManyArgs)
  async teachers(@common.Req() request: Request): Promise<Teacher[]> {
    const args = plainToClass(TeacherFindManyArgs, request.query);
    return this.service.teachers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async teacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    const result = await this.service.teacher({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeacher(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() data: TeacherUpdateInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.updateTeacher({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.deleteTeacher({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/meetings")
  @ApiNestedQuery(MeetingFindManyArgs)
  async findMeetings(
    @common.Req() request: Request,
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Meeting[]> {
    const query = plainToClass(MeetingFindManyArgs, request.query);
    const results = await this.service.findMeetings(params.id, {
      ...query,
      select: {
        agenda: true,
        createdAt: true,
        date: true,
        id: true,

        parent: {
          select: {
            id: true,
          },
        },

        teacher: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/meetings")
  async connectMeetings(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        connect: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meetings")
  async updateMeetings(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        set: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meetings")
  async disconnectMeetings(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        disconnect: body,
      },
    };
    await this.service.updateTeacher({
      where: params,
      data,
      select: { id: true },
    });
  }
}