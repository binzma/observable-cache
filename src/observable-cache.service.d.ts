import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AsyncUpdateConfig } from './observable-cache.interfaces';
export declare class ObservableCacheService {
    private storageService;
    /**
     * Instantly emits cache if available and emits again with the new data after performing the work.
     *
     * @param {Observable<any>} worker
     * @param {AsyncUpdateConfig} config
     * @returns {Observable<any>}
     */
    asyncUpdate(worker: Observable<any>, config: AsyncUpdateConfig): Observable<any>;
}
