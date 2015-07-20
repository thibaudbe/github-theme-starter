var React = require('react');
var NavBar = require('./partials/NavBar.jsx');


var App = React.createClass({
	render: function () {
		return (
			<div>
				<NavBar/>
				<hr/>
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
});

module.exports = App;