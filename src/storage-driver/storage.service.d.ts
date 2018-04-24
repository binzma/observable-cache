import { WindowRefService } from '../utils/window-ref.service';
import { ObservableCacheConfig } from '../observable-cache.interfaces';
export declare class StorageService {
    private storage;
    constructor(observableCacheConfig: ObservableCacheConfig, windowRef: WindowRefService);
    getItem<T>(key: string, defaultValue?: any): T;
    setItem<T>(key: string, value: T): void;
    clear(): void;
    removeItem(key: string): void;
}
