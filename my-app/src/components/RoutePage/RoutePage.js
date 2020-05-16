import React, {Component} from 'react';
import './RoutePage.scss';

export default class RoutePage extends Component {

    render(){
        return (
            
            <div className="route-page">
                <button>Geri Dön</button>
                <div>{this.props.match.params.id}</div>
            </div>
        );
    };
}