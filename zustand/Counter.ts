//To be deleted
import { create } from 'zustand'

interface CounterState {
  count: number
  increase: (by?: number) => void
}

const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increase: (by = 1) => set((state) => ({ count: state.count + by })),
}))

export default useCounterStore
