import { create } from "zustand";

// Define the initial state
const useModeStore = create((set) => ({
  mode: "receive", // Default mode is 'receive'

  // Function to set the mode
  setMode: (newMode) =>
    set((state) => ({
      mode: newMode,
    })),
}));

export default useModeStore;
