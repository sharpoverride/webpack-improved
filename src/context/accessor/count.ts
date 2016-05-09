import {Cursor} from 'immutable/contrib/cursor';
import {IPropAccessor} from './prop-accessor';

const Prop = 'count';
function count(cursor: Cursor) {
    return cursor.get(Prop);
}

count.prototype.Prop = Prop;

export default <IPropAccessor>count;