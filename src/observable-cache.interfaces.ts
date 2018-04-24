export class ObservableCacheConfig {
    storageDriver?: 'LocalStorage'|'SessionStorage'|'MemoryStorage';
    cacheExpiry?: number;
}

export interface StorageDriver {
    clear(): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}


export interface AsyncUpdateConfig {
    storageKey: string,
    afterSeconds?: number,
    beforeUpdate?: Function,
    afterUpdate?: Function
}