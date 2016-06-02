import * as React from 'react';

import ListItem from './list-item';

export default (props) => {


    return (<section
    className="main">
        <input
            className="toggle-all"
            type="checkbox"
            />
        <ul
            className="todo-list">
           <ListItem text="Say Hello!"/>

        </ul>
    </section>);
}