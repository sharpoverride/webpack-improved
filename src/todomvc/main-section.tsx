import * as React from 'react';

import ListItem from './list-item';
import * as access from './context-accessors';

export default (props) => {

    const {todoList} = props;

    const listItems = todoList.map((item, index) =>
        <ListItem
            key={`todo-item-${index}`}
            item={item}/>
    );

    return (<section
    className="main">
        <input
            className="toggle-all"
            type="checkbox"
            />
        <ul
            className="todo-list">
            {listItems}

        </ul>
    </section>);
}