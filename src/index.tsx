import * as Rx from 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Layout, EntryPage} from './sample';

const mountNode = document.querySelector('#app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={EntryPage}/>
        </Route>
    </Router>, mountNode);