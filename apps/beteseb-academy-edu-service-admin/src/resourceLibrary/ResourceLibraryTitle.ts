import { ResourceLibrary as TResourceLibrary } from "../api/resourceLibrary/ResourceLibrary";

export const RESOURCELIBRARY_TITLE_FIELD = "title";

export const ResourceLibraryTitle = (record: TResourceLibrary): string => {
  return record.title?.toString() || String(record.id);
};
