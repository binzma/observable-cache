import { WindowRefService } from '../utils/window-ref.service';
import { StorageService } from './storage.service';
export declare class LocalStorageService extends StorageService {
    constructor(windowRef: WindowRefService);
}
