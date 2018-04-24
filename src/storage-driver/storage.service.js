"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const lodash_1 = require("lodash");
let StorageService = class StorageService {
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
};
StorageService = __decorate([
    core_1.Injectable()
], StorageService);
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map