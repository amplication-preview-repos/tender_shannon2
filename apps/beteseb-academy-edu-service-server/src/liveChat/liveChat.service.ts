import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveChatServiceBase } from "./base/liveChat.service.base";

@Injectable()
export class LiveChatService extends LiveChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
