import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'; // {} bo nie ma export default, dzieki temu w robots.js moze byc wiecej exportow
import './App.css'
class App extends Component {
    constructor(){
        super()
        this.state={ //state w przeciwienstwie do props jest czyms co moze sie zmienic, dzieci/liscie widza taki state juz jako props
            robots: robots,
            searchfield: ''
        }
    }

    //gdyby to byla zwykla funkcja nie zadzialalby bo problem ze state tj. this nie odosi sie do App ale do SearchBox/Input na rzecz którego została ta funkcja wywlona
    //by to poprawic trzeba uzyc arrow function czyli zamiast onSearchChange(event){..} dać onSearchChange = (event) => {..}
    onSearchChange = (event) => {
        //nigdy tak nie robic w react
        // this.state.searchfield=event.target.value;
        //zamist tego
        this.setState({searchfield: event.target.value})

        // const fillteredRobots=this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // });

        // console.log(fillteredRobots);
    } 

    render(){
        const fillteredRobots=this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={fillteredRobots} />
            </div>
        )
    }
}

export default App;