import React from 'react';
import config from './config';
import TokenService from './services/token-service.js';
import './HabitListPage.css';

export default class HabitListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      habitsList: []
    };
  };


  // updateAnimation(id, updatedAnimation) {
  //   return fetch(`${config.API_ENDPOINT}/animations/${id}`, {
  //       method: 'PATCH',
  //       headers: {
  //           'authorization': `bearer ${TokenService.getAuthToken()}`,
  //           'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedAnimation),
  //   })
  //   .then(res =>
  //       (!res.ok)
  //           ? res.json().then(e => Promise.reject(e))
  //           : res.json()
  //   )
  // }

  completeHabit(event) {
    event.preventDefault()
    const data = {}
    const formData = new FormData(event.target)

    for (let value of formData) {
      data[value[0]] = value[1]
    };
    let { habitId, user_id, name, notes, times_completed } = data
    fetch(`${config.API_ENDPOINT}/habit/${habitId}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        habitId,
        user_id,
        name,
        notes,
        times_completed
      })
        .then(response => {
          (!response.ok)
            ? response.json().then(e => Promise.reject(e))
            : response.json()
              .then(data => {
                setState({data.times_completed = data.times_completed + 1})
              })
              window.location = `/habit-list`
            })
          }
        }




  deleteHabit(event) {
    event.preventDefault()
    const data = {}
    const formData = new FormData(event.target)

    for (let value of formData) {
      data[value[0]] = value[1]
    };

    let { habitId } = data

    fetch(`${config.API_ENDPOINT}/habit/${habitId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: habitId

    })

      .then(response => {
        (!response.ok)
          ? response.json().then(e => Promise.reject(e))
          : response.json()
        window.location = `/habit-list`
      });

  };

  componentDidMount() {
    let loggedinUserId = TokenService.getCurrentLoggedInUser()

    const url = `${config.API_ENDPOINT}/habit/user/${loggedinUserId}`;

    const options = {
      method: 'GET',
      headers: {
        "Authorization": "",
        "Content-Type": "application/json"
      }
    };

    //using the url and parameters above make the api call
    fetch(url, options)

      // if the api returns data ...
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        // ... convert it to json
        return res.json()
      })
      // use the json api output
      .then(data => {
        //check if there is meaningful data
        // check if there are no results
        if (data.totalItems === 0) {
          throw new Error('No habit found')
        }
        this.setState({
          habitsList: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };



  render() {
    let showHabit = this.state.habitsList.map((habit, key) => {
      return (
        <div className="habit-element" key={key}>
          <p><span>Habit Name: </span>{habit.name}</p>
          <p><span>Note: </span>{habit.notes}</p>
          <div className="form-container">
            <form className="habitUpdateForm" onSubmit={this.completeHabit}>
              <input type='hidden' name='habitId' defaultValue={habit.id}></input>
              <input type='hidden' name='user_id' defaultValue={habit.user_id}></input>
              <input type='hidden' name='name' defaultValue={habit.name}></input>
              <input type='hidden' name='notes' defaultValue={habit.notes}></input>
              <input type='hidden' name='times_completed' defaultValue={habit.times_completed}></input>
              <button type='submit' className='habitDeleteBtn'>Completed</button>
            </form>
            <p>Times Completed: {habit.times_completed}</p>
            <form className="habitDeleteForm" onSubmit={this.deleteHabit}>
              <input type='hidden' name='habitId' defaultValue={habit.id}></input>
              <button type='submit' className='habitDeleteBtn'>Delete Habit</button>
            </form>
          </div>
        </div>);
    });
    return (
      <div className="outer-container">
        <div className="inner-container">
          {showHabit}
        </div>
      </div>
    );
  };
};