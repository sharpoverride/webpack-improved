import * as React from 'react';
import {Link} from 'react-router';
import * as classnames from 'classnames';

import {
    Navbar,
    Nav
} from 'react-bootstrap';

const NAV_LINKS = {
    'introduction': {
        link: '/introduction',
        title: 'Introduction'
    },
    'layout': {
        link: '/layout',
        title: 'Layout'
    },
    'forms': {
        link: '/form',
        title: 'Form'
    },
    'validation': {
        link: '/validation',
        title: 'Validation'
    }
};

interface TopNavigationProps {
    activePage: string
}

export default class TopNavigation extends React.Component<TopNavigationProps, any> {
    renderNavItem(linkName: string) {
        const {link, title} = NAV_LINKS[linkName];
        const activePage = this.props.activePage;
        const a = classnames({
                'active': (activePage === link)
            }
        );


        return (
            <li key={linkName}
                className={a}
            >
                <Link to={link}>{title}</Link>
            </li>
        );
    }

    render() {
        const renderNavItem = this.renderNavItem.bind(this);
        let links = Object.keys(NAV_LINKS).map(renderNavItem).concat([
            <li
                key="github-link"
            >
                <a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank">GitHub</a>
            </li>
        ]);

        return (<Navbar staticTop
                        componentClass="header"
                        className="bs-docs-nav"
                        role="banner"
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Demo Company</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="bs-navbar-collapse">
                <Nav role="navigation" id="top">
                    {links}
                </Nav>
            </Navbar.Collapse>
        </Navbar>);

    }
}