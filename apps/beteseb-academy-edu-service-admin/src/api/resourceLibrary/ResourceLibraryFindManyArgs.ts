import { ResourceLibraryWhereInput } from "./ResourceLibraryWhereInput";
import { ResourceLibraryOrderByInput } from "./ResourceLibraryOrderByInput";

export type ResourceLibraryFindManyArgs = {
  where?: ResourceLibraryWhereInput;
  orderBy?: Array<ResourceLibraryOrderByInput>;
  skip?: number;
  take?: number;
};
