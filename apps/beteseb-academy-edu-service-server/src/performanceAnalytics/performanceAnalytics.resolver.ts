import * as graphql from "@nestjs/graphql";
import { PerformanceAnalyticsResolverBase } from "./base/performanceAnalytics.resolver.base";
import { PerformanceAnalytics } from "./base/PerformanceAnalytics";
import { PerformanceAnalyticsService } from "./performanceAnalytics.service";

@graphql.Resolver(() => PerformanceAnalytics)
export class PerformanceAnalyticsResolver extends PerformanceAnalyticsResolverBase {
  constructor(protected readonly service: PerformanceAnalyticsService) {
    super(service);
  }
}
