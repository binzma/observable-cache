import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from './storage-driver/local-storage.service';
import {StorageService} from './storage-driver/storage.service';
import {Subject} from 'rxjs/Subject';
import {isEmpty, isFunction} from 'lodash';
import 'rxjs/add/operator/do';

@Injectable()
export class ObservableCacheService {

  private storage: StorageService;

  constructor(private localStorageService: LocalStorageService) {
    this.storage = localStorageService;
  }

  /**
   * Instantly emits cache if available and emits again with the new data after performing the work.
   *
   * @param {string} storageKey
   * @param {Observable<any>} worker
   * @param {Function} callback
   * @returns {Observable<any>}
   */
  public cached(storageKey: string, worker: Observable<any>, callback?: Function): Observable<any> {
    const subject = new Subject<any>();

    // fetch cache
    const cache = this.storage.getItemAsObject(storageKey);

    // emit cache if valid
    if (!isEmpty(cache)) {
      setTimeout(() => subject.next(cache));
    }

    // update when work is done
    worker
      .do(res => this.storage.setItem(storageKey, res))
      .do(res => {
        // when we have a callback function, call it with the new data
        if(isFunction(callback)){
          callback(res);
        }
      })
      .do(res => {
        subject.next(res);
      });

    return subject.asObservable();
  }

}
