import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import EditCategory from './EditCategory'
import EditHabit from './EditHabit'
import AddHabit from './AddHabit'
import AddCategory from './AddCategory'
import HabitProgress from './HabitProgress'
import Login from './Login'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />

          <Route path='/signup' component={SignUp} />

          <Route path='/dashboard' component={Dashboard} />

          <Route path='/edit/:category' component={EditCategory} />

          <Route path='/edit/:habit' component={EditHabit} />

          <Route path='/add/habit' component={AddHabit} />

          <Route path='/add/category' component={AddCategory} />

          <Route path='/progress/:habit' component={HabitProgress} />

          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;