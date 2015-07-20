var React = require('react');
var data = require('../data.json').home;


var Home = React.createClass({
	render: function () {
		return (
			<header>
				<h1>{data.title}</h1>
				<p>{data.description}</p>
			</header>
		);
	}
});

module.exports = Home;