import {isNull, isUndefined, isString} from 'lodash';

export class StorageService {

    constructor(private storage: Storage) {
    }

    public getItem(key: string, defaultValue?: any): string {
        let item = this.storage.getItem(key);

        if ((isNull(item) || isUndefined(item)) && defaultValue) {
            return defaultValue;
        }
        return item;
    }

    public getItemAsObject<T>(key: string): T {
        const item = this.getItem(key);
        if (isNull(item) || isUndefined(item)) {
            return <any>{};
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
