import { Parent as TParent } from "../api/parent/Parent";

export const PARENT_TITLE_FIELD = "children";

export const ParentTitle = (record: TParent): string => {
  return record.children?.toString() || String(record.id);
};
