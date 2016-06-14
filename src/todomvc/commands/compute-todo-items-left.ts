import Context from '../../context';
import * as access from '../context-accessors';

export default function computeTodoItemsLeft(todoList) {
    const list = todoList.filter(item => !access.completed(item)).toList();
    
    return list.size;
}
