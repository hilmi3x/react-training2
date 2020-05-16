import React from 'react';
import './BackDrop.scss';

const backdrop = props => (
    <div className="backdrop" onClick={props.click}></div>

);

export default backdrop;