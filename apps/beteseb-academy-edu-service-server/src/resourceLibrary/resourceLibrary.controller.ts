import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResourceLibraryService } from "./resourceLibrary.service";
import { ResourceLibraryControllerBase } from "./base/resourceLibrary.controller.base";

@swagger.ApiTags("resourceLibraries")
@common.Controller("resourceLibraries")
export class ResourceLibraryController extends ResourceLibraryControllerBase {
  constructor(protected readonly service: ResourceLibraryService) {
    super(service);
  }
}
