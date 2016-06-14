import Context, {prop} from '../../context';
import * as access from '../context-accessors';

export default function toggleAllTodoItems() {
    const todoApp = access.todoApp(Context.cursor);

    todoApp.update(v => {
        const list = access.todoList(v);
        const allCompleted = list.every(item=>access.completed(item));

        const newAppState = v.set(prop(access.todoList),
            list.map(item => item.set(prop(access.completed), !allCompleted))
        );

        return newAppState;
    });

}