import * as graphql from "@nestjs/graphql";
import { AdministratorResolverBase } from "./base/administrator.resolver.base";
import { Administrator } from "./base/Administrator";
import { AdministratorService } from "./administrator.service";

@graphql.Resolver(() => Administrator)
export class AdministratorResolver extends AdministratorResolverBase {
  constructor(protected readonly service: AdministratorService) {
    super(service);
  }
}
