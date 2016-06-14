import * as React from 'react';
import {clearCompletedTodos, computeTodoItemsLeft} from './commands';
import {Cursor} from 'immutable/contrib/cursor';
import * as classnames from 'classnames';


interface IFooterProps {
    todoList: Cursor;
    filter: string;
}

export default (props) => {
    const {todoList, filter} = props;
    const pressClearCompleted = () => clearCompletedTodos();
    
    const todoItemsSize = computeTodoItemsLeft(todoList);
    const todoCount = <strong>{todoItemsSize}</strong>;
    const todoLabel = (todoItemsSize === 1) ? "item left" : "items left";

    const showClearCompleted = todoItemsSize !== todoList.size;
    const clearCompleted = showClearCompleted?
        <button
            className="clear-completed"
            onClick={pressClearCompleted}
        >Clear completed</button> : null;

    return (<section
        className="footer">
        <span className="todo-count">
            {todoCount} {todoLabel}
        </span>
        <ul className="filters">
            <li>
                <a
                    className={classnames({
                    'selected': (filter === 'all')
                    })}
                    href="#/all">All</a>
            </li>
            <li>
                <a
                    className={classnames({
                    'selected': (filter === 'active')
                    })}
                    href="#/active">Active</a>
            </li>
            <li>
                <a
                    className={classnames({
                    'selected': (filter === 'completed')
                    })}
                    href="#/completed">Completed</a>
            </li>
        </ul>
        {clearCompleted}
    </section>);
}
