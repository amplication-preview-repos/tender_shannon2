import { Module } from "@nestjs/common";
import { LiveChatModuleBase } from "./base/liveChat.module.base";
import { LiveChatService } from "./liveChat.service";
import { LiveChatController } from "./liveChat.controller";
import { LiveChatResolver } from "./liveChat.resolver";

@Module({
  imports: [LiveChatModuleBase],
  controllers: [LiveChatController],
  providers: [LiveChatService, LiveChatResolver],
  exports: [LiveChatService],
})
export class LiveChatModule {}
