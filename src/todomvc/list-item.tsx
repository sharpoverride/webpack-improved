import * as React from 'react';

export default (props) => (<li
    className="todo">
    <div className="view">
        <input
            className="toggle"
            type="checkbox"
        />
        <label>{props.text}</label>
        <button className="destroy"/>

    </div>
</li>);
