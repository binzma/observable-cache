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
const date_fns_1 = require("date-fns");
// import {SessionStorage} from './storage-driver/session-storage';
// import {MemoryStorage} from './storage-driver/memory-storage';
let ObservableCacheService = class ObservableCacheService {
    // import {SessionStorage} from './storage-driver/session-storage';
    // import {MemoryStorage} from './storage-driver/memory-storage';
    constructor() {
        this.storageService = new local_storage_1.LocalStorage();
        // /**
        //  * Instantly emits cache if available and queries the resource async if cache is older than afterSeconds.
        //  *
        //  * @param {string} storageKey
        //  * @param {Observable<any>} worker
        //  * @param {number} afterSeconds
        //  * @param {Function} afterUpdate
        //  * @returns {Observable<any>}
        //  */
        // public asyncUpdateAfter(storageKey: string, worker: Observable<any>, afterSeconds: number, beforeUpdate?: Function, afterUpdate?: Function): Observable<any> {
        //     const subject = new Subject<any>();
        //
        //     // fetch cache
        //     const cache = this.storageService.getItem(storageKey);
        //
        //     // emit cache if valid
        //     if (!isEmpty(cache)) {
        //         setTimeout(() => subject.next(cache));
        //     }
        //
        //
        //     // only update if cache is older than afterSeconds
        //     const cacheDate = this.storageService.getItem(`${storageKey}-cache-date`);
        //     if (isEmpty(cacheDate) || differenceInSeconds(parse(cacheDate), new Date()) > afterSeconds) {
        //
        //         // when we have a beforeUpdate function, call it now
        //         if (isFunction(beforeUpdate)) {
        //             beforeUpdate();
        //         }
        //
        //         // start update
        //         worker
        //             .do(res => {
        //                 // update cache
        //                 this.storageService.setItem(storageKey, res);
        //
        //                 // update cache time
        //                 this.storageService.setItem(`${storageKey}-cache-date`, format(new Date()));
        //
        //                 // when we have a afterUpdate function, call it with the new data
        //                 if (isFunction(afterUpdate)) {
        //                     afterUpdate(res);
        //                 }
        //
        //                 // emit the new data
        //                 subject.next(res);
        //             });
        //     }
        //
        //     return subject.asObservable();
        // }
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
     * @param {Observable<any>} worker
     * @param {AsyncUpdateConfig} config
     * @returns {Observable<any>}
     */
    asyncUpdate(worker, config) {
        const subject = new Subject_1.Subject();
        // fetch cache
        const cache = this.storageService.getItem(config.storageKey);
        // emit cache if valid
        if (!lodash_1.isEmpty(cache)) {
            setTimeout(() => subject.next(cache));
        }
        // only update if cache is older than afterSeconds
        const cacheDate = this.storageService.getItem(`${config.storageKey}-cache-date`);
        if (lodash_1.isUndefined(config.afterSeconds) || lodash_1.isEmpty(cacheDate) || date_fns_1.differenceInSeconds(date_fns_1.parse(cacheDate), new Date()) > config.afterSeconds) {
            // when we have a beforeUpdate function, call it now
            if (lodash_1.isFunction(config.beforeUpdate)) {
                config.beforeUpdate();
            }
            // start update
            worker
                .do(res => {
                // update cache
                this.storageService.setItem(config.storageKey, res);
                // update cache time
                this.storageService.setItem(`${config.storageKey}-cache-date`, date_fns_1.format(new Date()));
                // when we have a afterUpdate function, call it with the new data
                if (lodash_1.isFunction(config.afterUpdate)) {
                    config.afterUpdate(res);
                }
                // emit the new data
                subject.next(res);
            });
        }
        return subject.asObservable();
    }
};
ObservableCacheService = __decorate([
    core_1.Injectable()
], ObservableCacheService);
exports.ObservableCacheService = ObservableCacheService;
//# sourceMappingURL=observable-cache.service.js.map