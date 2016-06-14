import Context, {prop} from '../../context';
import * as access from '../context-accessors';
import {fromJS} from 'immutable';

interface IAddTodoItem{
    text: string;
}
export default function addTodoItem(options:IAddTodoItem) {
    const todoApp = access.todoApp(Context.cursor);
    const {text} = options;

    todoApp.update(v => {
        const list = access.todoList(v);

        const newAppState = v.set(prop(access.todoInput), '')
            .set(prop(access.todoList), list.push(fromJS({
                text,
                completed: false
            })));

        return newAppState;
    });
}
