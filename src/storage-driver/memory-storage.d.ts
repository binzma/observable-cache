export declare class MemoryStorage extends Storage {
    private data;
    clear(): void;
    removeItem(key: string): void;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
