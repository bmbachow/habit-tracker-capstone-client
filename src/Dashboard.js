import React, { Component } from 'react';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import TokenService from '../src/services/token-service'
import config from './config';

class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                name: '',
								habits: [{name : '', is_deleted: 0}],
								is_deleted: 0,
								display_habits : false
		}]
	}
}
        
		componentDidMount = () => {
			let getCategoriesByUserId =  `${config.API_ENDPOINT}/category/user/${TokenService.getUserId()}`;
			
			
			fetch(getCategoriesByUserId)
				.then(response => response.json())
				.then(data => {
					this.setState({
						categories: data
					})
				.catch(error => console.log(error))
		})

		this.setState({...this.state, display_habits : false})

		//I want to map display_habits as false to each category

	}

		toggle = (event) => {
			event.preventDefault();
			let habitsByCategory = ``

		}


	render() {

		// {this.state.categories.display_habits ? 
		// return (
		// 	<button onClick={this.hideHabits}>-</button>

		// ): (
		// 	<button onClick={this.showHabits}>+</button>
		// )}


		return (
			<section className='flex-container'>
				<div>
					<Badge />
				</div>
				<header>
					<h1 className='title'>Dashboard</h1>
				</header>
				<section className={'categories, dashboard'}>
					<h3>Categories</h3>
					<div>
					<div><Link to='/edit/:category' className='link'>
							Health
						</Link><button onClick={() => this.toggle()}>-</button></div>
						<div className='habit'>
							<div className='create'>
								<Link to='/add/habit' id='create-habit-button'>
									<button>Create Habit</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='category'>
					<Link to='/edit/:category' className='link'>
							Productivity
						</Link>
						<button onClick={() => this.toggle()}>+</button>
					</div>
					<div>
					<Link to='/edit/:category' className='link'>
							Emotional Regulation
						</Link>
						<button onClick={() => this.toggle()}>+</button>
					</div>
					<div className='create'>
						<Link to='/add/category' id='create-category-button'>
							<button>Create Category</button>
						</Link>
					</div>
				</section>
			</section>
		);
	}
}


export default Dashboard;
