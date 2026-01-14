import { create } from 'zustand'

type colorState = {
  color : string
}

type colorAction = {
  setColor : (color : string) => void
}

export const useColorStore = create<colorState & colorAction>((set) => ({
  color : 'black',
  setColor: (color : string) => set({ color })
}))