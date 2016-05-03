import * as React from 'react';
import * as Rx from 'rxjs';

import Context from '../context';

interface CounterDisplayState  {
    count?: number;
}

export default class CounterDisplay extends React.Component<any, CounterDisplayState> {
    subscription: Rx.Subscription;

    componentWillMount() {
        console.log('will mount');
        this.subscription = Context.subscribe((appStateCursor) => {
            this.setState({
                count: appStateCursor.get('count')
            });
        });
    }

    componentWillUnmount() {
        console.log('will unmount');
        this.subscription.unsubscribe();
    }

    render() {
        const {state} = this;

        return (
            <p>Counter is at {state.count}</p>
        );
    }
}

