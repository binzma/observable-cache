import {NgModule} from '@angular/core';
import {CachingObservableService} from './caching-observable.service';
import {LocalStorageService} from './storage-driver/local-storage.service';
import {WindowRefService} from './utils/window-ref.service';
import {SessionStorageService} from './storage-driver/session-storage.service';


@NgModule({
  providers: [
    CachingObservableService,
    SessionStorageService,
    LocalStorageService,
    WindowRefService
  ]
})
export class CachingObservableModule {
}
