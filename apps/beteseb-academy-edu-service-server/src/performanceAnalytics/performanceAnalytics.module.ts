import { Module } from "@nestjs/common";
import { PerformanceAnalyticsModuleBase } from "./base/performanceAnalytics.module.base";
import { PerformanceAnalyticsService } from "./performanceAnalytics.service";
import { PerformanceAnalyticsController } from "./performanceAnalytics.controller";
import { PerformanceAnalyticsResolver } from "./performanceAnalytics.resolver";

@Module({
  imports: [PerformanceAnalyticsModuleBase],
  controllers: [PerformanceAnalyticsController],
  providers: [PerformanceAnalyticsService, PerformanceAnalyticsResolver],
  exports: [PerformanceAnalyticsService],
})
export class PerformanceAnalyticsModule {}
