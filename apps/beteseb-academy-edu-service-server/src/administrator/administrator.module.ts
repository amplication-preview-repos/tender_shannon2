import { Module } from "@nestjs/common";
import { AdministratorModuleBase } from "./base/administrator.module.base";
import { AdministratorService } from "./administrator.service";
import { AdministratorController } from "./administrator.controller";
import { AdministratorResolver } from "./administrator.resolver";

@Module({
  imports: [AdministratorModuleBase],
  controllers: [AdministratorController],
  providers: [AdministratorService, AdministratorResolver],
  exports: [AdministratorService],
})
export class AdministratorModule {}
