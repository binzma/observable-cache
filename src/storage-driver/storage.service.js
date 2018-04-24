"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const memory_storage_1 = require("./memory-storage");
class StorageService {
    constructor(observableCacheConfig, windowRef) {
        switch (observableCacheConfig.storageDriver) {
            case 'SessionStorage':
                this.storage = windowRef.getNativeWindow().sessionStorage;
                break;
            case 'LocalStorage':
                this.storage = windowRef.getNativeWindow().localStorage;
                break;
            default:
                this.storage = new memory_storage_1.MemoryStorage();
                break;
        }
    }
    getItem(key, defaultValue) {
        const item = this.storage.getItem(key);
        if (lodash_1.isNull(item) || lodash_1.isUndefined(item)) {
            return defaultValue ? defaultValue : {};
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