import { atom } from "recoil";

export const timerState = atom({
  key: "timerState",
  default: 1500,
});

export const isTimerActiveState = atom<boolean>({
  key: "isTimerActiveState",
  default: false,
});

export const roundCountState = atom({
  key: "roundCountState",
  default: 0,
});

export const goalState = atom({
  key: "goalState",
  default: 0,
});
