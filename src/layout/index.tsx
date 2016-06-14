import * as React from 'react';
import {Link} from 'react-router';

export default (props) => {
    return (<div>
        <section>
            <h1>Links</h1>
            <ul>
                <li>
                    <Link to="/">Sample Counter</Link>
                </li>
                <li>
                    <Link to="/todos/">Todos</Link>
                </li>
            </ul>
        </section>
        {props.children}
    </div>);
};