import * as React from 'react';
import Context, {prop} from '../context';
import * as Rx from 'rxjs';
import {Cursor} from "immutable/contrib/cursor";
import * as access from './context-accessors';
import {incrementCount} from './commands';

/**
 * CounterIncrease is a React component
 *
 * Before rendering we subscribe to the latest application state
 * and access the count property.
 *
 * When the state changes, the component is re-rendered.
 *
 * The components that manage their own state we call MainComponents.
 *
 * Any other component that a MainComponent calls should be stateless to ensure
 * that you can track bugs easily
 */
export default class CounterIncrease extends React.Component<any, any> {
    subscription: Rx.Subscription;
    count: number;
    appState: Cursor;

    componentWillMount() {
       this.subscription = Context.subscribe((appState: Cursor) => {
           this.count = access.count(appState);
           this.appState = appState;
       });
    }

    componentWillUnmount() {
       this.subscription.unsubscribe();
    }

    /**
     * Components should only invoke commands, they should not execute
     * actions directly on the context other than subscribe.
     * This will make the development process easier. 
     */
    increase() {
        incrementCount();
    }

    render() {
        return (<button
                onClick={this.increase.bind(this)}
        >
        Increase
        </button>
    );
    }
}