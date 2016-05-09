import * as Rx from 'rxjs';
import {PartialObserver} from 'rxjs/Observer'
import {Cursor, from as buildCursorFrom} from 'immutable/contrib/cursor';
import {fromJS} from 'immutable';

const mockAppState = {
    count: 0,
    pages: {
        'validation': {
        }
    }
}

export default new class Context {
    cursor: Cursor;
    subject: Rx.Subject<Cursor>;
    onStateUpdateBind: (data:any)=>void;

    constructor() {
        this.onStateUpdateBind = this.onStateUpdate.bind(this);
        this.cursor = buildCursorFrom(fromJS(mockAppState), this.onStateUpdateBind);
        this.subject = new Rx.BehaviorSubject(this.cursor);
    }

    onStateUpdate(data) {
        this.cursor = buildCursorFrom(data, this.onStateUpdateBind);
        this.subject.next(this.cursor);
    }
    
    subscribe(observerOrNext?: PartialObserver<any> | ((value: any) => void),
              error?: (error: any) => void,
              complete?: () => void): Rx.Subscription {
        
        return this.subject.subscribe(observerOrNext, error, complete);
    }
}