import * as graphql from "@nestjs/graphql";
import { ResourceLibraryResolverBase } from "./base/resourceLibrary.resolver.base";
import { ResourceLibrary } from "./base/ResourceLibrary";
import { ResourceLibraryService } from "./resourceLibrary.service";

@graphql.Resolver(() => ResourceLibrary)
export class ResourceLibraryResolver extends ResourceLibraryResolverBase {
  constructor(protected readonly service: ResourceLibraryService) {
    super(service);
  }
}
