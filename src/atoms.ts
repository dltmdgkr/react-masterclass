import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "TODOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDoState",
  default: [],
});
