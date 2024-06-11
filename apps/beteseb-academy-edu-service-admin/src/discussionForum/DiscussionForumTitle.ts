import { DiscussionForum as TDiscussionForum } from "../api/discussionForum/DiscussionForum";

export const DISCUSSIONFORUM_TITLE_FIELD = "title";

export const DiscussionForumTitle = (record: TDiscussionForum): string => {
  return record.title?.toString() || String(record.id);
};
