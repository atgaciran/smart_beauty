import { create } from 'zustand';

export type Step = 'selection' | 'analyzing' | 'results';

interface UiStore {
  step: Step;
  setStep: (step: Step) => void;
  resetFlow: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  step: 'selection', // Varsayılan olarak seçim ekranından başlar
  setStep: (step) => set({ step }),
  resetFlow: () => set({ step: 'selection' }), // Logoya tıklanınca burası çalışacak
}));