"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { lotionPackStore } from "./lotionPackStore";

interface AppStateValue {
  favorites: string[];
  isFavorite: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
  compareList: string[];
  isInCompare: (slug: string) => boolean;
  toggleCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  compareLimit: number;
  ready: boolean;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const state = useSyncExternalStore(
    lotionPackStore.subscribe,
    lotionPackStore.getSnapshot,
    lotionPackStore.getServerSnapshot
  );

  const value = useMemo<AppStateValue>(
    () => ({
      favorites: state.favorites,
      isFavorite: (slug: string) => state.favorites.includes(slug),
      toggleFavorite: lotionPackStore.toggleFavorite,
      compareList: state.compareList,
      isInCompare: (slug: string) => state.compareList.includes(slug),
      toggleCompare: lotionPackStore.toggleCompare,
      removeFromCompare: lotionPackStore.removeFromCompare,
      clearCompare: lotionPackStore.clearCompare,
      compareLimit: lotionPackStore.compareLimit,
      ready: state.hydrated,
    }),
    [state]
  );

  return (
    <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
