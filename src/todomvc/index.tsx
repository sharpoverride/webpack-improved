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
    filter: 'all'
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

    render() {
        const {todoApp} = this.state;

        const todoList = accessor.todoList(todoApp);
        const filter = accessor.filter(todoApp);

        const onlyRenderWhenItemsExist = (component) => (todoList.size === 0) ? null : component;

        var header = <HeaderSection todoApp={todoApp} />;
        var main = onlyRenderWhenItemsExist(<MainSection todoList={todoList} />);
        var footer = onlyRenderWhenItemsExist(<FooterSection filter={filter} />);

        return (<section
            className="todoapp"
        >
            {header}
            {main}
            {footer}
        </section>);
    }

}