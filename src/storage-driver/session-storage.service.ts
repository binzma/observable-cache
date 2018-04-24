import {Injectable} from '@angular/core';
import {WindowRefService} from '../utils/window-ref.service';
import {StorageService} from './storage.service';

@Injectable()
export class SessionStorageService extends StorageService {
    constructor(windowRef: WindowRefService) {
        super(windowRef.getNativeWindow().sessionStorage);
    }
}
