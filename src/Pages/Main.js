import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Info from './InfoPlace';
import Tour from './InfoTour';
import Book from './Book';
import Editor from '../components/Editor';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/info/:placeId' component={Info} />
        <Route exact path='/tour/:eventId' component={Tour} />
        <Route exact path='/book' component={Book} />
        <Route exact path='/editor' component={Editor} />
      </Switch>
    );
  }
}

export default Main;