import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveChatService } from "./liveChat.service";
import { LiveChatControllerBase } from "./base/liveChat.controller.base";

@swagger.ApiTags("liveChats")
@common.Controller("liveChats")
export class LiveChatController extends LiveChatControllerBase {
  constructor(protected readonly service: LiveChatService) {
    super(service);
  }
}
