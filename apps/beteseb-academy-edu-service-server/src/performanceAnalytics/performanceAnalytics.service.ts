import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceAnalyticsServiceBase } from "./base/performanceAnalytics.service.base";

@Injectable()
export class PerformanceAnalyticsService extends PerformanceAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
