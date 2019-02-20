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
        this.state.jokes = [];
        this.state.amount = 1;
    }

    componentDidMount() {
        this.getNewJoke(this.state.amount);
    }

    addAmount = (event) => {
        this.setState({amount: event.target.value});
    };

    getNewJoke(amount) {
        const requests = [];

        for (let i = 0; i < amount; i++) {
            const P_URL = 'https://api.chucknorris.io/jokes/random';
            const request = fetch(P_URL)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Something went wrong with network request');
                });
            requests.push(request);
        }

        Promise.all(requests).then(jokes => {
            console.log("!!!");
            console.log(jokes);
            this.setState({jokes: jokes});
        }).catch(error => {
            console.log(error);
        });
        console.log(this.state.jokes.value);
    }

    render() {
        const jokes = (
            <div>
                {
                  this.state.jokes.map((joke) => {
                    return <Joke text={joke.value}/>
                  }
                  )
                }
            </div>
          );
        return (
            <div className="App">
                {jokes}
                <Amount change={this.addAmount}/>
                <Button new={this.getNewJoke} amount={this.state.amount}/>
            </div>
        );
    }
}

export default App;
