import * as React from 'react';
import CounterDisplay from './counter-display';
import CounterIncrease from './counter-increase';

/**
 * Entry page is a functional react component.
 * 
 * We don't need to keep state, or bind to the lifecycle
 * of the application so it's the simples code we can write.
 * 
 * @returns {any}
 * @constructor
 */

const EntryPage = () => {
    return (<div>
        <h1>Hello, World</h1>
        <CounterDisplay />
        <CounterIncrease/>
    </div>);
}

export default EntryPage;