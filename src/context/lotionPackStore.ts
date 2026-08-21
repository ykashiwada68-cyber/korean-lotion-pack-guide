/**
 * お気に入り・比較リストをブラウザのlocalStorageと同期する外部ストア。
 * React の useSyncExternalStore から利用する（SSRとの水和ずれを避けるため）。
 */

const FAVORITES_KEY = "lotionpack:favorites";
const COMPARE_KEY = "lotionpack:compare";
const COMPARE_LIMIT = 4;

interface StoreState {
  favorites: string[];
  compareList: string[];
  hydrated: boolean;
}

const SERVER_SNAPSHOT: StoreState = { favorites: [], compareList: [], hydrated: false };

let state: StoreState = SERVER_SNAPSHOT;
const listeners = new Set<() => void>();

function readList(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

function persist() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
  window.localStorage.setItem(COMPARE_KEY, JSON.stringify(state.compareList));
}

function ensureHydrated() {
  if (state.hydrated || typeof window === "undefined") return;
  state = {
    favorites: readList(FAVORITES_KEY),
    compareList: readList(COMPARE_KEY),
    hydrated: true,
  };
}

function emit() {
  for (const listener of listeners) listener();
}

export const lotionPackStore = {
  compareLimit: COMPARE_LIMIT,

  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getSnapshot(): StoreState {
    ensureHydrated();
    return state;
  },

  getServerSnapshot(): StoreState {
    return SERVER_SNAPSHOT;
  },

  toggleFavorite(slug: string) {
    ensureHydrated();
    const has = state.favorites.includes(slug);
    state = {
      ...state,
      favorites: has
        ? state.favorites.filter((s) => s !== slug)
        : [...state.favorites, slug],
    };
    persist();
    emit();
  },

  toggleCompare(slug: string) {
    ensureHydrated();
    const has = state.compareList.includes(slug);
    let next = state.compareList;
    if (has) {
      next = next.filter((s) => s !== slug);
    } else if (next.length < COMPARE_LIMIT) {
      next = [...next, slug];
    }
    state = { ...state, compareList: next };
    persist();
    emit();
  },

  removeFromCompare(slug: string) {
    ensureHydrated();
    state = { ...state, compareList: state.compareList.filter((s) => s !== slug) };
    persist();
    emit();
  },

  clearCompare() {
    ensureHydrated();
    state = { ...state, compareList: [] };
    persist();
    emit();
  },
};
