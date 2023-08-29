"use client";
import { atom } from "recoil";
import { ItemList } from "../type/Interface";
export const itemState = atom<ItemList[]>({
  key: "itemState",
  default: [],
});
