import React, { Component } from 'react'
import HabitProgress from './HabitProgress';

export class AddHabit extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         store: {
    //             habits: [{
    //                 name: '',
    //                 frequency: 7
    //             }]
    //         },
    //     };
    // }

    componentDidMount(){}

    handleSubmit(){}

    addHabit = (habit) => {
        this.setState({
            ...this.state.store.habits, habit
        })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>New Habit</h1>
                </header>
                <section>
                    <form id="record-habit">
                        <div className="form-section">
                            <label htmlFor="habit-name">Habit Name</label>
                            <input type="text" name="habit-name" required />
                            <p className="required">please enter a name for your habit</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="habit-description">Habit Description</label>
                            <textarea name="habit-description" rows="10"></textarea>
                        </div>
                        <div className="how-often">
                            <p>How often do you want to perform this habit?</p>
                            <label><input type="radio" name="often" defaultValue="every-day" required />Every Day</label>
                            <label><input type="radio" name="often" defaultValue="every-two-days" />Every Other Day</label>
                            <label><input type="radio" name="often" defaultValue="every-three-days" />Every Three Days</label>
                            <label><input type="radio" name="often" defaultValue="every-four-days" />Every Four Days</label>
                            <label><input type="radio" name="often" defaultValue="every-five-days" />Every Five Days</label>
                            <label><input type="radio" name="often" defaultValue="every-six-days" />Every Six Days</label>
                            <label><input type="radio" name="often" defaultValue="every-seven-days" />Once Per Week</label>
                            <p className="required">please choose an option</p>
                            <input onSubmit={() => this.addHabit()} type="submit" defaultValue="Submit" />
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default AddHabit
