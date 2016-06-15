/**
 * We call count an accessor function.
 * The purpose of this function is to allow us to quickly rename
 * a property on our context/cursor without affecting the entire app.
 *
 * If we used a constant string, we would need to search that string
 * everywhere.
 * With this approach you only need to look in a specific place.
 */
import {Cursor} from 'immutable/contrib/cursor';

const Prop = 'count';

function count(cursor: Cursor) {
    return cursor.get(Prop);
}

count.prototype.Prop = Prop;
export default count;
