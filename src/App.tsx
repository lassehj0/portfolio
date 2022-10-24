import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Projects from './pages/projectsPage';
import Skills from './pages/skillsPage';
import Contact from './pages/contactPage';
import Certificates from './pages/certificatesPage';
import NoPage from './pages/noPage';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Home />

			<div id='popUp'>
				<div id='topBar'>
					<Link id='closeLink' to='/'>
						<button id='closeButton' onClick={ClosePopUp} />
					</Link>
				</div>

				<Routes>
					<Route path='/' />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/certificates' element={<Certificates />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

const ClosePopUp: React.MouseEventHandler<HTMLButtonElement> = (
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
	const popup = document.getElementById('popUp');
	popup?.classList.remove('show');
};

document.addEventListener('readystatechange', (event) => {
	if (
		!document.getElementById('popUp')?.classList.contains('show') &&
		window.location.pathname != '/portfolio/'
	)
		document.getElementById('popUp')?.classList.add('show');
});
