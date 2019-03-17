import React, { Component } from 'react';
import '../App.css';
import TextToSignsService from '../api/TextToSignsService';

export default class CallContainer extends Component {
    state = {
        response: []
    }

    handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(e.target.text.value);
        const response = await TextToSignsService.postTextToSigns(e.target.text.value);
        console.log(response);
        this.setState({response: response.data});
    }

    render() {
        const images = this.state.response.map((item) =>
                                        <img src={item}></img>
                                    );
        const result = <div className="result">
                            {images}
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
