import {isNull, isUndefined, isString} from 'lodash';
import {WindowRefService} from '../utils/window-ref.service';
import {ObservableCacheConfig} from '../observable-cache.interfaces';
import {MemoryStorage} from './memory-storage';

export class StorageService {

    private storage: Storage;

    constructor(observableCacheConfig: ObservableCacheConfig,
                windowRef: WindowRefService) {

        switch (observableCacheConfig.storageDriver) {
            case 'SessionStorage':
                this.storage = windowRef.getNativeWindow().sessionStorage;
                break;
            case 'LocalStorage':
                this.storage = windowRef.getNativeWindow().localStorage;
                break;
            default:
                this.storage = new MemoryStorage();
                break;
        }

    }

    public getItem<T>(key: string, defaultValue?: any): T {
        const item = this.storage.getItem(key);
        if (isNull(item) || isUndefined(item)) {
            return defaultValue ? defaultValue : <any>{};
        }
        else {
            return <T>JSON.parse(item);
        }
    }

    public setItem<T>(key: string, value: T): void {
        if (isString(value)) {
            this.storage.setItem(key, value);
        }
        else {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }

    public clear() {
        this.storage.clear();
    }

    public removeItem(key: string) {
        this.storage.removeItem(key);
    }
}
