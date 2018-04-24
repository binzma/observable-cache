import {isNull, isUndefined, isString} from 'lodash';
import {StorageDriver} from '../observable-cache.interfaces';

export class LocalStorage implements StorageDriver {

    private storage = window.localStorage;

    public getItem(key: string, defaultValue?: any) {
        const item = this.storage.getItem(key);
        if (isNull(item) || isUndefined(item)) {
            return defaultValue ? defaultValue : {};
        }
        else {
            try {
                return JSON.parse(item);
            }
            catch (e) {
                return item;
            }
        }
    }

    public setItem(key: string, value): void {
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
