import * as React from 'react';
import CounterDisplay from './counter-display';
import CounterIncrease from './counter-increase';

const EntryPage = (props) => {
    return (<div>
        <h1>Hello, World</h1>
        <CounterDisplay />
        <CounterIncrease/>
    </div>);
}

export default EntryPage;