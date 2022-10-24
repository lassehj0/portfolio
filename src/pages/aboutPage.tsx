import picture from '../../public/image_of_me.jpg';

const About = () => {
	return (
		<>
			<div id='screen'>
				<div id='aboutScreen'>
					<div id='title'>
						<h2>About me.</h2>
					</div>
					<div id='bottom'>
						<div id='description'>
							<p>
								{' '}
								Hello. My name is Lasse. I'm a software engineering student. I'm
								from Silkeborg, but am currently living in Risskov. I'm in my
								fourth semester, and I'm curious about all things programming
								and also just technology in general. Aside from what I'm
								learning from school, I spend much of my free time looking into
								new and exciting programming technologies. So far the projects
								I've made are school projects, and of course this portfolio
								project, from which I've learnt tonnes.
								<br />
								The technologies im currently working with are:
							</p>
							<div id='list'>
								<ol>
									<li>
										<span>React</span>
									</li>
									<li>
										<span>Javascript</span>
									</li>
									<li>
										<span>CSS/SCSS etc.</span>
									</li>
									<li>
										<span>HTML</span>
									</li>
									<li>
										<span>C#</span>
									</li>
									<li>
										<span>.NET</span>
									</li>
								</ol>
							</div>
						</div>
						<div id='picture'>
							<img id='profilePicture' src={picture} alt='profilePic' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
