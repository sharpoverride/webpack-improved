import {Cursor} from 'immutable/contrib/cursor';

export interface IPropAccessor {
    (cursor: Cursor): any;
    Prop: string;
}
