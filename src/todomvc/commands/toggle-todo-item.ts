import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function toggleTodoItem(item) {
    item.set(
        prop(access.completed),
        !access.completed(item)
    );
}