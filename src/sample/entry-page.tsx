import * as React from 'react';
import CounterDisplay from './counter-display';
import CounterIncrease from './counter-increase';

import Grid from './grid';


const EntryPage = (props) => {
    return (<div>
        <h1>Hello, World</h1>
        <CounterDisplay />
        <CounterIncrease/>

        <hr/>
        <Grid/>
    </div>);
}

export default EntryPage;