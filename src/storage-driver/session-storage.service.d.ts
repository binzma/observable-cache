import { WindowRefService } from '../utils/window-ref.service';
import { StorageService } from './storage.service';
export declare class SessionStorageService extends StorageService {
    constructor(windowRef: WindowRefService);
}
