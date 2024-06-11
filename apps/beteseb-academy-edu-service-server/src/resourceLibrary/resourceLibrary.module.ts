import { Module } from "@nestjs/common";
import { ResourceLibraryModuleBase } from "./base/resourceLibrary.module.base";
import { ResourceLibraryService } from "./resourceLibrary.service";
import { ResourceLibraryController } from "./resourceLibrary.controller";
import { ResourceLibraryResolver } from "./resourceLibrary.resolver";

@Module({
  imports: [ResourceLibraryModuleBase],
  controllers: [ResourceLibraryController],
  providers: [ResourceLibraryService, ResourceLibraryResolver],
  exports: [ResourceLibraryService],
})
export class ResourceLibraryModule {}
