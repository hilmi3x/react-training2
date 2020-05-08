import React from 'react';
import './DrawerButton.css';

const drawerButton = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>
        <div className="toggle_button_line"></div>     
    </button>
);

export default drawerButton;