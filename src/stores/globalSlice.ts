import { StateCreator } from "zustand";

type GlobalStates = {
    itemIndex: number;
}

type GlobalActions = {
    handleChangInd: (ind: number) => void
}


export type GlobalSlice = GlobalStates & GlobalActions;

export const createGlobalSlice: StateCreator<GlobalSlice, [['zustand/immer', never]], [], GlobalSlice> =  (set)=>({
    itemIndex:0,
    handleChangInd:(ind)=>set((state)=>{state.itemIndex=ind})
})