import * as React from 'react';

import HeaderSection from './header-section';
import MainSection from './main-section';
import FooterSection from './footer-section';

export default class TodoApp extends React.Component<any, any> {

    render() {

        var header = <HeaderSection />;
        var main = <MainSection />;
        var footer = <FooterSection />;

        return (<section
            className="todoapp"
        >
            {header}
            {main}
            {footer}
            </section>);
    }

}