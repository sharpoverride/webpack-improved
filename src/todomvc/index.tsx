import * as React from 'react';
import * as Rx from 'rxjs'
import {fromJS} from 'immutable';

import HeaderSection from './header-section';
import MainSection from './main-section';
import FooterSection from './footer-section';

import Context from '../context';

import * as accessor from './context-accessors';

Context.cursor.set('todoApp', fromJS({
    todoList: [],
    todoInput: '',
    filter: 'all',
    allChecked: false
}));

export default class TodoApp extends React.Component<any, any> {

    subscription: Rx.Subscription;
    componentWillMount() {
        this.subscription = Context.subscribe((appStateCursor) => {
            this.setState({
                todoApp: accessor.todoApp(appStateCursor)
            });
        });
    }
    
    componetWillUnmount() {
        this.subscription.unsubscribe();
    }

    hashFilter() {
        const a = window.location.hash;
        if (a.length === 0) {
            return null;
        }

        return a.substring(2);
    }

    render() {
        const {todoApp} = this.state;

        const todoList = accessor.todoList(todoApp);
        const filter = this.hashFilter() || accessor.filter(todoApp);

        const onlyRenderWhenItemsExist = (component) => (todoList.size === 0) ? null : component;

        var header = <HeaderSection todoApp={todoApp} />;
        var main = onlyRenderWhenItemsExist(<MainSection todoList={todoList} filter={filter} />);
        var footer = onlyRenderWhenItemsExist(<FooterSection filter={filter} todoList={todoList} />);

        return (<section
            className="todoapp"
        >
            {header}
            {main}
            {footer}
        </section>);
    }

}