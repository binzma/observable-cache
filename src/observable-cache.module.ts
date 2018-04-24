import {ModuleWithProviders, NgModule} from '@angular/core';
import {LocalStorageService} from './storage-driver/local-storage.service';
import {WindowRefService} from './utils/window-ref.service';
import {SessionStorageService} from './storage-driver/session-storage.service';
import {ObservableCacheService} from './observable-cache.service';
import {ObservableCacheConfig} from './observable-cache.interfaces';


let storageFactory = (observableCacheConfig: ObservableCacheConfig,
                      windowRef: WindowRefService) => {
    return observableCacheConfig.storageDriver === 'LocalStorage' ?
        new LocalStorageService(windowRef) : new SessionStorageService(windowRef);
};


@NgModule({})
export class ObservableCacheModule {
    static forRoot(config: ObservableCacheConfig): ModuleWithProviders {

        return {
            ngModule: ObservableCacheModule,
            providers: [
                {provide: 'observableCacheConfig', useValue: config},
                {provide: 'DefaultStorageService', useFactory: storageFactory, deps: ['observableCacheConfig', WindowRefService]},
                ObservableCacheService,
                SessionStorageService,
                LocalStorageService,
                WindowRefService
            ]
        };

    }
}
