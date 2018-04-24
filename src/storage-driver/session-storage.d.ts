import { StorageDriver } from '../observable-cache.interfaces';
export declare class SessionStorage implements StorageDriver {
    private storage;
    getItem<T>(key: string, defaultValue?: any): T;
    setItem<T>(key: string, value: T): void;
    clear(): void;
    removeItem(key: string): void;
}
