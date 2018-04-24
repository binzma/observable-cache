"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Subject_1 = require("rxjs/Subject");
const lodash_1 = require("lodash");
require("rxjs/add/operator/do");
// import {ObservableCacheConfig} from './observable-cache.interfaces';
const local_storage_1 = require("./storage-driver/local-storage");
// import {SessionStorage} from './storage-driver/session-storage';
// import {MemoryStorage} from './storage-driver/memory-storage';
let ObservableCacheService = class ObservableCacheService {
    // import {SessionStorage} from './storage-driver/session-storage';
    // import {MemoryStorage} from './storage-driver/memory-storage';
    constructor() {
        this.storageService = new local_storage_1.LocalStorage();
    }
    // constructor(observableCacheConfig: ObservableCacheConfig) {
    //
    //   switch (observableCacheConfig.storageDriver) {
    //     case 'SessionStorage':
    //       this.storageService = new SessionStorage();
    //       break;
    //     case 'LocalStorage':
    //       this.storageService = new LocalStorage();
    //       break;
    //     default:
    //       this.storageService = new MemoryStorage();
    //       break;
    //   }
    // }
    /**
     * Instantly emits cache if available and emits again with the new data after performing the work.
     *
     * @param {string} storageKey
     * @param {Observable<any>} worker
     * @param {Function} callback
     * @returns {Observable<any>}
     */
    cached(storageKey, worker, callback) {
        const subject = new Subject_1.Subject();
        // fetch cache
        const cache = this.storageService.getItem(storageKey);
        // emit cache if valid
        if (!lodash_1.isEmpty(cache)) {
            setTimeout(() => subject.next(cache));
        }
        // update when work is done
        worker
            .do(res => this.storageService.setItem(storageKey, res))
            .do(res => {
            // when we have a callback function, call it with the new data
            if (lodash_1.isFunction(callback)) {
                callback(res);
            }
        })
            .do(res => {
            subject.next(res);
        });
        return subject.asObservable();
    }
};
ObservableCacheService = __decorate([
    core_1.Injectable()
], ObservableCacheService);
exports.ObservableCacheService = ObservableCacheService;
//# sourceMappingURL=observable-cache.service.js.map