import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiscussionForumService } from "./discussionForum.service";
import { DiscussionForumControllerBase } from "./base/discussionForum.controller.base";

@swagger.ApiTags("discussionForums")
@common.Controller("discussionForums")
export class DiscussionForumController extends DiscussionForumControllerBase {
  constructor(protected readonly service: DiscussionForumService) {
    super(service);
  }
}
