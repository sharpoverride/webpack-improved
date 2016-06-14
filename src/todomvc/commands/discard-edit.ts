import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function discardTodoItem(item) {
    item.update(v => {
        const newValue = v.set(prop(access.editing), false)
            .set(prop(access.editText), access.text(item));
        
        return newValue;
    });
}
