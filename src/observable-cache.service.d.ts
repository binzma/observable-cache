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
    asyncUpdate(storageKey: string, worker: Observable<any>, callback?: Function): Observable<any>;
    /**
     * Instantly emits cache if available and queries the resource async if cache is older than afterSeconds.
     *
     * @param {string} storageKey
     * @param {Observable<any>} worker
     * @param {number} afterSeconds
     * @param {Function} callback
     * @returns {Observable<any>}
     */
    asyncUpdateAfter(storageKey: string, worker: Observable<any>, afterSeconds: number, callback?: Function): Observable<any>;
}
