import Context from '../../context';
import * as access from '../context-accessors';

export default function deleteListItem(item) {
    const todoApp = access.todoApp(Context.cursor);
    const todoList = access.todoList(todoApp);

    const itemIndex = todoList.indexOf(item);

    todoList.remove(itemIndex);
}