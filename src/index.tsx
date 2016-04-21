import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const Layout = (props) => {
    return (<div>{props.children}</div>);
};

const EntryPage = (props) => {
    return (<div>
        <h1>Hello, World</h1>
    </div>);
}

const mountNode = document.querySelector('#app');
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={EntryPage}/>
        </Route>
    </Router>, mountNode);