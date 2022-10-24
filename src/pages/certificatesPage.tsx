import react from 'react';

const Certificates = () => {
	return (
		<>
			<div id='certificatesScreen'>
				<div id='title'>
					<h2>My certificates.</h2>
				</div>
				<div id='HackerRank'>
					<h2>HackerRank</h2>
					<div id='certificates'>
						<a
							href='https://www.hackerrank.com/certificates/9c8291cb23be'
							target='_blank'
							rel='noopener noreferrer'>
							JavaScript (Basic)
						</a>
						<a
							href='https://www.hackerrank.com/certificates/c88a9e08a644'
							target='_blank'
							rel='noopener noreferrer'>
							SQL (Basic)
						</a>
						<a
							href='https://www.hackerrank.com/certificates/5c112d955874'
							target='_blank'
							rel='noopener noreferrer'>
							SQL (Intermediate)
						</a>
						<a
							href='https://www.hackerrank.com/certificates/5f9c442ed6f1'
							target='_blank'
							rel='noopener noreferrer'>
							CSS
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Certificates;
