import { StateCreator } from "zustand";


type GlobalStates = {
    carouselInd: number;
}

type GlobalActions = {
    setCarouselInd: (ind: number) => void;
}

export type GlobalSlice = GlobalStates & GlobalActions;

export const createGlobalSlice: StateCreator<GlobalSlice, [['zustand/immer',never]], [], GlobalSlice> = (set) => ({
    carouselInd: 1,
    setCarouselInd: (ind) =>set((state)=>{state.carouselInd=ind})
})