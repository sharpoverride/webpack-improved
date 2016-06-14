import * as React from 'react';
import * as access from './context-accessors';
import {checkAllTodoItems} from './commands';

import ListItem from './todo-item';

export default (props) => {

    const {todoList, filter} = props;

    const isActive = (item) => !access.completed(item);
    const isCompleted = (item) => access.completed(item);
    const all = (_) => true;

    let filterBy = all;
    switch(filter) {
        case "active":
            filterBy = isActive;
            break;
        case "completed":
            filterBy = isCompleted;
            break;
        default:
            filterBy = all;
            break;
    }

    const listItems = todoList.filter(filterBy).map((item, index) =>
        <ListItem
            key={`todo-item-${index}`}
            item={item}/>
    );

    const allItemsChecked = todoList.size === todoList.filter(isCompleted).toList().size;

    const pressCheckAllItems = () => checkAllTodoItems();

    return (<section
        className="main">
        <input
            className="toggle-all"
            type="checkbox"
            checked={allItemsChecked}
            onChange={pressCheckAllItems}
        />
        <ul
            className="todo-list">
            {listItems}

        </ul>
    </section>);
}