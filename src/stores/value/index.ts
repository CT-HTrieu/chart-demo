import { create } from "zustand";


type ValueStore = {
    category: string | null;
    setValue: (category: string) => void;
};

export const useValueStore = create<ValueStore>((set) => ({
    category: 'transactions',
    setValue: (category) => set({ category: category }),
}));
