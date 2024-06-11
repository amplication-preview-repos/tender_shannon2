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
import { ParentService } from "../parent.service";
import { ParentCreateInput } from "./ParentCreateInput";
import { Parent } from "./Parent";
import { ParentFindManyArgs } from "./ParentFindManyArgs";
import { ParentWhereUniqueInput } from "./ParentWhereUniqueInput";
import { ParentUpdateInput } from "./ParentUpdateInput";
import { MeetingFindManyArgs } from "../../meeting/base/MeetingFindManyArgs";
import { Meeting } from "../../meeting/base/Meeting";
import { MeetingWhereUniqueInput } from "../../meeting/base/MeetingWhereUniqueInput";

export class ParentControllerBase {
  constructor(protected readonly service: ParentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Parent })
  async createParent(@common.Body() data: ParentCreateInput): Promise<Parent> {
    return await this.service.createParent({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        children: true,
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
  @swagger.ApiOkResponse({ type: [Parent] })
  @ApiNestedQuery(ParentFindManyArgs)
  async parents(@common.Req() request: Request): Promise<Parent[]> {
    const args = plainToClass(ParentFindManyArgs, request.query);
    return this.service.parents({
      ...args,
      select: {
        children: true,
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
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async parent(
    @common.Param() params: ParentWhereUniqueInput
  ): Promise<Parent | null> {
    const result = await this.service.parent({
      where: params,
      select: {
        children: true,
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
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateParent(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() data: ParentUpdateInput
  ): Promise<Parent | null> {
    try {
      return await this.service.updateParent({
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
          children: true,
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
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteParent(
    @common.Param() params: ParentWhereUniqueInput
  ): Promise<Parent | null> {
    try {
      return await this.service.deleteParent({
        where: params,
        select: {
          children: true,
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
    @common.Param() params: ParentWhereUniqueInput
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
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        connect: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/meetings")
  async updateMeetings(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        set: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/meetings")
  async disconnectMeetings(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: MeetingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      meetings: {
        disconnect: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }
}