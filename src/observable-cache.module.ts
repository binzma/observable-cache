import {ModuleWithProviders, NgModule} from '@angular/core';
import {WindowRefService} from './utils/window-ref.service';
import {ObservableCacheService} from './observable-cache.service';
import {ObservableCacheConfig} from './observable-cache.interfaces';


@NgModule({})
export class ObservableCacheModule {
    static forRoot(config: ObservableCacheConfig): ModuleWithProviders {
        return {
            ngModule: ObservableCacheModule,
            providers: [
                {provide: ObservableCacheConfig, useValue: config},
                WindowRefService,
                ObservableCacheService
            ]
        };
    }
}
