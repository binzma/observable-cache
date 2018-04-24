"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class SessionStorage {
    constructor() {
        this.storage = window.sessionStorage;
    }
    getItem(key, defaultValue) {
        const item = this.storage.getItem(key);
        if (lodash_1.isNull(item) || lodash_1.isUndefined(item)) {
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
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=session-storage.js.map