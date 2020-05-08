import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Drawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickedHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <p>TEST TEST TEST</p>
        </main>
      </div>
    );
  }
  }
  

export default App;
