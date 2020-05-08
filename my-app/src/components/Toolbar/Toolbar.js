import React from 'react';
import './Toolbar.css';
import DrawerButton from '../Drawer/DrawerButton.js';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="tooblar_toggle_button"><DrawerButton click={props.drawerClickHandler}/></div>
            <div><a href="/" className="toolbar_logo">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
