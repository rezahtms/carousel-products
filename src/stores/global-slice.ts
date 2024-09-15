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
    carouselInd: 1,
    setCarouselInd: (ind) => set(state => { state.carouselInd = ind }),
    prevItem: () => set(state => {
        if (state.carouselInd > 1) {
            state.carouselInd -= 1;
        } else {
            state.carouselInd = 15;
        }
    }),
    nextItem: () => set(state => {
        if (state.carouselInd < 15) {
            state.carouselInd += 1;
        } else {
            state.carouselInd = 1;
        }
    }),
});