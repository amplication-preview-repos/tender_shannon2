import { Module } from "@nestjs/common";
import { AiResponseModuleBase } from "./base/aiResponse.module.base";
import { AiResponseService } from "./aiResponse.service";
import { AiResponseController } from "./aiResponse.controller";
import { AiResponseResolver } from "./aiResponse.resolver";

@Module({
  imports: [AiResponseModuleBase],
  controllers: [AiResponseController],
  providers: [AiResponseService, AiResponseResolver],
  exports: [AiResponseService],
})
export class AiResponseModule {}
