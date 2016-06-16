import * as React from 'react';
import {incrementCount} from './commands';

/**
 * CounterIncrease is a React component
 *
 * The components that manage their own state we call MainComponents.
 *
 * Any other component that a MainComponent calls should be stateless to ensure
 * that you can track bugs easily
 */
export default class CounterIncrease extends React.Component<any, any> {

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