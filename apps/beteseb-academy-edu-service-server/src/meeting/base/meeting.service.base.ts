/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Meeting as PrismaMeeting,
  Parent as PrismaParent,
  Teacher as PrismaTeacher,
} from "@prisma/client";

export class MeetingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MeetingCountArgs, "select">): Promise<number> {
    return this.prisma.meeting.count(args);
  }

  async meetings<T extends Prisma.MeetingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeetingFindManyArgs>
  ): Promise<PrismaMeeting[]> {
    return this.prisma.meeting.findMany<Prisma.MeetingFindManyArgs>(args);
  }
  async meeting<T extends Prisma.MeetingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeetingFindUniqueArgs>
  ): Promise<PrismaMeeting | null> {
    return this.prisma.meeting.findUnique(args);
  }
  async createMeeting<T extends Prisma.MeetingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeetingCreateArgs>
  ): Promise<PrismaMeeting> {
    return this.prisma.meeting.create<T>(args);
  }
  async updateMeeting<T extends Prisma.MeetingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeetingUpdateArgs>
  ): Promise<PrismaMeeting> {
    return this.prisma.meeting.update<T>(args);
  }
  async deleteMeeting<T extends Prisma.MeetingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MeetingDeleteArgs>
  ): Promise<PrismaMeeting> {
    return this.prisma.meeting.delete(args);
  }

  async getParent(parentId: string): Promise<PrismaParent | null> {
    return this.prisma.meeting
      .findUnique({
        where: { id: parentId },
      })
      .parent();
  }

  async getTeacher(parentId: string): Promise<PrismaTeacher | null> {
    return this.prisma.meeting
      .findUnique({
        where: { id: parentId },
      })
      .teacher();
  }
}
