import React from 'react';

class Navbar extends React.Component{ //ES6
	render(){
		let color = 'nav-wrapper ' + this.props.navcolor;
		return(
		<nav>
				<div className={color}>
					<div className="container">
						<a href="#" className="brand-logo">{this.props.titulo}</a>
						<ul id="nav-mobile" className="right">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">JavaScript</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
};


/*var Navbar = React.createClass({ //React JSX
	render: function(){
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">Logo test</a>
					<ul id="nav-mobile" className="right">
						<li><a href="sass.html">Sass</a></li>
						<li><a href="badges.html">Components</a></li>
						<li><a href="collapsible.html">JavaScript</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});*/

export default Navbar;