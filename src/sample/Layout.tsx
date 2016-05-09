import * as React from 'react';
import TopNavigation from './TopNavigation';

const Layout = (props) => {
    console.log(`Layout `, props.location.pathname);
    return (<div>
        <TopNavigation activePage={props.location.pathname}/>
        {props.children}
    </div>);
};

export default Layout;
