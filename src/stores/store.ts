import { create } from "zustand";
import { Store } from "@/types";
import { immer } from "zustand/middleware/immer";
import { createGlobalSlice } from "@/stores";



export const useStore=create<Store>()(immer((...a)=>({
...createGlobalSlice(...a)

})));