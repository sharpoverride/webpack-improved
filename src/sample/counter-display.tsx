import * as React from 'react';
import * as Rx from 'rxjs';

import Context from '../context';
import {count} from '../context/accessor';

interface CounterDisplayState  {
    count?: number;
}

export default class CounterDisplay extends React.Component<any, CounterDisplayState> {
    subscription: Rx.Subscription;

    componentWillMount() {
        this.subscription = Context.subscribe((appStateCursor) => {
            this.setState({
                count: count(appStateCursor)
            });
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const {state} = this;

        return (
            <p>Counter is at {state.count}</p>
        );
    }
}

