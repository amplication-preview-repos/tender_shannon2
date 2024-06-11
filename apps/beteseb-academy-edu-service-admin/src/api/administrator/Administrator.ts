import { User } from "../user/User";

export type Administrator = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
