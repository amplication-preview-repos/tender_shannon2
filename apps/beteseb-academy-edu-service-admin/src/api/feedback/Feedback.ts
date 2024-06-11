import { User } from "../user/User";

export type Feedback = {
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
