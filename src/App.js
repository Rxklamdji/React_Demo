import React, { Component } from 'react';
import './App.css';

import verification1 from "./VerificationComponent/VerificationComponent";


class App extends Component {
    state = {
        userInput: ''
    }

    inputChangedHandler = ( event ) => {
        this.setState( { userInput: event.target.value } );
    }



    render () {



        return (
            <div className="App">


                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} />
                <p>{this.state.userInput}</p>
                <verification1 inputLength={this.state.userInput.length} />

            </div>
        );
    }
}

export default App;
