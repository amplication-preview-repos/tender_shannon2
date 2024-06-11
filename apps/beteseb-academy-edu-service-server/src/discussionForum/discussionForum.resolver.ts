import * as graphql from "@nestjs/graphql";
import { DiscussionForumResolverBase } from "./base/discussionForum.resolver.base";
import { DiscussionForum } from "./base/DiscussionForum";
import { DiscussionForumService } from "./discussionForum.service";

@graphql.Resolver(() => DiscussionForum)
export class DiscussionForumResolver extends DiscussionForumResolverBase {
  constructor(protected readonly service: DiscussionForumService) {
    super(service);
  }
}
