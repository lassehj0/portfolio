import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div id='welcomeScreen'>
				<div id='textBox'>
					<div id='welcomeTextBox'>
						<h1 id='welcomeText' />
					</div>
					<div id='options'>
						<Link to='skills'>
							<button id='skillsBtn' onClick={OpenPopUp}>
								Skills
							</button>
						</Link>
						<Link to='projects'>
							<button id='projectsBtn' onClick={OpenPopUp}>
								Projects
							</button>
						</Link>
						<Link to='about'>
							<button id='aboutBtn' onClick={OpenPopUp}>
								About
							</button>
						</Link>
						<Link to='contact'>
							<button id='contactBtn' onClick={OpenPopUp}>
								Contact
							</button>
						</Link>
						<Link to='certificates'>
							<button id='certificateBtn' onClick={OpenPopUp}>
								Certificates
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

const OpenPopUp: React.MouseEventHandler<HTMLButtonElement> = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
	const popup = document.getElementById('popUp');
	popup?.classList.add('show');
};

window.addEventListener('load', function (event) {
	var dataText = [
		'Welcome to my portfolio.',
		"I'm Lasse a sofware engineering student.",
		'Take a look around :-)',
	];

	function typeWriter(text: string, i: any, fnCallback: any) {
		if (i < text.length) {
			document.querySelector('#welcomeText')!.innerHTML =
				text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

			setTimeout(function () {
				typeWriter(text, i + 1, fnCallback);
			}, 50);
		} else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 1000);
		}
	}

	function StartTextAnimation(i: any) {
		if (i < dataText[i].length) {
			typeWriter(dataText[i], 0, function () {
				StartTextAnimation(i + 1);
			});
		}
	}

	setTimeout(function () {
		if (0 < dataText[0].length) {
			typeWriter(dataText[0], 0, function () {
				StartTextAnimation(1);
			});
		}
	}, 1000);
});
