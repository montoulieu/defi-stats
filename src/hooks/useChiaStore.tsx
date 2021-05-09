import create from 'zustand';

const useChiaStore = create((set) => ({
  summary: '',
  setSummary: (summary) => set((state) => ({ summary })),
}));

export default useChiaStore;
