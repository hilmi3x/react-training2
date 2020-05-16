import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Drawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import {BrowserRouter, Route} from 'react-router-dom';
import RoutePage from './components/RoutePage/RoutePage.js';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }

    return (
      <BrowserRouter>
        <div className="app">
          <Toolbar drawerClickHandler={this.drawerToggleClickedHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <Route exact path="/" component={TodoList} />
          <Route path="/routePage/:id" component={RoutePage} />
        </div>
      </BrowserRouter>
      
    );
  }
  }
  

export default App;
