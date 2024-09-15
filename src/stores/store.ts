import { Store } from "@/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createGlobalSlice } from "./global-slice";


export const useStore = create<Store>()(immer((...a) => ({
    ...createGlobalSlice(...a)
})));