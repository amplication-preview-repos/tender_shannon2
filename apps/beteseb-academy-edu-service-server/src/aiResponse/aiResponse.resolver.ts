import * as graphql from "@nestjs/graphql";
import { AiResponseResolverBase } from "./base/aiResponse.resolver.base";
import { AiResponse } from "./base/AiResponse";
import { AiResponseService } from "./aiResponse.service";

@graphql.Resolver(() => AiResponse)
export class AiResponseResolver extends AiResponseResolverBase {
  constructor(protected readonly service: AiResponseService) {
    super(service);
  }
}
