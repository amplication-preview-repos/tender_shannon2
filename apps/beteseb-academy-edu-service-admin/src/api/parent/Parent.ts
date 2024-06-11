import { Meeting } from "../meeting/Meeting";
import { User } from "../user/User";

export type Parent = {
  children: string | null;
  createdAt: Date;
  id: string;
  meetings?: Array<Meeting>;
  updatedAt: Date;
  user?: User | null;
};
