import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResourceLibraryServiceBase } from "./base/resourceLibrary.service.base";

@Injectable()
export class ResourceLibraryService extends ResourceLibraryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
