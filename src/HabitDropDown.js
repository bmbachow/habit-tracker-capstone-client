import React from 'react';
import {Link} from "react-router-dom";


class HabitDropDown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayHabits: false,
        };

        this.showHabits = this.showHabits.bind(this);
        this.hideHabits = this.hideHabits.bind(this);

    };

    showHabits(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideHabits);
        });
    }

    hideHabits() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideHabits);
        });

    }

    render() {
        return (
            <div className="habit-dropdown" style={{ background: "red", width: "200px" }} >
                <div className="button" onClick={this.showHabits}> My Setting </div>

                { this.state.displayHabits ? (
                    <ul>
                        <li>
                            Habit 1
                        <Link to='/edit/:habit' className="link">
                                Edit Habit
                        </Link>
                        </li>
                        <li>
                            Habit 2
                        <Link to='/edit/:habit' className="link">
                                Edit Habit
                        </Link>
                        </li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default HabitDropDown;