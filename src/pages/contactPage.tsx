import ButtonMailTo from '../buttonTo';

const Contact = () => {
	return (
		<>
			<div id='contactScreen'>
				<div id='title'>
					<h2>Get in touch.</h2>
				</div>
				<div id='email'>
					<h2>E-mail:</h2>
					<ButtonMailTo
						label='lassehj00@gmail.com'
						mailto='mailto:lassehj00@gmail.com'
					/>
				</div>
				<div id='linkedin'>
					<h2>LinkedIn:</h2>
					<a href='https://www.linkedin.com/in/lasse-haarup-jensen'>
						My LinkedIn
					</a>
				</div>
			</div>
		</>
	);
};

export default Contact;
