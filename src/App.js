import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list";
import {SearchBox} from "./components/search-box/search-box";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        };

    }

    handleChange = (e) =>{
        this.setState({searchField: e.target.value});
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(m => m.name.toLocaleLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}>
                </CardList>
            </div>
        );
    }
}

// {/*<header className="App-header">*/}
// {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
// {/*</header>*/}
export default App;
