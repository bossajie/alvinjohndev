import './index.scss'

const NavigationBar = () => (
	<nav className="navbar sticky-top navbar-dark navbar-expand-sm">
		<div className="container-fluid">
			<a className="navbar-brand" href="#"><h3>{`< AJ />`}</h3></a>
			<button className="navbar-toggler" type="button" 
				data-toggle="collapse"
				data-target="#navbarResponsive">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#about-me">About Me</a>
					</li>
					{/* <li className="nav-item active">
						<a className="nav-link" href="#projects">Projects</a>
					</li> */}
					<li className="nav-item active">
						<a className="nav-link" href="#contact-me">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
)

export default NavigationBar;