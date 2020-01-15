import React, { Component } from "react";
import axios from "axios";
import "../DeleteDrink/DeleteDrink.css";
import { Redirect } from "react-router-dom"
class DeleteDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			_id: props.match.params.id,
			submitted: false
		};
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {

		e.preventDefault();
		axios.delete(
			`https://cocktail-recipes-tully4school.herokuapp.com/drinks/${this.state._id}`, { method: "DELETE" }
		)
			.then(res => {
				alert("Cocktail Deleted");
			})
			.then(err => {
				console.log("error", err);
			});
		this.setState({ submitted: true })
	};
	render() {
		if (this.state.submitted) {
			return (
				<Redirect
					to={{
						pathname: "/",
					}}
				/>
			);
		}
		const { _id } = this.state;
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-12'>
						<h1 className='crud-delete-header display-4 mt-5 text-center'>
							Delete A Cocktail
						</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<h4 className='warning text-center'>
							THIS REMOVES A COCKTAIL FROM OUR DATABASE
						</h4>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<h5 className='warning text-center mb-5'>IT CANNOT BE RECOVERED</h5>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<form className='crudInput' onSubmit={this.handleSubmit}>
							<input
								type='text'
								name='_id'
								placeholder='ID of the drink to be deleted'
								value={_id}
								onChange={this.handleChange}
							></input>
							<button type='submit'>Remove This Drink!</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default DeleteDrink;
