import {Cursor} from 'immutable/contrib/cursor';

export default function count(cursor: Cursor) {
    return cursor.get('count');
}