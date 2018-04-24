import {Injectable} from '@angular/core';

function _window(): any {
    // return the global native browser window object
    return window;
}

@Injectable()
export class WindowRefService {
    getNativeWindow(): any {
        return _window();
    }
}
