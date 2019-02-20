import React, {Component} from 'react';
import './App.css';
import Joke from "./components/Joke/Joke"

class App extends Component {
    state = {
        joke: {}
    };

    componentDidMount() {
        const P_URL = 'https://api.chucknorris.io/jokes/random';
        fetch(P_URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(posts => {
            this.setState({joke: posts});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                <Joke text={this.state.joke.value} />
            </div>
        );
    }
}

export default App;
