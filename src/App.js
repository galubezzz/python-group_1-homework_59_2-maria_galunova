import React, {Component} from 'react';
import './App.css';
import Joke from "./components/Joke/Joke"
import Button from "./components/Button/Button"
import Amount from "./components/Amount/Amount"

class App extends Component {

    constructor(props) {
        super(props);
        this.getNewJoke = this.getNewJoke.bind(this);
        this.state = {};
        this.state.joke = [];
        this.state.amount = 1;
    }

    componentDidMount() {
        this.getNewJoke(this.state.amount);
    }

    addAmount = (event) => {
        this.setState({amount: event.target.value});
    };

    getNewJoke(amount) {
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
            console.log(this.state.joke.value)
    }

    render() {
        return (
            <div className="App">
                <Joke text={this.state.joke.value}/>
                <Amount change={this.addAmount}/>
                <Button new={this.getNewJoke} amount={this.state.amount}/>
            </div>
        );
    }
}

export default App;
