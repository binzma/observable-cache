"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryStorage extends Storage {
    constructor() {
        super(...arguments);
        this.data = {};
    }
    clear() {
        this.data = {};
    }
    ;
    removeItem(key) {
        delete this.data[key];
    }
    ;
    getItem(key) {
        return this.data[key];
    }
    ;
    setItem(key, value) {
        this.data[key] = value;
    }
    ;
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=memory-storage.js.map