import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawwerClasses = 'side_drawer';

    if(props.show){
        drawwerClasses = 'side_drawer open';
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
