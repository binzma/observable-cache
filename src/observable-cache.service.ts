import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {isEmpty, isFunction} from 'lodash';
import 'rxjs/add/operator/do';
// import {ObservableCacheConfig} from './observable-cache.interfaces';
import {LocalStorage} from './storage-driver/local-storage';
import {differenceInSeconds, format, parse} from 'date-fns';
// import {SessionStorage} from './storage-driver/session-storage';
// import {MemoryStorage} from './storage-driver/memory-storage';

@Injectable()
export class ObservableCacheService {

    private storageService = new LocalStorage();

    // constructor(observableCacheConfig: ObservableCacheConfig) {
    //
    //   switch (observableCacheConfig.storageDriver) {
    //     case 'SessionStorage':
    //       this.storageService = new SessionStorage();
    //       break;
    //     case 'LocalStorage':
    //       this.storageService = new LocalStorage();
    //       break;
    //     default:
    //       this.storageService = new MemoryStorage();
    //       break;
    //   }
    // }

    /**
     * Instantly emits cache if available and emits again with the new data after performing the work.
     *
     * @param {string} storageKey
     * @param {Observable<any>} worker
     * @param {Function} callback
     * @returns {Observable<any>}
     */
    public asyncUpdate(storageKey: string, worker: Observable<any>, callback?: Function): Observable<any> {
        const subject = new Subject<any>();

        // fetch cache
        const cache = this.storageService.getItem(storageKey);

        // emit cache if valid
        if (!isEmpty(cache)) {
            setTimeout(() => subject.next(cache));
        }

        // update when work is done
        worker
            .do(res => this.storageService.setItem(storageKey, res))
            .do(res => {
                // when we have a callback function, call it with the new data
                if (isFunction(callback)) {
                    callback(res);
                }
            })
            .do(res => {
                subject.next(res);
            });

        return subject.asObservable();
    }

    /**
     * Instantly emits cache if available and queries the resource async if cache is older than afterSeconds.
     *
     * @param {string} storageKey
     * @param {Observable<any>} worker
     * @param {number} afterSeconds
     * @param {Function} callback
     * @returns {Observable<any>}
     */
    public asyncUpdateAfter(storageKey: string, worker: Observable<any>, afterSeconds: number, callback?: Function): Observable<any> {
        const subject = new Subject<any>();

        // fetch cache
        const cache = this.storageService.getItem(storageKey);

        // emit cache if valid
        if (!isEmpty(cache)) {
            setTimeout(() => subject.next(cache));
        }


        // only update if cache is older than afterSeconds
        const cacheDate = this.storageService.getItem(`${storageKey}-cache-date`);
        if (isEmpty(cacheDate) || differenceInSeconds(parse(cacheDate), new Date()) > afterSeconds) {

            // start update
            worker
                .do(res => {
                    // update cache
                    this.storageService.setItem(storageKey, res);

                    // update cache time
                    this.storageService.setItem(`${storageKey}-cache-date`, format(new Date()));

                    // when we have a callback function, call it with the new data
                    if (isFunction(callback)) {
                        callback(res);
                    }

                    // emit the new data
                    subject.next(res);
                });
        }

        return subject.asObservable();
    }

}
