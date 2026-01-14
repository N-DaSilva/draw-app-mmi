import { create } from 'zustand'

type sizeState = {
  size : number
}

type sizeAction = {
  setSize : (size : number) => void
}

export const useSizeStore = create<sizeState & sizeAction>((set) => ({
  size : 6,
  setSize: (size : number) => set({ size })
}))