import * as React from 'react';
import * as access from './context-accessors';
import {timer} from 'rxjs/observable/timer';

import {
    deleteTodoItem,
    toggleTodoItem,
    editTodoItem,
    changeTodoItemEditText,
    commitEdit,
    discardEdit} from './commands';

import * as classnames from 'classnames';

const EnterKeyCode = 13;
const EscapeKeyCode = 27;

export default class TodoItem extends React.Component<any, any> {
    render() {
        const {props, refs} = this;

        const {item} = props;
        const text = access.text(item);
        const completed = access.completed(item);
        const editing = access.editing(item);
        const editText = access.editText(item) || text;

        const completedChanged = () => toggleTodoItem(item);
        const doubleClicked = () => {
            editTodoItem(item, true);

            timer(200).subscribe(() => {
                const {editText} = refs;
                if (!editText) {
                    return;
                }
                (editText as HTMLInputElement).select();
            });

        }
        const movedOut = () => editTodoItem(item, false);
        const commitChangesOnEnter = (ev) => {
            if (ev.keyCode === EnterKeyCode) {
                commitEdit(item);
                return;
            }

            if (ev.keyCode === EscapeKeyCode) {
                discardEdit(item);
                return;
            }
        };
        const changeEditText = (ev) => {
            const newText = ev.target.value;
            changeTodoItemEditText(item, newText);
        };

        const classes = classnames('todo', {
            'completed': completed,
            'editing': editing
        });

        return (<li
            className={classes}>
            <div
                className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={completedChanged}
                />
                <label
                    onDoubleClick={doubleClicked}
                >{text}</label>
                <button className="destroy" onClick={()=>{
                deleteTodoItem(item);
            }}/>

            </div>
            <input
                ref="editText"
                type="text"
                className="edit"
                value={editText}
                onBlur={movedOut}
                onChange={changeEditText}
                onKeyUp={commitChangesOnEnter}
            />
        </li>);
    }
}