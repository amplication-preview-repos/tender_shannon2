import { Module } from "@nestjs/common";
import { ParentModule } from "./parent/parent.module";
import { StudentModule } from "./student/student.module";
import { TeacherModule } from "./teacher/teacher.module";
import { EventModule } from "./event/event.module";
import { MessageModule } from "./message/message.module";
import { MeetingModule } from "./meeting/meeting.module";
import { BookModule } from "./book/book.module";
import { NewsModule } from "./news/news.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { DiscussionForumModule } from "./discussionForum/discussionForum.module";
import { QuizModule } from "./quiz/quiz.module";
import { AdministratorModule } from "./administrator/administrator.module";
import { PerformanceAnalyticsModule } from "./performanceAnalytics/performanceAnalytics.module";
import { ResultModule } from "./result/result.module";
import { ResourceLibraryModule } from "./resourceLibrary/resourceLibrary.module";
import { NotificationModule } from "./notification/notification.module";
import { ExamModule } from "./exam/exam.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ParentModule,
    StudentModule,
    TeacherModule,
    EventModule,
    MessageModule,
    MeetingModule,
    BookModule,
    NewsModule,
    FeedbackModule,
    DiscussionForumModule,
    QuizModule,
    AdministratorModule,
    PerformanceAnalyticsModule,
    ResultModule,
    ResourceLibraryModule,
    NotificationModule,
    ExamModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
