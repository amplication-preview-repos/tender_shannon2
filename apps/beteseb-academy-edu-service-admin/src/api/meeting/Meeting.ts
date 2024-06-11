import { Parent } from "../parent/Parent";
import { Teacher } from "../teacher/Teacher";

export type Meeting = {
  agenda: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  parent?: Parent | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};
