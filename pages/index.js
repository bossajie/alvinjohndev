import Introduction from '../components/introduction'
import NavigationBar from '../components/navigation'
import htmlcss from '../public/static/images/stacks/htmlcss.png'
import javascript from '../public/static/images/stacks/javascript.png'
import react from '../public/static/images/stacks/react.png'
import node from '../public/static/images/stacks/node.png'

const Homepage = () => (
	<div>
		<NavigationBar />
		<Introduction />
		<section className="container-fluid" id="about-me">
			<div className="row jumbotron">
				<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
					<p className="lead">
						Experienced full stack developer and a key player with the ability to work under pressure.
					</p>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
					<a href="#contact-me"><button type="button" className="btn btn-outline-secondary btn-lg">Hire me!</button></a>
				</div>
			</div>
		</section>
		<section id="welcome">
			<div className="container-fluid padding">
				<div className="row text-center">
					<div className="col-12">
						<h1 className="display-4">SKILLS & STACKS</h1>
					</div>
					<hr />
				</div>
			</div>
			<div className="container-fluid padding" id="stacks">
				<div className="row text-center padding">
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src={htmlcss} />
						<h3>HTML + CSS</h3>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src={javascript} />
						<h3>Javascript</h3>	
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src={react} />
						<h3>React.js</h3>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src={node} />
						<h3>Node.js</h3>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src="https://img.icons8.com/color/165/000000/mongodb.png" />
						<h3>MongoDB</h3>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-4">
						<img src="https://img.icons8.com/color/165/000000/python.png" />
						<h3>Python</h3>
					</div>
				</div>
				<div className="row welcome text-center">
					<div className="col-12">
						<p>|React Native | Redux | Socket.io | Redis | Django | Koa.js| etc.</p>
					</div>
					<hr />
				</div>
			</div>
		</section>
		{/* Contact me */}
		<section className="container-fluid padding" id="contact-me">
			<div className="row text-center padding">
				<div className="col-12">
					<h1 className="display-4">CONTACT ME</h1>
				</div>
				<div className="col-12 padding">
					<p><i className="fas fa-envelope"></i> nolasco.ajie@gmail.com</p>
					<p><i className="fab fa-skype"></i> live:nolasco.ajie</p>
					<p><i className="fab fa-telegram"></i> <a target="_blank" href="https://t.me/alvin_john">alvin_john</a></p>
				</div>
				<div className="col-12 social padding">
					<a target="_blank" href="https://github.com/bossajie/"><i className="fab fa-github"></i></a>
					<a target="_blank" href="https://www.linkedin.com/in/ajnolasco/"><i className="fab fa-linkedin"></i></a>
					<a target="_blank" href="https://www.facebook.com/bossajie"><i className="fab fa-facebook"></i></a>
					<a target="_blank" href="https://twitter.com/ajieeezy"><i className="fab fa-twitter"></i></a>
				</div>
			</div>
		</section>
	</div>
);

export default Homepage;