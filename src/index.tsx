import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import CounterSample from './sample';
import Layout from './layout';
import TodoApp from './todomvc';

const mountNode = document.querySelector('#app');
/**
 * We mount the Router component and based
 * on the path it automatically renders the components.
 */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={CounterSample}/>
            <Route path="todos" component={TodoApp}/>
        </Route>
    </Router>, mountNode);