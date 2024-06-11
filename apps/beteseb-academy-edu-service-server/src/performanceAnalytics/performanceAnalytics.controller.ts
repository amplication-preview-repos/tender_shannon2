import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceAnalyticsService } from "./performanceAnalytics.service";
import { PerformanceAnalyticsControllerBase } from "./base/performanceAnalytics.controller.base";

@swagger.ApiTags("performanceAnalytics")
@common.Controller("performanceAnalytics")
export class PerformanceAnalyticsController extends PerformanceAnalyticsControllerBase {
  constructor(protected readonly service: PerformanceAnalyticsService) {
    super(service);
  }
}
