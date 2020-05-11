import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Drawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';
import './App.css';
import TodoList from './components/TodoList/TodoList';

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
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickedHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main className="Main">
          <TodoList />
        </main>
      </div>
    );
  }
  }
  

export default App;
