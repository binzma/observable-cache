"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var observable_cache_module_1 = require("./src/observable-cache.module");
exports.ObservableCacheModule = observable_cache_module_1.ObservableCacheModule;
var memory_storage_1 = require("./src/storage-driver/memory-storage");
exports.MemoryStorage = memory_storage_1.MemoryStorage;
var session_storage_1 = require("./src/storage-driver/session-storage");
exports.SessionStorage = session_storage_1.SessionStorage;
var local_storage_1 = require("./src/storage-driver/local-storage");
exports.LocalStorage = local_storage_1.LocalStorage;
__export(require("./src/observable-cache.interfaces"));
var observable_cache_service_1 = require("./src/observable-cache.service");
exports.ObservableCacheService = observable_cache_service_1.ObservableCacheService;
//# sourceMappingURL=index.js.map