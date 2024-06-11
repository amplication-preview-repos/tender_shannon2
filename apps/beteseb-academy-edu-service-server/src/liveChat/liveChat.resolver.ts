import * as graphql from "@nestjs/graphql";
import { LiveChatResolverBase } from "./base/liveChat.resolver.base";
import { LiveChat } from "./base/LiveChat";
import { LiveChatService } from "./liveChat.service";

@graphql.Resolver(() => LiveChat)
export class LiveChatResolver extends LiveChatResolverBase {
  constructor(protected readonly service: LiveChatService) {
    super(service);
  }
}
