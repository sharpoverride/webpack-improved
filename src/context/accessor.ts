import {Cursor} from 'immutable/contrib/cursor';

export interface IContextAccessor {
    (cursor: Cursor): any;
    Prop: string;
}
