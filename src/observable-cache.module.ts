import {ModuleWithProviders, NgModule} from '@angular/core';
import {LocalStorageService} from './storage-driver/local-storage.service';
import {WindowRefService} from './utils/window-ref.service';
import {SessionStorageService} from './storage-driver/session-storage.service';
import {ObservableCacheService} from './observable-cache.service';
import {ObservableCacheConfig} from './observable-cache.interfaces';
import {StorageService} from './storage-driver/storage.service';
import {DefaultStorageService} from './storage-driver/default-storage.service';


let storageFactory = (observableCacheConfig: ObservableCacheConfig,
                      windowRef: WindowRefService) => {
    return observableCacheConfig.storageDriver === 'SessionStorage' ?
        new SessionStorageService(windowRef): new LocalStorageService(windowRef);
};


@NgModule({})
export class ObservableCacheModule {
    static forRoot(config: ObservableCacheConfig): ModuleWithProviders {

        return {
            ngModule: ObservableCacheModule,
            providers: [
                {provide: 'observableCacheConfig', useValue: config},
                StorageService,
                {provide: DefaultStorageService, useFactory: storageFactory, deps: ['observableCacheConfig', WindowRefService]},
                ObservableCacheService,
                SessionStorageService,
                LocalStorageService,
                WindowRefService
            ]
        };

    }
}
