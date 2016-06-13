import * as React from 'react';

import Context, {prop} from '../context';
import {fromJS} from 'immutable';

import * as accessor from './context-accessors';
import {Cursor} from "immutable/contrib/cursor";

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

        todoApp.update(v => {
            const list = accessor.todoList(v);
            const todoText = this.refs['todoText'] as HTMLInputElement;

            const newAppState = v.set(prop(accessor.todoInput), '')
                .set(prop(accessor.todoList), list.push(fromJS({
                    text: todoText.value,
                    completed: false
                })));

            return newAppState;
        });
    }

    onTextInputUpdate(event) {
        const {todoApp} = this.props;

        todoApp.set(prop(accessor.todoInput), event.target.value);
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