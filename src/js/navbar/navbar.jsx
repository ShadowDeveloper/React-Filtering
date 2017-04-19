import React from 'react';

class Navbar extends React.Component{ //ES6 way
	render(){
		return(
		<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">Logo</a>
					<ul id="nav-mobile" className="right">
						<li><a href="sass.html">Sass</a></li>
						<li><a href="badges.html">Components</a></li>
						<li><a href="collapsible.html">JavaScript</a></li>
					</ul>
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