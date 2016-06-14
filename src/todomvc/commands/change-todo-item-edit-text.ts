import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function changeTodoItemEditText(item, text) {
    item.set(
        prop(access.editText),
        text
    );
}