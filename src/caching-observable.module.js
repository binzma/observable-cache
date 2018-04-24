"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const caching_observable_service_1 = require("./caching-observable.service");
const local_storage_service_1 = require("./storage-driver/local-storage.service");
const window_ref_service_1 = require("./utils/window-ref.service");
const session_storage_service_1 = require("./storage-driver/session-storage.service");
let CachingObservableModule = class CachingObservableModule {
};
CachingObservableModule = __decorate([
    core_1.NgModule({
        providers: [
            caching_observable_service_1.CachingObservableService,
            session_storage_service_1.SessionStorageService,
            local_storage_service_1.LocalStorageService,
            window_ref_service_1.WindowRefService
        ]
    })
], CachingObservableModule);
exports.CachingObservableModule = CachingObservableModule;
//# sourceMappingURL=caching-observable.module.js.map