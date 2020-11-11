import React, { Component } from 'react'
import Badge from './Badge'
import HabitDropDown from './HabitDropDown'
import {Link} from "react-router-dom";

export class Dashboard extends Component {

toggle = () => {
    
}

render(){

    return (
        <section className="flex-container">
            <banner>
                <Badge/>
            </banner>
            <header>
                <h1 className="title">Dashboard</h1>
            </header>
            <section className="categories">
                <h3>Categories</h3>
                <div>
                    <span>Health</span>
                        <button onClick={() => this.toggle()}>+</button>
                        <Link to='/edit/:category' className="link">Edit Category</Link>
                            <HabitDropDown/>
                    <div className="habit">
                    <div className="create"><Link to='/add/habit' id="create-habit-button"><button>Create Habit</button></Link></div>
                    </div>
                </div>
                <div>
                    <span>Productivity</span>
                    <button onClick={() => this.toggle()}>+</button>
                </div>
                <div>
                    <span>Emotional Regulation</span>
                    <button onClick={() => this.toggle()}>+</button>
                </div>
                <div className="create"><Link to='/add/category' id="create-category-button"><button>Create Category</button></Link></div>
            </section>

        </section>
    )
}}

export default Dashboard;


