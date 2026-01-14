import { create } from 'zustand'

type sizeState = {
  size : string
}

type sizeAction = {
  setSize : (size : string) => void
}

export const useSizeStore = create<sizeState & sizeAction>((set) => ({
  size : '6',
  setSize: (size : string) => set({ size })
}))