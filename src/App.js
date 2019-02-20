import React, {Component} from 'react';
import './App.css';
import Joke from "./components/Joke/Joke"
import Button from "./components/Button/Button"

class App extends Component {
    // state = {
    //     joke: {}
    // };

    constructor(props) {
        super(props);
        this.getNewJoke = this.getNewJoke.bind(this);
        this.state = {};
        this.state.joke = {};
    }

    componentDidMount() {
        this.getNewJoke();
    }

    getNewJoke() {
        const P_URL = 'https://api.chucknorris.io/jokes/random';
        fetch(P_URL).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(joke => {
            this.setState({joke: joke});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                <Joke text={this.state.joke.value}/>
                <Button new={this.getNewJoke}/>
            </div>
        );
    }
}

export default App;
