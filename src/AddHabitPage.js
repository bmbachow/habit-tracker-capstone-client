import React from 'react';
import config from './config';
import TokenService from './services/token-service.js';
import './AddHabitPage.css';
import zen from './images/zen.png';

export default class AddHabitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          addHabit: []
        };
      };
      handleSubmit = (e) => {
        e.preventDefault();
        let user_id = TokenService.getUserId()
        //create an object to store the search filters
        const data = {};
    
        //get all the from data from the form component
        const formData = new FormData(e.target);
    
        //for each of the keys in form data populate it with form value
        for (let value of formData) {
          data[value[0]] = value[1]
        };
    
        let {
            name,            
            notes
        } = data;
      
        //assigning the object from the form data to params in the state
        this.setState({
          addHabit: data
        });
        
        ////////////////POST REQUEST FOR habits////////////////////////////
    
        const newHabit = {
            user_id,
            name,
            notes
        };
    
    
        //using the url and parameters above to make the api call
        fetch(`${config.API_ENDPOINT}/habit`, {
          method: 'POST',
          body: JSON.stringify(newHabit),
          headers: {
            'content-type': 'application/json'
          }
        })
    
          // if the api returns data ...
          .then(res => {
            if (!res.ok) {
              throw new Error('Something went wrong, please try again later.')
            }
            // ... convert it to json
            return res.json()
          })
          // use the json api output and assign to a variable
          .then(data => {
              console.log(data)
            window.location = `/habit-list`
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          }); 
      };
  render() {
    return(
        <div className="outer-container">
        <div className="inner-container">
              <form className="add-habit" onSubmit={this.handleSubmit}>
              <div className="box">
                <div className="input-group">
                  <label htmlFor="habit">Habit Type</label>
                  <input
                    id="habit"
                    name="name"
                    className="login-input"
                    placeholder="running"
                    required/>
                </div>

                <div className="input-group">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    className="notes"
                    placeholder="Your notes go here"
                    required/>
                </div>
      
                <button
                  className="add-habit-btn" type="submit"
                  >Submit</button>
              
              </div>
              </form>
            </div>
            <div className="zen"><img alt="zen" src={zen} width="300" height="300"/></div>
            </div>
    );
  };
};