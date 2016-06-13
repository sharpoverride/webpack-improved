import * as React from 'react';
import * as access from './context-accessors';
import {deleteListItem} from './commands';
import * as classnames from 'classnames';

export default (props) => {
    const {item} = props;
    const text = access.text(item);

    return (<li
        className="todo">
        <div
            className="view">
            <input
                className="toggle"
                type="checkbox"
                value={text}
            />
            <label>{text}</label>
            <button className="destroy" onClick={()=>{
                deleteListItem(item);
            }}/>

        </div>
        <input
            type="text"
            className="edit"
            defaultValue={text}
            />
    </li>);
}
