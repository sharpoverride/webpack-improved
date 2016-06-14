import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function editTodoItem(item, value: boolean) {
    item.set(prop(access.editing), value);
}