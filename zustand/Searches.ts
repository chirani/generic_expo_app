import { create } from 'zustand'

interface SavedSearchState {
  savedSearches: string[]
  addSavedSearch: (newSearch: string) => void
  removeSavedSearch: (mySearch: string) => void
}

const useSavedSearchStore = create<SavedSearchState>((set) => ({
  savedSearches: [],
  addSavedSearch: (newSearch: string) => {
    set((state) => {
      let savedSearchIndex = state.savedSearches.findIndex(
        (element) => element === newSearch,
      )

      if (savedSearchIndex === -1) {
        return { savedSearches: [...state.savedSearches, newSearch] }
      }

      return { savedSearches: state.savedSearches }
    })
  },
  removeSavedSearch: (mySearch: string) => {
    set((state) => {
      let savedSearchIndex = state.savedSearches.findIndex(
        (element) => element === mySearch,
      )

      if (savedSearchIndex === -1 || mySearch.trim() === '') {
        return { savedSearches: state.savedSearches }
      }

      return { savedSearches: [...state.savedSearches, mySearch.trim()] }
    })
  },
}))

interface RecentSearchState {
  recentSearches: string[]
  addRecentSearch: (newSearch: string) => void
  removeSavedSearch: (mySearch: string) => void
}

const useRecentSearchStore = create<RecentSearchState>((set) => ({
  recentSearches: [],
  addRecentSearch: (newSearch: string) => {
    set((state) => {
      let savedSearchIndex = state.recentSearches.findIndex(
        (element) => element === newSearch,
      )

      if (savedSearchIndex === -1) {
        return { recentSearches: [...state.recentSearches, newSearch] }
      }

      return { recentSearches: state.recentSearches }
    })
  },
  removeSavedSearch: (mySearch: string) => {
    set((state) => {
      let savedSearchIndex = state.recentSearches.findIndex(
        (element) => element === mySearch,
      )

      if (savedSearchIndex === -1) {
        return { recentSearches: state.recentSearches }
      }

      return { recentSearches: [...state.recentSearches, mySearch] }
    })
  },
}))

export { useSavedSearchStore, useRecentSearchStore }
