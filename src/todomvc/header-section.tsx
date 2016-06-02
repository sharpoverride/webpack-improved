import * as React from 'react';

export default (props) => {
    return (
        <header>
            <h1>todos</h1>
            <input
                className="new-todo"
                autofocus
                autocomplete="off"
                placeholder="What needs to be done?"
            />
        </header>
    );
}