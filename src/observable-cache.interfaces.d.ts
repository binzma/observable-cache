export declare class ObservableCacheConfig {
    storageDriver?: 'LocalStorage' | 'SessionStorage' | 'MemoryStorage';
}
export interface StorageDriver {
    clear(): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
