import { StateCreator } from "zustand";

type GlobalStates = {
    carouselInd: number;
}

type GlobalActions = {
    setCarouselInd: (ind: number) => void;
    prevItem: () => void;
    nextItem: () => void;
}

export type GlobalSlice = GlobalStates & GlobalActions;

export const createGlobalSlice: StateCreator<GlobalSlice, [['zustand/immer', never]], [], GlobalSlice> = (set) => ({  
    carouselInd: 0, // تغییر مقدار به 0  
    setCarouselInd: (ind) => set(state => { state.carouselInd = ind }),  
    nextItem: () => set(state => {  
        state.carouselInd = state.carouselInd < 14 ? state.carouselInd + 1 : 0;  
    }),  
    prevItem: () => set(state => {  
        state.carouselInd = state.carouselInd > 0 ? state.carouselInd - 1 : 14; 
    }),  
});  