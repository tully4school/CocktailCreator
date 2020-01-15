import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Measures from "../Ingredients/Measures";
import "./Category.css";
import Modal from "../Modal/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";

const url =
	"https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/";
class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			openModal: null
		};
	}
	componentDidMount() {
		const value = this.props.match.params.drinkCategory;
		console.log(value);
		fetch(`${url}${value}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
				console.log(res);
			})
			.catch(err => {
				console.log("there was an error...", err);
			});
	}
	componentWillUpdate() {
		const value = this.props.match.params.drinkCategory;
		console.log(value);
		fetch(`${url}${value}`)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
				console.log(res);
			})
			.catch(err => {
				console.log("there was an error...", err);
			});
	}

	render() {
		console.log(this.state.data);
		console.log(this.state.data);
		let ingredients = this.state.data.map(i => {
			return i.drinkIngredients;
		});
		let measures = this.state.data.map(i => {
			return i.drinkMeasures;
		});
		console.log(measures);
		let total = measures.reduce((total, field, index) => {
			total[ingredients[index]] = field;
			return total;
		}, {});
		console.log(total);

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h1 className='crud-create-header display-4 my-5 text-center'>
							{this.props.match.params.drinkCategory}
						</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>

						{this.state.data.map(item => (
							<Modal
								name={item.drinkName}
								img={
									<img
										src={item.drinkThumb}
										className='modal-img'
										alt={item.drinkName}
									/>
								}
								src={item.drinkThumb}
								details={<ul>
									<li>Alcohol:{" " + item.alcohol}</li>
									<li>Served in:{" " + item.drinkGlass}</li>
									<li>
										Ingredients:
								<span>
											<Ingredients data={item.drinkIngredients} />
										</span>
									</li>
									<li>
										Measures: <Measures data={item.drinkMeasures} />
									</li>
								</ul>}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default Category;
