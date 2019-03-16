import React, { Component } from 'react';
import '../App.css';
import TextToSignsService from '../api/TextToSignsService';

export default class CallContainer extends Component {
    state = {
        response: undefined
    }

    async handleSubmitForm(e) {
        e.preventDefault();
        console.log(e.target.text.value);
        const response = await TextToSignsService.postTextToSigns(e.target.text.value);
        this.setState({response: response});
    }

    render() {
        const result = <div className="result">

                        </div>;
        return (
            <div className="call-container">
                <form onSubmit={this.handleSubmitForm}>
                    <input type="text" name="text"></input>
                    <button type="submit">Submit</button>
                </form>
                {this.state.response ? result : " "}
            </div>
        );
    }
}
