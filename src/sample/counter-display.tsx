import * as React from 'react';
import * as Rx from 'rxjs';

import Context from '../context';
import * as access from './context-accessors';

interface CounterDisplayState  {
    count?: number;
}

/**
 * CounterDisplay is a react component.
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
export default class CounterDisplay extends React.Component<any, CounterDisplayState> {
    subscription: Rx.Subscription;

    componentWillMount() {
        this.subscription = Context.subscribe((appStateCursor) => {
            this.setState({
                count: access.count(appStateCursor)
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

