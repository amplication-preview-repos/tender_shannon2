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
  Administrator as PrismaAdministrator,
  User as PrismaUser,
} from "@prisma/client";

export class AdministratorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AdministratorCountArgs, "select">
  ): Promise<number> {
    return this.prisma.administrator.count(args);
  }

  async administrators<T extends Prisma.AdministratorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdministratorFindManyArgs>
  ): Promise<PrismaAdministrator[]> {
    return this.prisma.administrator.findMany<Prisma.AdministratorFindManyArgs>(
      args
    );
  }
  async administrator<T extends Prisma.AdministratorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdministratorFindUniqueArgs>
  ): Promise<PrismaAdministrator | null> {
    return this.prisma.administrator.findUnique(args);
  }
  async createAdministrator<T extends Prisma.AdministratorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdministratorCreateArgs>
  ): Promise<PrismaAdministrator> {
    return this.prisma.administrator.create<T>(args);
  }
  async updateAdministrator<T extends Prisma.AdministratorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdministratorUpdateArgs>
  ): Promise<PrismaAdministrator> {
    return this.prisma.administrator.update<T>(args);
  }
  async deleteAdministrator<T extends Prisma.AdministratorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdministratorDeleteArgs>
  ): Promise<PrismaAdministrator> {
    return this.prisma.administrator.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.administrator
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}