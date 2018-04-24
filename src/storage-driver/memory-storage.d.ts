import { StorageDriver } from '../observable-cache.interfaces';
export declare class MemoryStorage extends Storage implements StorageDriver {
    private data;
    clear(): void;
    removeItem(key: string): void;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
