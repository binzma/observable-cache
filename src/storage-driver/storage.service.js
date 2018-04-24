"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    getItem(key, defaultValue) {
        let item = this.storage.getItem(key);
        if ((lodash_1.isNull(item) || lodash_1.isUndefined(item)) && defaultValue) {
            return defaultValue;
        }
        return item;
    }
    getItemAsObject(key) {
        const item = this.getItem(key);
        if (lodash_1.isNull(item) || lodash_1.isUndefined(item)) {
            return {};
        }
        else {
            return JSON.parse(item);
        }
    }
    setItem(key, value) {
        if (lodash_1.isString(value)) {
            this.storage.setItem(key, value);
        }
        else {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }
    clear() {
        this.storage.clear();
    }
    removeItem(key) {
        this.storage.removeItem(key);
    }
}
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map