import React from 'react';
import './SideDrawer.scss';

const sideDrawer = props => {
    let drawwerClasses = 'side-drawer';

    if(props.show){
        drawwerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawwerClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
);
    
};

export default sideDrawer;
