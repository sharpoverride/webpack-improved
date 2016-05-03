import * as React from 'react';
import Context from '../context';
import * as Rx from 'rxjs';
import {Cursor} from "immutable/contrib/cursor";

export default class CounterIncrease extends React.Component<any, any> {
    subscription: Rx.Subscription;
    count: number;
    appState: Cursor;

    componentWillMount() {
       this.subscription = Context.subscribe((appState: Cursor) => {
           this.count = appState.get('count');
           this.appState = appState;
       });
    }

    componentWillUnmount() {
       this.subscription.unsubscribe();
    }

    increase() {
        const {appState, count} = this;
        appState.set('count', count + 1);
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