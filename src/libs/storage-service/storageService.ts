import { LocalStorageProvider } from './providers';
import type { StorageProvider } from './types';

let currentProvider: StorageProvider = LocalStorageProvider;

export const StorageService = {
  use(provider: StorageProvider) {
    currentProvider = provider;
  },

  get<T>(key: string): T | null {
    return currentProvider.get<T>(key);
  },

  set<T>(key: string, value: T): void {
    currentProvider.set<T>(key, value);
  },

  remove(key: string): void {
    currentProvider.remove(key);
  },

  clear(): void {
    currentProvider.clear();
  },
};
