"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class LocalStorage {
    constructor() {
        this.storage = window.localStorage;
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
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=local-storage.js.map