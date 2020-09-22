import React, { Component } from 'react'
import Badge from './Badge'

export class Dashboard extends Component {


    constructor(props) {
        super(props);
        
        this.state = {     
            expanded: false
        };
        
    };
}


toggle = () => {
    this.setState({expanded : !this.state.expanded})
}

//not sure how to do this section... need categories to be dynamically generated and habits to be in those.
//the database will have that info.  need to set state using that info

//current icon setup is not going to work... it will change all the icons based on the changing stTE


//error on render here, unsure why
render(){

    let icon = this.icons['down'];

    if(this.state.expanded){
        icon = this.icons['up'];   
    }
    
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
                    <span>Health</span><button onClick={() => this.toggle()}>{icon}</button><Link to='/edit/:category' className="link">Edit Category</Link>
                    <div className="habit">First Habit<Link to='/edit/:habit' className="link">Edit Habit</Link></div>
                    <div className="habit">Second Habit<Link to='/edit/:habit' className="link">Edit Habit</Link></div>
                    <div className="habit"><button>Create Habit</button></div>
                </div>
                <div><span>Productivity</span><button onClick={() => this.toggle()}>{icon}</button></div>
                <div><span>Emotional Regulation</span><button onClick={() => this.toggle()}>{icon}</button></div>
                <div><span>Other</span><button onClick={() => this.toggle()}>{icon}</button></div>
                <div className="create"><Link to='/add/category' id="create-category-button">Create Category</Link></div>
            </section>

        </section>
    )
}

export default Dashboard


