import * as React from 'react';

import * as accessor from './context-accessors';
import {Cursor} from "immutable/contrib/cursor";
import {addTodoItem, typeTodoText} from './commands'

const EnterKeyCode = 13;

interface IHeaderProps {
    todoApp: Cursor
}

export default class HeaderSection extends React.Component<IHeaderProps, any> {
    static displayName = 'HeaderSection';

    constructor() {
        super();
    }

    onEnterKeyPressed(keyEvent:KeyboardEvent) {
        const todoApp = this.props.todoApp;

        if (keyEvent.keyCode !== EnterKeyCode) {
            return;
        }

        const todoText = this.refs['todoText'] as HTMLInputElement;
        addTodoItem({
            text: todoText.value
        });
    }

    onTextInputUpdate(event) {
        typeTodoText({
            text:event.target.value});
    }

    render() {
        const {refs, props} = this;
        const todoApp = props.todoApp;

        const todoInput = accessor.todoInput(todoApp);

        return (
            <header>
                <h1>todos</h1>
                <input
                    ref="todoText"
                    className="new-todo"
                    value={todoInput}
                    autofocus
                    autocomplete="off"
                    placeholder="What needs to be done?"
                    onKeyUp={this.onEnterKeyPressed.bind(this)}
                    onChange={this.onTextInputUpdate.bind(this)}
                />
            </header>
        );
    }
}