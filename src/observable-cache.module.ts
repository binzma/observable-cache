import {NgModule} from '@angular/core';
import {LocalStorageService} from './storage-driver/local-storage.service';
import {WindowRefService} from './utils/window-ref.service';
import {SessionStorageService} from './storage-driver/session-storage.service';
import {ObservableCacheService} from './observable-cache.service';


@NgModule({
  providers: [
    ObservableCacheService,
    SessionStorageService,
    LocalStorageService,
    WindowRefService
  ]
})
export class ObservableCacheModule {
}
