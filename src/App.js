// import {Component} from 'react';
import {useState, useEffect} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import './App.css';

const App = () => {
  // useState() returns an array of 2 values [value, setValue]
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // effect has empty deps, because we only want to run it once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }


  return (
    <div className='App'>
      <h1 className='app-title'>Robodex</h1>

      <SearchBar
        className='monsters-search-bar'
        placeholder='search monster'
        onChangeHandler={onSearchChange}/>

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

// class App extends Component {
//   // Called before component is mounted
//   // Purposes:
//   // 1. Initializing local state by assigning an object to this.state.
//   // 2. Binding event handler methods to an instance.
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     console.log('construct');
//   }
//
//   // Invoked immediately after a component is placed on the DOM
//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return {monsters: users};
//         },
//         () => {
//           console.log(this.state);
//         }
//       ))
//   }
//
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     });
//   }
//
//   render() {
//     console.log('render');
//
//     // Destructuring
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//
//     // Filter the original monsters array with a component-wide search string
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Robodex</h1>
//
//         <SearchBar
//           className='monsters-search-bar'
//           placeholder='search monster'
//           onChangeHandler={onSearchChange}/>
//
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
