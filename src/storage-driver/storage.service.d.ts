export declare class StorageService {
    private storage;
    constructor(storage: Storage);
    getItem(key: string, defaultValue?: any): string;
    getItemAsObject<T>(key: string): T;
    setItem<T>(key: string, value: T): void;
    clear(): void;
    removeItem(key: string): void;
}
