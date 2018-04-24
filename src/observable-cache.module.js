"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const local_storage_service_1 = require("./storage-driver/local-storage.service");
const window_ref_service_1 = require("./utils/window-ref.service");
const session_storage_service_1 = require("./storage-driver/session-storage.service");
const observable_cache_service_1 = require("./observable-cache.service");
const storage_service_1 = require("./storage-driver/storage.service");
const default_storage_service_1 = require("./storage-driver/default-storage.service");
let storageFactory = (observableCacheConfig, windowRef) => {
    return observableCacheConfig.storageDriver === 'SessionStorage' ?
        new session_storage_service_1.SessionStorageService(windowRef) : new local_storage_service_1.LocalStorageService(windowRef);
};
let ObservableCacheModule = ObservableCacheModule_1 = class ObservableCacheModule {
    static forRoot(config) {
        return {
            ngModule: ObservableCacheModule_1,
            providers: [
                { provide: 'observableCacheConfig', useValue: config },
                storage_service_1.StorageService,
                { provide: default_storage_service_1.DefaultStorageService, useFactory: storageFactory, deps: ['observableCacheConfig', window_ref_service_1.WindowRefService] },
                observable_cache_service_1.ObservableCacheService,
                session_storage_service_1.SessionStorageService,
                local_storage_service_1.LocalStorageService,
                window_ref_service_1.WindowRefService
            ]
        };
    }
};
ObservableCacheModule = ObservableCacheModule_1 = __decorate([
    core_1.NgModule({})
], ObservableCacheModule);
exports.ObservableCacheModule = ObservableCacheModule;
var ObservableCacheModule_1;
//# sourceMappingURL=observable-cache.module.js.map