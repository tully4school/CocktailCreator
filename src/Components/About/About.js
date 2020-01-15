import React, { Component } from "react";
import "./About.css";
class About extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h1 className='crud-create-header display-4 mt-5 text-center'>About Cocktail Creator</h1>
					</div>
					<div className="col-lg-12">
						<h4 className="text-center mb-5">School Project 6</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<p><blockquote className="blockquote">"You will be building a JSON API using Mongoose and Express. In addition, you will find a dataset online to pull data from. You'll use this retrieved data to build your own model(s), and also to seed your database with. Requirements: Be built using Express and Mongoose, Have at least one model,Have complete CR functionality implemented with RESTful routes, Be deployed to Heroku, Have well-documented API routes."</blockquote> This was pretty fun, but i'm not gonna lie, it was a bit difficult thinking of something i wanted to make an API about. BUT i settled with this and it was a fun experience especially knowing that later that week we would start the build of a front-end. The documentation was completed via SwaggerDocs which a classmate and I had a blast learning about.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 text-center"><p>My name is Joseph Tully, I'm a software engineer. Thanks for stopping by.</p></div>
				</div>
				<div className="row">
					<div className="col-3 col-lg-1 offset-lg-2 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/HTML5.b869b6bc.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/css.c26a73b4.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/js.5b22ce57.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/node.2a694fea.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/mongodb.b5f7d0bf.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/React.edb8f280.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/heroku.40b07e60.png" alt="" /></div>
					<div className="col-3 col-lg-1 my-3 d-flex align-items-center"><img className="img-fluid" src="https://relaxed-curran-4b9888.netlify.com/static/media/swagger.83929eaa.png" alt="" /></div>
				</div>
			</div>
		);
	}
}
export default About;
