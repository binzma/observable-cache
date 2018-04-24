import {StorageDriver} from '../observable-cache.interfaces';

export class MemoryStorage extends Storage implements StorageDriver{

    private data = {};

    public clear(): void {
        this.data = {};
    };

    public removeItem(key: string): void {
        delete this.data[key];
    };

    public getItem(key: string): string | null {
        return this.data[key];
    };

    public setItem(key: string, value: string): void {
        this.data[key] = value;
    };
}
