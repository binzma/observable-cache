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
let ObservableCacheService = class ObservableCacheService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.storage = localStorageService;
    }
    /**
     * Use this to set a non-default storage service.
     *
     * TODO put this in config
     *
     * @param {StorageService} storageService
     */
    setStorageService(storageService) {
        this.storage = storageService;
    }
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
        const cache = this.storage.getItemAsObject(storageKey);
        // emit cache if valid
        if (!lodash_1.isEmpty(cache)) {
            setTimeout(() => subject.next(cache));
        }
        // update when work is done
        worker
            .do(res => this.storage.setItem(storageKey, res))
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