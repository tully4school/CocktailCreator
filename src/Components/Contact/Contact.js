import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import {
	Button,
	FormFeedback,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
class ContactForm extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: ""
	};
	handleSubmit(e) {
		e.preventDefault();
		const { name, email, subject, message } = this.state;
		let templateParams = {
			from_name: email,
			to_name: "gmail",
			subject: subject,
			message_html: message
		};
		emailjs.send(
			"gmail",
			"template_dYZBD6YN",
			templateParams,
			"user_nKtggWtjaykr9NHaBaTuF"
		);
		this.resetForm();
	}
	resetForm() {
		this.setState({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value });
	};
	render() {
		return (
			<>
				<div className='row'>
					<div className='col-md-12'>
						<h1 className='crud-create-header display-4 mt-5 text-center'>Reach Out</h1>
					</div>
				</div>
				<Form
					onSubmit={this.handleSubmit.bind(this)}
					className='m-2 m-md-5 px-md-5'
				>
					<FormGroup controlId='formBasicEmail'>
						<Label className='text-muted'>Email address</Label>
						<Input
							type='email'
							name='email'
							value={this.state.email}
							className='text-primary'
							onChange={this.handleChange.bind(this, "email")}
							placeholder='Apriloneil@emailaddress.com'
						/>
					</FormGroup>
					<FormGroup controlId='formBasicName'>
						<Label className='text-muted'>Name</Label>
						<Input
							type='text'
							name='name'
							value={this.state.name}
							className='text-primary'
							onChange={this.handleChange.bind(this, "name")}
							placeholder="April O'Neil"
						/>
					</FormGroup>
					<FormGroup controlId='formBasicSubject'>
						<Label className='text-muted'>Subject</Label>
						<Input
							type='text'
							name='subject'
							className='text-primary'
							value={this.state.subject}
							onChange={this.handleChange.bind(this, "subject")}
							placeholder='Reason For Message'
						/>
					</FormGroup>
					<FormGroup controlId='formBasicMessage'>
						<Label className='text-muted'>Message</Label>
						<Input
							type='textarea'
							name='message'
							className='text-primary'
							value={this.state.message}
							onChange={this.handleChange.bind(this, "message")}
						/>
					</FormGroup>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</>
		);
	}
}
export default ContactForm;
