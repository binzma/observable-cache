import {isNull, isUndefined, isString} from 'lodash';
import {StorageDriver} from '../observable-cache.interfaces';

export class LocalStorage implements StorageDriver {

    private storage = window.localStorage;

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
