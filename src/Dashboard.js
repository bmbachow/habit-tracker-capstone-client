import React, { Component } from 'react';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import TokenService from '../src/services/token-service'
import config from './config';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			habits: []
		}
	}

	componentDidMount = () => {

		// maybe need to destructure the state?
		// let getCategoriesByUserId = `${config.API_ENDPOINT}/category/user/${TokenService.getUserId()}`;
		let getCategoriesByUserId = `${config.API_ENDPOINT}/category/user/1`;

		fetch(getCategoriesByUserId)
			.then(response => response.json())
			.then(data => {
				this.setState({
					categories: data
				})
				console.log(this.state)
			})
			.catch(error => console.log(error))

		// fetch(getHabitsByUserId)

	}


	showHabits = (event) => {
		event.preventDefault();
		// letGetHabitsByCategoryId = ``
		this.setState({ display_habits: true }, () => {
			document.addEventListener('click', this.hideHabits);
		});
	}

	hideHabits = () => {
		this.setState({ display_habits: false }, () => {
			document.removeEventListener('click', this.hideHabits);
		});
	}


	render() {

		let categoriesHTMLOutput = ''
		if (this.state.categories.length > 0){
			categoriesHTMLOutput = this.state.categories.map((category, idx) => {
				return (
				<div>
				<li key={idx}>{category.category_name}</li>
				<button onClick={this.showHabits}>+</button>
				</div>
				)
			})
		}


		// {this.state.categories.display_habits ? 
		// return (
		// 	<button onClick={this.hideHabits}>-</button>

		// ): (
		// 	<button onClick={this.showHabits}>+</button>
		// )}


		return (
			<section className='flex-container'>
			{categoriesHTMLOutput}
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
						</Link><button onClick={() => this.hideHabits()}>-</button></div>
						<ul>
							<li><Link to='/edit/:habit' className='link'>
								Lift Weights
						</Link></li>
							<li><Link to='/edit/:habit' className='link'>
								Eat Salad
						</Link></li>
						</ul>
						<div className='create'>
							<Link to='/add/habit' id='create-habit-button'>
								<button>Create Habit</button>
							</Link>
						</div>
					</div>

					<div className='category'>
						<Link to='/edit/:category' className='link'>
							Productivity
						</Link>
						<button onClick={() => this.showHabits()}>+</button>
					</div>
					<div>
						<Link to='/edit/:category' className='link'>
							Emotional Regulation
						</Link>
						<button onClick={() => this.showHabits()}>+</button>
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
