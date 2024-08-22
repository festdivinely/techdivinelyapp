import { create } from 'zustand'

export const useHomeStore = create((set) => ({
    landing: true,
    login: false,
    signup: false,

    setLogin: () => set({
        landing: false,
        signup: false,
        login: true
    }),

    setSignup: () => set({
        landing: false,
        signup: true,
        login: false
    }),

    setLanding: () => set({
        landing: true,
        signup: false,
        login: false
    })
}));
