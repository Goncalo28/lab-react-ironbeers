import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={ListBeers} />
        <Route path='/beers/random' component={RandomBeer} />
        <Route path='/beers/new' component={NewBeer} />
        <Route path='/beers/:id' component={BeerDetail} />
      </Switch>
    </div>
  );
}

export default App;
