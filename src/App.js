import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/CardList/CardList';
import {SearchBox} from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [
        // {name: 'Frankstein',
        // id: '1'},
        // {name: 'Dracula',
        // id: '2'},
        // {name: 'Zombie',
        // id: '3'}
      ],
      searchField:''
    }
  };

  changeHandler = (e) => {
    this.setState({searchField: e.target.value})
  };

  componentDidMount(){ // call whatever inside when component rendered
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => this.setState({monsters:user})
    )

  };


  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      // console.log(monster.name.toLowerCase().includes(searchField))
    )

    return (
      <div className="App">
      {/* <input type='search' placeholder='search monster' 
      onChange = {e => this.setState({searchField:e.target.value}, ()=> console.log(this.state.searchField) ) }/> */}
            {/* setState is asyn call, do console.log inside setstate to check updated state value */}

      <h1> Monster Rolodex</h1>
      <SearchBox placeholder='search monster' 
        changeHandler = {this.changeHandler }
      />
      <CardList monsters = {filteredMonsters}/>  
      </div>
    );
  }
}
export default App;
