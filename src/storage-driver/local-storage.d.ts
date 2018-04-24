import { StorageDriver } from '../observable-cache.interfaces';
export declare class LocalStorage implements StorageDriver {
    private storage;
    getItem(key: string, defaultValue?: any): any;
    setItem(key: string, value: any): void;
    clear(): void;
    removeItem(key: string): void;
}
