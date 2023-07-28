import { create } from "zustand";

interface AliasState {
  aliases: string[];
  addAlias: (alias: string) => void;
}

export const useAliasStore = create<AliasState>()((set) => ({
  aliases: [],
  addAlias: (alias) =>
    set((state) => ({
      aliases: [alias, ...state.aliases],
    })),
}));
