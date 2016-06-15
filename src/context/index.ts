import * as Rx from 'rxjs';
import {PartialObserver} from 'rxjs/Observer'
import {Cursor, from as buildCursorFrom} from 'immutable/contrib/cursor';
import {fromJS} from 'immutable';

const emptyAppState = {
};

/**
 * The Context holds the entire state for an application.
 */
export default new class Context {
    cursor: Cursor;
    subject: Rx.Subject<Cursor>;
    onStateUpdateBind: (data:any)=>void;

    constructor() {
        this.onStateUpdateBind = this.onStateUpdate.bind(this);
        this.cursor = buildCursorFrom(fromJS(emptyAppState), this.onStateUpdateBind);
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

/**
 * This is a convenience method to access the Prop that an accessor uses
 * @param accessor
 * @returns {any|string}
 */
export function prop(accessor) {
    return accessor.prototype.Prop;
}