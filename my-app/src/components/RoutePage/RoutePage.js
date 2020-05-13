import {React, Component} from 'react'

export default class RoutePage extends Component {

    render(){
        return (
            <div className="routePage">
                {this.props.match.params.id}
            </div>
        );
    }
}