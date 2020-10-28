import React from 'react';
import { CardList } from './components/card-list/cardlistcomp';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      monsters:[],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this) to jest tym samym co handleChange = (e) => laxical scoping
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>
          </CardList>
      </div>
    );
  }
}

export default App;