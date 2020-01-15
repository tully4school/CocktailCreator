import React, { Component } from "react";
import Ingredients from "../Ingredients/Ingredients";
import Modal from "../Modal/Modal"
import Measures from "../Ingredients/Measures";
import "./Results.css";
import "../Categories/Category.css";

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resultData: this.props.location.state.results
		};
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			resultData: nextProps.location.state.results
		});
	}
	render() {
		return (
			<div>
				<h1 className='crud-create-header display-4 my-5 text-center'>
					Drinks Served!</h1>
				{this.state.resultData.map(drink => (
					<Modal
						name={drink.drinkName}
						img={
							<img
								src={drink.drinkThumb}
								className='modal-img'
								alt={drink.drinkName}
							/>
						}
						src={drink.drinkThumb}
						details={<ul>
							<li>Alcohol:{" " + drink.alcohol}</li>
							<li>Served in:{" " + drink.drinkGlass}</li>
							<li>
								Ingredients:
								<span>
									<Ingredients data={drink.drinkIngredients} />
								</span>
							</li>
							<li>
								Measures: <Measures data={drink.drinkMeasures} />
							</li>
						</ul>} />
				))}
			</div>
		);
	}
}
export default Results;
