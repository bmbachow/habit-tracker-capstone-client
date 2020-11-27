import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import AppContext from './AppContext';
import TokenService from './services/token-service.js';
import NotFoundPage from './NotFoundPage';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import HabitListPage from './HabitListPage'
import AddHabitPage from './AddHabitPage'
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';


export default class App extends React.Component {
  
  state = {
    sideDrawerOpen: false,
  };
  
  drawerToggleButton = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };


render() {
  const contextValue = {
    drawerToggleButton: this.drawerToggleButton,
  };

  let backdrop;

  if (this.state.sideDrawerOpen) {
    backdrop = <Backdrop click={this.backdropClickHandler}/>
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div style={{height:'100%'}} className="App">
      <Navigation />
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main className='Main-view'>
        <Switch>
        <Route exact path='/' render={() => {
            return <LandingPage />
          }}/>
          <Route path='/habit-list' render={() => {
              return (TokenService.hasAuthToken()
              ? <HabitListPage />
              : <Redirect to={{pathname: '/habit-list'}} />)
          }} />
          <Route path='/add-habit' render={() => {
              return (TokenService.hasAuthToken()
              ? <AddHabitPage/>
              : <Redirect to={{pathname: '/add-habit'}} />)
          }} />
          />
         <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
    </AppContext.Provider>
  );
 };
};

