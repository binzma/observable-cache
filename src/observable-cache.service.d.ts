import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
export declare class ObservableCacheService {
    private storageService;
    /**
     * Instantly emits cache if available and emits again with the new data after performing the work.
     *
     * @param {string} storageKey
     * @param {Observable<any>} worker
     * @param {Function} callback
     * @returns {Observable<any>}
     */
    cached(storageKey: string, worker: Observable<any>, callback?: Function): Observable<any>;
}
