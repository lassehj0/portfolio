const Skills = () => {
	return (
		<>
			<div id='skillsScreen'>
				<div id='title'>
					<h2>My skills.</h2>
				</div>
				<div id='skills'>
					{/* <div id='firstColumn'> */}
					<div id='skill'>
						<h2>JAVASCRIPT</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-05-30'), new Date())} MONTHS
						</h3>
					</div>
					<div id='skill'>
						<h2>CSS</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-08-31'), new Date())} MONTHS
						</h3>
					</div>
					<div id='skill'>
						<h2>HTML</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-08-31'), new Date())} MONTHS
						</h3>
					</div>
					{/* </div> */}
					{/* <div id='secondColumn'> */}
					<div id='skill'>
						<h2>REACT</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-08-31'), new Date())} MONTHS
						</h3>
					</div>
					<div id='skill'>
						<h2>C#</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-08-31'), new Date())} MONTHS
						</h3>
					</div>
					<div id='skill'>
						<h2>NODE</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>1 MONTHS</h3>
					</div>
					<div id='skill'>
						<h2>C</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>5 MONTHS</h3>
					</div>
					<div id='skill'>
						<h2>C++</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>10 MONTHS</h3>
					</div>
					<div id='skill'>
						<h2>SQL</h2>
						<div id='skillBar'>
							<div id='bars' />
							<span />
							<span />
							<span />
							<span />
						</div>
						<h3>
							{getMonthDifference(new Date('2022-08-30'), new Date())} MONTHS
						</h3>
					</div>
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default Skills;

function getMonthDifference(startDate: Date, endDate: Date) {
	return (
		endDate.getMonth() -
		startDate.getMonth() +
		12 * (endDate.getFullYear() - startDate.getFullYear())
	);
}
