import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {
    Layout,
    EntryPage,
    IntroductionPage,
    LayoutPage,
    FormPage
} from './sample';

const mountNode = document.querySelector('#app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={EntryPage}/>
            <Route path="/introduction" component={IntroductionPage}/>
            <Route path="/layout" component={LayoutPage}/>
            <Route path="/form" component={FormPage}/>
        </Route>
    </Router>, mountNode);