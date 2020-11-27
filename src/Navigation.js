import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import TokenService from './services/token-service.js';
import AppContext from './AppContext';
import DrawerToggleButton from './DrawerToggleButton';
import './Navigation.css';


class Navigation extends Component  {
    static contextType = AppContext;
    logOutClick = () => {
    //console.log('Logging out')
      TokenService.clearAuthToken()
      TokenService.getUserId = (id) => { 
      }
      window.location='/'
    };
  
    render(){
        return( 
           <div className='outer-nav toolbar'>
                <nav className='toolbar_navigation'>
                    <div className='toolbar-toggle'>
                        <DrawerToggleButton onClick={this.context.drawerToggleButton}/>
                    </div>
                        <Link className='nav_logo'to='/'><h2 className="logo">Habitual Habits</h2></Link>
                        {TokenService.hasAuthToken() ? <div className='spacer'></div> : ''}
                        {TokenService.hasAuthToken() ? <div className='nav'>                        
                        <NavLink className='nav-link' to='/habit-list'><h3>Habits List</h3></NavLink>
                        <NavLink className='nav-link' to='/add-habit'><h3>Add Habit</h3></NavLink>
                        <NavLink className='nav-link' to="/" onClick={this.logOutClick}><h3>Log Out</h3></NavLink>
                    </div> : ''}
                </nav>
            </div>
        );
   };
};


export default Navigation