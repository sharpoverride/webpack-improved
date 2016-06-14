import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function clearCompletedTodos() {
    const todoApp = access.todoApp(Context.cursor);

    todoApp.update(v => {
        const list = access.todoList(v);

        const newAppState = v.set(prop(access.todoList),
            list.filter(item => !access.completed(item))
        );

        return newAppState;
    });
}
