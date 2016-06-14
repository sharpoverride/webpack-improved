import Context, {prop} from '../../context';
import * as access from '../context-accessors';
import {fromJS} from 'immutable';

interface ITodoText{
    text: string;
}
export default function typeTodoText(options: ITodoText) {

    const todoApp = access.todoApp(Context.cursor);
    const {text} = options;
    
    todoApp.set(prop(access.todoInput), text);
}