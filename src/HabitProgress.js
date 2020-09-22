import React, { Component } from 'react'

export class HabitProgress extends Component {
    render() {
        return (
            <div>
                <banner className="feedback">
                    <h6>3x habit streak.  Good Job!</h6>
                    <h6>7x habit streak.  Way to Go!</h6>
                    <h6>15x habit streak.  You Rock!</h6>
                </banner>

                <section><header>
                    <h1>Existing Habit Name</h1>
                </header></section>

                <section>
                    <form>  <button type="submit">Completed Task!</button>
                        <select name="day" id="selected-day">
                            <option defaultValue="0" selected>Today</option>
                            <option defaultValue="1">Yesterday</option>
                            <option defaultValue="2">Two Days Ago</option>
                            <option defaultValue="3">Three Days Ago</option>
                        </select>
                    </form>

                    <h6>Keep up the good work!</h6>
                </section>


                <section className="progress">
                    <h2>You have been tracking this habit since (date)</h2>
                    <h2>You have completed this task (x) number of times</h2>
                    <h2>You have successfully completed this task (?%) of the time</h2>
                </section>

                <section><button>Edit Habit</button></section>
            </div>
        )
    }
}

export default HabitProgress
