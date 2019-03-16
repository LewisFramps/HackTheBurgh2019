import React, { Component } from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom';

class IndexContainer extends Component {

    handleButtonClick = () => {
        this.props.history.push('/call');
    }

    render() {
        return (
            <div className="index">
                <button className="call-button" onClick={this.handleButtonClick}>Call</button>
            </div>
        );
    }
}

export default withRouter(IndexContainer);
